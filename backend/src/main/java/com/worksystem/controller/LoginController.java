package com.worksystem.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * 로그인 컨트롤러
 */
@Controller
public class LoginController {
    
    /**
     * 로그인 페이지 - 명시적 매핑
     */
    @GetMapping("/login")
    public String loginPage() {
        return "redirect:/login.html";
    }
}
