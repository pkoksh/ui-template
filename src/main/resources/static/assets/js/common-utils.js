/**
 * 공통 유틸리티 함수들
 * 모든 페이지에서 사용할 수 있는 공통 기능들을 정의
 */

// ================================
// 토스트 알림 시스템
// ================================

/**
 * 토스트 컨테이너 생성
 */
function createToastContainer() {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        container.className = 'fixed bottom-4 right-4 z-50 space-y-2 max-w-sm';
        container.style.cssText = `
            position: fixed;
            bottom: 1rem;
            right: 1rem;
            z-index: 9999;
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            max-width: 20rem;
            pointer-events: none;
        `;
        document.body.appendChild(container);
    }
    return container;
}

/**
 * 토스트 알림 표시
 */
function showToast(message, type = 'info', duration = 3000, title = null) {
    const container = createToastContainer();
    
    // 토스트 엘리먼트 생성
    const toast = document.createElement('div');
    toast.style.cssText = `
        background: white;
        border-radius: 0.5rem;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        padding: 1rem;
        border-left: 4px solid;
        transform: translateX(100%);
        transition: all 0.3s ease-in-out;
        pointer-events: auto;
        min-width: 300px;
        max-width: 400px;
    `;
    
    // 타입별 색상 및 아이콘 설정
    const typeConfig = {
        success: {
            borderColor: '#10B981',
            bgColor: '#F0FDF4',
            textColor: '#059669',
            icon: '✓'
        },
        error: {
            borderColor: '#EF4444',
            bgColor: '#FEF2F2',
            textColor: '#DC2626',
            icon: '✕'
        },
        warning: {
            borderColor: '#F59E0B',
            bgColor: '#FFFBEB',
            textColor: '#D97706',
            icon: '⚠'
        },
        info: {
            borderColor: '#3B82F6',
            bgColor: '#EFF6FF',
            textColor: '#2563EB',
            icon: 'ℹ'
        }
    };
    
    const config = typeConfig[type] || typeConfig.info;
    
    toast.style.borderLeftColor = config.borderColor;
    toast.style.backgroundColor = config.bgColor;
    
    // 다크모드 지원
    if (document.documentElement.classList.contains('dark')) {
        toast.style.backgroundColor = type === 'success' ? '#064E3B' : 
                                    type === 'error' ? '#7F1D1D' : 
                                    type === 'warning' ? '#78350F' : '#1E3A8A';
        toast.style.color = '#F9FAFB';
    }
    
    // 토스트 내용 구성
    toast.innerHTML = `
        <div style="display: flex; align-items: flex-start; gap: 0.75rem;">
            <div style="
                display: flex;
                align-items: center;
                justify-content: center;
                width: 1.5rem;
                height: 1.5rem;
                border-radius: 50%;
                background-color: ${config.borderColor};
                color: white;
                font-size: 0.875rem;
                font-weight: bold;
                flex-shrink: 0;
            ">
                ${config.icon}
            </div>
            <div style="flex: 1; min-width: 0;">
                ${title ? `<div style="font-weight: 600; color: ${config.textColor}; margin-bottom: 0.25rem;">${title}</div>` : ''}
                <div style="color: ${document.documentElement.classList.contains('dark') ? '#F9FAFB' : '#374151'}; font-size: 0.875rem; line-height: 1.4;">
                    ${message}
                </div>
            </div>
            <button onclick="this.parentElement.parentElement.remove()" style="
                color: #9CA3AF;
                hover:color: #6B7280;
                font-size: 1.125rem;
                line-height: 1;
                background: none;
                border: none;
                cursor: pointer;
                padding: 0;
                margin-left: 0.5rem;
                flex-shrink: 0;
            ">×</button>
        </div>
    `;
    
    // 컨테이너에 추가
    container.appendChild(toast);
    
    // 애니메이션으로 표시
    requestAnimationFrame(() => {
        toast.style.transform = 'translateX(0)';
    });
    
    // 자동 제거
    setTimeout(() => {
        if (toast.parentNode) {
            toast.style.transform = 'translateX(100%)';
            toast.style.opacity = '0';
            setTimeout(() => {
                if (toast.parentNode) {
                    toast.remove();
                }
            }, 300);
        }
    }, duration);
    
    return toast;
}

// ================================
// 알림 관련 함수들 (토스트 버전)
// ================================

/**
 * 성공 메시지 표시
 */
window.showSuccess = function(message, title = null) {
    return showToast(message, 'success', 3000, title);
};

