package com.worksystem.dto;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

public class MenuDTO {
    private Long id;
    private String menuId;
    private String title;
    private String url;
    private String icon;
    private String parentId; // String 타입으로 변경
    private Integer sortOrder;
    private Boolean isActive;
    private String requiredGroup; // 추가
    @JsonProperty("Items")
    private List<MenuDTO> items;
    private String status; // For IBSheet 상태 관리


    public MenuDTO() {
        this.items = new ArrayList<>();
    }

    public MenuDTO(Long id, String menuId, String title, String url, String icon, 
                   String parentId, Integer sortOrder, Boolean isActive, String requiredGroup, String status) {
        this.id = id;
        this.menuId = menuId;
        this.title = title;
        this.url = url;
        this.icon = icon;
        this.parentId = parentId;
        this.sortOrder = sortOrder;
        this.isActive = isActive;
        this.items = new ArrayList<>();
        this.requiredGroup = requiredGroup;
        this.status = status;
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

    public List<MenuDTO> getItems() {
        return items;
    }

    public void setItems(List<MenuDTO> items) {
        this.items = items;
    }

    public void addChild(MenuDTO child) {
        this.items.add(child);
    }

    public boolean hasItems() {
        return items != null && !items.isEmpty();
    }

    public String getRequiredGroup() {
        return requiredGroup;
    }

    public void setRequiredGroup(String requiredGroup) {
        this.requiredGroup = requiredGroup;
    }

    public String getStatus() {
        return status;
    }
    public void setStatus(String status) {
        this.status = status;
    }
    
}
