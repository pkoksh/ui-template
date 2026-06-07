# IBSheet8 고급 패턴 (Focus / Selection / Edit / Save / Context Menu)

> SKILL.md 가 비대해지지 않도록 분리한 자주 쓰는 패턴 모음. 단일 시트 화면이 평면 그리드만 다룬다면 본 파일을 거치지 않아도 된다. Master/Detail · 무한 스크롤 · 행 편집/추가/삭제 · Row Context Menu 가 등장하는 화면에서 필요한 패턴만 골라 참조.

## Focus & Selection (자주 쓰는 패턴)

### `Cfg.IgnoreFocused` — 값별 사용 정책

**`0` (default)** — 조회 후 첫 행 + 그리드 ActiveElement 점유. 단일 그리드 화면 기본.
**`1` ⛔ 사용 금지** — 조회 후 시각 포커스도 안 들어감. 행 selection 강조가 약해지고 환경별로 동작이 일관되지 않음.
**`2` ✅ Master/Detail Detail 그리드 필수** — 첫 행 시각 포커스는 들어가되 `document.activeElement` 는 유지. Master 에서 키보드 ↑↓ 이동 중 Detail 이 재조회되어 포커스를 뺏어가는 문제 해결.

```javascript
// 단일 그리드 — 옵션 생략 (기본값 0)
Cfg: { CanEdit: 0 }

// Master 그리드 — IgnoreFocused 사용 금지 (어떤 값이든 X)
Cfg: { CanEdit: 0 }

// Detail 그리드 — 항상 2
Cfg: { CanEdit: 0, IgnoreFocused: 2 }
```

**판정 규칙**:
- 화면에 그리드가 1개뿐 → 옵션 생략 (Master/Detail 구조라도 **상세가 폼**이면 디테일 그리드가 없으므로 마스터 그리드는 옵션 생략)
- 화면에 마스터-디테일 / 메인-서브 / 좌측-우측 cascade 형태로 그리드가 2개 이상 → Master 는 생략, Detail 전부 `IgnoreFocused: 2`
- **Master 그리드 또는 단일 그리드에는 어떤 값이든 설정 금지** — `IgnoreFocused: 2` 도 마스터에 붙이면 키보드 ↑↓ 행 이동 시 ActiveElement 가 그리드에서 빠져나가 동작 불일치 유발
- `1` 은 어떤 경우에도 사용 금지

외부 Input 포커스 유지 필요 시: 호출 측에서 명시적으로 `inputRef.current?.focus()` 로 복원, cascade 중복 호출은 selected ID 비교로 가드.

**"조회 후 행 미선택" 요구 시 (원본 Nexacro 무선택 상태 재현)** — `IgnoreFocused` 로 풀지 말고 적재 직후 `sheet.blur(0)` 호출 (`blur(0)` = 셀 포커스 + 시트 포커스 모두 해제, `funcs/core/blur`):

```typescript
sheet.loadSearchData({ data, sync: 1 })
sheet.blur(0) // 첫 행 자동 포커스(하이라이트) 해제 — 이후 사용자 클릭 포커스는 정상 동작
```

- `onRenderFirstFinish` pending 재적재 경로가 있으면 그쪽에도 동일 적용 (적재 지점마다). state-driven 적재면 `onSearchFinish` 에서 `sheet.blur(0); sheet.clearSelection()` 호출이 깔끔.
- `blur(0)` 는 `CanSelect`/`CanFocus` 를 건드리지 않음 → `getFocusedRow()` 기반 행 선택 로직 무영향. 재적재(필터 변경) 시마다 다시 호출되므로 매번 미선택 유지.

🚨 **함정 — "행 미선택" 을 `Cfg.NoFocus:1` 로 풀면 마우스 드래그 멀티선택이 차단된다**: 전역 `commonOptions` 의 `SelectMode:3`(드래그 = 포커스 이동 기반 선택)과 충돌. `NoFocus:1` 은 포커스 자체를 막아 드래그 범위선택(`getSelectedRows()` 수집)이 0건이 된다. (`NoFocus:1` 은 `onFocus` 는 살아있어 편집/마스터-디테일 화면엔 쓰이지만, **드래그 멀티선택이 필요한 선택 팝업/그리드엔 금지**.) 첫행 미선택 + 드래그 멀티선택 둘 다 필요하면 → `Cfg.NoFocus` 쓰지 말고 **`SelectingCells:0`(행단위 선택) + 적재 후 `blur(0)+clearSelection`** 조합. 검증: UIQC1101P06(물질검색 팝업 — 드래그 4행 선택 + 첫행 미선택 동시 통과).

체크박스 컬럼의 체크 상태는 **IBSheet 내부** 에만 존재한다. 외부 Dataset/상태 관리 라이브러리에 자동 바인딩되지 않으므로 `sheet.getValue(row, 'chk')` 만 반복해도 체크 변경 사항을 얻을 수 없고, 반드시 전용 API 를 사용해야 한다.

```javascript
LeftCols: [
  { Name: 'chk', Type: 'Bool', Width: 30, Align: 'Center', CanEdit: 1,
    Header: { Value: '', HeaderCheck: 1 } },
],

// 체크된 행 배열 반환
const checkedRows = sheet.getRowsByChecked('chk')
for (const r of checkedRows) {
  const id = sheet.getValue(r, 'userId')
  // ...
}
```

### 행 선택 이벤트 — `onFocus` + `evt.row === evt.orow` 가드

`onClick` 은 마우스 전용. 키보드 방향키 이동에도 반응해야 하면 `onFocus` 를 쓴다. 다만 `onFocus` 는 동일 행 재포커스에도 호출될 수 있으므로 `evt.row === evt.orow` 가드로 중복 처리를 skip.

```javascript
Events: {
  onFocus: (evt) => {
    if (!evt.row) return
    if (evt.row === evt.orow) return  // 같은 행 재포커스 skip
    const id = evt.sheet.getValue(evt.row, 'id')
    // ... 상세 조회 등
  },
}
```

⚠️ **함정 — 최초 조회 시 첫 행 자동 강조만 되고 `onFocus` 는 발화되지 않는다.**

`loadSearchData` 후 IBSheet 는 첫 행에 **시각적 highlight 만** 입히고 `onFocus` 이벤트는 발화하지 않는다. 결과적으로 행은 선택돼 보이는데 상세 폼이 빈 채로 남는다.

해결 — `onSearchFinish` 에서 **명시적으로 `sheet.focus(firstRow)` 호출**:

```javascript
Events: {
  onFocus: (evt) => { /* 상세 폼 채우기 */ },
  onSearchFinish: (evt) => {
    const sheet = evt.sheet ?? sheetRef.current
    if (!sheet) return
    const first = sheet.getDataRows()?.[0]
    if (first) sheet.focus(first)   // ← onFocus 트리거 → 상세 폼 자동 채움
  },
}
```

추가 — `onFocus` 가 `sheet.getValue(row, colName)` 으로 읽는 컬럼은 **모두 `Cols` 에 선언되어 있어야** 한다 (가시 컬럼 + 화면 미표시는 `Visible: 0` hidden). 미선언 컬럼은 IBSheet 가 data 로 보관하지 않아 `getValue` 가 `undefined` 반환.

```javascript
Cols: [
  { Header: '센터', Name: 'cntrNm', Width: 150 },
  { Header: '검체', Name: 'smplNm', Width: 150 },
  // hidden — onFocus 에서 getValue 로 읽기 위해 필요
  { Name: 'sno',       Type: 'Text', Visible: 0 },
  { Name: 'cntrCd',    Type: 'Text', Visible: 0 },
  { Name: 'inspdptCd', Type: 'Text', Visible: 0 },
  { Name: 'memo',      Type: 'Text', Visible: 0 },
],
```

### 행 삽입 — `addRow({ next })` 는 "지정한 행 **위(앞)** 에 신규"

공식 매뉴얼 (`funcs/core/add-row`):
> `next | 데이터 로우 객체 (지정한 행의 **위에** 신규 행이 생성됨. 값이 없으면 맨 마지막행에 생성)`

Nexacro `Dataset.insertRow(idx)` ("idx 번 **앞**에 삽입") 와 **방향 동일** — `getPrevRow` 우회 불필요.

```javascript
// ✅ focused 행 "위(앞)" 에 신규 — Nexacro insertRow 와 등가
sheet.addRow({ next: focused, init: { ... } })

// ✅ 맨 위에 신규
sheet.addRow({ next: sheet.getFirstRow(), init: { ... } })

// ✅ 맨 마지막 (next 미지정)
sheet.addRow({ init: { ... } })

// 패턴: focused 없으면 맨 끝
const focused = sheet.getFocusedRow()
sheet.addRow(focused ? { next: focused, init } : { init })
```

⚠️ **함정 — 과거 SKILL.md 가 "next = 다음(아래)"로 잘못 적혀 있었다**. 매뉴얼/공식 sample 모두 **위(앞)**. 만약 `getPrevRow` 우회 코드를 본다면 잘못된 패턴이며 한 칸 위로 어긋나는 회귀를 유발한다.

⚠️ **함정 — addRow 후 명시 `focus()` + `showRow()` 안 부르면 사용자는 추가됐는지 인지 못 함**

`addRow({ init })` 가 맨 끝에 행을 만들어도 IBSheet8 는 **포커스를 옮기지 않고 스크롤도 안 한다**. 데이터 행이 많아 스크롤이 필요한 그리드라면 추가된 행이 화면 밖에 머무르고, 사용자는 "추가 버튼 눌렀는데 아무 일도 안 일어남" 으로 인지한다 (실제 데이터에는 들어가 있지만 화면 확인 불가).

