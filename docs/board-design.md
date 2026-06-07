# 범용 게시판 관리 설계문서

> 작성일: 2026-06-07 · 상태: **설계 확정(구현 전)** · 로드맵: CLAUDE.md "게시판 관리(범용)"

## 1. 개요

게시판(자유게시판/Q&A/자료실 등)을 **코드 추가 없이 데이터(행) 추가만으로** 신설하고, 게시판별 게시글을 관리하는 범용 기능. 현재 notices는 단일 공지 기능이라 게시판이 늘 때마다 도메인을 복제해야 하는 한계를 해소한다.

### 조사 결과 — 설계에 영향을 준 사실

| 발견 | 영향 |
|------|------|
| 메뉴 `url`이 iframe src로 **무변환 통과** (menu.js → tabs.js → page-loader.js) | `/board/{code}` 동적 URL이 추가 인프라 없이 동작 |
| 탭/iframe 키 = `menu_id` (UNIQUE) | 게시판마다 별도 menu_id를 주면 독립 탭 — **게시판 1개 = 메뉴 1행** 매핑이 구조에 정합 |
| `can_write`를 검사하는 API 코드 **전무** — RBAC는 메뉴 노출만, notices 쓰기 API도 로그인만으로 통과 | 게시판만 과잉 설계하지 않되, **행 소유자 권한**(본인 글만 수정/삭제)은 게시판의 본질이라 신규 도입 |
| ⚠️ notices의 벌크 저장(save-all)은 **서버 핸들러 부재로 원래 깨져 있음** (배열 POST를 단건 핸들러가 수신) | 게시판은 저장 방식을 단일화. notices도 부수 교정(§9) |
| notices의 `is_active` DDL DEFAULT FALSE vs 코드 true 강제 — 불일치 (벌크 경로가 깨져 있어 현재는 모달 경로의 코드 기본값만 실효) | 게시판은 DDL/코드 모두 TRUE로 통일 (게시글은 즉시 노출이 자연) |

## 2. 요구사항

- F1. **게시판 정의 CRUD** (ADMIN): 게시판 코드/이름/설명/사용여부 — IBSheet 그리드 일괄 저장(I/U/D)
- F2. **게시글 CRUD** (인증 사용자): 목록(그리드) + 모달 작성/수정/조회, 조회수 증가
- F3. **행 소유자 권한**: 게시글 수정/삭제는 **작성자 본인 또는 ADMIN만** (서버 강제 — 템플릿 첫 도입 패턴)
- F4. **동적 라우트**: `/board/{boardCode}` 단일 라우트 + `board.html` 단일 템플릿 — 게시판 N개에 코드 0줄 추가
- F5. **메뉴 연동(수동 2스텝)**: 게시판 생성 후 메뉴 관리에서 menus 행(menu_id=`board-{code}`, url=`/board/{code}`) + 권한 등록 — 기존 인프라 재사용 (자동 생성은 §10)
- N1. 프로젝트 표준 준수. 첨부파일/댓글은 1단계 범위 외(§10)

## 3. 핵심 설계 결정 (설계안 2개 비교 후 채택)

| 쟁점 | 단순안 | 완성도안 | **채택** |
|------|--------|---------|---------|
| 라우트 | `/board?boardCode=` 쿼리 | `/board/{boardId}` path | **path** — URL 의미 명확, REST 일관 |
| 게시판↔메뉴 | 수동 등록 | board_id=menu_id 규약 | **수동 + menu_id는 `board-{code}` 접두사** — 'notice' 등 기존 menu_id와 네임스페이스 충돌 방지 |
| notices | 별개 유지 | 흡수+마이그레이션 | **유지** — 검증된 도메인의 회귀 위험 > 중복 비용. 단일 게시판(notices)과 다중 게시판(boards) 두 패턴 제공은 템플릿 교육 가치. 흡수는 §10 |
| 게시글 저장 | 모달 단건 | — | **모달 단건 통일** (본문이 길어 그리드 인라인 부적합. notices의 벌크/모달 혼재 실수 반복 금지) |
| board_type | — | 공통코드 BOARD_TYPE | **제외** — 1단계엔 분기 동작이 없어 죽은 메타. 필요 시 컬럼 추가(§10) |

## 4. DB 설계 (schema.sql — login_history 블록 뒤)

