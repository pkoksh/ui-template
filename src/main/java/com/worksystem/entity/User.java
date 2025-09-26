package com.worksystem.entity;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * 사용자 엔터티
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class User {
    
    private Long userSeq;
    private String userId;
    private String password;
    private String name;
    private String email;
    private String department;
    
    @Builder.Default
    private boolean isActive = true;
    
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private LocalDateTime lastLoginAt;
    
    // 생성자 (비즈니스 로직이 포함된 생성자)
    public User(String userId, String password, String name, String email, String department) {
        this.userId = userId;
        this.password = password;
        this.name = name;
        this.email = email;
        this.department = department;
        this.isActive = true;
        this.createdAt = LocalDateTime.now();
        this.updatedAt = LocalDateTime.now();
    }
}