```ts
// ❌ addRow 만 호출 — 추가는 됐지만 화면 밖
for (const r of selectedRows) {
  sheet.addRow({ init: buildInit(r) })
}
// 사용자: "추가했는데 아무 변화 없음" 보고 → 사실 끝에 추가됨

// ✅ 마지막 추가 행 추적 + focus + showRow
let lastAdded: IBRow | undefined
for (const r of selectedRows) {
  const added = sheet.addRow({ init: buildInit(r) })
  if (added) lastAdded = added as IBRow
}
if (lastAdded) {
  sheet.focus(lastAdded)
  ;(sheet as { showRow?: (row: IBRow) => void }).showRow?.(lastAdded)
}
```

**Why**: `addRow` 의 return 은 새로 추가된 row 객체. `sheet.focus(row)` 로 포커스 이동 + `sheet.showRow(row)` 로 viewport 스크롤. 둘 다 호출해야 사용자가 "끝에 추가됨" 을 즉시 인지. Nexacro `ds_xxx.addRow()` 는 자동 포커스 이동을 동반하지만 IBSheet8 는 별도 명시 호출 필요.

**How to apply**: 팝업에서 받은 다건 추가 / "행 추가" 버튼 클릭 / 외부 콜백을 통한 addRow — **모두 마지막 추가 행 추적 + focus + showRow 패턴 적용**. 사용자가 추가 결과를 즉시 봐야 하는 모든 케이스. 사고 사례: UIQC1101M00 — 팝업 다건 추가 후 focus/showRow 누락 → 사용자 "추가 하면 제일 아래 행에 생기네 원본은. 아래 행에 생기고 포커싱 가게 해줘야할거같은데" 보고.

### 행 삭제 — `Added` 행은 `removeRow`, 기존 행은 `deleteRow`

신규 추가행(`Added`)을 `deleteRow` 로 마킹하면 `getSaveJson` 결과에 `Deleted` 로 들어가 백엔드에 의미 없는 DELETE 요청이 발생한다. 클라이언트에서 즉시 제거되어야 한다.

```javascript
const focused = sheet.getFocusedRow()
if (!focused) return
const isAdded =
  sheet.getRowState?.(focused) === 'Added' ||
  sheet.getAttribute?.(focused, undefined, 'Added') === 1
if (isAdded) sheet.removeRow(focused)   // 신규행 — 백엔드 전송 불필요
else sheet.deleteRow(focused)           // 기존행 — Deleted 마킹 → 저장 시 백엔드 DELETE
```

⚠️ **함정 — `deleteRow` 가 화면에서 즉시 hide 안 되는 환경** (Dialog 안 IBSheet 또는 일부 버전). Deleted 마킹은 되지만 사용자 눈에는 그대로. 사용자가 "삭제 눌렀는데 안 사라짐 → 저장 후 사라짐" 으로 인지.

✅ **권장 — 공식 `visible:0` 옵션 (IBSheet 8.1.0.38+ 한 줄로 처리)**:
```javascript
// 객체 인자 형태 — visible:0 = Deleted 마킹 + 화면 숨김 동시
;(sheet as unknown as {
  deleteRow?: (opts: { row: unknown; visible?: number }) => void
}).deleteRow?.({ row: focused, visible: 0 })
```

✅ **fallback — 8.1.0.38 이전 환경에서는 `hideRow` 명시 호출**:
```javascript
sheet.deleteRow(focused)
;(sheet as { hideRow?: (r: unknown) => void }).hideRow?.(focused)
```

> 시그니처: `deleteRow(row, del, valid, visible)` — `visible:0` (`false`) 삭제 행 감춤, `1` (`true`, default) 표시. 공식 매뉴얼 `funcs/core/delete-row`.

### React state 로 행 추가/삭제 시 포커스 — `requestAnimationFrame` 필수

부모 hook 이 `setList([...prev, newRow])` / `setList(prev => prev.filter(...))` 등 **React state** 로 행을 추가/삭제하는 패턴(`useIBSheetDataBridge` 가 자동 IBSheet sync) 에서는 `sheet.addRow()`/`sheet.removeRow()` 를 호출하지 않는다. 따라서 IBSheet 의 자동 인접행 포커스 이동도 일어나지 않는다 — 그리드 컴포넌트가 직접 focus 호출 책임을 진다.

⚠️ **함정 — `setTimeout(0)` 으로 호출하면 두 단계 깜빡임**
`loadSearchData` 가 자동 첫행을 강조하는 단계에 paint 되어, 사용자 눈에 "첫행 깜빡 → 마지막행" 두 단계가 보인다. `rAF` 는 다음 paint **직전** 이라 자동 강조가 끝난 다음 한 번에 마지막행 focus.

```javascript
// 행추가 — 마지막 행으로 focus
const prevLenRef = useRef(0)
useEffect(() => {
  const prev = prevLenRef.current
  const cur  = list.length
  prevLenRef.current = cur
  if (cur <= prev) return                              // 길이 증가만
  const lastIdx = cur - 1
  const lastRow = list[lastIdx]
  if (String(lastRow?._rowtype ?? '') !== 'I') return  // SVC 응답 적재는 skip
  selectedIdxRef.current = lastIdx
  const rafId = requestAnimationFrame(() => {
    const target = sheetRef.current?.getDataRows?.()?.[lastIdx]
    if (target) sheetRef.current?.focus(target, 'firstColName')
  })
  return () => cancelAnimationFrame(rafId)
}, [list])

// 행삭제 — 바로 위 행 (idx - 1) 으로 focus
onClick={() => {
  let idx = selectedIdxRef.current
  if (idx < 0) idx = list.length - 1
  if (idx < 0) return
  handleDeleteRow(idx)                                  // setList prev.filter((_, i) => i !== idx)
  const newLength = list.length - 1
  const focusIdx = newLength > 0 ? Math.max(0, idx - 1) : -1
  selectedIdxRef.current = focusIdx
  if (focusIdx >= 0) {
    requestAnimationFrame(() => {
      const target = sheetRef.current?.getDataRows?.()?.[focusIdx]
      if (target) sheetRef.current?.focus(target, 'firstColName')
    })
  }
}}
```

⚠️ **함정 — 신규 행 식별은 `_rowtype === 'I'` 가 안전**
빈 PK 컬럼(예: `smplSclfCd === ''`) 체크 방식은 default 값을 채우는 순간(예: `sexCd: 'A'`) 깨진다. `handleAddRow` 가 신규 행에 `_rowtype: 'I'` 를 명시하면 어떤 default 가 들어가도 정확히 구분된다. 이 `_rowtype` 은 백엔드 저장 분기에도 동시 활용 (아래 "신규 행 `_rowtype` 누락" 함정 참조).

⚠️ **함정 — `sheet.focus({Row, Col})` 객체 형식 사용 금지**
정확한 시그니처는 `focus(row, col, pagepos?, ignoreEvent?, triggerOnFocus?)` 의 positional 인자. 객체 형식은 IBSheet 가 인식 못해 포커스 미이동 (회귀 사례: 2026-05-14 SampleInfoBase02).

### 신규 행 `_rowtype: 'I'` 명시 — 백엔드 insert 분기 + focus 가드 동시 충족

백엔드 (Nexacro 호환 mapper) 가 다음 분기를 흔히 사용:

```java
if ("I".equals(row.get_rowtype()) || "U".equals(row.get_rowtype())) {
    commonDao.insert("merge...", row);
}
```

`_rowtype` 이 누락/`'N'` 이면 **insert 가 skip** 되어 저장 alert 는 떴는데 DB 에는 안 들어가는 silent failure (사용자 보고: "저장됐다고는 뜨는데 실제로는 안 저장됨"). 신규 행 push 시 명시:

```javascript
const newRow = {
  ...defaultFields,
  gridRowType: 'I',
  _rowtype: 'I',           // ← 필수. 백엔드 mergeXxx 가 'I'/'U' 일 때만 insert
}
```

⚠️ **함정 — SVC 응답/엑셀 행을 신규(INSERT)로 저장: `loadSearchData`(→NORMAL) 금지, `addRow({init})`(→Added)**
AS-IS `setRowType(i, ROWTYPE_INSERT)` (예: 엑셀 검증 응답을 전부 신규로 저장) 의 등가는 응답을 `addRow({init})` 로 적재하는 것. `loadSearchData` 는 행을 **NORMAL** 로 적재 → `mode:'changed'` 직렬화에서 제외(`_rowtype='N'`) → 백엔드 insert/update 분기 모두 skip 되어 "저장됐다 뜨나 미저장". (체크박스로 셀을 건드려 Changed 화되면 `'U'` 로 송신돼 0건 update → 동일 silent fail.) `addRow({init})` 은 각 행을 `Added`(='I') 로 만들고, **method 호출이라 onAfterChange 미발화** → init 값에 의존 컬럼 cascade clear 가 안 일어나 적재 데이터가 보존된다.

```javascript
// ❌ loadSearchData → NORMAL → 저장 시 silent skip
sheet.loadSearchData({ data: respRows })
//   구버전 회귀: getRowsByStatus('All') 는 유효 인자가 아님 → 빈 배열 → 후속 setRowStatus 루프 미실행
// ✅ addRow → Added(INSERT)
sheet.removeAll()
for (const r of respRows) sheet.addRow({ init: { ...r } })
```
> `getRowsByStatus` 인자는 `Added`/`Changed`/`Deleted`/`Normal` 조합만 유효 — 전체 행은 `getDataRows()`. `setRowStatus(row,'Added')` 는 실존(개별 행 마킹용)하나, 응답 다건 적재는 위 addRow 루프가 정석. 사례: UIBL0690P CMS 수기등록 엑셀 업로드.

