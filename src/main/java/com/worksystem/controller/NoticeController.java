package com.worksystem.controller;

import com.worksystem.dto.NoticeDTO;
import com.worksystem.dto.UserDTO;
import com.worksystem.entity.Notice;
import com.worksystem.service.NoticeService;
import com.worksystem.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 공지사항 컨트롤러
 */
@Controller
@RequestMapping("/api/notices")
public class NoticeController {

    private static final Logger logger = LoggerFactory.getLogger(NoticeController.class);

    @Autowired
    private NoticeService noticeService;
    
    @Autowired
    private UserService userService;

    /**
     * 모든 공지사항 조회
     */
    @GetMapping
    @ResponseBody
    public ResponseEntity<List<NoticeDTO>> getAllNotices() {
        try {
            List<NoticeDTO> notices = noticeService.getAllNotices();
            return ResponseEntity.ok(notices);
        } catch (Exception e) {
            logger.error("공지사항 조회 실패", e);
            return ResponseEntity.internalServerError().build();
        }
    }

    /**
     * 공지사항 검색
     */
    @GetMapping("/search")
    @ResponseBody
    public ResponseEntity<List<NoticeDTO>> searchNotices(
            @RequestParam(required = false) String content,
            @RequestParam(required = false) String name) {
        
        try {
            List<NoticeDTO> notices = noticeService.searchNotices(content, name);
            return ResponseEntity.ok(notices);
        } catch (Exception e) {
            logger.error("공지사항 검색 실패", e);
            return ResponseEntity.internalServerError().build();
        }
    }

    /**
     * 공지사항 상세 조회
     */
    @GetMapping("/{seq}")
    @ResponseBody
    public ResponseEntity<Notice> getNoticeBySeq(@PathVariable Long seq) {
        try {
            Notice notice = noticeService.getNoticeBySeq(seq);
            if (notice == null) {
                return ResponseEntity.notFound().build();
            }
            
            // 조회수 증가
            noticeService.increaseViewCount(seq);
            
            return ResponseEntity.ok(notice);
        } catch (Exception e) {
            logger.error("공지사항 상세 조회 실패", e);
            return ResponseEntity.internalServerError().build();
        }
    }

    /**
     * 공지사항 등록
     */
    @PostMapping
    @ResponseBody
    public ResponseEntity<Map<String, Object>> createNotice(@RequestBody NoticeDTO noticeDTO) {
        try {
            // 현재 로그인한 사용자 정보 가져오기
            Authentication auth = SecurityContextHolder.getContext().getAuthentication();
            String currentUserId = auth.getName();
            
            Notice notice = noticeService.convertToEntity(noticeDTO);
            
            // 현재 로그인한 사용자의 실제 정보 조회
            UserDTO currentUser = userService.findUserWithGroups(currentUserId);
            if (currentUser != null) {
                notice.setAuthorId(currentUser.getUserId());
                notice.setAuthorName(currentUser.getName());
            } else {
                // 사용자 정보가 없는 경우 오류
                Map<String, Object> errorResponse = new HashMap<>();
                errorResponse.put("success", false);    
                errorResponse.put("message", "사용자 정보를 찾을 수 없습니다.");
                return ResponseEntity.badRequest().body(errorResponse);
            }
            
            int result = noticeService.createNotice(notice);
            
            Map<String, Object> response = new HashMap<>();
            if (result > 0) {
                response.put("success", true);
                response.put("message", "공지사항이 등록되었습니다.");
            } else {
                response.put("success", false);
                response.put("message", "공지사항 등록에 실패했습니다.");
            }
            
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            logger.error("공지사항 등록 실패", e);
            Map<String, Object> errorResponse = new HashMap<>();
            errorResponse.put("success", false);
            errorResponse.put("message", "등록 중 오류가 발생했습니다.");
            return ResponseEntity.internalServerError().body(errorResponse);
        }
    }

