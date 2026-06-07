package com.worksystem.mapper;

import com.worksystem.dto.NoticeDTO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * 대시보드 통계 매퍼 (조회 전용)
 */
@Mapper
public interface DashboardMapper {

    /** 활성 사용자 수 */
    long countActiveUsers();

    /** 활성 그룹 수 */
    long countActiveGroups();

    /** 활성 메뉴 수 */
    long countActiveMenus();

    /** 전체 공지 수 */
    long countNotices();

    /** 최근 공지 목록 (최신순 상위 N건) */
    List<NoticeDTO> findRecentNotices(@Param("limit") int limit);
}