⚠️ **함정 — child row 의 `tstSno` 가 `null` 이면 백엔드 NPE**
백엔드 mapper 가 `row.getTstSno().isEmpty()` 호출하는 경우, `null` 이면 NPE (응답 detail: `Cannot invoke "String.isEmpty()" because ... .getTstSno() is null`). 빈 문자열은 OK. master row 의 `tstSno` 가 있으면 그 값으로 prefill:

```javascript
const masterTstSno = String(selectedRowRef.current?.tstSno ?? '')
const newRow = { tstSno: masterTstSno, ...defaults, _rowtype: 'I' }
```

### 행 번호 컬럼 — `Type:'Text', Name:'SEQ'` 자동 채움

행번호 표시는 별도 응답 매핑이나 `Formula:'Row'` 불필요. **`Name:'SEQ'`** 로만 정의해도 IBSheet8 가 자동으로 1,2,3... 채운다.

```javascript
// ✅ 자동 행번호 — 응답 매핑/Formula 모두 불필요
{ Header: '순번', Name: 'SEQ', Type: 'Text', Width: 50, Align: 'Center', CanEdit: 0 }
```

⚠️ **함정 — `Formula:'Row'` 또는 `'ROW'` 가 환경별로 NaN 반환**한다. `Type:'Int' + Formula:'ROW'` 조합은 IBSheet8 8.x 에서 캐스팅 실패 케이스가 있으니 위 SEQ 패턴 사용.

### 편집 가능 조건 — `AddEdit` / `ChangeEdit` 매트릭스

XFDL `Cell` 의 `edittype` expr 패턴을 IBSheet8 의 `AddEdit` / `ChangeEdit` 로 매핑한다 (`CanEdit:1` 일괄은 PK/key 컬럼이 기존행에서도 편집 가능해져 데이터 무결성을 깬다).

| XFDL `edittype` | AddEdit | ChangeEdit | 의미 |
|---|---|---|---|
| `expr:INSERT? combo : none` (또는 normal/date) | **1** | **0** | 신규행만 편집 |
| `expr:INSERT? X : 'normal'` | **1** | **1** | 신규+기존 모두 |
| `'normal'` / `'combo'` / `'mask'` / `'checkbox'` | **1** | **1** | 항상 편집 |
| 미지정 (text/expr 표시만) | **0** | **0** | read-only (`CanEdit: 0`) |
| `oncellposchanged` 외부 콤보 팝오버 (예: cbo_inspdpt4Edit) + `INSERT` 가드 | **1** | **0** | AS-IS 외부 팝오버 ↔ IBSheet8 셀 직접 편집 등가 처리 |

```javascript
// ✅ AS-IS L88: edittype="expr:INSERT? combo : none" → 신규행만 편집
{ Header: '센터', Name: 'cntrCd', Type: 'Enum', AddEdit: 1, ChangeEdit: 0, EnumStrictMode: 1, ... }

// ✅ AS-IS L91: jobGrupCd — edittype 미지정 (oncellposchanged + INSERT 가드 외부 팝오버)
//     → IBSheet8 셀 직접 편집으로 등가 (AddEdit:1, ChangeEdit:0). cntrCd 변경 시 onAfterChange 에서 setAttribute 로 옵션 동기화.
{ Header: '작업구분', Name: 'jobGrupCd', Type: 'Text', AddEdit: 1, ChangeEdit: 0 }
```

⚠️ **함정 — `editmaxlength`/`maskeditformat`/`editautoselect` 는 `edittype` 없으면 무효 (미끼 속성)**
band Cell 에 이 속성들이 붙어 있어도 `edittype` 이 없으면 그 셀은 **read-only** 다 (Nexacro Cell.edittype 기본값 = none). 이 속성만 보고 `CanEdit:1` 주면 AS-IS 에 없던 편집칸이 생긴다 (사례: UIBL0690P bankNm — `editmaxlength="30"` 있으나 edittype 없어 read-only 인데 `CanEdit:1`+`EditLen:30` 으로 오변환). **편집 가능 판정은 오직 `edittype` 존재 여부로.**

⚠️ **함정 — `setCellProperty("body", N, "edittype", ...)` 의 N 은 band Cell 의 col 인덱스**
form_onload 의 setCellProperty 가 어느 컬럼을 덮는지는 **band 의 `<Cell col="N">` 순서로 bind 명을 매핑**해 확인할 것. 인접 컬럼에 잘못 귀속하면 편집 매트릭스가 통째로 어긋난다 (사례: UIBL0690P — col1=blclDt 의 `expr:INSERT?combo:none` 을 col0=dpstTypeCd 에 오귀속 → 입금유형이 "신규행만 편집"/입금일자가 "편집불가" 로 뒤바뀜. 정답: dpstTypeCd=band `edittype="combo"` 무조건편집, blclDt=setCellProperty INSERT-only).

⚠️ **함정 — `getRowType==2?normal` (PK 신규행 편집) 을 `CanEdit:0` / `CanEditFormula(Added)` 로 변환 금지**

화면이 `addRow()` 직후 `setRowType(addRow, 4)` 로 신규행을 UPDATE(4) 강제 표시하는 패턴(UIDI0640/0620/0680 균정보 류)에서, PK 컬럼 `edittype="expr:dataset.getRowType(currow)==2?'normal':''"` (Nexacro **2=INSERT**) 의 의도는 **"신규행만 PK 입력 가능, 기존 조회행 잠금, 저장 후 잠금"** — 위 매트릭스대로 `AddEdit:1, ChangeEdit:0` 가 정답.

- ❌ `CanEdit: 0` — 신규행까지 막혀 새 PK 입력 불가 (사용자 보고: "행추가했는데 코드 입력이 안 됨")
- ❌ `CanEditFormula: (fr)=>fr.Row?.Added===1?1:0` — 동작은 하나 비정석 + `cssclass="...getRowType==4..."`(노란배경=ColorFormula, **4=UPDATE 신규강제표시**) 와 혼동해 둘 다 `Added` 로 뭉뚱그려 매핑되기 쉬움 (type2=편집 ≠ type4=표시색)
- ✅ `AddEdit: 1, ChangeEdit: 0`

⚠️ **함정 — `Cfg.CanEdit:1` (체크박스 위해) 일괄 설정 시 데이터 컬럼도 편집 가능 상속**

XFDL 원본이 `griduserproperty="checkboxall"` + 데이터 Cell 들은 모두 `edittype` 미지정인 그리드(= 체크박스만 편집 가능, 나머지는 read-only) 를 변환할 때, `Cfg.CanEdit:1` 만 설정하고 데이터 컬럼에 `CanEdit:0` 을 명시하지 않으면 모든 데이터 컬럼이 편집 가능 모드로 표시된다 (셀 클릭 시 입력창 열림, 셀 hover 시 편집 cursor).

```javascript
// ❌ 데이터 컬럼이 편집 가능하게 상속 — 사용자가 "수정 안 되는 컬럼이 수정되는 것처럼 보임" 보고
Cfg: { CanEdit: 1 },
Cols: [
  { Name: 'chk', Type: 'Bool', CanEdit: 1, Header: { Value: '', HeaderCheck: 1 } },
  { Header: '지역본부', Name: 'lhqrNm', Type: 'Text' },  // ← CanEdit 미지정 → Cfg 상속해 편집 가능
  { Header: '지점',     Name: 'brncNm', Type: 'Text' },
  // ...
]

// ✅ 옵션 A — 데이터 컬럼 전부 CanEdit:0 명시 (UISL0340M00 적용 방식)
Cfg: { CanEdit: 1 },
Cols: [
  { Name: 'chk', Type: 'Bool', CanEdit: 1, Header: { Value: '', HeaderCheck: 1 } },
  { Header: '지역본부', Name: 'lhqrNm', Type: 'Text', CanEdit: 0 },
  { Header: '지점',     Name: 'brncNm', Type: 'Text', CanEdit: 0 },
  // ...
]

// ✅ 옵션 B — Cfg.CanEdit:0 + 체크박스 컬럼만 CanEdit:1 (더 깔끔, 신규 변환 권장)
Cfg: { CanEdit: 0 },
Cols: [
  { Name: 'chk', Type: 'Bool', CanEdit: 1, Header: { Value: '', HeaderCheck: 1 } },
  { Header: '지역본부', Name: 'lhqrNm', Type: 'Text' },  // 상속 0 → read-only
  // ...
]
```

판정: 원본 xfdl 의 Cell 들이 모두 `edittype` 미지정 + 한두 컬럼만 체크박스/편집 가능 → 옵션 B. 이미 변환된 화면을 수정만 하는 경우 옵션 A 로 컬럼 단위 차단.

⚠️ **함정 — `Cfg.CanEdit:0` 은 최우선 전역 잠금 → `AddEdit`/`CanEditFormula`/셀 `setAttribute(CanEdit)` 를 전부 무력화**

`Cfg.CanEdit:0` 상태에서는 컬럼 `CanEdit:1` · `AddEdit:1` · `CanEditFormula` · 셀단위 `setAttribute(row,col,'CanEdit',1)` 가 **모두 먹히지 않아** `getCanEdit()` 가 항상 `0` 을 반환한다 (can-edit.md L19 *"Cfg 로 편집불가 사용 시 우선순위가 가장 높아 Cell/Row/Col CanEdit 은 먹히지 않음"*). 위 AddEdit/ChangeEdit 매트릭스나 "버튼 누른 행만 편집" 같은 **행/셀 단위 동적 편집을 쓰려면 반드시 `Cfg.CanEdit:1`** 로 켜야 한다 (`Cfg.CanEdit:0` 은 그리드 전체가 영구 read-only 일 때만).

