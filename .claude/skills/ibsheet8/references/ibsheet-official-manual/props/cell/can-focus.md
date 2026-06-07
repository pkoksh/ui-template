---
KEY: canFocus
KIND: cell-property
PATH: props/cell/can-focus
ALIAS: 셀에, 클릭이나, 키보드를, 통한, 이동시
ALIAS_EN: can, focus
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cell/can-focus
---
# CanFocus ***(cell)***
> 셀에 클릭이나 키보드를 통한 이동시 포커스 가능 여부를 설정합니다.

> `CanFocus:0(false)`으로 설정된 셀에 대해서는 클릭을 통한 포커스 진입이 불가능하고, 키보드의 Tab 키를 이용한 이동시 열을 건너뛰게 됩니다.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|포커스 진입 불가|
|`1(true)`|포커스 집입 가능 (`default`)|



### Example
```javascript
//특정 셀에 대해서 포커스가 들어가지 않게 한다.
var ROW = sheet.getRowById("AR10");
ROW["CLSCanFocus"] = 0;
```

### Read More
- [CanFocus row](/docs/props/row/can-focus)
- [CanFocus col](/docs/props/col/can-focus)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
