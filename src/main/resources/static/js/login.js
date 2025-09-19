// login.js - 로그인 페이지 기능

// 전역 변수
let isLoggingIn = false;

// DOM 요소들
const loginForm = document.getElementById('loginForm');
const userIdInput = document.getElementById('userId');
const passwordInput = document.getElementById('password');
const togglePasswordButton = document.getElementById('togglePassword');
const loginButton = document.getElementById('loginButton');
const loginButtonText = document.getElementById('loginButtonText');
const loginButtonSpinner = document.getElementById('loginButtonSpinner');
const rememberMeCheckbox = document.getElementById('rememberMe');
const forgotPasswordLink = document.getElementById('forgotPassword');

// 에러 표시 요소들
const userIdError = document.getElementById('userIdError');
const passwordError = document.getElementById('passwordError');

// 테스트용 계정 정보
const DEMO_ACCOUNTS = {
    'admin': {
        password: 'admin123',
        name: '관리자',
        role: 'admin',
        department: '시스템관리부'
    },
    'user1': {
        password: 'user123',
        name: '김직원',
        role: 'user',
        department: '영업부'
    },
    'manager': {
        password: 'manager123',
        name: '이팀장',
        role: 'manager',
        department: '기획부'
    }
};

// 역할 표시명 반환
function getRoleDisplayName(role) {
    const roleNames = {
        'admin': '관리자',
        'manager': '팀장',
        'user': '사용자'
    };
    return roleNames[role] || role;
}

// 초기화
document.addEventListener('DOMContentLoaded', function() {
    initializeLoginPage();
});

function initializeLoginPage() {

    // 이벤트 리스너 등록
    loginForm.addEventListener('submit', handleLogin);
    togglePasswordButton.addEventListener('click', togglePasswordVisibility);
    forgotPasswordLink.addEventListener('click', handleForgotPassword);
    
    // 입력 필드 이벤트
    userIdInput.addEventListener('input', clearError);
    passwordInput.addEventListener('input', clearError);
    userIdInput.addEventListener('keypress', handleEnterKey);
    passwordInput.addEventListener('keypress', handleEnterKey);
    
    // 로그인 상태 유지가 설정된 경우에만 사용자 ID 자동 입력
    const rememberLogin = localStorage.getItem('rememberLogin') === 'true';
    const rememberedUserId = localStorage.getItem('rememberedUserId');
    
    if (rememberLogin && rememberedUserId) {
        userIdInput.value = rememberedUserId;
        rememberMeCheckbox.checked = true;
        passwordInput.focus();
    } else {
        // 포커스 설정
        userIdInput.focus();
    }
    
    console.log('로그인 페이지가 초기화되었습니다.');
}

