package com.worksystem.config;

import com.worksystem.service.SessionLogService;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.LockedException;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationFailureHandler;
import org.springframework.stereotype.Component;

import java.io.IOException;

/**
 * 로그인 실패 핸들러 — 실패 이력(LOGIN_FAIL) 기록 후 기존 동작(/login.html?error=true) 유지
 *
 * 미존재 ID는 DaoAuthenticationProvider의 hideUserNotFoundExceptions=true(기본값,
 * 사용자 열거 방어)로 BadCredentialsException에 통합되어 BAD_CREDENTIALS로 기록된다 (설계 §6).
 */
@Component
public class LoginFailureHandler extends SimpleUrlAuthenticationFailureHandler {

    @Autowired
    private SessionLogService sessionLogService;

    public LoginFailureHandler() {
        // 기존 .failureUrl("/login.html?error=true") 동작 유지
        setDefaultFailureUrl("/login.html?error=true");
    }

    @Override
    public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response,
                                        AuthenticationException exception) throws IOException, ServletException {
        String attemptedUserId = request.getParameter("userId");
        sessionLogService.recordLoginFail(attemptedUserId, resolveFailReason(exception), request);

        super.onAuthenticationFailure(request, response, exception);
    }

    private String resolveFailReason(AuthenticationException exception) {
        if (exception instanceof DisabledException || exception instanceof LockedException) {
            return "DISABLED";
        }
        // BadCredentials(비밀번호 불일치 + 미존재 ID 통합) 및 기타
        return "BAD_CREDENTIALS";
    }
}
