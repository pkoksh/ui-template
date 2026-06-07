---
KEY: spinnerVisible
KIND: cell-property
PATH: props/cell/spinner-visible
ALIAS: 셀에서, 편집, 화살표를, 표시합니다
ALIAS_EN: spinner, visible, edit, editable
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cell/spinner-visible
---
# SpinnerVisible ***(cell)***
> [Type](/docs/appx/type)이 `Int`, `Float`인 셀에서 편집 시 화살표를 표시합니다.

> 설정 시 input의 type이 number로 생성됩니다.

> 

> 추가적으로 [SpinnerStep](./spinner-step), [SpinnerMax](./spinner-max), [SpinnerMax](./spinner-min)을 통해 input의 step, min, max를 설정 할 수 있습니다.

> `제약사항` [EditMaskFunc](../cfg/edit-mask-func)가 적용된 셀에서는 동작하지 않습니다.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|편집 시 화살표를 표시하지 않음 (`default`)|
|`1(true)`|편집 시 화살표를 표시|

### Example
```javascript
options.cells = [
    ...
    {Type: "Int", Name: "Qty", SpinnerVisible: false},
    ...
];

var data = [
    {Qty: 10, QtySpinnerVisible: true},
    {Qty: 20, QtySpinnerVisible: false},
]
```

### Read More
- [Type appendix](/docs/appx/type)
- [SpinnerStep](./spinner-step)
- [SpinnerMax](./spinner-max)
- [SpinnerMin](./spinner-min)

### Since

|product|version|desc|
|---|---|---|
|core|8.3.0.42|기능 추가|
