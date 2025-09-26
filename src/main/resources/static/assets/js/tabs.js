// tabs.js - iframe 기반 탭 관리 및 스크롤 기능

// 탭 스크롤 관련 변수
let tabScrollPosition = 0;
const TAB_SCROLL_AMOUNT = 200; // 한 번에 스크롤할 픽셀 수
const MAX_TABS = 10; // 최대 탭 개수

// 탭 열기
function openTab(contentId, menuItem) {
    if (!menuItem) {
        menuItem = window.findMenuItem(contentId);
    }
    
    if (!menuItem) {
        console.error(`메뉴 아이템을 찾을 수 없습니다: ${contentId}`);
        return;
    }
    
    // 이미 열린 탭인지 확인
    const existingTab = openTabs.find(tab => tab.id === contentId);
    
    if (existingTab) {
        // 기존 탭으로 전환
        switchToTab(contentId);
    } else {
        // 최대 탭 개수 확인
        if (openTabs.length >= MAX_TABS) {
            Swal.fire({
                icon: 'warning',
                title: '탭 개수 제한',
                text: `최대 ${MAX_TABS}개의 탭만 열 수 있습니다.`,
                confirmButtonText: '확인',
                confirmButtonColor: '#3B82F6',
                zIndex: 50000, // 높은 z-index로 설정
                backdrop: true,
                allowOutsideClick: true,
                heightAuto: false, // 자동 높이 조정 비활성화
                didOpen: () => {
                    // 모달 열릴 때 body 클래스 확인
                    document.body.classList.add('swal2-height-auto');
                },
                didClose: () => {
                    // 모달 닫힐 때 클래스 제거
                    document.body.classList.remove('swal2-height-auto');
                }
            });
            return;
        }
        
        // 새 탭 추가
        openTabs.push({ id: contentId, title: menuItem.title , url: menuItem.url });
        switchToTab(contentId, menuItem.url,menuItem.title);
        renderTabs();
        
        // 새 탭이 보이도록 스크롤
        setTimeout(() => scrollToTab(contentId), 100);
    }
    
    // 탭 개수 업데이트
    updateTabCount();
}

// 탭 전환
function switchToTab(contentId) {
    activeTab = contentId;
    renderTabs();
    
    // 페이지 타이틀 업데이트 (브라우저 탭 제목)
    const menuItem = window.menuItems[contentId];
    if (menuItem) {
        document.title = `${menuItem.title} - 업무시스템`;
    }
    
    // iframe으로 페이지 전환
    if (window.switchToTab) {
        window.switchToTab(contentId);
    }
    
    // iframe이 없으면 새로 로드
    if (!window.isPageLoaded || !window.isPageLoaded(contentId)) {
        const url = `pages/${contentId}.html`;
        window.loadPage(contentId, url, menuItem.title).catch(error => {
            console.error('페이지 로드 실패:', error);
            showError('페이지를 불러올 수 없습니다.');
        });
    }
    
    // 활성 탭이 보이도록 스크롤
    scrollToTab(contentId);
    
    // 탭 개수 업데이트
    updateTabCount();
}

// 탭 닫기
function closeTab(contentId) {
    console.log('closeTab 함수 호출됨:', contentId);
    console.log('현재 열린 탭 수:', openTabs.length);
    
    // iframe 정리
    if (window.cleanupPage) {
        window.cleanupPage(contentId);
    }
    
    // 탭 제거
    const tabIndex = openTabs.findIndex(tab => tab.id === contentId);
    if (tabIndex !== -1) {
        openTabs.splice(tabIndex, 1);
    }
    
    // 닫은 탭이 활성 탭인 경우 다른 탭으로 전환
    if (activeTab === contentId) {
        if (openTabs.length > 0) {
            const newActiveTab = openTabs[Math.max(0, tabIndex - 1)];
            switchToTab(newActiveTab.id);
        } else {
            // 모든 탭이 닫혔을 때 환영 화면 표시
            activeTab = null;
            if (window.showWelcomeScreen) {
                window.showWelcomeScreen();
            }
            if (window.hideIframeContainer) {
                window.hideIframeContainer();
            }
            document.title = '업무시스템'; // 브라우저 탭 제목 초기화
        }
    } else {
        renderTabs();
    }
    
    // 탭이 하나도 없으면 환영 화면 표시 (추가 안전장치)
    if (openTabs.length === 0) {
        activeTab = null;
        if (window.showWelcomeScreen) {
            window.showWelcomeScreen();
        }
        if (window.hideIframeContainer) {
            window.hideIframeContainer();
        }
        document.title = '업무시스템'; // 브라우저 탭 제목 초기화
    }
    
    // 탭 개수 업데이트
    updateTabCount();
}

