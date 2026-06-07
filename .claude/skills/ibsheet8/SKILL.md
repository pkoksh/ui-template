---
name: ibsheet8
description: "IBSheet8 그리드 라이브러리 개발 가이드. @ibsheet/react 의 <IBSheetReact ref={}/> 컴포넌트나 vanilla IBSheet.create() 로 그리드를 생성·수정·이벤트 처리할 때 반드시 사용. Cfg/Cols/Events 옵션 구조, loadSearchData/getSaveJson/getRowsByStatus, addRow/deleteRow/removeRow, Master-Detail cascade, Type:'Enum'/'Bool'/'Date'/'Int'/'Float' 컬럼, AddEdit/ChangeEdit/CanEdit 편집 매트릭스, onAfterChange/onSearchFinish/onFocus/onBeforeFocus/onRenderFirstFinish 이벤트, 트리 그리드, 무한 스크롤 페이징(append:1), Row Context Menu(Def.Row.Menu) 등 IBSheet8 관련 작업에 즉시 트리거. 'ibsheet', 'IB시트', '시트', '그리드 옵션', 'IBSheetReact', 'IBSheet.create', 'getSaveJson', 'loadSearchData', 'EnumKeys', 'getRowsByChecked' 표현이 등장하거나 IBSheetReact/Cfg/Cols/Events 식별자가 등장하면 로드. 단순 HTML <table>, MUI DataGrid, ag-Grid, TanStack Table 작업에는 사용하지 않음."
---

# IBSheet Development Guide

- IBSheet8 is a web grid component that can quickly display and edit large volumes of data.
- IBSheet8 is a different product from IBSheet7, and their usage differs.
- When converting IBSheet7 source code to IBSheet8, refer to .\references\integration\IBSheet7_to_IBSheet8_guide.md for guidance.

## Quick Start

```html
<!DOCTYPE html>
<html>
<head>
  <script src="ibsheet/ibsheet.js"></script>
  <script src="ibsheet/locale/ko.js"></script>
  <link rel="stylesheet" href="ibsheet/css/default/ibsheet.css">
</head>
<body>
  <div id="sheetContainer" style="width:100%; height:500px;"></div>
  <script>
    document.addEventListener("DOMContentLoaded", function() {
      IBSheet.create({
        id: "sheet", // window["sheet"] is created
        el: "sheetContainer",
        options: {
          Cfg: {},
          Cols: [
            { Header: "ID", Name: "id", Type: "Int", Width: 80 },
            { Header: "Name", Name: "name", Type: "Text", Width: 120 },
            { Header: "Amount", Name: "amount", Type: "Int", Width: 100, Format: "#,##0" }
          ],
          Events: {
            onRenderFirstFinish: function(evt) {
              // ibsheet8 creation complete
            }
          }
        },
        data: []
      });
    });
  </script>
</body>
</html>
```

## Core API

```javascript
// Load data
mySheet.loadSearchData({ data: jsonArray });

// Add/Delete rows
mySheet.addRow({ init: { name: "New" } });
var row = mySheet.getRowByIndex(10);
mySheet.deleteRow(row);

// Cell value manipulation
mySheet.setValue(row, "name", "value");
const value = mySheet.getValue(row, "name");

// Data extraction
const defaultSave = mySheet.getSaveJson();                  // saveMode 생략 = 2 (변경분만)
const changedData = mySheet.getSaveJson({ saveMode: 2 });   // Added/Changed/Deleted
const allRows    = mySheet.getSaveJson({ saveMode: 0 });    // 전체 데이터 (출력/엑셀/외부 전송용)
//  ⚠ `check:1` 같은 임의 옵션은 IBSheet8 매뉴얼에 없다. 정식 옵션은 saveMode / validRequired / showAlert 등.
//  ⚠ 서버 전송용 데이터 추출은 `getSaveJson({saveMode:0})` 사용. `getDataRows()` 결과를 직접
//     `JSON.stringify` 하면 row 객체의 sibling 체인(`previousSibling`/`nextSibling`/`childNodes`)
//     으로 circular reference 발생. saveMode:0 은 plain JSON 으로 직렬화.

// 변경 여부 빠르게 확인 (저장 진입 가드)
if (!mySheet.hasChangedData(1)) { /* "변경된 데이터가 없습니다." */ return }

// Reset status after save
mySheet.acceptChangedData();
```

## ⚠ 저장 변경분 추출은 `getSaveJson` — `getRowsByStatus` 따로 호출 시 중복 전송 사고

**실전 사고**: 행 1건 추가 + 텍스트 입력 후 저장 시 같은 행이 `_rowtype:'I'` + `_rowtype:'U'` 로 **두 번 전송**되었고 서버 정책에 따라 데이터 손실까지 발생.

원인: IBSheet 는 신규 추가 + 값 입력한 행에 **`Added=1` 과 `Changed=1` 을 동시 마킹**한다. `getRowsByStatus('Added')` 와 `getRowsByStatus('Changed')` 를 따로 호출하면 양쪽 모두에 잡혀 같은 행이 두 번 들어간다.

```javascript
// ❌ 금지 — 신규행이 Added/Changed 양쪽에 잡혀 중복
const added   = sheet.getRowsByStatus('Added')
const changed = sheet.getRowsByStatus('Changed')   // ← 신규행도 포함됨
const deleted = sheet.getRowsByStatus('Deleted')
const payload = [
  ...added.map(r => ({...buildRow(r), _rowtype:'I'})),
  ...changed.map(r => ({...buildRow(r), _rowtype:'U'})),  // ← 같은 행 또 들어감
  ...deleted.map(r => ({...buildRow(r), _rowtype:'D'})),
]

// ✅ 권장 — getSaveJson 이 status 우선순위(Added > Changed) 자동 처리
const json = sheet.getSaveJson({ saveMode: 2, validRequired: 0 })
//   - saveMode:2 → Added/Changed/Deleted 만
//   - validRequired:0 → IBSheet 내장 Required 검증 끔 (커스텀 alert 사용 시)
//   - data: [{ ...컬럼, STATUS: 'Added'|'Changed'|'Deleted' }]
const STATUS_TO_ROWTYPE = { Added:'I', Changed:'U', Updated:'U', Deleted:'D' }
const payload = (json.data ?? []).map(r => ({
  _rowtype: STATUS_TO_ROWTYPE[r.STATUS] ?? 'U',
  ...pickCols(r, SAVE_COLS),
}))

// 또는 status 표현식 정확화로 직접 호출 (가능하나 getSaveJson 이 더 단순)
const I = sheet.getRowsByStatus('Added,!Deleted')
const U = sheet.getRowsByStatus('!Added,Changed,!Deleted')   // ← !Added 가드 필수
const D = sheet.getRowsByStatus('Deleted')
```

**Why**: IBSheet 의 행 status 는 직교 플래그(Added·Changed·Deleted 가 동시 켜질 수 있음). `getSaveJson` 은 우선순위(Added>Changed>Normal)와 Deleted 처리를 매뉴얼 명세대로 자동 해소.

**How to apply**: 모든 저장 직렬화에서 `getSaveJson({saveMode:2})` 사용. 변경 유무 가드는 `hasChangedData(1)` 먼저 호출하고 그 다음에 `getSaveJson` 으로 변경분 추출.

⚠️ **함정 — `getRowsByStatus('Modified')` 는 항상 빈 배열 반환**

IBSheet8 의 정식 status 값은 **`'Added' / 'Changed' / 'Deleted'`** 만 존재. `'Modified'` / `'Updated'` 같은 다른 영문 status 명을 넘기면 throw 없이 **빈 배열 반환** → 변경분이 전부 누락된 채로 저장 payload 생성 → 사용자는 수정했는데 서버는 빈 dataset 수신 → 저장 200 OK 인데 DB 미반영. 실제 사고 화면(UILM7002M00) 의 야간 그리드 셀 수정이 한 라운드 통째로 송신 안 됨. `getSaveJson({saveMode:2})` 가 매뉴얼 명세대로 자동 처리해주므로 status 문자열 직접 조립 자체를 피한다.

⚠️ **함정 — `getSaveJson` 결과의 `STATUS` + `id` 둘 다 제거 필요**

`getSaveJson` 반환 row 에는 `STATUS: 'Added'|'Changed'|'Deleted'` 외에 **`id: 'AR1'/'AR2'...`** (IBSheet 내부 row 식별자, DB PK 아님) 키도 함께 들어 있다. `STATUS` 만 destructure 로 빼면 `id` 가 페이로드에 남아 백엔드 mapper 가 이를 의미 있는 식별자로 오해해 SELECT 조건/INSERT 컬럼 매핑 사고로 이어진다. 두 키 모두 명시적으로 제거:

```ts
const { STATUS, id, ...rest } = r as { STATUS?: string; id?: string } & Record<string, unknown>
return { ...rest, _rowtype: STATUS_TO_ROWTYPE[STATUS] ?? 'U' }
```

## Cfg.InEditMode 1 — 클릭 즉시 편집 진입 (Nexacro Grid UX 재현)

```javascript
Cfg: { InEditMode: 1 }   // 셀 한 번 클릭 시 즉시 편집 모드 (default 는 두 번 클릭/Enter)
```

**Why**: Nexacro Grid 는 `edittype='text'` 셀이 한 번 클릭만으로 편집 진입한다. IBSheet8 default 는 두 번 클릭이라 사용자가 어색하게 느낀다.

**How to apply**: Nexacro 화면 변환 시 편집 가능한 그리드는 모두 `Cfg.InEditMode:1` 표준. 단 readonly 그리드는 불필요.

## 🚨 dirty 체크는 `hasChangedData(1)` — `getRowsByStatus` 는 setValue 만 한 셀을 못 잡는 함정

**증상**: 사용자가 셀을 편집했는데 "변경된 데이터가 있는가?" 체크가 false 반환 → 저장/이동 가드 미동작 회귀.

```javascript
// ❌ 함정 — setValue 만 호출한 행은 row state 가 'Original' 그대로 유지 → 빈 배열
const dirty = sheet.getRowsByStatus('Added,Updated,Deleted').length > 0   // 0 (false)

// ✅ 정공 — data 영역의 모든 변경(setValue, 셀 편집, addRow, removeRow) 감지
const dirty = sheet.hasChangedData(1) > 0   // 1 (true)
```

**Why**: `getRowsByStatus` 는 IBSheet8 내부의 row state 전환(Added/Updated/Deleted) 만 감지한다. `setValue(row, col, val)` (3-arg 또는 4-arg 형태) 는 cell 값을 바꾸지만 row state 를 'Original' 그대로 두는 경우가 많다 (특히 server-loaded 행에 대한 programmatic setValue). 반면 `hasChangedData(1)` (1=dataonly) 는 data 영역의 모든 변경을 검사하므로 setValue 결과도 정확히 1 반환.

**How to apply**:
- "행 위치 이동하면 변경 사라집니다" / "변경된 데이터가 없습니다" 등 **dirty 체크가 필요한 모든 곳에 `hasChangedData(1)` 사용**.
- 사용자 편집 중 클릭 케이스 대응: 사전에 `sheet.endEdit(1)` 호출해 진행중 편집을 강제 커밋 (편집 중이 아니면 null 반환, 부작용 없음).
- 검증 (UILM9006M00 FIX39v2 Playwright): `setValue('EDITED-3arg')` 후 `getRowsByStatus('Added,Updated,Deleted').length === 0` 이지만 `hasChangedData(1) === 1`.

## 🚨 `@ibsheet/react` v1.1.0 — options prop 변경 시 sheet 재생성 안 함 (key prop 으로 강제 remount)

**증상**: useMemo 옵션이 동적 변수(예: editable 0↔1) 에 따라 재계산되어도 sheet 의 `Cfg.CanEdit / Cols[i].CanEdit / Def.Col.CanEdit` 등이 옛 값 그대로 → 신규 추가된 row 가 readonly 잔존하거나 편집 안 됨.

원인: `@ibsheet/react` v1.1.0 의 IBSheetReact 내부 `useEffect` 가 `if (y.current) return` 가드로 한 번 생성된 sheet 는 옵션이 바뀌어도 재생성하지 않는다.

```jsx
// ❌ 옵션은 새 객체로 만들어지는데 sheet 는 옛 인스턴스 그대로
const opts = useMemo(() => ({ ..., Cols: [{ Name:'a', CanEdit: editable }] }), [editable])
<IBSheetReact options={opts} ... />

// ✅ key prop 으로 editable 변경 시 React unmount/remount → IBSheet.create 재호출
<IBSheetReact key={`mygrid-${editable}`} options={opts} ... />
```

추가 안전망 — remount 사이 stale ref 접근 차단:
```ts
// editable 변경 시 sheetRef + readyRef 즉시 초기화
useEffect(() => {
  sheetRef.current = null
  sheetReadyRef.current = false
}, [editable])

// onRenderFirstFinish 가 새 sheet ref 세팅 + 펜딩 큐 (addRow, loadSearchData) 소비
onRenderFirstFinish: (evt) => {
  sheetRef.current = evt.sheet
  sheetReadyRef.current = true
  if (pendingAddRowRef.current > 0) {
    /* 펜딩 addRow 소비 */
  }
  if (pendingDataRef.current) {
    evt.sheet.loadSearchData({ data: pendingDataRef.current, sync: 1 })
    pendingDataRef.current = null
  }
}
```

**Why**: editable 등 동적 옵션을 deps 에 넣어 useMemo 재계산해도, IBSheetReact 내부 가드가 sheet 재생성을 막아 무효. key prop 변경으로 컴포넌트 자체를 새 React fiber 로 다시 마운트시켜야 IBSheet.create 가 재호출된다. 단 remount 는 모든 sheet 데이터를 잃으므로 펜딩 큐 + onRenderFirstFinish 후처리가 필수.

**검증 (UILM9006M00 FIX31)**: `key={`faltType-${faltTypeEditable}`}` 도입 전 — 신규 모드 진입 후 addRow 한 행이 readonly 잔존. 도입 후 — 새 sheet 가 CanEdit:1 로 생성되어 신규행 정상 편집 가능.

## `Col.Required: 1` — 헤더 필수 표시 + 저장 검증

원본 XFDL `<Cell text="..." cssclass="Essential"/>` 는 IBSheet8 에서 `Col.Required: 1` 으로 변환:

```javascript
{ Header: t('grid.code'), Name: 'code', Required: 1 }   // 헤더에 필수 마크 + getSaveJson 자동 검증
```

**Why**: `validRequired:1` (default) 인 `getSaveJson` 호출 시 자동 검증. 커스텀 alert 사용하려면 `validRequired:0` 줘서 끄고 직접 검증.

## ⚠ 공식 이벤트명만 사용 — 임의 이름 금지

IBSheet8 표준 이벤트는 `onClick`, `onAfterClick`, `onDblClick`, `onAfterChange`, `onBeforeChange`, `onSearchFinish`, `onRenderFirstFinish`, `onFocus`, `onEditStart` 등. 비슷해 보이는 임의 이름은 인식되지 않는다.

