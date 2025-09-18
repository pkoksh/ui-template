package com.worksystem;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * 업무시스템 메인 애플리케이션
 * 
 * @author WorkSystem Team
 * @version 1.0.0
 */
@SpringBootApplication
@MapperScan("com.worksystem.repository")
public class WorkSystemApplication {

    public static void main(String[] args) {
        SpringApplication.run(WorkSystemApplication.class, args);
        System.out.println("=".repeat(60));
        System.out.println("    업무시스템이 성공적으로 시작되었습니다!");
        System.out.println("    URL: http://localhost:8080");
        System.out.println("=".repeat(60));
    }
}
