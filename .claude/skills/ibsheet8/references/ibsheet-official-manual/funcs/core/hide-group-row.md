---
KEY: hideGroupRow
KIND: method
PATH: funcs/core/hide-group-row
ALIAS: sheet.hideGroupRow, hideGroupRow(), 그룹행을, 제거하거나, 숨깁니다
ALIAS_EN: hide, group, row
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/hide-group-row
---
# hideGroupRow ***(method)***
> 그룹행을 제거하거나 숨깁니다.

### Syntax
```javascript
void hideGroupRow( del );
```

### Parameters


|Name|Type|Required| Description |
|----------|-----|---|----|
|del |`string or object`|선택|그룹행을 삭제합니다. (`default: 1`)|

### Return Value
***boolean*** : 설정 완료 여부

### Example
```javascript
// 그룹행을 제거합니다.
sheet.hideGroupRow(); 

// 그룹행을 숨깁니다.
sheet.hideGroupRow(0); 
```

### Read More

### Since

|product|version|desc|
|---|---|---|
|core|8.3.0.9|기능 추가|
