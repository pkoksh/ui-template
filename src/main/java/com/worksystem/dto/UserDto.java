package com.worksystem.dto;

import java.time.LocalDateTime;
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
    
    @Builder.Default
    private boolean isActive = true;

    private LocalDateTime createAt;
    


    // Entity → DTO 변환
    public static UserDTO from(User user) {
        return UserDTO.builder()
                .id(user.getId())
                .userId(user.getUserId())
                .name(user.getName())
                .email(user.getEmail())
                .department(user.getDepartment())
                .groupId(user.getGroupId())
                .isActive(user.isActive())
                .createAt(user.getCreatedAt())
                .build();
    }
    
    // Entity List → DTO List 변환
    public static List<UserDTO> from(List<User> users) {
        return users.stream().map(UserDTO::from).toList();
    }
    
    // DTO → Entity 변환
    public User toEntity() {
        return User.builder()
            .id(this.id)
            .userId(this.userId)
            .name(this.name)
            .email(this.email)
            .department(this.department)
            .groupId(this.groupId)
            .isActive(this.isActive)
            .build();
    }
}