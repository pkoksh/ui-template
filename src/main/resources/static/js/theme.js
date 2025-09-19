// 테마 관리 모듈
class ThemeManager {
    constructor() {
        this.themeToggleBtn = document.getElementById('theme-toggle');
        this.themeSwitchDot = document.getElementById('theme-switch-dot');
        this.currentTheme = 'light';
        
        this.init();
    }

    init() {
        // 저장된 테마 불러오기
        this.loadSavedTheme();
        
        // 시스템 테마 감지 (저장된 테마가 없을 경우)
        if (!localStorage.getItem('theme')) {
            this.detectSystemTheme();
        }
        
        // 테마 적용
        this.applyTheme();
        
        // 이벤트 리스너 추가
        this.addEventListeners();
        
        // 시스템 테마 변경 감지
        this.watchSystemTheme();
    }

    loadSavedTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
            this.currentTheme = savedTheme;
        }
    }

    detectSystemTheme() {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            this.currentTheme = 'dark';
        } else {
            this.currentTheme = 'light';
        }
    }

    applyTheme() {
        const html = document.documentElement;
        
        if (this.currentTheme === 'dark') {
            html.classList.add('dark');
            this.updateSwitch(true);
        } else {
            html.classList.remove('dark');
            this.updateSwitch(false);
        }
    }

    updateSwitch(isDark) {
        if (!this.themeToggleBtn) return;
        
        this.themeToggleBtn.checked = isDark;
    }

    toggleTheme() {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.saveTheme();
        this.applyTheme();
        
        // 테마 변경 애니메이션
        this.animateThemeChange();
    }

    saveTheme() {
        localStorage.setItem('theme', this.currentTheme);
    }

    addEventListeners() {
        if (this.themeToggleBtn) {
            this.themeToggleBtn.addEventListener('change', () => {
                this.toggleTheme();
            });
        }
    }

    watchSystemTheme() {
        if (window.matchMedia) {
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            mediaQuery.addEventListener('change', (e) => {
                // 사용자가 수동으로 테마를 설정하지 않은 경우에만 시스템 테마를 따름
                if (!localStorage.getItem('theme')) {
                    this.currentTheme = e.matches ? 'dark' : 'light';
                    this.applyTheme();
                }
            });
        }
    }

    animateThemeChange() {
        // 부드러운 테마 전환 효과
        document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
        
        setTimeout(() => {
            document.body.style.transition = '';
        }, 300);
    }

    // 외부에서 현재 테마를 확인할 수 있는 메서드
    getCurrentTheme() {
        return this.currentTheme;
    }

    // 외부에서 특정 테마로 설정할 수 있는 메서드
    setTheme(theme) {
        if (theme === 'light' || theme === 'dark') {
            this.currentTheme = theme;
            this.saveTheme();
            this.applyTheme();
        }
    }
}

// DOM이 로드된 후 테마 매니저 초기화
document.addEventListener('DOMContentLoaded', () => {
    window.themeManager = new ThemeManager();
});

// 전역으로 노출 (다른 스크립트에서 사용할 수 있도록)
window.ThemeManager = ThemeManager;
