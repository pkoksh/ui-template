---
KEY: getLastRow
KIND: method
PATH: funcs/core/get-last-row
ALIAS: sheet.getLastRow, getLastRow(), 하단행을, 확인합니다
ALIAS_EN: get, last, row
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/get-last-row
---
# getLastRow ***(method)***

> 최 하단행을 확인합니다.

> 트리 기능 사용시 row 인자를 설정하면 행이 갖고있는 마지막 자식행이 리턴됩니다.

### Syntax
```javascript
object getLastRow( row );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|row|`object`|선택|[데이터 로우 객체](/docs/appx/row-object)|


### Return Value
***row object*** : [데이터 로우 객체](/docs/appx/row-object)

### Example
```javascript
//최 하단행을 얻습니다.
var lrow = sheet.getLastRow();
```

### Read More
- [getLastVisibleRow method](./get-last-visible-row)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
