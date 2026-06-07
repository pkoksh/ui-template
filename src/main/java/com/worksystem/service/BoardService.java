package com.worksystem.service;

import com.worksystem.dto.BoardDTO;
import com.worksystem.dto.BoardPostDTO;
import com.worksystem.entity.Board;
import com.worksystem.mapper.BoardMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
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

        boards.forEach(dto -> requireValidStatus(dto.getStatus()));
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
        Board existing = findExistingBoard(dto.getId(), dto.getBoardCode());
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
     * 활성 게시판 조회 — 미존재/비활성은 404 (설계 §5)
     */
    public Board requireActiveBoard(String boardCode) {
        Board board = boardMapper.findBoardByCode(boardCode);
        if (board == null || !Boolean.TRUE.equals(board.getIsActive())) {
            throw new NoSuchElementException("게시판을 찾을 수 없습니다: " + boardCode);
        }
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
        return post;
    }

    /**
     * 게시글 작성 — 작성자는 서버 주입 (클라이언트 값 무시)
     */
    @Transactional
    public void createPost(String boardCode, BoardPostDTO dto, String authorId, String authorName) {
        requireActiveBoard(boardCode);
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

    private BoardPostDTO requirePost(String boardCode, Long postSeq) {
        BoardPostDTO post = boardMapper.findPostBySeq(postSeq);
        if (post == null || !post.getBoardCode().equals(boardCode)) {
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
        boolean isAdmin = auth.getAuthorities().stream()
                .anyMatch(a -> "ROLE_ADMIN".equals(a.getAuthority()));
        if (!isAdmin && !currentUserId.equals(authorId)) {
            throw new IllegalArgumentException("본인이 작성한 글만 수정/삭제할 수 있습니다.");
        }
    }
}
