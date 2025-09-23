package com.worksystem.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

/**
 * 사용자 DTO
 */
public class UserDto {
    
    private Long id;
    
    @NotBlank(message = "사용자 ID는 필수입니다")
    @Size(min = 3, max = 20, message = "사용자 ID는 3-20자 사이여야 합니다")
    private String userId;
    
    @NotBlank(message = "이름은 필수입니다")
    @Size(max = 50, message = "이름은 50자 이하여야 합니다")
    private String name;
    
    @Email(message = "올바른 이메일 형식이 아닙니다")
    private String email;
    
    private String department;
    private String groupId;
    private boolean isActive;
    
    // 기본 생성자
    public UserDto() {}
    
    // 생성자
    public UserDto(String userId, String name, String email, String department, String groupId) {
        this.userId = userId;
        this.name = name;
        this.email = email;
        this.department = department;
        this.groupId = groupId;
        this.isActive = true;
    }
    
    // Getters and Setters
    public Long getId() {
        return id;
    }
    
    public void setId(Long id) {
        this.id = id;
    }
    
    public String getUserId() {
        return userId;
    }
    
    public void setUserId(String userId) {
        this.userId = userId;
    }
    
    public String getName() {
        return name;
    }
    
    public void setName(String name) {
        this.name = name;
    }
    
    public String getEmail() {
        return email;
    }
    
    public void setEmail(String email) {
        this.email = email;
    }
    
    public String getDepartment() {
        return department;
    }
    
    public void setDepartment(String department) {
        this.department = department;
    }
    
    public String getGroupId() {
        return groupId;
    }
    
    public void setGroupId(String groupId) {
        this.groupId = groupId;
    }
    
    public boolean getIsActive() {
        return isActive;
    }
    
    public void setIsActive(boolean isActive) {
        this.isActive = isActive;
    }
    
    // 역할 표시명 반환
    public String getGroupDisplayName() {
        switch (groupId) {
            case "ADMIN": return "관리자";
            case "MANAGER": return "팀장";
            case "USER": return "사용자";
            default: return groupId;
        }
    }
}
