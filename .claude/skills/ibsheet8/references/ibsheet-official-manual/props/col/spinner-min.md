---
KEY: spinnerMin
KIND: column-property
PATH: props/col/spinner-min
ALIAS: 사용하는, 열에서, 화살표를, 통한, 입력
ALIAS_EN: spinner, min, input, import
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/spinner-min
---
# SpinnerMin ***(col)***
> [SpinnerVisible](./spinner-visible)을 사용하는 열에서 화살표를 통한 입력 시 최솟값을 설정할 수 있습니다.

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
options.Cols = [
    ...
    {Type: "Int", Name: "Qty", SpinnerVisible: true, SpinnerMin: -1, ...},
    ...
];
```

### Read More
- [Type appendix](/docs/appx/type)
- [SpinnerVisible](./spinner-visible)
- [SpinnerStep](./spinner-step)
- [SpinnerMax](./spinner-max)

### Since

|product|version|desc|
|---|---|---|
|core|8.1.0.88|기능 추가|
