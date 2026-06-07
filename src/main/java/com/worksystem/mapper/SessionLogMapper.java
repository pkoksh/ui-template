package com.worksystem.mapper;

import com.worksystem.dto.ActiveSessionDTO;
import com.worksystem.dto.LoginHistoryDTO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;

/**
 * 접속 로그 매퍼 — login_history + SPRING_SESSION 직조회
 */
@Mapper
public interface SessionLogMapper {

    /** 로그인 이력 기록 */
    void insertHistory(@Param("userId") String userId,
                       @Param("eventType") String eventType,
                       @Param("failReason") String failReason,
                       @Param("ipAddress") String ipAddress,
                       @Param("userAgent") String userAgent,
                       @Param("sessionId") String sessionId);

    /** 로그인 이력 조회 (기간/사용자 필터, 최신순, LIMIT) */
    List<LoginHistoryDTO> findHistory(Map<String, Object> params);

    /**
     * 활성 세션 직조회 — SessionRegistryImpl(메모리)은 서버 재시작 시 유실되므로
     * JDBC 세션 저장소(SPRING_SESSION)가 단일 소스 (설계 §3-2)
     */
    List<ActiveSessionDTO> findActiveSessions();
}
