package com.worksystem.entity;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * 공통코드 상세 엔티티
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CommonCode {

    private Long id;            // code_seq (PK)
    private String groupCode;   // 소속 코드 그룹
    private String code;        // 코드값 (예: 10)
    private String codeName;    // 코드명 (예: 슈퍼관리자)
    private String description;
    private String refValue;    // 예비 참조값

    @Builder.Default
    private Boolean isActive = true;

    @Builder.Default
    private Integer sortOrder = 0;

    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
