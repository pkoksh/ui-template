package com.worksystem.config;

import com.worksystem.service.SessionLogService;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.logout.LogoutSuccessHandler;
import org.springframework.stereotype.Component;

import java.io.IOException;

/**
 * 로그아웃 이력 핸들러 — LOGOUT 기록 후 로그인 페이지로 리다이렉트
 *
 * 주의: .logoutSuccessUrl과 상호배타이므로 리다이렉트를 직접 수행한다 (설계 §6).
 * userId는 clearAuthentication 이후라 SecurityContext가 아닌 Authentication 파라미터에서 확보.
 */
@Component
public class LogoutHistoryHandler implements LogoutSuccessHandler {

    @Autowired
    private SessionLogService sessionLogService;

    @Override
    public void onLogoutSuccess(HttpServletRequest request, HttpServletResponse response,
                                Authentication authentication) throws IOException, ServletException {
        if (authentication != null) {
            sessionLogService.recordLogout(authentication.getName(), request);
        }
        // 기존 .logoutSuccessUrl("/login.html?logout") 동작 유지
        response.sendRedirect("/login.html?logout");
    }
}
