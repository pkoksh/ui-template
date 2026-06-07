---
KEY: messageWidth
KIND: config-property
PATH: props/cfg/message-width
ALIAS: 시트, 메시지, 창의, 최소, 너비
ALIAS_EN: message, width, sheet, grid, alert
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/message-width
---
# MessageWidth ***(cfg)***

> 시트 메시지 창의 최소 너비(`pixel`) 를 설정합니다.  

> [showMessage()](/docs/funcs/core/show-message)나 [showMessageTime()](/docs/funcs/core/show-message-time)과 같은 메소드를 통해 `Layer팝업` 형태로 시트 중앙에 표시되는 메세지 창의 너비를 설정합니다.



### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|메세지 창의 최소 너비 (`default: 140`)|


### Example
```javascript
options.Cfg = {
  SuppressMessage: 0,    // 시트의 모든 상태 메세지 표시
  MessageWidth: 200,     // 메세지 창의 너비를 200px 로 설정
  ...
};
```

### Read More
- [SuppressMessage cfg](./suppress-message)
- [MoveMessage cfg](./move-message)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
