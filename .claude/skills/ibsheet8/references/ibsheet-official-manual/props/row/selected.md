---
KEY: selected
KIND: row-property
PATH: props/row/selected
ALIAS: 행을, 선택합니다
ALIAS_EN: selected
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/row/selected
---
# Selected ***(row)***
> 행을 선택합니다.

> 속성을 `1(true)`로 설정하면 [getSelectedRows()](/docs/funcs/core/get-selected-rows)를 통해 선택한 행을 얻을 수 있습니다.

> [SelectingCells cfg](/docs/props/cfg/selecting-cells) 속성에 따라 선택한 행을 표시하거나 무시할 수 있습니다.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|선택 해제|
|`1(true)`|선택|



### Example
```javascript
//특정 행을 선택한다.
var row = sheet.getRowById("AR55");
row["Selected"] = 1;
```

### Read More
- [SelectingCells cfg](/docs/props/cfg/selecting-cells)
- [getSelectedRows method](/docs/funcs/core/get-selected-rows)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
