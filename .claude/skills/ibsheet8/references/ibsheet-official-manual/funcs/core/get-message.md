---
KEY: getMessage
KIND: method
PATH: funcs/core/get-message
ALIAS: sheet.getMessage, getMessage(), 시트에서, 메시지를, 가져옵니다
ALIAS_EN: get, message
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/get-message
---
# getMessage ***(method)***
> 시트에서 메시지를 가져옵니다.

### Syntax
```javascript
string getMessage( key, type );
```

### Parameters
|Name|Type|Required|Description|
|----------|-----|---|----|
|key|`string`|필수|메시지 이름|
|type|`string`|선택|가져올 메시지 종류
`'Alert'`, `'Text'(default)` 중 선택|


### Return Value
***String***

### Example
```javascript
// msg 파일의 Alert 밑에 있는 CanCancelChanges 메시지 내용을 가져옵니다.
var message1 = sheet.getMessage("CanCancelChanges", "Alert");

// msg 파일의 Text 밑에 있는 CanCancelChanges 메시지 내용을 가져옵니다.
var message2 = sheet.getMessage("Render");
```

### Read More
- [setMessage method](./set-message)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
