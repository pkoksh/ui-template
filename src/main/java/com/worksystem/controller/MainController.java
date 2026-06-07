package com.worksystem.controller;

import com.worksystem.dto.UserDTO;
import com.worksystem.entity.User;
import com.worksystem.service.BoardService;
import com.worksystem.service.UserService;
import com.worksystem.util.EnumMaker;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.Map;

/**
 * 메인 컨트롤러
 */
@Controller
public class MainController {
    
    private static final Logger logger = LoggerFactory.getLogger(MainController.class);

    @Autowired
    private UserService userService;

    @Autowired
    private EnumMaker enumMaker;

    @Autowired
    private BoardService boardService;

    /**
     * 메인 페이지 - Thymeleaf 템플릿 사용
     */
    @GetMapping("/")
    public String index(Model model) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        
        if (auth != null && auth.isAuthenticated() && !"anonymousUser".equals(auth.getName())) {
            UserDTO user = userService.findUserWithGroups(auth.getName());
            
            if (user != null) {
                model.addAttribute("currentUser", Map.of(
                    "userId", user.getUserId(),
                    "name", user.getName(),
                    "email", user.getEmail() != null ? user.getEmail() : "",
                    "department", user.getDepartment() != null ? user.getDepartment() : "",
                    "groupId", user.getPrimaryGroupId() != null ? user.getPrimaryGroupId() : "USER",  // groupId로 변경
                    "groupName", user.getPrimaryGroupName() != null ? user.getPrimaryGroupName() : "일반사용자",  // groupName 추가
                    "primaryGroupId", user.getPrimaryGroupId() != null ? user.getPrimaryGroupId() : "",
                    "primaryGroupName", user.getPrimaryGroupName() != null ? user.getPrimaryGroupName() : ""
                ));
            }
        }
        
        return "index";
    }

    /**
     * 대시보드 페이지
     */
    @GetMapping("/dashboard")
    public String dashboard(Model model) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        
        model.addAttribute("pageTitle", "대시보드");
        model.addAttribute("currentUser", auth != null ? auth.getName() : "guest");
        
        return "pages/dashboard";
    }
    
    /**
     * 메뉴 관리 페이지
     */
    @GetMapping("/menu-management")
    public String menuManagement(Model model) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        
        model.addAttribute("pageTitle", "메뉴 관리");
        model.addAttribute("currentUser", auth != null ? auth.getName() : "guest");
        
        return "pages/menu-management";
    }

    /**
     * 사용자 관리 페이지
     */
    @GetMapping("/user-management")
    public String userManagement(Model model) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        
        model.addAttribute("pageTitle", "사용자 관리");
        model.addAttribute("currentUser", auth != null ? auth.getName() : "guest");
        model.addAttribute("groupEnum", enumMaker.getGroupEnum());
        
        return "pages/user-management";
    }

    /**
     * 그룹 관리 페이지
     */
    @GetMapping("/group-management")
    public String groupManagement(Model model) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();

        model.addAttribute("pageTitle", "그룹 관리");
        model.addAttribute("currentUser", auth != null ? auth.getName() : "guest");
        // 권한 레벨 선택지 — 공통코드(GROUP_LEVEL)에서 동적 공급
        model.addAttribute("levelEnum", enumMaker.getCommonCodeEnum("GROUP_LEVEL"));

        return "pages/group-management";
    }

    /**
     * 게시판 정의 관리 페이지 (ADMIN — 데이터는 /api/boards 로 로드)
     */
    @GetMapping("/board-management")
    public String boardManagement(Model model) {
        model.addAttribute("pageTitle", "게시판 관리");
        return "pages/board-management";
    }

    /**
     * 게시판 페이지 — 단일 동적 라우트: 모든 게시판이 이 라우트 + board.html 한 장으로 동작
     * (미존재/비활성 게시판은 boardName=null로 두고 페이지 JS가 404 처리 —
     *  @Controller는 GlobalExceptionHandler 미적용이라 예외 대신 폴백)
     */
    @GetMapping("/board/{boardCode}")
    public String board(@org.springframework.web.bind.annotation.PathVariable String boardCode, Model model) {
        model.addAttribute("boardCode", boardCode);
        try {
            model.addAttribute("boardName", boardService.requireActiveBoard(boardCode).getBoardName());
        } catch (Exception e) {
            model.addAttribute("boardName", null);
        }
        return "pages/board";
    }

    /**
     * 접속 로그 페이지 (조회 전용 — 데이터는 /api/session-logs 로 로드)
     */
    @GetMapping("/session-log")
    public String sessionLog(Model model) {
        model.addAttribute("pageTitle", "접속 로그");
        return "pages/session-log";
    }

    /**
     * 공통코드 관리 페이지 (마스터-디테일 — 데이터는 /api/common-codes 로 로드)
     */
    @GetMapping("/code-management")
    public String codeManagement(Model model) {
        model.addAttribute("pageTitle", "공통코드 관리");
        return "pages/code-management";
    }

    /**
     * 개인 정보 관리 페이지 (내 프로필 — 데이터는 /api/users/me 로 로드)
     */
    @GetMapping("/my-profile")
    public String myProfile(Model model) {
        model.addAttribute("pageTitle", "개인 정보 관리");
        return "pages/my-profile";
    }

    /**
     * 공지사항 관리 페이지
     */
    @GetMapping("/notice")
    public String noticeManagement(Model model) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();

        model.addAttribute("pageTitle", "공지사항 관리");
        
        // 현재 로그인한 사용자의 정보를 Map으로 설정
        if (auth != null && auth.isAuthenticated() && !"anonymousUser".equals(auth.getName())) {
            UserDTO user = userService.findUserWithGroups(auth.getName());
            
            if (user != null) {
                model.addAttribute("currentUser", Map.of(
                    "userId", user.getUserId(),
                    "name", user.getName(),
                    "email", user.getEmail() != null ? user.getEmail() : "",
                    "department", user.getDepartment() != null ? user.getDepartment() : "",
                    "groupId", user.getPrimaryGroupId() != null ? user.getPrimaryGroupId() : "USER",
                    "groupName", user.getPrimaryGroupName() != null ? user.getPrimaryGroupName() : "일반사용자"
                ));
            } else {
                model.addAttribute("currentUser", Map.of(
                    "userId", "guest",
                    "name", "guest"
                ));
            }
        } else {
            model.addAttribute("currentUser", Map.of(
                "userId", "guest",
                "name", "guest"
            ));
        }

        return "pages/notice";
    }
}