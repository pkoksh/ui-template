package com.worksystem.config;

import com.worksystem.entity.Menu;
import com.worksystem.repository.MenuRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class DataInitializer implements CommandLineRunner {

    @Autowired
    private MenuRepository menuRepository;

    @Override
    public void run(String... args) throws Exception {
        // 기존 메뉴 데이터가 있는지 확인
        List<Menu> existingMenus = menuRepository.findAllByOrderBySortOrderAsc();
        
        if (existingMenus.isEmpty()) {
            initializeMenuData();
            System.out.println("✅ 메뉴 기본 데이터를 생성했습니다.");
        } else {
            System.out.println("ℹ️ 메뉴 데이터가 이미 존재합니다. 총 " + existingMenus.size() + "개의 메뉴가 있습니다.");
        }
    }

    private void initializeMenuData() {
        // 최상위 메뉴들
        createMenu("dashboard", "대시보드", null, "/dashboard", "bx-tachometer", 1, true, "USER", "시스템 대시보드");
        createMenu("projects", "프로젝트 관리", null, null, "bx-folder", 2, true, "USER", "프로젝트 관리 메뉴");
        createMenu("tasks", "업무 관리", null, null, "bx-task", 3, true, "USER", "업무 관리 메뉴");
        createMenu("reports", "보고서", null, "/reports", "bx-line-chart", 4, true, "USER", "보고서 메뉴");
        createMenu("system", "시스템 관리", null, null, "bx-cog", 5, true, "ADMIN", "시스템 관리 메뉴");
        createMenu("settings", "설정", null, "/settings", "bx-cog", 6, true, "USER", "설정 메뉴");

        // 프로젝트 관리 하위 메뉴
        createMenu("project-new", "새 프로젝트", "projects", "/project-new", "bx-plus", 21, true, "USER", "새 프로젝트 생성");
        createMenu("project-templates", "프로젝트 템플릿", "projects", "/project-templates", "bx-bookmark", 22, true, "USER", "프로젝트 템플릿 관리");
        createMenu("project-archive", "프로젝트 아카이브", "projects", "/project-archive", "bx-archive", 23, true, "USER", "완료된 프로젝트 아카이브");

        // 업무 관리 하위 메뉴
        createMenu("task-my", "내 업무", "tasks", "/task-my", "bx-user", 31, true, "USER", "내가 담당한 업무");
        createMenu("task-calendar", "업무 캘린더", "tasks", "/task-calendar", "bx-calendar", 32, true, "USER", "업무 일정 캘린더");
        createMenu("task-timeline", "업무 타임라인", "tasks", "/task-timeline", "bx-time", 33, true, "USER", "업무 진행 타임라인");

        // 시스템 관리 하위 메뉴
        createMenu("menu-management", "메뉴 관리", "system", "/menu-management", "bx-menu", 51, true, "ADMIN", "시스템 메뉴 관리");
    }

    private void createMenu(String menuId, String title, String parentId, String url, String icon, 
                          int sortOrder, boolean enabled, String requiredRole, String description) {
        Menu menu = new Menu();
        menu.setMenuId(menuId);
        menu.setTitle(title);
        menu.setParentId(parentId);
        menu.setUrl(url);
        menu.setIcon(icon);
        menu.setSortOrder(sortOrder);
        menu.setEnabled(enabled);
        menu.setRequiredRole(requiredRole);
        menu.setDescription(description);
        
        menuRepository.insert(menu);
    }
}
