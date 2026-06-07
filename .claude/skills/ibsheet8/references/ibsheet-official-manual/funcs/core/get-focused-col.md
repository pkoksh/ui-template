---
KEY: getFocusedCol
KIND: method
PATH: funcs/core/get-focused-col
ALIAS: sheet.getFocusedCol, getFocusedCol(), 시트, 내에, 현재, 포커스된, 셀의
ALIAS_EN: get, focused, col, sheet, grid
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/get-focused-col
---
# getFocusedCol ***(method)***

> 시트 내에 현재 포커스된 셀의 열이름을 반환합니다.

### Syntax
```javascript
string getFocusedCol();
```

### Return Value
***string*** : 열이름

### Example
```javascript
//현재 포커스된 셀의 열이름을 반환합니다.
var row = sheet.getFocusedCol();
```

### Read More

- [getFocusedRow method](./get-focused-row)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