// 탭 바 렌더링
function renderTabs() {
    console.log('renderTabs 호출됨, 열린 탭:', openTabs);
    
    const tabContainer = document.getElementById('tab-container');
    if (!tabContainer) {
        console.error('tab-container를 찾을 수 없음');
        return;
    }
    
    // tab-bar 요소를 찾거나 생성
    let tabBar = document.getElementById('tab-bar');
    if (!tabBar) {
        // tab-bar가 없으면 새로 생성
        tabBar = document.createElement('div');
        tabBar.id = 'tab-bar';
        tabBar.className = 'flex transition-transform duration-300 ease-in-out';
        tabBar.style.transform = 'translateX(0px)';
        tabContainer.appendChild(tabBar);
    }
    
    // tab-bar의 내용만 비우기
    tabBar.innerHTML = '';
    
    openTabs.forEach(tab => {
        const tabElement = createTabElement(tab);
        tabBar.appendChild(tabElement);  // tab-bar에 추가
    });
    
    updateTabCount();
    
    // 탭 스크롤 버튼 업데이트
    setTimeout(updateTabScrollButtons, 100);
}

// 탭 요소 생성
function createTabElement(tab) {
    console.log('탭 요소 생성중:', tab);
    
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
        closeBtn.setAttribute('data-tab-id', tab.id);
        closeBtn.addEventListener('click', (e) => {
            console.log('닫기 버튼 클릭됨:', tab.id);
            e.preventDefault();
            e.stopPropagation();
            closeTab(tab.id);
        });
        tabElement.appendChild(closeBtn);
    }
    
    // 탭 클릭 이벤트
    tabElement.onclick = () => switchToTab(tab.id);
    
    return tabElement;
}

// 탭 개수 업데이트
function updateTabCount() {
    const tabCountElement = document.getElementById('tab-count');
    const maxTabsElement = document.getElementById('max-tabs');
    
    if (tabCountElement) {
        tabCountElement.textContent = openTabs.length;
        
        // 탭 개수에 따른 색상 변경
        tabCountElement.classList.remove('bg-blue-500', 'bg-orange-500', 'bg-red-500');
        
        if (openTabs.length >= 10) {
            // 10개 이상 - 빨간색 (더 이상 열 수 없음)
            tabCountElement.classList.add('bg-red-500');
        } else if (openTabs.length >= 7) {
            // 7개 이상 - 주황색 (많이 열려있음)
            tabCountElement.classList.add('bg-orange-500');
        } else {
            // 기본 - 파란색
            tabCountElement.classList.add('bg-blue-500');
        }
    }
    
    if (maxTabsElement) {
        maxTabsElement.textContent = '10'; // 최대 탭 수
    }
}

// 탭 스크롤 기능
function scrollToTab(contentId) {
    const tabElement = document.querySelector(`[data-content="${contentId}"]`);
    const tabContainer = document.getElementById('tab-container');
    
    if (tabElement && tabContainer) {
        const containerRect = tabContainer.getBoundingClientRect();
        const tabRect = tabElement.getBoundingClientRect();
        
        // 탭이 보이는 영역을 벗어났는지 확인
        if (tabRect.right > containerRect.right || tabRect.left < containerRect.left) {
            // 탭이 보이도록 스크롤
            const scrollAmount = tabRect.left - containerRect.left;
            tabScrollPosition = Math.max(0, tabScrollPosition + scrollAmount);
            updateTabScroll();
        }
    }
}

function updateTabScroll() {
    const tabBar = document.getElementById('tab-bar');
    if (tabBar) {
        console.log('탭바 스크롤 업데이트:', tabScrollPosition);
        tabBar.style.transform = `translateX(-${tabScrollPosition}px)`;
        updateTabScrollButtons();
    } else {
        console.error('탭바 요소를 찾을 수 없음');
    }
}

