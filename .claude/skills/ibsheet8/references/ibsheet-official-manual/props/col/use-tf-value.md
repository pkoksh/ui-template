---
KEY: useTfValue
KIND: column-property
PATH: props/col/use-tf-value
ALIAS: 컬럼에, 설정하는, 값을, 그대로, 시트
ALIAS_EN: use, tf, value, sheet, grid
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/use-tf-value
---
# !UseTFValue ***(col)***
> `UseTFValue`는 컬럼에 설정하는 `TrueValue`, `FalseValue` 값을 그대로 시트 데이터로 사용하는 옵션입니다. 

> 

> 본래 TrueValue, FalseValue는 서버와 데이터를 주고 받을 때만 사용되는 옵션입니다. 

> UseTFValue 설정 없이 이 옵션들을 사용하신다면 시트 데이터에는 TrueValue, FalseValue 설정값이 아닌 1(true)/0(false)이 저장될 것입니다. 

> 하지만 UseTFValue를 설정하시면 TrueValue, FalseValue로 설정한 값이 그대로 시트 데이터로 저장됩니다. 

> 즉, `getDataRows, getValue, getRowValue, getSaveJson` 등을 통해 데이터 값을 추출할 때 `TrueValue, FalseValue` 설정값이 그대로 추출됩니다. 

> 

> **주의: UseTFValue는 반드시 TrueValue, FalseValue와 함께 사용하셔야 합니다.**

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|시트에 데이터 저장시 `TrueValue`와 일치하는 데이터는 `1(true)`, `FalseValue`와 일치하는 데이터는 `0(false)`으로 저장 (`default`)|
|`1(true)`| 시트에 데이터 저장시 `TrueValue`, `FalseValue` 설정값으로 데이터 저장|


### Example
```javascript
// 셀 데이터를 TrueValue, FalseValue로 사용
options.Cols = [
    {Type: "Bool", Name: "ConfirmYN", Align: "Center", Width: 70, TrueValue: "Y", FalseValue: "N", UseTFValue: true},
    ...
];
```

### Read More
- [TrueValue col](./true-value)
- [FalseValue col](./false-value)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.22|기능 추가|
