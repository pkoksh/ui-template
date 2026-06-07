package com.worksystem.controller;

import com.worksystem.common.ApiResponse;
import com.worksystem.service.DashboardService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

/**
 * 대시보드 REST 컨트롤러 (조회 전용 도메인 본보기)
 *
 * 응답은 공통 ApiResponse {success, message, data} 표준을 따른다.
 */
@RestController
@RequestMapping("/api/dashboard")
@RequiredArgsConstructor
public class DashboardController {

    private final DashboardService dashboardService;

    /**
     * 대시보드 통계 조회
     */
    @GetMapping("/stats")
    public ApiResponse<Map<String, Object>> getStats() {
        return ApiResponse.ok(dashboardService.getStats());
    }
}
