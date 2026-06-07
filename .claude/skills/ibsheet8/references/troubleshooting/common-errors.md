# 자주 발생하는 오류

## 초기화 오류

### "Container element not found"
**원인**: DOM이 준비되기 전에 시트 생성 시도
✗ 스크립트 로드 직후 `IBSheet.create()` 호출
✓ `DOMContentLoaded` 이후, React `useEffect` / Vue `onMounted` 내에서 호출
→ 상세: [initialize-basic.md](../core/initialize-basic.md)

### "Sheet ID already exists"
**원인**: 같은 ID로 중복 생성
✗ `IBSheet.create({ id: "sheet" })` 중복 호출
✓ `window["sheet"]?.dispose()` 후 재생성
→ 상세: [initialize-basic.md](../core/initialize-basic.md)

### 비동기 생성 후 시트 메서드 호출 실패
**원인**: `IBSheet.create()`는 기본 비동기(`sync: 0`)이므로 생성 직후 메서드 호출 시 시트 미준비
✗ `IBSheet.create({...}); window["sheet"].loadSearchData({...});`
✓ 방법1: `sync: 1` 옵션으로 동기 생성
✓ 방법2: `onRenderFirstFinish` 이벤트 내에서 호출 (권장)
→ 상세: [initialize-basic.md](../core/initialize-basic.md)

---

## 데이터 오류

### "Cannot read property of undefined"
**원인**: 행 인덱스(숫자)를 직접 전달 — 행 객체가 필요
✗ `sheet.getValue(0, "name")`
✓ `sheet.getValue(sheet.getRowByIndex(1), "name")` — 인덱스는 1부터 시작
→ 상세: [api-methods.md](../core/api-methods.md)

### 데이터가 표시되지 않음
**원인**: 컬럼 `Name`과 데이터 키 불일치
✗ 데이터 `{ "userName": "홍길동" }` + 컬럼 `Name: "name"`
✓ 데이터 키와 컬럼 `Name`을 동일하게: `Name: "userName"`

### Date 컬럼이 비어 표시됨 (Network 응답은 정상)
**원인**: `DataFormat` 이 서버 문자열 포맷과 정확히 일치하지 않아 파싱 실패 (셀이 빈 칸으로 렌더)
✗ 서버 `"2024-10-30 23:40:42.000"` + `DataFormat: "yyyy-MM-dd HH:mm:ss"` (뒤의 `.000` 을 못 읽음)
✓ `DataFormat: "yyyy-MM-dd HH:mm:ss.000"` — 리터럴 `.000` 까지 명시
- Seegene LIS 백엔드 Timestamp 응답이 `.000` 밀리초를 달고 오므로 주의
- `Format` 은 표시용이므로 `.000` 없이 둬도 무방
→ 상세: [column-format-property.md](../core/column-format-property.md)

### Int/Float 컬럼에 빈 값이 0으로 표시됨
**원인**: Int, Float 타입은 기본적으로 빈 값을 0으로 표시
✓ `EmptyValue: 1` 설정으로 빈 셀 유지
→ 상세: [column-type-property.md](../core/column-type-property.md)

### 저장 시 변경 데이터가 없다고 나옴
**원인**: `getSaveJson()` / `doSave()`는 기본적으로 변경 행만 추출 (`saveMode: 2`)
✓ 전체 데이터 필요 시 `sheet.getSaveJson({ saveMode: 0 })`
→ 상세: [api-methods.md](../core/api-methods.md)

---

## 이벤트 오류

### 이벤트 핸들러에서 시트 접근 실패
**원인**: 화살표 함수 사용 시 `this`가 시트 객체가 아님
✗ `onClick: (evt) => { this.getValue(...) }`
✓ `evt.sheet.getValue(...)` 사용 (권장, 항상 안전)
✓ 또는 일반 함수 `function(evt) { this.getValue(...) }`
→ 상세: [events.md](../core/events.md)

### onAfterChange에서 setValue 호출 시 주의
**원인**: `onAfterChange`는 사용자 입력 시에만 발생, `setValue()` 호출로는 기본적으로 재발생 안 함
✓ 이벤트 발생을 명시적으로 제어하려면 `ignoreEvent` 파라미터 사용
`sheet.setValue(row, col, val, render, ignoreEvent)`
→ 상세: [events.md](../core/events.md)

### onBeforeChange 반환값 처리
✓ 이전 값으로 되돌리기: `return evt.oldval`
✓ 값 변환 적용: `return evt.val.toUpperCase()`
✓ 정상 처리: 반환값 없음

### onEndEdit에서 입력 취소
✓ `return true` → 변경 취소 (이전 값으로 복원)

---

## 메모리 누수

### SPA에서 시트가 계속 쌓임
**원인**: 컴포넌트 언마운트 시 `dispose()` 미호출
✗ cleanup 함수 없이 `IBSheet.create()` 호출
✓ React: `useEffect` return에서 `window["sheet"]?.dispose()`
✓ Vue: `onUnmounted`에서 `window["sheet"]?.dispose()`
→ 상세: [react.md](../integration/react.md), [vue.md](../integration/vue.md)

