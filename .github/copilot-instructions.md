# GitHub Copilot Instructions
vscode의 terminal은 power shell 기준임

# UI Template
Full-stack 비즈니스 시스템 템플릿 (Spring Boot 백엔드 + TailwindCSS 프론트엔드)
- **Frontend**: Vanilla JS, TailwindCSS, SweetAlert2
- **Backend**: Spring Boot 3.2.0, Spring Security 6, MyBatis, MySQL,gradle


## 주요 기능
- 좌측 메뉴 클릭시 동적으로 html 파일을 로드하여 컨텐츠 영역에 표시
- 하단에 탭바를 통해 오픈된 컨텐츠를 닫을 수 있음. 
- 우측 상단에서 오픈된 컨텐츠의 개수 확인 및 닫힌 컨텐츠에 대한 정리 기능 제공
- 메뉴를 통해 오픈되는 페이지는 다음과 같은 구조로 script 부분을 정의
```javascript
var pageName = {
    init: function() { ... },
    destroy: function() { ... }
};
pageName.init(); // 페이지 로드 시 호출 
```
- 페이지가 닫힐때, pageName을 window에서 제거
- frontend 로직은 /backend/src/main/resources/static/에 정의 되어 있음.