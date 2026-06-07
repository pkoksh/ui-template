---
KEY: getType
KIND: method
PATH: funcs/core/get-type
ALIAS: sheet.getType, getType(), 특정, 셀의, 확인합니다
ALIAS_EN: get, type
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/get-type
---
# getType ***(method)***
> 특정 셀의 Type을 확인합니다.

### Syntax
```javascript
string getType( row, col );
```

### Parameters

|Name|Type|Required| Description |
|----------|-----|---|----|
|row |`object`|필수|[데이터 로우 객체](/docs/appx/row-object)|
|col |`string`|필수|열이름|

### Return Value

***string*** : 셀의 타입 (Text,Int,Float,Date 등)

### Example
```javascript
function cellClick(evt){
    if( evt.Col == "EntDate" && sheet.getType( evt.Row , evt.Col ) == "Text"){
         $( "#entDate-confirm" ).dialog('open');
    }
}
```

### Read More
- [getFormat method](./get-format)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
