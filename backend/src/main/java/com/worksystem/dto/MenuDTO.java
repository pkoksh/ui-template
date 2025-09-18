package com.worksystem.dto;

import java.util.ArrayList;
import java.util.List;

public class MenuDTO {
    private Long id;
    private String menuId;
    private String title;
    private String path;
    private String icon;
    private String parentId; // String 타입으로 변경
    private Integer sortOrder;
    private Boolean isActive;
    private String requiredRole; // 추가
    private List<MenuDTO> children;

    public MenuDTO() {
        this.children = new ArrayList<>();
    }

    public MenuDTO(Long id, String menuId, String title, String path, String icon, 
                   String parentId, Integer sortOrder, Boolean isActive) {
        this.id = id;
        this.menuId = menuId;
        this.title = title;
        this.path = path;
        this.icon = icon;
        this.parentId = parentId;
        this.sortOrder = sortOrder;
        this.isActive = isActive;
        this.children = new ArrayList<>();
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

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
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

    public List<MenuDTO> getChildren() {
        return children;
    }

    public void setChildren(List<MenuDTO> children) {
        this.children = children;
    }

    public void addChild(MenuDTO child) {
        this.children.add(child);
    }

    public boolean hasChildren() {
        return children != null && !children.isEmpty();
    }

    public String getRequiredRole() {
        return requiredRole;
    }

    public void setRequiredRole(String requiredRole) {
        this.requiredRole = requiredRole;
    }
}
