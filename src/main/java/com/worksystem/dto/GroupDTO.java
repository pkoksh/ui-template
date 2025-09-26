package com.worksystem.dto;

import java.time.LocalDateTime;
import java.util.List;

import com.worksystem.entity.Group;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * 그룹 DTO
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class GroupDTO {
    
    private Long groupSeq;  // group_seq (PK)
    
    @NotBlank(message = "그룹 ID는 필수입니다")
    @Size(max = 20, message = "그룹 ID는 20자 이하여야 합니다")
    private String groupId;
    
    @NotBlank(message = "그룹명은 필수입니다")
    @Size(max = 100, message = "그룹명은 100자 이하여야 합니다")
    private String groupName;
    
    @Size(max = 200, message = "설명은 200자 이하여야 합니다")
    private String description;
    
    @Min(value = 0, message = "권한 레벨은 0 이상이어야 합니다")
    @Max(value = 10, message = "권한 레벨은 10 이하여야 합니다")
    @Builder.Default
    private Integer level = 1;
    
    @Builder.Default
    private Boolean isActive = true;
    
    private LocalDateTime createdAt;


    private String status; // For IBSheet 상태 관리
    
    // Entity → DTO 변환
    public static GroupDTO from(Group group) {
        return GroupDTO.builder()
                .groupSeq(group.getGroupSeq())
                .groupId(group.getGroupId())
                .groupName(group.getGroupName())
                .description(group.getDescription())
                .level(group.getLevel())
                .isActive(group.getIsActive())
                .createdAt(group.getCreatedAt())
                .build();
    }
    
    // Entity List → DTO List 변환
    public static List<GroupDTO> from(List<Group> groups) {
        return groups.stream().map(GroupDTO::from).toList();
    }
    
    // DTO → Entity 변환
    public Group toEntity() {
        return Group.builder()
            .groupSeq(this.groupSeq)
            .groupId(this.groupId)
            .groupName(this.groupName)
            .description(this.description)
            .level(this.level)
            .isActive(this.isActive)
            .createdAt(this.createdAt)
            .build();
    }
    
    // 권한 레벨 표시명 반환
    public String getLevelDisplayName() {
        if (level == null) return "";
        
        return switch (level) {
            case 10 -> "슈퍼관리자 (10)";
            case 8 -> "관리자 (8)";
            case 6 -> "매니저 (6)";
            case 4 -> "팀장 (4)";
            case 1 -> "일반사용자 (1)";
            case 0 -> "게스트 (0)";
            default -> "사용자정의 (" + level + ")";
        };
    }
}
