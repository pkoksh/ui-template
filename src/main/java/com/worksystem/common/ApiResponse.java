package com.worksystem.common;

import lombok.Getter;

/**
 * REST API 공통 응답 래퍼
 *
 * 모든 REST API는 {success, message, data} 형태로 응답한다.
 * - 성공: HTTP 2xx + success=true
 * - 실패: HTTP 4xx/5xx + success=false (GlobalExceptionHandler가 생성)
 *
 * 주의: 필드명 data 는 프론트(IBSheet loadSearchData의 자동 인식,
 * 각 페이지의 .data 파싱)와 계약이므로 변경 금지.
 */
@Getter
public class ApiResponse<T> {

    private final boolean success;
    private final String message;
    private final T data;

    private ApiResponse(boolean success, String message, T data) {
        this.success = success;
        this.message = message;
        this.data = data;
    }

    /** 성공 (데이터만) */
    public static <T> ApiResponse<T> ok(T data) {
        return new ApiResponse<>(true, null, data);
    }

    /** 성공 (메시지 + 데이터) */
    public static <T> ApiResponse<T> ok(String message, T data) {
        return new ApiResponse<>(true, message, data);
    }

    /** 성공 (메시지만, 데이터 없음) */
    public static ApiResponse<Void> okMessage(String message) {
        return new ApiResponse<>(true, message, null);
    }

    /** 실패 (GlobalExceptionHandler 전용) */
    public static ApiResponse<Void> error(String message) {
        return new ApiResponse<>(false, message, null);
    }
}
