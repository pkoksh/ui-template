package com.worksystem.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * Web MVC 설정
 */
@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        // 정적 리소스 핸들러 설정
        registry.addResourceHandler("/css/**")
                .addResourceLocations("classpath:/static/css/");
        
        registry.addResourceHandler("/js/**")
                .addResourceLocations("classpath:/static/js/");
        
        registry.addResourceHandler("/images/**")
                .addResourceLocations("classpath:/static/images/");
        
        registry.addResourceHandler("/favicon/**")
                .addResourceLocations("classpath:/static/favicon/");
        
        registry.addResourceHandler("/pages/**")
                .addResourceLocations("classpath:/static/pages/");
        
        // 루트 레벨 파일들
        registry.addResourceHandler("/script.js")
                .addResourceLocations("classpath:/static/script.js");
                
        // HTML 파일들을 다시 추가 (Spring Security가 우선순위를 가짐)
        registry.addResourceHandler("/*.html")
                .addResourceLocations("classpath:/static/");
    }

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        // 기본 페이지 설정 (로그인 페이지는 제거 - Spring Security가 처리)
        registry.addViewController("/").setViewName("forward:/index.html");
    }
}
