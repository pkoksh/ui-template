---
KEY: headerCheck
KIND: config-property
PATH: props/cfg/header-check
ALIAS: 시트, 생성, 타입이, 모든, 열들의
ALIAS_EN: header, check, sheet, grid
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/header-check
---
# HeaderCheck ***(cfg)***

> 시트 생성 시 타입이 `Bool`인 모든 열들의 헤더에 체크 박스를 생성합니다. 

> 헤더 셀의 체크 박스를 클릭 시 해당 열의 체크박스를 모두 **체크** 또는 **체크해제** 합니다.

> 특정 열에만 적용하고자 하실 때는[(Col)HeaderCheck](/docs/props/col/header-check)를 참고하세요.

### Type
`number`

### Options
|Value|Description|
|-----|-----|
| `0` | 체크 박스 생성 안함 (`default`)|
| `1` | 체크 박스 생성|

### Example
```javascript
options = {
    Cfg :{
        HeaderCheck: 1,  // Type이 Bool인 모든 열의 헤더에 체크박스를 생성합니다.
        ...
    }
};
```

### Read More
- [HeaderCheck col](/docs/props/col/header-check)
- [HeaderCheckMode cfg](./header-check-mode)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
