// page-loader-iframe.js - iframe 기반 페이지 로딩

// iframe 관리 변수
let currentPageId = null;
let iframeMap = new Map(); // 탭 ID와 iframe 매핑

// 페이지 로딩 함수
async function loadPage(contentId, url, tabName) {
    try {
        // 로딩 표시
        showLoading();
        
        // 환영 화면 숨기기
        hideWelcomeScreen();
        
        // iframe 컨테이너 표시
        showIframeContainer();
        
        // 기존 iframe들 숨기기
        hideAllIframes();
        
        // 해당 페이지의 iframe이 이미 존재하는지 확인
        let iframe = iframeMap.get(contentId);
        
        if (!iframe) {
            // 새 iframe 생성
            iframe = createIframe(contentId, url);
            iframeMap.set(contentId, iframe);
            
            // iframe 로드 완료 대기
            await waitForIframeLoad(iframe);
        } else {
            // 기존 iframe 표시
            iframe.style.display = 'block';
        }
        
        // 현재 페이지 ID 업데이트
        currentPageId = contentId;
        
        // 로딩 숨기기
        hideLoading();
        
        console.log(`iframe 페이지 로드 완료: ${contentId}`);
        return true;
        
    } catch (error) {
        console.error('페이지 로드 실패:', error);
        hideLoading();
        showError('페이지를 불러올 수 없습니다.');
        return false;
    }
}

// iframe 생성 함수
function createIframe(contentId, url) {
    const iframe = document.createElement('iframe');
    iframe.id = `iframe-${contentId}`;
    iframe.src = url;
    iframe.className = 'w-full h-full border-0';
    iframe.style.display = 'block';
    
    // iframe 속성 설정
    iframe.setAttribute('loading', 'lazy');
    iframe.setAttribute('sandbox', 'allow-scripts allow-same-origin allow-forms allow-popups');
    
    // iframe 컨테이너에 추가
    const container = document.getElementById('iframe-container');
    container.appendChild(iframe);
    
    return iframe;
}

// iframe 로드 대기 함수
function waitForIframeLoad(iframe) {
    return new Promise((resolve, reject) => {
        const timeout = setTimeout(() => {
            reject(new Error('iframe 로드 타임아웃'));
        }, 10000); // 10초 타임아웃
        
        iframe.onload = () => {
            clearTimeout(timeout);
            resolve();
        };
        
        iframe.onerror = () => {
            clearTimeout(timeout);
            reject(new Error('iframe 로드 실패'));
        };
    });
}

// iframe 관리 함수들
function hideAllIframes() {
    iframeMap.forEach(iframe => {
        iframe.style.display = 'none';
    });
}

function showIframe(contentId) {
    const iframe = iframeMap.get(contentId);
    if (iframe) {
        hideAllIframes();
        iframe.style.display = 'block';
        currentPageId = contentId;
    }
}

function removeIframe(contentId) {
    const iframe = iframeMap.get(contentId);
    if (iframe) {
        iframe.remove();
        iframeMap.delete(contentId);
        
        // 현재 페이지가 제거된 경우 처리
        if (currentPageId === contentId) {
            currentPageId = null;
            
            // 다른 열린 탭이 있으면 첫 번째 탭으로 전환
            if (openTabs.length > 0) {
                const firstTab = openTabs[0];
                showIframe(firstTab.id);
            } else {
                // 열린 탭이 없으면 환영 화면 표시
                showWelcomeScreen();
                hideIframeContainer();
            }
        }
    }
}

// UI 상태 관리 함수들
function showLoading() {
    document.getElementById('loading-indicator').classList.remove('hidden');
    document.getElementById('welcome-screen').classList.add('hidden');
    document.getElementById('iframe-container').classList.add('hidden');
}

function hideLoading() {
    document.getElementById('loading-indicator').classList.add('hidden');
}

function showWelcomeScreen() {
    document.getElementById('welcome-screen').classList.remove('hidden');
}

function hideWelcomeScreen() {
    document.getElementById('welcome-screen').classList.add('hidden');
}

function showIframeContainer() {
    document.getElementById('iframe-container').classList.remove('hidden');
}

function hideIframeContainer() {
    document.getElementById('iframe-container').classList.add('hidden');
}

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

// 탭 전환 함수
function switchToTab(contentId) {
    if (iframeMap.has(contentId)) {
        showIframe(contentId);
        hideWelcomeScreen();
        showIframeContainer();
    }
}

// 페이지 정리 함수 (탭 닫기 시 호출)
function cleanupPage(contentId) {
    removeIframe(contentId);
    console.log(`iframe 페이지 정리 완료: ${contentId}`);
}

// 전체 정리 함수
function cleanupAllPages() {
    iframeMap.forEach((iframe, contentId) => {
        iframe.remove();
    });
    iframeMap.clear();
    currentPageId = null;
    
    showWelcomeScreen();
    hideIframeContainer();
    
    console.log('모든 iframe 페이지 정리 완료');
}

// 현재 상태 조회 함수들
function getCurrentPageId() {
    return currentPageId;
}

function getLoadedPageCount() {
    return iframeMap.size;
}

function isPageLoaded(contentId) {
    return iframeMap.has(contentId);
}

// 디버그 정보 함수
function getDebugInfo() {
    return {
        currentPageId,
        loadedPages: Array.from(iframeMap.keys()),
        iframeCount: iframeMap.size
    };
}

// 전역 디버그 객체에 정보 추가
if (typeof window.debugCache === 'undefined') {
    window.debugCache = {};
}

window.debugCache.iframe = {
    getCurrentPageId,
    getLoadedPageCount,
    isPageLoaded,
    getDebugInfo,
    cleanupAllPages,
    iframeMap // 개발용
};

console.log('iframe 기반 페이지 로더 초기화 완료');
