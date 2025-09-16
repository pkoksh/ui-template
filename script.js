// 전역 변수
let openTabs = [{ id: 'dashboard', title: '대시보드' }];
let activeTab = 'dashboard';
let loadedPages = new Map(); // 캐시된 페이지 내용
let pageScripts = new Map(); // 각 페이지의 스크립트 저장
let pageStyles = new Map(); // 각 페이지의 스타일 저장
let pageAccessTime = new Map(); // 페이지 마지막 접근 시간
const MAX_CACHED_PAGES = 10; // 최대 캐시 페이지 수 (설정 가능)

// 탭 스크롤 관련 변수
let tabScrollPosition = 0;
const TAB_SCROLL_AMOUNT = 200; // 한 번에 스크롤할 픽셀 수

// 페이지별 정리 함수를 위한 전역 객체
window.pageCleanup = window.pageCleanup || {};

// LRU 캐시 관리 함수들
function updatePageAccessTime(contentId) {
    pageAccessTime.set(contentId, Date.now());
}

function cleanupOldestPages() {
    if (loadedPages.size <= MAX_CACHED_PAGES) return;
    
    // 현재 열린 탭들은 제외하고 정리 대상 찾기
    const openTabIds = new Set(openTabs.map(tab => tab.id));
    const cacheEntries = Array.from(pageAccessTime.entries())
        .filter(([pageId]) => !openTabIds.has(pageId))
        .sort((a, b) => a[1] - b[1]); // 접근 시간 순으로 정렬
    
    // 오래된 페이지부터 제거 (열린 탭 수를 고려하여)
    const pagesToRemove = Math.max(0, loadedPages.size - MAX_CACHED_PAGES + 1);
    
    for (let i = 0; i < Math.min(pagesToRemove, cacheEntries.length); i++) {
        const [pageId] = cacheEntries[i];
        removePageFromCache(pageId);
        console.log(`메모리 정리: ${pageId} 페이지 캐시 제거`);
    }
}

function removePageFromCache(contentId) {
    loadedPages.delete(contentId);
    pageScripts.delete(contentId);
    pageStyles.delete(contentId);
    pageAccessTime.delete(contentId);
    
    // 해당 페이지의 DOM 리소스도 정리
    cleanupPageResources(contentId);
}

function clearAllCache() {
    const openTabIds = new Set(openTabs.map(tab => tab.id));
    
    // 현재 열린 탭이 아닌 모든 캐시 제거
    for (const pageId of loadedPages.keys()) {
        if (!openTabIds.has(pageId)) {
            removePageFromCache(pageId);
        }
    }
    
    console.log('사용하지 않는 모든 페이지 캐시가 정리되었습니다.');
}

function getCacheStatus() {
    return {
        cached: loadedPages.size,
        maxCache: MAX_CACHED_PAGES,
        openTabs: openTabs.length,
        memoryUsage: `${(JSON.stringify([...loadedPages.values()]).length / 1024).toFixed(2)} KB`
    };
}

// 메모리 상태 UI 업데이트
function updateMemoryStatus() {
    const cacheInfo = document.getElementById('cache-info');
    if (cacheInfo) {
        const status = getCacheStatus();
        cacheInfo.textContent = `캐시: ${status.cached}/${status.maxCache}`;
        cacheInfo.title = `열린 탭: ${status.openTabs}개, 메모리 사용량: ${status.memoryUsage}`;
        
        // 캐시가 많이 차면 색상 변경
        const memoryStatusDiv = document.getElementById('memory-status');
        if (memoryStatusDiv) {
            if (status.cached >= MAX_CACHED_PAGES * 0.8) {
                memoryStatusDiv.className = memoryStatusDiv.className.replace('text-gray-600', 'text-orange-600');
            } else {
                memoryStatusDiv.className = memoryStatusDiv.className.replace('text-orange-600', 'text-gray-600');
            }
        }
    }
}

// DOM 요소들
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const menuToggle = document.getElementById('menu-toggle');
const tabBar = document.getElementById('tab-bar');
const tabContainer = document.getElementById('tab-container');
const tabScrollLeft = document.getElementById('tab-scroll-left');
const tabScrollRight = document.getElementById('tab-scroll-right');
const pageTitle = document.getElementById('page-title');
const contentArea = document.getElementById('content-area');
const expandAllBtn = document.getElementById('expand-all');
const collapseAllBtn = document.getElementById('collapse-all');

