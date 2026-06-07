package com.worksystem.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

/**
 * 게시글 DTO — 작성자(authorId/Name)는 서버 주입, 수정/삭제는 본인 또는 ADMIN만
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BoardPostDTO {

    private Long postSeq;
    private String boardCode;

    @NotBlank(message = "제목은 필수입니다")
    @Size(max = 255, message = "제목은 255자 이하여야 합니다")
    private String title;

    @NotBlank(message = "내용은 필수입니다")
    private String content;

    private String authorId;    // 서버 주입 — 클라이언트 값 무시
    private String authorName;
    private Boolean isPinned;
    private Boolean isActive;
    private Integer viewCount;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime createdAt;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime updatedAt;
}
