package com.worksystem.config;

import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

/**
 * 로그인 실패 처리 핸들러
 */
public class CustomAuthenticationFailureHandler implements AuthenticationFailureHandler {

    private final ObjectMapper objectMapper = new ObjectMapper();

    @Override
    public void onAuthenticationFailure(HttpServletRequest request,
                                      HttpServletResponse response,
                                      AuthenticationException exception)
            throws IOException, ServletException {
        
        // AJAX 요청인지 확인
        String contentType = request.getContentType();
        String requestWith = request.getHeader("X-Requested-With");
        
        if ((contentType != null && contentType.contains("application/json")) ||
            "XMLHttpRequest".equals(requestWith)) {
            
            // AJAX 요청인 경우 JSON 응답
            response.setContentType("application/json;charset=UTF-8");
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            
            Map<String, Object> result = new HashMap<>();
            result.put("success", false);
            result.put("message", "로그인 실패: 아이디 또는 비밀번호를 확인해주세요.");
            result.put("error", exception.getMessage());
            
            response.getWriter().write(objectMapper.writeValueAsString(result));
        } else {
            // 일반 요청인 경우 리다이렉트
            response.sendRedirect("/login?error");
        }
    }
}