// 메뉴 정보 (페이지 경로 포함)
const menuItems = {
    dashboard: { title: '대시보드', path: 'pages/dashboard.html' },
    projects: { title: '프로젝트 목록', path: 'pages/projects.html' },
    'project-new': { title: '새 프로젝트', path: 'pages/project-new.html' },
    'project-templates': { title: '프로젝트 템플릿', path: 'pages/project-templates.html' },
    'project-archive': { title: '보관된 프로젝트', path: 'pages/project-archive.html' },
    tasks: { title: '업무 보드', path: 'pages/tasks.html' },
    'task-calendar': { title: '업무 달력', path: 'pages/task-calendar.html' },
    'task-timeline': { title: '타임라인', path: 'pages/task-timeline.html' },
    'task-my': { title: '내 업무', path: 'pages/task-my.html' },
    reports: { title: '보고서', path: 'pages/reports.html' },
    settings: { title: '설정', path: 'pages/settings.html' }
};

// 초기화
document.addEventListener('DOMContentLoaded', function() {
    initializeEventListeners();
    updateResponsiveLayout();
    renderTabs();
    updateControlButtonsState(); // 초기 버튼 상태 설정
});

// 이벤트 리스너 초기화
function initializeEventListeners() {
    // 모바일 메뉴 토글
    menuToggle.addEventListener('click', toggleSidebar);
    
    // 오버레이 클릭 시 사이드바 닫기
    overlay.addEventListener('click', closeSidebar);
    
    // 전체 아코디언 제어 버튼
    expandAllBtn.addEventListener('click', expandAllAccordions);
    collapseAllBtn.addEventListener('click', collapseAllAccordions);
    
    // 캐시 정리 버튼
    const clearCacheBtn = document.getElementById('clear-cache-btn');
    if (clearCacheBtn) {
        clearCacheBtn.addEventListener('click', function() {
            clearAllCache();
            updateMemoryStatus();
            alert('사용하지 않는 페이지 캐시가 정리되었습니다.');
        });
    }
    
    // 탭 스크롤 버튼들
    if (tabScrollLeft) {
        tabScrollLeft.addEventListener('click', () => scrollTabs('left'));
    }
    if (tabScrollRight) {
        tabScrollRight.addEventListener('click', () => scrollTabs('right'));
    }
    
    // 탭 바 마우스 휠 스크롤
    if (tabContainer) {
        tabContainer.addEventListener('wheel', (e) => {
            e.preventDefault();
            const direction = e.deltaY > 0 ? 'right' : 'left';
            scrollTabs(direction, Math.abs(e.deltaY));
        });
    }
    
    // 윈도우 리사이즈 시 탭 스크롤 상태 업데이트
    window.addEventListener('resize', updateTabScrollButtons);
    
    // 아코디언 토글
    document.querySelectorAll('.accordion-toggle').forEach(toggle => {
        toggle.addEventListener('click', function() {
            const accordionId = this.getAttribute('data-accordion');
            toggleAccordion(accordionId);
        });
    });
    
    // 메뉴 아이템 클릭
    document.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('click', function() {
            const contentId = this.getAttribute('data-content');
            openTab(contentId, menuItems[contentId]);
        });
    });
    
    // 윈도우 리사이즈 이벤트
    window.addEventListener('resize', updateResponsiveLayout);
    
    // ESC 키로 사이드바 닫기
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeSidebar();
        }
    });
}

// 사이드바 토글
function toggleSidebar() {
    const isHidden = sidebar.classList.contains('-translate-x-full');
    
    if (isHidden) {
        openSidebar();
    } else {
        closeSidebar();
    }
}

// 사이드바 열기
function openSidebar() {
    sidebar.classList.remove('-translate-x-full');
    // 모바일에서만 오버레이 표시
    if (window.innerWidth < 1024) {
        overlay.classList.remove('hidden');
    }
}

// 사이드바 닫기
function closeSidebar() {
    // 모바일에서만 사이드바 숨김
    if (window.innerWidth < 1024) {
        sidebar.classList.add('-translate-x-full');
        overlay.classList.add('hidden');
    }
}

