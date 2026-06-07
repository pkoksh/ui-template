# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 목적

**Spring Boot + IBSheet8 기반의 기초 템플릿 프로젝트.** 인사시스템, 그룹웨어 등 어떤 업무 시스템을 만들든 공통으로 필요한 기반 — 인증/세션, 사용자 관리, 그룹(=권한) 관리, 메뉴 관리 — 까지만 이 템플릿이 제공하고, 실제 업무 기능은 템플릿을 받은 개발자가 추가해 나간다.

따라서 작업 우선순위는 "업무 기능 확장"이 아니라 **기초 기능의 완성도, 일관된 패턴, 신규 도메인 추가 절차의 명확성**이다. 업무성 기능(프로젝트/업무 관리 등)은 템플릿 범위 밖이며, 남아있는 관련 코드는 구버전 데모 잔재다(아래 "잔재물" 참고).

기술 스택: Spring Boot 3.2.0 / Java 17 / Gradle 8.5 / MyBatis / MySQL 8 / Thymeleaf / Vanilla JS + TailwindCSS(CDN) + IBSheet8 (프론트 별도 빌드 없음).

## 명령어

```powershell
# 애플리케이션 실행 (http://localhost:8080)
.\gradlew.bat bootRun

# 빌드
.\gradlew.bat build

# 테스트 (단일 테스트: --tests "클래스명")
.\gradlew.bat test
.\gradlew.bat test --tests "SomeTest"

# DB 초기화 (주의: DROP DATABASE 포함 — 기존 데이터 전부 삭제하는 초기화 전용 스크립트)
mysql -u root -p < src/main/resources/schema.sql
```

- DB 접속 정보: `worksystem` / `worksystem123` @ localhost:3306/worksystem (application.properties)
- 기본 계정: `admin/admin123`(ADMIN), `user1/user123`(USER), `manager/manager123`(MANAGER+USER 복수 그룹)
- **반드시 프로젝트 루트에서 실행**: application.properties가 템플릿/정적 리소스를 `file:src/main/resources/...` 상대 경로로 참조함 (개발 시 재시작 없이 실시간 반영). DevTools livereload(35729) 활성화.

### 로컬 개발 환경 (이 PC 전용 — 템플릿 배포 시 무관)

