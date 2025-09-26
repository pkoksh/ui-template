package com.worksystem.mapper;

import com.worksystem.dto.UserDTO;
import com.worksystem.entity.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.time.LocalDateTime;
import java.util.List;

/**
 * 사용자 매퍼 인터페이스
 */
@Mapper
public interface UserMapper {
    
    /**
     * 사용자 ID로 사용자 조회
     */
    User findByUserId(@Param("userId") String userId);
    
    /**
     * 사용자 ID로 사용자와 그룹 정보 함께 조회
     */
    UserDTO findUserWithGroupsByUserId(@Param("userId") String userId);
    
    /**
     * 사용자 ID로 그룹 목록 조회
     */
    List<String> findGroupIdsByUserId(@Param("userId") String userId);
    
    /**
     * ID로 사용자 조회
     */
    User findById(@Param("id") Long id);
    
    /**
     * 모든 사용자 조회
     */
    List<User> findAll();
    
    /**
     * 모든 사용자를 그룹 정보와 함께 조회
     */
    List<UserDTO> findAllUsersWithGroups();
    
    /**
     * 부서별 사용자 조회
     */
    List<User> findByDepartment(@Param("department") String department);
    
    /**
     * 사용자 삽입
     */
    void insert(User user);
    
    /**
     * 사용자 업데이트
     */
    void update(User user);
    
    /**
     * 사용자 삭제
     */
    void deleteById(@Param("id") Long id);
    
    /**
     * 마지막 로그인 시간 업데이트
     */
    void updateLastLoginAt(@Param("userId") String userId, @Param("lastLoginAt") LocalDateTime lastLoginAt);
    
    /**
     * 사용자 검색
     */
    List<UserDTO> searchUsersWithGroups(@Param("userId") String userId, 
                                       @Param("name") String name, 
                                       @Param("department") String department,
                                       @Param("groupId") String groupId);
    
    /**
     * 사용자 ID로 삭제 (비활성화)
     */
    void deleteByUserId(@Param("userId") String userId);
    
    /**
     * 비밀번호 업데이트
     */
    void updatePassword(@Param("userId") String userId, @Param("password") String password);
    
    /**
     * 사용자-그룹 매핑 추가
     */
    void insertUserGroupMapping(@Param("userId") String userId, @Param("groupId") String groupId);
    
    /**
     * 사용자-그룹 매핑 삭제 (사용자의 모든 그룹)
     */
    void deleteUserGroupMappings(@Param("userId") String userId);
}