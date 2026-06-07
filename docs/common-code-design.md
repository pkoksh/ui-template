# 공통코드 관리 설계문서

> 작성일: 2026-06-07 · 상태: **설계 확정(구현 전)** · 로드맵: CLAUDE.md "공통코드 관리"

## 1. 개요

시스템 곳곳의 고정 선택지(구분값·상태값·등급 등)를 DB에서 일원 관리하고, 화면의 드롭다운·IBSheet Enum 컬럼이 이를 동적으로 사용하게 하는 기능. 템플릿을 받는 개발자가 업무 도메인을 추가할 때 코드성 데이터를 매번 하드코딩하지 않고 이 기능 위에서 시작하게 하는 것이 목적이다.

### 현재의 문제 (코드 조사 결과)

| 위치 | 현재 형태 | 문제 |
|------|----------|------|
| group-management.html:41-49 | 권한 레벨 select에 10/8/6/4/1/0 하드코딩 | `GroupDTO.getLevelDisplayName()`의 switch, 그리드 level 컬럼(`Type:'Int'` 자유입력)까지 **3곳에 분산** — 한쪽만 고치면 불일치 |
| user-management.html:55-60 | 권한 필터 select에 ADMIN/MANAGER/USER 하드코딩 | 같은 화면의 그리드 Enum 컬럼은 동적(groupEnum)인데 필터만 정적 → 그룹 추가 시 불일치 |
| login.js getGroupDisplayName() | JS단 코드→표시명 하드코딩 맵 | 'MANAGER'를 '팀장'으로 표기 — schema.sql('매니저')과 **표기 불일치** 실재 |
| 향후 업무 도메인 | (예) 사용자 상태(재직/휴직), 게시판 분류 등 | 추가 때마다 새 하드코딩 발생 |

**대체 비대상(명시적 제외)**: IBSheet 행 상태 'I/U/D'(프레임워크 규약), RBAC `can_read/write/delete/admin`(비트 권한), `is_active`류 Boolean(IBSheet Bool 타입 유지). 사용자 **권한 필터는 공통코드가 아니라 그룹 마스터(EnumMaker.getGroupEnum) 연동**이 정석 — 그룹 자체가 이미 DB 테이블이기 때문.

## 2. 요구사항

### 기능 요구사항
- F1. 코드 그룹(예: `GROUP_LEVEL` 권한 레벨) CRUD — IBSheet 그리드 일괄 저장(I/U/D)
- F2. 그룹별 상세 코드(예: `10`=슈퍼관리자) CRUD — 마스터-디테일 화면
- F3. 소비 API: 활성 코드만 `{code:[], text:[]}` 형태로 제공 → 기존 `getEnumInfo()`가 무수정으로 IBSheet Enum 변환
- F4. 시스템 필수 코드 보호: `is_system=true` 그룹은 삭제·그룹코드 변경 금지(하위 코드 삭제도 차단)
- F5. 정렬 순서(sort_order)·사용 여부(is_active) 관리, 비활성 코드는 소비 API에서 제외
- F6. 메뉴/권한 시드 포함 — ADMIN만 관리 화면 접근(기본), 소비 API는 인증 사용자 전체

### 비기능 요구사항
- N1. 프로젝트 표준 완전 준수: `ApiResponse` + 예외 throw(컨트롤러 try/catch 금지), 레이어드 구조, schema.sql 단일 소스, `onPageClose()` 미저장 경고
- N2. 기존 공통 모듈(`getEnumInfo`, `saveAllData`, `IB_Preset.CSTATUS`) **수정 없이** 재사용
- N3. 캐시는 1단계 범위 외(쿼리가 가볍고 호출 빈도 낮음) — §10 향후 확장 참고

## 3. 설계 결정 (대안 비교)

3개 설계안을 비교 검토한 결과:

| 항목 | A. 단일 테이블(self-group) | B. 2테이블 + attribute1~3 | **C. 채택안 (B의 절충)** |
|------|--------------------------|--------------------------|------------------------|
| 구조 | `group_code IS NULL`이면 그룹 | 그룹/상세 분리 + 예비 3슬롯 | **그룹/상세 분리 + ref_value 1개** |
| 무결성 | ❌ MySQL UNIQUE가 NULL 중복 허용 → 그룹 코드 유일성을 앱에서 검증 | ✅ FK + UNIQUE | ✅ FK + UNIQUE |
| 기존 관례 정합 | menus.parent_id와 유사 | group_menu_permissions와 동형 | 동일 |
| 확장성 | 그룹 메타 추가 어색 | attribute 3개는 거버넌스 부담 | ref_value 1개로 절충 |

