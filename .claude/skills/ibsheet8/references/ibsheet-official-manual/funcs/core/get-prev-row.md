---
KEY: getPrevRow
KIND: method
PATH: funcs/core/get-prev-row
ALIAS: sheet.getPrevRow, getPrevRow(), 지정한, 행의, 바로, 위에, 위치한
ALIAS_EN: get, prev, row
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/get-prev-row
---
# getPrevRow ***(method)***
> 지정한 행의 바로 위에 위치한 행을 리턴합니다.

> 지정한 행이 첫번째 행인 경우 `null`이 리턴됩니다.


### Syntax
```javascript
object getPrevRow( row );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|row|`object`|필수|[데이터 로우 객체](/docs/appx/row-object)|


### Return Value
***row object*** : [데이터 로우 객체](/docs/appx/row-object)

### Example
```javascript
//AR55행의 위행을 확인.
var row = sheet.getRowById("AR55");
var nrow = sheet.getPrevRow(row);
```

### Read More
- [getNextRow method](./get-next-row)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