- JDK 경로는 `gradle.properties`의 `org.gradle.java.home`으로 고정되어 있어 **별도 JAVA_HOME 설정 없이 gradlew 실행 가능** (상세: `docs/jdk-setup.md`). JDK는 `D:\dev\java\` 에 버전별로 있음
- MySQL 8.4는 Windows 서비스 미등록. 직접 기동: `"C:\Program Files\MySQL\MySQL Server 8.4\bin\mysqld.exe" --datadir=D:\dev\db\mysql-8.4-data --console` (root 비밀번호 없음)

## 아키텍처

### 백엔드 (src/main/java/com/worksystem/)

표준 레이어드 구조: `controller` → `service` → `mapper`(인터페이스) → `src/main/resources/mybatis/mapper/*.xml`(SQL). DTO는 `dto/`, 엔터티는 `entity/`. 매퍼 4개 도메인(users/groups/menus/notices) 모두 인터페이스 메서드와 XML SQL이 1:1 매칭 완료 상태(auth는 전용 매퍼 없이 UserMapper 재사용).

- REST API: `/api/users`, `/api/groups`, `/api/menus`, `/api/notices`, `/api/auth` (현재 사용자 조회는 `GET /api/auth/user`)
- `MainController`가 Thymeleaf 페이지 라우팅: `/dashboard`, `/user-management`, `/menu-management`, `/group-management`, `/notice` → `templates/pages/*.html`
- 사용자 삭제는 **소프트 삭제**(is_active=false). 그룹 삭제는 하드 DELETE(연결된 group_menu_permissions도 함께 삭제), user_group_mappings도 하드 삭제
- IBSheet 일괄 저장 규약: 프론트가 행마다 `status` 필드(`'I'`/`'U'`/`'D'`)를 담아 POST → 서비스에서 분기 처리 (UserService.saveUsers 등 참고)
- **응답 표준** (`common/ApiResponse<T>`): 모든 REST API는 `{success, message, data}` 반환. 성공은 `ApiResponse.ok(...)`/`okMessage(...)`, 실패는 **예외를 던지면** `common/GlobalExceptionHandler`(@RestControllerAdvice, @RestController만 대상)가 표준 실패 응답으로 변환 — `IllegalArgumentException`→400, `NoSuchElementException`→404, `IllegalStateException`→500(메시지 노출), 기타→500(메시지 비노출). 컨트롤러에 try/catch 쓰지 말 것. HTTP 200 + success:false 반환 금지(프론트가 성공으로 오인). 예외: `/api/auth/user`는 `authenticated` 플래그 기반 비래핑 응답(login.js 평면 파싱과 계약)
- 401/403은 Security 필터 단에서 발생하므로 ControllerAdvice가 못 잡음 — SecurityConfig의 entryPoint/deniedHandler가 같은 포맷의 JSON을 수동 생성(`message` 키는 library-config.js 인터셉터와 계약)

### 인증/권한 (RBAC)

- 세션 기반 Spring Security. Spring Session JDBC로 세션을 DB 저장(쿠키명 `WORKSYSTEM_SESSION`, 30분, 동시세션 1개 — 새 로그인 시 기존 세션 만료), Remember-Me 7일
- 로그인: `login.html`(static) → `POST /api/auth/login`(파라미터 `userId`/`password`, Security가 직접 처리) → `LoginSuccessHandler`(last_login_at 갱신) → `/`. 프론트는 성공 후 `GET /api/auth/user`로 사용자 정보 별도 조회
- RBAC 체인: `users` ↔ `user_group_mappings` ↔ `user_groups` ↔ `group_menu_permissions`(can_read/write/delete/admin) ↔ `menus`. **"그룹 = 접근 권한"**
- 그룹ID가 곧 Spring Security ROLE: `ROLE_<그룹ID 대문자>`로 변환됨(UserService.loadUserByUsername). `hasRole("ADMIN")`은 groupId='ADMIN' 그룹과 연동
- 메뉴는 `GET /api/menus/user-accessible`로 로그인 사용자 권한에 맞게 동적 로드
- CSRF 전면 비활성화 상태
- ⚠️ `POST /api/auth/encode-passwords`는 무인증(permitAll) 개발용 해시 생성 백도어 — 배포 전 제거 대상

### 프론트엔드 (src/main/resources/static/)

SPA 셸 + iframe 페이지 구조:

- `templates/index.html`(Thymeleaf)이 메인 셸: 좌측 메뉴(menu.js), 하단 탭바(tabs.js, 최대 10탭), 컨텐츠 영역. `window.currentUser` 등을 Thymeleaf 인라인 주입
- 메뉴 클릭 시 `assets/js/page-loader.js`가 메뉴의 url을 **iframe으로 로드**하고 탭으로 관리(탭당 iframe 1개, `iframeMap` 캐시)
- **`onPageClose()` 계약**: 탭을 닫을 때 셸(tabs.js `closeTab → requestPageClose`)이 iframe 내부의 `onPageClose()`를 호출한다. 반환값: `false`→닫기 차단, 문자열→셸이 확인창 표시(취소 시 닫기 중단), `true`/`undefined`→닫힘, Promise→resolve 값에 동일 규칙. 미저장 변경 체크는 `grid.hasUnsavedData()`(ibsheet-custom-common.js 플러그인) 사용 — 기존 관리 페이지 4종이 참고 예시. 오류 시 fail-open(닫기 진행)
- 정적 리소스/템플릿 모두 `src/main/` 수정 시 무재시작 즉시 반영

### 프론트엔드 공통 모듈

- `assets/js/common-utils.js`: 전역 헬퍼 — `showToast/showSuccess/showError/showConfirm/showDeleteConfirm`(SweetAlert2), `apiGet/apiPost/apiPut/apiDelete`(Axios), `getFormData`, `formatDate`, `getEnumInfo` 등. 직접 fetch/alert 대신 이것들을 사용할 것. **api 헬퍼는 응답 바디(ApiResponse)를 반환하며, 2xx라도 `success===false`면 reject** — 호출부는 catch만 처리하면 됨. 그리드 적재는 `grid.loadSearchData({data: response.data})` 형태(IBSheet는 `data` 키를 가진 객체를 기대, **숨겨진(비활성 탭) 그리드는 적재 거부**하므로 보이는 상태에서 호출)
- `assets/js/library-config.js`: Axios 전역 인터셉터 — 401(세션만료→로그인 이동, iframe 내부면 부모 reload)/403(권한없음) 공통 처리
- `assets/ibsheet8/sheet/plugins/ibsheet-custom-common.js`: IBSheet8 공통 — `IB_Preset.CSTATUS`(행 상태 아이콘 컬럼), `getSaveJson2(sheet, params)`(Bool→0/1 변환, 트리면 `params.treeId`로 parentId 부착), `saveAllData(grid, apiBase, opt, callback)`(표준 저장 함수). **ibsheet-head fragment를 include한 페이지에서만 사용 가능**
- **공통코드 소비 패턴**: 코드성 선택지(IBSheet Enum 컬럼, select 옵션)는 하드코딩 금지 — 서버 주입(`EnumMaker.getCommonCodeEnum("그룹코드")` → 모델 → `getEnumInfo(enum)`) 또는 동적 로드(`GET /api/common-codes/enum/{groupCode}`) 사용. 마스터-디테일 그리드 페이지는 `code-management.html`이 본보기(onFocus cascade, `IgnoreFocused:2`, `onSearchFinish` 첫행 focus, `onBeforeFocus` 미저장 보호)
- `templates/fragments/common.html`: head fragment 모음 — `common-head`(Tailwind/jQuery/Axios/SweetAlert2/공통JS), `ibsheet-head`(common + IBSheet), `loading-spinner` 등. 사용법: `<th:block th:replace="~{fragments/common :: ibsheet-head}">` (상세는 manual.txt)

### 데이터베이스

`src/main/resources/schema.sql`이 **단일 소스** (DB·계정 생성 + 테이블 + 시드 포함, 멱등이지만 파괴적).

- 테이블: `users`, `user_groups`, `user_group_mappings`, `menus`, `group_menu_permissions`, `notices`, `SPRING_SESSION`(+ATTRIBUTES) / 뷰: `v_user_menus`, `v_user_groups`
- RBAC FK는 자동증가 PK가 아니라 **비즈니스 키**(user_id/group_id/menu_id VARCHAR) 참조, ON DELETE CASCADE. `menus.parent_id`도 menu_id 문자열 self-reference(FK 제약 없음, 2단계 메뉴)
- `notices.is_active` 기본값 FALSE — 신규 공지는 작성 후 활성화하는 설계
- 신규 메뉴 추가 시 `group_menu_permissions` 시드도 함께 넣어야 메뉴가 보임 (부모 메뉴 'system'은 ADMIN만 시드되어 있어 일반 그룹은 시스템관리 자체가 안 보임)

## 신규 관리 페이지(도메인) 추가 표준 패턴

이 템플릿의 핵심 사용법. 기존 Notice 도메인이 가장 완전한 참고 예시.

1. **백엔드**: Controller + Service + Mapper 인터페이스 + `mybatis/mapper/*.xml` + DTO/Entity + schema.sql 테이블. 컨트롤러는 `ApiResponse.ok(...)` 반환 + 실패는 예외 throw (try/catch 금지 — GlobalExceptionHandler가 처리)
2. **페이지**: `templates/pages/xxx.html` 작성 — head에 `~{fragments/common :: ibsheet-head}` replace, 상단 버튼바(저장/조회/추가) + 검색필터 카드 + IBSheet 컨테이너 구조. JS는 DOMContentLoaded에서 `initGrid() → loadXxx() → setupEventListeners()` 순. 그리드 컬럼에 `IB_Preset.CSTATUS`, 저장은 `saveAllData()` 헬퍼. `onPageClose()` 정의 — 미저장 변경 시 경고 문자열 반환(`grid.hasUnsavedData()`로 체크, 모달 입력이 있으면 모달 dirty도 함께 — group-management.html 참고)
3. **라우트**: MainController에 `@GetMapping("/xxx")` → `return "pages/xxx"`
4. **메뉴/권한**: `menus` 테이블에 url='/xxx' 행 + `group_menu_permissions` 권한 행 추가 (schema.sql 시드에도 반영)

## 구현 현황

### 완료 (템플릿 기준선)

| 기능 | 상태 |
|------|------|
| 인증/세션 (로그인, 로그아웃, Remember-Me, DB세션, 401/403 AJAX 처리) | ✅ |
| 사용자 관리 (IBSheet CRUD, 검색, 비밀번호 초기화 `<userId>1234!`, ID 중복확인) | ✅ |
| 그룹(권한) 관리 (CRUD + 메뉴 권한 설정 모달) | ✅ |
| 메뉴 관리 (트리 그리드, 드래그 정렬, 2단계 제한) | ✅ |
| 공지사항 (그리드 + 모달 CRUD — 단, 첨부파일은 파일명 문자열만 저장, 실제 업로드 미구현) | ✅ |
| 탭 닫기 시 미저장 변경 경고 (`onPageClose()` 계약 + 닫기 취소) | ✅ |
| REST 응답 표준 (`ApiResponse` + `GlobalExceptionHandler` 전역 예외 처리) | ✅ |
| 개인 정보 관리 (내 프로필 수정 + 본인 비밀번호 변경 — `/api/users/me`, 폼 기반 페이지 본보기) | ✅ |
| 공통코드 관리 (그룹/상세 2테이블, 마스터-디테일 화면, 소비 API `{code,text}` — 설계: `docs/common-code-design.md`) | ✅ |
| 대시보드 | ⚠️ stub — 통계가 Math.random() 더미, 실데이터 API 없음 |

### 로드맵 (목표 메뉴 구조 대비 미구현 — "앞으로 만들 것")

목표 메뉴 트리(시스템 관리 하위): 메뉴관리✅ / 사용자관리✅ / 그룹관리✅ / 개인 정보 관리✅ / 공통코드 관리✅ / **접속 로그(세션)❌ / 게시판 관리(범용)❌ / 다국어❌**

- **접속 로그(세션) 관리**: 설계 확정(`docs/session-log-design.md`) — login_history 이벤트 행 모델 + SPRING_SESSION 직조회 + FindByIndexNameSessionRepository 강제 만료. 구현 대기
- **게시판 관리**: 범용 게시판(게시판 정의 + 게시글). 현재 notices는 단일 공지 기능
- **다국어(i18n)**: MessageSource/리소스/관리 화면 전부 신규
- index.html 헤더의 프로필/설정 링크가 href=# 죽은 UI — 프로필 링크를 `/my-profile` 탭 열기로 연결 가능
- 기반 개선: 대시보드 실데이터 API, 파일 업로드 공통 모듈(multipart 10MB 설정만 존재), 메뉴 검색 search.js 수리(현재 item.path 의존으로 무동작), `beforeunload` 미저장 경고 연동(탭 닫기는 `onPageClose`로 경고되지만 브라우저 새로고침/창닫기는 무방비), 닫기 확인창에 "저장 후 닫기" 선택지 추가, notice 모달의 작성 중 입력 dirty 체크, HTTP 에러 시 토스트 2회 노출 정리(인터셉터의 400/404/500 일반 토스트 + 호출부 catch의 구체 토스트가 중복 — 단일화 시 delNotice처럼 catch 없는 호출부가 인터셉터에 의존하는 점 주의)

### 템플릿 배포 전 정리(클린업) 대상

대부분 정리 완료(2026-06: 보안 백도어 `encode-passwords`, dead code, 구버전 JS/데모 페이지/스키마 백업 일괄 삭제). 남은 항목:

- DEBUG 로깅→INFO 전환 (개발 단계라 의도적으로 유지 중), DB 자격증명·remember-me key 외부화
- `assets/js/search.js` — 현재 무동작(item.path 의존)이지만 index.html이 로드 중이므로 삭제하지 말 것. 로드맵의 "수리" 대상

## 주의사항

- `bin/`, `build/`는 빌드 산출물 — 수정 금지. 소스는 항상 `src/main/` 하위만 수정
- `switchToTab`이 tabs.js/page-loader.js/script.js 세 곳에 중복 정의됨 — 로드 순서상 script.js 버전이 최종 적용. tabs.js의 것은 구버전 가정의 死코드
- 대시보드는 `templates/pages/dashboard.html`(라우트 `/dashboard`)이 정본. `static/pages/dashboard.html`은 구버전 데모 — 혼동 주의
- 비밀번호 해시는 BCrypt. 신규 사용자 기본 비밀번호가 UserService.createUserFromDTO에 해시 리터럴로 하드코딩되어 있음(변경 시 주의)
- VS Code 터미널은 PowerShell 기준
