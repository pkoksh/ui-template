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
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.time.LocalDateTime;
import java.util.List;
import java.util.ArrayList;
import java.util.Collection;

/**
 * 사용자 서비스
 */
@Service
@Transactional
public class UserService implements UserDetailsService {

    private static final Logger logger = LoggerFactory.getLogger(UserService.class);

    @Autowired
    private UserMapper userMapper;

    /**
     * Spring Security UserDetailsService 구현
     */
    @Override
    @Transactional(readOnly = true)
    public UserDetails loadUserByUsername(String userId) throws UsernameNotFoundException {
        logger.info("=== CustomUserDetailsService.loadUserByUsername 호출됨: {}", userId);
        
        User user = userMapper.findByUserId(userId);
        if (user == null) {
            logger.warn("사용자를 찾을 수 없음: {}", userId);
            throw new UsernameNotFoundException("사용자를 찾을 수 없습니다: " + userId);
        }
        
        logger.info("=== 데이터베이스에서 사용자 조회 결과: {}", user);
        
        // 사용자의 그룹 권한 조회
        List<String> groupIds = userMapper.findGroupIdsByUserId(userId);
        Collection<GrantedAuthority> authorities = getAuthorities(groupIds);
        
        logger.info("=== 사용자 권한 설정: {}", authorities);
        
        UserDetails userDetails = org.springframework.security.core.userdetails.User.builder()
                .username(user.getUserId())
                .password(user.getPassword())
                .authorities(authorities)
                .accountExpired(false)
                .accountLocked(!user.isActive())
                .credentialsExpired(false)
                .disabled(!user.isActive())
                .build();
        
        logger.info("=== UserDetails 생성 완료: username={}, authorities={}", 
                   userDetails.getUsername(), userDetails.getAuthorities());
        
        return userDetails;
    }

    /**
     * 그룹 목록으로부터 권한 생성
     */
    private Collection<GrantedAuthority> getAuthorities(List<String> groupIds) {
        List<GrantedAuthority> authorities = new ArrayList<>();
        
        // 각 그룹을 ROLE로 변환
        for (String groupId : groupIds) {
            authorities.add(new SimpleGrantedAuthority("ROLE_" + groupId.toUpperCase()));
            logger.info("권한 추가: ROLE_{}", groupId.toUpperCase());
        }
        
        // 그룹이 없는 경우 기본 권한 부여
        if (authorities.isEmpty()) {
            authorities.add(new SimpleGrantedAuthority("ROLE_USER"));
            logger.info("기본 권한 추가: ROLE_USER");
        }
        
        return authorities;
    }

    /**
     * 사용자 ID로 사용자 조회
     */
    @Transactional(readOnly = true)
    public User findByUserId(String userId) {
        return userMapper.findByUserId(userId);
    }

    /**
     * 사용자와 그룹 정보 함께 조회
     */
    @Transactional(readOnly = true)
    public UserDTO findUserWithGroups(String userId) {
        return userMapper.findUserWithGroupsByUserId(userId);
    }

    /**
     * 모든 사용자 조회 (그룹 정보 포함)
     */
    @Transactional(readOnly = true)
    public List<UserDTO> getAllUsersWithGroups() {
        return userMapper.findAllUsersWithGroups();
    }

    /**
     * 사용자 검색 (그룹 정보 포함)
     */
    @Transactional(readOnly = true)
    public List<UserDTO> searchUsers(String userId, String name, String department, String groupId) {
        return userMapper.searchUsersWithGroups(userId, name, department, groupId);
    }

    /**
     * 부서별 사용자 조회
     */
    @Transactional(readOnly = true)
    public List<User> findByDepartment(String department) {
        return userMapper.findByDepartment(department);
    }

    /**
     * 사용자 생성
     */
    public User createUser(User user) {
        user.setActive(true);
        user.setCreatedAt(LocalDateTime.now());
        user.setUpdatedAt(LocalDateTime.now());
        
        userMapper.insert(user);
        return user;
    }

    /**
     * 사용자 업데이트
     */
    public void updateUser(User user) {
        user.setUpdatedAt(LocalDateTime.now());
        userMapper.update(user);
    }