## ⚠ `Type:'Bool'` + `HeaderCheck:1` 컬럼 4종 함정 (UIRC0021P / UIDI0650M01 진단)

`Type:'Bool'` 의 마스터 체크박스 컬럼은 다음 4종 사고가 동시에 발생할 수 있다. 자세한 내용 + 해결 패턴은 `.claude/skills/nexacro-to-react/ibsheet.md` 의 "Bool 컬럼" / "체크박스 *즉시* cascade 패턴" 섹션 참조.

1. **`TrueValue:'0'` (string) `setAllCheck` NO-OP 버그** — string `'0'` 만 호출 효과 없음. 반드시 `TrueValue: 1, FalseValue: 0` (number) 로 통일 + `as unknown as IBCol` 캐스팅
2. **`Header: ''` 빈 문자열 → 컬럼 Name fallback 표시** ("chkYn" 같은 raw 식별자가 헤더에 노출). 반드시 `Header: { Value: '', HeaderCheck: 1, IconAlign: 'Center' }` 객체 형태
3. **사용자 좌표 클릭 시 헤더 시각 ✓ 갱신 누락 race** — `AllCheckIgnoreEvent: 1` 미적용 화면에서 사용자 클릭만 사고 (`setAllCheck()` 프로그래밍은 정상). 권장: `AllCheckIgnoreEvent: 1` + `onCheckAllFinish`. 차선: `setTimeout(0)` 으로 `setAttribute(sheet.Header, col, 'Checked', val, 1)` defer
4. **헤더 체크박스 좌측 치우침 — `Header.Value: ' '`(공백) 절대 금지** 🚨 — `Header.Value` 를 빈 문자열 `''` 이 아닌 **공백 `' '`** 으로 두면 `IconAlign:'Center'` 가 무효화되어 헤더 체크박스가 좌측 정렬됨 (`IBGYSideLeft`, background-position `5px`). 반드시 **`Value: ''` (빈 문자열)** → `IBGYSideCenter` (background-position `50%`) 로 가운데 정렬. ⚠ IBSheet 공식 매뉴얼 `props/col/header` 의 "빈 헤더는 공백 필요(`Header:" "`)" 안내는 **일반 텍스트 헤더 한정** — HeaderCheck 컬럼엔 적용하면 안 됨. `IconAlign:'Center'` 는 헤더가 아닌 body Icon 용 같지만 **Value 가 빈 문자열일 때만** 헤더 체크박스에도 `IBGYSideCenter` 를 부여하는 부수효과가 있음(실측). 결론: HeaderCheck 컬럼 = `{ Value: '', HeaderCheck: 1, IconAlign: 'Center' }` 고정. (UIDI0650M01 진단: dev gallery `/dev/gallery` + Playwright `IBSheet.create` 실측 — `''`→bg-position `50%`/SideCenter, `' '`→`5px`/SideLeft 확인)
5. **체크박스 자체가 토글 안 됨 + 헤더 전체체크 0건 — `Cfg.CanEdit: 0` 함정** 🚨 — 그리드 레벨 `Cfg.CanEdit: 0` 이면 컬럼 `CanEdit: 1` 이 **무시**되어 체크박스 클릭/헤더 전체체크가 전혀 안 됨 (`setAllCheck` → 0건). 조회결과 그리드처럼 표시 컬럼은 읽기전용이고 체크박스만 편집해야 하면 → `Cfg.CanEdit: 1` + `Def: { Col: { CanEdit: 0 } }` (표시 컬럼 일괄 잠금) + `_CHK` 컬럼만 `CanEdit: 1`(Def override). 검증 패턴: UIRC0210M / UIRC0021P. (UIDI0650M01 진단 + dev gallery `loadSearchData sync:1` 실측: `CanEdit:0`→전체체크 0/3, `CanEdit:1`+Def→3/3. TrueValue/FalseValue 명시는 결과 무관 → 불필요). 상세 매핑은 `nexacro-to-react/ibsheet.md` `griduserproperty="checkboxall"` 행 참조.
6. **Bool 은 커서 편집이 없다(`onStartEdit` 미발화) → Tab 이동 체인에서 멈춤** — `Type:'Bool'` 은 클릭 토글만 있고 에디터 진입이 없어 `StartEdit` 해도 편집 모드로 안 들어간다. Tab 자동 이동(`Actions` 표현식)에서 Bool 셀은 "편집 시작" 체인이 끊겨 그 자리에 멈춘다. 편집불가 컬럼 건너뛰는 Tab 커스터마이징은 `references/core/advanced-patterns.md` "그리드 Tab/Shift+Tab 이동" 섹션 참조.

진단 spec 보존: `tests/UIRC0021P/UIRC0021P.diagnose-typemismatch.spec.ts` (인자 타입별 6 케이스), `UIRC0021P.header-visual-sync.spec.ts` (시각 동기화 4 시나리오).

```javascript
// ❌ IBSheet 가 등록 안 함 — 정의해도 호출 안 됨
Events: {
  onCellDblClick: () => {},   // 존재하지 않는 이벤트명
  onCellClick:    () => {},
  onAfterEdit:    () => {},   // 정확한 이름은 onAfterChange
}

// ✅ 매뉴얼 표준명
Events: {
  onDblClick:    (evt) => {},
  onAfterClick:  (evt) => {},
  onAfterChange: (evt) => {},
}
```

**Why**: IBSheet 는 이벤트명 prefix matching 안 함. 매뉴얼에 명시된 정확한 이름만 wiring.

**How to apply**: 그리드 옵션 빌더 함수가 외부 콜백을 prop 으로 받을 때 prop 이름이 비슷해도 **반드시 Events 블록 안에서 표준 이벤트명으로 wiring** 해야 IBSheet 에 등록됨.

```javascript
function buildOptions({ onDblClick, onAfterChange }) {  // prop 이름은 자유
  return {
    Cols: [...],
    Events: {                                            // 그러나 IBSheet 등록은 표준 이름으로
      onDblClick:    (evt) => onDblClick(),
      onAfterChange: (evt) => onAfterChange(evt),
    },
  }
}
```

⚠️ **함정 — 행 선택 이벤트는 `onClick` 이 아니라 `onFocus` 가 정공**

Nexacro `ds_xxx_onrowposchanged` 대응으로 IBSheet 행 선택 핸들러를 작성할 때 `onClick` 으로 wiring 하면 헤더/필터/버튼 클릭에도 발화하고, `evt.row` 가 IBRow 메타 객체라 컬럼 직접 키 접근(`evt.row.userId`)이 환경별로 깨질 수 있다. 정공은 **`onFocus` + `evt.sheet.getValue(evt.row, 'colName')`**.

```javascript
// ❌ onClick — 헤더/필터/버튼 클릭에도 발화, IBRow 직접 캐스팅 불안정
Events: {
  onClick: (evt) => {
    if (evt.section !== 'Body') return
    const r = evt.row as unknown as EmpSarchRow
    if (r?.userId) setSelectedEmp(r)   // IBRow 컬럼 직접 키 접근 — 환경별 깨짐
  }
}

// ✅ onFocus — body 행 선택에만 발화, getValue 명시 접근
Events: {
  onFocus: (evt) => {
    if (!evt.row) return
    const sheet = evt.sheet
    const userId = sheet.getValue(evt.row, 'userId')
    if (!userId) return
    setSelectedEmp({
      userId: String(userId),
      userNm: String(sheet.getValue(evt.row, 'userNm') ?? ''),
      // ...
    })
  }
}
```

**Why**: `onClick` 은 모든 셀 클릭에 발화하지만 헤더 / 필터 / 버튼 컬럼까지 포함하여 행 선택 의미가 흐려진다. `onFocus` 는 IBSheet8 행 포커스(=행 변경) 시점에만 발화하여 `onrowposchanged` 와 의미가 1:1 매칭. 컬럼 접근도 `evt.sheet.getValue(evt.row, ...)` 가 IBSheet 버전/설정 무관 안정.

**How to apply**: 사원/고객 선택 → 우측 패널 갱신 같은 Master/Detail 패턴은 모두 `onFocus`. 단순 셀 클릭(Button 컬럼 등)은 `onClick`. 자세한 가드 패턴은 `references/core/advanced-patterns.md` "Focus / Selection".

## Main Column Types

| Type | Description | Example |
|------|-------------|---------|
| Text | String | `{ Type: "Text", Size: 50 }` |
| Lines | Multi-line string | `{ Type: "Lines", Size: 3500 }` |
| Int | Integer | `{ Type: "Int", Format: "#,##0" }` — **데이터는 number 타입 필수** (백엔드 응답 string "510" → `Number("510")` 변환 후 loadSearchData) |
| Float | Decimal | `{ Type: "Float", Format: "#,##0.00" }` — **데이터는 number 타입 필수** (string "179.46" → `Number("179.46")` 변환 후 loadSearchData) |
| Date | Date | `{ Type: "Date", Format: "yyyy-MM-dd" }` |
| Enum | Dropdown | `{ Type: "Enum", EnumKeys: "|A|B", Enum: "|Active|Inactive" }` — **첫 글자가 구분자**이므로 리딩 `|` 필수 |
| Bool | Checkbox | `{ Type: "Bool", TrueValue: "Y", FalseValue: "N", BoolIcon: 0 }` — `BoolIcon: 0` = 사각(`☐`/`☑`) / `1` = 원형(`○`/`●`, 라디오 형태) |
| Button | Button | `{ Type: "Button", ButtonText: "Click" }` |

### ⚠ Float/Int 컬럼은 string 데이터 안 받음 — Number 변환 필수

백엔드 응답이 `"179.46"` (string) 으로 와도 `Type:'Float'` 컬럼은 0.00 으로 표시하거나 빈 셀로 떨어지는 케이스 발견 (UILM1075M00 2026-06-02). loadSearchData 전에 number 변환 화이트리스트로 일괄 변환할 것.

```ts
const NUMERIC_FIELDS = ['rwthScre','qladChrge','bassMdctSum','qladExcuBassMdct', /* ... */] as const

const seqSaved = list.map((r, i) => {
  const row = { ...r, seq: i + 1 } as Record<string, unknown>
  for (const k of NUMERIC_FIELDS) {
    const v = row[k]
    if (typeof v === 'string' && v !== '' && !Number.isNaN(Number(v))) {
      row[k] = Number(v)
    }
  }
  return row as MyRowType
})
setTstMdctList(seqSaved)
```

**증상**: Type:'Float' 셀에 0.00 (반응값이 들어와도) / Type:'Int' 셀에 0 / 빈 셀. 콘솔에 응답 string 정상 출력되어 디버깅 시간 낭비. `r.qladExcuBassMdct` 가 `"17160"` 인데 화면은 다른 셀의 number 값을 표시하는 mismatch 도 발생 (race + string 불-수용 복합).

### ⚠ 두 번 연속 setTstMdctList → loadSearchData race (cell mismatch)

```ts
// ❌ 안티 패턴 — calcInsu seqRows 와 server seqSaved 를 따로 setTstMdctList
setTstMdctList(calcSeqRows)    // 첫 번째 — useEffect 가 sheet.loadSearchData 호출
await executeRequest(svc, ...)  // await
setTstMdctList(serverSeqSaved) // 두 번째 — useEffect 가 다시 loadSearchData
```

→ IBSheet 가 두 번째 loadSearchData 를 **부분 반영**해 일부 셀은 calcSeqRows 의 값이 남고 다른 셀은 serverSeqSaved 값을 표시. number 표시 컬럼이 한 tier 다른 값으로 나오는 등 mismatch 발생.

**해결 패턴**: 단일 setTstMdctList 로 단순화. 초기 placeholder 는 가격 컬럼 비워두고, server 응답이 도착하면 그것으로만 setTstMdctList — calcInsu 결과로 setTstMdctList 하지 말 것.

```ts
// ✅ 정공 — 한 번만 setTstMdctList (placeholder + server overlay 통합)
const placeholderRows = mdctList.flatMap(/* cntr × parent rows, 가격 필드 '' */)
setTstMdctList(placeholderRows)  // 식별 정보만 즉시 표시

const r = await executeRequest(SVC_SAVE_LIST, ...)
if (r.list.length > 0) {
  setTstMdctList(/* server response with Number 변환 */)  // 단일 덮어쓰기
}
```

[Details](references/core/column-type-property.md)

⚠️ **함정 — 행별 동적 속성은 `{Prop}Formula` 접미사 (`AttributeFormula.{Prop}` 객체는 비표준)**

행별로 ButtonText / TextColor / Color / CanEdit 등을 동적으로 바꿀 때, **존재하지 않는 `AttributeFormula` 옵션에 객체로 묶어 넣으면 IBSheet8 가 키 자체를 인식 못 한다**. 빌드는 통과(any 캐스팅), 런타임은 silent fail — 버튼 텍스트가 raw placeholder 로 노출되거나 색상이 안 먹는 회귀로 길게 헤맨다.

```javascript
// ❌ AttributeFormula 라는 옵션은 IBSheet8 에 없음 — 무시됨
{
  Name: 'statBtn', Type: 'Button',
  AttributeFormula: {
    ButtonText: (fr) => fr.Row?._statBtnText ?? '',     // 호출 안 됨
    TextColor:  (fr) => fr.Row?.statCd === '4' ? '#ea4647' : '#16a085',
  },
}

// ✅ 정공 1 — Type:'Button' 의 텍스트는 셀 값(Name 컬럼)을 그대로 사용
//    응답 가공 단계에서 셀에 직접 텍스트 채우는 게 가장 단순.
{ Name: 'statBtn', Type: 'Button' }
// rows 가공: row.statBtn = '종료'|'실행'|'취소'

// ✅ 정공 2 — 속성명 + 'Formula' 접미사 컬럼 옵션 + Def.Row.CanFormula+CalcOrder
Cfg: {
  Def: {
    Row: {
      CanFormula: 1,
      CalcOrder: 'statNmTextColor,statBtnTextColor',   // 열이름+속성명, 공백 금지
    },
  },
},
Cols: [
  {
    Name: 'statNm', Type: 'Text',
    TextColorFormula: (fr) => fr.Row?.statCd === '4' ? '#ea4647' : '#16a085',
  },
  {
    Name: 'statBtn', Type: 'Button',
    TextColorFormula: (fr) => {
      const sc = String(fr.Row?.statCd ?? '')
      if (sc === '2') return '#ea4647'
      if (sc === '4') return '#16a085'
      return '#6c757d'
    },
  },
]
```

**Why**: IBSheet8 의 속성 Formula 는 `ColorFormula` / `TextColorFormula` / `CanEditFormula` / `FormatFormula` 처럼 **항상 `{속성명}Formula` 접미사 컬럼 옵션** ([attribute-formula.md](references/features/attribute-formula.md)). `AttributeFormula` 라는 묶음 옵션은 매뉴얼에 존재하지 않음.

