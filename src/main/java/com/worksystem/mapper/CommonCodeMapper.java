package com.worksystem.mapper;

import com.worksystem.dto.CommonCodeDTO;
import com.worksystem.dto.CommonCodeGroupDTO;
import com.worksystem.entity.CommonCode;
import com.worksystem.entity.CommonCodeGroup;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;

/**
 * 공통코드 매퍼
 */
@Mapper
public interface CommonCodeMapper {

    // ===== 코드 그룹 =====
    List<CommonCodeGroup> findGroups(Map<String, Object> searchParams);

    CommonCodeGroup findGroupById(@Param("id") Long id);

    CommonCodeGroup findGroupByCode(@Param("groupCode") String groupCode);

    void insertGroup(CommonCodeGroupDTO group);

    void updateGroup(CommonCodeGroupDTO group);

    void deleteGroup(@Param("id") Long id);

    // ===== 상세 코드 =====
    List<CommonCode> findCodesByGroup(@Param("groupCode") String groupCode);

    CommonCode findCodeById(@Param("id") Long id);

    boolean existsCode(@Param("groupCode") String groupCode, @Param("code") String code);

    void insertCode(CommonCodeDTO code);

    void updateCode(CommonCodeDTO code);

    void deleteCode(@Param("id") Long id);

    // ===== 소비(enum) =====
    List<CommonCode> findActiveCodesByGroup(@Param("groupCode") String groupCode);
}
