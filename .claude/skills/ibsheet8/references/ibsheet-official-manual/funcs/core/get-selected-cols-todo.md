---
KEY: getSelectedColsTodo
KIND: method
PATH: funcs/core/get-selected-cols-todo
ALIAS: sheet.getSelectedColsTodo, getSelectedColsTodo(), 사용할, 없는, 기능입니다
ALIAS_EN: get, selected, cols, todo
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/get-selected-cols-todo
---
# !getSelectedCols ***(method)***

> **<mark>사용할 수 없는 기능입니다</mark>**

> 선택된 열(`Selected:1`)들의 열이름을 리턴합니다.

> attr 인자를 통해 선택된 열들 중에서도 특정 속성이 있는 열만 추출할 수 있습니다.

### Syntax
```javascript
object getSelectedCols( attr );
```

*없애기로 함!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*

### Parameters

|Name|Type|Required| Description |
|----------|-----|---|----|
|attr |`string`|선택|같이 확인하고자 하는 속성명|

### Return Value
***object (arrary[string])*** : 선택된 열 이름들 (배열 형태)

### Example
```javascript
//일부 열을 선택
sheet.setAttribute(null, "CARNO", "Selected", 1, 1);
sheet.setAttribute(null, "RENTFEE", "Selected", 1, 1);

//선택된 열을 추출
var cols = sheet.getSelectedCols();

//선택된 열 중 편집이 가능한 열만 추출
var cols = sheet.getSelectedCols("CanEdit");

```

### Read More

- [getSelectedRows method](./get-selected-rows)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
