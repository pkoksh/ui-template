package com.worksystem.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * 공통코드 상세 DTO (IBSheet 일괄 저장용 — status 'I'/'U'/'D')
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CommonCodeDTO {

    private Long id;            // code_seq — IBSheet ___id로 복원됨 (U/D 시 기존 행 식별)

    @NotBlank(message = "그룹 코드는 필수입니다")
    private String groupCode;

    @NotBlank(message = "코드값은 필수입니다")
    @Size(max = 50, message = "코드값은 50자 이하여야 합니다")
    private String code;

    @NotBlank(message = "코드명은 필수입니다")
    @Size(max = 100, message = "코드명은 100자 이하여야 합니다")
    private String codeName;

    private String description;
    private String refValue;
    private Boolean isActive;
    private Integer sortOrder;

    private String status;      // IBSheet 행 상태: 'I'/'U'/'D'
}
