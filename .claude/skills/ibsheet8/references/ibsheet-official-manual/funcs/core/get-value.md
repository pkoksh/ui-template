---
KEY: getValue
KIND: method
PATH: funcs/core/get-value
ALIAS: sheet.getValue, getValue(), 특정, 셀의, 값을, 구분자를, 제거하고
ALIAS_EN: get, value
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/get-value
---
# getValue ***(method)***
> 특정 셀의 값을 구분자를 제거하고 가져오는 함수입니다.

### Syntax
```javascript
mixed getValue( row, col );
```

### Parameters
|Name|Type|Required| Description |
|----|----|--------|-------------|
|row |`object`|필수|[데이터 로우 객체](/docs/appx/row-object)|
|col |`string`|필수|열이름|

### Return Value
***mixed ( `number` \| `string` )*** : 셀의 타입에 따른 값을 리턴

### Example
```javascript
var r = sheet.getFirstRow();
//구분자 없이 yyyyMMdd 형태로 추출
var sdate = sheet.getValue( r , "StartDate" );
var edate = sheet.getValue({row:r,col:"EndDate"});
```

### Read More
- [getString method](./get-string)
- [setString method](./set-string)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