**핵심 결정 사항**
1. **2테이블 분리** — 무결성(DB 레벨 UNIQUE/FK)과 기존 마스터-디테일 관례(group_menu_permissions) 우선
2. **명명: `group_code`** — RBAC의 `user_groups.group_id`와 용어 충돌을 피함 (공통코드의 "그룹"은 권한 그룹이 아님)
3. **소비 계약: `{code:[], text:[]}`** — `EnumMaker.getGroupEnum()`과 동일 형식 → `common-utils.js getEnumInfo()`(`{Enum:'|텍스트|..', EnumKeys:'|코드|..'}` 변환)를 그대로 사용
4. **화면: 좌우 분할 마스터-디테일** (모달 아님) — 권한 설정 모달과 달리 공통코드는 그룹↔코드를 상시 오가는 편집이므로
5. 예비 필드는 `ref_value` 1개, 보호 플래그는 그룹 레벨 `is_system` 1개 (코드 레벨 플래그·attribute1~3·다국어 코드명·계층 코드는 과설계로 배제)

## 4. DB 설계

`schema.sql`의 notices 테이블 블록 뒤에 추가. 기존 관례(BIGINT 대리키 + 비즈니스 키 UNIQUE, VARCHAR 비즈니스 키 FK + ON DELETE CASCADE, is_active/sort_order)를 따르고, 컬럼 COMMENT는 notices 테이블 스타일을 채택한다.

```sql
-- ============================================================
-- 공통코드 그룹 (예: GROUP_LEVEL=권한 레벨, DEPT_TYPE=부서 구분)
-- ============================================================
CREATE TABLE common_code_groups (
    group_seq    BIGINT AUTO_INCREMENT PRIMARY KEY,
    group_code   VARCHAR(50)  NOT NULL UNIQUE COMMENT '코드 그룹 코드 (비즈니스 키, 예: GROUP_LEVEL)',
    group_name   VARCHAR(100) NOT NULL COMMENT '코드 그룹명 (예: 권한 레벨)',
    description  VARCHAR(255) NULL COMMENT '설명',
    is_system    BOOLEAN NOT NULL DEFAULT FALSE COMMENT '시스템 필수 그룹 (TRUE면 그룹 삭제/group_code 변경/하위 코드 삭제 금지)',
    is_active    BOOLEAN NOT NULL DEFAULT TRUE COMMENT '사용 여부',
    sort_order   INT NOT NULL DEFAULT 0 COMMENT '정렬 순서',
    created_at   TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at   TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_ccg_group_code (group_code)
) COMMENT='공통코드 그룹';

-- ============================================================
-- 공통코드 상세 (그룹에 속한 개별 코드)
-- ============================================================
CREATE TABLE common_codes (
    code_seq     BIGINT AUTO_INCREMENT PRIMARY KEY,
    group_code   VARCHAR(50)  NOT NULL COMMENT '소속 코드 그룹',
    code         VARCHAR(50)  NOT NULL COMMENT '코드값 (예: 10)',
    code_name    VARCHAR(100) NOT NULL COMMENT '코드명 (화면 표시, 예: 슈퍼관리자)',
    description  VARCHAR(255) NULL COMMENT '설명',
    ref_value    VARCHAR(255) NULL COMMENT '예비 참조값 (색상/약어/외부키 등 — 그룹별 용도는 그룹 description에 명시)',
    is_active    BOOLEAN NOT NULL DEFAULT TRUE COMMENT '사용 여부 (FALSE면 소비 API에서 제외)',
    sort_order   INT NOT NULL DEFAULT 0 COMMENT '그룹 내 정렬 순서',
    created_at   TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at   TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    UNIQUE KEY uk_cc_group_code (group_code, code),
    INDEX idx_cc_lookup (group_code, is_active, sort_order),
    FOREIGN KEY (group_code) REFERENCES common_code_groups(group_code) ON DELETE CASCADE
) COMMENT='공통코드 상세';
```

> FK가 `ON DELETE CASCADE`지만, is_system 그룹은 서비스 레이어에서 삭제 자체를 차단하므로 시스템 코드가 연쇄 삭제될 일은 없다. 일반 그룹 삭제 시 하위 코드 연쇄 삭제는 의도된 동작(관리 화면에서 확인창 표시).
>
> ⚠️ 업무 테이블이 코드값을 **값으로 참조**(FK 아님)하는 경우 그룹/코드 삭제 시 끊긴 참조가 생길 수 있다. 코드는 삭제보다 **is_active=false 비활성화**를 권장 — 관리 화면 안내 문구에 포함할 것.

