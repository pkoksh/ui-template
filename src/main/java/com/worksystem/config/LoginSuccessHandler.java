package com.worksystem.config;

import com.worksystem.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.SavedRequestAwareAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * 로그인 성공 시 처리하는 핸들러
 */
@Component
public class LoginSuccessHandler extends SavedRequestAwareAuthenticationSuccessHandler {
    
    @Autowired
    private UserService userService;
    
    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
                                      Authentication authentication) throws ServletException, IOException {
        
        System.out.println("=== LoginSuccessHandler.onAuthenticationSuccess 호출됨 ===");
        
        // 로그인한 사용자의 마지막 로그인 시간 업데이트
        String userId = authentication.getName();
        System.out.println("로그인 성공한 사용자: " + userId);
        
        try {
            userService.updateLastLoginAt(userId);
            System.out.println("로그인 시간 업데이트 호출 완료");
        } catch (Exception e) {
            System.err.println("로그인 시간 업데이트 중 오류 발생: " + e.getMessage());
            e.printStackTrace();
        }
        
        // 메인 페이지로 리다이렉트
        response.sendRedirect("/");
        System.out.println("리다이렉트 완료: /");
    }
}
