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

 
}
