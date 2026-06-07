package com.worksystem.service;

import com.worksystem.dto.BoardDTO;
import com.worksystem.dto.BoardPostDTO;
import com.worksystem.entity.Board;
import com.worksystem.mapper.BoardMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.NoSuchElementException;

/**
 * 게시판 서비스 — 게시판 정의 CRUD + 게시글 CRUD (행 소유자 권한)
 *
 * 예외는 삼키지 않고 전파한다 → GlobalExceptionHandler가 표준 실패 응답으로 변환.
 */
@Slf4j
@Service
@RequiredArgsConstructor
public class BoardService {

    private final BoardMapper boardMapper;

    // ===== 게시판 정의 (ADMIN) =====

    public List<Board> getBoards() {
        return boardMapper.findBoards();
    }

    /**
     * 게시판 정의 일괄 저장 (IBSheet status 'I'/'U'/'D' — D 먼저, 공통코드 전례)
     */
    @Transactional
    public boolean saveBoards(List<BoardDTO> boards) {
        log.info("게시판 정의 저장 요청 - {}건", boards.size());

        // 상태/입력 검증은 status별로 분기 — D 행은 식별키만, I·U 행만 코드/이름 검증
        // (컨트롤러 @Valid는 D 행에도 @NotBlank를 요구해 API 단독 삭제가 400이 되므로 서비스로 옮김)
        boards.forEach(this::validateForSave);
        for (BoardDTO dto : boards) {
            if ("D".equals(dto.getStatus())) deleteBoard(dto);
        }
        for (BoardDTO dto : boards) {
            switch (dto.getStatus()) {
                case "U" -> updateBoard(dto);
                case "I" -> createBoard(dto);
            }
        }
        return true;
    }

    private void validateForSave(BoardDTO dto) {
        requireValidStatus(dto.getStatus());
        if ("D".equals(dto.getStatus())) {
            // 삭제는 식별키(id 또는 boardCode)만 있으면 충분
            if (dto.getId() == null && (dto.getBoardCode() == null || dto.getBoardCode().isBlank())) {
                throw new IllegalArgumentException("삭제할 게시판 식별자(id 또는 boardCode)가 없습니다.");
            }
            return;
        }
        // I·U: 게시판 코드/이름 필수 + 코드 형식 검사
        if (dto.getBoardCode() == null || dto.getBoardCode().isBlank()) {
            throw new IllegalArgumentException("게시판 코드는 필수입니다.");
        }
        if (!dto.getBoardCode().matches("[a-z0-9-]+")) {
            throw new IllegalArgumentException("게시판 코드는 소문자 영문/숫자/하이픈만 사용할 수 있습니다: " + dto.getBoardCode());
        }
        if (dto.getBoardName() == null || dto.getBoardName().isBlank()) {
            throw new IllegalArgumentException("게시판명은 필수입니다.");
        }
    }

    private void createBoard(BoardDTO dto) {
        if (boardMapper.findBoardByCode(dto.getBoardCode()) != null) {
            throw new IllegalArgumentException("이미 존재하는 게시판 코드입니다: " + dto.getBoardCode());
        }
        boardMapper.insertBoard(dto);
    }

    private void updateBoard(BoardDTO dto) {
        Board existing = findExistingBoard(dto.getId(), dto.getBoardCode());
        // 비즈니스 키 변경 금지 (URL/FK 보호)
        if (!existing.getBoardCode().equals(dto.getBoardCode())) {
            throw new IllegalArgumentException("게시판 코드는 변경할 수 없습니다: " + existing.getBoardCode());
        }
        dto.setId(existing.getId());
        boardMapper.updateBoard(dto);
    }

    private void deleteBoard(BoardDTO dto) {
        // 신규 미저장 행(id 없음)이나 이미 사라진 행은 삭제 대상이 없으므로 no-op
        // (프론트는 Added 행을 removeRow로 페이로드에서 제외하지만, API 직접 호출 방어)
        Board existing = (dto.getId() != null)
                ? boardMapper.findBoardById(dto.getId())
                : (dto.getBoardCode() != null ? boardMapper.findBoardByCode(dto.getBoardCode()) : null);
        if (existing == null) {
            log.info("삭제 대상 게시판 없음 — 건너뜀 (id={}, code={})", dto.getId(), dto.getBoardCode());
            return;
        }
        // 게시글은 FK ON DELETE CASCADE (관리 화면에서 확인창 안내)
        boardMapper.deleteBoard(existing.getId());
    }

    private Board findExistingBoard(Long id, String boardCode) {
        if (id == null && (boardCode == null || boardCode.isBlank())) {
            throw new IllegalArgumentException("게시판 식별자(id 또는 boardCode)가 없습니다.");
        }
        Board existing = (id != null)
                ? boardMapper.findBoardById(id)
                : boardMapper.findBoardByCode(boardCode);
        if (existing == null) {
            throw new NoSuchElementException("게시판을 찾을 수 없습니다: " + (id != null ? "seq=" + id : boardCode));
        }
        return existing;
    }

    private void requireValidStatus(String status) {
        if (!"I".equals(status) && !"U".equals(status) && !"D".equals(status)) {
            throw new IllegalArgumentException("알 수 없는 행 상태입니다: " + status);
        }
    }

