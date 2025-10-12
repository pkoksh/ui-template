package com.worksystem.service;

import com.worksystem.entity.Notice;
import com.worksystem.dto.NoticeDTO;
import com.worksystem.mapper.NoticeMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

/**
 * 공지사항 서비스
 */
@Service
@Transactional
public class NoticeService {

    @Autowired
    private NoticeMapper noticeMapper;

    /**
     * 모든 공지사항 조회
     */
    public List<NoticeDTO> getAllNotices() {
        return noticeMapper.selectAllNotices();
    }

    /**
     * 공지사항 검색
     */
    public List<NoticeDTO> searchNotices(String searchContent, String searchName) {
        return noticeMapper.searchNotices(searchContent, searchName);
    }

    /**
     * 공지사항 상세 조회
     */
    public Notice getNoticeBySeq(Long seq) {
        return noticeMapper.selectNoticeBySeq(seq);
    }

    /**
     * 공지사항 등록
     */
    public int createNotice(Notice notice) {
        // 생성 시간 설정
        notice.setCreatedAt(LocalDateTime.now());
        notice.setUpdatedAt(LocalDateTime.now());
        
        // 기본값 설정
        if (notice.getIsPinned() == null) {
            notice.setIsPinned(false);
        }
        if (notice.getIsActive() == null) {
            notice.setIsActive(true);
        }
        if (notice.getViewCount() == null) {
            notice.setViewCount(0);
        }
        
        return noticeMapper.insertNotice(notice);
    }

    /**
     * 공지사항 수정
     */
    public int updateNotice(Notice notice) {
        // 수정 시간 설정
        notice.setUpdatedAt(LocalDateTime.now());
        return noticeMapper.updateNotice(notice);
    }

    /**
     * 공지사항 삭제
     */
    public int deleteNotice(Long seq) {
        return noticeMapper.deleteNotice(seq);
    }

    /**
     * 조회수 증가
     */
    public int increaseViewCount(Long seq) {
        return noticeMapper.updateViewCount(seq);
    }

    /**
     * 활성화된 공지사항만 조회 (사용자용)
     */
    public List<NoticeDTO> getActiveNotices() {
        return noticeMapper.selectActiveNotices();
    }

    /**
     * 상단 고정 공지사항 조회
     */
    public List<NoticeDTO> getPinnedNotices() {
        return noticeMapper.selectPinnedNotices();
    }

    /**
     * DTO를 Entity로 변환
     */
    public Notice convertToEntity(NoticeDTO dto) {
        Notice notice = new Notice();
        notice.setSeq(dto.getSeq());
        notice.setTitle(dto.getTitle());
        notice.setContent(dto.getContent());
        notice.setAuthorId(dto.getAuthorId());
        notice.setAuthorName(dto.getAuthorName());
        notice.setIsPinned(dto.getPinned());
        notice.setIsActive(dto.getActive());
        notice.setViewCount(dto.getViewCount());
        notice.setFilePath(dto.getAttachment());
        notice.setCreatedAt(dto.getCreatedAt());
        notice.setUpdatedAt(dto.getUpdatedAt());
        return notice;
    }

    /**
     * Entity를 DTO로 변환
     */
    public NoticeDTO convertToDTO(Notice entity) {
        NoticeDTO dto = new NoticeDTO();
        dto.setSeq(entity.getSeq());
        dto.setTitle(entity.getTitle());
        dto.setContent(entity.getContent());
        dto.setAuthorId(entity.getAuthorId());
        dto.setAuthorName(entity.getAuthorName());
        dto.setPinned(entity.getIsPinned());
        dto.setActive(entity.getIsActive());
        dto.setViewCount(entity.getViewCount());
        dto.setAttachment(entity.getFilePath());
        dto.setCreatedAt(entity.getCreatedAt());
        dto.setUpdatedAt(entity.getUpdatedAt());
        return dto;
    }
}
