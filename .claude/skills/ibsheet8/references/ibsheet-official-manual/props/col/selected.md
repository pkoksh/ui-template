---
KEY: selected
KIND: column-property
PATH: props/col/selected
ALIAS: 열을, 선택하거나, 선택여부를, 확인
ALIAS_EN: selected, confirm, ok
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/selected
---
# Selected ***(col)***

> 열을 선택하거나 선택여부를 확인 합니다.

> [SelectingCells](/docs/props/cfg/selecting-cells)의 속성값이 0인 경우 사용하실 수 있습니다.


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|열 선택 해제 (`default`)|
|`1(true)`|열 선택|

### Example
```javascript
//XMT 열 전체를 선택
sheet.setAttribute({col: "XMT", attr: "Selected", val: 1, render: 1});
```

### Read More
- [SelectingCells cfg](/docs/props/cfg/selecting-cells)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
