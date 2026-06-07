---
KEY: spinnerVisible
KIND: column-property
PATH: props/col/spinner-visible
ALIAS: 열에서, 편집, 화살표를, 표시합니다
ALIAS_EN: spinner, visible, edit, editable
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/spinner-visible
---
# SpinnerVisible ***(col)***
> [Type](/docs/appx/type)이 `Int`, `Float`인 열에서 편집 시 화살표를 표시합니다.

> 설정 시 input의 type이 number로 생성됩니다.

> 

> 추가적으로 [SpinnerStep](./spinner-step), [SpinnerMax](./spinner-max), [SpinnerMax](./spinner-min)을 통해 input의 step, min, max를 설정 할 수 있습니다.

> `제약사항` [EditMaskFunc](../cfg/edit-mask-func)가 적용된 열에서는 동작하지 않습니다.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|편집 시 화살표를 표시하지 않음 (`default`)|
|`1(true)`|편집 시 화살표를 표시|

### Example
```javascript
options.Cols = [
    ...
    {Type: "Int", Name: "Qty", SpinnerVisible: true...},
    ...
];
```

### Read More
- [Type appendix](/docs/appx/type)
- [SpinnerStep](./spinner-step)
- [SpinnerMax](./spinner-max)
- [SpinnerMin](./spinner-min)

### Since

|product|version|desc|
|---|---|---|
|core|8.1.0.88|기능 추가|
