package com.worksystem.service;

import com.worksystem.dto.UserDTO;
import com.worksystem.entity.User;
import com.worksystem.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

/**
 * 사용자 서비스
 * Spring Security UserDetailsService 구현
 */
@Service
@Transactional
public class UserService implements UserDetailsService {

    @Autowired
    private UserMapper userMapper;

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String userId) throws UsernameNotFoundException {
        User user = userMapper.findByUserId(userId);
        
        if (user == null) {
            throw new UsernameNotFoundException("사용자를 찾을 수 없습니다: " + userId);
        }

        if (!user.isActive()) {
            throw new UsernameNotFoundException("비활성화된 사용자입니다: " + userId);
        }

        // 마지막 로그인 시간 업데이트는 LoginSuccessHandler에서 처리

        return new org.springframework.security.core.userdetails.User(
            user.getUserId(),
            user.getPassword(),
            user.isActive(),
            true, // accountNonExpired
            true, // credentialsNonExpired
            true, // accountNonLocked
            getAuthorities(user.getGroupId())
        );
    }

    /**
     * 사용자 권한 설정
     */
    private Collection<? extends GrantedAuthority> getAuthorities(String role) {
        List<GrantedAuthority> authorities = new ArrayList<>();
        authorities.add(new SimpleGrantedAuthority("ROLE_" + role));
        return authorities;
    }

    /**
     * 사용자 조회 (ID)
     */
    @Transactional(readOnly = true)
    public UserDTO findByUserId(String userId) {
        return UserDTO.from(userMapper.findByUserId(userId));
    }

    /**
     * 모든 사용자 조회
     */
    @Transactional(readOnly = true)
    public List<UserDTO> findAll() {
        return UserDTO.from(userMapper.findAll());
    }

    /**
     * 부서별 사용자 조회
     */
    @Transactional(readOnly = true)
    public List<User> findByDepartment(String department) {
        return userMapper.findByDepartment(department);
    }

    /**
     * 그룹(역할)별 사용자 조회 (role -> groupId 명칭 변경)
     */
    @Transactional(readOnly = true)
    public List<User> findByGroupId(String groupId) {
        return userMapper.findByGroupId(groupId);
    }

    /**
     * 사용자 생성
     */
    public User createUser(User user) {
        // 개발 단계에서는 비밀번호를 그대로 저장
        user.setActive(true);
        user.setCreatedAt(LocalDateTime.now());
        user.setUpdatedAt(LocalDateTime.now());
        
        userMapper.insert(user);
        return user;
    }

    /**
     * 사용자 정보 수정
     */
    public User updateUser(User user) {
        user.setUpdatedAt(LocalDateTime.now());
        userMapper.update(user);
        return userMapper.findByUserId(user.getUserId());
    }

    /**
     * 비밀번호 변경
     */
    public void changePassword(String userId, String newPassword) {
        // 개발 단계에서는 비밀번호를 그대로 저장
        userMapper.updatePassword(userId, newPassword);
    }

    /**
     * 사용자 활성화/비활성화
     */
    public void toggleUserStatus(String userId, boolean enabled) {
        userMapper.updateEnabled(userId, enabled);
    }

    /**
     * 사용자 삭제
     */
    public void deleteUser(String userId) {
        userMapper.delete(userId);
    }

    /**
     * 사용자 ID 중복 확인
     */
    @Transactional(readOnly = true)
    public boolean isUserIdExists(String userId) {
        return userMapper.existsByUserId(userId);
    }

    /**
     * 이메일 중복 확인
     */
    @Transactional(readOnly = true)
    public boolean isEmailExists(String email) {
        return userMapper.existsByEmail(email);
    }
    
    /**
     * 로그인 시간 업데이트 (별도 메서드)
     */
    @Transactional
    public void updateLastLoginAt(String userId) {
        System.out.println("=== UserService.updateLastLoginAt 호출됨 ===");
        System.out.println("업데이트할 사용자ID: " + userId);
        System.out.println("업데이트할 시간: " + LocalDateTime.now());
        
        try {
            int updateResult = userMapper.updateLastLoginAt(userId, LocalDateTime.now());
            System.out.println("MyBatis 업데이트 결과: " + updateResult + "행 업데이트됨");
            
            if (updateResult == 0) {
                System.err.println("경고: 업데이트된 행이 없습니다. 사용자가 존재하지 않을 수 있습니다.");
            } else {
                System.out.println("로그인 시간 업데이트 성공!");
            }
        } catch (Exception e) {
            System.err.println("로그인 시간 업데이트 실패: " + e.getMessage());
            e.printStackTrace();
        }
    }
}
