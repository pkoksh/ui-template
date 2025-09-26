// Axios 기본 설정 및 인터셉터 구성
(function setupAxiosInterceptors() {
    // 기본 설정
    axios.defaults.timeout = 30000;
    axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    
    // 요청 인터셉터
    axios.interceptors.request.use(
        function(config) {
            // 모든 요청에 Accept 헤더 추가
            if (!config.headers.Accept) {
                config.headers.Accept = 'application/json';
            }
            return config;
        },
        function(error) {
            return Promise.reject(error);
        }
    );
    
    // 응답 인터셉터 - 상태 코드 기반 처리
    axios.interceptors.response.use(
        function(response) {
            // 성공 응답 처리
            return response;
        },
        function(error) {
            console.error('API 호출 오류:', error);
            
            if (error.response) {
                const status = error.response.status;
                
                switch (status) {
                    case 401:
                        // 세션 만료 - 서버에서 JSON 응답 전송됨
                        handleUnauthorized(error.response.data);
                        break;
                    case 403:
                        // 접근 권한 없음
                        handleForbidden(error.response.data);
                        break;
                    case 404:
                        showError('요청한 리소스를 찾을 수 없습니다.');
                        break;
                    case 500:
                        showError('서버 내부 오류가 발생했습니다. 관리자에게 문의하세요.');
                        break;
                    default:
                        showError(`오류가 발생했습니다. (${status})`);
                }
            } else if (error.code === 'ECONNABORTED') {
                showError('요청 시간이 초과되었습니다. 다시 시도해주세요.');
            } else {
                showError('네트워크 오류가 발생했습니다. 인터넷 연결을 확인해주세요.');
            }
            
            return Promise.reject(error);
        }
    );
})();

/**
 * 401 Unauthorized 처리 (세션 만료)
 */
function handleUnauthorized(errorData) {
    console.warn('세션이 만료되었습니다.');
    
    const message = errorData?.message || '세션이 만료되었습니다. 다시 로그인해주세요.';
    
    // SweetAlert2로 알림 표시
    if (typeof Swal !== 'undefined') {
        Swal.fire({
            icon: 'warning',
            title: '세션 만료',
            text: message,
            confirmButtonText: '로그인 페이지로 이동',
            allowOutsideClick: false,
            allowEscapeKey: false
        }).then(() => {
            redirectToLogin();
        });
    } else {
        // SweetAlert2가 없는 경우 기본 alert 사용
        alert(message);
        redirectToLogin();
    }
}

/**
 * 403 Forbidden 처리 (접근 권한 없음)
 */
function handleForbidden(errorData) {
    const message = errorData?.message || '접근 권한이 없습니다.';
    showError(message);
}

/**
 * 로그인 페이지로 리다이렉트
 */
function redirectToLogin() {
    // iframe 내부인지 확인
    if (window.parent !== window) {
        // iframe 내부에서는 부모 창 전체를 로그인 페이지로 리다이렉트
        window.parent.location.reload();
    } else {
        // 일반 페이지에서는 현재 창을 로그인 페이지로 리다이렉트
        top.location.href = '/login.html';
    }
}


console.log('라이브러리 설정이 로드되었습니다.');