// 로그인 처리
async function handleLogin(event) {
    event.preventDefault();
    
    if (isLoggingIn) return;
    
    const userId = userIdInput.value.trim();
    const password = passwordInput.value.trim();
    
    // 유효성 검사
    if (!validateLoginForm(userId, password)) {
        return;
    }
    
    try {
        isLoggingIn = true;
        showLoadingState();
        
        // 인증 시뮬레이션 (실제 환경에서는 서버 API 호출)
        const authResult = await authenticateUser(userId, password);
        
        if (authResult.success) {
            // 로그인 성공
            await handleLoginSuccess(authResult.user);
        } else {
            // 로그인 실패
            handleLoginError(authResult.error);
        }
        
    } catch (error) {
        console.error('로그인 처리 중 오류:', error);
        handleLoginError('시스템 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
    } finally {
        isLoggingIn = false;
        hideLoadingState();
    }
}

// 폼 유효성 검사
function validateLoginForm(userId, password) {
    let isValid = true;
    
    // 사용자 ID 검사
    if (!userId) {
        showError('userIdError', '사용자 ID를 입력해주세요.');
        isValid = false;
    } else if (userId.length < 3) {
        showError('userIdError', '사용자 ID는 3자 이상이어야 합니다.');
        isValid = false;
    }
    
    // 비밀번호 검사
    if (!password) {
        showError('passwordError', '비밀번호를 입력해주세요.');
        isValid = false;
    } else if (password.length < 6) {
        showError('passwordError', '비밀번호는 6자 이상이어야 합니다.');
        isValid = false;
    }
    
    return isValid;
}

// 사용자 인증 (서버 API 호출)
async function authenticateUser(userId, password) {
    try {
        const formData = new FormData();
        formData.append('userId', userId);
        formData.append('password', password);
        
        // Remember-Me 체크박스 값 추가
        if (rememberMeCheckbox.checked) {
            formData.append('remember-me', 'on');
        }
        
        const response = await fetch('/api/auth/login', {
            method: 'POST',
            body: formData,
            credentials: 'same-origin' // 세션 쿠키 포함
        });
        
        if (response.ok) {
            // 로그인 성공 시 사용자 정보 가져오기
            console.log('로그인 성공, 사용자 정보 요청 중...');
            
            const userInfoResponse = await fetch('/api/auth/user', {
                method: 'GET',
                credentials: 'same-origin'
            });
            
            console.log('사용자 정보 응답 상태:', userInfoResponse.status);
            
            if (userInfoResponse.ok) {
                try {
                    const userInfo = await userInfoResponse.json();
                    console.log('사용자 정보:', userInfo);
                    return { 
                        success: true, 
                        user: userInfo 
                    };
                } catch (jsonError) {
                    console.error('사용자 정보 JSON 파싱 에러:', jsonError);
                    const responseText = await userInfoResponse.text();
                    console.error('응답 내용:', responseText);
                    
                    // JSON 파싱 실패 시 기본 정보 사용
                    return { 
                        success: true, 
                        user: { 
                            userId: userId, 
                            name: userId,
                            role: 'user',
                            department: ''
                        } 
                    };
                }
            } else {
                console.error('사용자 정보 요청 실패, 상태:', userInfoResponse.status);
                const errorText = await userInfoResponse.text();
                console.error('에러 응답:', errorText);
                
                // 사용자 정보를 가져올 수 없는 경우 기본 정보 사용
                return { 
                    success: true, 
                    user: { 
                        userId: userId, 
                        name: userId,
                        role: 'user',
                        department: ''
                    } 
                };
            }
        } else {
            // 로그인 실패
            return {
                success: false,
                error: '아이디 또는 비밀번호가 올바르지 않습니다.'
            };
        }
    } catch (error) {
        console.error('인증 요청 중 오류:', error);
        return {
            success: false,
            error: '서버 연결에 실패했습니다. 잠시 후 다시 시도해주세요.'
        };
    }
}

// 로그인 성공 처리
async function handleLoginSuccess(user) {
    // 사용자 정보 저장
    localStorage.setItem('currentUser', JSON.stringify(user));
    localStorage.setItem('isLoggedIn', 'true');
    
    // 로그인 상태 유지 설정
    if (rememberMeCheckbox.checked) {
        localStorage.setItem('rememberLogin', 'true');
        localStorage.setItem('rememberedUserId', user.userId);
    }
    
    // 성공 알림 - 중후하고 전문적인 스타일
    await Swal.fire({
        title: '시스템 접속 완료',
        html: `
            <div class="text-center py-4">
                <div class="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full mb-4">
                    <i class='bx bx-check text-3xl text-blue-600'></i>
                </div>
                <div class="space-y-2">
                    <p class="text-lg font-medium text-gray-800">${user.name}님</p>
                    <p class="text-sm text-gray-600">${user.department || ''} ${getRoleDisplayName(user.role)}</p>
                    <p class="text-xs text-gray-500 mt-3">업무시스템에 안전하게 로그인되었습니다</p>
                </div>
            </div>
        `,
        icon: null,
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        heightAuto: false,
        width: '400px',
        background: '#ffffff',
        customClass: {
            popup: 'rounded-xl shadow-2xl',
            timerProgressBar: 'bg-blue-600'
        },
        didOpen: () => {
            // 타이머 진행률 표시줄 스타일 조정
            const timerBar = Swal.getTimerProgressBar();
            if (timerBar) {
                timerBar.style.height = '3px';
                timerBar.style.background = 'linear-gradient(90deg, #3B82F6, #1D4ED8)';
            }
        }
    });
    
    // 메인 페이지로 리다이렉트
    window.location.href = '/';
}

// 로그인 실패 처리
function handleLoginError(errorMessage) {
    Swal.fire({
        icon: 'error',
        title: '로그인 실패',
        text: errorMessage,
        confirmButtonText: '확인',
        confirmButtonColor: '#3B82F6',
        heightAuto: false
    });
    
    // 비밀번호 필드 초기화 및 포커스
    passwordInput.value = '';
    passwordInput.focus();
}

// 비밀번호 찾기
function handleForgotPassword(event) {
    event.preventDefault();
    
    Swal.fire({
        title: '비밀번호 찾기',
        html: `
            <div class="text-left space-y-4">
                <p class="text-gray-600 mb-4">테스트 계정 정보:</p>
                <div class="space-y-2 text-sm">
                    <div class="bg-gray-50 p-3 rounded">
                        <strong>관리자:</strong> admin / admin123
                    </div>
                    <div class="bg-gray-50 p-3 rounded">
                        <strong>사용자:</strong> user1 / user123
                    </div>
                    <div class="bg-gray-50 p-3 rounded">
                        <strong>팀장:</strong> manager / manager123
                    </div>
                </div>
                <p class="text-xs text-gray-500 mt-4">
                    * 실제 운영 환경에서는 이메일이나 SMS를 통한 비밀번호 재설정 기능이 제공됩니다.
                </p>
            </div>
        `,
        confirmButtonText: '확인',
        confirmButtonColor: '#3B82F6',
        width: '500px',
        heightAuto: false
    });
}

// 비밀번호 표시/숨김 토글
function togglePasswordVisibility() {
    const passwordField = passwordInput;
    const toggleIcon = togglePasswordButton.querySelector('i');
    
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        toggleIcon.className = 'bx bx-show text-xl';
    } else {
        passwordField.type = 'password';
        toggleIcon.className = 'bx bx-hide text-xl';
    }
}