→ 그래서 위 옵션 A/B 는 단순 취향이 아니다. **동적 편집(신규행/명칭변경/AddEdit/formula 등)이 하나라도 있으면 옵션 A(`Cfg.CanEdit:1` + 데이터컬럼 `CanEdit:0`) 필수**. 옵션 B(`Cfg.CanEdit:0`)는 순수 read-only + Bool 체크박스만 있는 그리드에 한정. (3회 삽질 사례: `Cfg.CanEdit:0` 둔 채 AddEdit/setAttribute 로 신규행 편집 시도 → `getCanEdit=0` 으로 전부 잠김. `Cfg.CanEdit:1` 로 바꾸자 해결.)

⚠️ **함정 — "버튼 누른 *그 행만* 편집"(예: [명칭변경]) 은 `AddEdit`/`ChangeEdit` 로 표현 불가 → 셀단위 `setAttribute`**

`AddEdit`/`ChangeEdit` 는 행 *상태*(Added/Changed) 기반이라 "사용자가 버튼으로 선택한 임의의 한 행만 편집 해제" 를 못 한다 (`ChangeEdit:1` 로 하면 useYn 토글 등 *모든* 변경행이 같이 풀려 버림). 원본 `edittype="expr: getRowType==2 || modYn=='Y' ? text : none"`(신규행 + 버튼선택행만 편집) 패턴은 컬럼 `CanEdit:0` + 핸들러 셀단위 `setAttribute` 로:

```javascript
Cfg: { CanEdit: 1 },                                        // ★ 0 이면 아래 setAttribute 무력화
Cols: [{ Name: 'rprsCustNm', Type: 'Text', CanEdit: 0 }],   // 조회행 잠금 (기본)

// 행추가 — addRow 직후 그 행 셀만 편집 해제 (Cell > Col 우선순위)
const newRow = sheet.addRow({ next: sheet.getFirstRow(), init: { useYn: 'Y' } })
sheet.setAttribute(newRow, 'rprsCustNm', 'CanEdit', 1, 1)   // 5번째 인자 render=1

// [명칭변경] 버튼 — 포커스 행 그 셀만 해제
const row = sheet.getFocusedRow()
sheet.setAttribute(row, 'rprsCustNm', 'CanEdit', 1, 1)
```
(UISL9001P00 적용. 신규행만 편집이면 `AddEdit:1, ChangeEdit:0` 로 충분 — 위 매트릭스 참조.)

⚠️ **함정 — `Type:'Enum'` + `Required:1` 조합 시 `firstChild undefined` 오류**

Enum 컬럼에 `Required:1` 추가하면 `SheetClick → ActionStartEdit → StartEdit` 경로에서 dropdown DOM 빌드 시 죽는다. `Required:1` 은 `Type:'Text'` 컬럼에서만 안전 (UILM1074M00 검증).

```javascript
// ❌ Enum + Required:1 → 셀 클릭 시 Uncaught TypeError: Cannot read properties of undefined (reading 'firstChild')
{ Name: 'entsInstCd', Type: 'Enum', EnumKeys: '|...', Required: 1 }

// ✅ Enum 컬럼 필수 표시 — i18n 헤더 텍스트에 ★ prefix
//    (HeaderStyle: 'cell-essential' 은 우리 프로젝트에 정의 안 된 가짜 클래스 — 별표 안 보임)
{ Name: 'entsInstCd', Type: 'Enum', Header: t('grid.header.entsInstCd') /* "★ 위탁기관" */ }
// + 저장 검증은 handleSaveClick 의 커스텀 validation 으로 처리
```

⚠️ **함정 — 행단위 `setAttribute(row, col, 'EnumKeys', ...)` 의 빈약 옵션이 dropdown DOM 빌드 죽임**

cascade enum (위탁기관→학부 등) 에서 매칭 결과 0~1건일 때 `keys='|'`/`labels='|'` 1항목짜리를 행 단위로 setAttribute 적용하면 IBSheet8 가 dropdown 첫 자식 노드를 못 찾아 firstChild 오류. 가드 필수:

```javascript
const applyChildEnumForRow = (sheet, row) => {
  const parentCd = sheet.getValue(row, 'parentCd')
  const opts = getChildOptionsFor(parentCd)
  // ✅ 매칭 2건 미만이면 컬럼 마스터(전체 풀) 로 폴백 — 행단위 적용 안 함
  if (opts.length < 2) return
  const keys = `|${opts.map(o => o.code).join('|')}`
  const labels = `|${opts.map(o => o.name || o.code || ' ').join('|')}`
  sheet.setAttribute(row, 'childCd', 'EnumKeys', keys, 1)
  sheet.setAttribute(row, 'childCd', 'Enum', labels, 1)
}
```

⚠️ **함정 — `onStartEdit` 안에서 행단위 `setAttribute` 호출 금지**

dropdown 진입 직전 race 회피 목적으로 onStartEdit 안에 행단위 setAttribute 를 넣으면 위 함정 (매칭 0~1건 행) 과 결합되어 매번 firstChild 오류. 행단위 적용은 `onAfterChange` (값 변경 시점) 에서만 호출하고 onStartEdit 은 가드 로직만.

### 셀 배경색/CSS 클래스 동적 적용 — `'Class'` (CSS) / `'Color'` (행 단위 배경)

원본 XFDL `cssclass="expr:..."` (조건부 셀 강조 — 노란 배경 등) 변환 패턴. IBSheet8 공식 setAttribute 속성을 사용한다.

```javascript
// ✅ 셀 단위 CSS 클래스 (XFDL `cssclass="expr:colA=='' ? 'cell_BgYellow' : ''"` 대응)
//    nexacro-compat.css 의 .cell_BgYellow { background:#fffacd } 가 그대로 적용.
sheet.setAttribute(row, 'colName', 'Class', 'cell_BgYellow', 0)
sheet.renderBody()  // setAttribute 후 즉시 DOM 반영하려면 renderBody 호출 필요

// ✅ 행 단위 배경색
sheet.setAttribute(row, undefined, 'Color', '#fffacd', 0)
```

⚠️ **함정 — `'CellBackColor'` 속성명은 IBSheet8 비공식 (IBSheet7 잔재)**

`SetCellBackColor` 는 **IBSheet7 함수**이고, IBSheet8 에서는 **`Color` (행 단위)** 또는 **`Class` (셀 CSS)** 속성으로 대체됨 (`ibsheet7-migration.md` 표 336). `setAttribute(row, col, 'CellBackColor', '#fffacd', 0)` 로 호출하면 일부 환경에서 조용히 미동작 — 콘솔 에러 없이 셀 배경만 안 칠해지는 회귀.

```javascript
// ❌ 비공식 속성명 — 환경 따라 무시됨
sheet.setAttribute(row, 'colName', 'CellBackColor', '#fffacd', 0)
// ✅ 공식 속성 — Class (셀 CSS) 또는 Color (행)
sheet.setAttribute(row, 'colName', 'Class', 'cell_BgYellow', 0)
```

회귀 사례: UILM5021M00 변환 시 좌측 위탁기관 그리드 첫 행 "전체" 위탁기관명 셀 노란 배경이 안 칠해진 함정 — 비공식 `CellBackColor` 사용해서. `Class` 로 교체 후 정상 표시.

### 저장 — `getSaveJson()` + `STATUS` → `_rowtype` 매핑

IBSheet8 의 `getSaveJson()` 은 옵션 없이 호출 시 `saveMode:2` (default) — Added/Changed/Deleted 변경 행만 추출한다. 백엔드가 `_rowtype: 'I'/'U'/'D'` 컨벤션을 쓴다면 결과 행의 `STATUS` ('Added'/'Changed'/'Deleted') 를 매핑해야 한다.

```javascript
const saveJson = sheet.getSaveJson()
if (!saveJson) return
if (saveJson.Code) return  // RequiredError(IBS010) 등 IBSheet 자체 오류 — 메시지/포커스 IBSheet 가 처리
const saveRows = saveJson.data ?? []
if (saveRows.length === 0) {
  alert(t('msg.noChange'))   // AS-IS msgId 05926
  return
}
// STATUS → _rowtype 매핑 (AS-IS Nexacro :U flag 백엔드 컨벤션)
for (const r of saveRows) {
  r._rowtype = r.STATUS === 'Added' ? 'I' : r.STATUS === 'Changed' ? 'U' : 'D'
}

// 필수 검증 — I/U 만 (Delete 는 검증 제외)
for (const row of saveRows) {
  if (row._rowtype !== 'I' && row._rowtype !== 'U') continue
  if (!row.cntrCd) { alert(t('msg.requiredField', { field: t('search.cntr') })); return }
}

const ok = await confirm(t('msg.saveConfirm'), { title: t('msg.saveConfirmTitle') })
if (!ok) return
await dsRequest(SVC_SAVE, { ds_smplCstdUnitBasc: saveRows })
```

⚠️ **함정 — `getSaveJson({ Mode: 1 })` 의 `Mode` 옵션은 잘못된 키명**이다 (실제는 `saveMode`). 잘못된 옵션은 무시되고 default `saveMode:2` 로 동작하지만, **IBSheet8 ko.js 기본 STATUS 가 `'Added'/'Changed'/'Deleted'`** 이라 `_rowtype === 'I'/'U'/'D'` 필터 결과가 0이 된다 → PUT body 빈 배열 → 200 OK 처럼 보이지만 실제 저장 안 됨. STATUS 직접 매핑이 안전.

