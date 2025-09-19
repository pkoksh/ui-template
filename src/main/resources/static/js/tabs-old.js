// tabs-iframe.js - iframe 기반 탭 관리 및 스크롤 기능

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
            // 현재 스크롤 위치 저장
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            const scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
            
            Swal.fire({
                icon: 'warning',
                title: '탭 개수 제한',
                text: `최대 ${MAX_TABS}개의 탭만 열 수 있습니다.`,
                html: `최대 <strong>${MAX_TABS}개</strong>의 탭만 열 수 있습니다.<br>다른 탭을 닫고 시도해주세요.`,
                confirmButtonText: '확인',
                confirmButtonColor: '#3B82F6',
                allowOutsideClick: false,
                allowEscapeKey: true,
                backdrop: true,
                heightAuto: false,
                customClass: {
                    container: 'swal2-container-custom'
                },
                didOpen: () => {
                    // 스크롤 위치 복원
                    document.documentElement.scrollTop = scrollTop;
                    document.documentElement.scrollLeft = scrollLeft;
                    document.body.scrollTop = scrollTop;
                    document.body.scrollLeft = scrollLeft;
                },
                willClose: () => {
                    // 닫힐 때도 스크롤 위치 복원
                    document.documentElement.scrollTop = scrollTop;
                    document.documentElement.scrollLeft = scrollLeft;
                    document.body.scrollTop = scrollTop;
                    document.body.scrollLeft = scrollLeft;
                }
            });
            return;
        }
        
        // 새 탭 추가
        openTabs.push({ id: contentId, title: menuItem.title });
        switchToTab(contentId);
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
    // 마지막 탭은 닫을 수 없음
    if (openTabs.length <= 1) {
        return;
    }
    
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
        }
    } else {
        renderTabs();
    }
    
    // 탭이 하나도 없으면 환영 화면 표시
    if (openTabs.length === 0) {
        if (window.showWelcomeScreen) {
            window.showWelcomeScreen();
        }
        if (window.hideIframeContainer) {
            window.hideIframeContainer();
        }
    }
    
    // 탭 개수 업데이트
    updateTabCount();
}

