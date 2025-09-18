// script.js - 메인 초기화 및 애플리케이션 진입점

// 전역 변수
let openTabs = [{ id: 'dashboard', title: '대시보드' }];
let activeTab = 'dashboard';
let currentUser = null;

// 페이지별 정리 함수를 위한 전역 객체
window.pageCleanup = window.pageCleanup || {};

// DOM 요소들
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const menuToggle = document.getElementById('menu-toggle');
const tabBar = document.getElementById('tab-bar');
const tabContainer = document.getElementById('tab-container');
const tabScrollLeft = document.getElementById('tab-scroll-left');
const tabScrollRight = document.getElementById('tab-scroll-right');
const contentArea = document.getElementById('content-area');
const expandAllBtn = document.getElementById('expand-all');
const collapseAllBtn = document.getElementById('collapse-all');

// 사용자 관련 DOM 요소들
const userMenuButton = document.getElementById('userMenuButton');
const userDropdown = document.getElementById('userDropdown');
const currentUserName = document.getElementById('currentUserName');
const userDropdownName = document.getElementById('userDropdownName');
const userDropdownRole = document.getElementById('userDropdownRole');
const logoutButton = document.getElementById('logoutButton');

// 애플리케이션 초기화
document.addEventListener('DOMContentLoaded', async function() {
    // 인증 상태 체크
    const isAuthenticated = await checkAuthentication();
    if (!isAuthenticated) {
        return; // 로그인 페이지로 리다이렉트되므로 더 이상 진행하지 않음
    }
    
    initializeApplication();
});

// 인증 상태 확인
async function checkAuthentication() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const userStr = localStorage.getItem('currentUser');
    
    if (!isLoggedIn || !userStr) {
        // 로그인되지 않은 경우 로그인 페이지로 리다이렉트
        window.location.href = 'login.html';
        return false;
    }
    
    try {
        // 서버의 세션 상태를 확인
        const response = await fetch('/api/auth/user', {
            method: 'GET',
            credentials: 'same-origin'
        });
        
        if (!response.ok) {
            console.log('서버 세션이 만료됨, 로그인 페이지로 이동');
            // 서버 세션이 만료된 경우 로컬스토리지 정리하고 로그인 페이지로
            localStorage.removeItem('currentUser');
            localStorage.removeItem('isLoggedIn');
            window.location.href = 'login.html';
            return false;
        }
        
        // 서버에서 최신 사용자 정보 가져오기
        const serverUserInfo = await response.json();
        currentUser = serverUserInfo;
        localStorage.setItem('currentUser', JSON.stringify(serverUserInfo));
        
        updateUserInterface();
        return true;
        
    } catch (error) {
        console.error('세션 확인 중 오류:', error);
        
        // 네트워크 오류 등의 경우 로컬스토리지 정보로 일단 진행
        try {
            currentUser = JSON.parse(userStr);
            updateUserInterface();
            return true;
        } catch (parseError) {
            console.error('사용자 정보 파싱 오류:', parseError);
            localStorage.removeItem('currentUser');
            localStorage.removeItem('isLoggedIn');
            window.location.href = 'login.html';
            return false;
        }
    }
}

// 사용자 인터페이스 업데이트
function updateUserInterface() {
    if (!currentUser) return;
    
    // 사용자 이름 표시
    if (currentUserName) {
        currentUserName.textContent = currentUser.name;
    }
    
    // 드롭다운에 사용자 정보 표시
    if (userDropdownName) {
        userDropdownName.textContent = currentUser.name;
    }
    
    if (userDropdownRole) {
        const roleText = getRoleDisplayName(currentUser.role);
        const departmentText = currentUser.department || '';
        userDropdownRole.textContent = departmentText ? `${roleText} · ${departmentText}` : roleText;
    }
}

// 역할 표시명 반환
function getRoleDisplayName(role) {
    const roleNames = {
        'admin': '관리자',
        'manager': '팀장',
        'user': '사용자'
    };
    return roleNames[role] || role;
}

// 전체 애플리케이션 초기화
function initializeApplication() {
    // 각 모듈의 이벤트 리스너 초기화
    initializeMenuEventListeners();
    initializeAuthEventListeners();
    initializeTabEventListeners();
    initializeCacheEventListeners();
    initializeGlobalKeyboardShortcuts();
    
    // 초기 설정
    updateResponsiveLayout();
    updateControlButtonsState();
    updateMemoryStatus();
    updateTabScrollButtons();
    updateMenuActiveState();
    
    // 기본 탭 렌더링
    renderTabs();
    
    // 대시보드 페이지를 기본으로 열기
    const dashboardItem = window.findMenuItem('dashboard');
    if (dashboardItem) {
        openTab('dashboard', dashboardItem);
    }
}

