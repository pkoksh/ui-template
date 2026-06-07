---
KEY: spinnerMin
KIND: cell-property
PATH: props/cell/spinner-min
ALIAS: 사용하는, 셀에서, 화살표를, 통한, 입력
ALIAS_EN: spinner, min, input, import
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cell/spinner-min
---
# SpinnerMin ***(cell)***
> [SpinnerVisible](./spinner-visible)을 사용하는 셀에서 화살표를 통한 입력 시 최솟값을 설정할 수 있습니다.

> 

> 추가적으로 [SpinnerStep](./spinner-step), [SpinnerMax](./spinner-Max)을 통해 input의 step, max를 설정 할 수 있습니다. 

### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|편집 시 입력 값의 최솟값|


### Example
```javascript
options.cells = [
    ...
    {Type: "Int", Name: "Qty", SpinnerVisible: true},
    ...
];

var data = [
    {Qty: 10, QtySpinnerMin: 0},
    {Qty: 20, QtySpinnerMin: -100},
]
```

### Read More
- [Type appendix](/docs/appx/type)
- [SpinnerVisible](./spinner-visible)
- [SpinnerStep](./spinner-step)
- [SpinnerMax](./spinner-max)

### Since

|product|version|desc|
|---|---|---|
|core|8.3.0.42|기능 추가|
