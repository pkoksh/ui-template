package com.worksystem.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * 공통코드 그룹 DTO (IBSheet 일괄 저장용 — status 'I'/'U'/'D')
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CommonCodeGroupDTO {

    private Long id;            // group_seq — IBSheet ___id로 복원됨 (U/D 시 기존 행 식별)

    @NotBlank(message = "그룹 코드는 필수입니다")
    @Size(max = 50, message = "그룹 코드는 50자 이하여야 합니다")
    private String groupCode;

    @NotBlank(message = "그룹명은 필수입니다")
    @Size(max = 100, message = "그룹명은 100자 이하여야 합니다")
    private String groupName;

    private String description;
    private Boolean isSystem;
    private Boolean isActive;
    private Integer sortOrder;

    private String status;      // IBSheet 행 상태: 'I'/'U'/'D'
}