// 통합된 탭 전환 함수
async function switchToTab(contentId) {
    // 이전 탭의 리소스 정리
    if (activeTab && activeTab !== contentId) {
        cleanupPageResources(activeTab);
    }
    
    // 활성 탭 업데이트
    activeTab = contentId;
    
    // 페이지 제목 업데이트 (브라우저 탭 제목)
    const tabInfo = openTabs.find(tab => tab.id === contentId);
    if (tabInfo) {
        document.title = `${tabInfo.title} - 업무시스템`;
    }
    
    try {
        // 페이지 내용 로드 및 표시
        const content = await loadPage(contentId);
        displayPageContent(content, contentId);
        hideLoadingState();
        updatePageAccessTime(contentId);
        updateMemoryStatus();
    } catch (error) {
        console.error('페이지 로드 실패:', error);
        displayErrorContent(error.message);
        hideLoadingState();
    }
    
    // 탭 바 업데이트
    renderTabs();
    
    // 활성 탭이 보이도록 스크롤
    setTimeout(() => scrollToTab(contentId), 150);
    
    // 메뉴 활성화 상태 업데이트
    updateMenuActiveState();
    
    // 모바일에서 메뉴 클릭 후 사이드바 닫기
    if (window.innerWidth < 1024) {
        closeSidebar();
    }
}

// 초기 설정 및 메모리 상태 업데이트
function initializeSettings() {
    updateMemoryStatus();
    updateTabScrollButtons();
    updateMenuActiveState();
}

// 전역 키보드 단축키 초기화
function initializeGlobalKeyboardShortcuts() {
    document.addEventListener('keydown', function(e) {
        // Ctrl+K 또는 Cmd+K로 검색창 포커스
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            if (window.menuSearch) {
                window.menuSearch.focus();
            }
        }
        
        // ESC 키로 검색창 클리어 및 포커스 해제
        if (e.key === 'Escape') {
            if (window.menuSearch && window.menuSearch.isVisible()) {
                window.menuSearch.clear();
            }
        }
    });
}

// 인증 관련 이벤트 리스너 초기화
function initializeAuthEventListeners() {
    // 사용자 메뉴 토글
    if (userMenuButton) {
        userMenuButton.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleUserDropdown();
        });
    }
    
    // 로그아웃 버튼
    if (logoutButton) {
        logoutButton.addEventListener('click', function(e) {
            e.preventDefault();
            handleLogout();
        });
    }
    
    // 드롭다운 외부 클릭 시 닫기
    document.addEventListener('click', function(e) {
        if (userDropdown && !userDropdown.contains(e.target) && !userMenuButton.contains(e.target)) {
            closeUserDropdown();
        }
    });
    
    // 프로필/설정 링크 (추후 구현)
    const profileLink = document.getElementById('profileLink');
    const settingsLink = document.getElementById('settingsLink');
    
    if (profileLink) {
        profileLink.addEventListener('click', function(e) {
            e.preventDefault();
            // TODO: 프로필 페이지 열기
            console.log('프로필 페이지 열기 (추후 구현)');
            closeUserDropdown();
        });
    }
    
    if (settingsLink) {
        settingsLink.addEventListener('click', function(e) {
            e.preventDefault();
            // TODO: 설정 페이지 열기
            console.log('설정 페이지 열기 (추후 구현)');
            closeUserDropdown();
        });
    }
}

// 사용자 드롭다운 토글
function toggleUserDropdown() {
    if (!userDropdown) return;
    
    if (userDropdown.classList.contains('hidden')) {
        userDropdown.classList.remove('hidden');
    } else {
        userDropdown.classList.add('hidden');
    }
}

// 사용자 드롭다운 닫기
function closeUserDropdown() {
    if (userDropdown) {
        userDropdown.classList.add('hidden');
    }
}

// 로그아웃 처리
async function handleLogout() {
    const result = await Swal.fire({
        title: '로그아웃',
        text: '정말 로그아웃 하시겠습니까?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: '로그아웃',
        cancelButtonText: '취소',
        confirmButtonColor: '#EF4444',
        heightAuto: false
    });
    
    if (result.isConfirmed) {
        // 현재 작업 내용 정리
        cleanupBeforeLogout();
        
        // 로그아웃 성공 메시지
        await Swal.fire({
            icon: 'success',
            title: '로그아웃 완료',
            text: '안전하게 로그아웃되었습니다.',
            timer: 1500,
            showConfirmButton: false,
            heightAuto: false
        });
        
        // 로그아웃 처리 (login.js의 전역 함수 사용)
        if (typeof window.logout === 'function') {
            window.logout();
        } else {
            // 백업 로그아웃 처리
            localStorage.removeItem('currentUser');
            localStorage.removeItem('isLoggedIn');
            window.location.href = 'login.html';
        }
    }
    
    closeUserDropdown();
}

// 로그아웃 전 정리 작업
function cleanupBeforeLogout() {
    // 열린 탭들의 리소스 정리
    openTabs.forEach(tab => {
        if (typeof window.pageCleanup[tab.id] === 'function') {
            try {
                window.pageCleanup[tab.id]();
            } catch (error) {
                console.warn(`탭 ${tab.id} 정리 중 오류:`, error);
            }
        }
    });
    
    // 전역 리소스 정리
    if (typeof window.cleanupGlobalResources === 'function') {
        window.cleanupGlobalResources();
    }
    
    console.log('로그아웃 전 정리 작업 완료');
}

// 애플리케이션 정보 출력 (개발용)
console.log('업무시스템 UI Template v1.0');
console.log('모듈화된 구조로 개선됨');
console.log('- menu.js: 메뉴 및 사이드바 관리');
console.log('- tabs.js: 탭 관리 및 스크롤 기능'); 
console.log('- page-loader.js: 페이지 로딩 및 캐시 관리');
console.log('- login.js: 인증 및 로그인 관리');
console.log('- script.js: 메인 초기화');
console.log('캐시 관리: window.debugCache 객체 사용 가능');
