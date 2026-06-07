---
KEY: getSpanned
KIND: method
PATH: funcs/core/get-spanned
ALIAS: sheet.getSpanned, getSpanned(), 변경되었습니다
ALIAS_EN: get, spanned
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/get-spanned
---
# !getSpanned ***(method)***

> **<mark>`getMergeRange`로 변경되었습니다</mark>** 

> 파라미터로 들어온 행과 열에 해당하는 셀이 속한 병합 범위를 반환합니다. 

> 병합되지 않은 경우 셀의 행과 열로 이루어진 배열을 반환합니다. 

> 리턴되는 값은 다음과 같습니다.


```js
[row1 객체, "col1", row2 객체, "col2"]
```

### Syntax
```javascript
array getSpanned( row1 , col1 , row2 , col2);
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|row |`object`|필수|대상 [데이터 로우 객체](/docs/appx/row-object)|
|col |`string`|필수|대상 열이름|

### Return Value
***array***

### Example
```javascript
//AR2행부터 AR4행까지 deptCd열부터 empNm열까지 병합
sheet.getSpanned( sheet.getRowById("AR2"), "deptCd");
```

### Read More


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
