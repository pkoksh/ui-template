# 접속 로그(세션) 관리 설계문서

> 작성일: 2026-06-07 · 상태: **설계 확정(구현 전)** · 로드맵: CLAUDE.md "접속 로그(세션) 관리"

## 1. 개요

누가 언제 어디서 로그인했는지(이력)와 지금 누가 접속해 있는지(활성 세션)를 관리자가 확인하고, 필요 시 특정 세션을 강제 만료시키는 기능. 템플릿의 기초 보안 가시성을 제공한다.

### 현재 상태 (조사 결과)

| 항목 | 현재 | 비고 |
|------|------|------|
| 로그인 기록 | `users.last_login_at` 1개 컬럼 갱신뿐 (LoginSuccessHandler) | 이력 다건 불가, 실패/IP/UA 미기록 |
| 로그인 실패 | `failureUrl("/login.html?error=true")` 리다이렉트만 | FailureHandler 없음 → 실패 이력 기록 불가 |
| 활성 세션 | `SPRING_SESSION` 테이블(JDBC)에 존재하나 조회 화면 없음 | `SessionRegistryImpl`은 **메모리 기반이라 서버 재시작 시 유실** — 조회 소스로 부적합 |
| IP/UA 추출 | 코드베이스에 전무 | 신규 유틸 필요 |

## 2. 요구사항

- F1. **로그인 이력 기록**: 성공/실패/로그아웃을 행 단위로 기록 (시각, userId, IP, User-Agent, 실패 사유)
- F2. **이력 조회 화면**: 기간(시작/종료일) + 사용자ID 필터, 최신순, 서버 LIMIT 1000건
- F3. **활성 세션 조회**: 사용자별 현재 세션 목록 (생성/마지막 접근/만료 예정 시각)
- F4. **세션 강제 만료**: 선택 세션 무효화 — 대상 사용자의 다음 요청은 세션 부재로 인증이 풀려 AJAX는 401 JSON(인터셉터→로그인 이동), 일반 네비게이션은 로그인 리다이렉트를 탐. **두 경로 모두 E2E 검증 필요**(§8-6). 메모리 SessionRegistry에는 반영되지 않으나 세션 자체가 없으므로 인증 차단은 보장됨
- F5. ADMIN 전용 (메뉴/권한 시드 + API 인가)
- N1. 프로젝트 표준 준수 (ApiResponse, 레이어드, schema.sql 단일 소스). **예외**: 이력 기록 실패는 로그인 자체를 막지 않도록 핸들러 안에서 catch (의도적 fail-open — 표준 '예외 전파'와 다름을 명시)

## 3. 핵심 설계 결정

1. **이벤트 행 단위 모델** — `login_history`에 LOGIN / LOGIN_FAIL / LOGOUT을 각각 INSERT. 로그인 행에 logout_at을 UPDATE하는 모델은 기각: 세션ID 매칭 복잡도 + 타임아웃/강제만료는 어차피 포착 불가라 불완전한 데이터가 됨. **명시적 로그아웃만 LOGOUT으로 기록**되고 타임아웃은 기록되지 않음을 화면에 안내
2. **활성 세션 = SPRING_SESSION 직조회** — SessionRegistryImpl(메모리)은 JDBC 세션과 불일치(재시작 유실). `EXPIRY_TIME > 현재` 필터 + BIGINT epoch millis → `FROM_UNIXTIME(x/1000)` 변환. (SpringSessionBackedSessionRegistry로의 교체는 동시세션 제한 동작에도 영향 — 범위 외, §10)
3. **강제 만료 = `FindByIndexNameSessionRepository.deleteById(sessionId)`** — Spring Boot가 자동 등록한 JdbcIndexedSessionRepository 주입. 직접 DELETE SQL보다 저장소 정합 보장. **키는 PRIMARY_ID가 아니라 SESSION_ID**
4. **날짜 표시 = 서버 고정 문자열** — DTO의 LocalDateTime에 `@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")` + 그리드 Text 컬럼. IBSheet Date 타입은 ISO-8601의 'T'/나노초 파싱 함정이 있음. ⚠️ 기존 페이지의 `Extend: IB_Preset.DATETIME`(notice.html)·`Extend: IB_Preset`(user-management.html)은 **미정의/오참조 잠재 버그** — 구현 시 함께 교정
5. **조회 전용 그리드** — `Cfg:{SearchMode:0} + Def:{Col:{CanEdit:0}}` 설정은 notice.html에서 차용하되, **완전한 조회 전용(저장 흐름 없음)은 이 템플릿의 신규 패턴**(notice는 모달 편집 화면이라 선례 아님). CSTATUS/saveAllData/hasUnsavedData 없음 → onPageClose는 `return true`
6. **대량 이력**: 무한스크롤 기각(템플릿 복잡도) — 기간 필터(기본 최근 7일) + LIMIT 1000 + 초과 안내

## 4. DB 설계 (schema.sql — notices 블록 뒤)

