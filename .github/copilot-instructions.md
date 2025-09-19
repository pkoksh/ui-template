# GitHub Copilot Instructions

- vscode의 terminal은 power shell 기준임

## UI Template
Full-stack 비즈니스 시스템 템플릿 (Spring Boot 백엔드 + TailwindCSS 프론트엔드)
- **Frontend**: Vanilla JS, TailwindCSS, SweetAlert2
- **Backend**: Spring Boot 3.2.0, Spring Security 6, MyBatis, MySQL, gradle

## 파일 구조
- Frontend 소스 경로 : \ui-template\src\main\resources\static
- Backend 소스 경로 :  \ui-template\src\main\java\com\worksystem

## 주요 기능
- 좌측 메뉴 클릭시 동적으로 html 파일을 로드하여 컨텐츠 영역에 표시
- 하단에 탭바를 통해 오픈된 컨텐츠를 닫을 수 있음. 
- 우측 상단에서 최대 열수있는 컨텐츠 수와 현재 오픈된 컨텐츠 수를 표시
- 컨텐츠는 iframe으로 로드됨.
- 페이지가 닫힐때, iframe 내부의 자바스크립트 함수 onPageClose()가 호출됨.