**How to apply**: Type:'Button' 의 동적 텍스트는 1순위로 **셀 값 직접 채우기** (Name 컬럼에 텍스트 저장) — Formula 무관, CalcOrder 셋업 불필요. 색상/CanEdit 처럼 데이터 외 속성은 `{Prop}Formula` 접미사 + Def 설정. 어느 쪽도 `AttributeFormula` 객체 형태는 없다.

**같은 silent-fail 사례 — `CanEditCallback`**: 직관적이지만 IBSheet8 표준 아님. 정공은 `CanEditFormula` (Formula 접미사) + `Def.Row.CalcOrder` 에 `{컬럼명}CanEdit` 등록. `Callback` / `Handler` 같은 직관적 이름은 매뉴얼에 등재 안 된 경우 silent fail (옵션 객체에는 저장되지만 호출 안 됨).

```javascript
// ❌ CanEditCallback — 비표준, 모든 행 편집 가능 상태로 폴백
{ Name: 'aplyDt', CanEditCallback: (fr) => Boolean(fr.Row?.Added) }

// ✅ CanEditFormula + CalcOrder 등록
Def: { Row: { CanFormula: 1, CalcOrder: 'aplyDtCanEdit,...' } },
Cols: [{ Name: 'aplyDt', CanEditFormula: (fr) => (fr.Row?.Added === 1 ? 1 : 0) }]
```

⚠️ **함정 — 입력 길이 제한은 `Col.Size` (MaxLength 는 인식 안 됨)**
실시간 입력 글자수 제한 정식 옵션은 **`Size: number`** ([props/col/size](https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/size)). `MaxLength` 는 IBSheet8 매뉴얼에 등재되지 않은 옵션 — 옵션 객체에는 들어가지만 렌더링 / 입력 처리 단계에서 무시되어 **실시간 제한이 안 걸린다**.

```javascript
// ❌ 입력 제한 안 걸림 (IBSheet 가 무시)
{ Type: 'Text', Name: 'fixgNo', MaxLength: 2 }

// ✅ Size 가 정식 옵션 — 입력 시 실시간으로 글자수 제한
{ Type: 'Text', Name: 'fixgNo', Size: 2 }
```

Nexacro `editmaxlength="7"` → IBSheet8 `Size: 7` 로 변환. [UnicodeByteMode](references/ibsheet-official-manual/props/cfg/unicode-byte-mode.md) 설정 시 한글 바이트 수 계산.

## `Col.EditMask` vs `Cfg.EditMaskFunc` — 입력 검증 vs 자동 포맷팅 선택 기준

입력 마스킹 옵션 2가지 — 용도가 다르다. 단순 정규식 검증이면 **`Col.EditMask` 가 기본 선택**.

| 옵션 | 위치 | 목적 | 의존성 |
|---|---|---|---|
| **`Col.EditMask`** | 컬럼 옵션 | 정규식으로 입력 가능 문자 **필터** (안 맞는 글자 키 입력 차단) | 없음 |
| `Cfg.EditMaskFunc` | Cfg 옵션 | 입력 중 **자동 포맷팅** (`20260521` → `2026-05-21`) | Cleave / inputmask 외부 lib |

`EditMask` 동작: `입력값.search(EditMask) >= 0` 일 때만 허용. 정규식에 안 맞는 글자는 표시 자체가 안 됨.

```javascript
// ✅ 음수 + 소수점 2자리 — 외부 lib 불필요, 1줄
{
  Name: 'amt',
  Type: 'Float',
  Format: '#,##0.00',
  Align: 'Right',
  EditMask: '^-?\\d*(\\.\\d{0,2})?$',
}

// 자주 쓰는 패턴
EditMask: '^\\d*$'           // 정수 양수 (빈 입력 허용)
EditMask: '^-?\\d+$'         // 정수 (음수 가능, 빈 입력 차단)
EditMask: '^\\d{0,10}$'      // 숫자 최대 10자리
EditMask: '^[A-Za-z0-9]*$'   // 영숫자만
EditMask: '^\\S*$'           // 공백 제외 모든 글자
```

⚠️ **함정 1 — JS 문자열에서 `\d` 는 `\\d` 로 이스케이프** (안 그러면 정규식 파싱 단계에서 `\d` 가 사라져 모든 입력 차단)

⚠️ **함정 2 — `search()` 기반이라 `^...$` 앵커 필수**. 앵커 빠지면 부분 매칭만 통과해 의도와 다르게 잡힌다 (예: `\d*` 만 쓰면 `'abc1'` 도 통과 — `'1'` 부분이 매칭).

⚠️ **함정 3 — `\d+` (1 이상) 쓰면 빈 문자열도 차단되어 마지막 한 글자 지우는 동작까지 막힘**. 보통 `\d*` (0 이상) 사용.

`EditMaskFunc` 는 자동 슬래시/대시 삽입이 꼭 필요한 케이스만 (Cleave/inputmask 같은 외부 lib 설치 + 마스킹/Resolve 쌍 함수 작성). 단순 검증 용도로 EditMaskFunc 쓰면 외부 lib 의존만 늘고 코드 복잡도 증가.

근거: `references/ibsheet-official-manual/props/col/edit-mask.md` / `references/ibsheet-official-manual/props/cfg/edit-mask-func.md`.

⚠️ **함정 — Nexacro `editinputmode="upper"` (입력 즉시 대문자) 는 IBSheet8 에 전용 옵션이 없다 → `onAfterChange` 에서 `toUpperCase`**

`EditMask` / `ResultMask` 는 **입력 허용/종료 검사** 일 뿐 대소문자 **변환** 기능이 아니다. Nexacro `editinputmode="upper"` 대응은 `onAfterChange`(편집 종료 시점) 에서 직접 변환한다. `setValue` 5번째 인자 `{ OnChange: true }` 로 재발화를 막아 무한 루프를 방지한다.

```javascript
// ❌ EditMask 로 대문자 변환 시도 — 불가 (검사만 함, 소문자 입력 자체를 막으면 UX 다름)
{ Name: 'rgUserNm', EditMask: '^[A-Z0-9]*$' }   // 소문자 키 무반응 (변환 아닌 차단)

// ✅ EditMask(영숫자 허용) + onAfterChange 에서 toUpperCase (Nexacro upper 동등)
{ Name: 'rgUserNm', Size: 6, EditMask: '^[A-Za-z0-9]*$' }
onAfterChange: (evt) => {
  if (evt.col === 'rgUserNm') {
    const cur = String(evt.sheet.getValue(evt.row, 'rgUserNm') ?? '')
    const up = cur.toUpperCase()
    if (up !== cur) evt.sheet.setValue(evt.row, 'rgUserNm', up, 1, { OnChange: true })
  }
}
```

`ResultMask` 는 "편집 종료 시 정규식 검사" 용 (입력 허용이 아니라 종료 후 검증, `ResultMessage` 와 함께). 입력 중 차단은 `EditMask`.

## 🎯 `Name:'SEQ'` — 자동 행번호 컬럼 (IBSheet8 예약 컬럼명)

`Name` 을 정확히 `'SEQ'` (대문자) 로 두면 컬럼 `Type` 과 무관하게 IBSheet8 가 자동으로 `1,2,3...` 을 채운다. 응답 데이터에 해당 필드 없어도 됨. Sort/Filter/`hideRow`/`removeRow` 후에도 항상 1부터 재번호. 편집 불가.

```javascript
// ✅ 한 줄로 끝 — 데이터 매핑/Formula/setValue 전부 불필요
{ Header: '순번', Name: 'SEQ', Type: 'Text', Width: 50, Align: 'Center' }
```

❌ **금지 패턴들** (전부 빈 셀 또는 변경분 오염으로 끝남):

```javascript
// ❌ Type:'Seq' — 표준 Type 아님 (Text/Int/Bool/Date/Enum/... 만 존재). 빈 셀.
{ Header:'순번', Name:'no', Type:'Seq', Width:50 }

// ❌ Formula — Cfg.Def.Row.CanFormula + CalcOrder 미설정이면 동작 안 함. 환경별 NaN.
{ Header:'순번', Name:'no', Type:'Text', Formula:'ROW+1', Width:50 }
{ Header:'순번', Name:'no', Type:'Int',  Formula:'Row',   Width:50 }
// ❌ 화살표 함수 형태도 동일 사고 — 자매 화면(UIDI0690M00 등)에 번식 중. 검증 없이 복사 금지.
//    실사고(UIDI0600M00): 자매 화면 패턴 grep 으로 옮긴 후 No 컬럼 전부 0 표시.
{ Header:'No',   Name:'no', Type:'Int',  Formula: (row) => row.Row, Width: 40 }

// ❌ 응답 데이터 매핑(rowNum) — 서버가 안 내려주면 빈 셀, 페이징/정렬 시 어긋남.
{ Header:'순번', Name:'rowNum', Type:'Int', Width:50 }

// ❌ loadSearchData 후 setValue 로 수동 채움 — 4번째 인자 render 와 무관하게
//    Changed=1 마킹되어 모든 행이 변경분으로 잡힘. getSaveJson 변경 추출 오염.
sheet.getDataRows().forEach((r,i) => sheet.setValue(r, 'no', i+1, 1))
```

**Why**: IBSheet8 매뉴얼이 `SEQ` 를 예약 컬럼명으로 명시 (`SEQ, id, Status, Level, ColorPos, GroupPos, Hasch, LevelImg, OrgIndex, SUMType`). 대소문자 구분.

**How to apply**: Nexacro Grid 의 `griduserproperty="no"` / `<Cell text="No"/>` / `<Cell text="순번"/>` 가 보이면 데이터 컬럼 따로 만들지 말고 위 한 줄로 끝. 체크박스 + 순번 동시 변환 패턴은 `references/core/advanced-patterns.md` "행 번호 컬럼" + nexacro-to-react `ibsheet.md` "체크박스 + 순번 표준 정의" 참조.

⚠️ **함정 — `loadSearchData` 의 2번째 위치 인자는 `append` (조회 시 그리드 누적 사고)**

`loadSearchData(data, append, callback, sync, next, ...)` — **2번째 위치 인자는 `append`(boolean)** 이지 `sync` 가 아니다. 여기에 `1` 을 넘기면 `append=true` 가 되어 **매 조회 시 기존 행을 클리어하지 않고 그리드 하단에 계속 누적**된다 (공식 매뉴얼: "append 미설정 시 기존 데이터 클리어 후 로드 / 1: 기존 데이터에 추가"). 사용자 환경에서 "조회할 때마다 초기화 안 되고 행이 계속 추가됨" 으로 인지됨.

```ts
// ❌ 사고 — 2번째 위치 인자 1 = append=true → 조회마다 누적 (실사고: UIQC1306M00, UIRM0104M00 2026-06-04)
sheet.loadSearchData({ data: rows }, 1)
sheet.loadSearchData(rows, 1)             // data 도 raw 배열 — 표준 { data } 객체 형식 아님

// ✅ 정공 — sync 는 객체 프로퍼티로. append 미설정 = 기존 데이터 클리어 후 로드
sheet.loadSearchData({ data: rows, sync: 1 })
```

**Why**: `sync` 인자를 위치로 넘기려면 `loadSearchData(data, 0, undefined, 1)` 처럼 append/callback 자리를 모두 채워야 한다. 프로젝트 표준은 항상 객체 한 개 `{ data, sync: 1 }` 로 전달. `append: 1` 은 **무한 스크롤 페이징(`SearchMode: 2`)에서만** 의도적으로 사용 (위 "무한 스크롤 페이징" 섹션).

**How to apply**: 일반 조회(전체 갱신) 그리드에서 `loadSearchData(... , 1)` 형태(2번째 위치 인자 숫자)를 보면 누적 사고로 간주. `{ data, sync: 1 }` 단일 객체로 교정. grep 검출: `loadSearchData\([^)]*, *1 *\)`.

⚠️ **함정 — `loadSearchData` 직전 응답 row sanitize 필수 (null/undefined → '' + Bool 컬럼 응답 _CHK 충돌)**

응답 row 에 `null/undefined` 가 있는 컬럼이 IBSheet 내부 `RefreshRow` → `charCodeAt(undefined)` 폭주의 1순위 원인. 특히 두 케이스 자주 발생:

1. **백엔드 모델이 `_CHK` 필드 보유** — Java `@Column(name="_CHK") private String _CHK;` 가 있으면 응답 JSON 에 `"_CHK": ""` (string) 포함. React 측 IBSheet Bool 컬럼 `_CHK` 가 string 값 받아 `boolToValue` 처리 시 charCodeAt 에러 → `'loadSearchData' 함수에서 오류가 발생하였습니다` + 그리드 빈 채로.
2. **응답 컬럼 일부 null** — 미입력 필드(`avrgVal`, `sd`, `zscore`, `chgrNm` 등) 가 null. IBSheet 가 cell value 의 charCodeAt 시도 시 crash.

✅ **정공 — loadSearchData 직전 일괄 sanitize 헬퍼**:

```ts
function sanitizeRow(r: Record<string, unknown>): Record<string, string> {
  const c: Record<string, string> = {}
  for (const [k, v] of Object.entries(r)) {
    c[k] = v == null ? '' : String(v)
  }
  // 백엔드 응답의 _CHK 필드는 IBSheet Bool 컬럼이 자체 관리 — 응답 무시
  c._CHK = ''
  return c
}

useEffect(() => {
  const data = rows.map(sanitizeRow)
  if (!sheetRef.current || !sheetReadyRef.current) {
    pendingRef.current = rows
    return
  }
  sheetRef.current.loadSearchData({ data, sync: 1 })
}, [rows])
```

**Why**: IBSheet8 의 내부 cell rendering 이 cell value 의 `charCodeAt(0)` 을 호출하는 코드 경로가 다수. value 가 undefined/null/객체 면 즉시 throw. `String(v)` 강제 + null `''` 으로 정리하면 RefreshRow / RedrawBody / Scroll 모든 경로 안전.

**How to apply**: 응답 받자마자 `setRows(rows)` — state 는 raw 유지. loadSearchData 직전에만 sanitize 적용 (함수형 Format 폭주 함정과 같은 원리 — Format 함수 대신 사전 변환).

⚠️ **함정 — `CanFocus: 0` 박으면 `onFocus` 이벤트 발화 안 함 (행 선택 추적 깨짐)**

readonly 셀의 파란 포커스 박스가 시각상 거슬려 `Def.Col.CanFocus: 0` + 컬럼 별 `CanFocus: 0` 박으면 IBSheet8 의 `onFocus` 이벤트 자체가 발화 안 한다. `focusedRowKeyRef` 가 영구 null → 마스터-디테일 cascade, 담당자해제/체크 0 fallback 등 **행 선택 의존 로직 전부 깨짐** ("선택된 행이 없습니다" 발화).

