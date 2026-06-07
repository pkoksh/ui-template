package com.worksystem.common;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.method.annotation.HandlerMethodValidationException;

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

    /**
     * 컨테이너 요소 검증 실패 (예: List<@Valid Dto> — IBSheet 일괄 저장의 행 단위 검증)
     */
    @ExceptionHandler(HandlerMethodValidationException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ApiResponse<Void> handleMethodValidation(HandlerMethodValidationException e) {
        String message = e.getAllErrors().stream()
                .findFirst()
                .map(err -> err.getDefaultMessage())
                .orElse("입력값이 올바르지 않습니다.");
        log.warn("입력 검증 실패: {}", message);
        return ApiResponse.error(message);
    }

    /**
     * @Validated 클래스의 메서드 파라미터 검증 실패 (List<@Valid Dto> 요소 제약이 이 경로로 들어옴)
     */
    @ExceptionHandler(jakarta.validation.ConstraintViolationException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ApiResponse<Void> handleConstraintViolation(jakarta.validation.ConstraintViolationException e) {
        String message = e.getConstraintViolations().stream()
                .findFirst()
                .map(v -> v.getMessage())
                .orElse("입력값이 올바르지 않습니다.");
        log.warn("입력 검증 실패: {}", message);
        return ApiResponse.error(message);
    }

    /**
     * DB 무결성 제약 위반 (UNIQUE 중복, FK 참조 오류 등) — 도메인 검사를 통과하지 못한 경우의 안전망.
     * 가능하면 각 서비스에서 사전 검사로 더 구체적인 메시지를 제공할 것 (예: "이미 존재하는 메뉴 ID입니다: X").
     */
    @ExceptionHandler(org.springframework.dao.DataIntegrityViolationException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ApiResponse<Void> handleDataIntegrity(org.springframework.dao.DataIntegrityViolationException e) {
        log.warn("데이터 무결성 위반: {}", e.getMessage());
        String message = (e instanceof org.springframework.dao.DuplicateKeyException)
                ? "이미 존재하는 값이 있어 저장할 수 없습니다."
                : "데이터 제약 조건을 위반했습니다. (중복 또는 참조 오류)";
        return ApiResponse.error(message);
    }

    /**
     * 인가 실패 (403) — 컨트롤러/서비스 단에서 도메인 권한 부족으로 던진 AccessDeniedException.
     * (필터 단 403은 SecurityConfig accessDeniedHandler가 처리. 이건 메서드 내부에서 던진 경우의 경로 —
     *  catch-all Exception 핸들러가 500으로 삼키지 않도록 명시적으로 403 매핑. message 키는 인터셉터와 계약 유지)
     */
    @ExceptionHandler(org.springframework.security.access.AccessDeniedException.class)
    @ResponseStatus(HttpStatus.FORBIDDEN)
    public ApiResponse<Void> handleAccessDenied(org.springframework.security.access.AccessDeniedException e) {
        log.warn("접근 권한 없음: {}", e.getMessage());
        return ApiResponse.error(e.getMessage() != null ? e.getMessage() : "접근 권한이 없습니다.");
    }

    @ExceptionHandler(Exception.class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public ApiResponse<Void> handleException(Exception e) {
        log.error("처리 중 오류 발생", e);
        return ApiResponse.error("처리 중 오류가 발생했습니다.");
    }
}
