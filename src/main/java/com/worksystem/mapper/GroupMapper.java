package com.worksystem.mapper;

import com.worksystem.entity.Group;
import com.worksystem.dto.GroupMenuPermissionDTO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;

/**
 * 그룹 매퍼 인터페이스
 */
@Mapper
public interface GroupMapper {
    
    /**
     * 모든 그룹 조회
     */
    List<Group> findAll();
    
    /**
     * 그룹 ID로 그룹 조회
     */
    Group findByGroupId(@Param("groupId") String groupId);
    
    /**
     * ID로 그룹 조회
     */
    Group findById(@Param("groupSeq") Long groupSeq);
    
    /**
     * 검색 조건으로 그룹 조회
     */
    List<Group> findBySearchCondition(Map<String, Object> searchParams);    /**
     * 그룹 생성
     */
    int insert(Group group);
    
    /**
     * 그룹 정보 수정
     */
    int update(Group group);
    
    /**
     * 그룹 삭제
     */
    int delete(@Param("groupId") String groupId);
    
    /**
     * 그룹 ID 존재 여부 확인
     */
    boolean existsByGroupId(@Param("groupId") String groupId);
    
    /**
     * 그룹명 존재 여부 확인 (수정 시 자기 제외)
     */
    boolean existsByGroupNameExcludingSelf(@Param("groupName") String groupName, @Param("groupId") String groupId);
    
    /**
     * 특정 그룹의 메뉴 권한 조회
     */
    List<GroupMenuPermissionDTO> findPermissionsByGroupId(@Param("groupId") String groupId);
    
    /**
     * 그룹 메뉴 권한 삭제 (기존 권한 모두 삭제)
     */
    int deletePermissionsByGroupId(@Param("groupId") String groupId);
    
    /**
     * 그룹 메뉴 권한 추가
     */
    int insertPermission(@Param("groupId") String groupId, 
                        @Param("menuId") String menuId,
                        @Param("canRead") Boolean canRead,
                        @Param("canWrite") Boolean canWrite,
                        @Param("canDelete") Boolean canDelete,
                        @Param("canAdmin") Boolean canAdmin);
    
    /**
     * 그룹 메뉴 권한 일괄 추가
     */
    int insertPermissions(@Param("permissions") List<GroupMenuPermissionDTO> permissions);
}
