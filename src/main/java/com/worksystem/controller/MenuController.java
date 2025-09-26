package com.worksystem.controller;

import com.worksystem.dto.MenuDTO;
import com.worksystem.service.MenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/menus")
public class MenuController {

    @Autowired
    private MenuService menuService;

    /**
     * 모든 메뉴 조회 (계층 구조)
     */
    @GetMapping
    public ResponseEntity<List<MenuDTO>> getAllMenus() {
        try {
            List<MenuDTO> menus = menuService.getAllMenusHierarchy();
            return ResponseEntity.ok(menus);
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }

    /**
     * 특정 메뉴명 또는 Url 검색
     * @param userId
     * @return
     */
    @GetMapping("/search")
    public ResponseEntity<List<MenuDTO>> searchMenus(@RequestParam(required = false) String title,
                                                     @RequestParam(required = false) String url) {
        try {
            List<MenuDTO> menus = menuService.searchMenus(title, url);
            return ResponseEntity.ok(menus);
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }

    /**
     * 메뉴 입력/수정/삭제
     */
    @PostMapping
    public ResponseEntity<MenuDTO> saveMenus(@RequestBody List<MenuDTO> menus) {
        try {
            boolean result = menuService.saveMenu(menus);
            if (result) {
                return ResponseEntity.ok().build();
            } else {
                return ResponseEntity.badRequest().build();
            }
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }



    /**
     * 활성화된 메뉴만 조회
     */
    @GetMapping("/active")
    public ResponseEntity<List<MenuDTO>> getActiveMenus() {
        try {
            List<MenuDTO> menus = menuService.getActiveMenusHierarchy();
            return ResponseEntity.ok(menus);
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }

    /**
     * 로그인한 사용자의 권한에 따른 메뉴 조회
     */
    @GetMapping("/user-accessible")
    public ResponseEntity<List<MenuDTO>> getUserAccessibleMenus() {
        try {
            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            if (authentication == null || !authentication.isAuthenticated()) {
                return ResponseEntity.status(401).build();
            }
            
            String userId = authentication.getName();
            List<MenuDTO> menus = menuService.getAccessibleMenusForUser(userId);
            return ResponseEntity.ok(menus);
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }

    /**
     * 특정 사용자의 권한에 따른 메뉴 조회 (관리자용)
     */
    @GetMapping("/user/{userId}/accessible")
    public ResponseEntity<List<MenuDTO>> getUserAccessibleMenus(@PathVariable String userId) {
        try {
            List<MenuDTO> menus = menuService.getAccessibleMenusForUser(userId);
            return ResponseEntity.ok(menus);
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }

    /**
     * 현재 로그인한 사용자의 특정 메뉴 접근 권한 확인
     */
    @GetMapping("/check-access/{menuId}")
    public ResponseEntity<Boolean> checkMenuAccess(@PathVariable String menuId) {
        try {
            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            if (authentication == null || !authentication.isAuthenticated()) {
                return ResponseEntity.status(401).build();
            }
            
            String userId = authentication.getName();
            boolean hasAccess = menuService.hasMenuAccess(userId, menuId);
            return ResponseEntity.ok(hasAccess);
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }

    /**
     * 현재 로그인한 사용자의 특정 메뉴 권한 상세 조회
     */
    @GetMapping("/permissions/{menuId}")
    public ResponseEntity<MenuDTO> getMenuPermissions(@PathVariable String menuId) {
        try {
            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            if (authentication == null || !authentication.isAuthenticated()) {
                return ResponseEntity.status(401).build();
            }
            
            String userId = authentication.getName();
            MenuDTO permissions = menuService.getMenuPermissions(userId, menuId);
            if (permissions == null) {
                return ResponseEntity.notFound().build();
            }
            return ResponseEntity.ok(permissions);
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }
}
