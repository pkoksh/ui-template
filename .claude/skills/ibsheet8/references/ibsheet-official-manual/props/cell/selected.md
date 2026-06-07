---
KEY: selected
KIND: cell-property
PATH: props/cell/selected
ALIAS: 셀을, 선택하거나, 선택여부를, 확인
ALIAS_EN: selected, confirm, ok
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cell/selected
---
# Selected ***(cell)***

> 셀을 선택하거나 선택여부를 확인 합니다.

> [SelectingCells](/docs/props/cfg/selecting-cells)의 속성값이 `0(false)`이 아닌 경우에 사용하실 수 있습니다.


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|열 선택 해제|
|`1(true)`|열 선택|

### Example
```javascript
//특정 셀을 선택
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "Selected", 1);
```

### Read More
- [Selected row](/docs/props/row/selected)
- [SelectingCells cfg](/docs/props/cfg/selecting-cells)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
