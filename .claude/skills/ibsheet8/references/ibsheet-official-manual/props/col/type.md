---
KEY: type
KIND: column-property
PATH: props/col/type
ALIAS: 셀이, 갖고있는, 데이터, 유형을, 의미합니다
ALIAS_EN: type, data
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/type
---
# Type ***(col)***

> 셀이 갖고있는 데이터 유형을 의미합니다.

> 열을 생성시에는 반드시 선언되어야 합니다.

> 일반적인 텍스트나 숫자(정수, 실수) 체크박스, 드랍다운리스트 와 같은 타입이 존재합니다.

> 자세한 내용은 [Type appendix](/docs/appx/type)를 참고하세요.

### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|`Text, Int, Float, Date, Bool, Enum` 등 정해진 문자열|


### Example
```javascript
//특정 열의 타입을 설정합니다.
options.Cols = [
    {Type: "Int", Name: "Seq", Width: 70, ...},
    {Type: "Date", Name: "enterDate", Width: 120, ...},
    {Type: "Text", Name: "sa_Nm", Width: 100, ...},
    ...
];
```

### Read More
- [Type appendix](/docs/appx/type)
- [Type cell](/docs/props/cell/type)
- [getType method](/docs/funcs/core/get-type)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
