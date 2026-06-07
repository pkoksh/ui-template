---
KEY: extractDataText
KIND: method
PATH: funcs/core/extract-data-text
ALIAS: sheet.extractDataText, extractDataText(), 시트의, 헤더를, 포함한, 모든, 데이터를
ALIAS_EN: extract, data, text
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/extract-data-text
---
# extractDataText ***(method)***
> 시트의 헤더를 포함한 모든 데이터를 문자열로 반환합니다.

> 컬럼과 컬럼 사이는 탭(`\t`)으로 행과 행사이는 줄바꿈(`\r\n`) 문자열로 구분하여 반환 합니다.


> **<mark>주의</mark> : 데이터 건수가 많아질수록 성능에 문제가 발생할 수 있습니다.**

### Syntax
```javascript
string extractDataText( excludeHideData );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|excludeHideData|`boolean`|선택|숨겨진 컬럼, 데이터는 제외하고 반환 여부
`0(false)`:숨겨진 컬럼, 데이터 포함 (`default`)
`1(true)`:숨겨진 컬럼, 데이터 제외|

### Return Value
***string*** : 시트의 모든 데이터 (Header, Head, Data, Foot, FormulaRow)

### Example
```javascript
// 시트의 모든 데이터를 문자열로 반환
var txt = sheet.extractDataText();

// 숨겨진 컬럼, 데이터는 제외
var txt = sheet.extractDataText( {excludeHideData:1 } );
```

### Since

|product|version|desc|
|---|---|---|
|core|8.2.0.6|기능 추가|
|core|8.2.0.7|`excludeHideData` 인자 추가|
<!--!|`[비공개]` core-lwc|8.1.1.94|기능 추가|
|`[비공개]` core-lwc|8.1.1.95|`excludeHideData` 인자 추가|
!-->
