---
KEY: removeRows
KIND: method
PATH: funcs/core/remove-rows
ALIAS: sheet.removeRows, removeRows(), 지정한, 여러행들을, 삭제
ALIAS_EN: remove, rows, delete
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/remove-rows
---
# removeRows ***(method)***
> 지정한 여러행들을 삭제 합니다. 

> 여러 행들을 삭제하고 싶은 경우, `removeRow` 보다는 `removeRows`를 사용하는 것이 좋습니다.

### Syntax
```javascript
void removeRow( rows );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|rows|`array[object]`|필수|삭제하고자 하는 행들|

### Return Value
***none***

### Example
```javascript
// 체크된 행들을 제거 합니다.
var rows = sheet.getRowsByChecked("chk");
sheet.removeRows(rows);
```

### Read More
- [removeRow method](./remove-row)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.7|기능 추가|