```javascript
// ❌ readonly 셀 포커스 박스 차단 의도 — onFocus 자동 차단되어 행 선택 추적 불가
Cfg: { NoFocus: 1 },
Def: { Col: { CanEdit: 0, CanFocus: 0 } },
Cols: [
  { Name: '_CHK', Type: 'Bool', CanEdit: 1, CanFocus: 1 },
  { Name: 'tstDt', Type: 'Text' }, // CanFocus inherits 0 → onFocus 발화 안 함
  // ...
]
Events: {
  onFocus: (evt) => {
    focusedRowKeyRef.current = evt.row // ← 영구 미실행
  }
}

// ✅ CanFocus:1 (default) 유지 — onFocus 정상 발화
Cfg: { CanEdit: 1, IgnoreFocused: 2 },
Def: { Row: { CanFocus: 1 }, Col: { CanEdit: 0 } }, // CanFocus 미설정 = default 1
```

**시각 포커스 박스 차단은 CSS 로 별도 처리** (IBSheet 옵션으로는 onFocus 살리면서 포커스 박스만 끄는 옵션 X — `Cfg.NoFocus` 는 비표준).

**Why**: `CanFocus:0` 의 매뉴얼 정의 "포커스 진입 불가" 는 키보드 탭 이동 시 컬럼 건너뛰기 + 마우스 클릭으로도 cell focus state 변경 안 됨 → IBSheet 가 `onFocus` 이벤트 trigger 자체를 안 함. 행 선택 의존 로직(C3 — 체크 0건 시 포커스 행 자동 체크 등) 이 모두 무력화.

**How to apply**: `IgnoreFocused: 2` (이미 디테일 그리드에 권장) 로 키보드 ↑↓ 이동 시 다른 그리드 포커스 영향 차단 가능. 셀 클릭 시 포커스 박스 시각 노출이 거슬려도 onFocus 발화는 필수 — CSS 로 시각 박스만 차단할지 사용자와 trade-off.

⚠️ **함정 — `Type:'Enum'` 비동기 콤보 응답 시 raw 값이 버려진다 → `EnumStrictMode: 1` 필수**

콤보 옵션이 별도 API 로 비동기 로드되는 화면에서 `setData`(또는 `loadSearchData`) 가 응답 도착 **전에** 호출되면, IBSheet8 기본 동작은 EnumKeys 에 없는 raw 값을 **무시(=버려짐)**. 이후 콤보가 늦게 도착해도 이미 버려진 값은 복구 불가 → 사용자 환경에서 빈 ▼ 만 영구 표시. 같은 코드를 Playwright 빠른 환경에서 돌리면 정상이라 회귀로 오인되기 쉽다.

```javascript
// ❌ 기본 동작 — 콤보 응답 늦으면 raw 값 영구 손실
{ Header: '센터', Name: 'cntrCd', Type: 'Enum', EnumKeys: '|', Enum: '|' }

// ✅ 비동기 콤보 컬럼은 모두 EnumStrictMode:1 (col 전용 — Cfg 레벨 미존재)
{ Header: '센터', Name: 'cntrCd', Type: 'Enum', EnumKeys, Enum, EnumStrictMode: 1 }
```

근거: `references/ibsheet-official-manual/props/col/enum-strict-mode.md` — `0` (default) = 미설정 값 미적용, `1` = 적용(라벨 매핑 후속 가능), `2` = 적용 + Enum List 자동 추가.

⚠️ **함정 — sheetOptions deps 만 갱신해서는 IBSheet 가 이미 그려진 셀에 새 Enum 을 적용 못 한다 → `setAttribute + renderBody` 명시 호출**

`useMemo` deps 에 enum state 를 추가해도, IBSheet 는 createSheet 후 sheetOptions 변경을 자동 재반영하지 않는다. 콤보 응답 도착 시 명시적으로 셀 attribute 를 갱신해야 라벨이 채워진다.

```javascript
// ✅ 콤보 state 변경 useEffect 에서 setAttribute (마지막 인자 0=즉시 렌더 안 함) + renderBody 한 번
useEffect(() => {
  const sheet = sheetRef.current
  if (!sheet) return
  const updates: Array<[string, Record<string, string>]> = [
    ['cntrCd', cntrEnum],
    ['deptCd', deptEnum],
    // ...
  ]
  for (const [colName, map] of updates) {
    if (Object.keys(map).length === 0) continue
    const ibe = toIbEnum(map) // { keys: '|...', labels: '|...' }
    sheet.setAttribute(null, colName, 'EnumKeys', ibe.keys, 0)
    sheet.setAttribute(null, colName, 'Enum', ibe.labels, 0)
  }
  sheet.renderBody()
}, [cntrEnum, deptEnum, ...])
```

근거: `references/core/column-type-property.md` "동적 Enum 데이터 변경" 패턴.

⚠️ **함정 — 콤보 API 가 빈 응답일 때 Enum 컬럼이 영구 빈 표시 → 응답 행의 코드 unique 를 enum state 에 자동 보충 (graceful fallback)**

`selectCntrList` 같은 콤보 API 가 권한/세션 사유로 `result: []` 를 반환하는 환경이 있다. 이때 `EnumStrictMode:1` 만으로는 셀이 빈 ▼ 로 보일 수 있다 (toIbEnum({}) 결과: `Enum:'||', EnumKeys:'||-'` — 사용자 보고로 비트 매칭 확인). 응답 행에 등장한 raw 코드를 enum state 에 자동 추가하면 라벨이 없어도 코드 텍스트라도 표시된다.

```javascript
// fn_search 응답 처리 단계 — 라벨 매핑된 키는 덮어쓰지 않음
const augmentEnum = (current, keys, setter) => {
  const next = { ...current }
  let added = false
  for (const k of keys) if (k && !(k in next)) { next[k] = k; added = true }
  if (added) setter(next)
}
augmentEnum(cntrEnum, [...new Set(rows.map(r => r.cntrCd).filter(Boolean))], setCntrEnum)
```

⚠️ **함정 — Events 핸들러는 createSheet 시점 closure 캐시 → useState 직접 참조 시 빈 옵션 영구 고정**

`Events.onAfterChange` 등은 IBSheet 인스턴스 생성 시점의 closure 로 영구 사용된다. 핸들러 안에서 `inspdptOptionsAll` (state) 를 직접 참조하면 **첫 렌더 시점의 빈 배열로 캐시**되어 옵션이 비동기 로드된 뒤에도 새 값을 못 본다. **`useRef` 동기화 패턴 필수**.

```javascript
const inspdptOptionsAllRef = useRef(inspdptOptionsAll)
useEffect(() => { inspdptOptionsAllRef.current = inspdptOptionsAll }, [inspdptOptionsAll])

// Events 안에서는 ref.current 만 참조
Events: {
  onAfterChange: (evt) => {
    const candidates = inspdptOptionsAllRef.current.filter(...)  // 최신 옵션 보장
  }
}
```

⚠️ **함정 — `setAttribute` 객체 시그니처는 무시된다 → 포지셔널 `(row, col, attr, val, render)` 만 동작**

`setAttribute({ col, attr, val, render })` 형식으로 호출하면 빌드/타입 통과 (any 캐스팅 시) 하지만 IBSheet8 내부 dispatcher 가 인식 못 함. silent fail — 컬럼 visible 토글이나 CanEdit 동적 토글이 화면에 반영 안 되는 회귀로 길게 헤맨다.

```javascript
// ❌ 객체 형식 — 무시됨
sheet.setAttribute({ col: 'fltmg', attr: 'Visible', val: 0, render: 0 })
sheet.setAttribute({ col: 'faltResnCd', attr: 'CanEdit', val: 1, render: 0 })

// ✅ 포지셔널 — (row, col, attr, val, render)
sheet.setAttribute(null, 'fltmg', 'Visible', 0, 0)        // row=null → 컬럼 단위
sheet.setAttribute(null, 'faltResnCd', 'CanEdit', 1, 0)
sheet.setAttribute(undefined, 'faltDeptDivCd', 'EnumKeys', '|A|B', 0)
sheet.renderBody()
```

근거: `references/ibsheet-official-manual/funcs/core/set-attribute.md` 매뉴얼은 객체 형식 정의 X. 검증된 호출은 양쪽 인자 모두 포지셔널.

⚠️ **함정 — 컬럼 가시성은 `setAttribute(null, col, 'Visible', 0)` 가 아니라 `hideCol(name)` / `showCol(name)`**

같은 setAttribute 호출이라도 `Visible` 속성은 인식 안 됨 (헤더 row 모델링 quirk). 컬럼 단위 visibility 는 dedicated API 만 동작.

```javascript
// ❌ setAttribute 로 Visible 토글 — IBSheet8 에서 무시
sheet.setAttribute(null, 'fltmg', 'Visible', 0, 0)

// ✅ 정식 API — hideCol / showCol
sheet.hideCol('fltmg')   // 숨김
sheet.showCol('fltmg')   // 표시
```

근거: `references/ibsheet-official-manual/funcs/core/hide-col.md` + `show-col.md`. IBSheet8 헤더는 `id==='Header'` row 로 모델링 → 컬럼 가시성은 dedicated 메서드로만 변경.

⚠️ **함정 — `Cfg.CanEdit:0` 초기화 + dynamic `setAttribute(CanEdit:1)` 전환 시 신규 행은 readonly 잔존**

마운트 시 `Cfg.CanEdit:0` 으로 그리드 만든 후 enable state 변경에 따라 `setAttribute(null, undefined, 'CanEdit', 1, 0)` 로 풀어도 — **IBSheet8 가 내부 편집 모드를 비활성화 상태로 cache** 해 신규로 `addRow` 된 행도 readonly 잔존하는 회귀. AddEdit/ChangeEdit 도 함께 짝지어야 함.

```javascript
// ❌ Cfg.CanEdit:0 으로 시작 → useEffect 동적 토글 → 신규 행 readonly 잔존
const editable = enable ? 1 : 0
return {
  Cfg: { CanEdit: editable, ... },
  Def: { Col: { CanEdit: editable } },
}

// ✅ Cfg 는 1 로 고정 + useEffect 에서 비활성 시점만 setAttribute(0)
return {
  Cfg: { CanEdit: 1, AddEdit: 1, ChangeEdit: 1, ... },  // 항상 편집 가능 상태로 mount
  Def: { Col: { CanEdit: enable ? 1 : 0 } },
}

useEffect(() => {
  const v = enable ? 1 : 0
  sheet.setAttribute(null, undefined, 'CanEdit', v, 0)
  sheet.setAttribute(null, undefined, 'AddEdit', v, 0)
  sheet.setAttribute(null, undefined, 'ChangeEdit', v, 0)
  for (const c of userCols) sheet.setAttribute(null, c, 'CanEdit', v, 0)
  sheet.renderBody()
}, [enable])
```

**Why**: IBSheet8 의 편집 매트릭스는 CanEdit + AddEdit + ChangeEdit 3 키 조합 — `CanEdit:0` 초기값은 내부 dispatcher 가 "이 그리드는 영구 readonly" 로 단정 → 이후 `addRow` 된 Added 행에도 적용. AS-IS xfdl `readonly="true"` 와 동등하려면 **`Cfg.CanEdit:0` 고정** (동적 토글 없음), 동적 토글이 필요하면 **초기값 1 + useEffect 동적 0/1**.

⚠️ **함정 — `setAttribute(null, undefined, 'CanEdit', v)` 전역 호출이 컬럼 정의의 `CanEdit:0` / `CanEditFormula` 를 덮어쓴다 → 영구 readonly 컬럼이 편집 가능해짐**

이력↔현재 토글 같은 **부분 readonly** 그리드 (= 일부 컬럼은 영구 readonly + 나머지는 토글) 에서 가장 자주 회귀하는 패턴. AS-IS xfdl 의 `expr:rowType==2?'combo':'none'` 같은 조건부 편집 컬럼을 IBSheet8 의 `CanEdit:0` / `CanEditFormula` 로 변환해놓아도, useEffect 의 전역 `setAttribute(null, undefined, 'CanEdit', 1)` 한 줄이 **모든 컬럼을 일괄 덮어써서** 영구 readonly 컬럼까지 편집 가능 상태가 된다. 사용자가 "검사명/검사코드 셀이 편집되는데?" 로 보고하면 99% 이 함정.

```javascript
// ❌ 전역 setAttribute 한 줄 — Cols 정의의 CanEdit:0 / CanEditFormula 가 무효화됨
useEffect(() => {
  const v = srchDtBass === 'CRNT' ? 1 : 0
  sheet.setAttribute(null, undefined, 'CanEdit', v, 1)
  // ← 이 시점에 cntrNm/tstCd/tstNm 컬럼의 CanEdit:0 정의가 v 로 덮어쓰여짐
}, [srchDtBass])

// ✅ 3단계 명시 적용 — 전역 + 편집 가능 컬럼 list + 영구 readonly list 분리
const EDITABLE_COLS = ['chk', 'slryDivCd', 'mdctDivCd', 'strtDt', 'endDt', /* ... */]
const READONLY_COLS = ['seq', 'cntrNm', 'tstCd', 'tstNm']  // AS-IS edittype 없음 / 조건부 expr

useEffect(() => {
  if (!sheet?.setAttribute) return
  const v = srchDtBass === 'CRNT' ? 1 : 0
  sheet.setAttribute(null, undefined, 'CanEdit', v, 0)          // 1. 전역 토글
  for (const c of EDITABLE_COLS) {
    sheet.setAttribute(null, c, 'CanEdit', v, 0)                 // 2. 편집 가능 컬럼은 v
  }
  for (const c of READONLY_COLS) {
    sheet.setAttribute(null, c, 'CanEdit', 0, 0)                 // 3. 영구 readonly 는 항상 0
  }
  sheet.renderBody?.()
}, [srchDtBass, sheetReadyVersion])  // sheetReadyVersion: onRenderFirstFinish 에서 ++ (cold-open race)
```

**Why**: IBSheet8 의 setAttribute 는 런타임 우선순위가 Cols 정의의 초기값보다 높다. `setAttribute(null, undefined, ...)` 의 `col=undefined` 는 "모든 컬럼" 의미 → 한 줄로 전체 그리드 컬럼의 해당 속성을 동기 덮어씀. `CanEditFormula` 도 마찬가지로 setAttribute(CanEdit=1) 가 들어오면 무력화. AS-IS 의 부분 readonly 의도는 React 변환 시 **편집 가능 / 영구 readonly 컬럼 list 를 별도 상수로 명시** 하고 useEffect 에서 3단계 순서로 적용해야 보존된다.

**판정 신호**: 사용자가 "X 컬럼이 편집 안 되어야 하는데 편집됨" / "이력 모드면 정상인데 현재 모드 가니까 X도 풀려버림" 보고. 또는 직전 변환에서 `CanEdit:0` / `CanEditFormula` 박았는데 동작 안 함 — 100% 이 함정 (Cols 정의는 정확, useEffect 의 전역 호출이 덮어씀).

