---
KEY: centerMessage
KIND: config-property
PATH: props/cfg/center-message
ALIAS: 시트에서, 발생하는, 메세지, 시트의, 위치와
ALIAS_EN: center, message
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/center-message
---
# CenterMessage ***(cfg)***
> 시트에서 발생하는 메세지(div layer)를 시트의 위치와 무관하게 화면 한가운데 표시합니다.

> 해당 속성을 설정하지 않는 경우, 시트 객체의 가운데에 메세지가 표시됩니다.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|시트객체의 가운데에 메세지를 표시 (`default`)|
|`1(true)`|현재 보여지는 화면의 가운데에 메세지를 표시|


### Example
```javascript
options = {
    "Cfg":{
      "CenterMessage": true,  // 시트의 메세지를 화면 중앙에 표시
    }
};
```

### Read More

### Since
|product|version|desc|
|---|---|---|
|core|8.0.0.1|기능 추가|
