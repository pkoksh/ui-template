---
KEY: noChanged
KIND: cell-property
PATH: props/cell/no-changed
ALIAS: 셀의, 값이, 변경되었을때, 수정, 상태를
ALIAS_EN: no, changed, edit, modify, update, change
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cell/no-changed
---
# NoChanged ***(cell)***

> 셀의 값이 변경되었을때 수정 상태를 변경 하지 않도록 설정합니다.

> 값이 `1(true)`로 설정되어 있다면 셀의 값이 변경되어도 수정 상태를 변경하지 않습니다.

> 수정 상태를 변경(`Changed`)하지 않지만 수정 관련된 이벤트는 발생합니다.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|셀 값을 수정하면 수정 상태를 변경 (`default`)|
|`1(true)`|셀 값을 수정해도 수정 상태를 변경하지 않음|

### Example
```javascript
// 특정 셀의 값이 변경되어도 수정 상태를 변경하지 않도록 설정
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "NoChanged", true);
```

### Read More


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
