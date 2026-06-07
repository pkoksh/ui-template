---
KEY: getNextSiblingVisibleRow
KIND: method
PATH: funcs/core/get-next-sibling-visible-row
ALIAS: sheet.getNextSiblingVisibleRow, getNextSiblingVisibleRow(), 트리나, 그룹, 사용시, 같은, 부모를
ALIAS_EN: get, next, sibling, visible, row, group
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/get-next-sibling-visible-row
---
# getNextSiblingVisibleRow ***(method)***

> 트리나 그룹 사용시 같은 부모를 갖는 동일 레벨의 보여지는(`Visible:1`) 아래 행을 리턴합니다.

> 같은 부모 내에서 더 이상 보여지는 동일레벨이 없는 경우 `null`이 리턴됩니다.

### Syntax
```javascript
object getNextSiblingVisibleRow( row );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|row|`object`|필수|[데이터 로우 객체](/docs/appx/row-object)|


### Return Value
***row object*** : [데이터 로우 객체](/docs/appx/row-object)

### Example
```javascript
//선택한 행과 같은 레벨의 보여지는 아래 행을 얻는다.
var frow = sheet.getFocusedRow()
var crow = sheet.getNextSiblingVisibleRow(frow);
```
### Read More
- [getPrevSiblingVisibleRow method](./get-prev-sibling-visible-row)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
