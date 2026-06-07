---
KEY: getEditRow
KIND: method
PATH: funcs/core/get-edit-row
ALIAS: sheet.getEditRow, getEditRow(), 현재, 편집, 중인, 객체를, 반환합니다
ALIAS_EN: get, edit, row, editable
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/get-edit-row
---
# getEditRow ***(method)***
> 현재 편집 중인 행 객체를 반환합니다.

### Syntax
```javascript
object getEditRow();
```

### Return Value
***row Object*** : [데이터 로우 객체](/docs/appx/row-object)

### Example
```javascript
var eRow = sheet.getEditRow();
```

### Read More
- [getEditCol method](./get-edit-col)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
