package com.worksystem.config;

import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

/**
 * 로그인 성공 처리 핸들러
 */
public class CustomAuthenticationSuccessHandler implements AuthenticationSuccessHandler {

    private final ObjectMapper objectMapper = new ObjectMapper();

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, 
                                      HttpServletResponse response,
                                      Authentication authentication) 
            throws IOException, ServletException {
        
        // AJAX 요청인지 확인
        String contentType = request.getContentType();
        String requestWith = request.getHeader("X-Requested-With");
        
        if ((contentType != null && contentType.contains("application/json")) ||
            "XMLHttpRequest".equals(requestWith)) {
            
            // AJAX 요청인 경우 JSON 응답
            response.setContentType("application/json;charset=UTF-8");
            response.setStatus(HttpServletResponse.SC_OK);
            
            Map<String, Object> result = new HashMap<>();
            result.put("success", true);
            result.put("message", "로그인 성공");
            result.put("redirectUrl", "/");
            result.put("user", Map.of(
                "username", authentication.getName(),
                "authorities", authentication.getAuthorities()
            ));
            
            response.getWriter().write(objectMapper.writeValueAsString(result));
        } else {
            // 일반 요청인 경우 리다이렉트
            response.sendRedirect("/");
        }
    }
}
