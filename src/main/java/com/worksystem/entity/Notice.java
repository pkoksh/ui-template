package com.worksystem.entity;

import java.time.LocalDateTime;

/**
 * 공지사항 엔티티
 */
public class Notice {
    private Long seq;                   // 공지사항 번호
    private String title;               // 제목
    private String content;             // 내용
    private String authorId;              // 작성자 ID
    private String authorName;          // 작성자명
    private Boolean isPinned;           // 상단고정 여부
    private Boolean isActive;           // 활성 여부
    private Integer viewCount;          // 조회수
    private String filePath;            // 첨부파일 경로
    private LocalDateTime createdAt;    // 생성일시
    private LocalDateTime updatedAt;    // 수정일시

    // 기본 생성자
    public Notice() {}

    // 전체 생성자
    public Notice(Long seq, String title, String content, String authorId, String authorName, 
                 Boolean isPinned, Boolean isActive, Integer viewCount, String filePath,
                 LocalDateTime createdAt, LocalDateTime updatedAt) {
        this.seq = seq;
        this.title = title;
        this.content = content;
        this.authorId = authorId;
        this.authorName = authorName;
        this.isPinned = isPinned;
        this.isActive = isActive;
        this.viewCount = viewCount;
        this.filePath = filePath;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    // Getter와 Setter
    public Long getSeq() {
        return seq;
    }

    public void setSeq(Long seq) {
        this.seq = seq;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getAuthorId() {
        return authorId;
    }

    public void setAuthorId(String authorId) {
        this.authorId = authorId;
    }

    public String getAuthorName() {
        return authorName;
    }

    public void setAuthorName(String authorName) {
        this.authorName = authorName;
    }

    public Boolean getIsPinned() {
        return isPinned;
    }

    public void setIsPinned(Boolean isPinned) {
        this.isPinned = isPinned;
    }

    public Boolean getIsActive() {
        return isActive;
    }

    public void setIsActive(Boolean isActive) {
        this.isActive = isActive;
    }

    public Integer getViewCount() {
        return viewCount;
    }

    public void setViewCount(Integer viewCount) {
        this.viewCount = viewCount;
    }

    public String getFilePath() {
        return filePath;
    }

    public void setFilePath(String filePath) {
        this.filePath = filePath;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(LocalDateTime updatedAt) {
        this.updatedAt = updatedAt;
    }

    // toString 메서드
    @Override
    public String toString() {
        return "Notice{" +
                "seq=" + seq +
                ", title='" + title + '\'' +
                ", content='" + content + '\'' +
                ", authorId'=" + authorId + '\'' +
                ", authorName='" + authorName + '\'' +
                ", isPinned=" + isPinned +
                ", isActive=" + isActive +
                ", viewCount=" + viewCount +
                ", filePath='" + filePath + '\'' +
                ", createdAt=" + createdAt +
                ", updatedAt=" + updatedAt +
                '}';
    }
}
