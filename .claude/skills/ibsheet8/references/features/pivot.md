# 피벗 테이블 (Pivot Table)

IBSheet8의 피벗 기능은 원본 시트 데이터를 행/열/값 기준으로 재구성하여 피벗 시트를 생성한다. 피벗 시트 ID는 `"pivotSheet_" + 원본시트ID`로 자동 생성된다. 피벗 시트에서는 DataMerge 기능을 지원하지 않으며, 5000행 200열 초과 시 브라우저 성능 문제가 발생할 수 있다.

## 3가지 사용 방식

### 1. UsePivot (Cfg) - 인터랙티브 피벗 영역

`UsePivot: true` 설정 시 시트의 Solid 영역에 피벗 구성용 드래그 영역이 생성되어 사용자가 직접 열을 드래그하여 피벗을 구성할 수 있다. 실무에서는 UI가 다소 불편하여 자주 사용되지 않는다.

```javascript
options.Cfg = {
  UsePivot: true,
  AcceptPivotRows: "sDept,sTeam,sPosition,sName",  // 좌측 헤더(행)에 넣을 수 있는 열
  AcceptPivotCols: "sDept,sTeam,sPosition",          // 상단 헤더(열)에 넣을 수 있는 열
  AcceptPivotData: "sAge,sSalary,sBonus",             // 값 영역에 넣을 수 있는 열 (int, float 타입)
  InitPivotRows: "sDept",          // 초기 행 기준 열
  InitPivotCols: "sPosition",     // 초기 열 기준 열
  InitPivotData: "sSalary",       // 초기 값 열
  PivotFormat: "#,###",           // 값 셀 포맷
  PivotFunc: "Sum",               // 집계 함수 (Sum, Count, Max, Min)
  PivotSumPosition: false,        // 합계행 위치 (false: Footer, true: Header)
  NoPivotSort: false              // false: 원본 데이터 정렬 후 피벗 생성
};
```

관련 이벤트: `onAfterPivot` - 피벗 시트 생성 완료 후 발생 (onRenderFirstFinish 시점)

### 2. makePivotTable() - 프로그래밍 방식 피벗 생성

화면 설계자의 의도에 따라 코드로 직접 피벗 시트를 생성한다. 원본 시트에 데이터가 로드된 이후에 호출해야 하므로, 별도 버튼이 없다면 `onSearchFinish` 이벤트에서 호출하는 것을 권장한다. 원본 시트에 필터가 적용되어 있으면 피벗 생성 전 자동으로 필터가 해제된다.

```javascript
// criterias: 피벗에 사용 가능한 열 후보군 (생략 가능)
var criterias = {
  row: "sDept,sTeam,sPosition,sName",
  col: "sDept,sTeam,sPosition",
  data: "sAge,sSalary,sBonus"
};
// init: 실제 피벗에 사용할 열 (필수)
var init = {
  row: "sDept",
  col: "sPosition,sTeam",
  data: "sSalary,sAge"
};

var pivotSheet = sheet.makePivotTable(
  criterias,           // object|생략가능 - 피벗 대상 열 후보
  init,                // object|필수 - 실제 피벗 구성 (row, col, data)
  "#,###",             // string|생략가능 - 포맷
  "Sum,Avg",           // string|생략가능 - 집계함수 (data 열 수와 일치, 쉼표 구분)
  function(evt) {},    // function|생략가능 - 생성 완료 콜백 (onRenderFirstFinish 시점)
  { hideTotalRow: false, hideTotalCol: true }  // object|생략가능 - 총합계 표시 여부
);
```

집계함수 옵션: `"Sum"` (기본), `"Count"`, `"Max"`, `"Min"` - 데이터 열이 여러 개면 쉼표로 각각 지정

onSearchFinish에서 호출하는 패턴:
```javascript
options.Events = {
  onSearchFinish: function(evt) {
    sheet.makePivotTable(null, {
      row: "sDept",
      col: "sPosition",
      data: "sSalary"
    }, "#,###", "Sum");
  }
};
```

### 3. showPivotDialog() - 다이얼로그 방식 (가장 많이 사용)

