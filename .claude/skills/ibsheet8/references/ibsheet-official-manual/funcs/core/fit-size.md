---
KEY: fitSize
KIND: method
PATH: funcs/core/fit-size
ALIAS: sheet.fitSize, fitSize(), 특정, 열의, 너비를, 해당, 열에
ALIAS_EN: fit, size
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/fit-size
---
# fitSize ***(method)***

> 특정 열의 너비를 해당 열에 있는 글자 중 가장 긴 글자에 맞게 조정합니다.
(엑셀의 autofit)
> 전체 데이터가 아닌 1~100행 사이의 글자열을 기준으로 너비를 조정합니다.

> 서버 페이징 조회 사용시 기능 사용이 어려울 수 있습니다.

> `rows` 인자를 사용하여 너비를 조정할 때 검사하는 데이터행들을 정할 수 있습니다.

> 단, `rows`에 데이터행들이 많아질수록 성능문제가 생길 수 있습니다. 

### Syntax
```javascript
void fitSize(col, norender, rows);
```

### Parameters
|Name|Type|Required|Description|
|----------|-----|---|----|
|col |`string`|필수|열이름|
|norender|`boolean`|선택<mark>(사용주의)</mark>|즉시 화면에 반영할 것인지 여부
해당 기능을 사용한 뒤, 다른 동작을 실행 할 경우 `renderBody()`를 반드시 먼저 실행 해야 합니다.
`0(false)`:즉시 반영 (`default`)
`1(true)`:반영 안함
|
|rows|`array`|선택|특정 열의 너비를 조정할 행들|

### Return Value
***none***

### Example
```javascript
// DESC 열의 너비를 열 내 가장 긴 글자열에 맞게 조정합니다.
sheet.fitSize("DESC");
// rows 전체 데이터로우를 검사. 전체 데이터 로우를 검사시 속도에서 문제가 생길 수 있습니다.
var totalRows = sheet.getDataRows();
sheet.fitSize("DESC", 0, totalRows);
```

### Read More
- [setColWidth method](./set-col-width)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
