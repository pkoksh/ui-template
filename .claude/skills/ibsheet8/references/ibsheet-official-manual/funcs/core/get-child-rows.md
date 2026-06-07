---
KEY: getChildRows
KIND: method
PATH: funcs/core/get-child-rows
ALIAS: sheet.getChildRows, getChildRows(), 특정, 행의, 전체, 자식, 손자
ALIAS_EN: get, child, rows, all, total
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/get-child-rows
---
# getChildRows ***(method)***
> 특정 행의 전체 자식 행(손자 포함) 객체를 배열 형태로 반환합니다.

### Syntax
```javascript
array getChildRows( row, maxLevel );
```

### Parameters
|Name|Type|Required|Description|
|----------|-----|---|----|
|row|`object`|필수|부모행 [데이터 로우 객체](/docs/appx/row-object)|
|maxLevel|`number`|선택|확인할 자식행의 제한 레벨 (지정한 레벨 **미만** 리턴)|

### Return Value
***array[row object]*** : [데이터 로우 객체](/docs/appx/row-object) 배열

### Example
```javascript
// 첫번째 행의 자식 행들을 가져옵니다.
var childNodes = sheet.getChildRows(sheet.getFirstRow());
```

### Read More
- [getParentRows method](./get-parent-rows)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|core|8.1.0.14|`maxLevel` 기능 추가|
