// menu.js - 메뉴 및 사이드바 관리

// 메뉴 정보 저장 변수 - API에서 로드됨
window.menuItems = [];

// 메뉴 API에서 데이터 로드
async function loadMenusFromAPI() {
    try {
        const response = await fetch('/api/menus/active');
        if (response.ok) {
            const menus = await response.json();
            window.menuItems = convertAPIMenusToFormat(menus);
            return true;
        } else {
            console.error('메뉴 로드 실패:', response.status);
            // API 실패 시 기본 메뉴 사용
            loadDefaultMenus();
            return false;
        }
    } catch (error) {
        console.error('메뉴 API 호출 오류:', error);
        // 오류 시 기본 메뉴 사용
        loadDefaultMenus();
        return false;
    }
}

// API 응답을 기존 형식으로 변환
function convertAPIMenusToFormat(apiMenus) {
    return apiMenus.map(menu => {
        const convertedMenu = {
            id: menu.menuId,
            title: menu.title,
            icon: menu.icon
        };
        
        // path가 있으면 추가하고 pages/ 형식으로 변환
        if (menu.path) {
            // URL이 /로 시작하면 pages/ 형식으로 변환
            if (menu.path.startsWith('/')) {
                convertedMenu.path = 'pages' + menu.path + '.html';
            } else {
                convertedMenu.path = menu.path;
            }
        }
        
        // 자식 메뉴가 있으면 재귀적으로 변환
        if (menu.children && menu.children.length > 0) {
            convertedMenu.children = convertAPIMenusToFormat(menu.children);
        }
        
        return convertedMenu;
    });
}

// 기본 메뉴 (API 실패 시 대체용)
function loadDefaultMenus() {
    window.menuItems = [
        { 
            id: 'dashboard',
            title: '대시보드', 
            path: 'pages/dashboard.html',
            icon: 'bx-tachometer'
        },
        {
            id: 'project-group',
            title: '프로젝트 관리',
            icon: 'bx-folder',
            children: [
                { 
                    id: 'projects',
                    title: '프로젝트 목록', 
                    path: 'pages/projects.html'
                },
                { 
                    id: 'project-new',
                    title: '새 프로젝트', 
                    path: 'pages/project-new.html'
                },
                { 
                    id: 'project-templates',
                    title: '프로젝트 템플릿', 
                    path: 'pages/project-templates.html'
                },
                { 
                    id: 'project-archive',
                    title: '보관된 프로젝트', 
                    path: 'pages/project-archive.html'
                }
            ]
        },
        {
            id: 'task-group',
            title: '업무 관리',
            icon: 'bx-task',
            children: [
                { 
                    id: 'tasks',
                    title: '업무 보드', 
                    path: 'pages/tasks.html'
                },
                { 
                    id: 'task-calendar',
                    title: '업무 달력', 
                    path: 'pages/task-calendar.html'
                },
                { 
                    id: 'task-timeline',
                    title: '타임라인', 
                    path: 'pages/task-timeline.html'
                },
                { 
                    id: 'task-my',
                    title: '내 업무', 
                    path: 'pages/task-my.html'
                }
            ]
        },
        { 
            id: 'reports',
            title: '보고서', 
            path: 'pages/reports.html',
            icon: 'bx-bar-chart-alt-2'
        },
        {
            id: 'system',
            title: '시스템 관리',
            icon: 'bx-cog',
            children: [
                { 
                    id: 'menu-management',
                    title: '메뉴 관리', 
                    path: 'pages/menu-management.html'
                }
            ]
        },
        { 
            id: 'settings',
            title: '설정', 
            path: 'pages/settings.html',
            icon: 'bx-cog'
        }
    ];
}

// 메뉴 아이템 찾기 유틸리티 함수
window.findMenuItem = function(id) {
    function searchInItems(items) {
        for (const item of items) {
            if (item.id === id) {
                return item;
            }
            if (item.children) {
                const found = searchInItems(item.children);
                if (found) return found;
            }
        }
        return null;
    }
    return searchInItems(window.menuItems);
};

// 동적 메뉴 생성
async function generateMenu() {
    console.log('generateMenu 함수 시작');
    
    const menuContainer = document.querySelector('nav ul.space-y-2');
    console.log('메뉴 컨테이너:', menuContainer);
    
    if (!menuContainer) {
        console.error('메뉴 컨테이너를 찾을 수 없습니다.');
        return;
    }
    
    // 로딩 상태 표시
    menuContainer.innerHTML = '<li class="flex items-center justify-center py-4"><div class="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div><span class="ml-2 text-sm text-gray-500">메뉴 로딩 중...</span></li>';
    
    // API에서 메뉴 로드
    const success = await loadMenusFromAPI();
    console.log('메뉴 로드 성공:', success);
    console.log('로드된 메뉴 아이템 수:', window.menuItems?.length || 0);
    
    // 기존 메뉴 초기화
    menuContainer.innerHTML = '';
    
    // 모든 최상위 메뉴 아이템 순회
    window.menuItems.forEach(item => {
        const menuElement = createMenuElement(item);
        menuContainer.appendChild(menuElement);
    });
    
    // 메뉴 로드 완료 후 이벤트 바인딩
    bindMenuEvents();
    
    if (!success) {
        // API 실패 시 알림 (선택사항)
        console.warn('메뉴를 서버에서 로드하지 못했습니다. 기본 메뉴를 사용합니다.');
    }
}

