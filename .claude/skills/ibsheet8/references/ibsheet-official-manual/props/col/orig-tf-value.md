---
KEY: origTfValue
KIND: column-property
PATH: props/col/orig-tf-value
ALIAS: 사용시, 타입, 컬럼의, 값이, 설정한
ALIAS_EN: orig, tf, value
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/orig-tf-value
---
# !OrigTFValue ***(col)***

> `getRowValue`사용시 `Bool`타입 컬럼의 값이 `TrueValue`, `FalseValue`로 설정한 값이 리턴됩니다.

> **<mark>[getSaveJson](/docs/funcs/core/get-save-json) 기능에서 `rows` 인자를 통하여 사용하는 것으로 해당 기능 대체 되었습니다.</mark>**

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|`TrueValue`, `FalseValue` 설정과 관계 없이 객체가 가지고 있는 값이 리턴 (`default`)|
|`1(true)`|`TrueValue`, `FalseValue` 설정 값 리턴|


### Example
```javascript
// getRowValue의 리턴값 TrueValue, FalseValue로 사용
options.Cols = [
    {Type: "Bool", Name: "ConfirmYN", Align: "Center", Width: 70, TrueValue: "Y", FalseValue: "N", OrigTFValue: true},
    ...
];
```

### Read More
- [TrueValue col](./true-value)
- [FalseValue col](./false-value)
- [getSaveJson col](/docs/funcs/core/get-save-json)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.22|기능 추가|
