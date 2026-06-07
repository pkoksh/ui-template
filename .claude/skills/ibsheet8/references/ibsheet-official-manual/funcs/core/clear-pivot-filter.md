---
KEY: clearPivotFilter
KIND: method
PATH: funcs/core/clear-pivot-filter
ALIAS: sheet.clearPivotFilter, clearPivotFilter(), 피벗, 필터가, 적용된, 경우, 필터행의
ALIAS_EN: clear, pivot, filter
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/clear-pivot-filter
---
# clearPivotFilter ***(method)***
> 피벗 필터가 적용된 경우 필터행의 내용을 초기화한 뒤, 원본 시트에 따라 다시 피벗 시트를 생성합니다. 


### Syntax
```javascript
void clearPivotFilter();
```

### Return Value
***none***

### Example
```javascript
//피벗 필터를 제거하고 다시 피벗 시트를 생성합니다.
pivotSheet_sheet.clearPivotFilter();
```

### Read More
- [doPivotFilter method](./do-pivot-filter)

### Since

|product|version|desc|
|---|---|---|
|core|8.2.0.1|기능 추가|
