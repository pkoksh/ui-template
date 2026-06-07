---
KEY: getNextRow
KIND: method
PATH: funcs/core/get-next-row
ALIAS: sheet.getNextRow, getNextRow(), 지정한, 행의, 바로, 아래, 행을
ALIAS_EN: get, next, row, bottom
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/get-next-row
---
# getNextRow ***(method)***

> 지정한 행의 바로 아래 행을 리턴합니다.

> 마지막 행인 경우 `null`이 리턴됩니다.


### Syntax
```javascript
object getNextRow( row );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|row|`object`|필수|[데이터 로우 객체](/docs/appx/row-object)|


### Return Value
***row object*** :  [데이터 로우 객체](/docs/appx/row-object)

### Example
```javascript
//AR5행의 다음 행을 확인.
var row = sheet.getRowById("AR55");
var nrow = sheet.getNextRow(row);
```

### Read More
- [getPrevRow method](./get-prev-row)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