다이얼로그 UI를 통해 사용자가 자유롭게 피벗을 구성할 수 있어 가장 많이 사용된다.

**필수 조건: `"plugins/ibsheet-dialog.js"` 파일이 import 되어 있어야 한다.**

> UseFilterDialog와 동시 사용 불가

```javascript
// 기본 호출
sheet.showPivotDialog();

// 옵션 지정
sheet.showPivotDialog({
  width: 700,                    // 다이얼로그 너비 (기본 500)
  height: 700,                   // 다이얼로그 높이 (기본 600)
  name: "myPivot",               // 다이얼로그 이름 (기본 "pivotDialog_" + sheetid)
  pivotParams: {                 // makePivotTable 옵션 (format, callback, hideTotal)
    format: "#,### 원",
    callback: function(evt) {
      // evt.sheet: 피벗시트 객체
      var dataRows = evt.sheet.getDataRows();
      // 피벗 생성 후 후처리 로직
    },
    hideTotal: { hideTotalRow: false, hideTotalCol: true }
  },
  useStorage: true               // 피벗 구성 저장 기능 (StorageSession 설정 필요)
});
```

## 피벗 시트 전환

```javascript
// 피벗 시트로 전환
pivotSheet_sheet.switchPivotSheet(1);

// 원본 시트로 전환
pivotSheet_sheet.switchPivotSheet(0);

// 피벗 시트 제거 후 원본 복귀
sheet.PivotSheet.dispose();
sheet.PivotSheet.switchPivotSheet();
delete sheet.PivotSheet;
```

## 피벗 필터

피벗 시트에서 원본 데이터를 필터링하여 피벗을 재생성할 수 있다.

```javascript
// ClickPivotFilter: 피벗 셀 클릭 시 원본 시트에서 해당 데이터 행만 필터 표시
options.Cfg = { ClickPivotFilter: true };

// doPivotFilter: 프로그래밍 방식으로 필터 적용 후 피벗 재생성
// 구분자(첫 문자)로 열/값/연산자를 연결
pivotSheet_sheet.doPivotFilter("|deptName|cardAmt", "|연구팀|50000", "|9|6");
// 연산자: 0=미사용, 1=같음, 2=다름, 3=미만, 4=이하, 5=초과, 6=이상,
//         7=시작, 8=시작않음, 9=끝남, 10=끝나지않음, 11=포함, 12=미포함, 13=상위10, 14=값있음, 15=값없음

// clearPivotFilter: 피벗 필터 해제 후 전체 데이터로 피벗 재생성
pivotSheet_sheet.clearPivotFilter();

// getPivotFilterRows: 피벗 셀을 구성하는 원본 행 조회 (원본 필터가 변경될 수 있음에 주의)
var rows = pivotSheet_sheet.getPivotFilterRows(focusRow, focusCol);
```

## 관련 API 요약

| 구분 | 항목 | 설명 |
|------|------|------|
| Cfg | UsePivot | 인터랙티브 피벗 영역 사용 |
| Cfg | AcceptPivotRows/Cols/Data | UsePivot 시 각 영역에 허용할 열 |
| Cfg | InitPivotRows/Cols/Data | UsePivot 시 초기 설정할 열 |
| Cfg | PivotFormat | 피벗 셀 포맷 |
| Cfg | PivotFunc | 집계 함수 (Sum/Count/Max/Min) |
| Cfg | PivotSumPosition | 합계행 위치 (0:하단, 1:상단) |
| Cfg | NoPivotSort | 원본 정렬 없이 피벗 생성 |
| Cfg | ClickPivotFilter | 피벗 셀 클릭 시 원본 필터 |
| Method | makePivotTable() | 코드로 피벗 생성 |
| Method | showPivotDialog() | 피벗 다이얼로그 (ibsheet-dialog.js 필요) |
| Method | switchPivotSheet() | 원본/피벗 시트 전환 |
| Method | doPivotFilter() | 피벗 필터 적용 |
| Method | clearPivotFilter() | 피벗 필터 해제 |
| Method | getPivotFilterRows() | 피벗 셀의 원본 행 조회 |
| Event | onAfterPivot | 피벗 시트 생성 완료 |
