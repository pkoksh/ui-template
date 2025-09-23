package com.worksystem.service;

import com.worksystem.entity.User;
import com.worksystem.mapper.UserMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collections;

/**
 * Spring Security용 사용자 인증 서비스
 */
@Service
public class CustomUserDetailsService implements UserDetailsService {

    private static final Logger logger = LoggerFactory.getLogger(CustomUserDetailsService.class);

    @Autowired
    private UserMapper userMapper;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        logger.debug("=== CustomUserDetailsService.loadUserByUsername 호출됨: {}", username);
        
        User user = userMapper.findByUserId(username);
        logger.debug("=== 데이터베이스에서 사용자 조회 결과: {}", user);
        
        if (user == null) {
            logger.error("=== 사용자를 찾을 수 없음: {}", username);
            throw new UsernameNotFoundException("사용자를 찾을 수 없습니다: " + username);
        }
        
        if (!user.getIsActive()) {
            logger.error("=== 비활성화된 사용자: {}", username);
            throw new UsernameNotFoundException("비활성화된 사용자입니다: " + username);
        }
        
        // 권한 설정 (ROLE_ 접두사 필요)
        SimpleGrantedAuthority authority = new SimpleGrantedAuthority("ROLE_" + user.getGroupId().toUpperCase());
        logger.debug("=== 사용자 권한 설정: {}", authority.getAuthority());
        
        UserDetails userDetails = org.springframework.security.core.userdetails.User.builder()
                .username(user.getUserId())
                .password(user.getPassword()) // 평문 비밀번호
                .authorities(Collections.singletonList(authority))
                .build();
        
        logger.debug("=== UserDetails 생성 완료: username={}, authorities={}", 
                    userDetails.getUsername(), userDetails.getAuthorities());
        
        return userDetails;
    }
}
