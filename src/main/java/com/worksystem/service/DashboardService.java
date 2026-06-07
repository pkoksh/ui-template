package com.worksystem.service;

import com.worksystem.mapper.DashboardMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Map;

/**
 * 대시보드 통계 서비스 (조회 전용)
 */
@Service
@RequiredArgsConstructor
public class DashboardService {

    private final DashboardMapper dashboardMapper;

    /**
     * 대시보드 통계 — 활성 사용자/그룹/메뉴 수, 공지 수, 최근 공지 목록
     */
    public Map<String, Object> getStats() {
        return Map.of(
                "userCount", dashboardMapper.countActiveUsers(),
                "groupCount", dashboardMapper.countActiveGroups(),
                "menuCount", dashboardMapper.countActiveMenus(),
                "noticeCount", dashboardMapper.countNotices(),
                "recentNotices", dashboardMapper.findRecentNotices(5)
        );
    }
}