```sql
-- ============================================================
-- 로그인 이력 (이벤트 행 단위: LOGIN / LOGIN_FAIL / LOGOUT)
-- 주의: 세션 타임아웃/강제 만료는 기록되지 않음 (명시적 이벤트만)
-- ============================================================
CREATE TABLE login_history (
    history_seq  BIGINT AUTO_INCREMENT PRIMARY KEY,
    user_id      VARCHAR(20)  NOT NULL COMMENT '사용자 ID (실패 시 시도한 ID — users FK 아님)',
    event_type   VARCHAR(20)  NOT NULL COMMENT 'LOGIN / LOGIN_FAIL / LOGOUT',
    fail_reason  VARCHAR(100) NULL COMMENT '실패 사유 (BAD_CREDENTIALS / DISABLED 등 — 미존재 ID는 보안상 BAD_CREDENTIALS로 통합)',
    ip_address   VARCHAR(45)  NULL COMMENT '접속 IP (IPv6 대응 45자)',
    user_agent   VARCHAR(500) NULL COMMENT 'User-Agent',
    session_id   CHAR(36)     NULL COMMENT '세션 ID (성공 시)',
    created_at   TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '발생 시각',
    INDEX idx_lh_user (user_id, created_at DESC),
    INDEX idx_lh_created (created_at DESC)
) COMMENT='로그인 이력';
```

- `user_id`는 **FK 아님** — 실패 이력은 존재하지 않는 ID도 기록해야 하고, 사용자 삭제 후에도 이력 보존
- 시드: 메뉴 `('session-log', 'system', '접속 로그', '/session-log', 'bx-history', 7)` + 권한 ADMIN 전용 — schema.sql 상단의 **기존 menus/group_menu_permissions 통합 INSERT에 합칠 것** (공통코드 전례)

## 5. API 설계 (`SessionLogController`, `/api/session-logs`)

| # | 메서드/경로 | 용도 | 요청 | 응답 data |
|---|------------|------|------|----------|
| 1 | `GET /api/session-logs/history` | 로그인 이력 조회 | `?userId=&fromDate=&toDate=` (date, 기본 최근 7일) | `List<LoginHistoryDTO>` (최신순, LIMIT 1000) |
| 2 | `GET /api/session-logs/sessions` | 활성 세션 목록 | 없음 | `List<ActiveSessionDTO>` (sessionId, userId, 생성/마지막접근/만료 시각) |
| 3 | `DELETE /api/session-logs/sessions/{sessionId}` | 세션 강제 만료 | path | 없음 (okMessage) |

- 인가: `requestMatchers("/api/session-logs/**").hasRole("ADMIN")` — SecurityConfig의 공통코드 규칙 옆에 선언
- DTO 시각 필드는 전부 `@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")` 문자열
- #3에서 미존재 sessionId → `NoSuchElementException`(404). ⚠️ `deleteById`는 행이 없어도 조용히 통과하므로 **사전에 `findById`로 존재 확인** 후 throw해야 함
- **자기 자신의 세션 만료 시도 → `IllegalArgumentException`(400)** — 현재 요청의 `request.getSession().getId()`(Spring Session 사용 시 SESSION_ID와 동일)와 비교
- 활성 세션 조회 SQL은 `SESSION_ID`(논리 키)를 sessionId로 반환 — `PRIMARY_ID` 아님 (deleteById 키와 일치 보장)

## 6. 백엔드 구조 (신규/수정 파일)

```
[신규]
common/RequestUtils.java                  — IP 추출(X-Forwarded-For 첫 IP 우선 → getRemoteAddr), UA 추출 정적 유틸
config/LoginFailureHandler.java           — SimpleUrlAuthenticationFailureHandler 상속,
                                            setDefaultFailureUrl("/login.html?error=true")로 기존 동작 유지 후 super 호출.
                                            예외 분기: BadCredentials→BAD_CREDENTIALS, Disabled/Locked→DISABLED.
                                            미존재 ID는 hideUserNotFoundExceptions=true(기본, enumeration 방어)로
                                            BadCredentials에 통합됨 — USER_NOT_FOUND 구분은 의도적으로 하지 않음.
                                            시도 ID는 request.getParameter("userId")
config/LogoutHistoryHandler.java          — LogoutSuccessHandler 구현. ⚠️ .logoutSuccessUrl과 상호배타이므로
                                            기존 URL 라인을 제거하고 핸들러가 직접 /login.html?logout 리다이렉트.
                                            userId는 SecurityContext가 아니라 핸들러의 Authentication 파라미터에서 확보
                                            (clearAuthentication 이후 호출되므로)
controller/SessionLogController.java      — @RestController (3개 엔드포인트)
service/SessionLogService.java            — 이력 기록/조회 + 세션 조회/강제 만료
                                            (FindByIndexNameSessionRepository 주입, 기록 메서드는 내부 try/catch fail-open)
mapper/SessionLogMapper.java + XML        — login_history INSERT/SELECT + SPRING_SESSION 직조회 SELECT
dto/LoginHistoryDTO.java, ActiveSessionDTO.java

[수정]
config/LoginSuccessHandler.java           — LOGIN 기록 추가 (updateLastLoginAt 직후) + System.out.println → SLF4J 정리
config/SecurityConfig.java                — .failureUrl(...) → .failureHandler(loginFailureHandler),
                                            logout에 .logoutSuccessHandler(logoutHistoryHandler) 추가(기존 URL 동작 유지),
                                            /api/session-logs/** hasRole(ADMIN) 인가
schema.sql                                — login_history + 메뉴/권한 시드
controller/MainController.java            — /session-log 라우트
```

