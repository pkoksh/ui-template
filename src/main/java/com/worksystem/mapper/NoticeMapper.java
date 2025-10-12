package com.worksystem.mapper;

import com.worksystem.entity.Notice;
import com.worksystem.dto.NoticeDTO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * 공지사항 Mapper
 */
@Mapper
public interface NoticeMapper {

    /**
     * 모든 공지사항 조회
     */
    List<NoticeDTO> selectAllNotices();

    /**
     * 공지사항 검색
     */
    List<NoticeDTO> searchNotices(@Param("searchContent") String searchContent, 
                                 @Param("searchName") String searchName);

    /**
     * 공지사항 상세 조회 (seq로)
     */
    Notice selectNoticeBySeq(@Param("seq") Long seq);

    /**
     * 공지사항 등록
     */
    int insertNotice(Notice notice);

    /**
     * 공지사항 수정
     */
    int updateNotice(Notice notice);

    /**
     * 공지사항 삭제
     */
    int deleteNotice(@Param("seq") Long seq);

    /**
     * 조회수 증가
     */
    int updateViewCount(@Param("seq") Long seq);

    /**
     * 활성화된 공지사항만 조회 (사용자용)
     */
    List<NoticeDTO> selectActiveNotices();

    /**
     * 상단 고정 공지사항 조회
     */
    List<NoticeDTO> selectPinnedNotices();
}
