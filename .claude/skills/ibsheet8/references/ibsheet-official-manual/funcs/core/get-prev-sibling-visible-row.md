---
KEY: getPrevSiblingVisibleRow
KIND: method
PATH: funcs/core/get-prev-sibling-visible-row
ALIAS: sheet.getPrevSiblingVisibleRow, getPrevSiblingVisibleRow(), 트리나, 그룹사용시, 같은, 부모를, 갖는
ALIAS_EN: get, prev, sibling, visible, row
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/get-prev-sibling-visible-row
---
# getPrevSiblingVisibleRow ***(method)***
> 트리나 그룹사용시 같은 부모를 갖는 동일 레벨의 보여지는(`Visible:1`) 위에 위치한 행을 리턴합니다.

> 같은 부모 내에서 더 이상 보여지는 동일레벨이 없는 경우 `null`이 리턴됩니다.


### Syntax
```javascript
object getPrevSiblingVisibleRow( row );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|row|`object`|필수|[데이터 로우 객체](/docs/appx/row-object)|


### Return Value
***row object*** : [데이터 로우 객체](/docs/appx/row-object)

### Example
```javascript
//현재 선택된 행과 같은 레벨을 갖는 위의 행을 리턴
var row = sheet.getFocusedRow();
var crow = sheet.getPrevSiblingVisibleRow(row);
```

### Read More
- [getNextSiblingVisibleRow method](./get-next-sibling-visible-row)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
