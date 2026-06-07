---
KEY: headerCheckMode
KIND: config-property
PATH: props/cfg/header-check-mode
ALIAS: 헤더, 체크, 박스, 활성화된, 시트에서
ALIAS_EN: header, check, mode, checkbox
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/header-check-mode
---
# HeaderCheckMode ***(cfg)***

> 헤더 체크 박스(`HeaderCheck (cfg, col)`)가 활성화된 시트에서 `Bool` 타입인 열의 헤더 체크 박스를 클릭 시 해당 열의 셀이 체크 될 대상이 되는 행을 설정합니다.

### Type
`number`

### Options
|Value|Description|
|-----|-----|
| `0` | 시트의 모든 행 (`default`)|
| `1` | 시트에 보이는 행 |

### Example
```javascript
options = {
    Cfg :{
        HeaderCheck: 1,  // Type이 Bool인 열의 헤더에 체크박스를 생성합니다.
        HeaderCheckMode: 1, // 시트에 보이는 행에 대해 체크합니다(필터링되거나, 행이 Visible 0일 때 체크가 되지 않습니다)
        ...
    }
};
```

### Read More
- [HeaderCheck col](/docs/props/col/header-check)
- [HeaderCheck cfg](./header-check)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
