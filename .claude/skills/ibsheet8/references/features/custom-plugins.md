# G-LIS 커스텀 Plugins (window.IBSheet.Plugins)

프로젝트 전역에서 모든 IBSheet 인스턴스가 공유하는 커스텀 메서드. 등록 위치: `src/lib/ibsheet/commonOptions.ts` 의 `registerCommonOptions()`.

## 동작 원리

`window.IBSheet.Plugins` 객체에 함수를 등록하면 IBSheet 코어가 모든 인스턴스에 prototype 으로 노출한다. 즉 `sheet.커스텀함수()` 형태로 그대로 호출 가능. `IBSheetStatic.Plugins: Record<string, unknown>` 타입이라 임의 키 할당 OK (`src/types/ibsheet.d.ts` 참조).

```ts
window.IBSheet.Plugins = window.IBSheet.Plugins || {}
window.IBSheet.Plugins.myFn = function (this: IBSheetInstance, ...args) { ... }

// 모든 sheet 에서 호출 가능
sheet.myFn(...)
```

`this` 타입은 반드시 `IBSheetInstance` 로 명시해야 `this.getFocusedRow()` 등 내부 API 자동완성/타입체크가 동작한다.

## 등록된 커스텀 메서드

### `sheet.insertRow(pos?)`

포커스된 행 주변에 신규 행을 1건 추가. **Nexacro Dataset `insertRow(rowposition)` 패턴의 1:1 매핑.**

| `pos` | 동작 |
|------|------|
| 미지정 / `1` | **포커스된 행 위** (기본, AS-IS 의 `ds.insertRow(ds.rowposition)` 동일) |
| `0` | 시트 최상단 |
| `2` | 포커스된 행 아래 |
| 포커스 없음 + 데이터 0건 | `addRow()` 호출 (맨 끝) |
| 포커스 없음 + 데이터 있음 | 최상단에 삽입 |

```ts
// AS-IS: this.ds_emp.insertRow(this.ds_emp.rowposition)
// TO-BE:
sheet.insertRow()           // 포커스 위
sheet.insertRow(0)          // 맨 위
sheet.insertRow(2)          // 포커스 아래
```

**왜 이 폴백 정의?** Nexacro `insertRow(-1)` 은 매뉴얼 미정의 → 환경별 동작 불일치(실패 또는 0번 삽입). 우리 헬퍼는 **포커스 없음 = addRow 폴백**으로 정의해 빈 그리드 버그 한 종류를 제거.

**반환**: 추가된 `IBRow | null`. 이후 `sheet.setValue(row, ...)` 로 초기값 세팅 가능. 단 기본값을 같이 넣으려면 `addRow({ ..., init: {...} })` 를 직접 쓰는 편이 한 호출이라 더 간결.

### `sheet.getSelectedRows2(type, attr)`

표준 `getSelectedRows(type, attr)` 호출 결과가 빈 배열이면 **포커스된 행을 단건 배열로 반환**.

```ts
// AS-IS: 사용자가 선택 안 했어도 현재 행에 대해 동작하던 Nexacro 그리드 UX
// TO-BE 표준 getSelectedRows 는 미선택 = [] 라 사용자 체감과 불일치

const rows = sheet.getSelectedRows2()   // 선택 0건이면 focused 1건
```

선택 + 단일 포커스 둘 다 처리하는 액션(삭제 / 컨텍스트 메뉴 등)에 사용.

## Nexacro → React 매핑 표

| AS-IS (Nexacro) | TO-BE (IBSheet8 + 커스텀) |
|-----------------|---------------------------|
| `ds.insertRow(ds.rowposition)` | `sheet.insertRow()` 또는 `sheet.insertRow(1)` |
| `ds.insertRow(0)` | `sheet.insertRow(0)` |
| `ds.insertRow(ds.rowposition + 1)` | `sheet.insertRow(2)` |
| `ds.addRow()` | `sheet.addRow()` (그대로) |
| `grd.getSelectedRows()` 인데 미선택 시 현재 행 대상 | `sheet.getSelectedRows2()` |

## 주의

- 이 두 함수는 `registerCommonOptions()` 가 한 번 호출된 이후의 모든 `IBSheet.create()` 인스턴스에 자동 적용. 추가 등록 코드 불필요.
- 새 화면 변환 시 Nexacro 의 `insertRow(rowposition)` 패턴을 발견하면 무조건 `sheet.insertRow()` 로 매핑. 별도 wrapper / hooks 만들지 말 것.
- 신규 커스텀 메서드가 필요하면 같은 파일 `registerCommonOptions()` 안에 추가하고 이 문서에 표 한 줄 추가.
