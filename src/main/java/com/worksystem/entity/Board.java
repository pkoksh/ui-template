package com.worksystem.entity;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * 게시판 정의 엔티티 — 게시판 신설 = boards 행 추가 + 메뉴 등록 (코드 0줄)
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Board {

    private Long id;            // board_seq (PK — IBSheet ___id용)
    private String boardCode;   // 비즈니스 키 + URL path (예: free)
    private String boardName;
    private String description;

    @Builder.Default
    private Boolean isActive = true;

    @Builder.Default
    private Integer sortOrder = 0;

    // 날짜 표준: 그리드 Type:'Text' + 'yyyy-MM-dd HH:mm:ss' (CLAUDE.md)
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime createdAt;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime updatedAt;
}
