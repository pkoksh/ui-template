---
KEY: setEnterMode
KIND: method
PATH: funcs/core/set-enter-mode
ALIAS: sheet.setEnterMode, setEnterMode(), 설정을, 동적으로, 변경합니다
ALIAS_EN: set, enter, mode
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/set-enter-mode
---
# setEnterMode ***(method)***
> (Cfg) [EnterMode](/docs/props/cfg/enter-mode)설정을 동적으로 변경합니다.

### Syntax
```javascript
boolean setEnterMode(enterMode);
```

### Parameters
|Name|Type|Required|Description|
|----|----|--------|-----------|
|enterMode|`number`|필수|변경할 [EnterMode](/docs/props/cfg/enter-mode) 속성|

### Return Value
***boolean*** : 함수 정상 동작 여부. (인자값이 잘못되어 수행되지 못한 경우에는 `false` 리턴)

### Example
```javascript
// Cfg.EnterMode를 5로 변경
sheet.setEnterMode(5);
```

### Try it

- [Demo of setEnterMode](https://jsfiddle.net/gh/get/library/pure/ibsheet/ibsheet8-manual-sample/tree/master/samples/properties/Cfg/EnterMode/)

### Read More
- [EnterMode cfg](/docs/props/cfg/enter-mode)

### Since
|product|version|desc|
|---|---|---|
|core|8.0.0.13|기능 추가|