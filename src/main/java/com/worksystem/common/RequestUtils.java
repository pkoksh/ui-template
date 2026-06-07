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
     *
     * 주의: XFF는 클라이언트가 위조 가능한 헤더다 (신뢰 프록시 검증 없음 — 단순 템플릿 범위).
     * 위조 불가한 값이 필요하면 server.forward-headers-strategy + RemoteIpValve 구성으로 전환할 것.
     * 컬럼 길이(45) 초과 입력은 절단 — 과길이 헤더로 이력 INSERT를 실패시키는 공격 방지.
     */
    public static String getClientIp(HttpServletRequest request) {
        String forwarded = request.getHeader("X-Forwarded-For");
        if (forwarded != null && !forwarded.isBlank()) {
            return truncate(forwarded.split(",")[0].trim(), 45);
        }
        return truncate(request.getRemoteAddr(), 45);
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