### 시드 데이터 (본보기 — 실제 이중 관리 제거 사례)

```sql
INSERT INTO common_code_groups (group_code, group_name, description, is_system, sort_order) VALUES
('GROUP_LEVEL', '권한 레벨', '그룹 관리의 권한 레벨 선택지. ref_value 미사용', TRUE, 1),
('DEPT_TYPE',   '부서 구분', '사용자 부서 선택지 예시. ref_value 미사용', FALSE, 2);

INSERT INTO common_codes (group_code, code, code_name, sort_order) VALUES
('GROUP_LEVEL', '10', '슈퍼관리자', 1),
('GROUP_LEVEL', '8',  '관리자',     2),
('GROUP_LEVEL', '6',  '매니저',     3),
('GROUP_LEVEL', '4',  '팀장',       4),
('GROUP_LEVEL', '1',  '일반사용자', 5),
('GROUP_LEVEL', '0',  '게스트',     6),
('DEPT_TYPE',   'SYS',   '시스템관리부', 1),
('DEPT_TYPE',   'PLAN',  '기획부',       2),
('DEPT_TYPE',   'SALES', '영업부',       3);

-- 메뉴 + 권한 (관리 화면은 ADMIN 전용)
INSERT INTO menus (menu_id, parent_id, title, url, icon, sort_order) VALUES
('code-management', 'system', '공통코드 관리', '/code-management', 'bx-code-block', 6);
INSERT INTO group_menu_permissions (group_id, menu_id, can_read, can_write, can_delete, can_admin) VALUES
('ADMIN', 'code-management', TRUE, TRUE, TRUE, TRUE);
```

## 5. API 설계

컨트롤러 1개(`CommonCodeController`, `/api/common-codes`) — 그룹+상세는 한 도메인. 모든 응답 `ApiResponse<T>`, 실패는 예외 throw.

| # | 메서드/경로 | 용도 | 요청 | 응답 data |
|---|------------|------|------|----------|
| 1 | `GET /api/common-codes/groups` | 그룹 목록 (마스터 그리드) | `?groupName=&isActive=` (선택) | `List<CommonCodeGroupDTO>` |
| 2 | `POST /api/common-codes/groups` | 그룹 일괄 저장 | `List<CommonCodeGroupDTO>` (status I/U/D) | 없음 (okMessage) |
| 3 | `GET /api/common-codes/groups/{groupCode}/codes` | 그룹의 상세 코드 목록 (디테일 그리드) | path | `List<CommonCodeDTO>` |
| 4 | `POST /api/common-codes/codes` | 상세 코드 일괄 저장 | `List<CommonCodeDTO>` (행에 groupCode 포함, status I/U/D) | 없음 (okMessage) |
| 5 | `GET /api/common-codes/enum/{groupCode}` | **소비용** — 활성 코드만 | path | `{code: ["10",..], text: ["슈퍼관리자",..]}` |

