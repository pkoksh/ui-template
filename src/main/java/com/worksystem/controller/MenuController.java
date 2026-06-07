package com.worksystem.controller;

import com.worksystem.common.ApiResponse;
import com.worksystem.dto.MenuDTO;
import com.worksystem.service.MenuService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.NoSuchElementException;

/**
 * 메뉴 관리 REST 컨트롤러
 *
 * 응답은 공통 ApiResponse {success, message, data} 표준을 따른다.
 * 예외는 GlobalExceptionHandler가 표준 실패 응답으로 변환한다.
 * 인증되지 않은 요청은 Security 필터(SecurityConfig)가 401로 차단하므로 여기서 별도 체크하지 않는다.
 */
@Slf4j
@RestController
@RequestMapping("/api/menus")
@RequiredArgsConstructor
public class MenuController {

    private final MenuService menuService;

    /**
     * 모든 메뉴 조회 (계층 구조)
     */
    @GetMapping
    public ApiResponse<List<MenuDTO>> getAllMenus() {
        return ApiResponse.ok(menuService.getAllMenusHierarchy());
    }

    /**
     * 메뉴명 또는 URL 검색
     */
    @GetMapping("/search")
    public ApiResponse<List<MenuDTO>> searchMenus(@RequestParam(required = false) String title,
                                                  @RequestParam(required = false) String url) {
        return ApiResponse.ok(menuService.searchMenus(title, url));
    }

    /**
     * 메뉴 저장 (IBSheet 일괄 저장 — status 'I'/'U'/'D' 분기)
     */
    @PostMapping
    public ApiResponse<Void> saveMenus(@RequestBody List<MenuDTO> menus) {
        boolean result = menuService.saveMenu(menus);
        if (!result) {
            throw new IllegalStateException("메뉴 저장에 실패했습니다.");
        }
        return ApiResponse.okMessage("메뉴가 성공적으로 저장되었습니다.");
    }

    /**
     * 활성화된 메뉴만 조회
     */
    @GetMapping("/active")
    public ApiResponse<List<MenuDTO>> getActiveMenus() {
        return ApiResponse.ok(menuService.getActiveMenusHierarchy());
    }

    /**
     * 로그인한 사용자의 권한에 따른 메뉴 조회 (좌측 메뉴 렌더링용)
     */
    @GetMapping("/user-accessible")
    public ApiResponse<List<MenuDTO>> getUserAccessibleMenus() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String userId = authentication.getName();
        return ApiResponse.ok(menuService.getAccessibleMenusForUser(userId));
    }

    /**
     * 특정 사용자의 권한에 따른 메뉴 조회 (관리자용)
     */
    @GetMapping("/user/{userId}/accessible")
    public ApiResponse<List<MenuDTO>> getUserAccessibleMenus(@PathVariable String userId) {
        return ApiResponse.ok(menuService.getAccessibleMenusForUser(userId));
    }

    /**
     * 현재 로그인한 사용자의 특정 메뉴 접근 권한 확인
     */
    @GetMapping("/check-access/{menuId}")
    public ApiResponse<Map<String, Boolean>> checkMenuAccess(@PathVariable String menuId) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String userId = authentication.getName();
        boolean hasAccess = menuService.hasMenuAccess(userId, menuId);
        return ApiResponse.ok(Map.of("hasAccess", hasAccess));
    }

    /**
     * 현재 로그인한 사용자의 특정 메뉴 권한 상세 조회
     */
    @GetMapping("/permissions/{menuId}")
    public ApiResponse<MenuDTO> getMenuPermissions(@PathVariable String menuId) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String userId = authentication.getName();
        MenuDTO permissions = menuService.getMenuPermissions(userId, menuId);
        if (permissions == null) {
            throw new NoSuchElementException("메뉴 권한 정보를 찾을 수 없습니다: " + menuId);
        }
        return ApiResponse.ok(permissions);
    }
}
