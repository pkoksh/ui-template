---
KEY: setFormulaRowPosition
KIND: method
PATH: funcs/core/set-formula-row-position
ALIAS: sheet.setFormulaRowPosition, setFormulaRowPosition(), 합계행, 위치, 하단, 기본값, 상단
ALIAS_EN: set, formula, row, position
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/set-formula-row-position
---
# setFormulaRowPosition ***(method)***
> `FormulaRow`(합계행)의 위치(하단(기본값), 상단)를 변경할 수 있습니다.

### Syntax
```javascript
void setFormulaRowPosition( pos, norender );
```

### Parameters


|Name|Type|Required| Description |
|----------|-----|---|----|
|pos |`number`|필수|`0`: 상단으로 이동 
 `1`: 하단으로 이동 (`default: 1`)|
|norender |`boolean`|선택<mark>(사용주의)</mark>|즉시 화면에 반영할 것인지 여부
해당 기능을 사용한 뒤, 다른 동작을 실행 할 경우 `renderBody()`를 반드시 먼저 실행 해야 합니다.
`0(false)`: 즉시 반영 (`default`)
`1(true)`: 반영 안함
|

### Return Value
***boolean*** : 설정 완료 여부

### Example
```javascript
//합계행을 상단으로 이동
sheet.setFormulaRowPosition( 0 );

//합계행을 하단으로 이동
sheet.setFormulaRowPosition({pos:1});
```

### Read More
- [setFormulaRow method](./set-formula-row)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