// 아코디언 토글
function toggleAccordion(accordionId) {
    const toggle = document.querySelector(`[data-accordion="${accordionId}"]`);
    const content = document.querySelector(`[data-accordion-content="${accordionId}"]`);
    const arrow = toggle.querySelector('.accordion-arrow');
    
    if (content.classList.contains('open')) {
        // 아코디언 닫기
        content.classList.remove('open');
        content.classList.add('hidden');
        arrow.classList.remove('rotate');
        toggle.classList.remove('active');
    } else {
        // 아코디언 열기
        content.classList.remove('hidden');
        // 다음 프레임에서 애니메이션 시작
        requestAnimationFrame(() => {
            content.classList.add('open');
        });
        arrow.classList.add('rotate');
        toggle.classList.add('active');
    }
    
    // 버튼 상태 업데이트
    updateControlButtonsState();
}

// 전체 아코디언 펼치기
function expandAllAccordions() {
    const accordions = ['projects', 'tasks'];
    
    accordions.forEach(accordionId => {
        const toggle = document.querySelector(`[data-accordion="${accordionId}"]`);
        const content = document.querySelector(`[data-accordion-content="${accordionId}"]`);
        const arrow = toggle.querySelector('.accordion-arrow');
        
        if (!content.classList.contains('open')) {
            content.classList.remove('hidden');
            requestAnimationFrame(() => {
                content.classList.add('open');
            });
            arrow.classList.add('rotate');
            toggle.classList.add('active');
        }
    });
    
    // 버튼 상태 업데이트
    updateControlButtonsState();
}

// 전체 아코디언 접기
function collapseAllAccordions() {
    const accordions = ['projects', 'tasks'];
    
    accordions.forEach(accordionId => {
        const toggle = document.querySelector(`[data-accordion="${accordionId}"]`);
        const content = document.querySelector(`[data-accordion-content="${accordionId}"]`);
        const arrow = toggle.querySelector('.accordion-arrow');
        
        if (content.classList.contains('open')) {
            content.classList.remove('open');
            content.classList.add('hidden');
            arrow.classList.remove('rotate');
            toggle.classList.remove('active');
        }
    });
    
    // 버튼 상태 업데이트
    updateControlButtonsState();
}

// 제어 버튼 상태 업데이트
function updateControlButtonsState() {
    const accordions = ['projects', 'tasks'];
    let openCount = 0;
    
    accordions.forEach(accordionId => {
        const content = document.querySelector(`[data-accordion-content="${accordionId}"]`);
        if (content.classList.contains('open')) {
            openCount++;
        }
    });
    
    // 모든 아코디언이 열려있으면 펼치기 버튼 비활성화
    if (openCount === accordions.length) {
        expandAllBtn.style.opacity = '0.5';
        expandAllBtn.style.cursor = 'not-allowed';
        collapseAllBtn.style.opacity = '1';
        collapseAllBtn.style.cursor = 'pointer';
    } 
    // 모든 아코디언이 닫혀있으면 접기 버튼 비활성화
    else if (openCount === 0) {
        expandAllBtn.style.opacity = '1';
        expandAllBtn.style.cursor = 'pointer';
        collapseAllBtn.style.opacity = '0.5';
        collapseAllBtn.style.cursor = 'not-allowed';
    } 
    // 일부만 열려있으면 둘 다 활성화
    else {
        expandAllBtn.style.opacity = '1';
        expandAllBtn.style.cursor = 'pointer';
        collapseAllBtn.style.opacity = '1';
        collapseAllBtn.style.cursor = 'pointer';
    }
}

// 반응형 레이아웃 업데이트
function updateResponsiveLayout() {
    const width = window.innerWidth;
    
    // 큰 화면(1024px 이상)에서는 사이드바를 항상 표시하고 오버레이 숨김
    if (width >= 1024) {
        sidebar.classList.remove('-translate-x-full');
        overlay.classList.add('hidden');
    } else {
        // 작은 화면에서는 오버레이가 숨겨져 있을 때만 사이드바 숨김
        if (overlay.classList.contains('hidden')) {
            sidebar.classList.add('-translate-x-full');
        }
    }
}

