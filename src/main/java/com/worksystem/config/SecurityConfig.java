package com.worksystem.config;

import com.worksystem.service.CustomUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.core.session.SessionRegistry;
import org.springframework.security.core.session.SessionRegistryImpl;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

/**
 * Spring Security 설정
 */
@Configuration
@EnableWebSecurity
public class SecurityConfig {
    
    @Autowired
    private CustomUserDetailsService userDetailsService;
    
    /**
     * 비밀번호 인코더 - BCrypt 사용
     */
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
    
    /**
     * 세션 레지스트리 - 세션 관리를 위한 Bean
     */
    @Bean
    public SessionRegistry sessionRegistry() {
        return new SessionRegistryImpl();
    }
    
    /**
     * DaoAuthenticationProvider 설정
     */
    @Bean
    public AuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
        authProvider.setUserDetailsService(userDetailsService);
        authProvider.setPasswordEncoder(passwordEncoder());
        return authProvider;
    }
    
    /**
     * 정적 리소스 완전 제외 - Spring Security 필터를 통과하지 않음
     */
    @Bean
    public WebSecurityCustomizer webSecurityCustomizer() {
        return (web) -> web.ignoring()
                .requestMatchers("/js/**", "/css/**", "/images/**", "/favicon/**")
                .requestMatchers("/static/**", "/resources/**", "/webjars/**")
                .requestMatchers("/favicon.ico", "/script.js")
                .requestMatchers("/error");
    }
    
    /**
     * 보안 필터 체인 설정
     */
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        return http
            // CSRF 설정
            .csrf(csrf -> csrf.disable())  // 개발 단계에서 CSRF 완전히 비활성화
            
            // 세션 관리 설정
            .sessionManagement(session -> session
                .sessionCreationPolicy(org.springframework.security.config.http.SessionCreationPolicy.IF_REQUIRED)
                .maximumSessions(1)
                .maxSessionsPreventsLogin(false)
                .sessionRegistry(sessionRegistry())
                .expiredUrl("/login.html")
            )
            
            // 요청 권한 설정 - 순서가 중요함!
            .authorizeHttpRequests(auth -> auth
                // 1. 정적 리소스를 가장 먼저 허용 (더 구체적인 패턴 사용)
                .requestMatchers("/js/**").permitAll()
                .requestMatchers("/css/**").permitAll()
                .requestMatchers("/images/**").permitAll()
                .requestMatchers("/favicon/**").permitAll()
                .requestMatchers("/static/**").permitAll()
                .requestMatchers("/resources/**").permitAll()
                .requestMatchers("/webjars/**").permitAll()
                .requestMatchers("/favicon.ico").permitAll()
                .requestMatchers("/script.js").permitAll()
                
                // 2. 로그인 관련 페이지와 API 허용
                .requestMatchers("/login.html", "/login").permitAll()
                .requestMatchers("/api/auth/login").permitAll()
                .requestMatchers("/api/auth/encode-passwords").permitAll() // 개발용 암호화 엔드포인트
                .requestMatchers("/error").permitAll()
                
                // 3. 인증된 사용자만 접근 가능한 API
                .requestMatchers("/api/auth/user").authenticated()
                
                // 4. 메인 페이지는 인증 필요하지만 forward는 허용
                .requestMatchers("/", "/index.html").authenticated()
                
                // 4. 관리자 전용 페이지
                .requestMatchers("/admin/**").hasRole("ADMIN")
                
                // 5. 나머지 모든 요청은 인증 필요
                .anyRequest().authenticated()
            )
            
            // 폼 로그인 설정
            .formLogin(form -> form
                .loginPage("/login.html")
                .loginProcessingUrl("/api/auth/login")
                .usernameParameter("userId")
                .passwordParameter("password")
                .defaultSuccessUrl("/", true)
                .failureUrl("/login.html?error=true")
                .permitAll()
            )
            
            // Remember-Me 기능 추가
            .rememberMe(remember -> remember
                .key("worksystem-remember-me-key")
                .tokenValiditySeconds(86400 * 7) // 7일
                .userDetailsService(userDetailsService)
                .rememberMeParameter("remember-me") // login.js와 일치하도록 수정
            )
            
            // 로그아웃 설정
            .logout(logout -> logout
                .logoutRequestMatcher(new AntPathRequestMatcher("/api/auth/logout"))
                .logoutSuccessUrl("/login.html?logout")
                .invalidateHttpSession(true)
                .clearAuthentication(true)
                .deleteCookies("JSESSIONID", "remember-me")
                .permitAll()
            )
            
            // 접근 거부 처리
            .exceptionHandling(ex -> ex
                .accessDeniedPage("/login.html?access_denied=true")
            )
            
            // iframe 허용을 위한 헤더 설정
            .headers(headers -> headers
                .frameOptions().sameOrigin() // 같은 도메인에서 iframe 허용
            )
            
            // 인증 제공자 설정
            .authenticationProvider(authenticationProvider())
            
            .build();
    }
}