/**
 * 오류 메시지 표시
 */
window.showError = function(message, title = null) {
    return showToast(message, 'error', 5000, title);
};

/**
 * 정보 메시지 표시
 */
window.showInfo = function(message, title = null) {
    return showToast(message, 'info', 3000, title);
};

/**
 * 경고 메시지 표시
 */
window.showWarning = function(message, title = null) {
    return showToast(message, 'warning', 4000, title);
};

/**
 * 확인 대화상자 표시 (SweetAlert2 유지)
 */
window.showConfirm = function(message, title = '확인', confirmText = '확인', cancelText = '취소') {
    return Swal.fire({
        title: title,
        text: message,
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3B82F6',
        cancelButtonColor: '#6B7280',
        confirmButtonText: confirmText,
        cancelButtonText: cancelText,
        customClass: {
            popup: 'swal-popup-small'
        }
    });
};

/**
 * 삭제 확인 대화상자 (SweetAlert2 유지)
 */
window.showDeleteConfirm = function(message = '정말로 삭제하시겠습니까?', title = '삭제 확인') {
    return Swal.fire({
        title: title,
        text: message,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#EF4444',
        cancelButtonColor: '#6B7280',
        confirmButtonText: '삭제',
        cancelButtonText: '취소',
        customClass: {
            popup: 'swal-popup-small'
        }
    });
};

// ================================
// 로딩 관련 함수들
// ================================

/**
 * 로딩 스피너 표시
 */
window.showLoading = function(message = '처리 중...') {
    const loadingEl = document.getElementById('loading');
    if (loadingEl) {
        const messageEl = loadingEl.querySelector('.loading-message');
        if (messageEl) {
            messageEl.textContent = message;
        }
        loadingEl.classList.remove('hidden');
    }
};

/**
 * 로딩 스피너 숨기기
 */
window.hideLoading = function() {
    const loadingEl = document.getElementById('loading');
    if (loadingEl) {
        loadingEl.classList.add('hidden');
    }
};

/**
 * 버튼 로딩 상태 설정
 */
window.setButtonLoading = function(button, loading = true, originalText = null) {
    if (loading) {
        if (!button.dataset.originalText) {
            button.dataset.originalText = button.innerHTML;
        }
        button.disabled = true;
        button.innerHTML = `
            <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            처리 중...
        `;
    } else {
        button.disabled = false;
        button.innerHTML = originalText || button.dataset.originalText || '확인';
        delete button.dataset.originalText;
    }
};

// ================================
// API 관련 유틸리티
// ================================

/**
 * API 요청 래퍼
 */
window.apiRequest = async function(url, options = {}) {
    try {
        showLoading();
        
        const defaultOptions = {
            headers: {
                'Content-Type': 'application/json',
                ...options.headers
            }
        };
        
        const response = await axios({ url, ...defaultOptions, ...options });
        return response.data;
    } catch (error) {
        console.error('API 요청 실패:', error);
        
        if (error.response) {
            const status = error.response.status;
            const message = error.response.data?.message || '서버 오류가 발생했습니다.';
            
            if (status === 401) {
                showError('인증이 필요합니다. 다시 로그인해주세요.');
                // 로그인 페이지로 리다이렉트 로직 추가 가능
            } else if (status === 403) {
                showError('권한이 없습니다.');
            } else if (status === 404) {
                showError('요청한 리소스를 찾을 수 없습니다.');
            } else {
                showError(message);
            }
        } else {
            showError('네트워크 오류가 발생했습니다.');
        }
        
        throw error;
    } finally {
        hideLoading();
    }
};

// ================================
// 유효성 검사 유틸리티
// ================================

/**
 * 이메일 유효성 검사
 */
window.validateEmail = function(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
};

/**
 * 필수 필드 검사
 */
window.validateRequired = function(value, fieldName) {
    if (!value || value.trim() === '') {
        showError(`${fieldName}을(를) 입력해주세요.`);
        return false;
    }
    return true;
};

/**
 * 숫자 유효성 검사
 */
window.validateNumber = function(value, fieldName, min = null, max = null) {
    const num = Number(value);
    if (isNaN(num)) {
        showError(`${fieldName}은(는) 숫자여야 합니다.`);
        return false;
    }
    
    if (min !== null && num < min) {
        showError(`${fieldName}은(는) ${min} 이상이어야 합니다.`);
        return false;
    }
    
    if (max !== null && num > max) {
        showError(`${fieldName}은(는) ${max} 이하여야 합니다.`);
        return false;
    }
    
    return true;
};

