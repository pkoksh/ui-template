// script.js - 메인 초기화 및 애플리케이션 진입점
// iframe 방식으로 완전히 재작성 - 2025-09-19 13:50:00 ✨
// Thymeleaf 연동 업데이트 - 2025-01-27 ✨

// 전역 변수
let openTabs = [];
let activeTab = 'dashboard';

// Thymeleaf에서 제공하는 전역 변수들 활용
let currentUser = window.currentUser || null;
let systemInfo = window.systemInfo || { 
    name: '업무시스템', 
    version: '1.0.0', 
    isDevelopment: false 
};

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
const userMenuButton = document.getElementById('userMenuButton');
const userMenuDropdown = document.getElementById('userMenuDropdown');
const currentUserName = document.getElementById('currentUserName');
const themeToggle = document.getElementById('theme-toggle');

// 초기화 함수
document.addEventListener('DOMContentLoaded', function() {
    console.log('애플리케이션 초기화 시작');
    
    // 기본 UI 초기화
    initializeUI();
    
    // 메뉴 로드 및 초기화
    initializeMenus();
    
    // 사용자 정보 로드
    loadCurrentUser();
    
    // 대시보드 탭 초기 설정
    initializeDashboard();
    
    console.log('애플리케이션 초기화 완료');
});

// UI 초기화
function initializeUI() {
    // 사이드바 토글
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleSidebar);
    }
    
    // 오버레이 클릭시 사이드바 닫기
    if (overlay) {
        overlay.addEventListener('click', closeSidebar);
    }
    
    // 사용자 메뉴 토글
    if (userMenuButton) {
        userMenuButton.addEventListener('click', toggleUserMenu);
    }
    
    // 문서 클릭시 사용자 메뉴 닫기
    document.addEventListener('click', function(e) {
        if (userMenuDropdown && !userMenuButton.contains(e.target)) {
            userMenuDropdown.classList.add('hidden');
        }
    });
    
    // 전체 확장/축소 버튼
    if (expandAllBtn) {
        expandAllBtn.addEventListener('click', expandAllMenus);
    }
    if (collapseAllBtn) {
        collapseAllBtn.addEventListener('click', collapseAllMenus);
    }
    
    // 반응형 레이아웃 초기화
    updateResponsiveLayout();
    window.addEventListener('resize', updateResponsiveLayout);
    
    // 탭 이벤트 리스너 초기화 (tabs.js 로드 후)
    setTimeout(() => {
        if (typeof window.initializeTabEventListeners === 'function') {
            window.initializeTabEventListeners();
            console.log('탭 이벤트 리스너 초기화 완료');
        } else {
            console.warn('탭 이벤트 리스너 함수를 찾을 수 없습니다.');
        }
    }, 100);
}

// 사이드바 토글
function toggleSidebar() {
    if (sidebar) {
        sidebar.classList.toggle('-translate-x-full');
        if (overlay) {
            overlay.classList.toggle('hidden');
        }
    }
}

// 사이드바 닫기
function closeSidebar() {
    if (sidebar) {
        sidebar.classList.add('-translate-x-full');
    }
    if (overlay) {
        overlay.classList.add('hidden');
    }
}

// 사용자 메뉴 토글
function toggleUserMenu() {
    if (userMenuDropdown) {
        userMenuDropdown.classList.toggle('hidden');
    }
}

// 전체 메뉴 확장
function expandAllMenus() {
   if (typeof window.expandAllAccordions === 'function') {
        window.expandAllAccordions();
    } else {
        console.warn('expandAllAccordions 함수를 찾을 수 없습니다.');
    }
}

// 전체 메뉴 축소
function collapseAllMenus() {
    if (typeof window.collapseAllAccordions === 'function') {
        window.collapseAllAccordions();
    } else {
        console.warn('collapseAllAccordions 함수를 찾을 수 없습니다.');
    }
}

// 메뉴 초기화
async function initializeMenus() {
    console.log('메뉴 초기화 시작');
    
    try {
        // menu.js의 함수들이 로드될 때까지 기다림
        await waitForMenuFunctions();
        
        
        
        // 메뉴 렌더링
        await generateMenu();
        
        console.log('메뉴 초기화 완료');
    } catch (error) {
        console.error('메뉴 초기화 중 오류:', error);
    }
}

