package com.worksystem.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

/**
 * 활성 세션 DTO — SPRING_SESSION 직조회 결과
 * sessionId는 PRIMARY_ID가 아니라 SESSION_ID(논리 키) — 강제 만료(deleteById) 키와 일치
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ActiveSessionDTO {

    private String sessionId;
    private String userId;          // PRINCIPAL_NAME

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime creationTime;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime lastAccessTime;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime expiryTime;
}
