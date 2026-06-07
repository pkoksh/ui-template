package com.worksystem.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * 게시판 정의 DTO (IBSheet 일괄 저장용 — status 'I'/'U'/'D')
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BoardDTO {

    private Long id;            // board_seq — IBSheet ___id로 복원 (U/D 시 기존 행 식별)

    @NotBlank(message = "게시판 코드는 필수입니다")
    @Size(max = 50, message = "게시판 코드는 50자 이하여야 합니다")
    @Pattern(regexp = "[a-z0-9-]+", message = "게시판 코드는 소문자 영문/숫자/하이픈만 사용할 수 있습니다 (URL로 사용됨)")
    private String boardCode;

    @NotBlank(message = "게시판명은 필수입니다")
    @Size(max = 100, message = "게시판명은 100자 이하여야 합니다")
    private String boardName;

    private String description;
    private Boolean isActive;
    private Integer sortOrder;

    private String status;      // IBSheet 행 상태: 'I'/'U'/'D'
}