    /**
     * 공지사항 수정
     */
    @PutMapping("/{seq}")
    @ResponseBody
    public ResponseEntity<Map<String, Object>> updateNotice(@PathVariable Long seq, @RequestBody NoticeDTO noticeDTO) {
        try {
            Notice notice = noticeService.convertToEntity(noticeDTO);
            notice.setSeq(seq);
            
            int result = noticeService.updateNotice(notice);
            
            Map<String, Object> response = new HashMap<>();
            if (result > 0) {
                response.put("success", true);
                response.put("message", "공지사항이 수정되었습니다.");
            } else {
                response.put("success", false);
                response.put("message", "공지사항 수정에 실패했습니다.");
            }
            
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            logger.error("공지사항 수정 실패", e);
            Map<String, Object> errorResponse = new HashMap<>();
            errorResponse.put("success", false);
            errorResponse.put("message", "수정 중 오류가 발생했습니다.");
            return ResponseEntity.internalServerError().body(errorResponse);
        }
    }

    /**
     * 공지사항 삭제
     */
    @DeleteMapping("/{seq}")
    @ResponseBody
    public ResponseEntity<Map<String, Object>> deleteNotice(@PathVariable Long seq) {
        try {
            int result = noticeService.deleteNotice(seq);
            
            Map<String, Object> response = new HashMap<>();
            if (result > 0) {
                response.put("success", true);
                response.put("message", "공지사항이 삭제되었습니다.");
            } else {
                response.put("success", false);
                response.put("message", "공지사항 삭제에 실패했습니다.");
            }
            
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            logger.error("공지사항 삭제 실패", e);
            Map<String, Object> errorResponse = new HashMap<>();
            errorResponse.put("success", false);
            errorResponse.put("message", "삭제 중 오류가 발생했습니다.");
            return ResponseEntity.internalServerError().body(errorResponse);
        }
    }

    /**
     * 활성화된 공지사항만 조회 (사용자용)
     */
    @GetMapping("/active")
    @ResponseBody
    public ResponseEntity<List<NoticeDTO>> getActiveNotices() {
        try {
            List<NoticeDTO> notices = noticeService.getActiveNotices();
            return ResponseEntity.ok(notices);
        } catch (Exception e) {
            logger.error("활성 공지사항 조회 실패", e);
            return ResponseEntity.internalServerError().build();
        }
    }

    /**
     * 상단 고정 공지사항 조회
     */
    @GetMapping("/pinned")
    @ResponseBody
    public ResponseEntity<List<NoticeDTO>> getPinnedNotices() {
        try {
            List<NoticeDTO> notices = noticeService.getPinnedNotices();
            return ResponseEntity.ok(notices);
        } catch (Exception e) {
            logger.error("고정 공지사항 조회 실패", e);
            return ResponseEntity.internalServerError().build();
        }
    }

    /**
     * 일괄 처리 (IBSheet에서 사용)
     */
    @PostMapping("/batch")
    @ResponseBody
    public ResponseEntity<Map<String, Object>> batchProcess(@RequestBody List<NoticeDTO> notices) {
        try {
            Map<String, Object> response = new HashMap<>();
            int successCount = 0;
            int errorCount = 0;
            
            for (NoticeDTO noticeDTO : notices) {
                try {
                    Notice notice = noticeService.convertToEntity(noticeDTO);
                    
                    if (notice.getSeq() == null) {
                        // 신규 등록
                        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
                        String currentUserId = auth.getName();
                        notice.setAuthorName(currentUserId);
                        noticeService.createNotice(notice);
                    } else {
                        // 수정
                        noticeService.updateNotice(notice);
                    }
                    successCount++;
                } catch (Exception e) {
                    logger.error("일괄 처리 중 오류", e);
                    errorCount++;
                }
            }
            
            response.put("success", true);
            response.put("successCount", successCount);
            response.put("errorCount", errorCount);
            response.put("message", String.format("처리 완료: 성공 %d건, 실패 %d건", successCount, errorCount));
            
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            logger.error("일괄 처리 실패", e);
            Map<String, Object> errorResponse = new HashMap<>();
            errorResponse.put("success", false);
            errorResponse.put("message", "일괄 처리 중 오류가 발생했습니다.");
            return ResponseEntity.internalServerError().body(errorResponse);
        }
    }
}
