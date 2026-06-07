package com.worksystem.controller;

import com.worksystem.common.ApiResponse;
import com.worksystem.dto.GroupDTO;
import com.worksystem.dto.GroupMenuPermissionDTO;
import com.worksystem.entity.Group;
import com.worksystem.service.GroupService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.NoSuchElementException;

/**
 * 그룹(권한) 관리 REST 컨트롤러
 *
 * 응답은 공통 ApiResponse {success, message, data} 표준을 따른다.
 * 예외는 GlobalExceptionHandler가 표준 실패 응답으로 변환한다.
 */
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
    public ApiResponse<List<Group>> getAllGroups() {
        log.info("모든 그룹 조회 API 호출");
        return ApiResponse.ok(groupService.getAllGroups());
    }

    /**
     * 그룹 검색
     */
    @GetMapping("/search")
    public ApiResponse<List<Group>> searchGroups(
            @RequestParam(required = false) String groupName,
            @RequestParam(required = false) Integer level,
            @RequestParam(required = false) Boolean isActive) {

        log.info("그룹 검색 API 호출 - groupName: {}, level: {}, isActive: {}", groupName, level, isActive);

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
        return ApiResponse.ok(groupService.searchGroups(searchParams));
    }

    /**
     * 특정 그룹 조회
     */
    @GetMapping("/{groupId}")
    public ApiResponse<Group> getGroup(@PathVariable String groupId) {
        log.info("그룹 조회 API 호출 - groupId: {}", groupId);

        Group group = groupService.getGroupByGroupId(groupId);
        if (group == null) {
            throw new NoSuchElementException("그룹을 찾을 수 없습니다: " + groupId);
        }
        return ApiResponse.ok(group);
    }

    /**
     * 그룹 저장 (IBSheet 일괄 저장 — status 'I'/'U'/'D' 분기)
     */
    @PostMapping
    public ApiResponse<List<Group>> saveGroup(@Valid @RequestBody List<GroupDTO> groupDTOs) {
        log.info("그룹 저장 API 호출 - 그룹 수: {}", groupDTOs.size());

        boolean result = groupService.saveGroup(groupDTOs);
        if (!result) {
            throw new IllegalStateException("그룹 저장에 실패했습니다.");
        }
        // 저장 후 최신 목록을 함께 반환
        return ApiResponse.ok("그룹이 성공적으로 저장되었습니다", groupService.getAllGroups());
    }

    /**
     * 그룹 수정
     */
    @PutMapping("/{groupId}")
    public ApiResponse<Group> updateGroup(
            @PathVariable String groupId,
            @Valid @RequestBody GroupDTO groupDTO) {

        log.info("그룹 수정 API 호출 - groupId: {}", groupId);
        return ApiResponse.ok("그룹이 성공적으로 수정되었습니다",
                groupService.updateGroup(groupId, groupDTO));
    }

    /**
     * 그룹 삭제
     */
    @DeleteMapping("/{groupId}")
    public ApiResponse<Void> deleteGroup(@PathVariable String groupId) {
        log.info("그룹 삭제 API 호출 - groupId: {}", groupId);

        groupService.deleteGroup(groupId);
        return ApiResponse.okMessage("그룹이 성공적으로 삭제되었습니다");
    }

    /**
     * 그룹 권한 조회
     */
    @GetMapping("/{groupId}/permissions")
    public ApiResponse<List<GroupMenuPermissionDTO>> getGroupPermissions(@PathVariable String groupId) {
        log.info("그룹 권한 조회 API 호출 - groupId: {}", groupId);
        return ApiResponse.ok(groupService.getGroupPermissions(groupId));
    }

    /**
     * 그룹 권한 저장
     */
    @PostMapping("/{groupId}/permissions")
    public ApiResponse<Void> saveGroupPermissions(
            @PathVariable String groupId,
            @RequestBody List<GroupMenuPermissionDTO> permissions) {

        log.info("그룹 권한 저장 API 호출 - groupId: {}, 권한 수: {}", groupId, permissions.size());

        groupService.saveGroupPermissions(groupId, permissions);
        return ApiResponse.okMessage("그룹 권한이 성공적으로 저장되었습니다");
    }

    /**
     * 그룹 ID 중복 확인
     */
    @GetMapping("/check-duplicate/{groupId}")
    public ApiResponse<Map<String, Boolean>> checkGroupIdDuplicate(@PathVariable String groupId) {
        log.info("그룹 ID 중복 확인 API 호출 - groupId: {}", groupId);

        boolean exists = groupService.isGroupIdExists(groupId);
        return ApiResponse.ok("중복 확인 완료", Map.of("exists", exists));
    }
}
