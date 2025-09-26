package com.worksystem.controller;

import com.worksystem.dto.UserDTO;
import com.worksystem.entity.User;
import com.worksystem.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 인증 관련 REST 컨트롤러
 */
@RestController
@RequestMapping("/api/auth")
public class AuthRestController {

    @Autowired
    private UserService userService;
    
    @Autowired
    private PasswordEncoder passwordEncoder;

    /**
     * 현재 로그인한 사용자 정보 반환
     */
    @GetMapping("/user")
    public ResponseEntity<Map<String, Object>> getCurrentUser() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        
        if (auth == null || !auth.isAuthenticated() || "anonymousUser".equals(auth.getName())) {
            return ResponseEntity.ok(Map.of("authenticated", false));
        }

        // 사용자 정보를 그룹 정보와 함께 조회
        UserDTO user = userService.findUserWithGroups(auth.getName());
        
        if (user == null) {
            return ResponseEntity.ok(Map.of("authenticated", false));
        }

        Map<String, Object> response = new HashMap<>();
        response.put("authenticated", true);
        response.put("userId", user.getUserId());
        response.put("name", user.getName());
        response.put("email", user.getEmail());
        response.put("department", user.getDepartment());
        response.put("groupIds", user.getGroupIds());
        response.put("groupNames", user.getGroupNames());
        response.put("primaryGroupId", user.getPrimaryGroupId());
        response.put("primaryGroupName", user.getPrimaryGroupName());
        response.put("authorities", auth.getAuthorities());

        return ResponseEntity.ok(response);
    }

    /**
     * 비밀번호 암호화 (개발용)
     */
    @PostMapping("/encode-passwords")
    public ResponseEntity<Map<String, String>> encodePasswords() {
        Map<String, String> encoded = new HashMap<>();
        encoded.put("admin123", passwordEncoder.encode("admin123"));
        encoded.put("user123", passwordEncoder.encode("user123"));
        encoded.put("manager123", passwordEncoder.encode("manager123"));
        
        return ResponseEntity.ok(encoded);
    }
}