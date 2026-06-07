package com.worksystem.config;

import com.worksystem.service.SessionLogService;
import com.worksystem.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.SavedRequestAwareAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * 로그인 성공 시 처리하는 핸들러 — last_login_at 갱신 + 접속 이력(LOGIN) 기록
 */
@Slf4j
@Component
public class LoginSuccessHandler extends SavedRequestAwareAuthenticationSuccessHandler {

    @Autowired
    private UserService userService;

    @Autowired
    private SessionLogService sessionLogService;

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
                                      Authentication authentication) throws ServletException, IOException {

        String userId = authentication.getName();
        log.info("로그인 성공 - userId: {}", userId);

        // 마지막 로그인 시간 갱신 (실패해도 로그인 흐름은 진행)
        try {
            userService.updateLastLoginAt(userId);
        } catch (Exception e) {
            log.error("로그인 시간 업데이트 중 오류 - userId: {}", userId, e);
        }

        // 접속 이력 기록 (SessionLogService 내부에서 fail-open 처리)
        jakarta.servlet.http.HttpSession session = request.getSession(false);
        sessionLogService.recordLogin(userId, request, session != null ? session.getId() : null);

        // 메인 페이지로 리다이렉트
        response.sendRedirect("/");
    }
}
