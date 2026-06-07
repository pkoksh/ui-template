// search.js - 메뉴 검색 기능

// 검색 가능한 메뉴 데이터 생성 함수
// (메뉴 데이터 구조: window.menuItems = [{id, title, icon, url, Items:[...]}] — menu.js 참조)
function generateSearchableMenus() {
    const searchableMenus = [];

    function addMenuToSearch(item, parentTitle = null) {
        // url이 있는 메뉴만 검색 대상 (실제 페이지가 있는 메뉴)
        if (item.url) {
            searchableMenus.push({
                id: item.id,
                title: item.title,
                description: item.url,
                category: parentTitle || '메뉴',
                icon: item.icon || 'bx-file'
            });
        }

        // 자식 메뉴가 있으면 재귀적으로 처리
        if (item.Items && Array.isArray(item.Items)) {
            item.Items.forEach(child => {
                addMenuToSearch(child, item.title);
            });
        }
    }

    // 모든 최상위 메뉴 아이템 처리
    (window.menuItems || []).forEach(item => {
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

// 검색 색인(Fuse) 재구성 — 메뉴는 비동기 로드되므로 메뉴 갱신 시마다 호출됨
function rebuildSearchIndex() {
    fuse = new Fuse(generateSearchableMenus(), fuseOptions);
}

// 검색 기능 초기화
function initializeSearch() {
    // 검색 색인 생성 (메뉴가 아직 로드 전이면 빈 색인 — 메뉴 로드 완료 시 reindex됨)
    rebuildSearchIndex();

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

    // Ctrl+K / Cmd+K 단축키로 검색창 포커스
    document.addEventListener('keydown', function(e) {
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
            e.preventDefault();
            searchInput.focus();
        }
    });
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

// 검색 결과 선택 → 해당 메뉴 탭 열기
function selectSearchResult(menuId) {
    const menuItem = window.findMenuItem(menuId);
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
    isVisible: () => isSearchResultsVisible,
    reindex: rebuildSearchIndex   // 메뉴 로드/갱신 후 색인 재구성 (menu.js generateMenu가 호출)
};
