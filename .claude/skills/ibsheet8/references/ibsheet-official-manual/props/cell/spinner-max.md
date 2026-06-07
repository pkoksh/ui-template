---
KEY: spinnerMax
KIND: cell-property
PATH: props/cell/spinner-max
ALIAS: 사용하는, 셀에서, 화살표를, 통한, 입력
ALIAS_EN: spinner, max, input, import
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cell/spinner-max
---
# SpinnerMax ***(cell)***
> [SpinnerVisible](./spinner-visible)을 사용하는 셀에서 화살표를 통한 입력 시 최댓값을 설정할 수 있습니다.

> 

> 추가적으로 [SpinnerStep](./spinner-step), [SpinnerMin](./spinner-min)을 통해 input의 step, min를 설정 할 수 있습니다. 

### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|편집 시 입력 값의 최댓값|


### Example
```javascript
options.cells = [
    ...
    {Type: "Int", Name: "Qty", SpinnerVisible: true},
    ...
];

var data = [
    {Qty: 10, QtySpinnerMax: 100000},
    {Qty: 20, QtySpinnerMax: 200000},
]
```

### Read More
- [Type appendix](/docs/appx/type)
- [SpinnerVisible](./spinner-visible)
- [SpinnerStep](./spinner-step)
- [SpinnerMin](./spinner-min)

### Since

|product|version|desc|
|---|---|---|
|core|8.3.0.42|기능 추가|