// ================================
// 날짜/시간 유틸리티
// ================================

/**
 * 날짜 포맷팅 (YYYY-MM-DD)
 */
window.formatDate = function(date) {
    if (!date) return '';
    const d = new Date(date);
    return d.toISOString().split('T')[0];
};

/**
 * 날짜시간 포맷팅 (YYYY-MM-DD HH:MM:SS)
 */
window.formatDateTime = function(date) {
    if (!date) return '';
    const d = new Date(date);
    return d.toLocaleString('ko-KR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
};

/**
 * 상대 시간 표시 (예: 2시간 전)
 */
window.formatRelativeTime = function(date) {
    if (!date) return '';
    
    const now = new Date();
    const target = new Date(date);
    const diffMs = now - target;
    const diffMinutes = Math.floor(diffMs / (1000 * 60));
    const diffHours = Math.floor(diffMinutes / 60);
    const diffDays = Math.floor(diffHours / 24);
    
    if (diffMinutes < 1) return '방금 전';
    if (diffMinutes < 60) return `${diffMinutes}분 전`;
    if (diffHours < 24) return `${diffHours}시간 전`;
    if (diffDays < 7) return `${diffDays}일 전`;
    
    return formatDate(date);
};

// ================================
// 페이지 라이프사이클
// ================================

/**
 * 페이지 종료시 호출되는 함수 (iframe용)
 */
window.onPageClose = function() {
    console.log('페이지가 종료됩니다.');
    // 필요시 정리 작업 수행
};

/**
 * 페이지 초기화
 */
window.initializePage = function() {
    console.log('페이지가 초기화됩니다.');
    
    // 공통 이벤트 리스너 설정
    setupCommonEventListeners();
    
    // 다크모드 초기화
    initializeTheme();
    
    // SweetAlert2 스타일 커스터마이징
    addSweetAlertStyles();
};

/**
 * SweetAlert2 스타일 추가
 */
function addSweetAlertStyles() {
    if (!document.getElementById('swal-custom-styles')) {
        const style = document.createElement('style');
        style.id = 'swal-custom-styles';
        style.textContent = `
            .swal-popup-small {
                font-size: 0.9rem !important;
                width: 28rem !important;
                max-width: 90vw !important;
            }
            .swal2-popup {
                border-radius: 0.5rem !important;
            }
        `;
        document.head.appendChild(style);
    }
}

/**
 * 공통 이벤트 리스너 설정
 */
function setupCommonEventListeners() {
    // ESC 키로 모달 닫기
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const modals = document.querySelectorAll('.modal:not(.hidden)');
            modals.forEach(modal => {
                if (modal.classList.contains('modal')) {
                    modal.classList.add('hidden');
                }
            });
        }
    });
    
    // 전역 에러 핸들러
    window.addEventListener('error', function(e) {
        console.error('전역 에러:', e.error);
        showError('예상치 못한 오류가 발생했습니다.');
    });
    
    // 온라인/오프라인 상태 감지
    window.addEventListener('online', function() {
        showSuccess('인터넷 연결이 복구되었습니다.', '연결 복구');
    });
    
    window.addEventListener('offline', function() {
        showWarning('인터넷 연결이 끊어졌습니다.', '연결 끊어짐');
    });
}

/**
 * 테마 초기화
 */
function initializeTheme() {
    // 저장된 테마 설정 불러오기
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else {
        // 시스템 설정에 따라 자동 설정
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.documentElement.classList.toggle('dark', prefersDark);
    }
}

// ================================
// 브라우저 유틸리티
// ================================

/**
 * 클립보드에 텍스트 복사
 */
window.copyToClipboard = async function(text) {
    try {
        await navigator.clipboard.writeText(text);
        showSuccess('클립보드에 복사되었습니다.');
        return true;
    } catch (err) {
        console.error('클립보드 복사 실패:', err);
        showError('클립보드 복사에 실패했습니다.');
        return false;
    }
};

/**
 * 파일 다운로드
 */
window.downloadFile = function(data, filename, mimeType = 'application/octet-stream') {
    const blob = new Blob([data], { type: mimeType });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
};

/**
 * URL 파라미터 가져오기
 */
window.getUrlParameter = function(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
};

// ================================
// 초기화
// ================================

// DOM 로드 완료시 자동 초기화
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializePage);
} else {
    initializePage();
}

console.log('공통 유틸리티가 로드되었습니다.');