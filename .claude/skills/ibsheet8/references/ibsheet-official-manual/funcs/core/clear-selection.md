---
KEY: clearSelection
KIND: method
PATH: funcs/core/clear-selection
ALIAS: sheet.clearSelection, clearSelection(), 드래그나, 함수등을, 선택한, 영역에, 대해
ALIAS_EN: clear, selection
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/clear-selection
---
# clearSelection ***(method)***
> 드래그나 함수등을 통해 선택한 영역에 대해 선택을 취소한다.

### Syntax
```javascript
void clearSelection( );
```

### Return Value
***none***

### Example
```javascript
//선택 영역 모두 취소
sheet.clearSelection();
```

### Read More
- [CanSelect row](/docs/props/row/can-select)
- [CanSelect col](/docs/props/col/can-select)
- [selectRow method](./select-row)
- [selectCol method](./select-col)
- [selectRange method](./select-range)
- [getSelectedRange method](./get-selected-range)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