```sql
-- ============================================================
-- 게시판 정의 (자유게시판/Q&A 등을 데이터로 동적 정의)
-- ============================================================
CREATE TABLE boards (
    board_seq    BIGINT AUTO_INCREMENT PRIMARY KEY,
    board_code   VARCHAR(50)  NOT NULL UNIQUE COMMENT '게시판 코드 (비즈니스 키 + URL path, 예: free) — 영문 슬러그',
    board_name   VARCHAR(100) NOT NULL COMMENT '게시판명 (화면 제목)',
    description  VARCHAR(255) NULL COMMENT '설명',
    is_active    BOOLEAN NOT NULL DEFAULT TRUE COMMENT '사용 여부 (FALSE면 게시판 페이지 접근 시 404)',
    sort_order   INT NOT NULL DEFAULT 0 COMMENT '정렬 순서',
    created_at   TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at   TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_bd_board_code (board_code)
) COMMENT='게시판 정의';

-- ============================================================
-- 게시글
-- ============================================================
CREATE TABLE board_posts (
    post_seq     BIGINT AUTO_INCREMENT PRIMARY KEY,
    board_code   VARCHAR(50)  NOT NULL COMMENT '소속 게시판',
    title        VARCHAR(255) NOT NULL COMMENT '제목',
    content      TEXT NOT NULL COMMENT '내용',
    author_id    VARCHAR(20)  NOT NULL COMMENT '작성자 ID (서버 주입 — 행 소유자 권한 기준)',
    author_name  VARCHAR(100) NOT NULL COMMENT '작성자명 (서버 주입)',
    is_pinned    BOOLEAN NOT NULL DEFAULT FALSE COMMENT '상단 고정',
    is_active    BOOLEAN NOT NULL DEFAULT TRUE COMMENT '노출 여부 (게시글은 즉시 노출 — notices와 달리 DDL/코드 모두 TRUE)',
    view_count   INT NOT NULL DEFAULT 0 COMMENT '조회수',
    created_at   TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at   TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_bp_list (board_code, is_pinned DESC, created_at DESC),
    FOREIGN KEY (board_code) REFERENCES boards(board_code) ON DELETE CASCADE
) COMMENT='게시글';
```

- 첨부 컬럼 미도입 — notices의 "파일명 문자열만 저장" 같은 어중간한 상태를 만들지 않음 (§10)
- 시드 (실제 schema.sql 기준):
  - 게시판 정의: `('free', '자유게시판', '누구나 글을 쓸 수 있는 게시판 예시')`
  - 메뉴 2개: `('board-management', 'system', '게시판 관리', '/board-management', 'bx-table', 8)` (ADMIN 전용 — 정의 관리 화면) + `('board-free', 'system', '자유게시판', '/board/free', 'bx-message-dots', 9)` (본보기 게시판)
  - 권한: board-management는 **ADMIN 전용(전권)**, board-free는 **ADMIN/MANAGER/USER 전 그룹 read/write** (일반 사용자용 본보기)
  - ⚠️ 게시글 조회/작성 API는 인증뿐 아니라 **해당 게시판 메뉴(`board-{code}`)의 can_read/can_write 권한도 검사**한다(리뷰 반영). 따라서 게시판 신설 시 메뉴 등록 + 그룹 권한 부여를 해야 일반 사용자가 접근 가능(ADMIN은 항상 접근).

## 5. API 설계 (`BoardController`, `/api/boards`)

| # | 메서드/경로 | 용도 | 인가 | 응답 data |
|---|------------|------|------|----------|
| 1 | `GET /api/boards` | 게시판 정의 목록 (관리 그리드) | ADMIN | `List<BoardDTO>` |
| 2 | `POST /api/boards` | 게시판 정의 일괄 저장 (status I/U/D) | ADMIN | 없음 (okMessage) |
| 3 | `GET /api/boards/{boardCode}/info` | 게시판 단건 (페이지 헤더용) | 인증+읽기권한 | `BoardDTO` (미존재/비활성 404) |
| 4 | `GET /api/boards/{boardCode}/posts` | 게시글 목록 (`?title=&author=` 검색, 고정글 우선 + 최신순, LIMIT 1000) | 인증+읽기권한 | `List<BoardPostDTO>` |
| 5 | `GET /api/boards/{boardCode}/posts/{postSeq}` | 게시글 상세 (조회수 +1) | 인증+읽기권한 | `BoardPostDTO` |
| 6 | `POST /api/boards/{boardCode}/posts` | 게시글 작성 (작성자 서버 주입) | 인증+쓰기권한 | 없음 (okMessage) |
| 7 | `PUT /api/boards/{boardCode}/posts/{postSeq}` | 게시글 수정 — **본인 또는 ADMIN** | 인증+읽기권한+소유자 | 없음 |
| 8 | `DELETE /api/boards/{boardCode}/posts/{postSeq}` | 게시글 삭제 — **본인 또는 ADMIN** | 인증+읽기권한+소유자 | 없음 |

