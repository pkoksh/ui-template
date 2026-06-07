package com.worksystem.controller;

import com.worksystem.common.ApiResponse;
import com.worksystem.dto.ActiveSessionDTO;
import com.worksystem.dto.LoginHistoryDTO;
import com.worksystem.service.SessionLogService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

/**
 * 접속 로그 REST 컨트롤러 (ADMIN 전용 — SecurityConfig 인가)
 *
 * 응답은 공통 ApiResponse {success, message, data} 표준을 따른다.
 */
@Slf4j
@RestController
@RequestMapping("/api/session-logs")
@RequiredArgsConstructor
public class SessionLogController {

    private final SessionLogService sessionLogService;

    /**
     * 로그인 이력 조회 (기간 미지정 시 최근 7일, 최신순 LIMIT 1000)
     */
    @GetMapping("/history")
    public ApiResponse<List<LoginHistoryDTO>> getHistory(
            @RequestParam(required = false) String userId,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate fromDate,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate toDate) {
        return ApiResponse.ok(sessionLogService.getHistory(userId, fromDate, toDate));
    }

    /**
     * 활성 세션 목록 조회 (본인 세션에 current=true 표시)
     */
    @GetMapping("/sessions")
    public ApiResponse<List<ActiveSessionDTO>> getActiveSessions(HttpServletRequest request) {
        String currentSessionId = request.getSession(false) != null ? request.getSession(false).getId() : null;
        return ApiResponse.ok(sessionLogService.getActiveSessions(currentSessionId));
    }

    /**
     * 세션 강제 만료 — 자기 자신의 세션은 400 (Spring Session 사용 시 getSession().getId() == SESSION_ID)
     */
    @DeleteMapping("/sessions/{sessionId}")
    public ApiResponse<Void> expireSession(@PathVariable String sessionId, HttpServletRequest request) {
        log.info("세션 강제 만료 API 호출 - sessionId: {}", sessionId);

        String currentSessionId = request.getSession(false) != null ? request.getSession(false).getId() : null;
        sessionLogService.expireSession(sessionId, currentSessionId);
        return ApiResponse.okMessage("세션이 강제 만료되었습니다. 해당 사용자는 다음 요청 시 로그아웃됩니다.");
    }
}
