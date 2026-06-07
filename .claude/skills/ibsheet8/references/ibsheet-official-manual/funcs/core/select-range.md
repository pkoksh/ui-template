---
KEY: selectRange
KIND: method
PATH: funcs/core/select-range
ALIAS: sheet.selectRange, selectRange(), 셀부터, 셀까지, 사각형, 영역을, 선택
ALIAS_EN: select, range, selection
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/select-range
---
# selectRange ***(method)***
> `row1, col1` 셀부터 `row2, col2` 셀까지 사각형 영역을 선택 혹은 선택해제 합니다.

> 열을 설정하지 않으면 (`col1, col2`를 설정하지 않으면), `row1` 부터 `row2` 까지 **행**을 선택,선택해제 합니다.

> 행을 설정하지 않으면 (`row1, row2`를 설정하지 않으면), `col1` 부터 `col2` 까지 **열**을 선택,선택해제 합니다.

### Syntax
```javascript
number selectRange( row1, col1, row2, col2, select, type, valid, ignoreEvent );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|row1|`object`|선택|선택 시작 [데이터 로우 객체](/docs/appx/row-object)|
|col1|`string`|선택|선택 시작 열이름|
|row2|`object`|선택|선택 종료 [데이터 로우 객체](/docs/appx/row-object)|
|col2|`string`|선택|선택 종료 열이름|
|select|`boolean`|선택| 선택 / 선택해제 여부
`0(false)`:선택해제
`1(true)`:선택
`null`:Toggle (`default`)|
|type|`number`|선택|`1`: 히든된 행은 제외 `2`:트리에서 접힌 자식노드는 제외|
|valid|`boolean`|선택|실제로 영역 선택/선택해제 가능여부 확인
(실제로 영역 선택/선택해제 되지 않고, 선택/선택해제 될 행,셀 수 리턴)
`0(false)`:영역 선택/선택해제 가능여부 확인 안함 (`default`)
`1(true)`:영역 선택/선택해제 가능여부 확인 사용|
|ignoreEvent|`boolean`|선택| [onSelectEnd](/docs/events/on-select-end) 이벤트 발생 여부 
`0(false)`: 발생
`1(true)`: 발생하지 않음 (`default`)|

### Return Value
***number*** : 선택이나 선택해제된 행,셀 수

### Example
```javascript
//AR5행 deptName 셀부터 AR10행 bizname 셀까지를 선택
sheet.selectRange( sheet.getRowById("AR4"), "deptName", sheet.getRowById("AR10"), "bizname", 1 );
```

### Read More
- [clearSelection method](./clear-selection)
- [selectCol method](./select-col)
- [selectRow method](./select-row)
- [getSelectedRange method](./get-selected-range)
- [getSelectedRow method](./cget-selected-row)
- [onSelectEnd event](/docs/events/on-select-end)
### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|core|8.3.0.14|`ignoreEvent` 인자 추가|
