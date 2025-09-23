package com.worksystem.controller;

import com.worksystem.entity.User;
import com.worksystem.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.Map;

/**
 * 메인 컨트롤러
 */
@Controller
public class MainController {
    
    private static final Logger logger = LoggerFactory.getLogger(MainController.class);

    @Autowired
    private UserService userService;

    /**
     * 메인 페이지 - Thymeleaf 템플릿 사용
     */
    @GetMapping("/")
    public String index(Model model) {
        // 현재 인증된 사용자 정보 가져오기
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        User currentUser = null;
        
        if (auth != null && auth.isAuthenticated() && !auth.getName().equals("anonymousUser")) {
            try {
                currentUser = userService.findByUserId(auth.getName());
            } catch (Exception e) {
                logger.warn("사용자 정보 조회 실패: {}", auth.getName(), e);
            }
        }
        
        // 시스템 정보 설정
        model.addAttribute("systemName", "업무시스템");
        model.addAttribute("version", "1.0.0");
        model.addAttribute("currentUser", currentUser);
        model.addAttribute("isAuthenticated", auth != null && auth.isAuthenticated());
        
        // 개발 환경 설정
        model.addAttribute("isDevelopment", isDevEnvironment());
        // model.addAttribute("jsVersion", System.currentTimeMillis() ); // 캐시 버스팅용
        model.addAttribute("jsVersion", "prod" ); // 캐시 버스팅용
        
        return "index";
    }

    /**
     * 대시보드 페이지
     */
    @GetMapping("/dashboard")
    public String dashboard(Model model) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        
        model.addAttribute("pageTitle", "대시보드");
        model.addAttribute("currentUser", auth != null ? auth.getName() : "guest");
        
        return "pages/dashboard";
    }
    
    /**
     * 메뉴 관리 페이지
     */
    @GetMapping("/menu-management")
    public String menuManagement(Model model) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        
        model.addAttribute("pageTitle", "메뉴 관리");
        model.addAttribute("currentUser", auth != null ? auth.getName() : "guest");
        
        return "pages/menu-management";
    }
    
    /**
     * 개발 환경 여부 확인
     */
    private boolean isDevEnvironment() {
        // 기본적으로 개발 환경으로 간주 (프로파일 설정이 복잡하므로 단순화)
        return true;
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
                    "groupdId", user.getGroupId(),
                    "groupDisplayName", getGroupDisplayName(user.getGroupId())
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
    private String getGroupDisplayName(String role) {
        switch (role) {
            case "ADMIN": return "관리자";
            case "MANAGER": return "팀장";
            case "USER": return "사용자";
            default: return role;
        }
    }
}
