// search.js - 메뉴 검색 기능

// 검색 가능한 메뉴 데이터 생성 함수
function generateSearchableMenus() {
    const searchableMenus = [];
    
    function addMenuToSearch(item, parentTitle = null) {
        // path가 있는 메뉴만 검색 대상 (실제 페이지가 있는 메뉴)
        if (item.path) {
            let category = parentTitle || '기타';
            let description = `${item.title} 페이지`;
            
            // 카테고리별 아이콘 설정
            if (!parentTitle && item.icon) {
                if (item.icon.includes('tachometer')) category = '홈';
                else if (item.icon.includes('chart')) category = '분석';
                else if (item.icon.includes('cog')) category = '시스템';
            }
            
            // 설명 설정
            if (item.id === 'dashboard') description = '전체 현황을 한눈에 확인';
            else if (item.id === 'projects') description = '진행 중인 모든 프로젝트 보기';
            else if (item.id === 'project-new') description = '새로운 프로젝트 생성';
            else if (item.id === 'project-templates') description = '프로젝트 템플릿 관리';
            else if (item.id === 'project-archive') description = '완료되거나 보관된 프로젝트';
            else if (item.id === 'tasks') description = '칸반 형태의 업무 관리';
            else if (item.id === 'task-calendar') description = '달력 형태로 업무 일정 확인';
            else if (item.id === 'task-timeline') description = '업무 진행 상황을 시간순으로 확인';
            else if (item.id === 'task-my') description = '나에게 할당된 업무 목록';
            else if (item.id === 'reports') description = '각종 통계 및 보고서';
            else if (item.id === 'settings') description = '시스템 설정 및 환경설정';
            
            searchableMenus.push({
                id: item.id,
                title: item.title,
                description: description,
                category: category,
                icon: item.icon || 'bx-file'
            });
        }
        
        // 자식 메뉴가 있으면 재귀적으로 처리
        if (item.children && Array.isArray(item.children)) {
            item.children.forEach(child => {
                addMenuToSearch(child, item.title);
            });
        }
    }
    
    // 모든 최상위 메뉴 아이템 처리
    window.menuItems.forEach(item => {
        addMenuToSearch(item);
    });
    
    return searchableMenus;
}

// Fuse.js 검색 옵션
const fuseOptions = {
    keys: [
        { name: 'title', weight: 0.7 },
        { name: 'description', weight: 0.2 },
        { name: 'category', weight: 0.1 }
    ],
    threshold: 0.3,
    includeScore: true,
    includeMatches: true,
    minMatchCharLength: 1
};

// Fuse 인스턴스 (동적으로 생성)
let fuse;

// 검색 관련 DOM 요소
let searchInput;
let searchResults;
let currentFocusIndex = -1;
let isSearchResultsVisible = false;

// 검색 기능 초기화
function initializeSearch() {
    // 검색 가능한 메뉴 데이터 생성
    const searchableMenus = generateSearchableMenus();
    
    // Fuse 인스턴스 생성
    fuse = new Fuse(searchableMenus, fuseOptions);
    
    searchInput = document.getElementById('menu-search');
    searchResults = document.getElementById('search-results');
    
    if (!searchInput || !searchResults) {
        console.warn('검색 요소를 찾을 수 없습니다.');
        return;
    }
    
    // 이벤트 리스너 등록
    searchInput.addEventListener('input', handleSearchInput);
    searchInput.addEventListener('keydown', handleSearchKeydown);
    searchInput.addEventListener('focus', handleSearchFocus);
    searchInput.addEventListener('blur', handleSearchBlur);
    
    // 검색 결과 클릭 이벤트
    searchResults.addEventListener('click', handleSearchResultClick);
    
    // 외부 클릭 시 검색 결과 숨기기
    document.addEventListener('click', handleDocumentClick);
}

// 검색 입력 처리
function handleSearchInput(e) {
    const query = e.target.value.trim();
    
    if (query.length === 0) {
        hideSearchResults();
        return;
    }
    
    const results = fuse.search(query);
    displaySearchResults(results, query);
}

// 키보드 네비게이션 처리
function handleSearchKeydown(e) {
    const resultItems = searchResults.querySelectorAll('.search-result-item');
    
    switch (e.key) {
        case 'ArrowDown':
            e.preventDefault();
            currentFocusIndex = Math.min(currentFocusIndex + 1, resultItems.length - 1);
            updateFocusedItem(resultItems);
            break;
            
        case 'ArrowUp':
            e.preventDefault();
            currentFocusIndex = Math.max(currentFocusIndex - 1, -1);
            updateFocusedItem(resultItems);
            break;
            
        case 'Enter':
            e.preventDefault();
            if (currentFocusIndex >= 0 && resultItems[currentFocusIndex]) {
                const menuId = resultItems[currentFocusIndex].dataset.menuId;
                selectSearchResult(menuId);
            }
            break;
            
        case 'Escape':
            e.preventDefault();
            hideSearchResults();
            searchInput.blur();
            break;
    }
}

