# 업무시스템 기초 템플릿 (ui-template)

**Spring Boot + IBSheet8 기반의 업무 시스템 기초 템플릿**입니다.

인사시스템, 그룹웨어 등 어떤 업무 시스템을 만들든 공통으로 필요한 기반 — 인증/세션, 사용자 관리, 그룹(권한) 관리, 메뉴 관리, 공통코드 — 을 미리 갖추고 있습니다. 이 템플릿을 받아 **실제 업무 도메인만 추가**하면 됩니다.

## 기술 스택

| 구분 | 기술 |
|------|------|
| Backend | Spring Boot 3.2 (Java 17) · Spring Security 6 (세션 기반) · MyBatis · MySQL 8 |
| Frontend | Thymeleaf · Vanilla JS · TailwindCSS(CDN) · IBSheet8(그리드) · SweetAlert2 · Axios |
| 빌드 | Gradle 8.x (별도 프론트 빌드 없음) |

## 빠른 시작

### 1. 사전 요구사항
- JDK 17 이상, MySQL 8.0 이상

### 2. DB 초기화

```powershell
# 주의: DROP DATABASE 포함 — 기존 worksystem DB가 있다면 전부 삭제됩니다
mysql -u root -p < src/main/resources/schema.sql
```

DB 계정(`worksystem`/`worksystem123`)과 테이블, 시드 데이터가 한 번에 생성됩니다.

### 3. JDK 경로 설정

`gradle.properties`의 `org.gradle.java.home`을 본인 환경의 JDK 17 경로로 수정하세요. 시스템 `JAVA_HOME`이 이미 JDK 17+라면 해당 줄을 삭제해도 됩니다. (상세: [docs/jdk-setup.md](docs/jdk-setup.md))

### 4. 실행

```powershell
# 반드시 프로젝트 루트에서 실행 (정적 리소스를 상대 경로로 참조 — 개발 시 무재시작 실시간 반영)
.\gradlew.bat bootRun
```

`http://localhost:8080` 접속 후 로그인:

| 계정 | 비밀번호 | 권한 |
|------|---------|------|
| admin | admin123 | 관리자 (전체 메뉴) |
| manager | manager123 | 매니저 |
| user1 | user123 | 일반 사용자 |

## 제공 기능

- **인증/세션**: 폼 로그인, DB 세션 저장(Spring Session JDBC), Remember-Me, 동시 세션 1개, 세션 만료 시 로그인 자동 이동
- **사용자 관리**: IBSheet 그리드 CRUD, 검색, 비밀번호 초기화
- **그룹(권한) 관리**: 그룹 CRUD + 메뉴별 권한(조회/편집/삭제/관리) 설정 — "그룹 = 접근 권한"
- **메뉴 관리**: 트리 그리드, 드래그 정렬, 권한 기반 동적 좌측 메뉴 (저장 시 즉시 반영)
- **공통코드 관리**: 코드 그룹/상세 2계층, 마스터-디테일 화면, 드롭다운·그리드 Enum 연동 API
- **개인 정보 관리**: 내 프로필 수정, 비밀번호 변경
- **공지사항**, **대시보드**(실시간 통계), **메뉴 검색**(Ctrl+K)

## 프로젝트 구조

```
src/main/java/com/worksystem/
├── common/      ApiResponse(응답 표준), GlobalExceptionHandler(전역 예외)
├── config/      SecurityConfig, LoginSuccessHandler 등
├── controller/  REST API + Thymeleaf 페이지 라우팅(MainController)
├── service/     비즈니스 로직
├── mapper/      MyBatis 매퍼 인터페이스
├── dto/ entity/
└── util/        EnumMaker(코드성 선택지 공급)

src/main/resources/
├── schema.sql               DB 단일 소스 (테이블 + 시드)
├── mybatis/mapper/*.xml     SQL
├── templates/               Thymeleaf — index.html(셸), pages/(관리 화면), fragments/
└── static/assets/           js(공통 모듈), css, ibsheet8
```

화면 구조는 **SPA 셸 + iframe 탭**: 좌측 메뉴 클릭 시 페이지가 iframe 탭으로 열리고, 하단 탭바로 전환/닫기를 합니다.

## 새 업무 도메인 추가하기 (표준 4단계)

기존 공통코드 도메인(`CommonCode*`)이 가장 완전한 본보기입니다.

1. **백엔드**: Controller + Service + Mapper 인터페이스 + `mybatis/mapper/*.xml` + DTO/Entity + schema.sql 테이블
   - 컨트롤러는 `ApiResponse.ok(...)` 반환, 실패는 **예외 throw** (try/catch 금지 — `GlobalExceptionHandler`가 `{success:false, message}` 표준 응답으로 변환)
2. **페이지**: `templates/pages/xxx.html` — `~{fragments/common :: ibsheet-head}` fragment, IBSheet 그리드, `saveAllData()` 일괄 저장(행 상태 I/U/D), `onPageClose()`로 미저장 경고
3. **라우트**: `MainController`에 `@GetMapping("/xxx")` 추가
4. **메뉴/권한**: `menus` + `group_menu_permissions` 시드 추가 (메뉴 관리 화면에서도 가능)

### 핵심 규약 요약

- **REST 응답**: 모든 API가 `{success, message, data}` — 프론트 `apiGet/apiPost/apiPut/apiDelete` 헬퍼가 `success:false`면 자동 reject
- **코드성 선택지**(상태값·구분값 등)는 하드코딩 금지 — 공통코드 관리에 등록 후 `getEnumInfo()` / `GET /api/common-codes/enum/{groupCode}` 사용
- **공통 모듈**: `common-utils.js`(토스트·confirm·API 헬퍼), `ibsheet-custom-common.js`(그리드 저장·dirty 체크)

## 문서

- [CLAUDE.md](CLAUDE.md) — 아키텍처 상세, 구현 현황/로드맵 (Claude Code 사용 시 자동 로드)
- [docs/common-code-design.md](docs/common-code-design.md) — 공통코드 설계 (도메인 설계문서 양식 본보기)
- [docs/jdk-setup.md](docs/jdk-setup.md) — JDK 설정 가이드
- `manual.txt` — Thymeleaf fragment 사용법

## 배포 전 확인사항

- `application.properties`의 DB 자격증명·로깅 레벨(DEBUG) 조정, HTTPS 환경이면 `session.cookie.secure=true`
- CSRF가 비활성화되어 있음 — 운영 정책에 따라 재검토
- 자세한 잔여 항목은 CLAUDE.md "배포 전 정리" 참고