// 메뉴 이벤트 바인딩 통합 함수
function bindMenuEvents() {
    // 아코디언 이벤트 바인딩
    bindAccordionEvents();
    // 메뉴 아이템 이벤트 바인딩
    bindMenuItemEvents();
    // 초기 버튼 상태 업데이트
    updateControlButtonsState();
}

// 메뉴 엘리먼트 생성
function createMenuElement(item) {
    const li = document.createElement('li');
    
    if (item.children && item.children.length > 0) {
        // 아코디언 그룹 메뉴
        li.innerHTML = `
            <button class="accordion-toggle w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg flex items-center justify-between" data-accordion="${item.id}">
                <div class="flex items-center">
                    ${item.icon ? `<i class='bx ${item.icon} mr-3 text-lg'></i>` : ''}
                    ${item.title}
                </div>
                <i class='bx bx-chevron-right w-4 h-4 transition-transform duration-200 accordion-arrow'></i>
            </button>
            <ul class="accordion-content hidden mt-1 ml-8 space-y-1" data-accordion-content="${item.id}">
                ${createChildMenuItems(item.children)}
            </ul>
        `;
    } else {
        // 일반 메뉴 아이템
        li.innerHTML = `
            <button class="menu-item w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg flex items-center" data-content="${item.id}">
                ${item.icon ? `<i class='bx ${item.icon} mr-3 text-lg'></i>` : ''}
                ${item.title}
            </button>
        `;
    }
    
    return li;
}

// 자식 메뉴 아이템들 생성
function createChildMenuItems(children) {
    if (!children || !Array.isArray(children)) return '';
    
    return children.map(child => {
        return `
            <li>
                <button class="menu-item w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg" data-content="${child.id}">
                    ${child.title}
                </button>
            </li>
        `;
    }).join('');
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
    const accordions = getAccordionGroups();
    
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
    const accordions = getAccordionGroups();
    
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

// 아코디언 그룹 ID들 가져오기
function getAccordionGroups() {
    const accordionGroups = [];
    window.menuItems.forEach(item => {
        if (item.children && item.children.length > 0) {
            accordionGroups.push(item.id);
        }
    });
    return accordionGroups;
}

// 제어 버튼 상태 업데이트
function updateControlButtonsState() {
    const accordions = getAccordionGroups();
    let openCount = 0;
    
    accordions.forEach(accordionId => {
        const content = document.querySelector(`[data-accordion-content="${accordionId}"]`);
        if (content && content.classList.contains('open')) {
            openCount++;
        }
    });
    
    const expandAllBtn = document.getElementById('expand-all');
    const collapseAllBtn = document.getElementById('collapse-all');
    
    if (!expandAllBtn || !collapseAllBtn) return;
    
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

// 메뉴 이벤트 리스너 초기화
async function initializeMenuEventListeners() {
    // 메뉴 동적 생성 (비동기)
    await generateMenu();
    
    // 모바일 메뉴 토글
    const menuToggle = document.getElementById('menu-toggle');
    const overlay = document.getElementById('overlay');
    const expandAllBtn = document.getElementById('expand-all');
    const collapseAllBtn = document.getElementById('collapse-all');
    
    if (menuToggle) menuToggle.addEventListener('click', toggleSidebar);
    
    // 오버레이 클릭 시 사이드바 닫기
    if (overlay) overlay.addEventListener('click', closeSidebar);
    
    // 전체 아코디언 제어 버튼
    if (expandAllBtn) expandAllBtn.addEventListener('click', expandAllAccordions);
    if (collapseAllBtn) collapseAllBtn.addEventListener('click', collapseAllAccordions);
    
    // 윈도우 리사이즈 이벤트
    window.addEventListener('resize', updateResponsiveLayout);
    
    // ESC 키로 사이드바 닫기
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeSidebar();
        }
    });
}

// 아코디언 이벤트 바인딩
function bindAccordionEvents() {
    document.querySelectorAll('.accordion-toggle').forEach(toggle => {
        toggle.addEventListener('click', function() {
            const accordionId = this.getAttribute('data-accordion');
            toggleAccordion(accordionId);
        });
    });
}

// 메뉴 아이템 이벤트 바인딩
function bindMenuItemEvents() {
    document.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('click', function() {
            const contentId = this.getAttribute('data-content');
            const menuItem = window.findMenuItem(contentId);
            if (window.openTab && menuItem) {
                openTab(contentId, menuItem);
            }
        });
    });
}
