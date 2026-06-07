package com.worksystem.common;

import jakarta.servlet.http.HttpServletRequest;

/**
 * HTTP 요청 정보 추출 유틸 (접속 로그 기록용)
 */
public final class RequestUtils {

    private RequestUtils() {
    }

    /**
     * 클라이언트 IP 추출 — 리버스 프록시 환경 대비 X-Forwarded-For의 첫 IP 우선, 없으면 remoteAddr
     */
    public static String getClientIp(HttpServletRequest request) {
        String forwarded = request.getHeader("X-Forwarded-For");
        if (forwarded != null && !forwarded.isBlank()) {
            return forwarded.split(",")[0].trim();
        }
        return request.getRemoteAddr();
    }

    /**
     * User-Agent 추출 (DB 컬럼 길이에 맞춰 절단)
     */
    public static String getUserAgent(HttpServletRequest request) {
        String userAgent = request.getHeader("User-Agent");
        if (userAgent != null && userAgent.length() > 500) {
            return userAgent.substring(0, 500);
        }
        return userAgent;
    }

    /**
     * 문자열을 지정 길이로 안전하게 절단 (공격자 입력 등 길이 보장이 없는 값용)
     */
    public static String truncate(String value, int maxLength) {
        if (value == null) return null;
        return value.length() > maxLength ? value.substring(0, maxLength) : value;
    }
}
