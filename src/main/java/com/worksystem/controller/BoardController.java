package com.worksystem.controller;

import com.worksystem.common.ApiResponse;
import com.worksystem.dto.BoardDTO;
import com.worksystem.dto.BoardPostDTO;
import com.worksystem.dto.UserDTO;
import com.worksystem.entity.Board;
import com.worksystem.service.BoardService;
import com.worksystem.service.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * 게시판 REST 컨트롤러
 *
 * 인가(SecurityConfig): 게시글(/{code}/posts/**)·헤더(/{code}/info)는 인증 사용자,
 * 그 외 /api/boards/**(정의 관리)는 ADMIN 전용.
 * 게시글 수정/삭제는 서비스에서 행 소유자(본인/ADMIN) 검사.
 */
@Slf4j
@RestController
@RequestMapping("/api/boards")
@RequiredArgsConstructor
@Validated
public class BoardController {

    private final BoardService boardService;
    private final UserService userService;

    // ===== 게시판 정의 (ADMIN) =====

    /**
     * 게시판 정의 목록 (관리 그리드)
     */
    @GetMapping
    public ApiResponse<List<Board>> getBoards() {
        return ApiResponse.ok(boardService.getBoards());
    }

    /**
     * 게시판 정의 일괄 저장 (IBSheet status 'I'/'U'/'D')
     */
    @PostMapping
    public ApiResponse<Void> saveBoards(@RequestBody List<@Valid BoardDTO> boards) {
        log.info("게시판 정의 저장 API 호출 - {}건", boards.size());
        boardService.saveBoards(boards);
        return ApiResponse.okMessage("게시판이 성공적으로 저장되었습니다.");
    }

    // ===== 게시판 페이지 헤더 (인증 사용자) =====

    /**
     * 게시판 단건 조회 — 미존재/비활성 404
     */
    @GetMapping("/{boardCode}/info")
    public ApiResponse<Board> getBoardInfo(@PathVariable String boardCode) {
        return ApiResponse.ok(boardService.requireActiveBoard(boardCode));
    }

    // ===== 게시글 (인증 사용자) =====

    /**
     * 게시글 목록 (고정글 우선 + 최신순, LIMIT 1000)
     */
    @GetMapping("/{boardCode}/posts")
    public ApiResponse<List<BoardPostDTO>> getPosts(
            @PathVariable String boardCode,
            @RequestParam(required = false) String title,
            @RequestParam(required = false) String author) {
        return ApiResponse.ok(boardService.getPosts(boardCode, title, author));
    }

    /**
     * 게시글 상세 (조회수 증가)
     */
    @GetMapping("/{boardCode}/posts/{postSeq}")
    public ApiResponse<BoardPostDTO> getPost(@PathVariable String boardCode, @PathVariable Long postSeq) {
        return ApiResponse.ok(boardService.getPost(boardCode, postSeq));
    }

    /**
     * 게시글 작성 (작성자 서버 주입)
     */
    @PostMapping("/{boardCode}/posts")
    public ApiResponse<Void> createPost(@PathVariable String boardCode,
                                        @Valid @RequestBody BoardPostDTO dto) {
        String userId = currentUserId();
        UserDTO user = userService.findUserWithGroups(userId);
        if (user == null) {
            throw new IllegalArgumentException("사용자 정보를 찾을 수 없습니다.");
        }
        boardService.createPost(boardCode, dto, user.getUserId(), user.getName());
        return ApiResponse.okMessage("게시글이 등록되었습니다.");
    }

    /**
     * 게시글 수정 — 본인 또는 ADMIN
     */
    @PutMapping("/{boardCode}/posts/{postSeq}")
    public ApiResponse<Void> updatePost(@PathVariable String boardCode, @PathVariable Long postSeq,
                                        @Valid @RequestBody BoardPostDTO dto) {
        boardService.updatePost(boardCode, postSeq, dto);
        return ApiResponse.okMessage("게시글이 수정되었습니다.");
    }

    /**
     * 게시글 삭제 — 본인 또는 ADMIN
     */
    @DeleteMapping("/{boardCode}/posts/{postSeq}")
    public ApiResponse<Void> deletePost(@PathVariable String boardCode, @PathVariable Long postSeq) {
        boardService.deletePost(boardCode, postSeq);
        return ApiResponse.okMessage("게시글이 삭제되었습니다.");
    }

    private String currentUserId() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        return auth.getName();
    }
}
