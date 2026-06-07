---
KEY: spinnerStep
KIND: column-property
PATH: props/col/spinner-step
ALIAS: 사용하는, 열에서, 입력, 값의, 증감
ALIAS_EN: spinner, step, input, import
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/spinner-step
---
# SpinnerStep ***(col)***
> [SpinnerVisible](./spinner-visible)을 사용하는 열에서 입력 값의 증감 간격을 설정할 수 있습니다.

> 

> 추가적으로 [SpinnerMax](./spinner-max), [SpinnerMax](./spinner-min)을 통해 input의 min, max를 설정 할 수 있습니다. 

### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|편집 시 입력 값의 증감 간격|


### Example
```javascript
options.Cols = [
    ...
    {Type: "Int", Name: "Qty", SpinnerVisible: true, SpinnerStep: 10, ...},
    ...
];
```

### Read More
- [Type appendix](/docs/appx/type)
- [SpinnerVisible](./spinner-visible)
- [SpinnerMax](./spinner-max)
- [SpinnerMin](./spinner-min)

### Since

|product|version|desc|
|---|---|---|
|core|8.1.0.88|기능 추가|