> 인가 2층 구조: SecurityConfig 필터는 `/api/boards/*/posts/**`·`/api/boards/*/info`를 `authenticated()`로만 거르고(존재 인증), **게시판별 메뉴 권한(can_read/can_write)은 BoardService가 검사**한다(menu_id=`board-{code}`, `group_menu_permissions` 조회). 권한 없으면 `AccessDeniedException` → 403. ADMIN(ROLE_ADMIN)은 모든 게시판 접근.

- SecurityConfig: `POST·전체 /api/boards` 관리(#1,#2)는 경로 분리가 모호하므로 **메서드 시그니처가 아닌 경로로 분리** — `/api/boards/{boardCode}/posts/**`(게시글, authenticated)를 먼저 선언하고 그 외 `/api/boards/**`(정의 관리, hasRole ADMIN)를 뒤에 선언. 단 #3(단건 조회, 인증)도 게시글 경로가 아니므로 ADMIN에 걸림 → **#3 경로를 `/api/boards/{boardCode}/info`로 조정**해 인증 규칙에 포함
- 정정된 인가 규칙(선선언 우선):
  ```
  /api/boards/*/posts/** → authenticated()
  /api/boards/*/info     → authenticated()
  /api/boards/**         → hasRole("ADMIN")
  ```
- **행 소유자 검사 (서비스 레이어)**: 수정/삭제 시 기존 글 조회 → `author_id != 현재 사용자 && !ADMIN` → `IllegalArgumentException`(400, "본인이 작성한 글만 수정/삭제할 수 있습니다"). ADMIN 판정은 `Authentication.getAuthorities()`의 `ROLE_ADMIN` 포함 여부
- 게시판 비활성(is_active=false) 또는 미존재 → 게시글 API 전부 404 — `requireActiveBoard` 가드가 **`NoSuchElementException`을 throw** (GlobalExceptionHandler 404 매핑)
- 검증: 게시판 board_code `@Pattern([a-z0-9-]+)` (URL path로 쓰임 — 소문자 슬러그 강제), 게시글 title `@NotBlank @Size(max=255)`, content `@NotBlank`

## 6. 백엔드 구조 (신규 파일)

```
controller/BoardController.java       — @RestController, 8개 엔드포인트
service/BoardService.java            — 게시판 I/U/D 분기(D 먼저 — 공통코드 전례),
                                        requireActiveBoard 가드, 행 소유자 검사(isOwnerOrAdmin)
mapper/BoardMapper.java + XML         — boards CRUD + board_posts CRUD + 조회수 증가
dto/BoardDTO.java                     — id(board_seq, ___id용) + status(I/U/D) + @Pattern board_code
dto/BoardPostDTO.java                 — @JsonFormat 날짜 표준
entity/Board.java, BoardPost.java
controller/MainController.java(수정) — @GetMapping("/board/{boardCode}") → boardCode/boardName 모델 주입 →
                                        "pages/board" (미존재/비활성 게시판은 에러 페이지 대신
                                        보드명 null로 두고 페이지 JS가 404 처리 — @Controller라
                                        GlobalExceptionHandler 미적용이므로 폴백 필수, EnumMaker 전례)
```

## 7. 화면 설계

### 7-1. 게시판 정의 관리 (`templates/pages/board-management.html`, ADMIN)

단일 IBSheet 그리드(공통코드 마스터 그리드와 동형) — board_code(AddEdit:1/ChangeEdit:0, 키 잠금), board_name, description, is_active, sort_order + `IB_Preset.CSTATUS` + `saveAllData`. **안내 문구**: "게시판 생성 후 [메뉴 관리]에서 menu_id=`board-{코드}`, URL=`/board/{코드}` 메뉴와 그룹 권한을 등록하세요" (2스텝 운영 — 메뉴 관리 저장 시 좌측 메뉴 자동 갱신은 기존 기능)

### 7-2. 게시판 페이지 (`templates/pages/board.html`, 전 게시판 공용)

notice.html의 그리드+모달 패턴을 정리해서 차용 (벌크 저장 버튼 없음 — 모달 단건 통일):

```
┌──────────────────────────────────────────────┐
│ {게시판명}                       [글쓰기] [조회]│
│ [검색카드: 제목 | 작성자]                       │
│ ┌──────────────────────────────────────────┐ │
│ │No|제목(클릭→조회 모달)|작성자|조회수|작성일│ │
│ └──────────────────────────────────────────┘ │
└──────────────────────────────────────────────┘
모달: 제목/내용(textarea)/고정여부(ADMIN만 표시)/작성자(readonly)
  - 본인 글 또는 ADMIN → [수정][삭제] 버튼 노출 (서버도 재검사)
  - 타인 글 → 조회 전용
```

| 항목 | 설계 |
|------|------|
| boardCode/boardName | **서버 모델 주입**(`th:inline` — groupEnum 전례). 헤더 정보가 더 필요하면 `GET /api/boards/{code}/info`(#3) 호출 — 프론트·백엔드 경로 합의 |
| 그리드 | 조회 전용(`Def:{Col:{CanEdit:0}}`, CSTATUS 없음 — 접속로그 전례), 제목 클릭 `onAfterClick`(`evt.row.Kind==='Data'` 가드) → 상세 API(#5, `encodeURIComponent(boardCode)`) 호출(조회수 증가) → 모달 |
| 고정글 | is_pinned 행 상단 정렬(서버 ORDER BY `is_pinned DESC, created_at DESC`) + 그리드 '고정' Bool 체크박스 컬럼으로 표시 |
| 버튼 노출 | 본인 정보의 확립된 전례는 **서버 모델 주입**(notice.html의 currentUser Map — userId/name 포함)이지만, ADMIN 분기에 필요한 **authorities는 모델 주입에 없으므로 `GET /api/auth/user`로 확보**. 응답의 authorities는 `[{authority:'ROLE_ADMIN'},...]` **객체 배열** — `a => a.authority === 'ROLE_ADMIN'`으로 파싱 |
| onPageClose | 모달 열림 + 입력 중이면 경고 문자열, 아니면 true (group-management 모달 전례) |

## 8. 구현 계획

| 단계 | 작업 | 검증 |
|------|------|------|
| 1 | schema.sql 테이블/시드 + 실행 DB | DDL/시드 |
| 2 | Entity/DTO/Mapper/XML | compileJava |
| 3 | Service(소유자 검사·보드 가드·D먼저) + Controller + SecurityConfig 인가 | curl: 8 API, 타인 글 수정 400, 비활성 보드 404, 비ADMIN 정의 관리 403 |
| 4 | board-management.html + MainController 라우트 2개 | Playwright: 정의 CRUD |
| 5 | board.html — 목록/작성/조회(조회수)/수정/삭제/소유자 버튼 분기 | Playwright: admin 작성 → user1로 타인 글 수정 불가(버튼 미노출+API 400), 본인 글 수정 |
| 6 | 신규 게시판 동적 생성 E2E: 관리 화면에서 게시판 추가 → 메뉴 등록 → 좌측 메뉴 클릭 → 새 탭에서 글 작성 | Playwright |
| 7 | **notices 벌크 저장 버그 부수 교정**: notice.html의 save-all 버튼/CSTATUS 제거(모달 단건으로 통일) — 별도 커밋 | 공지 CRUD 회귀 |
| 8 | CLAUDE.md 갱신 + 적대적 리뷰 | 리뷰 워크플로 |

## 9. 보안/주의

- 행 소유자 검사는 **서버가 단일 소스** — 프론트 버튼 분기는 UX 보조일 뿐
- 게시글 본문 렌더는 textContent/escape만 사용 (저장형 XSS 방지 — 모달 textarea 표시)
- board_code는 URL path로 사용 — `@Pattern` 소문자 슬러그 강제 + 프론트 encodeURIComponent
- 게시판 컨텐츠 API(조회/작성)는 인증 + 게시판별 메뉴 권한(can_read/can_write)을 검사 — 리뷰 반영으로 "그룹 = 접근 권한" RBAC 모델과 일치시킴(board_code가 URL 슬러그라 추측이 쉬워 인증만으로는 비공개 게시판 보호 불가). 단 게시글 페이지(`/board/{code}`) HTML 라우트 자체는 기존 템플릿 수준(인증만)이며, 컨텐츠는 API 단에서 차단됨

## 10. 범위 외 / 향후 확장

- 첨부파일(멀티파트 업로드 + board_post_files N:M) — notices의 "파일명만 저장" 상태와 함께 일괄 설계 권장
- 댓글(board_comments), 게시판 유형(board_type — 공통코드 BOARD_TYPE), 게시판 생성 시 메뉴 자동 등록
- notices를 boards('notice')로 흡수 — dashboard/메뉴/시드 동반 마이그레이션 필요
- (완료) can_read/can_write 기반 게시판별 권한 강제 — BoardService 진입부 가드로 구현. 향후 다른 도메인으로 확대 시 공통 인터셉터/AOP로 일반화 고려
- 게시글 페이징 (현재 LIMIT 1000 — 무한스크롤 필요 시 ibsheet append:1)
