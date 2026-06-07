---
KEY: getParentRows
KIND: method
PATH: funcs/core/get-parent-rows
ALIAS: sheet.getParentRows, getParentRows(), 특정, 행의, 전체, 부모, 객체를
ALIAS_EN: get, parent, rows, all, total
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/get-parent-rows
---
# getParentRows ***(method)***
> 특정 행의 전체 부모 행 객체를 배열 형태로 반환합니다.

### Syntax
```javascript
array getParentRows( row );
```

### Parameters
|Name|Type|Required|Description|
|----------|-----|---|----|
|row|`object`|필수|[데이터 로우 객체](/docs/appx/row-object)|

### Return Value
***array[row object]*** : [데이터 로우 객체](/docs/appx/row-object) 배열

### Example
```javascript
// 포커스된 행의 부모 행들을 가져옵니다.
var childNodes = sheet.getParentRows(sheet.getFocusedRow());
```

### Read More
- [getChildRows method](./get-child-rows)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
