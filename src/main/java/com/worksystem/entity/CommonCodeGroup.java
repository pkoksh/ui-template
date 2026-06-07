package com.worksystem.entity;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * 공통코드 그룹 엔티티
 *
 * id(=group_seq)는 IBSheet 그리드의 ___id 보관/복원에 사용되므로 필드명을 id로 둔다 (MenuDTO 패턴).
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CommonCodeGroup {

    private Long id;            // group_seq (PK)
    private String groupCode;   // 비즈니스 키 (예: GROUP_LEVEL)
    private String groupName;
    private String description;

    @Builder.Default
    private Boolean isSystem = false;

    @Builder.Default
    private Boolean isActive = true;

    @Builder.Default
    private Integer sortOrder = 0;

    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
