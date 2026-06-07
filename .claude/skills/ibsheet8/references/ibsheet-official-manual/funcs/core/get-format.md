---
KEY: getFormat
KIND: method
PATH: funcs/core/get-format
ALIAS: sheet.getFormat, getFormat(), 특정, 셀의, 확인합니다
ALIAS_EN: get, format
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/get-format
---
# getFormat ***(method)***

> 특정 셀의 Format을 확인합니다.

### Syntax
```javascript
string getFormat( row, col, edit );
```

### Parameters

|Name|Type|Required| Description |
|----------|-----|---|----|
|row |`object`|필수|[데이터 로우 객체](/docs/appx/row-object)|
|col |`string`|필수|열이름|
|edit|`boolean`|선택|EditFormat 확인
`0(false)`:`Format` 값을 리턴 (`default`)
`1(true)`:`EditFormat` 값을 리턴|

### Return Value
***string*** : 셀에 설정한 Format 문자열 (Format이 설정되지 않은 셀은 공백("")을 리턴)

### Example
```javascript
//날짜 셀에서 포맷 확인
var f = sheet.getFormat( sheet.getFocusedRow(), "EnterDate" );
var ef = sheet.getFormat( sheet.getFocusedRow(), "EnterDate", 1);
if(f=="yyyy/MM/dd" && ef == "yyyyMMdd"){
    alert("'년/월/일' 순서 포맷입니다. ");
}
```

### Read More
- [getType method](./get-type)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|