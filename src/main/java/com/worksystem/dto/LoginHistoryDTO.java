package com.worksystem.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

/**
 * 로그인 이력 DTO (조회 전용 — INSERT는 서비스가 개별 파라미터로 수행)
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class LoginHistoryDTO {

    private Long historySeq;
    private String userId;
    private String eventType;   // LOGIN / LOGIN_FAIL / LOGOUT
    private String failReason;  // BAD_CREDENTIALS / DISABLED 등
    private String ipAddress;
    private String userAgent;
    private String sessionId;

    // IBSheet Date 파싱 함정 회피 — 서버에서 고정 문자열로 직렬화 (설계 §3-4)
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime createdAt;
}
