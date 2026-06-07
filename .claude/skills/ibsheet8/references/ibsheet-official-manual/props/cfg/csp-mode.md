---
KEY: cspMode
KIND: config-property
PATH: props/cfg/csp-mode
ALIAS: 테스트용으로, 만든, 옵션이라, 기능은, 일단
ALIAS_EN: csp, mode
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/csp-mode
---
# !CSPMode ***(cfg)***

> **CSP 테스트용으로 만든 옵션이라 기능은 일단 비공개합니다.**
> LWC의 CSP 모드로 시트를 동작시킵니다. 


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
| `0` | CSP를 적용하지 않습니다. (`default`) |
| `1` | LWC의 CSP 모드로 시트를 동작시킵니다. |

### Example
```javascript
options = {
    Cfg :{
        CSPMode: 0, // LWC CSP 모드로 시트를 동작시킵니다.
        ...
    }
};
```

### Read More

### Since

|product|version|desc|
|---|---|---|
|core|8.3.0.46|기능 추가|