⚠️ **함정 — `Type:'Bool'` + `BoolIcon` 미지정 시 원형(라디오) 으로 렌더되어 체크박스로 안 보인다**

XFDL `displaytype="checkboxcontrol"` 등 사각 체크박스 의도로 변환한 컬럼이 `BoolIcon: 1` 로 들어가면 ○ (라디오) 모양. 프로젝트 표준은 `BoolIcon: 0` (사각 ☐).

```javascript
// ❌ 라디오로 렌더 (사용자 "Radio 같이 만들어졌다" 회귀 신호)
{ Name: 'dplcPermYn', Type: 'Bool', BoolIcon: 1, TrueValue: 'Y', FalseValue: 'N' }

// ✅ 사각 체크박스 — XFDL checkboxcontrol 등가
{ Name: 'dplcPermYn', Type: 'Bool', BoolIcon: 0, TrueValue: 'Y', FalseValue: 'N' }
```

⚠️ **함정 — Enum 컬럼 Width 가 좁으면 라벨이 잘려 빈 ▼ 만 보인다 (콤보 매핑 회귀로 오인)**

한국어 4글자 라벨("서울본원" 등) + ▼ 표시는 **Width ≥ 100** 필요. AS-IS XFDL 의 작은 size 값을 그대로 옮기면 IBSheet8 의 폰트 메트릭 차이로 잘릴 수 있다. 잘림이 발견되면 매핑 회귀가 아니라 너비 부족 — 확대 캡쳐로 픽셀 검수 후 Width 확장.

⚠️ **함정 — 응답 placeholder 코드 `'-'` / `null` 처리**

LIS 백엔드는 학부/작업구분 등을 `'-'` placeholder 로 반환한다 (응답값 100% 가 `'-'` 인 케이스도 있음). AS-IS `lmfn_bindIds(msgDiv:"-")` 는 `{inspdptCd:'-', inspdptNm:'-'}` 행을 prepend 하여 그리드에 `-` 텍스트로 표시한다. TO-BE 의 enumMap 도 `{ '-': '-' }` 명시 prepend 필요 — 단순히 `if (v !== '-')` 로 제외하면 빈 셀이 되어 AS-IS 와 다른 표시.

```javascript
// 그리드 콤보 enumMap 빌드 시
const enumMap: Record<string, string> = { '-': '-' }  // ← AS-IS msgDiv:"-" 등가 prepend
data.forEach(row => {
  if (row.code && row.code !== '-') enumMap[row.code] = row.name
})
```

> **Summary Row**: Simply add the `FormulaRow: "Sum"` property to a numeric column, and a summary row is automatically created in the Foot area. There is no need to manually create a Foot array. ([Details](references/features/summary.md))

> **FormulaRow text label vs aggregation function**: `FormulaRow` value can be either an aggregation function name (`"Sum"`, `"Avg"`, `"Cnt"`, `"Max"`, `"Min"`) **or any plain text** (e.g. `"합계"`, `"Total"`). When a non-function string is given, the text is rendered as-is in the formula row cell — useful for the leftmost label column.
> ```js
> Cols: [
>   { Name: "tstCd",    Header: "검사코드", FormulaRow: "합계" },        // 텍스트 라벨
>   { Name: "tstNm",    Header: "검사명" },                                 // 빈 셀
>   { Name: "bassMdct", Header: "기준수가", Type: "Int", FormulaRow: "Sum" } // 합계값
> ]
> ```

> **⚠ IBSheet7 → IBSheet8 migration**: Replace the old `Sum` / `SumType` / `SumAlign` / `SumFormat` column properties with a single `FormulaRow`. The column's own `Format` and `Align` are automatically applied to the formula cell — no need for `SumFormat` / `SumAlign`.
> ```js
> // ❌ IBSheet7 leftover (verbose, may double-render rows)
> { Name: "amount", Type: "Int", Format: "#,##0", Align: "Right",
>   Sum: "Sum", SumType: "Int", SumFormat: "#,##0", SumAlign: "Right" }
>
> // ✅ IBSheet8
> { Name: "amount", Type: "Int", Format: "#,##0", Align: "Right", FormulaRow: "Sum" }
> ```

## Main Events

```javascript
Events: {
  onRenderFirstFinish: function(evt) { },  // Initialization complete
  onSearchFinish: function(evt) { },       // Data load complete
  onAfterClick: function(evt) { },          // Cell click
  onBeforeChange: function(evt) { },        // Before value change (return false to cancel)
  onAfterChange: function(evt) { },         // After value change
  onStartEdit: function(evt) { },           // Edit start — return TRUE blocks edit (NOT false!)
}
```

> **Caution: Event Naming Convention**
> IBSheet8 events use `Start↔Finish` and `Before↔After` patterns. **The `Start↔End` pattern is NOT used.**
> - `onSearchStart` ↔ `onSearchFinish` (O) — `onSearchEnd` does not exist (X)

⚠️ **함정 — `onStartEdit` return 값 규칙은 일반적 직관과 반대 (`true` = 편집 차단)**

공식 매뉴얼 `events/on-start-edit.md`: "`1(true)` 리턴 시 편집이 불가능". 다른 이벤트들의 `return false` = cancel 패턴과 반대다. 직관적으로 `false` 로 차단 시도하면 **모든 행 편집 허용** 으로 동작 (사용자가 "왜 다 편집되냐" 보고하는 회귀 신호).

```javascript
// ❌ false 리턴 → 차단 안 됨 (false 는 "편집 허용" 의미)
onStartEdit: (evt) => {
  if (evt.col === 'pk' && !evt.row.Added) return false
}

// ✅ true 리턴 → 편집 차단
onStartEdit: (evt) => {
  if (evt.col === 'pk' && !evt.row.Added) return true
}

// ✅ 더 정석 — 컬럼 옵션 AddEdit/ChangeEdit 으로 처리 (이벤트 가드 불필요)
//   advanced-patterns.md "편집 매트릭스" 참조 — 신규행만 편집 = AddEdit:1, ChangeEdit:0
{ Name: 'pk', AddEdit: 1, ChangeEdit: 0 }
```

⚠️ **함정 — 신규행만 편집 가능 컬럼은 `onStartEdit` 우회 금지, `AddEdit:1 + ChangeEdit:0` 가 정석**

XFDL `edittype="expr:INSERT? normal : none"` 같은 행단위 동적 편집 패턴은 onStartEdit 이벤트 가드로 우회하지 말고 컬럼 옵션 `AddEdit/ChangeEdit` 으로 직접 표현. 이벤트 우회는 코드 복잡도만 늘리고 IBSheet8 가 매뉴얼대로 일관 처리하는 동작을 깨뜨릴 수 있다 (편집 매트릭스 전체 표는 `references/core/advanced-patterns.md` "편집 매트릭스" 섹션).

⚠️ **함정 — `Formula` 는 `Cfg.CanFormula + Cfg.CalcOrder` 없이는 호출 안 됨**

컬럼에 `Formula: (fr) => ...` 정의만 하고 Cfg 설정을 빠뜨리면 셀이 빈 값으로 표시된다 (TS 빌드는 통과). 행 상태(Added/Changed/Deleted) 텍스트 표시 같은 "의존 컬럼 없는 동적 계산" 용도로는 Formula 가 부적합 — `Cfg.CalcOrder` 가 의존 컬럼 변경 시에만 재계산하기 때문. **이벤트 기반 `setValue` 패턴 사용**.

```javascript
// ❌ Formula 정의만 — Cfg.CanFormula + CalcOrder 누락 → 빈 셀
{ Name: '_STATUS', Type: 'Text',
  Formula: (fr) => fr.Row.Added ? '신규' : '' }   // 호출 안 됨

// ✅ 행 상태 표시는 이벤트 기반 setValue 패턴 — handleAddRow / handleDeleteRow / onAfterChange 시점
//   ignoreEvent.OnChange:true 로 무한 루프 차단. _STATUS 는 SAVE_COLS 에서 제외 (페이로드 오염 방지).
const newRow = sheet.addRow({ init: {...} })
sheet.setValue(newRow, '_STATUS', '신규', 1, { OnChange: true })

onAfterChange: (evt) => {
  if (evt.col === '_STATUS') return                 // 자기 자신 변경 차단
  if (!evt.row.Added && evt.row.delYn !== 'Y') {
    evt.sheet.setValue(evt.row, '_STATUS', '수정', 1, { OnChange: true })
  }
}
```

⚠️ **함정 — `addRow({ Init: {...} })` 대문자 `Init` 는 silent 무시 (컬럼값 안 들어감)**

IBSheet8 의 표준 옵션 키는 **소문자 `init`**. 대문자 `Init` 는 옵션 객체에는 저장되지만 addRow 로직에서 인식 안 됨 → 컬럼값 전부 빈값으로 신규 행 생성. 사용자 신호: "신규행 추가 시 등록일자가 비어있음 / `recpYn` 같은 분기값이 안 들어감". develop 전체 화면 25개 모두 소문자 `init` 사용. UILM9001M00 cycle5 회귀 — 대문자로 작성된 신규 행이 모든 컬럼 빈값으로 들어가 backend 500 NPE 유발.

```javascript
// ❌ 대문자 Init — silent 무시
sheet.addRow({ Init: { faltRegDt: today, recpYn: 'Y' } })   // 빈 행 생성

// ✅ 소문자 init — 정상 컬럼값 세팅
sheet.addRow({ init: { faltRegDt: today, recpYn: 'Y' } })
```

⚠️ **함정 — `evt.val` TS 타입은 `unknown` — boolean 비교 시 `as unknown` 캐스트 필요**

IBSheet8 v8 의 onAfterChange 이벤트 객체 정확한 키는 `evt.val`. `evt.value` 는 존재하지 않음 (TS2551). 또한 `evt.val` 의 TypeScript 타입은 `unknown` 이라 `string | number` 와 `boolean true` 비교 시 union mismatch (TS2367: "comparison appears to be unintentional"). `pnpm build` (= `tsc -b`) 의 strict 옵션에서만 노출되고 `tsc --noEmit` 은 통과.

```typescript
// ❌ evt.value (존재하지 않음) + boolean 비교 union mismatch
const v = evt.val ?? evt.value          // TS2551
if (v === true || v === 1 || v === '1') // TS2367

// ✅ evt.val 단일 사용 + as unknown 캐스트
const v = evt.val as unknown
if (v === true || v === 1 || v === '1')
```

같은 함정이 `sheet.getValue(r, '_CHK')` 반환값에도 적용 — 결과를 boolean 과 비교하려면 `as unknown` 캐스트.

[Details](references/core/events.md)

## Reference Guide

### Core References
| Topic | File | Description |
|-------|------|-------------|
| IBSheet8 Creation | [references/core/initialize-basic.md](references/core/initialize-basic.md) | Basic ibsheet8 creation method |
| Cfg Properties | [references/core/initialize-cfg-properties.md](references/core/initialize-cfg-properties.md) | IBSheet8 global configuration properties |
| Col Properties | [references/core/initialize-column-properties.md](references/core/initialize-column-properties.md) | Column initialization properties |
| Column Types | [references/core/column-type-property.md](references/core/column-type-property.md) | All column types and properties |
| Column Formats | [references/core/column-format-property.md](references/core/column-format-property.md) | Cell display format definitions |
| Events | [references/core/events.md](references/core/events.md) | Full event list and usage |
| pagnation, Count Indicator| [references/core/pagnation-rowCountIndicator.md](references/core/pagnation-rowCountIndicator.md) | pagnation, row count indicator properties |
| API Methods | [references/core/api-methods.md](references/core/api-methods.md) | IBSheet8 manipulation methods |
| **Advanced Patterns** | [references/core/advanced-patterns.md](references/core/advanced-patterns.md) | Focus/Selection, 행 추가/삭제, AddEdit/ChangeEdit, getSaveJson, 무한 스크롤, 변경 롤백, focus 이벤트 차단, Row Context Menu |

### Feature Guides
| Topic | File | Description |
|-------|------|-------------|
| Grouping | [references/features/grouping.md](references/features/grouping.md) | Row grouping |
| Summary/Subtotal | [references/features/summary.md](references/features/summary.md) | FormulaRow, SubTotal |
| Pivot | [references/features/pivot.md](references/features/pivot.md) | Pivot table |
| Formula | [references/features/formula.md](references/features/formula.md) | Auto-calculation between columns |
| Attribute Formula | [references/features/attribute-formula.md](references/features/attribute-formula.md) | Dynamic property setting |
| Tree Grid | [references/features/tree-grid.md](references/features/tree-grid.md) | Hierarchical data |
| Freeze/Merge | [references/features/frozen-merge.md](references/features/frozen-merge.md) | Row/column freeze, cell merge |
| Export/Import | [references/features/export-import.md](references/features/export-import.md) | Excel, PDF conversion |
| Validation | [references/features/validation.md](references/features/validation.md) | Input value validation |
| **Custom Plugins (G-LIS)** | [references/features/custom-plugins.md](references/features/custom-plugins.md) | `sheet.insertRow(pos?)`, `sheet.getSelectedRows2()` 등 `window.IBSheet.Plugins` 등록 커스텀 메서드. Nexacro insertRow 1:1 매핑용 |

### Framework Integration
| Topic | File | Description |
|-------|------|-------------|
| React | [references/integration/react.md](references/integration/react.md) | React componentization |
| Vue | [references/integration/vue.md](references/integration/vue.md) | Vue componentization |

### Troubleshooting
| Topic | File | Description |
|-------|------|-------------|
| Common Errors | [references/troubleshooting/common-errors.md](references/troubleshooting/common-errors.md) | Error causes and solutions |

## Templates

### Basic
- [assets/templates/basic/simple-grid.html](assets/templates/basic/simple-grid.html) - Minimal configuration grid
- [assets/templates/basic/readonly-grid.html](assets/templates/basic/readonly-grid.html) - Read-only grid

### CRUD
- [assets/templates/crud/standard-crud.html](assets/templates/crud/standard-crud.html) - Standard CRUD grid
- [assets/templates/crud/batch-crud.html](assets/templates/crud/batch-crud.html) - Batch save method

### Advanced
- [assets/templates/advanced/master-detail.html](assets/templates/advanced/master-detail.html) - Master-detail
- [assets/templates/advanced/tree-grid.html](assets/templates/advanced/tree-grid.html) - Tree grid
- [assets/templates/advanced/pivot-table.html](assets/templates/advanced/pivot-table.html) - Pivot table

### Framework
- [assets/templates/framework/react-component.jsx](assets/templates/framework/react-component.jsx) - React component
- [assets/templates/framework/vue-component.vue](assets/templates/framework/vue-component.vue) - Vue component

## IBSheet8 공식 매뉴얼

