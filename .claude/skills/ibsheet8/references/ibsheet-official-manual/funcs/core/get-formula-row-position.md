---
KEY: getFormulaRowPosition
KIND: method
PATH: funcs/core/get-formula-row-position
ALIAS: sheet.getFormulaRowPosition, getFormulaRowPosition(), 합계행, 위치, 하단, 기본값, 상단
ALIAS_EN: get, formula, row, position
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/get-formula-row-position
---
# getFormulaRowPosition ***(method)***
> `FormulaRow`(합계행)의 위치 (하단(기본값), 상단) 값을 얻어 올 수 있습니다.

### Syntax
```javascript
number getFormulaRowPosition();
```

### Return Value
***number*** : FormulaRow의 위치 값

### Example
```javascript
//합계행의 위치를 가져옵니다.
var pos = sheet.getFormulaRowPosition();
```

### Read More
- [setFormulaRow method](./set-formula-row)
- [setFormulaRowPosition method](./set-formula-row-position)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