// 페이지 동적 로딩 (스크립트/스타일 처리 포함)
async function loadPage(contentId) {
    // 캐시에서 페이지 확인
    if (loadedPages.has(contentId)) {
        updatePageAccessTime(contentId);
        return loadedPages.get(contentId);
    }
    
    const menuItem = menuItems[contentId];
    if (!menuItem || !menuItem.path) {
        return '<div class="text-center py-8"><p class="text-gray-500">페이지를 찾을 수 없습니다.</p></div>';
    }
    
    try {
        // 로딩 표시
        showLoadingState();
        
        const response = await fetch(menuItem.path);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const rawContent = await response.text();
        
        // HTML 파싱하여 스크립트와 스타일 분리
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = rawContent;
        
        // 스크립트 태그 추출 및 저장
        const scripts = tempDiv.querySelectorAll('script');
        const scriptTexts = [];
        scripts.forEach(script => {
            if (script.src) {
                // 외부 스크립트
                scriptTexts.push({ type: 'external', src: script.src });
            } else {
                // 인라인 스크립트
                scriptTexts.push({ type: 'inline', content: script.textContent });
            }
            script.remove(); // 원본에서 제거
        });
        
        // 스타일 태그 추출 및 저장
        const styles = tempDiv.querySelectorAll('style');
        const styleTexts = [];
        styles.forEach(style => {
            styleTexts.push(style.textContent);
            style.remove(); // 원본에서 제거
        });
        
        // 정리된 HTML 내용
        const cleanContent = tempDiv.innerHTML;
        
        // 캐시에 저장하기 전에 오래된 페이지 정리
        cleanupOldestPages();
        
        // 캐시에 저장
        loadedPages.set(contentId, cleanContent);
        pageScripts.set(contentId, scriptTexts);
        pageStyles.set(contentId, styleTexts);
        updatePageAccessTime(contentId);
        
        hideLoadingState();
        updateMemoryStatus(); // 메모리 상태 업데이트
        return cleanContent;
    } catch (error) {
        console.error('페이지 로딩 중 오류 발생:', error);
        hideLoadingState();
        return `
            <div class="text-center py-8">
                <div class="text-red-500 mb-2">
                    <svg class="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                    </svg>
                </div>
                <p class="text-gray-500">페이지를 로드할 수 없습니다.</p>
                <button onclick="clearPageCache('${contentId}')" class="mt-2 text-blue-600 hover:text-blue-800">다시 시도</button>
            </div>
        `;
    }
}

// 로딩 상태 표시
function showLoadingState() {
    contentArea.innerHTML = `
        <div class="flex items-center justify-center py-12">
            <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
            <span class="ml-2 text-gray-600">로딩 중...</span>
        </div>
    `;
}

// 로딩 상태 숨기기
function hideLoadingState() {
    // contentArea에서 로딩 상태를 확인하고 숨기기
    const loadingElements = contentArea.querySelectorAll('.animate-spin');
    loadingElements.forEach(element => {
        const parent = element.closest('div');
        if (parent && parent.textContent.includes('로딩 중')) {
            parent.style.display = 'none';
        }
    });
}

// 페이지 스크립트 실행
function executePageScripts(contentId) {
    const scripts = pageScripts.get(contentId);
    if (!scripts || scripts.length === 0) return;
    
    scripts.forEach((script, index) => {
        if (script.type === 'external') {
            // 외부 스크립트 로드
            const scriptElement = document.createElement('script');
            scriptElement.src = script.src;
            scriptElement.setAttribute('data-page', contentId);
            scriptElement.setAttribute('data-script-index', index);
            document.head.appendChild(scriptElement);
        } else if (script.type === 'inline') {
            // 인라인 스크립트 실행
            try {
                const scriptElement = document.createElement('script');
                scriptElement.textContent = script.content;
                scriptElement.setAttribute('data-page', contentId);
                scriptElement.setAttribute('data-script-index', index);
                document.head.appendChild(scriptElement);
            } catch (error) {
                console.error(`페이지 ${contentId}의 스크립트 실행 중 오류:`, error);
            }
        }
    });
}

// 페이지 스타일 적용
function applyPageStyles(contentId) {
    const styles = pageStyles.get(contentId);
    if (!styles || styles.length === 0) return;
    
    styles.forEach((styleContent, index) => {
        const styleElement = document.createElement('style');
        styleElement.textContent = styleContent;
        styleElement.setAttribute('data-page', contentId);
        styleElement.setAttribute('data-style-index', index);
        document.head.appendChild(styleElement);
    });
}