---

## 스타일 오류

### 시트가 너무 작게 표시됨
**원인**: 컨테이너 크기 미지정
✗ `<div id="container"></div>` (크기 없음)
✓ `<div id="container" style="width:100%; height:500px;"></div>`

### 컨테이너 크기 변경 시 시트 크기 안 맞음
✓ `window.addEventListener("resize", () => sheet.fitSize())`

---

## 서버 통신 오류

### CORS 오류
**원인**: 서버에서 CORS 미설정
✓ 서버에서 `Access-Control-Allow-Origin`, `Allow-Methods`, `Allow-Headers` 헤더 추가

### 저장 후 상태가 초기화 안 됨
**원인**: `acceptChangedData()` 미호출
✗ `sheet.acceptChanges()` (존재하지 않는 메서드)
✓ doSave 사용 시: `onAfterSave`에서 `evt.result >= 0`(성공) 확인 후 `evt.sheet.acceptChangedData()`
✓ fetch 등 외부 라이브러리 사용 시: 응답 성공 후 `sheet.acceptChangedData()` 직접 호출
→ 상세: [api-methods.md](../core/api-methods.md)

---

## Enum(콤보) 오류

### Enum 목록이 표시 안 됨
**원인**: EnumKeys/Enum 형식 오류 — 첫 문자가 구분자 역할
✗ `EnumKeys: ["A", "B", "C"]` (배열 사용)
✓ `EnumKeys: "|A|B|C"`, `Enum: "|활성|비활성|대기"` (첫 문자가 구분자인 문자열)
→ 상세: [column-type-property.md](../core/column-type-property.md)

### Enum 값이 코드가 아닌 텍스트로 저장됨
**원인**: `EnumKeys` 미설정 시 Enum 텍스트가 그대로 값으로 저장됨
✓ `EnumKeys`(코드)와 `Enum`(표시 텍스트)을 모두 설정

---

## Bool(체크박스) 오류

### 체크 상태가 저장 안 됨
**원인**: 기본값 1/0과 서버 기대값(Y/N 등) 불일치
✗ `Type: "CheckBox"`, `OnValue/OffValue` (IBSheet7 문법)
✓ `Type: "Bool"`, `TrueValue: "Y"`, `FalseValue: "N"`
→ 상세: [column-type-property.md](../core/column-type-property.md)

### `getValue` 로 Bool 컬럼 읽으면 항상 `1`/`0` 으로 나와 서버에 잘못된 값 전송
**원인**: `TrueValue`/`FalseValue` 는 **`getSaveJson`/`getSaveString` 등 저장 함수 호출 시에만 적용**된다. `getValue`/`getValues` 는 항상 내부값 `1(true)/0(false)` 을 반환 (공식 매뉴얼 명시).

수동으로 변경 행을 수집해 페이로드 만드는 패턴(`getRowsByStatus('Changed').map(r => sheet.getValue(r, 'useYn'))`) 사용 시, 결과가 `"1"`/`"0"` 으로 직렬화되어 서버 검증 실패.

✗ `getRowsByStatus(...).map(r => ({ useYn: String(sheet.getValue(r, 'useYn')) }))` → `useYn: "1"`
✓ 정공법: `sheet.getSaveJson({ saveMode: 2 })` 사용 (TrueValue 자동 적용)
✓ 차선: 수동 페이로드 빌드 시 명시 정규화
```typescript
const raw = sheet.getValue(row, 'useYn')
const useYn = raw === 'Y' || raw === 1 || raw === '1' || raw === true ? 'Y' : 'N'
```
→ 공식: [false-value.md](../ibsheet-official-manual/props/col/false-value.md) "이 속성 값은 단지 서버와 데이터를 주고 받을때만 사용될 뿐, 해당 셀의 값을 getValue 함수를 통해 확인시에는 1(true)/0(false)로 리턴됩니다."

---

## 수식(Formula) 오류

### Formula가 동작하지 않음
**원인**: `CanFormula` 미설정 또는 `CalcOrder` 누락
✓ `Def.Row`에 `CanFormula: 1`과 `CalcOrder: "컬럼명"` 필수 설정
→ 상세: [formula.md](../features/formula.md)

### CalcOrder에 공백이 포함되어 계산 오류
✗ `CalcOrder: "yearSum, total, tax"` (공백 포함)
✓ `CalcOrder: "yearSum,total,tax"` (공백 없이 쉼표만)

### AttributeFormula가 동작하지 않음
**원인**: CalcOrder에 `컬럼명+속성명` 형식으로 등록하지 않음
✓ `CalcOrder: "total,qtyColor,rateCanEdit"` — 일반 Formula와 AttributeFormula 모두 포함
→ 상세: [attribute-formula.md](../features/attribute-formula.md)

### CSP 환경에서 Formula 오류
**원인**: 문자열 형식 Formula는 내부적으로 `eval()` 사용
✗ `Formula: "qty * price"` (문자열)
✓ `Formula: function(fr) { return fr.Row["qty"] * fr.Row["price"]; }` (함수)

