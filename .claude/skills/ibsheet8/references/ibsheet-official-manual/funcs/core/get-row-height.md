---
KEY: getRowHeight
KIND: method
PATH: funcs/core/get-row-height
ALIAS: sheet.getRowHeight, getRowHeight(), 특정행의, 높이를, 단위로, 확인합니다
ALIAS_EN: get, row, height
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/get-row-height
---
# getRowHeight ***(method)***
> 특정행의 높이를 pixel 단위로 확인합니다.

### Syntax
```javascript
number getRowHeight( row );
```

### Parameters

|Name|Type|Required| Description |
|----------|-----|---|----|
|row |`object`|필수|[데이터 로우 객체](/docs/appx/row-object)|

### Return Value
***number*** : 행의 높이 (pixel 단위)

### Example
```javascript
var r = sheet.getFirstVisibleRow();
//첫번째 행의 높이를 확인
var height = sheet.getRowHeight(r);
```

### Read More
- [getBodyHeight method](./get-body-height)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