IBSheet8 전체 공식 매뉴얼이 `references/ibsheet-official-manual/` 경로에 있습니다. 위 Reference Guide에서 다루지 않는 상세 API, 속성, 이벤트, 스타일 가이드 등이 필요할 때 참고하세요.

## Drag & Drop (트리 그리드)

### onEndDrag 이벤트 타이밍

`onEndDrag`는 **드랍이 확정되기 전에 호출**될 수 있다. 핸들러 안에서 즉시 `getDataRows()`를 호출하면 이동 전 순서가 반환될 수 있으므로, 외부 데이터 소스와 동기화할 때는 `setTimeout(() => {...}, 0)`으로 감싸서 IBSheet 내부 처리 완료 후에 수행해야 한다.

### onEndDrag evt.type

| type | 의미 |
|------|------|
| 0 | 드래그 불가 |
| 1 | `torow` 위쪽에 드랍 |
| 2 | `torow`의 자식 노드에 드랍 (트리) |
| 3 | `torow` 아래쪽에 드랍 |
| 4 | 시트 외부 영역에 드랍 |

리턴 값으로 동일한 값을 지정하여 드랍 위치를 오버라이드하거나, 0을 리턴하여 드래그를 취소할 수 있다.

### 드래그 후 행 객체 속성

`getDataRows()` 반환 배열의 각 행 객체에 다음 속성이 설정된다:

| 속성 | 설명 |
|------|------|
| `Moved: 1` | 사용자 드래그로 이동된 행에만 설정 |
| `OrgIndex` | 이동 전 위치 (1-based) |
| `HasIndex` | 현재 위치 (1-based, 첫 행 = 1) |

### 드래그 활성화 설정

```javascript
Cfg: {
  CanDrag: 1,     // 행 드래그 허용
  MainCol: 'name' // 트리의 메인 컬럼 (트리 그리드 필수)
}
```

### React에서 onEndDrag + 외부 상태 동기화 패턴

```javascript
Events: {
  onEndDrag: (evt) => handleEndDragRef.current(evt),
}

// 핸들러 (useRef 패턴 — stale closure 방지)
handleEndDragRef.current = (evt) => {
  if (evt.type === 0 || evt.type === 4) return

  // 반드시 setTimeout으로 감싸서 IBSheet 내부 행 이동 완료 후 동기화
  setTimeout(() => {
    const dataRows = sheet.getDataRows() // 이동 완료된 순서
    // ... 외부 데이터 소스 동기화
  }, 0)
}
```

## Important Notes

1. **Initialization Timing**: Call `IBSheet.create()` after `DOMContentLoaded` or after the container is rendered
2. **Multiple IBSheet8 Instances**: Each ibsheet8 must have a unique ID (a global object is created based on the assigned ID)
3. **Col Name**: All column Names within a single ibsheet8 must be unique
4. **Event Context**: `this` inside event handlers refers to the ibsheet8 object
5. **Row Object**: Every row is a row object, not an index (number)
6. **STATUS**: Uses Added, Changed, Deleted instead of I, U, D
7. **Undeclared columns are dropped**: `loadSearchData` 응답에 포함되어도 `Cols` 에 선언되지 않은 컬럼 값은 행 객체에 보존되지 않는다. 화면에 표시 안 하지만 저장 payload 에 필요한 컬럼은 반드시 `Visible: 0` 으로 선언.
8. **`Type:'Date'` getValue 는 컬럼의 `DataFormat` 형식 string 반환 (default)** — 매뉴얼 `props/cfg/get-by-data-format.md` 명시: `Cfg.GetByDataFormat` 의 default 가 `1(true)` 라 옵션 명시 없어도 **DataFormat 형식 문자열 반환**. **DataFormat 옵션이 없으면 fallback 으로 timestamp(ms) 반환** — 즉 `Format` 만 설정하고 `DataFormat` 누락 시 INSERT 실패의 흔한 원인. `IB_Preset.YMD` / `IB_Preset.YM` 등 프리셋은 `DataFormat` 명시되어 있어 안전.

### 컬럼 숨김 — `Visible: 0` 만 작동 (Hidden 은 무시됨)

> ⛔ **`Hidden: true` 는 IBSheet8 에서 인식되지 않는다**. 옵션 객체에는 그대로 저장되지만 렌더링 단계에서 무시되어 컬럼 헤더와 데이터가 화면에 그대로 노출된다. 과거 1회 사고: AS-IS 캡처와 비교 시 hidden 컬럼이 헤더에 영문 컬럼명(prflRqstSno, afilCd 등) 으로 그대로 보였다.
>
> 정식 옵션은 **`Visible: 0`** (또는 `Visible: false`) — 공식 매뉴얼 `props/col/visible`. 컬럼 자체를 비가시 처리하면서 행 객체에는 값을 보존한다.

서버 select 응답에 포함되어 UPDATE/INSERT SQL 에서 NOT NULL 인 컬럼이지만 화면에는 표시할 필요가 없는 경우 (예: 시퀀스, 합성 키, 감사 필드), 반드시 Cols 에 `Visible: 0` 으로 선언한다. 선언하지 않으면 행 객체에서 값이 사라져 다음 저장 호출 시 NULL 이 전송된다.

```javascript
Cols: [
  { Header: '코드', Name: 'code', Type: 'Text', Width: 100 },
  { Header: '명칭', Name: 'name', Type: 'Text', Width: 300 },
  // ✅ 화면에는 안 보이지만 UPDATE SET srchSeq=? 에 필요 → Visible: 0 으로 보존
  { Name: 'srchSeq', Type: 'Int', Visible: 0 },
  // ❌ 금지 — Hidden: true 는 IBSheet8 에서 무시됨. 컬럼이 그대로 화면에 노출
  // { Name: 'srchSeq', Type: 'Int', Hidden: true },
]
```

증상 1 (Hidden 사용 시): AS-IS 에서는 5컬럼 그리드인데 TO-BE 에서는 hidden 컬럼이 모두 헤더에 노출되어 14~24 컬럼이 보임. 헤더 텍스트가 `prflRqstSno`, `afilCd` 같은 raw 컬럼명으로 표시.
증상 2 (선언 누락 시): 저장 시 `ORA-01407: cannot update ... to NULL`. AS-IS Nexacro 페이로드에는 해당 컬럼이 들어 있지만 IBSheet 기반 TO-BE 페이로드에는 빠져 있다 (Nexacro NormalDataset 은 응답 컬럼을 자동 보유하는 반면 IBSheet 은 그렇지 않음).

### 그리드 가로폭 — 표준 = 글로벌 `FitWidth:1` + `RelWidth` 자동 주입

**폭 채움 표준**: 두 가지가 전역 자동 적용된다 —
- `commonOptions` 글로벌 **`FitWidth:1`** (모든 그리드 기본값)
- `onBeforeCreate` **`RelWidth = Width` 자동 주입** (모든 컬럼)

→ 화면 코드는 **`Width` 픽셀만 지정**하면 컨테이너 폭에 맞춰 자동 stretch 된다. `FitWidth`·`RelWidth` 를 화면에서 직접 적을 필요 없다.

> ⛔ **`Cfg.FitColumns` 는 IBSheet8 에 없는 no-op 옵션 — 쓰지 마라.** 과거 이 문서가 "사실상 표준(102개 화면)" 으로 **잘못 기재**해 137개 화면에 전파됐고 2026-05 전량 제거. 폭 채움 표준은 위의 **FitWidth + RelWidth** 다 (FitColumns 아님).

```javascript
// ✅ Width 픽셀만 지정 — RelWidth 자동 주입이 컨테이너 폭에 맞춰 stretch (FitColumns 불필요)
Cols: [
  { Header: '프로파일코드', Name: 'prflCd', Width: 80 },
  { Header: '프로파일명',   Name: 'prflNm', Width: 180 },
  { Header: '신청자',       Name: 'rqstrNm', Width: 71 },
  { Header: '신청일시',     Name: 'regDtm', Width: 108 },
  { Header: '승인상태',     Name: 'aprvStatCd', Width: 62 },
]
```
### `Type:'Date'` getValue — `DataFormat` 명시 시 자동 string, 누락 시 timestamp(ms)

`props/cfg/get-by-data-format.md` 매뉴얼 명시: **`Cfg.GetByDataFormat` 의 default 는 `1(true)`** — 옵션 명시 없어도 컬럼에 `DataFormat` 이 설정되어 있으면 `getValue` 가 자동으로 **DataFormat 형식 string** 반환. 단 컬럼에 `DataFormat` 이 없으면 fallback 으로 timestamp(ms) 반환.

```javascript
// ✅ DataFormat 명시 — getValue 자동 string ('20240709')
{ Name: 'startDt', Type: 'Date', Format: 'yyyy-MM-dd', DataFormat: 'yyyyMMdd' }
const v = sheet.getValue(row, 'startDt')  // '20240709' string

// ✅ IB_Preset 사용 (DataFormat 미리 박혀 있음 — 안전)
{ Name: 'startDt', Extend: IB_Preset.YMD }   // DataFormat: 'yyyyMMdd'
{ Name: 'jobYm',   Extend: IB_Preset.YM }    // DataFormat: 'yyyyMM'

// ❌ DataFormat 누락 — Format 만 있음 → getValue 가 timestamp(ms) 반환
{ Name: 'startDt', Type: 'Date', Format: 'yyyy-MM-dd' }   // DataFormat 없음
const v = sheet.getValue(row, 'startDt')  // number(ms) — INSERT VARCHAR(8) 컬럼에 실패
```

⚠️ **함정 — 저장 SVC 실패의 흔한 원인**: 컬럼에 `Format` 만 있고 `DataFormat` 없음 → `getValue` ms timestamp 반환 → `String(v)` → `"1672531200000"` 13자 숫자가 DB VARCHAR(8/6) 컬럼에 INSERT 시도 → 사이즈 초과 / 타입 변환 실패 → 트랜잭션 롤백.

**해결 우선순위**:
1. **IB_Preset (YMD/YM/MD/HMS 등) 사용** — `DataFormat` 미리 박혀 있어 가장 안전
2. **DataFormat 직접 명시** — 백엔드 DB 컬럼 포맷에 맞춰 (`yyyyMMdd`/`yyyyMM` 등)
3. **`Cfg.GetByDataFormat:1` 명시** — default true 라 사실상 동일하지만 의도 보존 (`feedback_skill_rules_over_defaults`)
4. **`Cfg.GetByDataFormat:0` 명시한 화면**에서는 `new Date(ms).toISOString()` 으로 수동 변환 (특수 상황만)

### 셀 머지 — `Cfg.DataMerge: 1` + 컬럼별 `ColMerge: 0` 차단

XFDL Grid `<Cell suppress="2"/"3"/>` 동작(같은 값 연속 행 세로 머지)을 IBSheet8 에서 재현. `Cfg.DataMerge: 1` 켜면 좌측부터 같은 값 연속 행이 자동 세로 머지. **머지 도중에 끊고 싶은 컬럼은 `ColMerge: 0` 명시**.

```javascript
Cfg: { DataMerge: 1, ... },
Cols: [
  { Name: 'custCd',         Width: 95,  Align: 'Center' },              // 머지 O (DataMerge 기본)
  { Name: 'custNm',         Width: 340, Align: 'Center' },              // 머지 O
  { Name: 'smplTakePlanDt', Width: 260, Align: 'Center' },              // 머지 O
  { Name: 'seqn',           Width: 180, Align: 'Center', ColMerge: 0 }, // 머지 X — 명시 차단
  { Name: 'chgrId',         Width: 125, Align: 'Center', ColMerge: 0 },
  { Name: 'userNm',         Width: 125, Align: 'Center', ColMerge: 0 },
]
```

**Why**: `DataMerge:1` 은 좌측부터 연속 머지를 시도하는데, 머지가 필요 없는 컬럼(방문순번/사번/사원명 등 행별 별개)에 `ColMerge:0` 을 명시하지 않으면 같은 값이 우연히 인접할 때 의도치 않은 머지 발생. XFDL `suppress` 미명시 컬럼 = `ColMerge:0` 매핑이 정공.

**How to apply**: XFDL `<Column>` 정의에서 `suppress="N"` 있는 컬럼은 IBSheet 에서 머지 ON (DataMerge:1 기본 적용), 없는 컬럼은 `ColMerge:0` 명시. 변환 사례: UISL9018PM (`custCd/custNm/smplTakePlanDt` 머지 + 나머지 차단), UIBL0510M (`lvlNm` 머지).

⚠️ **함정** — 원본 XFDL `<Cell suppress>` 가 한 개도 없는 화면에 `DataMerge:1` / `PrevColumnMerge:1` 이 박혀 있으면 사용자가 "동일 내용 행이 합쳐진다" 라고 보고 (사례: UISL0069M00 수가변경현황 고객리스트 — `lhqr/brnc/cstat` 동일값 자동 세로 병합). 원본에 머지 의도 없으면 두 옵션 모두 **제거**가 정답. `PrevColumnMerge:1` 은 한 행 내 좌→우 인접 동일값 컬럼 가로 머지 트리거 — 머지 의도 없으면 같이 OFF. XFDL→React 변환 시 suppress 카운트별 분기는 `nexacro-to-react/ibsheet.md` "판정 절차" 참조.

```javascript
// ❌ 원본에 머지 의도 없는데 옵션이 박힘
Cfg: { DataMerge: 1, PrevColumnMerge: 1, CanEdit: 0 }

// ✅ 두 옵션 제거 (default 0)
Cfg: { CanEdit: 0 }
```

### 머지 셀 수직 정렬 — `VAlign: 'Top'`

머지된 셀의 텍스트가 셀 첫 행 위치에 정렬되어야 하는 경우 (Nexacro Grid `suppress` 기본 동작이 시각적 TOP) — `VAlign: 'Top'` 명시. **대소문자: V 대문자 + a 소문자** (case-sensitive). 값: `'Top'` / `'Middle'`(기본) / `'Bottom'`.

```javascript
// ✅ 머지 컬럼에 VAlign:'Top' — 머지 셀이 위로 정렬
{ Name: 'custCd', Width: 95, Align: 'Center', VAlign: 'Top' }
{ Name: 'custNm', Width: 340, Align: 'Center', VAlign: 'Top' }

// ❌ VAlign (lowercase a 등) / Valign / VerticalAlign — IBSheet 가 무시
```

`references/ibsheet-official-manual/props/col/v-align.md` 참조.

### 조회 후 9개 Bool 컬럼 헤더 체크 일괄 동기화 — `syncHeaderCheck()` 1줄 (AS-IS checkboxAllByColumn 루프 대체)

AS-IS Nexacro 화면에서 `fn_apiCallback case "searchPrnt"` 안에 9개 Bool 컬럼별 `checkboxAllByColumn(key, cellIndex)` 9건 루프로 헤더 ⬜/☑ 텍스트를 수동 갱신하는 패턴이 보이면, IBSheet8 의 공식 API `sheet.syncHeaderCheck()` 한 줄로 통째로 대체된다.

