---
KEY: clearPivotSheet
KIND: method
PATH: funcs/dialog/clear-pivot-sheet
ALIAS: sheet.clearPivotSheet, clearPivotSheet(), 피벗, 테이블을, 기존, 테이블로, 초기화
ALIAS_EN: clear, pivot, sheet, initialize, init, reset
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/dialog/clear-pivot-sheet
---
# !clearPivotSheet ***(method)***

> 피벗 테이블을 기존 테이블로 초기화 합니다.

> 기존 시트 내의 `PivotSheet`에서 호출해야 정상 동작합니다 

> <mark>해당 함수는 `"/plugins/ibsheet-dialog.js"` 파일이 포함되어 있어야 사용하실 수 있습니다.</mark>


### Syntax
```javascript
void clearPivotSheet();
```

### Return Value
***none***

### Example
```javascript
// 피봇 테이블 초기화
sheet.PivotSheet.clearPivotSheet();
```

### Read More
- [showPivotDialog method](./show-pivot-dialog)
- [makePivotTable method](/docs/funcs/core/make-pivot-table)
- [switchPivotSheet method](/docs/funcs/core/switch-pivot-sheet)

### Since

|product|version|desc|
|---|---|---|
|dialog|0.0.0|기능 추가|
