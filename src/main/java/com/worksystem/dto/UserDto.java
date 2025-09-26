package com.worksystem.dto;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import com.worksystem.entity.User;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * 사용자 DTO
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO {
    
    
    private Long userSeq;
    
    @NotBlank(message = "사용자 ID는 필수입니다")
    @Size(min = 3, max = 20, message = "사용자 ID는 3-20자 사이여야 합니다")
    private String userId;
    
    @NotBlank(message = "이름은 필수입니다")
    @Size(max = 50, message = "이름은 50자 이하여야 합니다")
    private String name;
    
    @Email(message = "올바른 이메일 형식이 아닙니다")
    private String email;
    
    private String department;
    
    @Builder.Default
    private boolean isActive = true;
    
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private LocalDateTime lastLoginAt;
    
    // 그룹 정보 (조인해서 가져오는 데이터)
    private String groupIds;      // "ADMIN;USER" 형태
    private String groupNames;    // "관리자;일반사용자" 형태
    private String primaryGroupId;    // 주 그룹 ID (첫 번째 그룹)
    private String primaryGroupName;  // 주 그룹명 (첫 번째 그룹)
    
    // IBSheet 상태 관리
    private String status; // Added, Changed, Deleted, Unchanged
    

        // 편의 메서드: 문자열을 List로 변환
    public List<String> getGroupIdList() {
        return groupIds != null ? Arrays.asList(groupIds.split(";")) : new ArrayList<>();
    }
    
    public List<String> getGroupNameList() {
        return groupNames != null ? Arrays.asList(groupNames.split(";")) : new ArrayList<>();
    }


    // Entity → DTO 변환
    public static UserDTO from(User user) {
        return UserDTO.builder()
                .userSeq(user.getUserSeq())
                .userId(user.getUserId())
                .name(user.getName())
                .email(user.getEmail())
                .department(user.getDepartment())
                .isActive(user.isActive())
                .createdAt(user.getCreatedAt())
                .updatedAt(user.getUpdatedAt())
                .lastLoginAt(user.getLastLoginAt())
                .build();
    }
    
    // Entity List → DTO List 변환
    public static List<UserDTO> from(List<User> users) {
        return users.stream().map(UserDTO::from).toList();
    }
    
    // DTO → Entity 변환
    public User toEntity() {
        return User.builder()
            .userSeq(this.userSeq)
            .userId(this.userId)
            .name(this.name)
            .email(this.email)
            .department(this.department)
            .isActive(this.isActive)
            .createdAt(this.createdAt)
            .updatedAt(this.updatedAt)
            .lastLoginAt(this.lastLoginAt)
            .build();
    }
}