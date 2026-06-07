---
KEY: getString
KIND: method
PATH: funcs/core/get-string
ALIAS: sheet.getString, getString(), 포맷이, 적용된, 문자열로, 셀의, 값을
ALIAS_EN: get, string
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/get-string
---
# getString ***(method)***
> 포맷이 적용된 문자열로 셀의 값을 가져옵니다.

### Syntax
```javascript
string getString( row, col);
```

### Parameters


|Name|Type|Required| Description |
|----------|-----|---|----|
|row |`object`|필수|[데이터 로우 객체](/docs/appx/row-object)|
|col |`string`|필수|열이름|

### Return Value
***string*** : 적용된 포맷형태에 따른 셀값 리턴

### Example
```javascript
var r5 = sheet.getRowById("AR5");
//format yyyy/MM/dd 인경우 '2015/12/31' 형태로 추출
var sdata = sheet.getString(r5, "StartDate");
```

### Read More

- [setString method](./set-string)
- [setValue method](./set-value)
- [getValue method](./get-value)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
