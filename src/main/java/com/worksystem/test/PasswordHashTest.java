package com.worksystem.test;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

/**
 * 비밀번호 해시 생성 테스트
 */
public class PasswordHashTest {
    public static void main(String[] args) {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        
        System.out.println("admin123 해시: " + encoder.encode("admin123"));
        System.out.println("user123 해시: " + encoder.encode("user123"));
        System.out.println("manager123 해시: " + encoder.encode("manager123"));
        
        // 기존 해시와 비교 테스트
        String existingHash = "$2a$10$N.zmdr9k7uOCQb376NoUnuTJ8iKXshASrN7gy8L7VT6Fl2LKmIJTO";
        System.out.println("admin123 matches existing hash: " + encoder.matches("admin123", existingHash));
    }
}