// 페이지 스크립트 및 스타일 정리
function cleanupPageResources(contentId) {
    // 해당 페이지의 스크립트 제거
    const pageScriptsElements = document.querySelectorAll(`script[data-page="${contentId}"]`);
    pageScriptsElements.forEach(script => script.remove());
    
    // 해당 페이지의 스타일 제거
    const pageStylesElements = document.querySelectorAll(`style[data-page="${contentId}"]`);
    pageStylesElements.forEach(style => style.remove());
    
    // 페이지별 전역 변수나 이벤트 리스너 정리 (필요한 경우)
    if (window.pageCleanup && window.pageCleanup[contentId]) {
        try {
            window.pageCleanup[contentId]();
        } catch (error) {
            console.error(`페이지 ${contentId} 정리 중 오류:`, error);
        }
    }
}

// 로딩 상태 숨기기
function hideLoadingState() {
    // 실제 내용이 로드되면 자동으로 대체됨
}

// 페이지 캐시 지우기
function clearPageCache(contentId) {
    if (contentId) {
        loadedPages.delete(contentId);
        // 해당 페이지 다시 로드
        if (activeTab === contentId) {
            switchToTab(contentId);
        }
    } else {
        // 전체 캐시 지우기
        loadedPages.clear();
    }
}

// 탭 열기 (수정된 버전)
async function openTab(contentId, title) {
    // 이미 열린 탭인지 확인
    const existingTab = openTabs.find(tab => tab.id === contentId);
    
    if (!existingTab) {
        // 새 탭 추가
        const menuItem = menuItems[contentId];
        const tabTitle = menuItem ? menuItem.title : title;
        openTabs.push({ id: contentId, title: tabTitle });
    }
    
    // 활성 탭 변경
    await switchToTab(contentId);
    
    // 모바일에서 메뉴 클릭 후 사이드바 닫기
    if (window.innerWidth < 1024) {
        closeSidebar();
    }
}

// 탭 전환 (수정된 버전)
async function switchToTab(contentId) {
    // 이전 탭의 리소스 정리
    if (activeTab && activeTab !== contentId) {
        cleanupPageResources(activeTab);
    }
    
    // 활성 탭 업데이트
    activeTab = contentId;
    
    // 페이지 제목 업데이트
    const tabInfo = openTabs.find(tab => tab.id === contentId);
    if (tabInfo) {
        pageTitle.textContent = tabInfo.title;
    }
    
    // 페이지 내용 로드 및 표시
    const content = await loadPage(contentId);
    contentArea.innerHTML = content;
    
    // 페이지별 스타일 적용
    applyPageStyles(contentId);
    
    // 페이지별 스크립트 실행
    executePageScripts(contentId);
    
    // 탭 바 업데이트
    renderTabs();
    
    // 활성 탭이 보이도록 스크롤
    setTimeout(() => scrollToTab(contentId), 150);
    
    // 메뉴 활성화 상태 업데이트
    updateMenuActiveState();
    
    // 메모리 상태 업데이트
    updateMemoryStatus();
}

// 탭 닫기 (캐시 제거 옵션 추가)
function closeTab(contentId, removeFromCache = false) {
    // 마지막 탭인 경우 닫기 방지
    if (openTabs.length <= 1) {
        return;
    }
    
    // 탭 리소스 정리
    cleanupPageResources(contentId);
    
    // 캐시에서도 제거할지 결정
    if (removeFromCache) {
        removePageFromCache(contentId);
        console.log(`탭 닫기: ${contentId} 페이지 캐시도 함께 제거됨`);
    }
    
    // 탭 제거
    const tabIndex = openTabs.findIndex(tab => tab.id === contentId);
    if (tabIndex !== -1) {
        openTabs.splice(tabIndex, 1);
    }
    
    // 닫은 탭이 활성 탭인 경우 다른 탭으로 전환
    if (activeTab === contentId) {
        const newActiveTab = openTabs[Math.max(0, tabIndex - 1)];
        switchToTab(newActiveTab.id);
    } else {
        renderTabs();
    }
}