### 무한 스크롤 페이징 — `loadSearchData({ append: 1 })` + `onVScrollEndPoint` + `onScroll` 폴백

큰 데이터셋(예: 387,803 건)을 100건씩 페이징하며 스크롤 바닥 도달 시 다음 페이지 append. UILA0074M00 ScrollPage 패턴.

```javascript
const pageStateRef = useRef({ totalCount: 0, nowPage: 1, bNext: true, loading: false, loaded: 0 })

const fn_search = useCallback(async (isFirst: boolean = true) => {
  const state = pageStateRef.current
  if (state.loading) return
  if (!isFirst && !state.bNext) return
  if (isFirst) { state.nowPage = 1; state.bNext = true; state.loaded = 0 }
  state.loading = true
  try {
    const result = await dsRequest({ ...SVC_SEARCH, url: `${url}?pageIndex=${state.nowPage}&pageSize=100&...` }, {})
    if (!isApiSuccess(result)) { if (isFirst) sheet.loadSearchData({ data: [], sync: 1 }); state.bNext = false; return }
    const rows = result.outDs.ds_xxx ?? []
    const total = ... // pagination.totalDataCount 또는 messageContent 정규식 추출
    state.totalCount = total
    setTotalCount(total)
    if (isFirst) sheet.loadSearchData({ data: rows, sync: 1 })
    else sheet.loadSearchData({ data: rows, sync: 1, append: 1 })   // ← append:1 누적 추가
    state.loaded += rows.length
    state.nowPage += 1
    if (state.loaded >= total || rows.length === 0) state.bNext = false
  } finally { state.loading = false }
}, [...])

// fnSearchRef — Events closure 함정 회피
const fnSearchRef = useRef(fn_search)
useEffect(() => { fnSearchRef.current = fn_search }, [fn_search])

// IBSheet Events
Events: {
  onVScrollEndPoint: (evt) => {
    if (!evt.vpos) return                  // vpos=0 → 최상단 (무시)
    void fnSearchRef.current(false)        // 다음 페이지 append
  },
  // onScroll 폴백 — onVScrollEndPoint 가 append 후 재발동 안 하는 케이스 대비
  onScroll: (evt) => {
    if (!evt.vpos) return
    const state = pageStateRef.current
    if (state.loading || !state.bNext) return
    const scrollEl = findScrollEl(gridContainerRef.current) // overflow-y auto/scroll 인 엘리먼트
    if (!scrollEl) return
    const remaining = scrollEl.scrollHeight - scrollEl.clientHeight - scrollEl.scrollTop
    if (remaining <= 4) void fnSearchRef.current(false)
  },
}
```

⚠️ **프로젝트 정책 — 금지 옵션**: `Col.RelWidth` / `Cfg.IgnoreFocused: 1` / `Cfg.SearchMode: 1`. `SearchMode: 0`/`2` + `append: 1` 은 표준 패턴 (위 코드). 상세는 SKILL.md "Cfg.SearchMode 정책" 섹션.

### 변경 롤백 API — `reset()` 은 **없다**

Nexacro `pDs.reset()` (모든 변경사항 롤백) 을 IBSheet8 에서 호출해도 **no-op** 된다 (존재하지 않는 메서드). 용도별로 아래 API 를 사용한다.

| 목적 | IBSheet8 API | 비고 |
|------|--------------|------|
| 단일 행 값만 원본으로 복구 (Changed 행) | `sheet.revertRow(row, render)` | `render=1` 즉시 반영. `Added` 행에는 의미 없음 |
| 단일 신규행 물리 제거 (Added 행) | `sheet.removeRow(row)` | DOM 에서 즉시 사라짐 |
| 시트 전체 변경 사항 일괄 롤백 | `sheet.revertData(remainAddRow)` | `remainAddRow=false` 면 Added 제거 + Changed 원복 / `true` 면 Added 유지 |
| 저장 성공 후 Added·Changed·Deleted 마킹 해제 | `sheet.acceptChangedData()` | 변경사항을 "정상 상태" 로 확정 |

```javascript
// 원본 fn_checkSelectChange 의 "변경내용 버리고 이동" 처리
if (orow.Added) {
  sheet.removeRow(orow)          // 신규행이면 제거
} else if (orow.Changed) {
  sheet.revertRow(orow, 1)       // Changed 면 원본값 복구
}
```

### `removeRow` 는 인접 행으로 자동 포커스 이동 → `onBeforeFocus` 재발화

포커스가 잡힌 행을 `sheet.removeRow(row)` 로 제거하면, IBSheet 가 인접 행으로 **자동으로 포커스를 이동**시키며 그 과정에서 `onBeforeFocus` / `onFocus` 가 재발화된다. `onBeforeFocus` 가드가 외부 ref/state (예: 폼 dirty 플래그) 를 검사하면, removeRow **이전에** 그 ref 를 동기적으로 clean 해 두지 않으면 가드가 다시 발동해 confirm 이 한 번 더 뜨는 등의 이중 이벤트가 생긴다.

```javascript
// ❌ 잘못 — confirm "예" 후에도 confirm 이 한 번 더 뜸
onBeforeFocus: (evt) => {
  if (formDirtyRef.current) {
    confirm('이동?').then((ok) => {
      if (!ok) return
      sheet.removeRow(orow)        // ← 자동 포커스 이동 → onBeforeFocus 재발화
      // 이 시점 formDirtyRef 가 아직 true 면 confirm 또 뜸
      sheet.focus(targetRow)
    })
    return true
  }
}

// ✅ 올바름 — removeRow 이전에 dirty ref 를 동기 클린
onBeforeFocus: (evt) => {
  if (formDirtyRef.current) {
    confirm('이동?').then((ok) => {
      if (!ok) return
      formDirtyRef.current = false  // ← 동기 클린 (state 가 아닌 ref)
      sheet.removeRow(orow)         // 재발화한 onBeforeFocus 가드 통과
      sheet.focus(targetRow)
    })
    return true
  }
}
```

또는 `focus()` 호출 측에서 `ignoreEvent=1` 을 줄 수 있는 경로(직접 포커스 지정)는 그쪽으로, `removeRow` 가 트리거하는 자동 포커스 이동 경로는 ref 동기 클린으로 처리한다 (removeRow 자체에는 ignoreEvent 옵션이 없다).

### `focus(row, col, pagepos, ignoreEvent, triggerOnFocus)` — 프로그램적 이동 시 이벤트 차단

프로그램 코드에서 `focus()` 를 호출하면 `onBeforeFocus` / `onFocus` 가 다시 발화되어 재진입·무한루프가 생길 수 있다. `ignoreEvent=1` 로 이벤트를 건너뛰고, 상세 반영 등은 수동으로 처리한다.

```javascript
sheet.focus(target, 'colName', undefined, 1)  // 이벤트 차단
applyDetailManually(target)                   // onFocus 가 안 뜨므로 직접 갱신

// 이미 포커스된 셀을 다시 포커스했을 때도 이벤트를 강제 발생시키려면 triggerOnFocus=1
sheet.focus(sameRow, 'colName', undefined, 0, 1)
```

⚠️ **함정** — `ignoreEvent=1` 은 `onBeforeFocus` 뿐 아니라 **`onFocus` 까지 막는다**. 상세 폼이 `onFocus` 의 `setDetailForm(rowValues)` 로 채워지는 화면에서 confirm 확정 후 `sheet.focus(target, ..., 1)` 을 호출하면 새 row 가 시각적으로만 이동하고 **상세 폼은 빈 채로 남는다**.

해결 — `ignoreEvent` 대신 **bypass 플래그** 패턴: `onBeforeFocus` 진입 직후 플래그를 검사해 한 번만 통과시키고 소비, `onFocus` 는 정상 발화시켜 상세 폼 자동 갱신.

```javascript
const bypassBeforeFocusRef = useRef(false)

// onBeforeFocus 진입 직후 한 번만 통과
onBeforeFocus: (evt) => {
  if (bypassBeforeFocusRef.current) {
    bypassBeforeFocusRef.current = false   // 한 번 소비
    return                                  // 통과 (return true 아님!)
  }
  // ...dirty 가드 + confirm
  void confirm('...').then((ok) => {
    if (!ok) return
    // 변경 정리(removeRow / revertRow) 후
    bypassBeforeFocusRef.current = true     // 다음 onBeforeFocus 한 번 통과
    sheet.focus(target)                     // ignoreEvent 없이! → onFocus 정상 발화 → 상세 폼 갱신
  })
  return true                                // 즉시 차단
}

// onFocus 는 정상 발화 → 상세 폼 setDetailForm 동작
```

**return 의미 재확인**: `return true` = 이동 차단 / `return false` 또는 `return` (undefined) = 정상 진행.

### 자식 그리드 `onSearchFinish` 후 부모 그리드로 포커스 복귀

Master/Detail 구조에서 부모(Master) 행 클릭 → 자식(Detail) 그리드 재조회가 발생하면, 자식의 `loadSearchData` 가 자동으로 자체에 포커스를 잡아 키보드 흐름이 자식으로 옮겨간다. 사용자가 Master 그리드에서 방향키로 행을 빠르게 훑어보던 중이라면 끊김이 거슬린다.

자식 그리드의 `onSearchFinish` 에서 부모 그리드의 현재 포커스 행으로 다시 `focus()` 하여 흐름을 유지한다.

