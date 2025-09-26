package com.worksystem.entity;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * 사용자 그룹 엔티티
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Group {
    
    private Long id;
    private String groupId;
    private String groupName;
    private String description;
    private Integer level;
    
    @Builder.Default
    private Boolean isActive = true;
    
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
