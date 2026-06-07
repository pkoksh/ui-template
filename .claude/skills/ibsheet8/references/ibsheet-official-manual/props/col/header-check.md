---
KEY: headerCheck
KIND: column-property
PATH: props/col/header-check
ALIAS: 타입이, 열의, 헤더에, 체크, 박스를
ALIAS_EN: header, check, checkbox
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/header-check
---
# HeaderCheck ***(col>Header)***

> 타입이 `Bool`인 열의 헤더에 체크 박스를 생성하며, 체크 박스를 클릭 시 해당 열에 있는 모든 셀의 체크박스를 **체크** 또는 **체크해제**합니다.

> 모든 `Bool`타입 열에 대해 헤더 체크박스를 적용 하고자 하실 때는 [(Cfg)HeaderCheck](/docs/props/cfg/header-check)를 참고하세요.

>  [(Cfg)HeaderCheck](/docs/props/cfg/header-check) 속성과 같이 사용시에는 이 속성이 적용 됩니다.

### Type
`number`

### Options
|Value|Description|
|-----|-----|
| `0` | 체크 박스 생성 안함|
| `1` | 체크 박스 생성|

### Example
```javascript
options.Cols = [
    ...
    {
        Header:{
            Value: "체크박스",
            HeaderCheck: 1
        },
        Type: "Bool", Name: "sCheckBox", Width: 100, ...
    },
    ...
];
```

### Read More
- [HeaderCheck cfg](/docs/props/cfg/header-check)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
