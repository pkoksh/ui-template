package com.worksystem.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.validation.annotation.Validated;

import com.worksystem.common.ApiResponse;
import com.worksystem.dto.UserDTO;
import com.worksystem.service.UserService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

import jakarta.validation.Valid;
import java.util.List;
import java.util.Map;
import java.util.NoSuchElementException;

/**
 * 사용자 관리 REST 컨트롤러
 *
 * 응답은 공통 ApiResponse {success, message, data} 표준을 따른다.
 * 예외는 GlobalExceptionHandler가 표준 실패 응답으로 변환한다.
 */
@Slf4j
@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
@Validated
public class UserController {

    private final UserService userService;

    /**
     * 모든 사용자 조회 (그룹 정보 포함)
     */
    @GetMapping
    public ApiResponse<List<UserDTO>> getAllUsers() {
        log.info("모든 사용자 조회 API 호출");
        return ApiResponse.ok(userService.getAllUsersWithGroups());
    }

    /**
     * 사용자 검색
     */
    @GetMapping("/search")
    public ApiResponse<List<UserDTO>> searchUsers(
            @RequestParam(required = false) String userId,
            @RequestParam(required = false) String name,
            @RequestParam(required = false) String department,
            @RequestParam(required = false) String groupId) {

        log.info("사용자 검색 API 호출 - userId: {}, name: {}, department: {}, groupId: {}",
                userId, name, department, groupId);
        return ApiResponse.ok(userService.searchUsers(userId, name, department, groupId));
    }

    /**
     * 내 프로필 조회 (로그인 사용자)
     */
    @GetMapping("/me")
    public ApiResponse<UserDTO> getMyProfile() {
        String userId = currentUserId();
        log.info("내 프로필 조회 API 호출 - userId: {}", userId);

        UserDTO user = userService.findUserWithGroups(userId);
        if (user == null) {
            throw new NoSuchElementException("사용자를 찾을 수 없습니다: " + userId);
        }
        return ApiResponse.ok(user);
    }

    /**
     * 내 프로필 수정 (이름/이메일/부서만)
     */
    @PutMapping("/me")
    public ApiResponse<UserDTO> updateMyProfile(@RequestBody UserDTO userDTO) {
        String userId = currentUserId();
        log.info("내 프로필 수정 API 호출 - userId: {}", userId);

        return ApiResponse.ok("프로필이 성공적으로 수정되었습니다.",
                userService.updateMyProfile(userId, userDTO));
    }

    /**
     * 내 비밀번호 변경 (현재 비밀번호 검증)
     */
    @PostMapping("/me/change-password")
    public ApiResponse<Void> changeMyPassword(@RequestBody Map<String, String> request) {
        String userId = currentUserId();
        log.info("비밀번호 변경 API 호출 - userId: {}", userId);

        userService.changePassword(userId, request.get("currentPassword"), request.get("newPassword"));
        return ApiResponse.okMessage("비밀번호가 성공적으로 변경되었습니다.");
    }

    /** 현재 로그인 사용자 ID (미인증은 Security 필터가 차단하므로 null 아님) */
    private String currentUserId() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        return auth.getName();
    }

    /**
     * 특정 사용자 조회
     */
    @GetMapping("/{userId}")
    public ApiResponse<UserDTO> getUser(@PathVariable String userId) {
        log.info("사용자 조회 API 호출 - userId: {}", userId);

        UserDTO user = userService.findUserWithGroups(userId);
        if (user == null) {
            throw new NoSuchElementException("사용자를 찾을 수 없습니다: " + userId);
        }
        return ApiResponse.ok(user);
    }

    /**
     * 사용자 저장 (IBSheet 일괄 저장 — status 'I'/'U'/'D' 분기)
     */
    @PostMapping
    public ApiResponse<Void> saveUsers(@Valid @RequestBody List<UserDTO> userDTOs) {
        log.info("사용자 저장 API 호출 - 사용자 수: {}", userDTOs.size());

        boolean result = userService.saveUsers(userDTOs);
        if (!result) {
            throw new IllegalStateException("사용자 저장에 실패했습니다.");
        }
        return ApiResponse.okMessage("사용자 정보가 성공적으로 저장되었습니다.");
    }

    /**
     * 사용자 수정
     */
    @PutMapping("/{userId}")
    public ApiResponse<UserDTO> updateUser(
            @PathVariable String userId,
            @Valid @RequestBody UserDTO userDTO) {

        log.info("사용자 수정 API 호출 - userId: {}", userId);
        return ApiResponse.ok("사용자 정보가 성공적으로 수정되었습니다.",
                userService.updateUser(userId, userDTO));
    }

    /**
     * 사용자 삭제 (비활성화)
     */
    @DeleteMapping("/{userId}")
    public ApiResponse<Void> deleteUser(@PathVariable String userId) {
        log.info("사용자 삭제 API 호출 - userId: {}", userId);

        userService.deleteUser(userId);
        return ApiResponse.okMessage("사용자가 성공적으로 삭제되었습니다.");
    }

    /**
     * 사용자 비밀번호 초기화
     */
    @PostMapping("/{userId}/reset-password")
    public ApiResponse<Map<String, String>> resetPassword(@PathVariable String userId) {
        log.info("비밀번호 초기화 API 호출 - userId: {}", userId);

        String newPassword = userService.resetPassword(userId);
        return ApiResponse.ok("비밀번호가 성공적으로 초기화되었습니다.",
                Map.of("newPassword", newPassword));
    }

    /**
     * 사용자 ID 중복 확인
     */
    @GetMapping("/check-duplicate/{userId}")
    public ApiResponse<Map<String, Boolean>> checkUserIdDuplicate(@PathVariable String userId) {
        log.info("사용자 ID 중복 확인 API 호출 - userId: {}", userId);

        boolean exists = userService.isUserIdExists(userId);
        return ApiResponse.ok(exists ? "이미 사용 중인 사용자 ID입니다" : "사용 가능한 사용자 ID입니다",
                Map.of("exists", exists));
    }
}