// menu.js 함수들이 로드될 때까지 기다리는 함수
function waitForMenuFunctions() {
    return new Promise((resolve, reject) => {
        let attempts = 0;
        const maxAttempts = 50; // 5초 대기
        
        const checkFunctions = () => {
            if (typeof loadMenusFromAPI === 'function' && typeof generateMenu === 'function') {
                console.log('menu.js 함수들이 로드됨');
                resolve();
            } else {
                attempts++;
                if (attempts >= maxAttempts) {
                    console.error('menu.js 함수들을 찾을 수 없음');
                    reject(new Error('menu.js functions not loaded'));
                } else {
                    setTimeout(checkFunctions, 100);
                }
            }
        };
        
        checkFunctions();
    });
}

// 현재 사용자 정보 로드
async function loadCurrentUser() {
    try {
        // Thymeleaf에서 제공한 사용자 정보가 있으면 사용
        if (window.currentUser && window.currentUser.isAuthenticated) {
            currentUser = window.currentUser;
            console.log('Thymeleaf에서 사용자 정보 로드됨:', currentUser);
        } else {
            // API로 사용자 정보 가져오기 (fallback)
            console.log('API에서 사용자 정보 조회 중...');
            const response = await axios.get('/api/auth/user');
            currentUser = response.data;
        }
        
        // UI 업데이트
        if (currentUserName && currentUser) {
            currentUserName.textContent = currentUser.name || '사용자';
        }
        
        // 사용자 드롭다운 정보 업데이트
        const userDropdownName = document.getElementById('userDropdownName');
        const userDropdownRole = document.getElementById('userDropdownRole');
        
        if (userDropdownName && currentUser) {
            userDropdownName.textContent = currentUser.name || '사용자명';
        }
        if (userDropdownRole && currentUser) {
            userDropdownRole.textContent = currentUser.role || '역할';
        }
        
        console.log('사용자 정보 로드 완료:', currentUser);
        
        // 개발 모드 정보 로그
        if (systemInfo.isDevelopment) {
            console.log('개발 모드 활성화 - 시스템 정보:', systemInfo);
        }
        
    } catch (error) {
        console.error('사용자 정보 로드 실패:', error);
        // Thymeleaf 데이터를 fallback으로 사용
        if (window.currentUser) {
            currentUser = window.currentUser;
            console.log('Fallback: Thymeleaf 사용자 정보 사용');
        }
    }
}

// 대시보드 초기화
function initializeDashboard() {
    // 대시보드 탭이 기본으로 활성화되도록 설정
    activeTab = 'dashboard';
    
    // 탭 바 렌더링
    if (typeof window.renderTabs === 'function') {
        window.renderTabs();
    }
    
    // 대시보드 페이지 로드
    switchToTab('dashboard');
}

// 탭 전환 함수
async function switchToTab(contentId) {
    console.log(`탭 전환: ${contentId}`);
    
    // 탭 정보 찾기
    const tabInfo = openTabs.find(tab => tab.id === contentId);
    if (!tabInfo) {
        console.error('탭 정보를 찾을 수 없습니다:', contentId);
        return;
    }
    
    // 로딩 상태 표시
    showLoadingState();
    
    // 이전 탭의 리소스 정리
    if (activeTab && activeTab !== contentId) {
        cleanupPageResources(activeTab);
    }
    
    // 활성 탭 업데이트
    activeTab = contentId;
    
    // 페이지 제목 업데이트 (브라우저 탭 제목)
    if (tabInfo) {
        document.title = `${tabInfo.title} - 업무시스템`;
    }
    
    try {
        // iframe 기반 페이지 로드
        const success = await loadPage(contentId, tabInfo.url, tabInfo.title);
        if (success) {
            updateMemoryStatus();
        }
    } catch (error) {
        console.error('페이지 로드 실패:', error);
        // iframe 방식에서는 showError 함수 사용
        if (typeof showError === 'function') {
            showError('페이지를 불러올 수 없습니다.');
        }
    }
    
    // 탭 바 업데이트
    if (typeof window.renderTabs === 'function') {
        window.renderTabs();
    }
    
    // 활성 탭이 보이도록 스크롤
    if (typeof window.scrollToTab === 'function') {
        setTimeout(() => window.scrollToTab(contentId), 150);
    }
    
    // 메뉴 활성화 상태 업데이트
    updateMenuActiveState();
    
    hideLoadingState();
}

