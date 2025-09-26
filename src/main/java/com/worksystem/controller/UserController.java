package com.worksystem.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.validation.annotation.Validated;

import com.worksystem.dto.UserDTO;
import com.worksystem.service.UserService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;

import jakarta.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
    public ResponseEntity<Map<String, Object>> getAllUsers() {
        log.info("모든 사용자 조회 API 호출");
        
        try {
            List<UserDTO> users = userService.getAllUsersWithGroups();
            
            Map<String, Object> response = new HashMap<>();
            response.put("success", true);
            response.put("message", "사용자 목록 조회 성공");
            response.put("data", users);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            log.error("사용자 목록 조회 실패", e);
            Map<String, Object> response = new HashMap<>();
            response.put("success", false);
            response.put("message", "사용자 목록 조회에 실패했습니다: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

    /**
     * 사용자 검색
     */
    @GetMapping("/search")
    public ResponseEntity<Map<String, Object>> searchUsers(
            @RequestParam(required = false) String userId,
            @RequestParam(required = false) String name,
            @RequestParam(required = false) String department,
            @RequestParam(required = false) String groupId) {
        
        log.info("사용자 검색 API 호출 - userId: {}, name: {}, department: {}, groupId: {}", 
                userId, name, department, groupId);
        
        try {
            List<UserDTO> users = userService.searchUsers(userId, name, department, groupId);
            
            Map<String, Object> response = new HashMap<>();
            response.put("success", true);
            response.put("message", "사용자 검색 성공");
            response.put("data", users);
            
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            log.error("사용자 검색 실패", e);
            Map<String, Object> response = new HashMap<>();
            response.put("success", false);
            response.put("message", "사용자 검색에 실패했습니다: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

    /**
     * 특정 사용자 조회
     */
    @GetMapping("/{userId}")
    public ResponseEntity<Map<String, Object>> getUser(@PathVariable String userId) {
        log.info("사용자 조회 API 호출 - userId: {}", userId);
        
        try {
            UserDTO user = userService.findUserWithGroups(userId);
            if (user == null) {
                Map<String, Object> response = new HashMap<>();
                response.put("success", false);
                response.put("message", "사용자를 찾을 수 없습니다");
                return ResponseEntity.notFound().build();
            }
            
            Map<String, Object> response = new HashMap<>();
            response.put("success", true);
            response.put("message", "사용자 조회 성공");
            response.put("data", user);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            log.error("사용자 조회 실패", e);
            Map<String, Object> response = new HashMap<>();
            response.put("success", false);
            response.put("message", "사용자 조회에 실패했습니다: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

    /**
     * 사용자 저장 (생성 및 수정)
     */
    @PostMapping
    public ResponseEntity<Map<String, Object>> saveUsers(@Valid @RequestBody List<UserDTO> userDTOs) {
        log.info("사용자 저장 API 호출 - 사용자 수: {}", userDTOs.size());
        
        try {
            boolean result = userService.saveUsers(userDTOs);
            
            Map<String, Object> response = new HashMap<>();
            if (result) {
                response.put("success", true);
                response.put("message", "사용자 정보가 성공적으로 저장되었습니다.");
            } else {
                response.put("success", false);
                response.put("message", "사용자 저장에 실패했습니다.");
            }
            
            return ResponseEntity.ok(response);
        } catch (IllegalArgumentException e) {
            log.error("사용자 저장 실패 - 잘못된 입력: {}", e.getMessage());
            Map<String, Object> response = new HashMap<>();
            response.put("success", false);
            response.put("message", e.getMessage());
            return ResponseEntity.badRequest().body(response);
        } catch (Exception e) {
            log.error("사용자 저장 실패", e);
            Map<String, Object> response = new HashMap<>();
            response.put("success", false);
            response.put("message", "사용자 저장에 실패했습니다: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

    /**
     * 사용자 수정
     */
    @PutMapping("/{userId}")
    public ResponseEntity<Map<String, Object>> updateUser(
            @PathVariable String userId, 
            @Valid @RequestBody UserDTO userDTO) {
        
        log.info("사용자 수정 API 호출 - userId: {}, data: {}", userId, userDTO);
        
        try {
            UserDTO updatedUser = userService.updateUser(userId, userDTO);
            
            Map<String, Object> response = new HashMap<>();
            response.put("success", true);
            response.put("message", "사용자 정보가 성공적으로 수정되었습니다.");
            response.put("data", updatedUser);
            
            return ResponseEntity.ok(response);
        } catch (IllegalArgumentException e) {
            log.error("사용자 수정 실패 - 잘못된 입력: {}", e.getMessage());
            Map<String, Object> response = new HashMap<>();
            response.put("success", false);
            response.put("message", e.getMessage());
            return ResponseEntity.badRequest().body(response);
        } catch (Exception e) {
            log.error("사용자 수정 실패", e);
            Map<String, Object> response = new HashMap<>();
            response.put("success", false);
            response.put("message", "사용자 수정에 실패했습니다: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

    /**
     * 사용자 삭제 (비활성화)
     */
    @DeleteMapping("/{userId}")
    public ResponseEntity<Map<String, Object>> deleteUser(@PathVariable String userId) {
        log.info("사용자 삭제 API 호출 - userId: {}", userId);
        
        try {
            userService.deleteUser(userId);
            
            Map<String, Object> response = new HashMap<>();
            response.put("success", true);
            response.put("message", "사용자가 성공적으로 삭제되었습니다.");
            
            return ResponseEntity.ok(response);
        } catch (IllegalArgumentException e) {
            log.error("사용자 삭제 실패 - 잘못된 입력: {}", e.getMessage());
            Map<String, Object> response = new HashMap<>();
            response.put("success", false);
            response.put("message", e.getMessage());
            return ResponseEntity.badRequest().body(response);
        } catch (Exception e) {
            log.error("사용자 삭제 실패", e);
            Map<String, Object> response = new HashMap<>();
            response.put("success", false);
            response.put("message", "사용자 삭제에 실패했습니다: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

    /**
     * 사용자 비밀번호 초기화
     */
    @PostMapping("/{userId}/reset-password")
    public ResponseEntity<Map<String, Object>> resetPassword(@PathVariable String userId) {
        log.info("비밀번호 초기화 API 호출 - userId: {}", userId);
        
        try {
            String newPassword = userService.resetPassword(userId);
            
            Map<String, Object> response = new HashMap<>();
            response.put("success", true);
            response.put("message", "비밀번호가 성공적으로 초기화되었습니다.");
            response.put("newPassword", newPassword);
            
            return ResponseEntity.ok(response);
        } catch (IllegalArgumentException e) {
            log.error("비밀번호 초기화 실패 - 잘못된 입력: {}", e.getMessage());
            Map<String, Object> response = new HashMap<>();
            response.put("success", false);
            response.put("message", e.getMessage());
            return ResponseEntity.badRequest().body(response);
        } catch (Exception e) {
            log.error("비밀번호 초기화 실패", e);
            Map<String, Object> response = new HashMap<>();
            response.put("success", false);
            response.put("message", "비밀번호 초기화에 실패했습니다: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

    /**
     * 사용자 ID 중복 확인
     */
    @GetMapping("/check-duplicate/{userId}")
    public ResponseEntity<Map<String, Object>> checkUserIdDuplicate(@PathVariable String userId) {
        log.info("사용자 ID 중복 확인 API 호출 - userId: {}", userId);
        
        try {
            boolean exists = userService.isUserIdExists(userId);
            
            Map<String, Object> response = new HashMap<>();
            response.put("success", true);
            response.put("exists", exists);
            response.put("message", exists ? "이미 사용 중인 사용자 ID입니다" : "사용 가능한 사용자 ID입니다");
            
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            log.error("사용자 ID 중복 확인 실패", e);
            Map<String, Object> response = new HashMap<>();
            response.put("success", false);
            response.put("message", "사용자 ID 중복 확인에 실패했습니다: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }
}
