package com.worksystem.controller;

import com.worksystem.dto.UserDTO;
import com.worksystem.entity.User;
import com.worksystem.service.UserService;
import com.worksystem.util.EnumMaker;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.Map;

/**
 * 메인 컨트롤러
 */
@Controller
public class MainController {
    
    private static final Logger logger = LoggerFactory.getLogger(MainController.class);

    @Autowired
    private UserService userService;

    @Autowired
    private EnumMaker enumMaker;

    /**
     * 메인 페이지 - Thymeleaf 템플릿 사용
     */
    @GetMapping("/")
    public String index(Model model) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        
        if (auth != null && auth.isAuthenticated() && !"anonymousUser".equals(auth.getName())) {
            UserDTO user = userService.findUserWithGroups(auth.getName());
            
            if (user != null) {
                model.addAttribute("currentUser", Map.of(
                    "userId", user.getUserId(),
                    "name", user.getName(),
                    "email", user.getEmail() != null ? user.getEmail() : "",
                    "department", user.getDepartment() != null ? user.getDepartment() : "",
                    "groupId", user.getPrimaryGroupId() != null ? user.getPrimaryGroupId() : "USER",  // groupId로 변경
                    "groupName", user.getPrimaryGroupName() != null ? user.getPrimaryGroupName() : "일반사용자",  // groupName 추가
                    "primaryGroupId", user.getPrimaryGroupId() != null ? user.getPrimaryGroupId() : "",
                    "primaryGroupName", user.getPrimaryGroupName() != null ? user.getPrimaryGroupName() : ""
                ));
            }
        }
        
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
     * 사용자 관리 페이지
     */
    @GetMapping("/user-management")
    public String userManagement(Model model) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        
        model.addAttribute("pageTitle", "사용자 관리");
        model.addAttribute("currentUser", auth != null ? auth.getName() : "guest");
        model.addAttribute("groupEnum", enumMaker.getGroupEnum());
        
        return "pages/user-management";
    }

    /**
     * 그룹 관리 페이지
     */
    @GetMapping("/group-management")
    public String groupManagement(Model model) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        
        model.addAttribute("pageTitle", "그룹 관리");
        model.addAttribute("currentUser", auth != null ? auth.getName() : "guest");
        
        return "pages/group-management";
    }
}