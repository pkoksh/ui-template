package com.worksystem.service;

import com.worksystem.common.RequestUtils;
import com.worksystem.dto.ActiveSessionDTO;
import com.worksystem.dto.LoginHistoryDTO;
import com.worksystem.mapper.SessionLogMapper;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.session.FindByIndexNameSessionRepository;
import org.springframework.session.Session;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.NoSuchElementException;

/**
 * 접속 로그 서비스 — 로그인 이력 기록/조회 + 활성 세션 조회/강제 만료
 *
 * 기록 메서드(record*)는 인증 흐름 안에서 호출되므로 실패해도 로그인/로그아웃을 막지 않도록
 * 내부에서 catch한다 (의도적 fail-open — 표준 '예외 전파'의 예외, 설계 §2-N1).
 */
@Slf4j
@Service
@RequiredArgsConstructor
public class SessionLogService {

    private final SessionLogMapper sessionLogMapper;
    private final FindByIndexNameSessionRepository<? extends Session> sessionRepository;

    // ===== 이력 기록 (fail-open) =====

    public void recordLogin(String userId, HttpServletRequest request, String sessionId) {
        record(userId, "LOGIN", null, request, sessionId);
    }

    public void recordLoginFail(String userId, String failReason, HttpServletRequest request) {
        record(userId, "LOGIN_FAIL", failReason, request, null);
    }

    public void recordLogout(String userId, HttpServletRequest request) {
        record(userId, "LOGOUT", null, request, null);
    }

    private void record(String userId, String eventType, String failReason,
                        HttpServletRequest request, String sessionId) {
        try {
            sessionLogMapper.insertHistory(
                    RequestUtils.truncate(userId, 20),   // 실패 시 공격자 입력일 수 있음 — 컬럼 길이로 절단
                    eventType,
                    failReason,
                    RequestUtils.getClientIp(request),
                    RequestUtils.getUserAgent(request),
                    sessionId);
        } catch (Exception e) {
            // 이력 기록 실패가 인증 흐름을 막지 않도록 로그만 남김
            log.error("접속 이력 기록 실패 - userId: {}, event: {}", userId, eventType, e);
        }
    }

    // ===== 이력 조회 =====

    /**
     * 로그인 이력 조회 — 기간 미지정 시 최근 7일, 최신순 LIMIT 1000 (매퍼)
     */
    public List<LoginHistoryDTO> getHistory(String userId, LocalDate fromDate, LocalDate toDate) {
        Map<String, Object> params = new HashMap<>();
        params.put("userId", userId);
        params.put("fromDate", fromDate != null ? fromDate : LocalDate.now().minusDays(7));
        params.put("toDate", toDate);
        return sessionLogMapper.findHistory(params);
    }

    // ===== 활성 세션 =====

    /**
     * 활성 세션 목록 — 조회자 본인의 세션에 current=true 표시 (화면에서 강제 만료 불가 안내)
     */
    public List<ActiveSessionDTO> getActiveSessions(String currentSessionId) {
        List<ActiveSessionDTO> sessions = sessionLogMapper.findActiveSessions();
        sessions.forEach(s -> s.setCurrent(s.getSessionId().equals(currentSessionId)));
        return sessions;
    }

    /**
     * 세션 강제 만료
     * - deleteById는 미존재 세션도 조용히 통과하므로 findById로 사전 확인 후 404 (설계 §5)
     * - 자기 자신의 세션은 차단 (실수로 스스로 로그아웃 방지)
     */
    public void expireSession(String sessionId, String currentSessionId) {
        if (sessionId.equals(currentSessionId)) {
            throw new IllegalArgumentException("현재 사용 중인 세션은 만료할 수 없습니다.");
        }
        if (sessionRepository.findById(sessionId) == null) {
            throw new NoSuchElementException("세션을 찾을 수 없습니다: " + sessionId);
        }
        sessionRepository.deleteById(sessionId);
        log.info("세션 강제 만료 - sessionId: {}", sessionId);
    }
}