```typescript
// ❌ AS-IS Nexacro 패턴을 그대로 직역하지 말 것 — IBSheet7 시절 수동 구현
for (const colName of ['gtstPrntYn', 'cellTstPrntYn', 'ttstPrntYn', /* ... 9건 */]) {
  const allY = rows.every((r) => r[colName] === 'Y')
  // 수동으로 헤더 row 의 셀 텍스트 ⬜/☑ 직접 변경 ...
}

// ✅ IBSheet8 표준 — loadSearchData 직후 1줄
const sheet = sheetRef.current
sheet.loadSearchData({ data: rows, sync: 1 })
;(sheet as { syncHeaderCheck?: () => void }).syncHeaderCheck?.()
```

**동작**: `HeaderCheck: 1` 이 선언된 모든 Bool 컬럼에 대해 데이터 행의 값을 검사 → 모든 row 가 `TrueValue` 면 헤더 체크박스 ☑, 하나라도 다르면 ⬜ 로 자동 갱신.

근거: `references/ibsheet-official-manual/funcs/core/sync-header-check.md` (Since 8.0.0.5). "HeaderCheck 가 선언된 모든 열에 대해 데이터 행의 값에 따라 헤더 체크를 동기화합니다".

⚠️ **AS-IS 저장/삭제 후처리 `gfn_initCheckboxAll(grd)` (헤더 _CHK 셀을 "0" 으로 리셋) 은 IBSheet8 에서 대개 불필요** — 저장 후 `loadSearchData`/`removeAll` 재로드나 삭제(removeRow/deleteRow) 시 `HeaderCheck` 가 행 기준으로 자동 재계산되기 때문. 명시 갱신이 필요하면 `syncHeaderCheck()`. **`setHeaderCheck(col, 0)` 은 IBSheet7 API 라 IBSheet8 에선 no-op** (`(sheet as any).setHeaderCheck?.()` 로 써도 조용히 무동작 — 죽은 코드. IBSheet8 등가는 `setAttribute(headerRow, col, "Checked", 0)`, 단 자동 재계산이라 호출 자체가 불필요). 사례: UIBL0690P (저장/삭제 후처리 — 자동 재계산에 의존).

### 헤더 클릭 → 컬럼 전체 토글은 IBSheet8 default behavior (별도 핸들러 불필요)

AS-IS 의 `div_main_grd_list_onheadclick` 같은 핸들러로 헤더 셀 클릭 시 현재 ⬜/☑ 상태에 따라 모든 row 의 컬럼 값을 'Y'/'N' 으로 일괄 setColumn 하는 패턴은 **IBSheet7 의 수동 구현**. IBSheet8 에서는 `Header: { Value: '', HeaderCheck: 1 }` 만 선언해도 헤더 체크박스가 자동으로 클릭 → 전체 row 값 토글 + 헤더 상태 갱신을 양방향 처리.

근거: `references/integration/IBSheet7_to_IBSheet8_guide.md` line 166 — "HeaderCheckSync — Always synced — Default behavior in IBSheet8".

따라서 IBSheet8 마이그레이션에서는 onHeaderClick 핸들러를 옮길 필요 없고, `HeaderCheck:1` 만 보장하면 끝. 양방향 동기화는 위의 `syncHeaderCheck()` 호출 한 번으로 완성 사이클을 닫는다 (조회 직후 헤더 초기 상태 갱신).

### 그리드 위에 toolbar 추가 시 부모 height 측정 차단 — `flex flex-col` + `flexShrink:0`

IBSheet 가 들어있는 wrapper 아래/위에 다른 UI 영역 (일괄 적용 toolbar / 상단 액션 버튼 등) 을 추가할 때, 단순히 형제 div 로 두면 IBSheet 의 부모 height 가 동적이 되어 마운트 시점에 0×0 측정되는 회귀가 잘 발생한다 (UIBL0710M 라운드 5 회귀와 동일 원인).

```tsx
// ✅ wrapper 를 flex flex-col + min-h-0 로
<div className="flex min-h-0 flex-col" style={{ flex: '1 1 auto', minWidth: 0 }}>
  {/* toolbar — 고정 height + flexShrink:0 으로 부모 height 영향 차단 */}
  <div style={{ flexShrink: 0, height: 36, marginBottom: 6 }}>
    {/* ... 일괄 적용 콤보 / 액션 버튼 ... */}
  </div>
  {/* 그리드 — relative + min-h-0 (UIBL0910M 표준) */}
  <div className="relative min-h-0" style={{ flex: '1 1 auto' }}>
    <IBSheetReact ref={sheetRef} sync={true} ... />
  </div>
</div>
```

**Why**: `flexShrink:0` + 고정 `height` 은 toolbar 가 어떤 컨텐츠를 가져도 그리드 영역의 측정에 영향을 안 주고, `min-h-0` 은 Tailwind 의 `min-height:auto` default 를 override 해 flex item 이 자식 컨텐츠보다 작아질 수 있게 한다. 라운드 5 의 "그리드 0×0" 회귀를 trace 하여 도출한 패턴.

### 동적 헤더 텍스트 변경 — `setHeader` / `setColumnVisible` 은 존재하지 않는 API (silent fail)

조회 조건(년월/구분 등) 에 따라 그리드 헤더 문구가 바뀌는 화면에서 `sheet.setHeader(...)` / `sheet.setColumnVisible(...)` 를 호출하면 **에러도 안 나고 동작도 안 한다** — IBSheet8 API 명세에 없는 메서드. TypeScript 가 `any` 로 빠지면 빌드도 통과해 디버깅이 길어진다.

```javascript
// ❌ 존재하지 않는 API — silent fail
sheet.setHeader('amt1', '2026-01')      // 호출되지만 헤더 안 바뀜
sheet.setColumnVisible('amt2', false)   // 호출되지만 컬럼 안 숨겨짐

// ✅ 헤더 텍스트 변경 — Header 행을 row 로 보고 setValue
sheet.setValue(sheet.getRowById('Header'), 'amt1', '2026-01')

// ✅ 컬럼 가시성 — hideCol / showCol (공식 API)
sheet.hideCol('amt2')   // 숨김
sheet.showCol('amt2')   // 보임
```

**Why**: IBSheet8 의 헤더는 별도 API 영역이 아니라 `id === 'Header'` 인 row 로 모델링되어 있다. 컬럼 가시성도 `Visible` 옵션 변경이 아니라 dedicated `hideCol`/`showCol` 메서드로 변경한다 (`funcs/core/hide-col.md`, `funcs/core/show-col.md`).

근거: `references/ibsheet-official-manual/funcs/core/hide-col.md`, `show-col.md`. `setHeader` / `setColumnVisible` 는 공식 매뉴얼 어디에도 없음.

⚠️ **함정 — 머지된 헤더 셀은 첫 셀만 setValue 가 먹는다 → 머지 해제 후 setValue 반복 후 재머지**

`Cfg.HeaderMerge` 로 자동 머지된 헤더 영역에 `setValue` 를 호출하면 **머지된 영역 중 첫 셀만 새 값으로 바뀌고** 나머지 셀은 옛 값을 유지한다 (공식 매뉴얼 명시). 머지가 행/열 양쪽이면 시각상 일부 셀만 바뀐 채로 깨진다.

```javascript
// ❌ 머지 상태에서 setValue — 첫 셀만 바뀌고 나머지는 옛 값 유지
sheet.setValue(sheet.getRowById('Header'), 'amt1', `${yy}-01`)
sheet.setValue(sheet.getRowById('Header'), 'amt2', `${yy}-02`)
// → 머지 첫 셀만 갱신, 시각상 헤더 깨짐

// ✅ 머지 해제 → setValue 반복 → 재머지 (3단계 필수)
const header = sheet.getRowById('Header')

// 1) 머지 해제 — Header 영역만 (Body 머지에는 영향 없음)
sheet.setAutoMergeCancel({ mode: 'Header' })

// 2) 모든 셀에 setValue 반복
sheet.setValue(header, 'amt1', `${yy}-01`)
sheet.setValue(header, 'amt2', `${yy}-02`)
sheet.setValue(header, 'amt3', `${yy}-03`)
// ...

// 3) 재머지 — headerMerge 값에 따라 방향 결정
sheet.setAutoMerge({ headerMerge: 5 })   // 5: 같은 값이면 행+열 양방향 자동 머지
```

`Cfg.HeaderMerge: N` 은 **초기 머지만** 적용. 동적 텍스트 변경 후 즉시 머지가 재계산되지 않으므로 `setAutoMerge` 를 명시 호출해야 한다. `headerMerge` 값 의미는 `Cfg.HeaderMerge` 와 동일 (1=행머지 / 4=열머지 / 5=행+열). 헤더 머지 의미표는 nexacro-to-react `ibsheet.md` "Cfg.HeaderMerge 값 의미" 섹션 참조.

근거: `references/ibsheet-official-manual/funcs/core/set-auto-merge.md`, `set-auto-merge-cancel.md`, `props/cfg/header-merge.md`.

### `Format` 의 4-section 문자열 — `'positive;negative;zero;null'` (0/null 빈 셀 표시)

원본 Nexacro 의 수량/금액 컬럼은 0 / null 값을 **빈 셀로** 표시하는 경우가 많다 (sum 행만 0 표시, 데이터 행은 공란). IBSheet8 `Format` 토큰은 Excel 호환 `positive;negative;zero;null` 4 섹션 문법을 지원하므로, **마지막 두 섹션을 빈 문자열로** 두면 0/null 이 자동 빈 셀.

```javascript
// ❌ 단일 섹션 — 0 값이 '0' 으로 그대로 보임
{ Name: 'amt', Type: 'Int', Format: '#,##0' }
// 데이터: [1000, 0, -500, null] → 표시: ['1,000', '0', '-500', ''] (Int 의 null 은 자동 공란이지만 0 은 0 으로 표시)

// ✅ 4 섹션 — 0/null 빈 셀
{ Name: 'amt', Type: 'Int', Format: '#,##0;-#,##0;;' }
// 데이터: [1000, 0, -500, null] → 표시: ['1,000', '-500', '', '']
//   섹션1 (positive): '#,##0'
//   섹션2 (negative): '-#,##0'
//   섹션3 (zero):     ''       ← 빈 문자열 = 빈 셀
//   섹션4 (null):     ''       ← 빈 문자열 = 빈 셀

// ✅ 0 은 보이고 null 만 빈 셀로 (3 섹션 — zero 명시, null 미지정 = 빈 셀)
{ Name: 'amt', Type: 'Int', Format: '#,##0;-#,##0;0' }

// ✅ Float 도 동일 패턴
{ Name: 'rate', Type: 'Float', Format: '#,##0.00;-#,##0.00;;' }
```

**Why**: IBSheet8 `Format` 은 내부적으로 Excel 호환 `;` 구분 4 섹션 파서를 사용. 섹션 누락 시:
- 1 섹션만 (`'#,##0'`) → 모든 값에 동일 형식 적용 (0 은 `'0'` 표시)
- 2 섹션 (`'#,##0;-#,##0'`) → positive/negative 만 분기, zero/null 은 positive 적용
- 3 섹션 → positive/negative/zero 분기, null 은 빈 셀 (Type 별 기본)
- 4 섹션 → 모두 명시

**How to apply**:
1. AS-IS xfdl `<Cell text="bind:amt" displaynulltext=""/>` 또는 `expr:amt == 0 ? '' : amt` 패턴이 보이면 **4-section Format 사용 신호**.
2. 합계 행만 0 을 보이게 하려면 컬럼 Format 은 4-section (`'#,##0;-#,##0;;'`) 으로 두고 `Def.FormulaRow.{col}.Format` 에 `'#,##0'` (1-section) 으로 합계 셀만 별도 지정.
3. `Type:'Text'` + `*Disp` 컬럼으로 풀어 쓰던 화면도 단순 숫자/통화 컬럼이면 4-section Format 으로 단순화 가능.

근거: `references/core/column-format-property.md` "4-section format string". Excel `;` 구분 문법과 동일.

### IBSheet 영역 HTML→PNG 캡처 — `font-family` fallback 깨짐 함정

화면캡처 (html-to-image / html2canvas 등 foreignObject SVG 기반) 으로 IBSheet 가 포함된 영역을 PNG 로 떨굴 때 **그리드 셀의 글자만 통째로 누락**되고 격자/배경만 잡히는 사고가 발생한다. canvas 미사용 / input.value 미사용 / transform3d 미사용 / color cascade 정상이라 원인을 찾기 어렵다.

**진짜 원인**: IBSheet 의 기본 font-family chain 첫 family 가 `"Noto Sans CJK kr"` 인데 (`appx/design.md` L62 `.IBMain{font-family:'Noto Sans CJK kr',...}` 참고), 이 family 는 `document.fonts` 에 **등록되지 않은 미존재 폰트**다. 화면에서는 브라우저가 두 번째 `"Noto Sans KR"` 로 자동 fallback 해서 정상이지만, html-to-image 의 foreignObject SVG 변환 시점에는 SVG 안에서 fallback 일관성이 깨져 첫 폰트의 빈 글리프로 렌더링 → 글자 누락.

✅ 해법 — 캡처 직전 IBSheet wrapper(`[class*="IBGY"]`) 의 모든 자식 element 의 `style.fontFamily` 를 등록된 폰트로 inline 강제 override, 캡처 후 원복:

```ts
const FALLBACK_FONT = '"Noto Sans KR","Pretendard","Malgun Gothic","Apple SD Gothic Neo",sans-serif'
const overridden: Array<{ el: HTMLElement; prev: string }> = []
const apply = () => {
  target.querySelectorAll<HTMLElement>('[class*="IBGY"], [class*="ibsheet"], [class*="IBSheet"]')
    .forEach((el) => {
      overridden.push({ el, prev: el.style.fontFamily })
      el.style.fontFamily = FALLBACK_FONT
    })
}
const restore = () => { overridden.forEach(({el, prev}) => { el.style.fontFamily = prev }); overridden.length = 0 }

try {
  if (document.fonts?.ready) await document.fonts.ready  // webfont 로드 완료 대기
  apply()
  await new Promise<void>((r) =>                          // layout 정착 대기 (reflow 포함)
    requestAnimationFrame(() => requestAnimationFrame(() => setTimeout(r, 50))),
  )
  const { toPng } = await import('html-to-image')
  await toPng(target, opts)                               // warmup (1차 결과 버림)
  const dataUrl = await toPng(target, opts)               // 2차 = 최종 결과
  // download
} finally {
  restore()
}
```