```javascript
// 자식(항목) 그리드 옵션
Events: {
  onSearchFinish: () => {
    const parent = parentSheetRef.current
    if (!parent) return
    const focused = parent.getFocusedRow()
    if (focused) parent.focus(focused)
  },
}
```

- 부모 시트가 마운트되지 않은 상황(초기 로드)을 위해 `if (!parent) return` 가드 필수
- 자식 시트에 그대로 포커스가 머물러야 하는 화면(상세 그리드를 사용자가 직접 편집) 에는 적용하지 않는다 — Master 행 훑기 + Detail 읽기 시나리오에만 사용
- 부모로 복귀하는 `focus()` 는 `onFocus` 를 다시 발화시키므로, 부모의 `onFocus` 에 `evt.row === evt.orow` 가드가 있어야 cascade 무한루프를 막을 수 있다 (이미 표준 가드)

### IBSheet 인덱스 vs 외부 Dataset 인덱스

정렬/필터가 적용되면 `sheet.getRowIndex(row)` 는 외부 Dataset 의 원본 인덱스와 어긋날 수 있다. 수정/삭제 대상 row 를 외부 Dataset 에 반영할 때는 **고유 키(id 컬럼)** 로 선형 매칭해야 안전하다.

```javascript
// 잘못 — IBSheet 인덱스를 Dataset 인덱스로 사용
const idx = sheet.getRowIndex(sheet.getFocusedRow())
ds.deleteRow(idx)   // 엉뚱한 row 삭제 가능

// 권장 — 고유 키로 매칭
const row = sheet.getFocusedRow()
const targetId = sheet.getValue(row, 'id')
let nRow = -1
for (let i = 0; i < ds.rowCount; i++) {
  if (String(ds.getColumn(i, 'id')) === String(targetId)) { nRow = i; break }
}
if (nRow >= 0) ds.deleteRow(nRow)
```

## Row Context Menu (`Def.Row.Menu`) — 우클릭 커스텀 메뉴

행 영역을 우클릭했을 때 뜨는 컨텍스트 메뉴를 `Def.Row.Menu.Items` 로 정의하고, 항목 선택 시 `Def.Row.Menu.OnSave` 콜백이 호출된다. 전역 `IBSheet.onBeforeCreate` 훅에서 모든 시트에 기본 메뉴를 주입하는 것이 일반적이다 (프로젝트 예: `src/lib/ibsheet/onBeforeCreate.ts`).

### `OnSave` 콜백 시그니처

```javascript
Def: {
  Row: {
    Menu: {
      Items: [
        { Text: '고정', Name: 'useFixCol' },
        { Name: '*-' },                               // 구분선
        { Text: '엑셀', Name: 'export' },
        { Text: '다국어', Name: 'multilingual' },      // 프로젝트 전용 커스텀 항목
      ],
      OnSave: function (item) {
        // this.Sheet    — 클릭된 시트 인스턴스 (IBSheetInstance 전 API 사용 가능)
        // item.Name     — 선택된 항목의 Name
        // item.Owner.Row — 우클릭된 행 (IBRow) — this.Sheet.getValue(row, col) 로 값 조회
        // item.Owner.Col — 우클릭된 컬럼 (IBCol)
        switch (item.Name) {
          case 'useFixCol':
            this.Sheet.setFixedLeft(this.Sheet.getColIndex(item.Owner.Col) + 1)
            break
          case 'export':
            this.Sheet.exportData({ fileName: 'grid.xlsx' })
            break
          case 'multilingual':
            // 커스텀 분기 — 클릭한 행의 pk 를 읽어 외부 시스템(팝업 등) 으로 전달
            const menuId = this.Sheet.getValue(item.Owner.Row, 'menuId')
            // ... 외부 호출
            break
        }
      },
    },
  },
}
```

### React 환경에서의 한계 — 콜백은 React 트리 외부

`OnSave` 는 IBSheet 내부가 `Function.prototype.call` 로 invoke 하는 **일반 함수**. React 훅이나 props 를 쓸 수 없다. 이 콜백에서 React 상태를 바꾸거나 팝업을 열려면 전역 store (Zustand 등) + 최상위 Host 컴포넌트 패턴을 써야 한다. 패턴 상세: `nexacro-to-react/popup.md` → "React 외부 콜백에서 팝업 트리거 — 전역 store + Host 패턴".

### 단일 시트에만 커스텀 메뉴 추가

전역 `onBeforeCreate` 가 기본 `Def.Row.Menu` 를 이미 세팅한다면, 개별 시트 옵션에서는 `Def.Row.Menu` 를 재정의하지 말고 **전역 훅 쪽에 `Cfg.xxx` 플래그로 조건부 항목 추가**하는 패턴을 쓴다 (예: `Cfg.multilingual: 1` → 전역 훅이 이 플래그를 읽고 "다국어" 항목을 `Items` 에 push). 시트 단위에서 `Def.Row.Menu` 를 덮어쓰면 기본 메뉴(고정/필터/엑셀 등) 가 통째로 사라진다.

---

## API 시그니처 함정 — 케이스에 민감

IBSheet 의 키워드는 **케이스 sensitive** + 잘못된 키는 silent ignore 라 동작 안 함을 발견 어렵다.

### `addRow` 의 `init` 키 — **소문자**

```js
// ✅ 정답 (매뉴얼)
sheet.addRow({ init: { col1: 'v1', col2: 'v2' } })

// ❌ 함정 — 대문자 'Init' 은 무시. 빈 행만 추가됨
sheet.addRow({ Init: { col1: 'v1' } })  // ← col1 미적용
```

⚠️ **함정** — `Init` (대문자) 사용 시 IBSheet 가 키를 모르고 **객체 통째로 ignore**. 빈 행만 add 됨. Cols 의 Enum 매핑도 데이터가 없어 빈 셀로 표시. 디버깅 어려움.

### `getRowsByStatus` 인자 — 영문 단어

```js
// ✅ 정답 (매뉴얼)
sheet.getRowsByStatus('Added')           // 신규 추가
sheet.getRowsByStatus('Changed,!Added')  // 수정 (신규 제외)
sheet.getRowsByStatus('Deleted')         // 삭제

// ❌ 함정 — Nexacro 코드 'I'/'U'/'D' 사용 시 빈 배열
sheet.getRowsByStatus('I')  // ← 빈 배열
sheet.getRowsByStatus('U')  // ← 빈 배열
```

⚠️ **함정** — Nexacro `getRowType` 의 숫자 (1/2/4/8) 또는 'I'/'U'/'D' 알파벳을 그대로 쓰면 빈 배열. ASIS xfdl 의 `getRowType==2` 매핑 시 `'Added'` 로 변환.

### `BoolValue` 라는 속성은 없음

```ts
// ✅ 정답 — 서버 응답이 string '1'/'0' 인 경우
{ Type: 'Bool', Name: 'chk1', TrueValue: '1', FalseValue: '0' }

// ❌ 함정 — BoolValue 는 존재하지 않는 속성 → silent ignore
{ Type: 'Bool', Name: 'chk1', BoolValue: '1|0' }
```

⚠️ **함정** — `BoolValue` 작성 시 IBSheet 가 ignore → default 동작 (number 1/0 매핑). 응답이 string '0' 이면 JS truthy 평가로 **모든 행 체크된 상태**로 표시. 응답 타입이 number 아닌 경우 반드시 `TrueValue`/`FalseValue` 명시.

### `Color` 속성 = 셀 **배경색** (글자색 아님)

```ts
// ✅ 정답 — 셀 배경색 분기
ColorFormula: (fr) => fr.Row.lgcyLmbCd === 'BGRL' ? '#B3DDF2' : ''

// ✅ 글자색은 별도 — TextColor / TextColorFormula
TextColorFormula: (fr) => fr.Row.emgcYn === 'Y' ? '#dc2626' : ''
```

⚠️ **함정** — `ColorFormula` 가 글자색 변경하는 줄 알고 사용하면 셀 배경이 바뀜. 매뉴얼 (`props/col/color.md`) 명시: "열의 배경색상을 설정합니다". 글자색은 `TextColor` / `TextColorFormula`.

---

## IBRow 객체 직렬화 함정 — Circular JSON

`getDataRows()` / `getSelectedRows()` 가 반환하는 row 객체는 IBSheet 내부 LinkedList 구조 (`previousSibling` / `nextSibling` / `parentNode`) 를 갖는다.

```ts
// ❌ 함정 — JSON.stringify 시 "Converting circular structure" 에러
const ack = rows.map(row => ({
  ...row,                    // ← previousSibling 포함 → 순환참조
  prcsStatCd: '9',
}))
await dsRequest(SVC_DELETE, { ds_ack: ack })
// → axios.transformRequest 에서 TypeError 발생

// ✅ 정답 — 명시 컬럼만 추출
const ack = rows.map(row => ({
  regDt: toYmd(row.regDt),
  regNo: toStr(row.regNo),
  prcsDeptCd: toStr(row.prcsDeptCd),
  // ... 필요 컬럼만 ...
  prcsStatCd: '9',
  _rowtype: 'N',
}))
```

⚠️ **함정** — `...row` spread 절대 금지. 반드시 ASIS `ds_xxx_ack` 컬럼 정의(xfdl `<Dataset>` `<ColumnInfo>`)를 참조하여 **명시 컬럼만** 추출. ASIS `copyRow(nRow, ds_src, srcIdx)` 의 React 매핑 = 컬럼 명시 복사.

---

## setValue patch 후 dirty flag 클리어 — `acceptChangedData()`

