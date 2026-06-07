---
KEY: getShownCols
KIND: method
PATH: funcs/core/get-shown-cols
ALIAS: sheet.getShownCols, getShownCols(), 현재, 화면에, 보여지는, 이름을, 배열로
ALIAS_EN: get, shown, cols
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/get-shown-cols
---
# getShownCols ***(method)***
> 현재 화면에 보여지는 열 이름을 배열로 리턴합니다.

> section인자를 설정하지 않으면 가운데 영역에서 보여지는 열 이름을 배열로 리턴합니다.

> 시트의 너비가 넓을수록 더 많은 열 이름이 리턴됩니다.


### Syntax
```javascript
object getShownCols(section);
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|section|`number`|선택|틀고정을 기준으로 한 영역지정
`0`:왼쪽
`1`:가운데 (`default`)
`2`:오른쪽|

### Return Value
***array[string]*** : 열 이름 배열

### Example
```javascript
//가운데 영역에 보여지는 열 이름을 확인
var colNameArr = sheet.getShownCols(1);
```

### Read More
- [getShownRows method](./get-shown-rows)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