## 7. 화면 설계 (`templates/pages/session-log.html`)

상하 2카드 배치 (code-management의 카드 컴포넌트 재사용 — 단 마스터-디테일 아님, cascade 없음):

```
┌────────────────────────────────────────────────────┐
│ 접속 로그                                  [조회]    │
│ [검색카드: 시작일(date) 종료일(date) 사용자ID(text)]  │
├────────────────────────────────────────────────────┤
│ 🕐 로그인 이력 (조회 전용 그리드)                     │
│  시각 | 사용자ID | 이벤트 | 실패사유 | IP | 브라우저  │
├────────────────────────────────────────────────────┤
│ 👥 활성 세션                    [강제 만료] [새로고침]│
│  사용자ID | 생성 시각 | 마지막 접근 | 만료 예정       │
│  * 세션 타임아웃 30분 · 저장소: DB(JDBC)              │
└────────────────────────────────────────────────────┘
```

| 항목 | 설계 | 근거 |
|------|------|------|
| 그리드 설정 | 두 그리드 모두 `Cfg:{SearchMode:0}, Def:{Col:{CanEdit:0}}` — CSTATUS 컬럼 없음 | 조회 전용 (notice.html 패턴) |
| 이벤트 표시 | event_type을 `Type:'Enum'` 또는 Format으로 한글 표시(로그인/실패/로그아웃), 실패 행 강조 | |
| 날짜 컬럼 | `Type:'Text'` (서버가 'yyyy-MM-dd HH:mm:ss' 문자열) | §3-4 결정 |
| 기간 필터 | `<input type="date">` 2개 — 기존 검색카드 클래스 그대로 적용 (템플릿 첫 date input) | 시각 일관성 |
| 강제 만료 | **포커스 행 + 상단 버튼** (user-management 비밀번호 초기화 패턴) → showDeleteConfirm → `apiDelete` → 세션 그리드만 재조회 | 행내 버튼은 코드베이스 관례에 없음 |
| onPageClose | `return true` (저장 흐름 없음) | |
| loadSearchData | `{data: response.data}` 단일 객체 | 표준 |

## 8. 구현 계획

| 단계 | 작업 | 검증 |
|------|------|------|
| 1 | schema.sql login_history + 시드, 실행 DB 반영 | DDL/시드 조회 |
| 2 | RequestUtils + Mapper/XML + DTO | compileJava |
| 3 | LoginSuccessHandler 수정 + LoginFailureHandler/LogoutHistoryHandler 신규 + SecurityConfig 배선 | curl: 로그인 성공/실패/로그아웃 → login_history 3행 (실패 사유 포함) |
| 4 | SessionLogService/Controller | curl: 이력 조회(기간 필터), 활성 세션 목록, 강제 만료 404/400(자기 세션) |
| 5 | session-log.html + MainController 라우트 + 메뉴/권한 | Playwright: 그리드 2개 로드, 기간 필터, user1 메뉴 비노출 |
| 6 | 강제 만료 E2E: 세션 2개 만들고 하나 만료 → 해당 사용자 다음 요청 401→로그인 이동 | Playwright |
| 7 | 기존 날짜 오참조 교정 (notice.html DATETIME, user-management Extend:IB_Preset) — 별도 커밋 | 화면 날짜 표시 확인 |
| 8 | CLAUDE.md 갱신 + 적대적 리뷰 | 리뷰 워크플로 |

## 9. 보안/주의

- 로그인 실패 이력의 `user_id`는 공격자 입력일 수 있음 — 길이 제한(VARCHAR 20 초과 시 절단) 후 저장, 화면 렌더는 textContent
- 이력 기록은 인증 흐름 안에서 동작 — 기록 실패가 로그인/로그아웃을 막지 않도록 핸들러 내 try/catch (로그만 남김)
- ⚠️ Remember-Me 자동 재인증은 RememberMeAuthenticationFilter 경로라 **successHandler를 타지 않아 LOGIN 이력이 기록되지 않음** — 알려진 한계로 화면에 안내(완전 포착하려면 AuthenticationSuccessEvent 리스너 필요 — §10)

## 10. 범위 외 / 향후 확장

- `SpringSessionBackedSessionRegistry` 교체 (동시세션 제한과 조회의 단일 소스화) — maximumSessions 동작 영향 검증 필요
- 이력 보존 기간/아카이빙 정책, 무한스크롤 페이징 (데이터 증가 시)
- 로그인 실패 누적 계정 잠금 (brute-force 방어)
- Remember-Me 재인증 LOGIN 포착 (AuthenticationSuccessEvent 리스너)
- login_history.session_id와 SPRING_SESSION 조인 활용 — 세션ID 회전(고정화 방어) 타이밍 검증 필요해 1단계에선 참고 컬럼으로만 둠
- 데이터 변경 감사(audit) 로그 — 접속 로그와 별개 도메인