    /**
     * 사용자 삭제
     */
    public void deleteUser(Long id) {
        userMapper.deleteById(id);
    }

    /**
     * 로그인 시간 업데이트
     */
    @Transactional
    public void updateLastLoginAt(String userId) {
        logger.info("=== UserService.updateLastLoginAt 호출됨 ===");
        logger.info("업데이트할 사용자ID: {}", userId);
        
        LocalDateTime now = LocalDateTime.now();
        logger.info("업데이트할 시간: {}", now);
        
        try {
            userMapper.updateLastLoginAt(userId, now);
            logger.info("로그인 시간 업데이트 성공!");
        } catch (Exception e) {
            logger.error("로그인 시간 업데이트 실패: {}", e.getMessage(), e);
        }
        
        logger.info("로그인 시간 업데이트 호출 완료");
    }

    /**
     * 사용자 목록 저장 (IBSheet에서 전송된 데이터)
     */
    @Transactional
    public boolean saveUsers(List<UserDTO> userDTOs) {
        logger.info("사용자 목록 저장 요청 - 사용자 수: {}", userDTOs.size());
        
        try {
            for (UserDTO userDTO : userDTOs) {
                logger.info(userDTO.getStatus());
                if ("I".equals(userDTO.getStatus())) {
                    // 신규 사용자 생성
                    createUserFromDTO(userDTO);
                } else if ("U".equals(userDTO.getStatus())) {
                    // 기존 사용자 수정
                    updateUserFromDTO(userDTO);
                } else if ("D".equals(userDTO.getStatus())) {
                    // 사용자 삭제 (비활성화)
                    deleteUser(userDTO.getUserId());
                }
            }
            return true;
        } catch (Exception e) {
            logger.error("사용자 목록 저장 실패", e);
            return false;
        }
    }

    /**
     * DTO를 이용한 사용자 생성
     */
    private void createUserFromDTO(UserDTO userDTO) {
        logger.info("신규 사용자 생성 - {}", userDTO.getUserId());
        
        // 사용자 ID 중복 확인
        if (userMapper.findByUserId(userDTO.getUserId()) != null) {
            throw new IllegalArgumentException("이미 존재하는 사용자 ID입니다: " + userDTO.getUserId());
        }
        
        User user = User.builder()
                .userId(userDTO.getUserId())
                .password("$2a$10$CQCJQuzIytFGwGYoA19XuODNWuXBbZgVDMXdd3jow8AdDXdZAsrKq") // 기본 비밀번호
                .name(userDTO.getName())
                .email(userDTO.getEmail())
                .department(userDTO.getDepartment())
                .isActive(userDTO.isActive())
                .createdAt(LocalDateTime.now())
                .updatedAt(LocalDateTime.now())
                .build();
        
        userMapper.insert(user);
        
        // 그룹 매핑 추가
        if (userDTO.getGroupIds() != null && !userDTO.getGroupIds().isEmpty()) {
            String[] groupIds = userDTO.getGroupIds().split(";");
            for (String groupId : groupIds) {
                if (!groupId.trim().isEmpty()) {
                    userMapper.insertUserGroupMapping(userDTO.getUserId(), groupId.trim());
                }
            }
        }
        
        logger.info("신규 사용자 생성 완료 - {}", userDTO.getUserId());
    }

