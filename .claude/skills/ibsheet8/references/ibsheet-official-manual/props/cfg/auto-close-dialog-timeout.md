---
KEY: autoCloseDialogTimeout
KIND: config-property
PATH: props/cfg/auto-close-dialog-timeout
ALIAS: 설정하여, 다이얼로그를, 자동으로, 닫을, 경우
ALIAS_EN: auto, close, dialog, timeout
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/auto-close-dialog-timeout
---
# AutoCloseDialogTimeout ***(cfg)***

> `(Cfg) AutoCloseDialog`를 설정하여 다이얼로그를 자동으로 닫을 경우, 다이얼로그가 자동으로 닫히는 딜레이 시간을 설정합니다. 


### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|다이얼로그가 자동으로 닫히는 시간을 설정합니다.|


### Example
```javascript
options = {
  "Cfg":{
    "AutoCloseDialogTimeout": 1000,  // 1초 후 다이얼로그가 자동으로 닫히도록 설정
  }
};
```

### Read More

### Since

|product|version|desc|
|---|---|---|
|core|8.3.0.24|기능 추가|
