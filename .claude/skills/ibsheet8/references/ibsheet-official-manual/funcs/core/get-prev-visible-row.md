---
KEY: getPrevVisibleRow
KIND: method
PATH: funcs/core/get-prev-visible-row
ALIAS: sheet.getPrevVisibleRow, getPrevVisibleRow(), 인자로, 받은, 행으로부터, 위에, 보이는
ALIAS_EN: get, prev, visible, row
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/get-prev-visible-row
---
# getPrevVisibleRow ***(method)***

> 인자로 받은 행으로부터 위에 보이는 행을 리턴합니다.



### Syntax
```javascript
object getPrevVisibleRow( row );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|row|`object`|필수|[데이터 로우 객체](/docs/appx/row-object)|


### Return Value
***row object*** : [데이터 로우 객체](/docs/appx/row-object)

### Example
```javascript
// 포커스된 행으로부터 바로 위에 있는 행을 얻는다.
var frow = sheet.getFocusedRow();
var crow = sheet.getPrevVisibleRow(frow);
```
### Read More
- [getPrevSiblingVisibleRow method](./get-prev-sibling-visible-row)
- [getNextSiblingVisibleRow method](./get-next-sibling-visible-row)
- [getNextVisibleRow method](./get-next-visible-row)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.5|기능 추가|
