---
KEY: formatFix
KIND: column-property
PATH: props/col/format-fix
ALIAS: 저장, 함수, 호출시, 적용된, 문자열로
ALIAS_EN: format, fix, save, persist, store, function, method
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/format-fix
---
# FormatFix ***(col)***

> 저장 함수([getSaveJson](/docs/funcs/core/get-save-json), [getSaveString](/docs/funcs/core/get-save-string), [doSave](/docs/funcs/core/do-save)) 호출시 `Format` 적용된 문자열로 추출하는 기능. 

> [getString](/docs/funcs/core/get-string)으로 출력하는 값과 동일함.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|본래 저장 함수 호출시 데이터 출력 (`default`)|
|`1(true)`|`Format`이 적용된 데이터 출력 (`getString과 동일`)|


### Example
```javascript
// 해당 Money Col은 getString 과 동일한 데이터가 출력되도록 한다.
options.Cols = [
    {Type: "Int", Name: "Money", Align: "Center", Format: "#,### 만원", FormatFix: true},
    {Type: "Float", Name: "Grow", Align: "Center", Format: "#,##0.##%"}
    ...
];
```

### Read More
- [doSave method](/docs/funcs/core/do-save)
- [getSaveJson method](/docs/funcs/core/get-save-json)
- [getSaveString method](/docs/funcs/core/get-save-string)
- [getString method](/docs/funcs/core/get-string)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.7|기능 추가|
