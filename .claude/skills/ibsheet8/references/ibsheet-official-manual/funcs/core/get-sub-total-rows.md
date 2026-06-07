---
KEY: getSubTotalRows
KIND: method
PATH: funcs/core/get-sub-total-rows
ALIAS: sheet.getSubTotalRows, getSubTotalRows(), 생성된, 소계, 누계, 행들을, 반환합니다
ALIAS_EN: get, sub, total, rows, subtotal
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/get-sub-total-rows
---
# getSubTotalRows ***(method)***

> 생성된 소계/누계 행들을 반환합니다.

> 리턴 값은 다음과 같습니다
> {subTotal:[[첫번 째 기준 열 관련 소계행들], [두번 째 기준 열 관련 소계행들] ... ], Total:[[첫번 째 기준 열 관련 누계 행들], [두번 째 기준 열 관련 누계 행들] ... ]}

### Syntax
```javascript
object getSubTotalRows();
```

### Return Value
***object***

### Example
```javascript
//소계 누계 행을 얻습니다.
var totalRows = sheet.getSubTotalRows();
```

### Read More
- [makeSubTotal method](./make-sub-total)
- [removeSubTotal method](./remove-sub-total)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