// 탭 바 렌더링
function renderTabs() {
    tabBar.innerHTML = '';
    
    openTabs.forEach(tab => {
        const tabElement = createTabElement(tab);
        tabBar.appendChild(tabElement);
    });
    
    // 탭 스크롤 상태 업데이트
    setTimeout(updateTabScrollButtons, 100); // DOM 업데이트 후 실행
}

// 탭 요소 생성
function createTabElement(tab) {
    const tabDiv = document.createElement('div');
    tabDiv.className = `tab-item flex items-center space-x-2 min-w-0 px-4 py-2 rounded-t-lg border-b-2 cursor-pointer ${
        tab.id === activeTab 
            ? 'tab-active bg-blue-50 border-blue-500 text-blue-600' 
            : 'bg-gray-50 border-transparent text-gray-600 hover:bg-gray-100'
    }`;
    tabDiv.setAttribute('data-content', tab.id);
    
    // 탭 제목
    const titleSpan = document.createElement('span');
    titleSpan.className = 'text-sm font-medium truncate';
    titleSpan.textContent = tab.title;
    
    // 닫기 버튼
    const closeButton = document.createElement('button');
    closeButton.className = `tab-close ml-2 ${
        tab.id === activeTab 
            ? 'text-blue-400 hover:text-blue-600' 
            : 'text-gray-400 hover:text-gray-600'
    }`;
    closeButton.innerHTML = `
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
    `;
    
    // 이벤트 리스너
    tabDiv.addEventListener('click', function(e) {
        if (!e.target.closest('.tab-close')) {
            switchToTab(tab.id);
        }
    });
    
    closeButton.addEventListener('click', function(e) {
        e.stopPropagation();
        closeTab(tab.id);
    });
    
    tabDiv.appendChild(titleSpan);
    tabDiv.appendChild(closeButton);
    
    return tabDiv;
}

// 메뉴 아이템 활성화 표시 업데이트
function updateMenuActiveState() {
    document.querySelectorAll('.menu-item').forEach(item => {
        const contentId = item.getAttribute('data-content');
        if (contentId === activeTab) {
            item.classList.add('bg-blue-50', 'text-blue-600');
        } else {
            item.classList.remove('bg-blue-50', 'text-blue-600');
        }
    });
}

// 탭 전환 시 메뉴 활성화 상태도 업데이트
const originalSwitchToTab = switchToTab;
switchToTab = function(contentId) {
    originalSwitchToTab(contentId);
    updateMenuActiveState();
};

// 키보드 단축키 지원
document.addEventListener('keydown', function(e) {
    // Ctrl+W로 현재 탭 닫기
    if (e.ctrlKey && e.key === 'w') {
        e.preventDefault();
        closeTab(activeTab);
    }
    
    // Ctrl+Tab으로 다음 탭으로 이동
    if (e.ctrlKey && e.key === 'Tab') {
        e.preventDefault();
        const currentIndex = openTabs.findIndex(tab => tab.id === activeTab);
        const nextIndex = (currentIndex + 1) % openTabs.length;
        switchToTab(openTabs[nextIndex].id);
    }
});

// 탭 드래그 앤 드롭 기능 (선택사항)
function enableTabDragAndDrop() {
    let draggedTab = null;
    
    tabBar.addEventListener('dragstart', function(e) {
        if (e.target.closest('.tab-item')) {
            draggedTab = e.target.closest('.tab-item');
            e.dataTransfer.effectAllowed = 'move';
        }
    });
    
    tabBar.addEventListener('dragover', function(e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
    });
    
    tabBar.addEventListener('drop', function(e) {
        e.preventDefault();
        const targetTab = e.target.closest('.tab-item');
        
        if (targetTab && draggedTab && targetTab !== draggedTab) {
            const draggedId = draggedTab.getAttribute('data-content');
            const targetId = targetTab.getAttribute('data-content');
            
            // 탭 순서 변경
            const draggedIndex = openTabs.findIndex(tab => tab.id === draggedId);
            const targetIndex = openTabs.findIndex(tab => tab.id === targetId);
            
            if (draggedIndex !== -1 && targetIndex !== -1) {
                const draggedTabData = openTabs.splice(draggedIndex, 1)[0];
                openTabs.splice(targetIndex, 0, draggedTabData);
                renderTabs();
            }
        }
        
        draggedTab = null;
    });
}

