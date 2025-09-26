package com.worksystem.service;

import com.worksystem.dto.GroupDTO;
import com.worksystem.dto.GroupMenuPermissionDTO;
import com.worksystem.entity.Group;
import com.worksystem.mapper.GroupMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Slf4j
@Service
@RequiredArgsConstructor
@Transactional
public class GroupService {
    
    private final GroupMapper groupMapper;
    
    /**
     * 모든 그룹 조회
     */
    @Transactional(readOnly = true)
    public List<Group> getAllGroups() {
        log.info("모든 그룹 조회 요청");
        List<Group> groups = groupMapper.findAll();
        log.info("조회된 그룹 수: {}", groups.size());
        return groups;
    }
    
    /**
     * 그룹 ID로 조회
     */
    @Transactional(readOnly = true)
    public Group getGroupByGroupId(String groupId) {
        log.info("그룹 조회 요청 - groupId: {}", groupId);
        Group group = groupMapper.findByGroupId(groupId);
        if (group == null) {
            log.warn("그룹을 찾을 수 없습니다 - groupId: {}", groupId);
        }
        return group;
    }
    
    /**
     * 검색 조건으로 그룹 조회
     */
    @Transactional(readOnly = true)
    public List<Group> searchGroups(Map<String, Object> searchParams) {
        log.info("그룹 검색 요청 - 조건: {}", searchParams);
        List<Group> groups = groupMapper.findBySearchCondition(searchParams);
        log.info("검색된 그룹 수: {}", groups.size());
        return groups;
    }
    
    @Transactional
    public boolean saveGroup(List<GroupDTO> groupDTOs) {
      try {
        for(GroupDTO groupDTO : groupDTOs) {
          log.info("그룹 저장 요청 - {}", groupDTO);
          switch(groupDTO.getStatus()) {
            case "I":
              createGroup(groupDTO);
              break;
            case "U":
              updateGroup(groupDTO.getGroupId(), groupDTO);
              break;
            case "D":
              deleteGroup(groupDTO.getGroupId());
              break;
            default:
              log.warn("알 수 없는 상태: {}", groupDTO.getStatus());
          }
        }
        return true;
      }catch(Exception e) {
        return false;
      }
    }

    /**
     * 그룹 생성
     */
    public Group createGroup(GroupDTO groupDTO) {
        log.info("그룹 생성 요청 - {}", groupDTO);
        
        // 그룹 ID 중복 확인
        if (groupMapper.existsByGroupId(groupDTO.getGroupId())) {
            throw new IllegalArgumentException("이미 존재하는 그룹 ID입니다: " + groupDTO.getGroupId());
        }
        
        Group group = Group.builder()
                .groupId(groupDTO.getGroupId())
                .groupName(groupDTO.getGroupName())
                .description(groupDTO.getDescription())
                .level(groupDTO.getLevel() != null ? groupDTO.getLevel() : 1)
                .isActive(groupDTO.getIsActive() != null ? groupDTO.getIsActive() : true)
                .build();
        
        groupMapper.insert(group);
        log.info("그룹 생성 완료 - groupId: {}, groupSeq: {}", group.getGroupId(), group.getGroupSeq());
        
        return group;
    }
    
    /**
     * 그룹 정보 수정
     */
    public Group updateGroup(String groupId, GroupDTO groupDTO) {
        log.info("그룹 수정 요청 - groupId: {}, data: {}", groupId, groupDTO);
        
        // 기존 그룹 존재 확인
        Group existingGroup = groupMapper.findByGroupId(groupId);
        if (existingGroup == null) {
            throw new IllegalArgumentException("존재하지 않는 그룹입니다: " + groupId);
        }
        
        // 그룹명 중복 확인 (자기 제외)
        if (groupMapper.existsByGroupNameExcludingSelf(groupDTO.getGroupName(), groupId)) {
            throw new IllegalArgumentException("이미 존재하는 그룹명입니다: " + groupDTO.getGroupName());
        }
        
        Group group = Group.builder()
                .groupSeq(existingGroup.getGroupSeq())
                .groupId(groupId)
                .groupName(groupDTO.getGroupName())
                .description(groupDTO.getDescription())
                .level(groupDTO.getLevel())
                .isActive(groupDTO.getIsActive())
                .build();
        
        groupMapper.update(group);
        log.info("그룹 수정 완료 - groupId: {}", groupId);
        
        return groupMapper.findByGroupId(groupId);
    }
    
    /**
     * 그룹 삭제
     */
    public void deleteGroup(String groupId) {
        log.info("그룹 삭제 요청 - groupId: {}", groupId);
        
        // 그룹 존재 확인
        if (!groupMapper.existsByGroupId(groupId)) {
            throw new IllegalArgumentException("존재하지 않는 그룹입니다: " + groupId);
        }
        
        // 그룹의 권한 정보도 함께 삭제
        groupMapper.deletePermissionsByGroupId(groupId);
        groupMapper.delete(groupId);
        
        log.info("그룹 삭제 완료 - groupId: {}", groupId);
    }
    
    /**
     * 그룹의 메뉴 권한 조회
     */
    @Transactional(readOnly = true)
    public List<GroupMenuPermissionDTO> getGroupPermissions(String groupId) {
        log.info("그룹 권한 조회 요청 - groupId: {}", groupId);
        
        List<GroupMenuPermissionDTO> permissions = groupMapper.findPermissionsByGroupId(groupId);
        log.info("조회된 권한 수: {} (그룹: {})", permissions.size(), groupId);
        
        return permissions;
    }
    
    /**
     * 그룹 메뉴 권한 저장
     */
    public void saveGroupPermissions(String groupId, List<GroupMenuPermissionDTO> permissions) {
        log.info("그룹 권한 저장 요청 - groupId: {}, 권한 수: {}", groupId, permissions.size());
        
        // 그룹 존재 확인
        if (!groupMapper.existsByGroupId(groupId)) {
            throw new IllegalArgumentException("존재하지 않는 그룹입니다: " + groupId);
        }
        
        // 기존 권한 모두 삭제
        groupMapper.deletePermissionsByGroupId(groupId);
        
        // 새로운 권한 추가
        if (!permissions.isEmpty()) {
            // groupId 설정
            permissions.forEach(permission -> permission.setGroupId(groupId));
            groupMapper.insertPermissions(permissions);
        }
        
        log.info("그룹 권한 저장 완료 - groupId: {}", groupId);
    }
    
    /**
     * 그룹 ID 중복 확인
     */
    @Transactional(readOnly = true)
    public boolean isGroupIdExists(String groupId) {
        return groupMapper.existsByGroupId(groupId);
    }
    
    /**
     * 그룹명 중복 확인 (수정 시 자기 제외)
     */
    @Transactional(readOnly = true)
    public boolean isGroupNameDuplicate(String groupName, String excludeGroupId) {
        if (excludeGroupId == null) {
            return groupMapper.existsByGroupId(groupName);
        }
        return groupMapper.existsByGroupNameExcludingSelf(groupName, excludeGroupId);
    }
}
