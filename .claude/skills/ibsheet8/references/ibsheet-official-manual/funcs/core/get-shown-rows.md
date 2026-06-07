---
KEY: getShownRows
KIND: method
PATH: funcs/core/get-shown-rows
ALIAS: sheet.getShownRows, getShownRows(), 현재, 화면에, 보여지는, 데이터, 로우
ALIAS_EN: get, shown, rows, data
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/get-shown-rows
---
# getShownRows ***(method)***
> 현재 화면에 보여지는 [데이터 로우 객체](/docs/appx/row-object)를 리턴합니다.

> 시트의 높이가 클수록 더 많은 [데이터 로우 객체](/docs/appx/row-object)가 리턴됩니다. 

> `current: 0(false)`인 경우 전체 영역에서 보여질 모든 행을 리턴합니다. 

> 트리 사용시 접혀있는 행들은 리턴되지 않습니다.


### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|current|`boolean`|선택|현재 보여지는 행을 리턴할 영역 설정 
 `0(false)`:전체 영역 
 `1(true)`:현재 화면에 보여지는 영역 (`default`)

### Syntax
```javascript
object getShownRows(current);
```

### Return Value
***array[row object]*** : 배열 형태의 [데이터 로우 객체](/docs/appx/row-object)

### Example
```javascript
// 전체 영역 중 보여지는 행의 개수를 확인
var rowArr = sheet.getShownRows(1);
var cnt = rowArr.length;
```

### Read More
- [getShownCols method](./get-shown-cols)
- [행 객체(Row Object) appendix](/docs/appx/row-object)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|core|8.0.0.17|`current` 인자 추가|