// 탭 바 렌더링
function renderTabs() {
    tabBar.innerHTML = '';
    
    // 탭 바를 flexbox로 설정
    tabBar.style.display = 'flex';
    
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
    tabDiv.className = `tab-item flex items-center space-x-2 min-w-0 px-4 py-2 rounded-b-lg cursor-pointer ${
        tab.id === activeTab 
            ? 'tab-active text-blue-600' 
            : 'text-gray-600'
    }`;
    tabDiv.setAttribute('data-content', tab.id);
    tabDiv.draggable = true; // 드래그 가능하도록 설정
    
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
        <i class='bx bx-x text-base'></i>
    `;
    
    // 이벤트 리스너
    tabDiv.addEventListener('click', function(e) {
        if (!e.target.closest('.tab-close')) {
            switchToTab(tab.id);
        }
    });
    
    closeButton.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        closeTab(tab.id);
    });
    
    // 드래그 앤 드롭 이벤트
    setupTabDragAndDrop(tabDiv, tab);
    
    tabDiv.appendChild(titleSpan);
    tabDiv.appendChild(closeButton);
    
    return tabDiv;
}

// 탭 드래그 앤 드롭 설정
function setupTabDragAndDrop(tabElement, tab) {
    tabElement.addEventListener('dragstart', function(e) {
        e.dataTransfer.setData('text/plain', tab.id);
        e.dataTransfer.effectAllowed = 'move';
        tabElement.classList.add('opacity-50');
    });
    
    tabElement.addEventListener('dragend', function(e) {
        tabElement.classList.remove('opacity-50');
        
        // 모든 탭의 드래그 오버 스타일 제거
        document.querySelectorAll('.tab-item').forEach(el => {
            el.classList.remove('border-l-4', 'border-blue-500');
        });
    });
    
    tabElement.addEventListener('dragover', function(e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        
        // 드래그 오버 시각적 표시
        tabElement.classList.add('border-l-4', 'border-blue-500');
    });
    
    tabElement.addEventListener('dragleave', function(e) {
        tabElement.classList.remove('border-l-4', 'border-blue-500');
    });
    
    tabElement.addEventListener('drop', function(e) {
        e.preventDefault();
        const draggedTabId = e.dataTransfer.getData('text/plain');
        const targetTabId = tab.id;
        
        if (draggedTabId !== targetTabId) {
            reorderTabs(draggedTabId, targetTabId);
        }
        
        // 드래그 오버 스타일 제거
        tabElement.classList.remove('border-l-4', 'border-blue-500');
    });
}

// 탭 순서 변경
function reorderTabs(draggedTabId, targetTabId) {
    const draggedIndex = openTabs.findIndex(tab => tab.id === draggedTabId);
    const targetIndex = openTabs.findIndex(tab => tab.id === targetTabId);
    
    if (draggedIndex !== -1 && targetIndex !== -1) {
        // 배열에서 요소 이동
        const [draggedTab] = openTabs.splice(draggedIndex, 1);
        openTabs.splice(targetIndex, 0, draggedTab);
        
        // 탭 다시 렌더링
        renderTabs();
    }
}

// 탭 개수 업데이트
function updateTabCount() {
    const tabCountElement = document.getElementById('tab-count');
    if (tabCountElement) {
        tabCountElement.textContent = openTabs.length.toString();
    }
}

// 탭 스크롤 기능
function scrollToTab(contentId) {
    const tabElement = document.querySelector(`[data-content="${contentId}"]`);
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
    if (tabBar) {
        tabBar.style.transform = `translateX(-${tabScrollPosition}px)`;
        updateTabScrollButtons();
    }
}

function updateTabScrollButtons() {
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
            tabScrollPosition = 0;
            updateTabScroll();
        }
    }
}

function scrollTabsLeft() {
    tabScrollPosition = Math.max(0, tabScrollPosition - TAB_SCROLL_AMOUNT);
    updateTabScroll();
}

function scrollTabsRight() {
    if (!tabContainer || !tabBar) return;
    
    const containerWidth = tabContainer.clientWidth;
    const contentWidth = tabBar.scrollWidth;
    const maxScroll = Math.max(0, contentWidth - containerWidth);
    
    tabScrollPosition = Math.min(maxScroll, tabScrollPosition + TAB_SCROLL_AMOUNT);
    updateTabScroll();
}

// 모든 탭 닫기
function closeAllTabs() {
    if (openTabs.length === 0) return;
    
    Swal.fire({
        title: '모든 탭 닫기',
        text: '정말로 모든 탭을 닫으시겠습니까?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#EF4444',
        cancelButtonColor: '#6B7280',
        confirmButtonText: '모두 닫기',
        cancelButtonText: '취소'
    }).then((result) => {
        if (result.isConfirmed) {
            // 모든 iframe 정리
            if (window.cleanupAllPages) {
                window.cleanupAllPages();
            }
            
            // 탭 배열 초기화
            openTabs.length = 0;
            activeTab = null;
            tabScrollPosition = 0;
            
            // UI 업데이트
            renderTabs();
            updateTabCount();
            
            // 환영 화면 표시
            if (window.showWelcomeScreen) {
                window.showWelcomeScreen();
            }
            if (window.hideIframeContainer) {
                window.hideIframeContainer();
            }
        }
    });
}

// 에러 표시 함수
function showError(message) {
    // SweetAlert2로 에러 표시
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

// 리사이즈 이벤트 처리
function handleResize() {
    updateTabScrollButtons();
}

// 초기화 함수
function initTabs() {
    // 탭 스크롤 버튼 이벤트 리스너
    const leftButton = document.getElementById('tab-scroll-left');
    const rightButton = document.getElementById('tab-scroll-right');
    
    if (leftButton) {
        leftButton.addEventListener('click', scrollTabsLeft);
    }
    
    if (rightButton) {
        rightButton.addEventListener('click', scrollTabsRight);
    }
    
    // 리사이즈 이벤트 리스너
    window.addEventListener('resize', handleResize);
    
    // 초기 탭 개수 업데이트
    updateTabCount();
    
    console.log('iframe 기반 탭 시스템 초기화 완료');
}

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', initTabs);
