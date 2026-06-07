---
KEY: switchPivotSheet
KIND: method
PATH: funcs/core/switch-pivot-sheet
ALIAS: sheet.switchPivotSheet, switchPivotSheet(), 피벗, 테이블, 결과, 시트와, 원본
ALIAS_EN: switch, pivot, sheet
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/switch-pivot-sheet
---
# switchPivotSheet ***(method)***

> 피벗 테이블 결과 시트와 원본 데이터 시트를 pivot 인자에 따라 스위치하여 보여줍니다.



### Syntax
```javascript
void switchPivotSheet(pivot);
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|pivot|`number`|선택|원본 테이블 또는 피벗 테이블 선택 (`default: 0`)|


### Return Value
***none***

### Example
```javascript
// 피벗 테이블의 원본 데이터 시트 보기
pivotSheet_sheet.switchPivotSheet(0);

// 피벗 테이블 보기
pivotSheet_sheet.switchPivotSheet(1);

// 피벗 테이블 제거 후 원본 시트 보기
sheet.PivotSheet.dispose();
sheet.PivotSheet.switchPivotSheet();
delete sheet.PivotSheet;
```

### Read More
- [showPivotDialog method](/docs/funcs/dialog/show-pivot-dialog)
- [makePivotTable method](./make-pivot-table)
<!--!
- `[비공개]` [clearPivotSheet method](/docs/funcs/dialog/clear-pivot-sheet)
!-->

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
