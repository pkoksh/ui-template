package com.worksystem.common;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.NoSuchElementException;

/**
 * REST API 전역 예외 처리
 *
 * 컨트롤러는 try/catch 없이 예외를 던지고, 여기서 표준 ApiResponse(success=false)로 변환한다.
 * - IllegalArgumentException  → 400 (입력 검증/비즈니스 규칙 위반. 메시지 그대로 노출)
 * - NoSuchElementException    → 404 (대상 없음)
 * - IllegalStateException     → 500 (처리 실패. 메시지 그대로 노출)
 * - MethodArgumentNotValidException → 400 (@Valid 검증 실패. 첫 필드 오류 메시지)
 * - 그 외 Exception           → 500 (내부 메시지 노출하지 않음)
 *
 * @RestController 가 붙은 컨트롤러만 대상 (Thymeleaf 페이지 컨트롤러는 제외).
 * 참고: 인증(401)/인가(403) 오류는 Security 필터 단에서 발생하므로 여기 오지 않음 — SecurityConfig 참조.
 */
@Slf4j
@RestControllerAdvice(annotations = RestController.class)
public class GlobalExceptionHandler {

    @ExceptionHandler(IllegalArgumentException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ApiResponse<Void> handleIllegalArgument(IllegalArgumentException e) {
        log.warn("잘못된 요청: {}", e.getMessage());
        return ApiResponse.error(e.getMessage());
    }

    @ExceptionHandler(NoSuchElementException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ApiResponse<Void> handleNotFound(NoSuchElementException e) {
        log.warn("대상 없음: {}", e.getMessage());
        return ApiResponse.error(e.getMessage());
    }

    @ExceptionHandler(IllegalStateException.class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public ApiResponse<Void> handleIllegalState(IllegalStateException e) {
        log.error("처리 실패: {}", e.getMessage());
        return ApiResponse.error(e.getMessage());
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ApiResponse<Void> handleValidation(MethodArgumentNotValidException e) {
        String message = e.getBindingResult().getFieldErrors().stream()
                .findFirst()
                .map(err -> err.getField() + ": " + err.getDefaultMessage())
                .orElse("입력값이 올바르지 않습니다.");
        log.warn("입력 검증 실패: {}", message);
        return ApiResponse.error(message);
    }

    @ExceptionHandler(Exception.class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public ApiResponse<Void> handleException(Exception e) {
        log.error("처리 중 오류 발생", e);
        return ApiResponse.error("처리 중 오류가 발생했습니다.");
    }
}
