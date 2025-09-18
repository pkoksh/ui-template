package com.worksystem.mapper;

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
     * ID로 사용자 조회
     */
    User findById(@Param("id") Long id);
    
    /**
     * 모든 사용자 조회
     */
    List<User> findAll();
    
    /**
     * 부서별 사용자 조회
     */
    List<User> findByDepartment(@Param("department") String department);
    
    /**
     * 역할별 사용자 조회
     */
    List<User> findByRole(@Param("role") String role);
    
    /**
     * 사용자 생성
     */
    int insert(User user);
    
    /**
     * 사용자 정보 수정
     */
    int update(User user);
    
    /**
     * 사용자 비밀번호 변경
     */
    int updatePassword(@Param("userId") String userId, @Param("password") String password);
    
    /**
     * 마지막 로그인 시간 업데이트
     */
    int updateLastLoginAt(@Param("userId") String userId, @Param("lastLoginAt") LocalDateTime lastLoginAt);
    
    /**
     * 사용자 활성화/비활성화
     */
    int updateEnabled(@Param("userId") String userId, @Param("enabled") boolean enabled);
    
    /**
     * 사용자 삭제
     */
    int delete(@Param("userId") String userId);
    
    /**
     * 사용자 ID 존재 여부 확인
     */
    boolean existsByUserId(@Param("userId") String userId);
    
    /**
     * 이메일 존재 여부 확인
     */
    boolean existsByEmail(@Param("email") String email);
}