    /**
     * DTO를 이용한 사용자 수정
     */
    private void updateUserFromDTO(UserDTO userDTO) {
        logger.info("사용자 수정 - {}", userDTO.getUserId());
        
        User existingUser = userMapper.findByUserId(userDTO.getUserId());
        if (existingUser == null) {
            throw new IllegalArgumentException("존재하지 않는 사용자입니다: " + userDTO.getUserId());
        }
        
        User user = User.builder()
                .userSeq(existingUser.getUserSeq())
                .userId(userDTO.getUserId())
                .password(existingUser.getPassword()) // 비밀번호는 별도 변경
                .name(userDTO.getName())
                .email(userDTO.getEmail())
                .department(userDTO.getDepartment())
                .isActive(userDTO.isActive())
                .createdAt(existingUser.getCreatedAt())
                .updatedAt(LocalDateTime.now())
                .lastLoginAt(existingUser.getLastLoginAt())
                .build();
        
        userMapper.update(user);
        
        // 기존 그룹 매핑 삭제 후 새로 추가
        userMapper.deleteUserGroupMappings(userDTO.getUserId());
        if (userDTO.getGroupIds() != null && !userDTO.getGroupIds().isEmpty()) {
            String[] groupIds = userDTO.getGroupIds().split(";");
            for (String groupId : groupIds) {
                if (!groupId.trim().isEmpty()) {
                    userMapper.insertUserGroupMapping(userDTO.getUserId(), groupId.trim());
                }
            }
        }
        
        logger.info("사용자 수정 완료 - {}", userDTO.getUserId());
    }

    /**
     * 사용자 수정 (단일)
     */
    @Transactional
    public UserDTO updateUser(String userId, UserDTO userDTO) {
        logger.info("사용자 수정 요청 - userId: {}, data: {}", userId, userDTO);
        
        User existingUser = userMapper.findByUserId(userId);
        if (existingUser == null) {
            throw new IllegalArgumentException("존재하지 않는 사용자입니다: " + userId);
        }
        
        User user = User.builder()
                .userSeq(existingUser.getUserSeq())
                .userId(userId)
                .password(existingUser.getPassword()) // 비밀번호는 별도 변경
                .name(userDTO.getName())
                .email(userDTO.getEmail())
                .department(userDTO.getDepartment())
                .isActive(userDTO.isActive())
                .createdAt(existingUser.getCreatedAt())
                .updatedAt(LocalDateTime.now())
                .lastLoginAt(existingUser.getLastLoginAt())
                .build();
        
        userMapper.update(user);
        
        // 기존 그룹 매핑 삭제 후 새로 추가
        userMapper.deleteUserGroupMappings(userId);
        if (userDTO.getGroupIds() != null && !userDTO.getGroupIds().isEmpty()) {
            String[] groupIds = userDTO.getGroupIds().split(";");
            for (String groupId : groupIds) {
                if (!groupId.trim().isEmpty()) {
                    userMapper.insertUserGroupMapping(userId, groupId.trim());
                }
            }
        }
        
        logger.info("사용자 수정 완료 - userId: {}", userId);
        
        return userMapper.findUserWithGroupsByUserId(userId);
    }

    /**
     * 사용자 삭제 (비활성화) - String userId 버전
     */
    @Transactional
    public void deleteUser(String userId) {
        logger.info("사용자 삭제 요청 - userId: {}", userId);
        
        User existingUser = userMapper.findByUserId(userId);
        if (existingUser == null) {
            throw new IllegalArgumentException("존재하지 않는 사용자입니다: " + userId);
        }
        
        userMapper.deleteByUserId(userId);
        logger.info("사용자 삭제 완료 - userId: {}", userId);
    }

    /**
     * 비밀번호 초기화
     */
    @Transactional
    public String resetPassword(String userId) {
        logger.info("비밀번호 초기화 요청 - userId: {}", userId);
        
        User existingUser = userMapper.findByUserId(userId);
        if (existingUser == null) {
            throw new IllegalArgumentException("존재하지 않는 사용자입니다: " + userId);
        }

        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        
        // 기본 비밀번호로 초기화 (암호화된 "password123")
        // String newPassword = "password123";
        // String encodedPassword = "$2a$10$CQCJQuzIytFGwGYoA19XuODNWuXBbZgVDMXdd3jow8AdDXdZAsrKq";
        String newPassword = userId + "1234!"; // userId 기반 초기화
        String encodedPassword = encoder.encode(newPassword);   

        userMapper.updatePassword(userId, encodedPassword);
        
        logger.info("비밀번호 초기화 완료 - userId: {}", userId);
        
        return newPassword;
    }

    /**
     * 사용자 ID 존재 여부 확인
     */
    @Transactional(readOnly = true)
    public boolean isUserIdExists(String userId) {
        return userMapper.findByUserId(userId) != null;
    }
}