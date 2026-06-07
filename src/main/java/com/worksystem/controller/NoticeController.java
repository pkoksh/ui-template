package com.worksystem.controller;

import com.worksystem.common.ApiResponse;
import com.worksystem.dto.NoticeDTO;
import com.worksystem.dto.UserDTO;
import com.worksystem.entity.Notice;
import com.worksystem.service.NoticeService;
import com.worksystem.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

/**
 * 공지사항 REST 컨트롤러
 *
 * 응답은 공통 ApiResponse {success, message, data} 표준을 따른다.
 * 예외는 GlobalExceptionHandler가 표준 실패 응답으로 변환한다.
 */
@Slf4j
@RestController
@RequestMapping("/api/notices")
@RequiredArgsConstructor
public class NoticeController {

    private final NoticeService noticeService;
    private final UserService userService;

    /**
     * 모든 공지사항 조회
     */
    @GetMapping
    public ApiResponse<List<NoticeDTO>> getAllNotices() {
        return ApiResponse.ok(noticeService.getAllNotices());
    }

    /**
     * 공지사항 검색
     */
    @GetMapping("/search")
    public ApiResponse<List<NoticeDTO>> searchNotices(
            @RequestParam(required = false) String content,
            @RequestParam(required = false) String name) {
        return ApiResponse.ok(noticeService.searchNotices(content, name));
    }

    /**
     * 공지사항 상세 조회 (조회수 증가)
     */
    @GetMapping("/{seq}")
    public ApiResponse<Notice> getNoticeBySeq(@PathVariable Long seq) {
        Notice notice = noticeService.getNoticeBySeq(seq);
        if (notice == null) {
            throw new NoSuchElementException("공지사항을 찾을 수 없습니다: " + seq);
        }
        noticeService.increaseViewCount(seq);
        return ApiResponse.ok(notice);
    }

    /**
     * 공지사항 등록 (작성자는 로그인 사용자로 설정)
     */
    @PostMapping
    public ApiResponse<Void> createNotice(@RequestBody NoticeDTO noticeDTO) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String currentUserId = auth.getName();

        UserDTO currentUser = userService.findUserWithGroups(currentUserId);
        if (currentUser == null) {
            throw new IllegalArgumentException("사용자 정보를 찾을 수 없습니다.");
        }

        Notice notice = noticeService.convertToEntity(noticeDTO);
        notice.setAuthorId(currentUser.getUserId());
        notice.setAuthorName(currentUser.getName());

        int result = noticeService.createNotice(notice);
        if (result <= 0) {
            throw new IllegalStateException("공지사항 등록에 실패했습니다.");
        }
        return ApiResponse.okMessage("공지사항이 등록되었습니다.");
    }

    /**
     * 공지사항 수정
     */
    @PutMapping("/{seq}")
    public ApiResponse<Void> updateNotice(@PathVariable Long seq, @RequestBody NoticeDTO noticeDTO) {
        Notice notice = noticeService.convertToEntity(noticeDTO);
        notice.setSeq(seq);

        int result = noticeService.updateNotice(notice);
        if (result <= 0) {
            throw new IllegalStateException("공지사항 수정에 실패했습니다.");
        }
        return ApiResponse.okMessage("공지사항이 수정되었습니다.");
    }

    /**
     * 공지사항 삭제
     */
    @DeleteMapping("/{seq}")
    public ApiResponse<Void> deleteNotice(@PathVariable Long seq) {
        int result = noticeService.deleteNotice(seq);
        if (result <= 0) {
            throw new IllegalStateException("공지사항 삭제에 실패했습니다.");
        }
        return ApiResponse.okMessage("공지사항이 삭제되었습니다.");
    }

    /**
     * 활성화된 공지사항만 조회 (사용자용)
     */
    @GetMapping("/active")
    public ApiResponse<List<NoticeDTO>> getActiveNotices() {
        return ApiResponse.ok(noticeService.getActiveNotices());
    }

    /**
     * 상단 고정 공지사항 조회
     */
    @GetMapping("/pinned")
    public ApiResponse<List<NoticeDTO>> getPinnedNotices() {
        return ApiResponse.ok(noticeService.getPinnedNotices());
    }

}
