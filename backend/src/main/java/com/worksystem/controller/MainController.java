package com.worksystem.controller;

import com.worksystem.entity.User;
import com.worksystem.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.Map;

/**
 * 메인 컨트롤러
 */
@Controller
public class MainController {

    @Autowired
    private UserService userService;

    /**
     * 메인 페이지 - 인증된 사용자에게 직접 index.html 제공
     */
    @GetMapping("/")
    public String index() {
        // 정적 파일을 직접 반환 (리다이렉트 없이)
        return "forward:/index.html";
    }

    /**
     * 현재 사용자 정보 API
     */
    @GetMapping("/api/user/current")
    @ResponseBody
    public Map<String, Object> getCurrentUser() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        Map<String, Object> response = new HashMap<>();
        
        if (auth != null && auth.isAuthenticated() && !"anonymousUser".equals(auth.getName())) {
            User user = userService.findByUserId(auth.getName());
            if (user != null) {
                response.put("success", true);
                response.put("user", Map.of(
                    "userId", user.getUserId(),
                    "name", user.getName(),
                    "email", user.getEmail(),
                    "department", user.getDepartment(),
                    "role", user.getRole(),
                    "roleDisplayName", getRoleDisplayName(user.getRole())
                ));
            } else {
                response.put("success", false);
                response.put("message", "사용자 정보를 찾을 수 없습니다.");
            }
        } else {
            response.put("success", false);
            response.put("message", "인증되지 않은 사용자입니다.");
        }
        
        return response;
    }

    /**
     * 시스템 상태 API
     */
    @GetMapping("/api/system/status")
    @ResponseBody
    public Map<String, Object> getSystemStatus() {
        Map<String, Object> status = new HashMap<>();
        status.put("status", "running");
        status.put("version", "1.0.0");
        status.put("timestamp", System.currentTimeMillis());
        return status;
    }

    /**
     * 역할 표시명 반환
     */
    private String getRoleDisplayName(String role) {
        switch (role) {
            case "ADMIN": return "관리자";
            case "MANAGER": return "팀장";
            case "USER": return "사용자";
            default: return role;
        }
    }
}
