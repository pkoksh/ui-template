---
KEY: selectRow
KIND: method
PATH: funcs/core/select-row
ALIAS: sheet.selectRow, selectRow(), 지정한, 행을, 선택
ALIAS_EN: select, row, selection
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/select-row
---
# selectRow ***(method)***
> 지정한 행을 선택 합니다.


### Syntax
```javascript
boolean selectRow( row, select, valid, ignoreEvent );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|row|`object`|필수|[데이터 로우 객체](/docs/appx/row-object)|
|select|`boolean`|선택| 선택 / 선택해제  여부
`0(false)`:선택해제
`1(true)`:선택
`null`:Toggle (`default`)|
|valid|`boolean`|선택|행 선택/선택해제 가능여부 확인
(실제로 행이 선택/선택해제 되지 않고, 가능/불가능 여부를 확인해서 리턴)
`0(false)`:행 선택/선택해제 확인 안함 (`default`)
`1(true)`:행 선택/선택해제 확인 사용|
|ignoreEvent|`boolean`|선택| [onSelectEnd](/docs/events/on-select-end) 이벤트 발생 여부 
`0(false)`: 발생
`1(true)`: 발생하지 않음 (`default`)|

### Return Value
***boolean*** : 선택/선택해제 변경 여부

이미 선택한 행을 다시 선택하려 하거나, 해제된 행을 다시 해제하려 하면 `0(false)`를 리턴

### Example
```javascript
//현재 포커스가 있는 행을 선택
var row = sheet.getFocusedRow();
sheet.selectRow( row, 1);
```

### Read More
- [clearSelection method](./clear-selection)
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
