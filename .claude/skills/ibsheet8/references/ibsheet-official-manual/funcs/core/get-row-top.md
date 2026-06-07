---
KEY: getRowTop
KIND: method
PATH: funcs/core/get-row-top
ALIAS: sheet.getRowTop, getRowTop(), 데이터, 내에서, 좌표값을, 확인합니다
ALIAS_EN: get, row, top, data
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/get-row-top
---
# getRowTop ***(method)***
> 데이터 행 내에서 y좌표값을  확인합니다.

> 최상단 행은 `0`을 리턴합니다.


### Syntax
```javascript
number getRowTop( row );
```

### Parameters

|Name|Type|Required| Description |
|----------|-----|---|----|
|row |`object`|필수|[데이터 로우 객체](/docs/appx/row-object)|

### Return Value
***number*** : 데이터 영역 최상단을 기준으로 행의 y좌표 (pixel 단위)

### Example
```javascript
//선택행의 RowTop 값을 가져온다.
var w = sheet.getRowTop( sheet.getFocusedRow() );
```

### Read More
- [getBodyHeight method](./get-body-height)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
