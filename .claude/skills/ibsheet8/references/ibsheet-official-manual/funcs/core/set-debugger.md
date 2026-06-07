---
KEY: setDebugger
KIND: method
PATH: funcs/core/set-debugger
ALIAS: sheet.setDebugger, setDebugger(), 시트의, 디버그, 모드를, 활성화하는, 메소드입니다
ALIAS_EN: set, debugger
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/set-debugger
---
# !setDebugger ***(method)***

> 시트의 디버그 모드를 활성화하는 메소드입니다. 설정되는 값에 따라 디버깅 되는 내용이 달라집니다.

### Syntax
```javascript
void setDebugger( flag );
```

### Parameters

|Name|Type|Required| Description |
|----------|-----|---|----|
|flag|`string`|필수|[DebugOption cfg](/docs/props/cfg/debug-option)로 설정될 디버그 옵션 문자열 (`default: ''`)|


### Return Value
***string*** : 설정된 `flag` 값

### Example
```javascript
sheet.setDebugger('info, check');
```

### Read More
- [DebugOption cfg](/docs/props/cfg/debug-option)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
