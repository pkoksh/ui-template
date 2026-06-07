---
KEY: preserveNull
KIND: config-property
PATH: props/cfg/preserve-null
ALIAS: 사용자가, 데이터를, 기입한, 경우, 시트
ALIAS_EN: preserve, null, sheet, grid
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/preserve-null
---
# PreserveNull ***(cfg)***

> 사용자가 데이터를 null로 기입한 경우 시트 객체에 null 값 그대로 바인딩하고, `getSaveJson`으로 데이터 추출시 데이터를 ""이 아닌 null 값 그대로 추출합니다. 


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
| `0` | 사용자가 데이터를 null로 기입해도 `getSaveJson`으로 데이터 추출할 때는 데이터가 ""으로 추출됨 (`default`)|
| `1` | 사용자가 데이터를 null로 기입한 경우 `getSaveJson`으로 데이터 추출할 때 데이터가 null 값 그대로 추출됨 |

### Example
```javascript
options = {
    Cfg :{
        PreserveNull: 1, // 사용자가 데이터를 null로 기입한 경우 getSaveJson으로 데이터를 추출할 때 데이터가 null 값 그대로 추출됨
        ...
    }
};
```

### Read More

### Since

|product|version|desc|
|---|---|---|
|core|8.3.0.34|기능 추가|
