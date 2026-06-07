---
KEY: getNextVisibleRow
KIND: method
PATH: funcs/core/get-next-visible-row
ALIAS: sheet.getNextVisibleRow, getNextVisibleRow(), 인자로, 받은, 행으로부터, 아래에, 보이는
ALIAS_EN: get, next, visible, row
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/get-next-visible-row
---
# getNextVisibleRow ***(method)***

> 인자로 받은 행으로부터 아래에 보이는 행을 리턴합니다.



### Syntax
```javascript
object getNextVisibleRow(row);
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|row|`object`|필수|[데이터 로우 객체](/docs/appx/row-object)|


### Return Value
***row object*** : [데이터 로우 객체](/docs/appx/row-object)

### Example
```javascript
// 포커스된 행으로부터 바로 아래에에 있는 행을 얻는다.
var frow = sheet.getFocusedRow();
var crow = sheet.getNextVisibleRow(frow);
```
### Read More
- [getPrevSiblingVisibleRow method](./get-prev-sibling-visible-row)
- [getNextSiblingVisibleRow method](./get-next-sibling-visible-row)
- [getPrevVisibleRow method](./get-prev-visible-row)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.5|기능 추가|