// 초기 설정
updateMenuActiveState();
updateMemoryStatus();
updateTabScrollButtons();

// 대시보드 페이지를 기본으로 열기
openTab('dashboard', '대시보드');

// 개발자 도구용 함수들 (콘솔에서 사용 가능)
window.debugCache = {
    status: getCacheStatus,
    clear: clearAllCache,
    list: () => Array.from(loadedPages.keys()),
    remove: removePageFromCache,
    setMaxCache: (size) => { 
        if (size > 0) {
            MAX_CACHED_PAGES = size;
            console.log(`최대 캐시 크기가 ${size}로 설정되었습니다.`);
            updateMemoryStatus();
        }
    }
};

// 탭 스크롤 관련 함수들
function scrollTabs(direction, amount = TAB_SCROLL_AMOUNT) {
    if (!tabContainer || !tabBar) return;
    
    const containerWidth = tabContainer.offsetWidth;
    const tabBarWidth = tabBar.scrollWidth;
    const maxScroll = Math.max(0, tabBarWidth - containerWidth);
    
    if (direction === 'left') {
        tabScrollPosition = Math.max(0, tabScrollPosition - amount);
    } else {
        tabScrollPosition = Math.min(maxScroll, tabScrollPosition + amount);
    }
    
    // 스크롤 애니메이션 적용
    tabBar.style.transform = `translateX(-${tabScrollPosition}px)`;
    
    // 스크롤 버튼 상태 업데이트
    updateTabScrollButtons();
}

function updateTabScrollButtons() {
    if (!tabContainer || !tabBar || !tabScrollLeft || !tabScrollRight) return;
    
    const containerWidth = tabContainer.offsetWidth;
    const tabBarWidth = tabBar.scrollWidth;
    const maxScroll = Math.max(0, tabBarWidth - containerWidth);
    
    // 스크롤이 필요한지 확인
    const needsScroll = tabBarWidth > containerWidth;
    
    if (needsScroll) {
        // 왼쪽 버튼 표시/숨김
        if (tabScrollPosition > 0) {
            tabScrollLeft.classList.remove('opacity-0');
            tabScrollLeft.classList.add('opacity-100');
        } else {
            tabScrollLeft.classList.remove('opacity-100');
            tabScrollLeft.classList.add('opacity-0');
        }
        
        // 오른쪽 버튼 표시/숨김
        if (tabScrollPosition < maxScroll) {
            tabScrollRight.classList.remove('opacity-0');
            tabScrollRight.classList.add('opacity-100');
        } else {
            tabScrollRight.classList.remove('opacity-100');
            tabScrollRight.classList.add('opacity-0');
        }
    } else {
        // 스크롤이 필요없으면 모든 버튼 숨김
        tabScrollLeft.classList.add('opacity-0');
        tabScrollRight.classList.add('opacity-0');
        tabScrollPosition = 0;
        tabBar.style.transform = 'translateX(0px)';
    }
}

// 특정 탭이 보이도록 스크롤
function scrollToTab(tabId) {
    if (!tabContainer || !tabBar) return;
    
    const tabElement = tabBar.querySelector(`[data-content="${tabId}"]`);
    if (!tabElement) return;
    
    const containerWidth = tabContainer.offsetWidth;
    const tabLeft = tabElement.offsetLeft;
    const tabWidth = tabElement.offsetWidth;
    const tabRight = tabLeft + tabWidth;
    
    // 현재 보이는 영역 계산
    const visibleLeft = tabScrollPosition;
    const visibleRight = tabScrollPosition + containerWidth;
    
    // 탭이 왼쪽으로 벗어난 경우
    if (tabLeft < visibleLeft) {
        tabScrollPosition = Math.max(0, tabLeft - 20); // 20px 여백
    }
    // 탭이 오른쪽으로 벗어난 경우
    else if (tabRight > visibleRight) {
        tabScrollPosition = Math.min(
            tabBar.scrollWidth - containerWidth,
            tabRight - containerWidth + 20 // 20px 여백
        );
    }
    
    // 스크롤 애니메이션 적용
    tabBar.style.transform = `translateX(-${tabScrollPosition}px)`;
    
    // 버튼 상태 업데이트
    updateTabScrollButtons();
}