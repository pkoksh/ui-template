/**
 * 공통 페이지 관리 시스템
 * - 이벤트 리스너 자동 추적 및 정리
 * - 메모리 누수 방지
 * - 페이지별 생명주기 관리
 */

// 전역 페이지 관리자
window.PageManager = (function() {
    'use strict';

    // 현재 활성화된 페이지들 추적
    const activePages = new Map();
    
    /**
     * 기본 페이지 클래스
     * 모든 페이지에서 상속받아 사용
     */
    class BasePage {
        constructor(pageId) {
            this.pageId = pageId;
            this.eventListeners = [];
            this.timers = [];
            this.observers = [];
            this.abortControllers = [];
            this.destroyed = false;
            
            console.log(`[PageManager] ${pageId} 페이지 생성됨`);
        }

        /**
         * 이벤트 리스너 추가 (자동 추적)
         */
        addEventListener(element, event, handler, options) {
            if (this.destroyed) return;
            
            // element가 string이면 getElementById로 찾기
            if (typeof element === 'string') {
                element = document.getElementById(element);
            }
            
            if (!element) {
                console.warn(`[PageManager] 요소를 찾을 수 없습니다: ${element}`);
                return;
            }

            element.addEventListener(event, handler, options);
            
            // 추적을 위해 저장
            this.eventListeners.push({
                element,
                event,
                handler,
                options
            });
        }

        /**
         * 쿼리셀렉터를 사용한 이벤트 리스너 추가
         */
        addEventListenerToQuery(selector, event, handler, options) {
            if (this.destroyed) return;
            
            const elements = document.querySelectorAll(selector);
            elements.forEach(element => {
                this.addEventListener(element, event, handler, options);
            });
        }

        /**
         * 타이머 추가 (자동 추적)
         */
        setTimeout(callback, delay) {
            if (this.destroyed) return;
            
            const timerId = setTimeout(() => {
                // 타이머 배열에서 제거
                const index = this.timers.indexOf(timerId);
                if (index > -1) {
                    this.timers.splice(index, 1);
                }
                callback();
            }, delay);
            
            this.timers.push(timerId);
            return timerId;
        }

        /**
         * 인터벌 추가 (자동 추적)
         */
        setInterval(callback, interval) {
            if (this.destroyed) return;
            
            const timerId = setInterval(callback, interval);
            this.timers.push(timerId);
            return timerId;
        }

        /**
         * Observer 추가 (자동 추적)
         */
        addObserver(observer) {
            if (this.destroyed) return;
            
            this.observers.push(observer);
        }

        /**
         * Fetch 요청 (자동 AbortController 관리)
         */
        async fetch(url, options = {}) {
            if (this.destroyed) return;
            
            const controller = new AbortController();
            this.abortControllers.push(controller);
            
            const finalOptions = {
                ...options,
                signal: controller.signal
            };
            
            try {
                const response = await fetch(url, finalOptions);
                
                // 완료된 컨트롤러 제거
                const index = this.abortControllers.indexOf(controller);
                if (index > -1) {
                    this.abortControllers.splice(index, 1);
                }
                
                return response;
            } catch (error) {
                // AbortError가 아닌 경우만 다시 throw
                if (error.name !== 'AbortError') {
                    throw error;
                }
            }
        }

        /**
         * 페이지 정리 (모든 리소스 해제)
         */
        destroy() {
            if (this.destroyed) return;
            
            console.log(`[PageManager] ${this.pageId} 페이지 정리 시작`);
            
            // 이벤트 리스너 제거
            this.eventListeners.forEach(({ element, event, handler, options }) => {
                try {
                    element.removeEventListener(event, handler, options);
                } catch (error) {
                    console.warn(`[PageManager] 이벤트 리스너 제거 실패:`, error);
                }
            });
            this.eventListeners = [];

            // 타이머 정리
            this.timers.forEach(timerId => {
                clearTimeout(timerId);
                clearInterval(timerId);
            });
            this.timers = [];

            // Observer 정리
            this.observers.forEach(observer => {
                try {
                    if (observer.disconnect) observer.disconnect();
                    if (observer.unobserve) observer.unobserve();
                } catch (error) {
                    console.warn(`[PageManager] Observer 정리 실패:`, error);
                }
            });
            this.observers = [];

            // 진행 중인 요청 취소
            this.abortControllers.forEach(controller => {
                try {
                    controller.abort();
                } catch (error) {
                    console.warn(`[PageManager] 요청 취소 실패:`, error);
                }
            });
            this.abortControllers = [];

            this.destroyed = true;
            
            console.log(`[PageManager] ${this.pageId} 페이지 정리 완료`);
        }

        /**
         * 자식 클래스에서 구현해야 하는 초기화 메서드
         */
        init() {
            throw new Error('init() 메서드를 구현해야 합니다.');
        }

        /**
         * 자식 클래스에서 선택적으로 구현하는 정리 메서드
         */
        onDestroy() {
            // 자식 클래스에서 추가 정리 로직 구현
        }
    }

    /**
     * 페이지 등록
     */
    function registerPage(pageId, pageInstance) {
        if (activePages.has(pageId)) {
            console.warn(`[PageManager] 페이지 ${pageId}가 이미 등록되어 있습니다. 기존 페이지를 정리합니다.`);
            unregisterPage(pageId);
        }
        
        // 페이지별 전역 변수 정리 (중복 선언 방지)
        cleanupGlobalVariables(pageId);
        
        activePages.set(pageId, pageInstance);
        console.log(`[PageManager] 페이지 ${pageId} 등록됨`);
    }

    /**
     * 페이지별 전역 변수 정리
     */
    function cleanupGlobalVariables(pageId) {
        console.log(`[PageManager] ${pageId} 페이지의 전역 변수 정리 시작`);
        
        // 페이지별 클래스명 매핑
        const pageClassMap = {
            'dashboard': ['DashboardPage', 'dashboardPage'],
            'menu-management': ['MenuManagementPage', 'menuManagementPage'], 
            'tasks': ['TasksPage', 'tasksPage'],
            'projects': ['ProjectsPage', 'projectsPage'],
            'reports': ['ReportsPage', 'reportsPage'],
            'settings': ['SettingsPage', 'settingsPage']
        };
        
        const classesToClean = pageClassMap[pageId] || [];
        classesToClean.forEach(className => {
            if (window[className]) {
                console.log(`[PageManager] 기존 ${className} 전역 변수 정리`);
                try {
                    // 만약 객체에 destroy 메서드가 있다면 호출
                    if (typeof window[className] === 'object' && typeof window[className].destroy === 'function') {
                        window[className].destroy();
                    }
                } catch (error) {
                    console.warn(`[PageManager] ${className} destroy 실행 실패:`, error);
                }
                delete window[className];
            }
        });
        
        // 추가로 일반적인 패턴 정리
        const commonPageVariables = ['TasksPage', 'ProjectsPage', 'ReportsPage', 'SettingsPage'];
        commonPageVariables.forEach(varName => {
            if (window[varName] && pageId.includes(varName.toLowerCase().replace('page', ''))) {
                console.log(`[PageManager] 기존 ${varName} 전역 변수 정리`);
                delete window[varName];
            }
        });
        
        console.log(`[PageManager] ${pageId} 페이지의 전역 변수 정리 완료`);
    }

    /**
     * 페이지 해제
     */
    function unregisterPage(pageId) {
        const pageInstance = activePages.get(pageId);
        if (pageInstance) {
            // 자식 클래스의 정리 메서드 호출
            if (typeof pageInstance.onDestroy === 'function') {
                try {
                    pageInstance.onDestroy();
                } catch (error) {
                    console.warn(`[PageManager] ${pageId} onDestroy 실행 실패:`, error);
                }
            }
            
            // 기본 정리 메서드 호출
            pageInstance.destroy();
            activePages.delete(pageId);
            
            console.log(`[PageManager] 페이지 ${pageId} 해제됨`);
        }
    }

    /**
     * 모든 페이지 정리
     */
    function clearAllPages() {
        console.log(`[PageManager] 모든 페이지 정리 시작 (${activePages.size}개)`);
        
        for (const [pageId, pageInstance] of activePages) {
            try {
                if (typeof pageInstance.onDestroy === 'function') {
                    pageInstance.onDestroy();
                }
                pageInstance.destroy();
            } catch (error) {
                console.warn(`[PageManager] 페이지 ${pageId} 정리 실패:`, error);
            }
        }
        
        activePages.clear();
        console.log(`[PageManager] 모든 페이지 정리 완료`);
    }

    /**
     * 활성 페이지 목록 조회
     */
    function getActivePages() {
        return Array.from(activePages.keys());
    }

    /**
     * 특정 페이지 인스턴스 조회
     */
    function getPage(pageId) {
        return activePages.get(pageId);
    }

    /**
     * 디버깅용 정보 조회
     */
    function getDebugInfo() {
        const info = {};
        
        for (const [pageId, pageInstance] of activePages) {
            info[pageId] = {
                eventListeners: pageInstance.eventListeners.length,
                timers: pageInstance.timers.length,
                observers: pageInstance.observers.length,
                abortControllers: pageInstance.abortControllers.length,
                destroyed: pageInstance.destroyed
            };
        }
        
        return info;
    }

    // 브라우저 종료 시 정리
    window.addEventListener('beforeunload', clearAllPages);

    // 공개 API
    return {
        BasePage,
        registerPage,
        unregisterPage,
        clearAllPages,
        getActivePages,
        getPage,
        getDebugInfo
    };
})();

// 콘솔에서 디버깅용
window.debugPages = {
    list: () => PageManager.getActivePages(),
    info: () => PageManager.getDebugInfo(),
    clear: () => PageManager.clearAllPages()
};

console.log('[PageManager] 페이지 관리 시스템이 초기화되었습니다.');
