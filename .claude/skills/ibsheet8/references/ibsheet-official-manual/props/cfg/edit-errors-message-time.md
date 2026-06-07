---
KEY: editErrorsMessageTime
KIND: config-property
PATH: props/cfg/edit-errors-message-time
ALIAS: 시트를, 조작, 편집할때, 발생하는, 오류
ALIAS_EN: edit, errors, message, time
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/edit-errors-message-time
---
# EditErrorsMessageTime ***(cfg)***

> 시트를 조작 및 편집할때 발생하는 오류 메시지의 지속시간(보여지는 시간)을 설정합니다.



### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|메시지 지속시간 (`default: 1000, 밀리초 단위(ms)`)|


### Example
```javascript
options.Cfg = {
  EditErrorsMessageTime: 1500,     // 메세지 오류 메시지를 1500ms 동안 보여지게 설정
  ...
};
```

### Read More
- [showMessageTime method](/docs/funcs/core/show-message-time)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
