package com.worksystem.util;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

/**
 * 비밀번호 암호화 유틸리티
 * 데이터베이스에 넣을 암호화된 비밀번호를 생성하기 위한 도구
 */
public class PasswordEncoderUtil {
    
    public static void main(String[] args) {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        
        // 테스트 계정 비밀번호 암호화
        String adminPassword = "admin123";
        String userPassword = "user123";
        String managerPassword = "manager123";
        
        System.out.println("=== 암호화된 비밀번호 ===");
        System.out.println("admin123 -> " + encoder.encode(adminPassword));
        System.out.println("user123 -> " + encoder.encode(userPassword));
        System.out.println("manager123 -> " + encoder.encode(managerPassword));
        
        // 검증 테스트
        String encodedAdmin = encoder.encode(adminPassword);
        System.out.println("\n=== 검증 테스트 ===");
        System.out.println("admin123 검증: " + encoder.matches(adminPassword, encodedAdmin));
    }
}