    // ===== 게시판 조회 (페이지 헤더용) =====

    /**
     * 활성 게시판 조회 — 미존재/비활성은 404 (설계 §5).
     * 더불어 게시판별 메뉴 권한(can_read)을 검사 — 권한 없으면 403 (RBAC: "그룹 = 접근 권한").
     * ADMIN은 모든 게시판 접근. 메뉴 미등록 게시판은 ADMIN만 접근 가능(권한 행이 없으므로).
     */
    public Board requireActiveBoard(String boardCode) {
        Board board = boardMapper.findBoardByCode(boardCode);
        if (board == null || !Boolean.TRUE.equals(board.getIsActive())) {
            throw new NoSuchElementException("게시판을 찾을 수 없습니다: " + boardCode);
        }
        requireReadPermission(boardCode);
        return board;
    }

    // ===== 게시글 =====

    public List<BoardPostDTO> getPosts(String boardCode, String title, String author) {
        requireActiveBoard(boardCode);
        Map<String, Object> params = new HashMap<>();
        params.put("boardCode", boardCode);
        params.put("title", title);
        params.put("author", author);
        return boardMapper.findPosts(params);
    }

    /**
     * 게시글 상세 (조회수 증가)
     */
    @Transactional
    public BoardPostDTO getPost(String boardCode, Long postSeq) {
        requireActiveBoard(boardCode);
        BoardPostDTO post = requirePost(boardCode, postSeq);
        boardMapper.increaseViewCount(postSeq);
        post.setViewCount(post.getViewCount() + 1);  // 같은 트랜잭션의 +1 반영 (재조회 없이 응답 일관)
        return post;
    }

    /**
     * 게시글 작성 — 작성자는 서버 주입 (클라이언트 값 무시) + 쓰기 권한(can_write) 검사
     */
    @Transactional
    public void createPost(String boardCode, BoardPostDTO dto, String authorId, String authorName) {
        requireActiveBoard(boardCode);      // can_read 보장
        requireWritePermission(boardCode);  // 작성은 can_write 추가 요구
        dto.setBoardCode(boardCode);
        dto.setAuthorId(authorId);
        dto.setAuthorName(authorName);
        boardMapper.insertPost(dto);
    }

    /**
     * 게시글 수정 — 작성자 본인 또는 ADMIN만 (행 소유자 권한, 서버가 단일 소스)
     */
    @Transactional
    public void updatePost(String boardCode, Long postSeq, BoardPostDTO dto) {
        requireActiveBoard(boardCode);
        BoardPostDTO existing = requirePost(boardCode, postSeq);
        requireOwnerOrAdmin(existing.getAuthorId());
        dto.setPostSeq(postSeq);
        boardMapper.updatePost(dto);
    }

    /**
     * 게시글 삭제 — 작성자 본인 또는 ADMIN만
     */
    @Transactional
    public void deletePost(String boardCode, Long postSeq) {
        requireActiveBoard(boardCode);
        BoardPostDTO existing = requirePost(boardCode, postSeq);
        requireOwnerOrAdmin(existing.getAuthorId());
        boardMapper.deletePost(postSeq);
    }

    // 비활성(is_active=FALSE) 게시글은 목록과 동일하게 직접 조회에서도 숨김 → 404
    // (표준 UI는 글을 비활성화하지 않으므로 방어적. 일관성·정보노출 방지)
    private BoardPostDTO requirePost(String boardCode, Long postSeq) {
        BoardPostDTO post = boardMapper.findPostBySeq(postSeq);
        if (post == null || !post.getBoardCode().equals(boardCode)
                || !Boolean.TRUE.equals(post.getIsActive())) {
            throw new NoSuchElementException("게시글을 찾을 수 없습니다: " + postSeq);
        }
        return post;
    }

    /**
     * 행 소유자 검사 — UserService가 그룹ID를 ROLE_<대문자>로 변환하므로 ADMIN 그룹 = ROLE_ADMIN
     */
    private void requireOwnerOrAdmin(String authorId) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String currentUserId = auth.getName();
        if (!isAdmin(auth) && !currentUserId.equals(authorId)) {
            throw new IllegalArgumentException("본인이 작성한 글만 수정/삭제할 수 있습니다.");
        }
    }

    // ===== RBAC 메뉴 권한 (menu_id = 'board-{boardCode}') =====

    private void requireReadPermission(String boardCode) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (isAdmin(auth)) return;
        if (boardMapper.countReadPermission(auth.getName(), menuId(boardCode)) == 0) {
            throw new AccessDeniedException("이 게시판에 접근할 권한이 없습니다.");
        }
    }

    private void requireWritePermission(String boardCode) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (isAdmin(auth)) return;
        if (boardMapper.countWritePermission(auth.getName(), menuId(boardCode)) == 0) {
            throw new AccessDeniedException("이 게시판에 글을 작성할 권한이 없습니다.");
        }
    }

    private boolean isAdmin(Authentication auth) {
        return auth.getAuthorities().stream()
                .anyMatch(a -> "ROLE_ADMIN".equals(a.getAuthority()));
    }

    // 게시판 코드 → 메뉴 ID 규약 (설계 §3, schema.sql 시드와 일치)
    private String menuId(String boardCode) {
        return "board-" + boardCode;
    }
}
