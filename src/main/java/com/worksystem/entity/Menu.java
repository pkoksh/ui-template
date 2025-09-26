package com.worksystem.entity;

public class Menu {
    
    private Long id;
    private String menuId;
    private String parentId; // Long 대신 String 사용
    private String title;
    private String url; // path 대신 url 사용
    private String icon;
    private Integer sortOrder = 0;
    private Boolean isActive = true; 
    private String requiredGroup;
    private String description;

    // 기본 생성자
    public Menu() {}

    // 생성자
    public Menu(String menuId, String title, String url, String icon, 
                String parentId, Integer sortOrder, Boolean isActive) {
        this.menuId = menuId;
        this.title = title;
        this.url = url;
        this.icon = icon;
        this.parentId = parentId;
        this.sortOrder = sortOrder;
        this.isActive = isActive;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getMenuId() {
        return menuId;
    }

    public void setMenuId(String menuId) {
        this.menuId = menuId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getIcon() {
        return icon;
    }

    public void setIcon(String icon) {
        this.icon = icon;
    }

    public String getParentId() {
        return parentId;
    }

    public void setParentId(String parentId) {
        this.parentId = parentId;
    }

    public Integer getSortOrder() {
        return sortOrder;
    }

    public void setSortOrder(Integer sortOrder) {
        this.sortOrder = sortOrder;
    }

    public Boolean getIsActive() {
        return isActive;
    }

    public void setIsActive(Boolean isActive) {
        this.isActive = isActive;
    }

    public String getRequiredGroup() {
        return requiredGroup;
    }

    public void setRequiredGroup(String requiredGroup) {
        this.requiredGroup = requiredGroup;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
