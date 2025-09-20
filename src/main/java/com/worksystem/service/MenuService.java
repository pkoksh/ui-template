package com.worksystem.service;

import com.worksystem.dto.MenuDTO;
import com.worksystem.entity.Menu;
import com.worksystem.repository.MenuRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class MenuService {

    @Autowired
    private MenuRepository menuRepository;

    /**
     * 모든 메뉴를 계층 구조로 반환
     */
    public List<MenuDTO> getAllMenusHierarchy() {
        List<Menu> allMenus = menuRepository.findAllByOrderBySortOrderAsc();
        return buildMenuHierarchy(allMenus);
    }

    /**
     * 특정 메뉴명 또는 URL로 메뉴 검색
     */
    public List<MenuDTO> searchMenus(String name, String url) {
        List<Menu> matchedMenus = menuRepository.findByNameOrUrl(name, url);
        return buildMenuHierarchy(matchedMenus);
    }

    /**
     * 활성화된 메뉴만 계층 구조로 반환
     */
    public List<MenuDTO> getActiveMenusHierarchy() {
        List<Menu> activeMenus = menuRepository.findByEnabledTrueOrderBySortOrderAsc();
        return buildMenuHierarchy(activeMenus);
    }

    /**
     * 특정 사용자의 권한에 따른 메뉴 반환
     */
    public List<MenuDTO> getMenusByUser(Long userId) {
        // TODO: 사용자 권한에 따른 메뉴 필터링 로직 구현
        // 현재는 활성화된 메뉴만 반환
        return getActiveMenusHierarchy();
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
        dto.setUrl(menu.getUrl()); // url을 path로 매핑
        dto.setIcon(menu.getIcon());
        dto.setParentId(menu.getParentId()); // String to String
        dto.setSortOrder(menu.getSortOrder());
        dto.setIsActive(menu.getEnabled()); // enabled를 isActive로 매핑
        dto.setRequiredRole(menu.getRequiredRole()); // requiredRole 매핑 추가
        return dto;
    }

    /**
     * 특정 메뉴 조회
     */
    public MenuDTO getMenuById(Long id) {
        Menu menu = menuRepository.findById(id).orElse(null);
        return menu != null ? convertToDTO(menu) : null;
    }

    /**
     * 메뉴 ID로 메뉴 조회
     */
    public MenuDTO getMenuByMenuId(String menuId) {
        Menu menu = menuRepository.findByMenuId(menuId);
        return menu != null ? convertToDTO(menu) : null;
    }

    /**
     * 메뉴 생성
     */
    public MenuDTO createMenu(MenuDTO menuDTO) {
        Menu menu = convertToEntity(menuDTO);
        menuRepository.insert(menu);
        return convertToDTO(menu);
    }

    /**
     * 메뉴 수정
     */
    public MenuDTO updateMenu(MenuDTO menuDTO) {
        Menu menu = convertToEntity(menuDTO);
        menuRepository.update(menu);
        return convertToDTO(menu);
    }

    /**
     * 메뉴 삭제
     */
    public void deleteMenu(Long id) {
        menuRepository.deleteById(id);
    }

    /**
     * MenuDTO를 Menu 엔티티로 변환
     */
    private Menu convertToEntity(MenuDTO dto) {
        Menu menu = new Menu();
        menu.setId(dto.getId());
        menu.setMenuId(dto.getMenuId());
        menu.setTitle(dto.getTitle());
        menu.setUrl(dto.getUrl()); // path를 url로 매핑
        menu.setIcon(dto.getIcon());
        menu.setParentId(dto.getParentId());
        menu.setSortOrder(dto.getSortOrder());
        menu.setEnabled(dto.getIsActive()); // isActive를 enabled로 매핑
        menu.setRequiredRole(dto.getRequiredRole()); // requiredRole 매핑 추가
        return menu;
    }
}
