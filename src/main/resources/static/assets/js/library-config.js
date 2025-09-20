/**
 * 라이브러리 의존성 설정
 * 각 라이브러리별 CSS와 JS 파일 경로를 중앙에서 관리
 */

window.LibraryConfig = {
    // IBSheet 설정
    ibsheet: {
        version: '8.0',
        css: [
            '/assets/ibsheet8/sheet/css/default/main.css'
        ],
        js: [
            '/assets/ibsheet8/sheet/locale/ko.js',
            '/assets/ibsheet8/sheet/ibsheet.js'
        ]
    },
    
    // Chart.js 설정
    chartjs: {
        version: '3.9.1',
        css: [],
        js: [
            'https://cdn.jsdelivr.net/npm/chart.js@3.9.1/dist/chart.min.js'
        ]
    },
    
    // DataTables 설정
    datatables: {
        version: '1.13.7',
        css: [
            'https://cdn.datatables.net/1.13.7/css/dataTables.tailwindcss.min.css'
        ],
        js: [
            'https://cdn.datatables.net/1.13.7/js/jquery.dataTables.min.js',
            'https://cdn.datatables.net/1.13.7/js/dataTables.tailwindcss.min.js'
        ]
    },
    
    // FullCalendar 설정
    fullcalendar: {
        version: '6.1.8',
        css: [
            'https://cdn.jsdelivr.net/npm/fullcalendar@6.1.8/index.global.min.css'
        ],
        js: [
            'https://cdn.jsdelivr.net/npm/fullcalendar@6.1.8/index.global.min.js'
        ]
    },
    
    // CodeMirror 설정
    codemirror: {
        version: '6.0.1',
        css: [
            'https://cdn.jsdelivr.net/npm/codemirror@6.0.1/dist/index.css'
        ],
        js: [
            'https://cdn.jsdelivr.net/npm/codemirror@6.0.1/dist/index.js'
        ]
    },
    
    // Select2 설정
    select2: {
        version: '4.0.13',
        css: [
            'https://cdn.jsdelivr.net/npm/select2@4.0.13/dist/css/select2.min.css'
        ],
        js: [
            'https://cdn.jsdelivr.net/npm/select2@4.0.13/dist/js/select2.min.js'
        ]
    },
    
    // Moment.js 설정
    moment: {
        version: '2.29.4',
        css: [],
        js: [
            'https://cdn.jsdelivr.net/npm/moment@2.29.4/moment.min.js',
            'https://cdn.jsdelivr.net/npm/moment@2.29.4/locale/ko.js'
        ]
    },
    
    // Lodash 설정
    lodash: {
        version: '4.17.21',
        css: [],
        js: [
            'https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js'
        ]
    }
};

/**
 * 라이브러리 동적 로드 함수
 */
window.loadLibrary = function(libraryName) {
    return new Promise((resolve, reject) => {
        const config = window.LibraryConfig[libraryName];
        if (!config) {
            reject(new Error(`라이브러리 설정을 찾을 수 없습니다: ${libraryName}`));
            return;
        }
        
        const loadPromises = [];
        
        // CSS 파일 로드
        config.css.forEach(cssPath => {
            if (!document.querySelector(`link[href="${cssPath}"]`)) {
                const loadPromise = new Promise((cssResolve, cssReject) => {
                    const link = document.createElement('link');
                    link.rel = 'stylesheet';
                    link.href = cssPath;
                    link.onload = () => {
                        console.log(`CSS 로드 완료: ${cssPath}`);
                        cssResolve();
                    };
                    link.onerror = () => {
                        console.error(`CSS 로드 실패: ${cssPath}`);
                        cssReject(new Error(`CSS 로드 실패: ${cssPath}`));
                    };
                    document.head.appendChild(link);
                });
                loadPromises.push(loadPromise);
            }
        });
        
        // JS 파일 로드
        config.js.forEach(jsPath => {
            if (!document.querySelector(`script[src="${jsPath}"]`)) {
                const loadPromise = new Promise((jsResolve, jsReject) => {
                    const script = document.createElement('script');
                    script.src = jsPath;
                    script.onload = () => {
                        console.log(`JS 로드 완료: ${jsPath}`);
                        jsResolve();
                    };
                    script.onerror = () => {
                        console.error(`JS 로드 실패: ${jsPath}`);
                        jsReject(new Error(`JS 로드 실패: ${jsPath}`));
                    };
                    document.head.appendChild(script);
                });
                loadPromises.push(loadPromise);
            }
        });
        
        Promise.all(loadPromises)
            .then(() => {
                console.log(`${libraryName} 라이브러리가 모두 로드되었습니다.`);
                
                // IBSheet의 경우 추가 확인
                if (libraryName === 'ibsheet') {
                    // IBSheet 객체가 실제로 사용 가능한지 확인
                    const checkIBSheet = () => {
                        if (typeof IBSheet !== 'undefined' && IBSheet.create) {
                            console.log('IBSheet 객체 사용 가능 확인 완료');
                            resolve();
                        } else {
                            console.log('IBSheet 객체 확인 중...');
                            setTimeout(checkIBSheet, 50);
                        }
                    };
                    checkIBSheet();
                } else {
                    resolve();
                }
            })
            .catch(reject);
    });
};

/**
 * 여러 라이브러리 동시 로드
 */
window.loadLibraries = function(libraryNames) {
    const loadPromises = libraryNames.map(name => window.loadLibrary(name));
    return Promise.all(loadPromises);
};

console.log('라이브러리 설정이 로드되었습니다.');
