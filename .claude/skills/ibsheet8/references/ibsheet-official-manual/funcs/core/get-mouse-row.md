---
KEY: getMouseRow
KIND: method
PATH: funcs/core/get-mouse-row
ALIAS: sheet.getMouseRow, getMouseRow(), 현재, 마우스, 아래에, 있는, 객체를
ALIAS_EN: get, mouse, row
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/get-mouse-row
---
# getMouseRow ***(method)***
> 현재 마우스 아래에 있는 행 객체를 반환합니다.

### Syntax
```javascript
object getMouseRow();
```

### Return Value
***row Object*** : [데이터 로우 객체](/docs/appx/row-object)

### Example
```javascript
var eRow = sheet.getMouseRow();
```

### Read More
- [getMouseCol method](./get-mouse-col)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
