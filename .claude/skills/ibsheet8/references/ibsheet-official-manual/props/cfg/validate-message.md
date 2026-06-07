---
KEY: validateMessage
KIND: config-property
PATH: props/cfg/validate-message
ALIAS: 설정했을, 유효성, 검사, 실패시, 띄울
ALIAS_EN: validate, message, validation, valid
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/validate-message
---
# ValidateMessage ***(cfg)***

> `ValidCheck`를 설정했을 때, 유효성 검사 실패시 띄울 메시지를 설정합니다.


### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|`ValidCheck`를 설정했을 때, 유효성 검사 실패시 띄울 메시지를 설정합니다. |

### Example
```javascript
options.Cfg = {
    ValidateMessage: "유효성 검사에 실패했습니다.",  // 유효성 검사 실패시 띄울 메시지를 설정합니다.
};
```

### Read More
- [ValidCheck cfg](/docs/props/cfg/valid-check)

### Since

|product|version|desc|
|---|---|---|
|core|8.2.0.3|기능 추가|