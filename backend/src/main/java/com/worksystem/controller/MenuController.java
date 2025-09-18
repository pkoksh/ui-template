package com.worksystem.controller;

import com.worksystem.dto.MenuDTO;
import com.worksystem.service.MenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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
     * 특정 사용자의 권한에 따른 메뉴 조회
     */
    @GetMapping("/user/{userId}")
    public ResponseEntity<List<MenuDTO>> getMenusByUser(@PathVariable Long userId) {
        try {
            List<MenuDTO> menus = menuService.getMenusByUser(userId);
            return ResponseEntity.ok(menus);
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
     * 메뉴 생성
     */
    @PostMapping
    public ResponseEntity<MenuDTO> createMenu(@RequestBody MenuDTO menuDTO) {
        try {
            MenuDTO createdMenu = menuService.createMenu(menuDTO);
            return ResponseEntity.ok(createdMenu);
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }

    /**
     * 메뉴 수정
     */
    @PutMapping("/{id}")
    public ResponseEntity<MenuDTO> updateMenu(@PathVariable Long id, @RequestBody MenuDTO menuDTO) {
        try {
            menuDTO.setId(id);
            MenuDTO updatedMenu = menuService.updateMenu(menuDTO);
            return ResponseEntity.ok(updatedMenu);
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }

    /**
     * 메뉴 삭제
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMenu(@PathVariable Long id) {
        try {
            menuService.deleteMenu(id);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }

    /**
     * 특정 메뉴 조회
     */
    @GetMapping("/{id}")
    public ResponseEntity<MenuDTO> getMenuById(@PathVariable Long id) {
        try {
            MenuDTO menu = menuService.getMenuById(id);
            if (menu != null) {
                return ResponseEntity.ok(menu);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }
}
