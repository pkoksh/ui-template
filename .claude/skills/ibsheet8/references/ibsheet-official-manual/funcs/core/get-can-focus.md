---
KEY: getCanFocus
KIND: method
PATH: funcs/core/get-can-focus
ALIAS: sheet.getCanFocus, getCanFocus(), 특정, 행이나, 셀이, 포커스, 있는지
ALIAS_EN: get, can, focus
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/get-can-focus
---
# getCanFocus ***(method)***

> 특정 행이나 셀이 포커스 될 수 있는지 여부를 확인합니다.




### Syntax
```javascript
boolean getCanFocus( row, col );
```

### Parameters

|Name|Type|Required|Description|
|----------|-----|---|----|
|row |`object`|필수|[데이터 로우 객체](/docs/appx/row-object)|
|col |`string`|선택|열이름|

### Return Value
***boolean*** : 포커스 가능 여부 (`0(false)`: 포커스 불가, `1(true)`: 포커스 가능)

### Example
```javascript
//id가 AR33인 행이 포커스가 들어갈 수 있는지 여부 확인
var cf = sheet.getCanFocus(sheet.getRowById("AR33"));

//특정 셀에 포커스가 들어갈 수 있는지 여부 확인
var cf = sheet.getCanFocus(sheet.getRowById("AR5") , "CA_DSC");
```

### Read More
- [focus method](./focus)
- [isFocused method](./is-focused)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
