// script.js - 메인 초기화 및 애플리케이션 진입점
// iframe 방식으로 완전히 재작성 - 2025-09-19

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
const userMenuButton = document.getElementById('userMenuButton');
const userMenuDropdown = document.getElementById('userMenuDropdown');
const currentUserName = document.getElementById('currentUserName');
const themeToggle = document.getElementById('theme-toggle');

// 초기화 함수
document.addEventListener('DOMContentLoaded', function() {
    console.log('애플리케이션 초기화 시작');
    
    // 기본 UI 초기화
    initializeUI();
    
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
    if (typeof window.expandAllMenus === 'function') {
        window.expandAllMenus();
    }
}

// 전체 메뉴 축소
function collapseAllMenus() {
    if (typeof window.collapseAllMenus === 'function') {
        window.collapseAllMenus();
    }
}

// 현재 사용자 정보 로드
async function loadCurrentUser() {
    try {
        const response = await axios.get('/api/auth/user');
        currentUser = response.data;
        
        if (currentUserName && currentUser) {
            currentUserName.textContent = currentUser.name || '사용자';
        }
        
        console.log('사용자 정보 로드 완료:', currentUser);
    } catch (error) {
        console.error('사용자 정보 로드 실패:', error);
    }
}

// 대시보드 초기화
function initializeDashboard() {
    // 대시보드 탭이 기본으로 활성화되도록 설정
    activeTab = 'dashboard';
    
    // 탭 바 렌더링
    renderTabs();
    
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
    renderTabs();
    
    // 활성 탭이 보이도록 스크롤
    setTimeout(() => scrollToTab(contentId), 150);
    
    // 메뉴 활성화 상태 업데이트
    updateMenuActiveState();
    
    hideLoadingState();
}

// 탭 바 렌더링
function renderTabs() {
    if (!tabContainer) return;
    
    tabContainer.innerHTML = '';
    
    openTabs.forEach(tab => {
        const tabElement = createTabElement(tab);
        tabContainer.appendChild(tabElement);
    });
    
    updateTabCount();
    
    // 탭 스크롤 버튼 업데이트는 tabs.js에서 처리
    if (typeof window.updateTabScrollButtons === 'function') {
        window.updateTabScrollButtons();
    }
}

// 탭 요소 생성
function createTabElement(tab) {
    const tabElement = document.createElement('div');
    tabElement.className = `tab-item flex items-center px-3 py-2 text-sm whitespace-nowrap cursor-pointer transition-colors border-r border-gray-200 dark:border-gray-600 ${
        tab.id === activeTab 
            ? 'bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-300 border-b-2 border-blue-500' 
            : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
    }`;
    tabElement.dataset.tabId = tab.id;
    
    // 탭 제목
    const titleSpan = document.createElement('span');
    titleSpan.textContent = tab.title;
    titleSpan.className = 'mr-2';
    tabElement.appendChild(titleSpan);
    
    // 닫기 버튼 (대시보드 제외)
    if (tab.id !== 'dashboard') {
        const closeBtn = document.createElement('button');
        closeBtn.innerHTML = '<i class="bx bx-x text-lg"></i>';
        closeBtn.className = 'close-tab-btn flex-shrink-0 w-5 h-5 flex items-center justify-center rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors';
        closeBtn.onclick = (e) => {
            e.stopPropagation();
            closeTab(tab.id);
        };
        tabElement.appendChild(closeBtn);
    }
    
    // 탭 클릭 이벤트
    tabElement.onclick = () => switchToTab(tab.id);
    
    return tabElement;
}

// 탭 닫기
function closeTab(tabId) {
    if (tabId === 'dashboard') return; // 대시보드는 닫을 수 없음
    
    // 탭 리스트에서 제거
    openTabs = openTabs.filter(tab => tab.id !== tabId);
    
    // 현재 활성 탭이 닫히는 경우
    if (activeTab === tabId) {
        // 이전 탭으로 이동 (없으면 대시보드)
        const newActiveTab = openTabs.length > 1 ? openTabs[openTabs.length - 1] : openTabs[0];
        switchToTab(newActiveTab.id);
    }
    
    // 페이지 리소스 정리
    cleanupPageResources(tabId);
    
    // 탭 바 다시 렌더링
    renderTabs();
    
    // 메모리 상태 업데이트
    updateMemoryStatus();
}

// 탭으로 스크롤
function scrollToTab(tabId) {
    if (!tabContainer) return;
    
    const tabElement = tabContainer.querySelector(`[data-tab-id="${tabId}"]`);
    if (tabElement) {
        tabElement.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        });
    }
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

// 탭 개수 업데이트
function updateTabCount() {
    const tabCountElement = document.getElementById('tab-count');
    const maxTabsElement = document.getElementById('max-tabs');
    
    if (tabCountElement) {
        tabCountElement.textContent = openTabs.length;
    }
    
    if (maxTabsElement) {
        maxTabsElement.textContent = '10'; // 최대 탭 수
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
    // menu.js의 함수 호출
    if (typeof window.updateMenuActiveState === 'function') {
        window.updateMenuActiveState(activeTab);
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
