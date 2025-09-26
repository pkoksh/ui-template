package com.worksystem.controller;

import com.worksystem.dto.UserDTO;
import com.worksystem.entity.User;
import com.worksystem.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

/**
 * 인증 관련 REST API 컨트롤러
 */
@RestController
@RequestMapping("/api/auth")
public class AuthRestController {
    
    @Autowired
    private UserService userService;
    
    @Autowired
    private PasswordEncoder passwordEncoder;
    
    /**
     * 암호화된 비밀번호 생성 (개발용)
     */
    @GetMapping("/encode-passwords")
    public ResponseEntity<Map<String, String>> encodePasswords() {
        Map<String, String> encodedPasswords = new HashMap<>();
        
        // 테스트 계정 비밀번호들 암호화
        encodedPasswords.put("admin123", passwordEncoder.encode("admin123"));
        encodedPasswords.put("user123", passwordEncoder.encode("user123"));
        encodedPasswords.put("manager123", passwordEncoder.encode("manager123"));
        
        return ResponseEntity.ok(encodedPasswords);
    }
    
    /**
     * 현재 로그인된 사용자 정보 반환
     */
    @GetMapping("/user")
    public ResponseEntity<Map<String, Object>> getCurrentUser() {
        try {
            // 현재 인증된 사용자 정보 가져오기
            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            
            if (authentication == null || !authentication.isAuthenticated() || 
                "anonymousUser".equals(authentication.getPrincipal())) {
                return ResponseEntity.status(401).build();
            }
            
            // 사용자 ID로 상세 정보 조회
            String userId = authentication.getName();
            UserDTO user = userService.findByUserId(userId);
            
            if (user == null) {
                return ResponseEntity.status(404).build();
            }
            
            // 응답 데이터 구성
            Map<String, Object> response = new HashMap<>();
            response.put("userId", user.getUserId());
            response.put("name", user.getName());
            response.put("groupId", user.getGroupId());
            response.put("department", user.getDepartment());
            response.put("email", user.getEmail());
            
            return ResponseEntity.ok(response);
            
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).build();
        }
    }
}