function updateTabScrollButtons() {
    const tabContainer = document.getElementById('tab-container');
    const tabBar = document.getElementById('tab-bar');
    
    if (!tabContainer || !tabBar) return;
    
    const containerWidth = tabContainer.clientWidth;
    const contentWidth = tabBar.scrollWidth;
    
    const leftButton = document.getElementById('tab-scroll-left');
    const rightButton = document.getElementById('tab-scroll-right');
    
    if (leftButton && rightButton) {
        // 스크롤이 필요한지 확인
        const needsScroll = contentWidth > containerWidth;
        
        if (needsScroll) {
            leftButton.style.opacity = tabScrollPosition > 0 ? '1' : '0.3';
            rightButton.style.opacity = tabScrollPosition < (contentWidth - containerWidth) ? '1' : '0.3';
            
            leftButton.style.pointerEvents = tabScrollPosition > 0 ? 'auto' : 'none';
            rightButton.style.pointerEvents = tabScrollPosition < (contentWidth - containerWidth) ? 'auto' : 'none';
        } else {
            leftButton.style.opacity = '0';
            rightButton.style.opacity = '0';
            leftButton.style.pointerEvents = 'none';
            rightButton.style.pointerEvents = 'none';
            
            // 스크롤이 불필요한 경우 위치 리셋 (무한루프 방지를 위해 직접 처리)
            if (tabScrollPosition > 0) {
                tabScrollPosition = 0;
                tabBar.style.transform = `translateX(-${tabScrollPosition}px)`;
            }
        }
    }
}

function scrollTabsLeft() {
    console.log('왼쪽 스크롤 버튼 클릭됨, 현재 위치:', tabScrollPosition);
    tabScrollPosition = Math.max(0, tabScrollPosition - TAB_SCROLL_AMOUNT);
    console.log('새로운 위치:', tabScrollPosition);
    updateTabScroll();
}

function scrollTabsRight() {
    console.log('오른쪽 스크롤 버튼 클릭됨, 현재 위치:', tabScrollPosition);
    const tabContainer = document.getElementById('tab-container');
    const tabBar = document.getElementById('tab-bar');
    
    if (!tabContainer || !tabBar) {
        console.error('탭 컨테이너 또는 탭바를 찾을 수 없음');
        return;
    }
    
    const containerWidth = tabContainer.clientWidth;
    const contentWidth = tabBar.scrollWidth;
    const maxScroll = Math.max(0, contentWidth - containerWidth);
    
    console.log('컨테이너 너비:', containerWidth, '콘텐츠 너비:', contentWidth, '최대 스크롤:', maxScroll);
    
    tabScrollPosition = Math.min(maxScroll, tabScrollPosition + TAB_SCROLL_AMOUNT);
    console.log('새로운 위치:', tabScrollPosition);
    updateTabScroll();
}

// 탭 이벤트 리스너 초기화
function initializeTabEventListeners() {
    console.log('탭 이벤트 리스너 초기화 시작');
    
    // 탭 스크롤 버튼 이벤트 리스너
    const leftButton = document.getElementById('tab-scroll-left');
    const rightButton = document.getElementById('tab-scroll-right');
    
    console.log('왼쪽 버튼:', leftButton);
    console.log('오른쪽 버튼:', rightButton);
    
    if (leftButton) {
        leftButton.addEventListener('click', scrollTabsLeft);
        console.log('왼쪽 스크롤 버튼 이벤트 리스너 추가됨');
    } else {
        console.error('왼쪽 스크롤 버튼을 찾을 수 없음');
    }
    
    if (rightButton) {
        rightButton.addEventListener('click', scrollTabsRight);
        console.log('오른쪽 스크롤 버튼 이벤트 리스너 추가됨');
    } else {
        console.error('오른쪽 스크롤 버튼을 찾을 수 없음');
    }
    
    // 리사이즈 이벤트 리스너
    window.addEventListener('resize', updateTabScrollButtons);
    
    console.log('iframe 기반 탭 이벤트 리스너 초기화 완료');
}

// 에러 표시 함수
function showError(message) {
    if (typeof Swal !== 'undefined') {
        Swal.fire({
            icon: 'error',
            title: '오류',
            text: message,
            confirmButtonColor: '#3B82F6'
        });
    } else {
        alert(message);
    }
}

// 전역 함수로 노출
window.openTab = openTab;
window.closeTab = closeTab;
window.switchToTab = switchToTab;
window.renderTabs = renderTabs;
window.createTabElement = createTabElement;
window.updateTabCount = updateTabCount;
window.scrollToTab = scrollToTab;
window.updateTabScrollButtons = updateTabScrollButtons;
window.scrollTabsLeft = scrollTabsLeft;
window.scrollTabsRight = scrollTabsRight;
window.updateTabCount = updateTabCount;
window.initializeTabEventListeners = initializeTabEventListeners;