- #5가 이 기능의 핵심 가치: `EnumMaker.getGroupEnum()`과 동일 계약이라 프론트는 `getEnumInfo(response.data)` 한 줄로 IBSheet Enum 컬럼 완성
- #5 응답 계약: **미존재 groupCode → 404**(오타 조기 발견), 그룹은 있으나 활성 코드 0건 → `{code:[], text:[]}` 빈 배열(정상 — `getEnumInfo`가 안전 처리)
- 예외 규칙: 중복 그룹코드/코드 → `IllegalArgumentException`(400, "이미 존재하는 코드입니다: X"), 미존재 그룹 → `NoSuchElementException`(404), is_system 위반 → `IllegalArgumentException`(400, "시스템 필수 그룹은 삭제할 수 없습니다")
- 저장 서비스는 예외를 삼키지 않고 전파 (`@Transactional` 전체 롤백 — UserService.saveUsers 본보기)
- **인가(SecurityConfig 변경 필요)**: 관리 API(#1~#4)는 `hasRole("ADMIN")`, 소비 API(#5)는 `authenticated()` — `requestMatchers("/api/common-codes/enum/**").authenticated()`를 `requestMatchers("/api/common-codes/**").hasRole("ADMIN")`**보다 앞에** 선언(Security는 선선언 우선). 401/403은 Security 필터 단 처리라 GlobalExceptionHandler와 무관

## 6. 백엔드 구조 (신규 파일)

```
controller/CommonCodeController.java      — @RestController 필수 (GlobalExceptionHandler가 @RestController만 대상)
service/CommonCodeService.java            — saveGroups/saveCodes (I/U/D 분기), is_system 검증, enum 변환
mapper/CommonCodeMapper.java              — 인터페이스
resources/mybatis/mapper/CommonCodeMapper.xml
dto/CommonCodeGroupDTO.java, CommonCodeDTO.java   — status 필드(IBSheet 규약) + **seq 대리키 포함**(아래 변경 감지용)
entity/CommonCodeGroup.java, CommonCode.java       — 시간 필드는 LocalDateTime (기존 엔터티 관례)
```

**is_system 검증 규칙 (CommonCodeService)**
- 그룹 저장 시: status='D'이고 is_system=true → throw
- 그룹 status='U' 처리는 **group_seq(대리키)로 기존 행을 조회**해 비교 — DTO 식별 키가 group_code뿐이면 코드 변경 전후를 구별할 수 없으므로, 그리드가 `___id`(getSaveJson2가 서버 id로 치환) 경유로 seq를 보내는 구조를 활용. 기존 행의 group_code와 요청 group_code가 다르고 is_system=true → throw (프론트 `ChangeEdit:0` 잠금의 서버측 방어선)
- 코드 저장 시: 소속 그룹이 is_system이고 status='D' → throw (코드 추가/수정은 허용 — 선택지 확장은 안전)

**EnumMaker 확장 (서버 주입 경로)**
```java
// util/EnumMaker.java에 추가 — getGroupEnum()과 동일 패턴
public Map<String, Object> getCommonCodeEnum(String groupCode) {
    // CommonCodeService에서 활성 코드 조회 → Map.of("code", [...], "text", [...])
}
```
화면이 코드성 Enum 컬럼을 쓸 때 MainController에서 `model.addAttribute("levelEnum", enumMaker.getCommonCodeEnum("GROUP_LEVEL"))`로 주입(user-management의 groupEnum과 동일 경로). 동적 로드가 필요하면 #5 API를 호출.

## 7. 화면 설계 (`templates/pages/code-management.html`)

### 레이아웃 — 좌우 분할 마스터-디테일

```
┌──────────────────────────────────────────────────────────────┐
│ 공통코드 관리                    [그룹저장] [코드저장] [조회]   │
├─────────────────────────┬────────────────────────────────────┤
│ 코드 그룹 (마스터)        │ 상세 코드 (디테일)                  │
│ [추가] [삭제]            │ [추가] [삭제]   ← 선택된 그룹 표시   │
│ ┌─────────────────────┐ │ ┌────────────────────────────────┐ │
│ │St│그룹코드│그룹명│Sys│ │ │St│코드│코드명│참조값│사용│정렬│  │ │
│ │  │GROUP_…│권한…│ ✓ │ │ │  │10 │슈퍼… │      │ ✓ │ 1 │  │ │
│ └─────────────────────┘ │ └────────────────────────────────┘ │
└─────────────────────────┴────────────────────────────────────┘
```

### IBSheet 이벤트 설계 (ibsheet8 스킬 검증 패턴)

| 항목 | 설계 | 근거 |
|------|------|------|
| 마스터→디테일 cascade | 마스터 `onFocus`(`evt.row===evt.orow` 가드)에서 groupCode 추출 → API #3 재조회 | onClick은 키보드 이동 미반응 |
| 디테일 그리드 설정 | `Cfg.IgnoreFocused: 2` (1은 금지) | 마스터 방향키 이동 중 포커스 강탈 방지 |
| 첫 그룹 자동 표시 | 마스터 `onSearchFinish`에서 `sheet.focus(getDataRows()[0])` 명시 호출 | `loadSearchData`는 onFocus를 발화하지 않음 |
| 미저장 디테일 보호 | 마스터 `onBeforeFocus`에서 `codeGrid.hasUnsavedData()` → confirm. **bypass 플래그 패턴** 사용 (`focus(target, ..., ignoreEvent=1)` 금지 — onFocus까지 막혀 디테일이 빈 채로 남음) | 스킬 advanced-patterns 검증 사례 |
| 그리드 편집 설정 | **`Cfg.CanEdit: 1` 필수** — 미설정/0이면 컬럼 `AddEdit` 등이 전부 무력화됨(전역 잠금 최우선) | 스킬 advanced-patterns 함정 |
| 키 컬럼 잠금 | group_code/code 컬럼 `Type:'Text'` + `AddEdit:1, ChangeEdit:0` (신규만 입력, 기존 수정 잠금) | 비즈니스 키 변경 방지. Enum+Required 조합 함정 회피를 위해 키 컬럼은 Text 유지 |
| 컬럼 폭 | 기존 Vanilla 페이지 관례(`Def.Col.RelWidth:1`) 유지 | 스킬의 "RelWidth 금지"는 React+전역 주입 환경 전용 — 본 템플릿엔 해당 없음 |
| 상태/저장 | 두 그리드 모두 `IB_Preset.CSTATUS` + `saveAllData(grid, api, {}, reload)` 각각 | 기존 공통 함수 그대로 |
| onPageClose | 두 그리드 `hasUnsavedData()`를 **조건 없이 모두** 검사 → 경고 문자열 반환 | group-management는 모달 열림 시에만 조건부 검사하는 구조라 본보기로 부적합 — 좌우 상시 표시에선 무조건 검사가 맞음 |
| 구현 언어 주의 | 스킬 문서의 bypass 플래그/useRef 예시는 React 기준 — 본 페이지는 Vanilla JS이므로 전역 `let` 변수로 변환 | group-management.html의 전역 변수 패턴 |
| 라우트/메뉴 | MainController `@GetMapping("/code-management")` + 메뉴/권한 시드(§4) | 표준 4단계 패턴 |

## 8. 활용(소비) 설계 — 기존 코드 대체 계획

구현 완료 후 별도 커밋으로 진행하는 적용 사례 (공통코드의 실효성 검증):

| 대상 | 현재 | 변경 |
|------|------|------|
| group-management.html 권한 레벨 select | 10/8/6/4/1/0 하드코딩 | `GROUP_LEVEL` 코드로 동적 렌더링 (서버 주입 levelEnum) |
| group-management.html 그리드 level 컬럼 | `Type:'Int'` 직접 입력 | `Type:'Enum'` + `getEnumInfo(levelEnum)` |
| GroupDTO.getLevelDisplayName() switch | 코드:명 이중 관리 | 제거 (표시는 Enum 컬럼이 담당) |
| login.js getGroupDisplayName() | JS 하드코딩 맵 ('팀장' 표기 불일치) | 제거 — `/api/auth/user` 응답의 `groupNames` 필드 사용 (AuthRestController가 이미 반환 중) |
| user-management.html 권한 필터 select | ADMIN/MANAGER/USER 하드코딩 | **공통코드 아님** — 서버 주입 groupEnum(그룹 마스터)으로 동적 렌더링 |

**적용 시 주의**
- `GroupDTO.level`은 `Integer`(@Min/@Max)인데 IBSheet `EnumKeys`는 문자열("10") — Jackson이 `"10"`→Integer 바인딩을 처리하므로 동작하나, 저장 페이로드 검증 시 확인할 것
- 기존 표시 포맷 `"슈퍼관리자 (10)"`(getLevelDisplayName)이 Enum 전환 후 `"슈퍼관리자"`로 바뀜 — 의도된 UI 변화임을 인지하고 진행

## 9. 구현 계획

| 단계 | 작업 | 검증 |
|------|------|------|
| 1 | schema.sql 테이블/시드 + 실행 DB 반영 | DDL 적용, 시드 조회 |
| 2 | Entity/DTO/Mapper/XML | compileJava |
| 3 | Service (I/U/D 분기 + is_system 검증) + Controller + SecurityConfig 인가 규칙(§5) | curl: 5개 API + 중복코드 400 + is_system 삭제 400 + 비ADMIN의 관리 API 403 |
| 4 | EnumMaker.getCommonCodeEnum | — |
| 5 | code-management.html + MainController 라우트 | Playwright: 그리드 로드, cascade, 첫행 자동선택 |
| 6 | 마스터-디테일 엣지: 미저장 디테일 + 마스터 이동, onPageClose | Playwright: confirm/취소 시나리오 |
| 7 | §8 적용 사례 (별도 커밋) | Playwright: 그룹 관리 level Enum 동작 |
| 8 | CLAUDE.md 갱신 (구현 현황/로드맵) + 적대적 리뷰 | 리뷰 워크플로 |

## 10. 범위 외 / 향후 확장

- **캐시**: read-heavy해지면 `@Cacheable` + 저장 시 evict (스프링 캐시 추상화). 현 단계는 쿼리가 가볍고 화면 진입 시 1회 호출이라 불필요
- **다국어 코드명**: 로드맵 "다국어(i18n)" 진행 시 `common_code_names(group_code, code, locale, name)` 분리 또는 MessageSource 연동
- **계층(트리) 코드**: 필요 시 `parent_code` 추가 — menus.parent_id 패턴 재사용
- **코드 사용처 추적**: 어떤 화면이 어떤 그룹을 쓰는지 메타 관리 (템플릿 범위 밖)
- IBSheet 행 상태 'I/U/D' 문자열의 백엔드 상수화(`RowStatus` enum) — 공통코드와 별개의 리팩토링 후보
