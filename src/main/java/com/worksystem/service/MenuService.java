package com.worksystem.service;

import com.worksystem.dto.MenuDTO;
import com.worksystem.entity.Menu;
import com.worksystem.mapper.MenuMapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class MenuService {

    private static final Logger log = LoggerFactory.getLogger(MenuService.class);

    @Autowired
    private MenuMapper menuMapper;

    /**
     * 모든 메뉴를 계층 구조로 반환
     */
    public List<MenuDTO> getAllMenusHierarchy() {
        List<Menu> allMenus = menuMapper.findAllByOrderBySortOrderAsc();
        return buildMenuHierarchy(allMenus);
    }

    /**
     * 특정 메뉴명 또는 URL로 메뉴 검색
     */
    public List<MenuDTO> searchMenus(String name, String url) {
        List<Menu> matchedMenus = menuMapper.findByNameOrUrl(name, url);
        return buildMenuHierarchy(matchedMenus);
    }

    /**
     * 활성화된 메뉴만 계층 구조로 반환
     */
    public List<MenuDTO> getActiveMenusHierarchy() {
        List<Menu> activeMenus = menuMapper.findByEnabledTrueOrderBySortOrderAsc();
        return buildMenuHierarchy(activeMenus);
    }

    /**
     * 사용자 권한에 따른 접근 가능한 메뉴 조회
     */
    public List<MenuDTO> getAccessibleMenusForUser(String userId) {
        List<Menu> accessibleMenus = menuMapper.findAccessibleMenusByUserId(userId);
        return buildMenuHierarchy(accessibleMenus);
    }

    /**
     * 특정 메뉴에 대한 사용자 권한 확인
     */
    public boolean hasMenuAccess(String userId, String menuId) {
        return menuMapper.checkUserMenuAccess(userId, menuId) > 0;
    }

    /**
     * 사용자의 메뉴별 권한 정보 조회 (읽기/쓰기/삭제)
     */
    public MenuDTO getMenuPermissions(String userId, String menuId) {
        return menuMapper.findMenuPermissionsByUserAndMenu(userId, menuId);
    }



    /**
     * 메뉴 리스트를 계층 구조로 변환
     */
    private List<MenuDTO> buildMenuHierarchy(List<Menu> menus) {
        Map<String, MenuDTO> menuMap = new HashMap<>(); // Long 대신 String 사용
        List<MenuDTO> rootMenus = new ArrayList<>();

        // 1단계: 모든 메뉴를 DTO로 변환하여 Map에 저장
        for (Menu menu : menus) {
            MenuDTO menuDTO = convertToDTO(menu);
            menuMap.put(menu.getMenuId(), menuDTO); // menuId를 key로 사용
        }

        // 2단계: 부모-자식 관계 설정
        for (Menu menu : menus) {
            MenuDTO menuDTO = menuMap.get(menu.getMenuId());
            
            if (menu.getParentId() == null) {
                // 최상위 메뉴
                rootMenus.add(menuDTO);
            } else {
                // 자식 메뉴
                MenuDTO parentMenu = menuMap.get(menu.getParentId());
                if (parentMenu != null) {
                    parentMenu.addChild(menuDTO);
                }
            }
        }

        return rootMenus;
    }

    /**
     * Menu 엔티티를 MenuDTO로 변환
     */
    private MenuDTO convertToDTO(Menu menu) {
        MenuDTO dto = new MenuDTO();
        dto.setId(menu.getId());
        dto.setMenuId(menu.getMenuId());
        dto.setTitle(menu.getTitle());
        dto.setUrl(menu.getUrl());
        dto.setIcon(menu.getIcon());
        dto.setParentId(menu.getParentId());
        dto.setSortOrder(menu.getSortOrder());
        dto.setIsActive(menu.getIsActive());
        return dto;
    }
    
    public boolean saveMenu(List<MenuDTO> menus) {
        try {
            
            for (MenuDTO menuDTO : menus) {
                if (menuDTO.getStatus().equals("I")) {
                    // 신규 메뉴 생성
                    createMenu(menuDTO);
                } else if (menuDTO.getStatus().equals("D")) {
                    // 삭제 처리
                    deleteMenu(menuDTO.getId());
                } else {
                    // 기존 메뉴 수정
                    updateMenu(menuDTO);
                }
            }
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }


    /**
     * 메뉴 생성
     */
    public MenuDTO createMenu(MenuDTO menuDTO) {
        Menu menu = convertToEntity(menuDTO);
        menuMapper.insert(menu);
        return convertToDTO(menu);
    }

    /**
     * 메뉴 수정
     */
    public MenuDTO updateMenu(MenuDTO menuDTO) {
        Menu menu = convertToEntity(menuDTO);
        menuMapper.update(menu);
        return convertToDTO(menu);
    }

    /**
     * 메뉴 삭제
     */
    public void deleteMenu(Long id) {
        menuMapper.deleteById(id);
    }

    /**
     * MenuDTO를 Menu 엔티티로 변환
     */
    private Menu convertToEntity(MenuDTO dto) {
        Menu menu = new Menu();
        menu.setId(dto.getId());
        menu.setMenuId(dto.getMenuId());
        menu.setTitle(dto.getTitle());
        menu.setUrl(dto.getUrl());
        menu.setIcon(dto.getIcon());
        menu.setParentId(dto.getParentId());
        menu.setSortOrder(dto.getSortOrder());
        menu.setIsActive(dto.getIsActive());
        if (menu.getCreatedAt() == null) {
            menu.setCreatedAt(java.time.LocalDateTime.now());
        }
        return menu;
    }
}