추가 권장:
- `pixelRatio: 2` + `width/height` 명시 (getBoundingClientRect 측정)
- `cacheBust: true` + `skipFonts: false`
- **html2canvas 1.4.1 은 Tailwind v4 의 `oklch()` 컬러 함수를 parse 실패해 throw**. 프로젝트는 Tailwind v4 사용이므로 화면캡처는 **html-to-image** 가 안전.
- IBSheet 컬럼 폭이 매우 많아진 화면(예: `Visible:0` hidden 컬럼 다수) 은 2회 캡처 + foreignObject 직렬화에 수십 초 소요 — `useLoading.run(asyncFn, t('message.capturing'))` 으로 사용자 입력 block + 진행 표시 필수.

## Cfg.SearchMode 정책

- ✅ **`SearchMode: 0`** (클라이언트 데이터만, 서버 페이징 없음) — 사용 가능
- ✅ **`SearchMode: 2`** (서버 페이징 + `loadSearchData({append:1})` 무한 스크롤) — 사용 가능. 표준 패턴은 아래 "무한 스크롤 페이징" 섹션
- ⛔ **`SearchMode: 1`** — 사용 금지 (검증되지 않은 동작 / 프로젝트 표준 외)
- ⛔ **`Cfg.IgnoreFocused: 1`** — 어떤 경우에도 사용 금지 (위 Master/Detail 섹션 참조)
- ⛔ **`Col.RelWidth`** — 사용 금지 (Width 픽셀 고정, 위 RelWidth 섹션 참조)

무한 스크롤 페이징(UILA0074M00, UILM2204M00, UILM2000M00 등 다수)은 `SearchMode: 2` + `loadSearchData({ append: 1, sync: 1 })` + `onVScrollEndPoint` + `onScroll` 폴백 조합이 표준. 상세 패턴은 `references/core/advanced-patterns.md` "무한 스크롤 페이징" 섹션.

## 고급 패턴 (Focus / Selection / Edit / Save / Context Menu)

Master/Detail · 행 편집/추가/삭제 · 무한 스크롤 · Row Context Menu 등 고급 패턴은 **`references/core/advanced-patterns.md`** 에 분리되어 있다. 평면 그리드 화면만 다룬다면 읽지 않아도 됨.

`advanced-patterns.md` 수록 패턴 요약:
- **Focus / Selection**: `Cfg.IgnoreFocused` 정책, `onFocus + evt.row===evt.orow` 가드, `loadSearchData` 후 첫 행 자동 강조만/`onFocus` 미발화 함정, `onFocus` 가 읽는 컬럼은 `Visible: 0` 으로 보존
- **체크박스 수집**: `getRowsByChecked(colName)` — 외부 state 자동 바인딩 안 됨
- **행 추가/삭제**: `addRow({ next })` 는 "위(앞)에 신규" / `Added` 는 `removeRow`, 기존 행은 `deleteRow` / **Nexacro `insertRow(rowposition)` 매핑은 `sheet.insertRow(pos?)` 커스텀 Plugin 사용** → [features/custom-plugins.md](references/features/custom-plugins.md)
- **행번호 / 편집 매트릭스**: `Name:'SEQ'` 자동 채움 / `AddEdit`·`ChangeEdit` 매핑 (`CanEdit:1` 일괄 금지)
- **Enum 함정**: `Enum + Required:1` firstChild 오류, 행단위 `setAttribute` 매칭 0~1건 함정, `onStartEdit` 내 행단위 setAttribute 금지
- **저장**: `getSaveJson()` + `STATUS` → `_rowtype` 매핑, `Mode` (잘못된 키) → `saveMode` 정정
- **무한 스크롤**: `loadSearchData({ append:1 })` + `onVScrollEndPoint` + `onScroll` 폴백 표준 패턴
- **변경 롤백**: `reset()` 없음 — `revertRow`/`revertData`/`removeRow`/`acceptChangedData` 용도별 매트릭스
- **focus + 이벤트 차단**: `removeRow` 자동 포커스 이동 → `onBeforeFocus` 재발화 / `focus(..., ignoreEvent=1)` 는 `onFocus` 까지 차단 함정 / **bypass 플래그** 패턴
- **Master/Detail 흐름**: 자식 `onSearchFinish` 후 부모 포커스 복귀, IBSheet 인덱스 vs 외부 Dataset 매칭
- **Row Context Menu**: `Def.Row.Menu.Items` + `OnSave` 콜백, React 외부 콜백 한계 (전역 store + Host 패턴)


## `Type:'Enum'` 컬럼 — `Enum` / `EnumKeys` 문자열 leading `|` 필수

`Type:'Enum'` 컬럼이 데이터 코드와 매칭 안 되어 **셀이 공백으로 출력**되면 leading `|` 누락이 99% 원인. IBSheet8 의 Enum 은 `|` 로 split 한 첫 슬롯을 "빈 값/기본" 으로 예약. leading `|` 없으면 첫 키가 빈슬롯 자리로 들어가 **실제 코드와 1칸씩 어긋남** → 매칭 실패.

❌ 셀 공백 (leading `|` 누락):
```typescript
const enumStr = items.map((r) => r.itemVal01).join('|')   // "Clear|Used|..."
const keyStr  = items.map((r) => r.sclfCd   ).join('|')   // "01|02|..."
Cols: [
  { Name: 'useStatCd', Type: 'Enum', Enum: enumStr, EnumKeys: keyStr },
]
// 데이터 useStatCd='01' → 빈슬롯(라벨 없음) 매칭 → 셀 공백
```

✅ 표준:
```typescript
const enumStr = items.length === 0 ? '|' : `|${items.map((r) => r.itemVal01).join('|')}`
const keyStr  = items.length === 0 ? '|' : `|${items.map((r) => r.sclfCd  ).join('|')}`
```

⚠️ **추가 함정** — `items` 가 **빈 배열일 때** `Type:'Enum'` 컬럼을 그대로 두면 "loadSearchData 함수에서 오류" console 출력 (UILM2204M00 검증). 빈 응답에서는 `Type:'Enum'` → `'Text'` fallback:
```typescript
items.length > 0
  ? { Name, Type: 'Enum', Enum, EnumKeys, ... }
  : { Name, Type: 'Text', ... }
```

판정 신호: 그리드 셀에 코드값 매칭 안 되고 공백 출력 + Enum 컬럼 사용 → leading `|` + 빈 배열 fallback 둘 다 점검.

⚠️ **함정 — leading `|` 비대칭 (한쪽만 누락) → 드롭다운이 가로 한 줄로 모든 옵션 합쳐 보임 (UIDT1015M00, 2026-06-02)**

`Enum` 과 `EnumKeys` **둘 중 하나에만** leading `|` 가 있고 다른 쪽이 누락된 경우, IBSheet8 가 누락 쪽의 첫 글자(예 `'선'`)를 separator 로 잡아 전체 문자열을 ONE label 로 인식 → 드롭다운 열어보면 모든 옵션이 가로로 한 줄에 `|` 로 구분된 상태의 단일 라벨로 보임.

❌ Enum 에 leading `|` 누락 (msgDiv:'S' 빈값 옵션이 mdumOptions[0] 로 prepend 된 상태에서 단순 join):
```typescript
// mdumOptions = [{value:'', label:'선택'}, {value:'BAP', label:'BAP'}, ...]
const enumStr  = mdumOptions.map(o => o.label).join('|')  // '선택|BAP|MAC|...'  ← '선' 이 separator!
const keysStr  = mdumOptions.map(o => o.value).join('|')  // '|BAP|MAC|...'      ← '|' 가 separator (한쪽만 leading)
// 결과: 드롭다운에 "택 | BAP | MAC | THIO | ..." 한 줄 텍스트로 표시 (개별 항목 선택 불가)
```

✅ '선택' placeholder + 실코드 (canonical, UIQC1105M00 패턴):
```typescript
// 실코드만 추출 (빈값 옵션은 prepend 하지 않음)
const reals = list.filter((c) => c.value !== '')
const enumStr  = `|${t('grid.optionEmpty')}|${reals.map(c => c.label).join('|')}`  // '|선택|BAP|MAC|...'
const keysStr  = `||${reals.map(c => c.value).join('|')}`                          // '||BAP|MAC|...'
// 위치별 1:1 정렬:
//   slot 0: key='',  label='선택'  ← 미선택 상태 placeholder
//   slot 1+: key=실코드, label=실명
```

✅ placeholder 불필요 (그리드 빈 셀 정공, ibsheet.md L330 권장):
```typescript
const enumStr  = `|${reals.map(c => c.label).join('|')}`   // '|BAP|MAC|...'
const keysStr  = `|${reals.map(c => c.value).join('|')}`   // '|BAP|MAC|...'
// slot 0 = (key='', label='')  → 빈 값 셀은 빈 셀로 표시 (원본 displaytype="combotext" 동작)
```

**판정 신호 변종**:
- "셀이 공백" (앞 섹션) → 둘 다 leading `|` 누락 / 빈배열 fallback 미적용
- "드롭다운이 가로 한 줄, 옵션 선택 불가" → 한쪽만 leading `|` (비대칭)

## `Formula` 가 참조하는 보조 컬럼 — `Cols` 에 hidden 으로 반드시 명시

`Formula: (p) => p.Row.X + p.Row.Y` 의 `X` / `Y` 가 데이터(row) 에 들어왔어도, **IBSheet `Cols` 에 정의되지 않으면 `p.Row` 객체에 키 자체가 없다** → `undefined` 출력.

❌ "0 / 200" 이어야 하는데 "0 / " 만 출력 (maxItmCnt 가 Cols 누락):
```typescript
Cols: [
  { Header: '검체갯수', Name: 'smplCnt', Type: 'Text',
    Formula: (p) => `${p.Row.smplCnt ?? ''} / ${p.Row.maxItmCnt ?? ''}` },
  // ← maxItmCnt 컬럼 정의 없음 → p.Row.maxItmCnt = undefined
]
```

✅ 표준 — hidden 컬럼 추가:
```typescript
Cols: [
  { Name: 'maxItmCnt', Type: 'Text', Visible: 0 },   // ← Formula 참조용 hidden
  { Header: '검체갯수', Name: 'smplCnt', Type: 'Text',
    Formula: (p) => `${p.Row.smplCnt ?? ''} / ${p.Row.maxItmCnt ?? ''}` },
]
```

원칙: `Formula` / `ColorFormula` / `TextColorFormula` / `TextStyleFormula` / `CanEditFormula` 등 `p.Row.X` 를 참조하면 X 는 무조건 `Cols` 에 정의 필요. 표시 불필요면 `Visible: 0`.

판정 신호: Formula 출력이 부분만 표시되거나 `undefined` / 빈 문자열 노출 → `Cols` 에 hidden 컬럼 누락 확인.

## ⚠ 셀 tooltip 정공 키는 `Tip` — `Tooltip` / `TooltipFormula` 는 IBSheet8 에 없는 가짜 키

XFDL `tooltiptext="bind:{col}"` 변환 시 자주 발견되는 함정. `Tooltip:1` / `TooltipFormula` 같은 키를 컬럼 옵션에 넣어도 IBSheet8 은 silent 무시. d.ts ([@ibsheet/interface/ib-interface.d.ts](node_modules/@ibsheet/interface/ib-interface.d.ts)) 검색 시 `Tooltip` 키워드 자체가 없음.

❌ 가짜 — `Tooltip` 컬럼 옵션 (IBSheet8 표준 아님, silent 무동작):
```typescript
{ Name: 'fltmg', Type: 'Lines', Tooltip: 1 }
{ Name: 'fltmg', Type: 'Lines', TooltipFormula: (fr) => fr.Row.fltmg }
```

✅ 정공 — `Tip` (d.ts L421):
```typescript
{
  Name: 'fltmg',
  Type: 'Lines',
  Tip: 1,        // boolean=1 만으로 셀 값을 hover tooltip 표시 (XFDL tooltiptext="bind:fltmg" 등가)
  ShowHint: 1,   // hint 동시 활성 (d.ts L545)
}
```

`Tip` 옵션 타입: `boolean | number | string` (d.ts L421).
- `Tip: 1` (= true): **셀 값 자체를 hover 시 자동 표시** — 가장 흔한 케이스
- `Tip: '정적 텍스트'`: 고정 텍스트 (모든 row 동일)
- `onShowTip` 이벤트 (d.ts L2447) `(evtParams) => string | void` — return 한 string 이 tip 으로 표시. **`Tip:1` 만으로 충분한 경우 굳이 이벤트 안 써도 됨** (불필요한 코드).

판정 신호:
- XFDL `tooltiptext="bind:col"` 매핑 후 hover 해도 tooltip 안 뜨면 → `Tooltip` 키 사용 의심. `Tip` 로 변경.
- IBSheet8 d.ts 에서 옵션 키 확인 습관: `grep -i {keyword}` 로 실제 존재 여부 검증.

> ⚠ **2026-06-04 UILM9001M00 / UILM9000M00 인시던트**: 두 화면의 변환 cycle 에서 5컬럼에 `Tooltip:1` (그 후 `TooltipFormula`) 잘못 사용 → develop 에 push 됨. d.ts 미검증으로 발생한 회귀.

## ⚠ `display:none` 컨테이너 내 IBSheet mount → row height 계산 무효 (탭 전환 함정)

탭 UI 에서 비활성 탭 내용을 `display:none` 으로 숨긴 상태에서 IBSheet 가 mount 되면 sheet container 의 `clientWidth / clientHeight = 0` 으로 시작. `Type:'Lines' + AutoRowHeight:1` 같은 자동 계산이 무효화되어 행이 잘려보임.

❌ 함정 — 탭 활성화 후에도 자동 재계산 안 함:
```jsx
<div style={{ display: activeTab === 'trceMgmt' ? 'flex' : 'none' }}>
  <IBSheetReact options={trceResnMesrSheetOptions} ... />
</div>
```
첫 탭 진입 시 wraith mount → 다른 탭 보였다가 돌아오면 row height 깨짐 / 멀티라인 셀 잘림.

✅ 정공 — 탭 활성 시 `fitSize/resize/renderBody` 강제 호출 useEffect:
```typescript
useEffect(() => {
  if (activeTab !== 'trceMgmt') return
  // display 가 'flex' 로 반영된 후 dimension 확정 — microtask 지연
  const id = window.setTimeout(() => {
    const s = trceResnMesrSheetRef.current as IBSheetInstance & {
      fitSize?: () => void; resize?: () => void; renderBody?: () => void
    }
    try { s?.fitSize?.() } catch {}
    try { s?.resize?.() } catch {}
    try { s?.renderBody?.() } catch {}
  }, 0)
  return () => window.clearTimeout(id)
}, [activeTab])
```

추가 권장:
- 부모 컨테이너 `overflow: hidden` → `overflow: auto` (긴 셀 스크롤 가능)
- `minHeight` 를 두 줄 분량 이상으로 (예: 180 → 220)

판정 신호: 첫 마운트 시는 정상 → 탭 전환 후 돌아오면 행이 잘리거나 첫 행만 보이는 회귀 → mount 시점 width/height 0 의심.
