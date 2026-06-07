---
KEY: setExpandRow
KIND: method
PATH: funcs/core/set-expand-row
ALIAS: sheet.setExpandRow, setExpandRow(), 트리나, 그룹, 사용시, 특정행을, 접거나
ALIAS_EN: set, expand, row, group
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/set-expand-row
---
# setExpandRow ***(method)***
> 트리나 그룹 사용시 특정행을 접거나 펼칩니다.

### Syntax
```javascript
boolean setExpandRow(row, col, expand);
```

### Parameters
|Name|Type|Required|Description|
|----------|-----|---|----|
|row|`object`|필수|[데이터 로우 객체](/docs/appx/row-object)|
|col|`string`|선택|열이름 (`default: null`)|
|expand|`boolean`|선택|펼칠지 여부
`0(false)`:접기
`1(true)`:펼치기
`null`:Toggle (`default`)|

### Return Value
***boolean*** : 접거나 펼쳐짐 변경 여부

### Example
```javascript
//특정 행을 toggle로 접거나 펼침
sheet.setExpandRow( sheet.getFocusedRow(), "GROUPNM" );
```

### Read More
- [showTreeLevel method](./show-tree-level)
- [Expanded row](/docs/props/row/expanded)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|core|8.0.0.5|expand 인자 추가 및 col 인자 필수에서 선택으로 변경|
