---
KEY: removeSubTotal
KIND: method
PATH: funcs/core/remove-sub-total
ALIAS: sheet.removeSubTotal, removeSubTotal(), 시트, 존재하는, 모든, 소계, 누계
ALIAS_EN: remove, sub, total, sheet, grid, subtotal
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/remove-sub-total
---
# removeSubTotal ***(method)***
> 시트 내 존재하는 모든 소계/누계 행을 제거합니다.

### Syntax
```javascript
void removeSubTotal();
```

### Return Value
***none***

### Example
```javascript
// 소계/누계 행 제거
sheet.removeSubTotal();
```

### Read More
- [makeSubTotal method](./make-sub-total)
- [getSubTotalRows method](./get-sub-total-rows)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
