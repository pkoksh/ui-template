// tabs.js - 탭 관리 및 스크롤 기능

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
    
    // 메모리 상태 업데이트
    updateMemoryStatus();
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
    
    // 페이지 내용 로드
    loadPage(contentId).then(content => {
        displayPageContent(content, contentId);
        hideLoadingState();
        updatePageAccessTime(contentId);
        updateMemoryStatus();
    }).catch(error => {
        console.error('페이지 로드 실패:', error);
        displayErrorContent(error.message);
        hideLoadingState();
    });
    
    // 활성 탭이 보이도록 스크롤
    scrollToTab(contentId);
}

// 탭 닫기
function closeTab(contentId, removeFromCache = false) {
    // 마지막 탭은 닫을 수 없음
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
        if (openTabs.length > 0) {
            const newActiveTab = openTabs[Math.max(0, tabIndex - 1)];
            switchToTab(newActiveTab.id);
        } else {
            // 모든 탭이 닫혔을 때 환영 화면 표시
            activeTab = null;
            if (window.showWelcomeScreen) {
                window.showWelcomeScreen();
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
    }
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

// 탭 스크롤 관련 함수들
function scrollTabs(direction, amount = TAB_SCROLL_AMOUNT) {
    if (!tabContainer || !tabBar) return;
    
    const containerWidth = tabContainer.offsetWidth - 100; // 양쪽 패딩 50px씩 고려
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
    
    const containerWidth = tabContainer.offsetWidth - 100; // 양쪽 패딩 50px씩 고려
    const tabBarWidth = tabBar.scrollWidth;
    const maxScroll = Math.max(0, tabBarWidth - containerWidth);
    
    // 스크롤이 필요한지 확인
    const needsScroll = tabBarWidth > containerWidth;
    
    if (needsScroll) {
        // 왼쪽 버튼과 페이드 표시/숨김
        if (tabScrollPosition > 0) {
            tabScrollLeft.classList.remove('opacity-0');
            tabScrollLeft.classList.add('opacity-100');
            tabContainer.classList.add('show-left-fade');
        } else {
            tabScrollLeft.classList.remove('opacity-100');
            tabScrollLeft.classList.add('opacity-0');
            tabContainer.classList.remove('show-left-fade');
        }
        
        // 오른쪽 버튼과 페이드 표시/숨김
        if (tabScrollPosition < maxScroll) {
            tabScrollRight.classList.remove('opacity-0');
            tabScrollRight.classList.add('opacity-100');
            tabContainer.classList.add('show-right-fade');
        } else {
            tabScrollRight.classList.remove('opacity-100');
            tabScrollRight.classList.add('opacity-0');
            tabContainer.classList.remove('show-right-fade');
        }
    } else {
        // 스크롤이 필요없으면 모든 버튼과 페이드 숨김
        tabScrollLeft.classList.add('opacity-0');
        tabScrollRight.classList.add('opacity-0');
        tabContainer.classList.remove('show-left-fade');
        tabContainer.classList.remove('show-right-fade');
        tabScrollPosition = 0;
        tabBar.style.transform = 'translateX(0px)';
    }
}

// 특정 탭이 보이도록 스크롤
function scrollToTab(tabId) {
    if (!tabContainer || !tabBar) return;
    
    const tabElement = tabBar.querySelector(`[data-content="${tabId}"]`);
    if (!tabElement) return;
    
    // 컨테이너 실제 보이는 너비 계산 (패딩 제외)
    const containerWidth = tabContainer.offsetWidth - 100; // 양쪽 패딩 50px씩 고려
    const tabBarWidth = tabBar.scrollWidth;
    
    // 탭 위치 정보 계산
    const tabLeft = tabElement.offsetLeft;
    const tabWidth = tabElement.offsetWidth;
    const tabRight = tabLeft + tabWidth;
    
    // 현재 보이는 영역 계산
    const visibleLeft = tabScrollPosition;
    const visibleRight = tabScrollPosition + containerWidth;
    
    let newScrollPosition = tabScrollPosition;
    
    // 탭이 왼쪽으로 벗어난 경우
    if (tabLeft < visibleLeft) {
        newScrollPosition = Math.max(0, tabLeft - 20); // 20px 여백
    }
    // 탭이 오른쪽으로 벗어난 경우 또는 완전히 보이지 않는 경우
    else if (tabRight > visibleRight) {
        // 최대 스크롤 위치 (탭바 전체 너비에서 컨테이너 너비를 뺀 값)
        const maxScrollPosition = Math.max(0, tabBarWidth - containerWidth);
        
        // 탭 오른쪽 끝이 보이도록 스크롤 위치 계산
        newScrollPosition = Math.min(
            maxScrollPosition,
            tabRight - containerWidth + 60 // 60px 여백 (패딩과 마진 고려)
        );
    }
    
    // 스크롤 위치 업데이트
    tabScrollPosition = newScrollPosition;
    
    // 스크롤 애니메이션 적용
    tabBar.style.transform = `translateX(-${tabScrollPosition}px)`;
    
    // 버튼 상태 업데이트
    updateTabScrollButtons();
}

// 탭 드래그 앤 드롭 기능
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

// 키보드 단축키 지원
function initializeTabKeyboardShortcuts() {
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
}

// 탭 이벤트 리스너 초기화
function initializeTabEventListeners() {
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
    
    // 키보드 단축키 초기화
    initializeTabKeyboardShortcuts();
    
    // 드래그 앤 드롭 활성화
    enableTabDragAndDrop();
}
