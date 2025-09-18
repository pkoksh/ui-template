// page-loader.js - 페이지 로딩 및 캐시 관리

// 페이지 캐시 관련 변수
let loadedPages = new Map(); // 캐시된 페이지 내용
let pageScripts = new Map(); // 각 페이지의 스크립트 저장
let pageStyles = new Map(); // 각 페이지의 스타일 저장
let pageAccessTime = new Map(); // 페이지 마지막 접근 시간
const MAX_CACHED_PAGES = 10; // 최대 캐시 페이지 수 (설정 가능)

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
    let clearedCount = 0;
    
    // 현재 열린 탭이 아닌 모든 캐시 제거
    for (const pageId of loadedPages.keys()) {
        if (!openTabIds.has(pageId)) {
            removePageFromCache(pageId);
            clearedCount++;
        }
    }
    
    console.log(`${clearedCount}개의 사용하지 않는 페이지 캐시가 정리되었습니다.`);
    return clearedCount;
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
        cacheInfo.textContent = `${status.cached}/${status.maxCache}`;
        cacheInfo.title = `열린 탭: ${status.openTabs}개, 메모리 사용량: ${status.memoryUsage}`;
        
        // 캐시가 많이 차면 색상 변경
        const memoryStatusDiv = document.getElementById('memory-status');
        if (memoryStatusDiv) {
            if (status.cached >= MAX_CACHED_PAGES * 0.8) {
                // 캐시가 많이 찼을 때 경고 색상
                cacheInfo.className = cacheInfo.className.replace('text-gray-700', 'text-orange-600');
            } else {
                // 정상 상태 색상
                cacheInfo.className = cacheInfo.className.replace('text-orange-600', 'text-gray-700');
            }
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
    
    const menuItem = window.findMenuItem(contentId);
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

// 에러 내용 표시
function displayErrorContent(errorMessage) {
    contentArea.innerHTML = `
        <div class="text-center py-8">
            <div class="text-red-500 mb-2">
                <svg class="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                </svg>
            </div>
            <p class="text-gray-500">${errorMessage}</p>
        </div>
    `;
}

// 페이지 내용 표시
function displayPageContent(content, contentId) {
    contentArea.innerHTML = content;
    
    // 페이지별 스타일 적용
    applyPageStyles(contentId);
    
    // 페이지별 스크립트 실행
    executePageScripts(contentId);
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

// 페이지 캐시 지우기
function clearPageCache(contentId) {
    if (contentId) {
        removePageFromCache(contentId);
        // 해당 페이지 다시 로드
        if (activeTab === contentId) {
            switchToTab(contentId);
        }
    } else {
        // 전체 캐시 지우기
        clearAllCache();
    }
}

// 캐시 이벤트 리스너 초기화
function initializeCacheEventListeners() {
    // 캐시 정리 버튼
    const clearCacheBtn = document.getElementById('clear-cache-btn');
    if (clearCacheBtn) {
        clearCacheBtn.addEventListener('click', function() {
            const clearedCount = clearAllCache();
            updateMemoryStatus();
            
            Swal.fire({
                icon: 'success',
                title: '캐시 정리 완료',
                html: `<strong>${clearedCount}개</strong>의 사용하지 않는 페이지 캐시가 정리되었습니다.`,
                confirmButtonText: '확인',
                confirmButtonColor: '#10B981',
                timer: 1500,
                timerProgressBar: true,
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                customClass: {
                    popup: 'swal2-toast-success'
                }
            });
        });
    }
}

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
