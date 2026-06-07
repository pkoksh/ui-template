---
KEY: autoCloseDialog
KIND: config-property
PATH: props/cfg/auto-close-dialog
ALIAS: 달력, 컨텍스트, 메뉴, 내부적으로, 사용하는
ALIAS_EN: auto, close, dialog
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/auto-close-dialog
---
# AutoCloseDialog ***(cfg)***

> 달력, 컨텍스트 메뉴 등 내부적으로 사용하는 다이얼로그에서 마우스가 벗어날 때, 다이얼로그를 자동으로 닫을지 여부를 설정합니다. 


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`false`|다이얼로그를 자동으로 닫지 않습니다. (`default`)|
|`true`|다이얼로그를 자동으로 닫습니다.|


### Example
```javascript
options = {
  "Cfg":{
    "AutoCloseDialog": true,  // 달력, 컨텍스트 메뉴 등 내부적으로 사용하는 다이얼로그에서 마우스가 벗어날 때 달력을 자동으로 닫습니다.
  }
};
```

### Read More

### Since

|product|version|desc|
|---|---|---|
|core|8.3.0.24|기능 추가|