// 로딩 상태 표시
function showLoadingState() {
    // page-loader.js의 showLoading 함수 호출
    if (typeof showLoading === 'function') {
        showLoading();
    }
}

// 로딩 상태 숨기기
function hideLoadingState() {
    // page-loader.js의 hideLoading 함수 호출
    if (typeof hideLoading === 'function') {
        hideLoading();
    }
}

// 반응형 레이아웃 업데이트
function updateResponsiveLayout() {
    const isMobile = window.innerWidth < 1024;
    
    if (isMobile && sidebar) {
        sidebar.classList.add('-translate-x-full');
        if (overlay) {
            overlay.classList.add('hidden');
        }
    }
    
    // 탭 스크롤 버튼 업데이트
    if (typeof window.updateTabScrollButtons === 'function') {
        window.updateTabScrollButtons();
    }
}

// 메뉴 활성화 상태 업데이트
function updateMenuActiveState() {
    // 현재 활성 탭에 따라 메뉴 상태 업데이트
    console.log('메뉴 활성화 상태 업데이트:', activeTab);
    
    // 모든 메뉴 아이템에서 active 클래스 제거
    const menuItems = document.querySelectorAll('nav a');
    menuItems.forEach(item => {
        item.classList.remove('bg-blue-600', 'text-white');
        item.classList.add('text-gray-700', 'dark:text-gray-300', 'hover:bg-gray-100', 'dark:hover:bg-gray-700');
    });
    
    // 현재 활성 탭과 일치하는 메뉴 아이템에 active 스타일 적용
    const activeMenuItem = document.querySelector(`nav a[data-page="${activeTab}"]`);
    if (activeMenuItem) {
        activeMenuItem.classList.add('bg-blue-600', 'text-white');
        activeMenuItem.classList.remove('text-gray-700', 'dark:text-gray-300', 'hover:bg-gray-100', 'dark:hover:bg-gray-700');
    }
}

// 메모리 상태 업데이트
function updateMemoryStatus() {
    // iframe 기반에서는 메모리 상태 관리가 단순화됨
    console.log('메모리 상태 업데이트 (iframe 기반)');
}

// 페이지 리소스 정리
function cleanupPageResources(contentId) {
    // iframe 기반에서는 페이지 정리가 단순화됨
    if (window.pageCleanup && window.pageCleanup[contentId]) {
        try {
            window.pageCleanup[contentId]();
            delete window.pageCleanup[contentId];
        } catch (error) {
            console.error('페이지 정리 중 오류:', error);
        }
    }
    
    console.log(`페이지 리소스 정리: ${contentId}`);
}

// 로그아웃 함수
async function logout() {
    try {
        await axios.post('/api/auth/logout');
        window.location.href = '/login.html';
    } catch (error) {
        console.error('로그아웃 실패:', error);
        window.location.href = '/login.html';
    }
}

// 전역 함수로 노출
window.updateTabCount = updateTabCount;
window.updateResponsiveLayout = updateResponsiveLayout;
window.updateMenuActiveState = updateMenuActiveState;
window.updateMemoryStatus = updateMemoryStatus;
window.cleanupPageResources = cleanupPageResources;
window.switchToTab = switchToTab;
window.closeTab = closeTab;
window.logout = logout;

// 전역 이벤트 리스너
window.addEventListener('beforeunload', function() {
    // 모든 페이지 리소스 정리
    openTabs.forEach(tab => {
        if (tab.id !== 'dashboard') {
            cleanupPageResources(tab.id);
        }
    });
});

console.log('script.js 로드 완료 - iframe 방식');
