---
KEY: selectAllRows
KIND: method
PATH: funcs/core/select-all-rows
ALIAS: sheet.selectAllRows, selectAllRows(), 전체, 행을, 선택, 혹은, 선택해제
ALIAS_EN: select, all, rows, total, selection
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/select-all-rows
---
# selectAllRows ***(method)***
> 전체 행을 선택 혹은 선택해제 합니다.


### Syntax
```javascript
boolean selectAllRows( select, ignoreEvent );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|select|`boolean`|선택| 선택 / 선택해제  여부 
`0(false)`:선택해제
`1(true)`:선택
`null`:Toogle (`default`)|
|ignoreEvent|`boolean`|선택| [onSelectEnd](/docs/events/on-select-end) 이벤트 발생 여부 
`0(false)`:발생
`1(true)`:발생하지 않음 (`default`)|

### Return Value
***boolean*** : 선택/선택해제 변경 여부

이미 전체 선택되어 있는 상태에서 다시 선택하려 하거나, 해제된 상태에서 다시 해제하려 하면 `false`를 리턴

### Example
```javascript
//전체 행을 선택합니다.
sheet.selectAllRows(1);
```

### Read More
- [clearSelection method](./clear-selection)
- [selectCol method](./select-col)
- [selectRow method](./select-row)
- [selectRange method](./select-range)
- [getSelectedRange method](./get-selected-range)
- [getSelectedRow method](./cget-selected-row)
- [onSelectEnd event](/docs/events/on-select-end)
### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|core|8.3.0.14|`ignoreEvent` 인자 추가|
