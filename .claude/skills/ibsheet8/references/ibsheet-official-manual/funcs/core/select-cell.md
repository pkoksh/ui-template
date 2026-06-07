---
KEY: selectCell
KIND: method
PATH: funcs/core/select-cell
ALIAS: sheet.selectCell, selectCell(), 지정한, 셀을, 선택, 혹은, 선택해제
ALIAS_EN: select, cell, selection
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/select-cell
---
# selectCell ***(method)***
> 지정한 셀을 선택 혹은 선택해제 합니다.

> 시트 `Cfg`의 `SelectingCells`설정이 `0` 일때는 사용 하실 수 없습니다.

### Syntax
```javascript
boolean selectCell( row, col, select, valid, ignoreEvent );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|row|`object`|필수|[데이터 로우 객체](/docs/appx/row-object)|
|col|`string`|필수|열이름|
|select|`boolean`|선택| 선택 / 선택해제  여부
`0(false)`:선택해제
`1(true)`:선택
 `null`:Toggle (`default`)
|valid|`boolean`|선택|실제로 선택/선택해제 가능여부 확인
(실제로 셀 선택/선택해제 되진 않고, 가능/불가능 여부를 확인해서 리턴)
`0(false)`:선택/선택해제 가능여부 확인 안함 (`default`)
`1(true)`:선택/선택해제 가능여부 확인 사용|
|ignoreEvent|`boolean`|선택| [onSelectEnd](/docs/events/on-select-end) 이벤트 발생 여부 
`0(false)`: 발생
`1(true)`: 발생하지 않음 (`default`)|

### Return Value
***boolean*** : 선택/선택해제 변경 여부

이미 선택한 셀을 다시 선택하려 하거나, 해제된 셀을 다시 해제하려 하면 `false`를 리턴

### Example
```javascript
//현재 포커스가 있는 셀을 선택
var row = sheet.getFocusedRow();
var col = sheet.getFocusedCol();
sheet.selectCell( row, col, 1);
```

### Read More
- [clearSelection method](./clear-selection)
- [selectRow method](./select-row)
- [selectCol method](./select-col)
- [selectRange method](./select-range)
- [getSelectedRange method](./get-selected-range)
- [getSelectedRow method](./cget-selected-row)
- [onSelectEnd event](/docs/events/on-select-end)
### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|core|8.3.0.14|`ignoreEvent` 인자 추가|