// 검색창 포커스 처리
function handleSearchFocus() {
    if (searchInput.value.trim().length > 0) {
        showSearchResults();
    }
}

// 검색창 블러 처리 (약간의 지연을 둬서 클릭 이벤트가 먼저 처리되도록)
function handleSearchBlur() {
    setTimeout(() => {
        hideSearchResults();
    }, 150);
}

// 검색 결과 클릭 처리
function handleSearchResultClick(e) {
    const resultItem = e.target.closest('.search-result-item');
    if (resultItem) {
        const menuId = resultItem.dataset.menuId;
        selectSearchResult(menuId);
    }
}

// 문서 클릭 처리 (검색 결과 외부 클릭 시 숨기기)
function handleDocumentClick(e) {
    if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
        hideSearchResults();
    }
}

// 검색 결과 표시
function displaySearchResults(results, query) {
    if (results.length === 0) {
        searchResults.innerHTML = `
            <div class="px-4 py-3 text-sm text-gray-500 text-center">
                '<strong>${escapeHtml(query)}</strong>' 검색 결과가 없습니다.
            </div>
        `;
    } else {
        const resultsHTML = results.map((result, index) => {
            const item = result.item;
            const highlightedTitle = highlightMatches(item.title, result.matches, 'title');
            const highlightedDescription = highlightMatches(item.description, result.matches, 'description');
            
            return `
                <div class="search-result-item px-4 py-3 cursor-pointer border-b border-gray-100 last:border-b-0 flex items-center space-x-3" 
                     data-menu-id="${item.id}">
                    <i class="bx ${item.icon} text-lg text-gray-600"></i>
                    <div class="flex-1 min-w-0">
                        <div class="text-sm font-medium text-gray-900">${highlightedTitle}</div>
                        <div class="text-xs text-gray-500 truncate">${highlightedDescription}</div>
                        <div class="text-xs text-blue-600 mt-1">${item.category}</div>
                    </div>
                    <div class="text-xs text-gray-400">
                        <i class='bx bx-chevron-right text-sm'></i>
                    </div>
                </div>
            `;
        }).join('');
        
        searchResults.innerHTML = resultsHTML;
    }
    
    currentFocusIndex = -1;
    showSearchResults();
}

// 텍스트 하이라이트 처리
function highlightMatches(text, matches, key) {
    if (!matches) return escapeHtml(text);
    
    const keyMatches = matches.filter(match => match.key === key);
    if (keyMatches.length === 0) return escapeHtml(text);
    
    let highlightedText = escapeHtml(text);
    
    // 매치된 인덱스들을 역순으로 정렬하여 뒤에서부터 하이라이트 적용
    const indices = keyMatches[0].indices.sort((a, b) => b[0] - a[0]);
    
    indices.forEach(([start, end]) => {
        const before = highlightedText.substring(0, start);
        const match = highlightedText.substring(start, end + 1);
        const after = highlightedText.substring(end + 1);
        highlightedText = before + `<span class="search-highlight">${match}</span>` + after;
    });
    
    return highlightedText;
}

// 포커스된 아이템 업데이트
function updateFocusedItem(resultItems) {
    resultItems.forEach((item, index) => {
        if (index === currentFocusIndex) {
            item.classList.add('focused');
            item.scrollIntoView({ block: 'nearest' });
        } else {
            item.classList.remove('focused');
        }
    });
}

// 검색 결과 선택
function selectSearchResult(menuId) {
    const menuItem = window.menuItems[menuId];
    if (menuItem) {
        openTab(menuId, menuItem);
        searchInput.value = '';
        hideSearchResults();
        searchInput.blur();
    }
}

// 검색 결과 표시
function showSearchResults() {
    searchResults.classList.remove('hidden');
    searchResults.classList.add('show');
    isSearchResultsVisible = true;
}

// 검색 결과 숨기기
function hideSearchResults() {
    searchResults.classList.add('hidden');
    searchResults.classList.remove('show');
    isSearchResultsVisible = false;
    currentFocusIndex = -1;
}

// HTML 이스케이프 처리
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// 검색 초기화 (DOMContentLoaded 후 실행)
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(initializeSearch, 100); // 다른 모듈들이 먼저 초기화되도록 약간의 지연
});

// 전역 함수로 노출 (다른 모듈에서 사용할 수 있도록)
window.menuSearch = {
    focus: () => searchInput?.focus(),
    clear: () => {
        if (searchInput) {
            searchInput.value = '';
            hideSearchResults();
        }
    },
    isVisible: () => isSearchResultsVisible
};
