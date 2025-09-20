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
        // 개발 환경에서 정적 리소스 캐시 완전 비활성화
        
        // CSS 리소스 (assets 경로 추가)
        registry.addResourceHandler("/assets/css/**")
                .addResourceLocations("file:src/main/resources/static/assets/css/", "classpath:/static/assets/css/")
                .setCachePeriod(0)
                .resourceChain(false);
        
        // JS 리소스 (assets 경로 추가)
        registry.addResourceHandler("/assets/js/**")
                .addResourceLocations("file:src/main/resources/static/assets/js/", "classpath:/static/assets/js/")
                .setCachePeriod(0)
                .resourceChain(false);
        
        // 이미지 리소스
        registry.addResourceHandler("/assets/images/**")
                .addResourceLocations("file:src/main/resources/static/assets/images/", "classpath:/static/assets/images/")
                .setCachePeriod(0)
                .resourceChain(false);
        
        // 파비콘 리소스
        registry.addResourceHandler("/assets/favicon/**")
                .addResourceLocations("file:src/main/resources/static/assets/favicon/", "classpath:/static/assets/favicon/")
                .setCachePeriod(0)
                .resourceChain(false);
        
        // 페이지 리소스
        registry.addResourceHandler("/pages/**")
                .addResourceLocations("file:src/main/resources/static/pages/", "classpath:/static/pages/")
                .setCachePeriod(0)
                .resourceChain(false);
        
        // 루트 레벨 파일들 (script.js 등)
        registry.addResourceHandler("/script.js")
                .addResourceLocations("file:src/main/resources/static/", "classpath:/static/")
                .setCachePeriod(0)
                .resourceChain(false);
                
        // HTML 파일들
        registry.addResourceHandler("/*.html")
                .addResourceLocations("file:src/main/resources/static/", "classpath:/static/")
                .setCachePeriod(0)
                .resourceChain(false);
    }

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        // 기본 페이지 설정 (로그인 페이지는 제거 - Spring Security가 처리)
        registry.addViewController("/").setViewName("forward:/index.html");
    }
}
