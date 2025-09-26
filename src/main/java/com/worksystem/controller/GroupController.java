package com.worksystem.controller;

import com.worksystem.dto.GroupDTO;
import com.worksystem.dto.GroupMenuPermissionDTO;
import com.worksystem.entity.Group;
import com.worksystem.service.GroupService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Slf4j
@RestController
@RequestMapping("/api/groups")
@RequiredArgsConstructor
@Validated
public class GroupController {
    
    private final GroupService groupService;
    
    /**
     * 모든 그룹 조회
     */
    @GetMapping
    public ResponseEntity<Map<String, Object>> getAllGroups() {
        log.info("모든 그룹 조회 API 호출");
        
        try {
            List<Group> groups = groupService.getAllGroups();
            
            Map<String, Object> response = new HashMap<>();
            response.put("success", true);
            response.put("message", "그룹 목록 조회 성공");
            response.put("data", groups);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            log.error("그룹 목록 조회 실패", e);
            Map<String, Object> response = new HashMap<>();
            response.put("success", false);
            response.put("message", "그룹 목록 조회에 실패했습니다: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }
    
    /**
     * 그룹 검색
     */
    @GetMapping("/search")
    public ResponseEntity<Map<String, Object>> searchGroups(
            @RequestParam(required = false) String groupName,
            @RequestParam(required = false) Integer level,
            @RequestParam(required = false) Boolean isActive) {
        
        log.info("그룹 검색 API 호출 - groupName: {}, level: {}, isActive: {}", groupName, level, isActive);
        
        try {
            Map<String, Object> searchParams = new HashMap<>();
            if (groupName != null && !groupName.trim().isEmpty()) {
                searchParams.put("groupName", groupName.trim());
            }
            if (level != null) {
                searchParams.put("level", level);
            }
            if (isActive != null) {
                searchParams.put("isActive", isActive);
            }
            
            List<Group> groups = groupService.searchGroups(searchParams);
            
            Map<String, Object> response = new HashMap<>();
            response.put("success", true);
            response.put("message", "그룹 검색 성공");
            response.put("data", groups);
            
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            log.error("그룹 검색 실패", e);
            Map<String, Object> response = new HashMap<>();
            response.put("success", false);
            response.put("message", "그룹 검색에 실패했습니다: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }
    
    /**
     * 특정 그룹 조회
     */
    @GetMapping("/{groupId}")
    public ResponseEntity<Map<String, Object>> getGroup(@PathVariable String groupId) {
        log.info("그룹 조회 API 호출 - groupId: {}", groupId);
        
        try {
            Group group = groupService.getGroupByGroupId(groupId);
            if (group == null) {
                Map<String, Object> response = new HashMap<>();
                response.put("success", false);
                response.put("message", "그룹을 찾을 수 없습니다");
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
            }
            
            Map<String, Object> response = new HashMap<>();
            response.put("success", true);
            response.put("message", "그룹 조회 성공");
            response.put("data", group);
            
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            log.error("그룹 조회 실패", e);
            Map<String, Object> response = new HashMap<>();
            response.put("success", false);
            response.put("message", "그룹 조회에 실패했습니다: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }
    
    /**
     * 그룹 생성
     */
    @PostMapping
    public ResponseEntity<Map<String, Object>> saveGroup(@Valid @RequestBody List<GroupDTO> groupDTOs) {
        log.info("그룹 저장 API 호출 - {}", groupDTOs);
        
        try {
            boolean rtn = groupService.saveGroup(groupDTOs);
            Map<String, Object> response = new HashMap<>();
            if(rtn) {
              ResponseEntity<Map<String, Object>> res = getAllGroups();
              response.put("success", true);
              response.put("message", "그룹이 성공적으로 생성되었습니다");
              response.put("data", res.getBody().get("data"));
            }
            return ResponseEntity.status(HttpStatus.CREATED).body(response);
        } catch (IllegalArgumentException e) {
            log.warn("그룹 생성 실패 - 유효성 검증 오류: {}", e.getMessage());
            Map<String, Object> response = new HashMap<>();
            response.put("success", false);
            response.put("message", e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        } catch (Exception e) {
            log.error("그룹 생성 실패", e);
            Map<String, Object> response = new HashMap<>();
            response.put("success", false);
            response.put("message", "그룹 생성에 실패했습니다: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }
    
    /**
     * 그룹 수정
     */
    @PutMapping("/{groupId}")
    public ResponseEntity<Map<String, Object>> updateGroup(
            @PathVariable String groupId, 
            @Valid @RequestBody GroupDTO groupDTO) {
        
        log.info("그룹 수정 API 호출 - groupId: {}, data: {}", groupId, groupDTO);
        
        try {
            Group group = groupService.updateGroup(groupId, groupDTO);
            
            Map<String, Object> response = new HashMap<>();
            response.put("success", true);
            response.put("message", "그룹이 성공적으로 수정되었습니다");
            response.put("data", group);
            
            return ResponseEntity.ok(response);
        } catch (IllegalArgumentException e) {
            log.warn("그룹 수정 실패 - 유효성 검증 오류: {}", e.getMessage());
            Map<String, Object> response = new HashMap<>();
            response.put("success", false);
            response.put("message", e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        } catch (Exception e) {
            log.error("그룹 수정 실패", e);
            Map<String, Object> response = new HashMap<>();
            response.put("success", false);
            response.put("message", "그룹 수정에 실패했습니다: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }
    
    /**
     * 그룹 삭제
     */
    @DeleteMapping("/{groupId}")
    public ResponseEntity<Map<String, Object>> deleteGroup(@PathVariable String groupId) {
        log.info("그룹 삭제 API 호출 - groupId: {}", groupId);
        
        try {
            groupService.deleteGroup(groupId);
            
            Map<String, Object> response = new HashMap<>();
            response.put("success", true);
            response.put("message", "그룹이 성공적으로 삭제되었습니다");
            
            return ResponseEntity.ok(response);
        } catch (IllegalArgumentException e) {
            log.warn("그룹 삭제 실패 - 유효성 검증 오류: {}", e.getMessage());
            Map<String, Object> response = new HashMap<>();
            response.put("success", false);
            response.put("message", e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        } catch (Exception e) {
            log.error("그룹 삭제 실패", e);
            Map<String, Object> response = new HashMap<>();
            response.put("success", false);
            response.put("message", "그룹 삭제에 실패했습니다: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }
    
    /**
     * 그룹 권한 조회
     */
    @GetMapping("/{groupId}/permissions")
    public ResponseEntity<Map<String, Object>> getGroupPermissions(@PathVariable String groupId) {
        log.info("그룹 권한 조회 API 호출 - groupId: {}", groupId);
        
        try {
            List<GroupMenuPermissionDTO> permissions = groupService.getGroupPermissions(groupId);
            
            Map<String, Object> response = new HashMap<>();
            response.put("success", true);
            response.put("message", "그룹 권한 조회 성공");
            response.put("data", permissions);
            
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            log.error("그룹 권한 조회 실패", e);
            Map<String, Object> response = new HashMap<>();
            response.put("success", false);
            response.put("message", "그룹 권한 조회에 실패했습니다: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }
    
    /**
     * 그룹 권한 저장
     */
    @PostMapping("/{groupId}/permissions")
    public ResponseEntity<Map<String, Object>> saveGroupPermissions(
            @PathVariable String groupId,
            @RequestBody List<GroupMenuPermissionDTO> permissions) {
        
        log.info("그룹 권한 저장 API 호출 - groupId: {}, 권한 수: {}", groupId, permissions.size());
        
        try {
            groupService.saveGroupPermissions(groupId, permissions);
            
            Map<String, Object> response = new HashMap<>();
            response.put("success", true);
            response.put("message", "그룹 권한이 성공적으로 저장되었습니다");
            
            return ResponseEntity.ok(response);
        } catch (IllegalArgumentException e) {
            log.warn("그룹 권한 저장 실패 - 유효성 검증 오류: {}", e.getMessage());
            Map<String, Object> response = new HashMap<>();
            response.put("success", false);
            response.put("message", e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        } catch (Exception e) {
            log.error("그룹 권한 저장 실패", e);
            Map<String, Object> response = new HashMap<>();
            response.put("success", false);
            response.put("message", "그룹 권한 저장에 실패했습니다: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }
    
    /**
     * 그룹 ID 중복 확인
     */
    @GetMapping("/check-duplicate/{groupId}")
    public ResponseEntity<Map<String, Object>> checkGroupIdDuplicate(@PathVariable String groupId) {
        log.info("그룹 ID 중복 확인 API 호출 - groupId: {}", groupId);
        
        try {
            boolean exists = groupService.isGroupIdExists(groupId);
            
            Map<String, Object> response = new HashMap<>();
            response.put("success", true);
            response.put("message", "중복 확인 완료");
            response.put("exists", exists);
            
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            log.error("그룹 ID 중복 확인 실패", e);
            Map<String, Object> response = new HashMap<>();
            response.put("success", false);
            response.put("message", "중복 확인에 실패했습니다: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }
}