---

## 트리 그리드 오류

### 트리 구조가 표시되지 않음
**원인**: `Cfg.MainCol` 미설정
✓ `Cfg: { MainCol: "컬럼명" }` 필수 지정
→ 상세: [tree-grid.md](../features/tree-grid.md)

### 동적 로딩 시 자식 노드 확장 아이콘이 없음
**원인**: `HaveChild` 속성 미설정
✓ 자식이 있을 수 있는 행 데이터에 `HaveChild: true` 포함

---

## 그룹/소계 오류

### Group 속성에 공백 포함 시 그룹핑 실패
✗ `Group: "deptName, teamName"` (공백 포함)
✓ `Group: "deptName,teamName"` (공백 없이 쉼표만)
→ 상세: [grouping.md](../features/grouping.md)

### makeSubTotal을 초기화 시점에 호출하면 오류
**원인**: 데이터 로드 이후에 호출해야 함
✗ 시트 생성 직후 `sheet.makeSubTotal([...])`
✓ `onDataLoad` 이벤트 내에서 `evt.sheet.makeSubTotal([...])`
→ 상세: [summary.md](../features/summary.md)

---

## 고정(Frozen)/병합(Merge) 오류

### setFixedLeft 호출 시 컬럼 수가 안 맞음
**원인**: 숨겨진 SEQ 컬럼이 카운트에 포함됨
✗ 보이는 컬럼 수로 지정 → 의도와 다른 결과
✓ SEQ 컬럼을 포함하여 카운트 (예: 2개 고정 시 `setFixedLeft(3)`)
→ 상세: [frozen-merge.md](../features/frozen-merge.md)

### DataMerge와 setFixedTop/setFixedBottom 동시 사용 불가
**원인**: 두 기능은 호환되지 않음
✓ `DataMerge` 또는 `setFixedTop/setFixedBottom` 중 하나만 선택

---

## 필터 오류

### doFilter 호출 시 필터가 동작하지 않음
**원인**: 필터 행이 활성화되지 않음
✓ `Cfg: { ShowFilter: true }` 또는 `sheet.showFilterRow()` 선행 필요
→ 상세: [api-methods.md](../core/api-methods.md)

### doFilter의 구분자 형식 오류
**원인**: `cols`, `vals`, `operators`의 첫 문자가 구분자 역할
✗ `cols: "dept|name"` (구분자 없이 시작)
✓ `cols: "|dept|name"`, `vals: "|영업부|홍길동"`, `operators: "|1|11"`

---

## Export/Import 오류

### 엑셀 Import 시 컬럼 매핑이 안 맞음
**원인**: Import mode 미지정 또는 잘못 설정
✓ `sheet.loadExcel({ mode: "HeaderMatch" })` — 헤더 이름 기준 매핑 (기본값, 권장)
기타: `"HeaderSkip"`, `"NoHeader"`, `"FullLoad"`
→ 상세: [export-import.md](../features/export-import.md)

### CSV Export 시 한글이 깨짐
**원인**: 인코딩 미설정
✓ `sheet.down2Text({ fileName: "data.csv", downloadEncoding: "UTF-8(BOM)" })`

---

## Validation 오류

### ValidCheck 설정했는데 저장 시 검증이 안 됨
**원인**: `Cfg.ValidCheck: true`만으로는 부족 — 개별 컬럼에 `Required`, `ResultMask` 등 설정 필요
✓ Cfg와 컬럼 양쪽 모두 설정
→ 상세: [validation.md](../features/validation.md)

### EditMask와 ResultMask의 차이
- `EditMask`: 입력 중 제한 (타이핑 시 허용 패턴)
- `ResultMask`: 입력 완료 시 검증 (최종 값 패턴)
→ 상세: [validation.md](../features/validation.md)

---

## E2E 테스트 (Playwright) 에서 IBSheet 렌더 대기

### `locator('canvas')` 로 대기하면 timeout
**원인**: IBSheet8 은 `<table>` + `<div>` 기반으로 렌더한다. Canvas 요소를 쓰지 않으므로 `canvas` 를 신호로 기다리면 무한 timeout.

```ts
// ❌ 잘못 — canvas 는 영원히 안 나타남
await expect(host.locator('canvas').first()).toBeVisible({ timeout: 15_000 })
```

권장 대기 신호:
- `onSearchFinish` / `onRenderFirstFinish` 이벤트에서 외부 state 를 세팅하고 해당 DOM 값으로 대기
- `onFocus` 가 세팅하는 콜백 데이터(예: 첫 행 PK) 를 `data-testid` 로 노출 후 그 값으로 대기
- Cell 텍스트 자체로 대기 (`expect(page.getByText('A001')).toBeVisible()`)

```ts
// ✅ 콜백 결과를 DOM 에 반영해서 신호로 사용
<span data-testid="txt-current-id">{lastRow?.id ?? '(none)'}</span>

await expect(page.getByTestId('txt-current-id')).toHaveText('A001', { timeout: 15_000 })
```