서버 저장 후 응답 데이터를 시트에 부분 patch 할 때 (fnSearch 재조회 대신 `acceptChanges` 패턴) `setValue` 호출이 IBSheet 의 Changed 상태를 마킹한다 → 수정 행 시각 표시 (배경색) 남는다.

```ts
// 응답 데이터로 row 부분 patch
for (const [col, val] of Object.entries(updatedRow)) {
  sheet.setValue?.(target, col, val, 1)  // 4번째 1 = refresh
}

// ✅ patch 직후 Changed 상태 클리어 (서버 저장 완료 신호)
sheet.acceptChangedData?.()
```

⚠️ **함정** — `setValue` patch 만 하고 `acceptChangedData` 누락 시 시각적으로 "수정됨" 마킹 (행 배경 노랑/하늘색 등) 이 남아 사용자 혼란. 서버 저장 완료 후 dirty flag 명시 클리어.

---

## IBSheet 자체 로딩 오버레이 (`IBLoadingOverlay`) 깜빡임 차단

데이터 로드 시 IBSheet 가 `<div class="IBLoadingOverlay">` 자체 spinner 를 마운트한다. 다수 그리드 동시 로드 시 + 그리드 컨테이너 `position: static` 인 경우 — overlay 가 nearest positioned ancestor (body) 기준 absolute 마운트되며 viewport 밖 좌표 (예: `top: 1271px`) 로 그려져 body scrollbar 가 깜빡 등장/사라짐.

```css
/* src/index.css 또는 전역 CSS */
.IBLoadingOverlay { display: none !important; }
```

⚠️ **함정** — 행 클릭/체크박스 토글 등 단순 통신에도 가로/세로 scrollbar 가 깜빡임. 원인은 IBSheet 의 자체 로딩 spinner overlay. CSS 강제 숨김으로 차단. dsRequest 자체의 로딩 표시는 별도 UX (toast / 글로벌 spinner) 로 제공.

---

## 동적 옵션 갱신 — `setAttribute(undefined, colName, attr, value, refreshFlag)`

응답 데이터로 Enum/EnumKeys 등 컬럼 옵션 갱신 시 `setCol` 이 아닌 **`setAttribute`** 사용. 두 번째 인자 `undefined` = "전체 행 적용".

```ts
// 응답에서 부서 목록 받아 Enum 컬럼 옵션 갱신
const codes = `|${rows.map(r => r.sclfCd).join('|')}`   // 리딩 '|' 필수
const names = `|${rows.map(r => r.itemVal05).join('|')}`
sheet.setAttribute(undefined, 'prcsDeptCd', 'EnumKeys', codes, 0)
sheet.setAttribute(undefined, 'prcsDeptCd', 'Enum', names, 1)  // 마지막에 refresh
```

⚠️ **함정 (2 가지)**:
- **리딩 `|` 필수** — `'A|B|C'` 는 첫 글자 'A' 가 구분자로 해석됨 → 매뉴얼 명시 `'|A|B|C'`.
- **`setCol` 은 존재하지 않는 메서드** — `setAttribute` 사용. 매뉴얼 `column-type-property.md` 참조.

---

## React 통합 함정

### `IBSheetEvents` 핸들러는 createSheet 시점 closure 캐시 — ref 패턴 필수

`options.Events.onAfterClick / onFocus / onDblClick` 같은 핸들러는 IBSheet 인스턴스 생성 시 한 번만 캡쳐된다. 이후 React state 가 바뀌어도 핸들러 안의 closure 는 **첫 렌더 당시의 값** 을 그대로 본다. `useState` setter 또는 외부 `selectedRow` 같은 state 가 안 보이는 NPE / "행 정보 안 들어옴" 증상이 발생한다.

증상: 1번 행 선택은 잘 되는데 2~4번 행 클릭하면 우측 폼 binding 이 안 됨 (handler 안의 `list` 가 `[]` 로 캐시).

해결 — handler 를 ref 에 보관하고 호출 직전 `current` 로 dereference:

```tsx
const handleRowSelectRef = useRef(handleRowSelect)
useEffect(() => {
  handleRowSelectRef.current = handleRowSelect
}, [handleRowSelect])

const options: IBSheetOptions = useMemo(() => ({
  ...
  Events: {
    onAfterClick: (evt) => {
      if (!evt.row) return
      const sheet = evt.sheet as { getDataRows?: () => unknown[] }
      const idx = sheet.getDataRows?.().indexOf(evt.row) ?? -1
      handleRowSelectRef.current(idx)  // ← 최신 함수 호출
    },
  },
}), [])  // deps 비워도 OK — ref 가 fresh
```

깊은 우회법(`[list, onSelect]` 를 deps 에 추가) 은 매 state 변화마다 sheet 재생성 → 데이터 재로드 → 시각 깜박임을 유발하므로 **금지**.

### shadcn Dialog `open=false` 시 IBSheetReact unmount — 다음 open 에서 init 흐름 재구성 필수

`<Dialog open={false}>` 가 되면 그 안의 `<IBSheetReact>` 는 통째로 unmount. `sheetRef.current` 도 `null`. 다음 open 시 새 인스턴스가 생기고 `onRenderFirstFinish` 가 다시 발화한다. 그러나 부모 컴포넌트의 `ready` state 는 `true` 그대로일 수 있고, 첫 mount 때 던진 `loadSearchData` 도 무용지물(인스턴스 사라짐). 두 번째 open 에서 데이터가 안 들어오거나 "확인" 버튼이 빈 selectedRow 로 호출되는 증상.

해결 — 4가지 안전장치 동시 적용:

```tsx
// 1) open=false 시 모든 sheet 관련 state 리셋
useEffect(() => {
  if (!open) {
    setReady(false)
    pendingRef.current = null
    sheetRef.current = null  // 명시적으로 null
    setRows([])
    setSelectedRow(null)
    return
  }
  void doSearch()
}, [open])

// 2) data 가 바뀌면 항상 pendingRef 에 저장 (sheet/ready 와 무관)
useEffect(() => {
  pendingRef.current = rows
  if (sheetRef.current && ready) {
    sheetRef.current.loadSearchData({ data: rows, sync: 1 })
  }
}, [rows, ready])

// 3) onRenderFirstFinish — ready true + pendingRef flush
const options = useMemo(() => ({
  ...
  Events: {
    onRenderFirstFinish: (evt) => {
      setReady(true)
      const data = pendingRef.current ?? rows
      if (data?.length) {
        evt.sheet?.loadSearchData({ data, sync: 1 })
        pendingRef.current = null
      }
    },
    // 4) onAfterClick — closure 캐시 우회: sheet.getValue 로 직접 읽기
    onAfterClick: (evt) => {
      const sheet = evt.sheet
      const cd = String(sheet.getValue?.(evt.row, 'cd') ?? '')
      const nm = String(sheet.getValue?.(evt.row, 'nm') ?? '')
      setSelectedRow({ cd, nm })  // rows[idx] 의존 X
    },
  },
}), [])
```

핵심: `pendingRef` + `onRenderFirstFinish` 의 fallback flush 가 두 번째 mount race 를 흡수. handler 는 `sheet.getValue` 로 직접 읽어 stale closure 회피.

### React state 의 시각 행 강조 — `loadSearchData` 후 `sheet.focus` 강제

`loadSearchData({ sync: 1 })` 직후 IBSheet 는 자동으로 첫 행을 highlight. React state 의 `selectedRow` 가 3행 이어도 시각상 1행이 강조됨. 좌측 그리드 ↔ 우측 폼 binding 이 어긋나 보이는 증상.

해결 — `useEffect[selectedRow, list]` 에서 `requestAnimationFrame` 으로 `focus` 강제:

```tsx
useEffect(() => {
  if (!selectedRow || list.length === 0 || !sheetRef.current) return
  const targetIdx = list.findIndex((r) => r.id === selectedRow.id)
  if (targetIdx < 0) return
  requestAnimationFrame(() => {
    const sheet = sheetRef.current
    if (!sheet) return
    const dataRows = sheet.getDataRows()
    const targetRow = dataRows[targetIdx]
    if (targetRow) {
      // 5번째 인자 false: onFocus 재발화 막아 loop 방지
      sheet.focus(targetRow, 'cntrNm', undefined, true, false)
    }
  })
}, [selectedRow, list])
```

주의: 우측 폼 편집 → React state 변경 → `loadSearchData` 재호출 → 첫 행 자동 highlight 회귀 사이클 발생. 편집 흐름에서 자동 첫 행 select 를 막으려면 별도 `skipAutoSelectRef` 가드 추가.

### Dialog (base-ui/Radix) 안 IBSheet — 키보드 ↑↓/Enter 수동 처리 필수

⚠️ **함정** — `@base-ui/react/dialog` (또는 Radix) 의 **focus trap** 이 IBSheet 의 자체 ActiveElement 점유를 방해. `sheet.focus(firstRow)` 명시 호출해도 `document.activeElement` 가 IBSheet 의 hidden input (`<input tabindex="-1">`) 으로 가긴 하지만, **IBSheet 의 내장 키보드 핸들러 (`onKeyDown` 포함) 가 발화 안 함**. 사용자가 행 클릭해도 ↑↓ 가 작동 안 함.

`IgnoreFocused` 옵션은 해결책 아님 — 단일 그리드/Dialog 안 그리드에는 옵션 자체 사용 금지. `2` 는 ActiveElement 더 안 가져가 역효과.

✅ **해결 — wrapper div 의 `onKeyDownCapture` 로 직접 ↑↓/Enter 처리**:

```tsx
<div
  className="flex-1 min-h-0"
  onKeyDownCapture={(e) => {
    const sheet = sheetRef.current
    if (!sheet) return
    // Enter — 행 선택 + 팝업 닫기
    if (e.key === 'Enter') {
      e.stopPropagation(); e.preventDefault()
      const focused = sheet.getFocusedRow?.()
      if (focused) handleSelectRow(focused)
      return
    }
    if (e.key !== 'ArrowUp' && e.key !== 'ArrowDown') return
    e.stopPropagation(); e.preventDefault()
    const rows = sheet.getDataRows?.() ?? []
    if (rows.length === 0) return
    const focused = sheet.getFocusedRow?.()
    const idx = focused ? rows.indexOf(focused as never) : -1
    const next = e.key === 'ArrowUp'
      ? rows[Math.max(idx - 1, 0)]
      : rows[Math.min(idx + 1, rows.length - 1)]
    if (next) sheet.focus(next as never)
  }}
>
  <IBSheetReact ref={sheetRef} options={sheetOptions} data={[]} style={{...}} />
</div>
```

추가 — `loadSearchData` 후 명시 `sheet.focus(rows[0])` 호출 (Dialog 첫 mount 시 ActiveElement 점유 유도). 단 이걸로는 키보드 핸들러까지 작동 안 하므로 위 수동 처리 필수.

> 사용자 보고 사례: UILM1078P02/P03 의 IBSheet 에서 ↑↓ 무반응. `IgnoreFocused:2` 시도 → 역효과. `initialFocus={false}` 로 Dialog focus trap 끄기 시도 → 다른 화면 input 자동 focus 영향. 결국 wrapper div onKeyDownCapture 로 수동 처리가 정답.

---

## 그리드 Enter 키로 셀/행 점프 (Nexacro `fn_*GridKeyEvent` 매핑) — 편집중 기본동작 차단 불가 → setTimeout 재포커스

Nexacro 그리드는 `addEventHandler("onkeyup", fn_*GridKeyEvent)` 로 Enter 시 셀/행을 커스텀 이동한다 (예: 병원검사코드 Enter → **다음행 씨젠검사코드** 셀로 점프하여 연속 입력). IBSheet8 기본 Enter 는 "다음행 **같은 컬럼**" 이라 컬럼 점프가 필요한 분기만 보정한다.

⚠️ **함정 — `onKeyDown` 리턴으로 편집중 Enter 기본동작을 막을 수 없다** (`events/on-key-down.md`: "편집 모드에서는 리턴을 통한 기본 동작을 막을 수 없습니다"). 즉 편집 셀에서 Enter 시 IBSheet8 의 기본 이동(편집종료 + 다음행 같은컬럼)을 차단 불가 → **기본 이동 후 `setTimeout(…,0)` 으로 목표 셀에 재포커스**.

```javascript
Events: {
  onKeyDown: (evt) => {
    if (evt.name !== 'Enter') return                   // onKeyDown name: 'A','Esc','Enter' …
    const sheet = evt.sheet
    const row = sheet.getFocusedRow()
    if (!row) return
    if (sheet.getFocusedCol() !== 'hospTstCd') return   // getFocusedCol() → 열이름(string)
    if (String(sheet.getValue(row, 'hospTstCd') ?? '').length === 0) return  // 원본 가드
    const nextRow = sheet.getNextRow(row)
    if (!nextRow) return
    window.setTimeout(() => {                            // 기본 이동(다음행 같은컬럼) 후 재포커스
      if (String(sheet.getValue(row, 'hospTstCd') ?? '').length === 0) return  // 중복체크로 비워졌으면 오이동 방지
      sheet.focus(nextRow, 'tstCd')
      sheet.startEdit(nextRow, 'tstCd')                  // 원본 showEditor(true) 대응
    }, 0)
  },
}
```

- `onKeyUp` 파라미터엔 현재 셀 정보가 없다(sheet/key/name/event/prefix만) → `getFocusedRow()`/`getFocusedCol()` 로 조회. `onKeyDown` 은 편집중에도 호출됨.
- IBSheet8 기본 Enter(다음행 같은컬럼)와 원본 분기가 **동일하면 별도 처리 불필요** (예: 마지막 입력 컬럼 Enter → 다음행 같은컬럼).
- ⚠ `setTimeout` 재포커스 타이밍·`startEdit` 편집 진입은 **dev 검증 필요** (기본 이동과 재포커스 순서가 환경 영향 가능).

참고 화면: `UIRC0210M.tsx` (병원검사코드 Enter → 다음행 씨젠검사코드 연속 입력).

## 그리드 Tab/Shift+Tab 이동 — 편집불가/Bool 셀 자동 건너뛰고 다음 편집셀 editmode (`Actions` 비공개 API)

원본 Nexacro 그리드는 Tab 시 편집 가능한 셀로만 이동(편집불가 컬럼 자동 skip)한다. IBSheet8 기본 Tab 은 편집불가 셀에도 멈추므로, 시트 인스턴스의 **`Actions` 객체**(키 입력 → action 표현식 매핑 테이블)를 런타임 주입해 동작을 바꾼다.

⚠️ `Actions` 는 **IBSheet8 비공개 API + `@ibsheet/interface` 타입 미노출** → `as unknown as { Actions?: Record<string, string> }` 우회 주입. 라이브러리 버전업 시 키워드/표현식이 바뀌면 회귀 위험 (UIRC0210M dev 실측 검증).

### Tab 키 4종 — 상태별 dispatch

| 키워드 | 발화 시점 |
| --- | --- |
| `OnTab` / `OnShiftTab` | **비편집** 상태에서 Tab / Shift+Tab |
| `OnTabEdit` / `OnShiftTabEdit` | **편집중**(셀 에디터 열림) Tab / Shift+Tab |

(전체 키워드 목록: `references/ibsheet-official-manual/appx/ibsheet8-actions.md` "Action Keyword" 표 — `OnTab`/`OnTabEnum`/`OnTabEdit` 등)

### 표현식 문법

action 값은 문자열 표현식이며 JS 로 평가된다:

- `,` 순차 실행 · `AND` 앞이 truthy면 다음 실행(체인) · `OR` 폴백 · `?:` 삼항
- `Sheet.속성`(예 `Sheet.TabStop`) / `Row.Kind` 참조 · `var x = …` JS 평가 가능
- 액션 키워드: `TabRightEdit`/`TabLeftEdit`(다음/이전 **편집가능** 셀로 이동), `TabRight`/`TabLeft`(단순 이동), `StartEdit`(편집 진입 시도 — 편집 가능하면 `true` 반환)

### 편집불가 컬럼 건너뛰고 다음 편집셀 editmode — 적용 표현식

```javascript
// src/lib/ibsheet/onBeforeCreate.ts — 모든 시트 공통 (onRenderFirstFinish 훅에서 주입)
const TAB_ACTION_RIGHT =
  'TabRightEdit AND StartEdit ? 1 : (TabRightEdit AND StartEdit ? 1 : (TabRightEdit AND StartEdit ? 1 : !Sheet.TabStop))'
const TAB_ACTION_LEFT =
  'TabLeftEdit AND StartEdit ? 1 : (TabLeftEdit AND StartEdit ? 1 : (TabLeftEdit AND StartEdit ? 1 : !Sheet.TabStop))'

function applyTabEditActions(sheet) {
  const actions = (sheet as unknown as { Actions?: Record<string, string> }).Actions
  if (!actions) return
  actions.OnTab = TAB_ACTION_RIGHT
  actions.OnShiftTab = TAB_ACTION_LEFT
}
```

- 의미: 다음 셀로 이동(`TabRightEdit`) → 편집 시도(`StartEdit`) 성공하면 종료, 실패(편집불가)하면 **한 칸 더 이동+편집** 반복. 3단계 nested = 연속 편집불가 **2개까지** skip, 그래도 안 되면 `!Sheet.TabStop`(시트 밖으로). 편집불가 컬럼이 3개 이상 연속인 시트면 단계 수를 늘려야 함.

⚠️ **함정1 — `Bool`(체크박스) 컬럼은 `StartEdit` 해도 커서 편집이 없다**: `Type:'Bool'` 은 클릭 토글만 있고 에디터 진입(`onStartEdit`)이 발화되지 않는다. 그래서 Tab 이 Bool 셀에 도달하면 "편집 시작"으로 체인이 이어지지 못하고 **거기서 멈춘다**(체크박스에 포커스 정지). 이게 사용자가 원하는 "체크박스에 멈춤" 동작과 일치.

⚠️ **함정2 — `OnTabEdit`/`OnShiftTabEdit`(편집중)까지 이 표현식으로 바꾸면 안 된다**: 편집셀에서 Tab 시 위 표현식이 `_CHK`(Bool 체크박스)도 "편집불가"로 보고 건너뛰어 **체크박스에 포커스가 안 멈춘다**(UIRC0210M 사용자 보고). → **`OnTab`/`OnShiftTab`(비편집)만 변경**하고 `OnTabEdit`/`OnShiftTabEdit` 는 IBSheet 기본 유지.

> 전역 주입 메커니즘(onBeforeCreate.ts 가 모든 시트 `onRenderFirstFinish` 를 오버라이드해 공통 동작 주입)은 `nexacro-to-react/ibsheet.md` "그리드 개인화(서버 DB) 자동 처리" 섹션 참조.

참고 화면: `UIRC0210M.tsx` (고객 검사코드 매핑 — _CHK + No(Seq) + 상태(읽기전용) 건너뛰고 씨젠검사코드 editmode).