// 엔터 키 처리
function handleEnterKey(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        if (event.target === userIdInput && !passwordInput.value) {
            passwordInput.focus();
        } else {
            loginForm.dispatchEvent(new Event('submit'));
        }
    }
}

// 에러 표시
function showError(errorElementId, message) {
    const errorElement = document.getElementById(errorElementId);
    const messageSpan = errorElement.querySelector('span');
    
    messageSpan.textContent = message;
    errorElement.classList.remove('hidden');
    
    // 해당 입력 필드에 에러 스타일 적용
    const inputId = errorElementId.replace('Error', '');
    const inputElement = document.getElementById(inputId);
    inputElement.classList.add('border-red-500', 'focus:ring-red-500');
}

// 에러 지우기
function clearError() {
    // 모든 에러 메시지 숨김
    [userIdError, passwordError].forEach(errorElement => {
        errorElement.classList.add('hidden');
    });
    
    // 에러 스타일 제거
    [userIdInput, passwordInput].forEach(input => {
        input.classList.remove('border-red-500', 'focus:ring-red-500');
    });
}

// 로딩 상태 표시
function showLoadingState() {
    loginButtonText.classList.add('hidden');
    loginButtonSpinner.classList.remove('hidden');
    loginButton.disabled = true;
    loginButton.classList.add('opacity-75', 'cursor-not-allowed');
}

// 로딩 상태 숨김
function hideLoadingState() {
    loginButtonText.classList.remove('hidden');
    loginButtonSpinner.classList.add('hidden');
    loginButton.disabled = false;
    loginButton.classList.remove('opacity-75', 'cursor-not-allowed');
}

// 로그아웃 (다른 페이지에서 사용할 수 있도록 전역 함수로 정의)
window.logout = async function() {
    try {
        // 서버에 로그아웃 요청
        const response = await fetch('/api/auth/logout', {
            method: 'POST',
            credentials: 'same-origin'
        });
        
        console.log('서버 로그아웃 응답:', response.status);
    } catch (error) {
        console.error('서버 로그아웃 요청 실패:', error);
    }
    
    // 로컬 스토리지 정리
    localStorage.removeItem('currentUser');
    localStorage.removeItem('isLoggedIn');
    
    // 로그인 상태 유지가 설정되지 않은 경우 기억된 정보도 제거
    if (!localStorage.getItem('rememberLogin')) {
        localStorage.removeItem('rememberedUserId');
    }
    
    // 로그인 페이지로 이동
    window.location.href = 'login.html';
};

// 현재 사용자 정보 가져오기 (다른 페이지에서 사용)
window.getCurrentUser = function() {
    const userStr = localStorage.getItem('currentUser');
    return userStr ? JSON.parse(userStr) : null;
};

// 로그인 상태 확인 (다른 페이지에서 사용)
window.isUserLoggedIn = function() {
    return localStorage.getItem('isLoggedIn') === 'true';
};

console.log('로그인 스크립트가 로드되었습니다.');
