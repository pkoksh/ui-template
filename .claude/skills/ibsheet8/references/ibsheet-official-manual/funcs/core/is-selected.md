---
KEY: isSelected
KIND: method
PATH: funcs/core/is-selected
ALIAS: sheet.isSelected, isSelected(), 해당, 기능은, 버전, 이후로, 지원하지
ALIAS_EN: is, selected
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/is-selected
---
# !isSelected ***(method)*** `[Deprecated]`

> 해당 기능은 8.0.0.5 버전 이후로 지원하지 않습니다.

> 8.2.x.x 버전 이후로 삭제됩니다.

<details>

> 행이나 셀에 선택 여부를 확인합니다.

> row 인자만 설정시 행 선택 여부를 확인하고, col인자까지 설정시 셀의 선택 여부를 확인합니다.

### Syntax
```javascript
boolean isSelected( row , col );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|row|`object`|필수|[데이터 로우 객체](/docs/appx/row-object)|
|col|`string`|선택|열이름|



### Return Value
***boolean*** : 선택 여부

### Example
```javascript
//현재 행의 선택 여부를 확인
var frow = sheet.getFocusedRow();
var isSel = sheet.isSelected(frow);
```

### Read More
- [clearSelection method](./clear-selection)
- [selectRow method](./select-row)
- [selectCol method](./select-col)
- [selectRange method](./select-range)
- [getSelectedRange method](./get-selected-range)
- [getSelectedRow method](./cget-selected-row)

</details>

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|core|8.0.0.5|`Deprecated`|
