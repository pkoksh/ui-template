---
KEY: onKeyPress
KIND: event
PATH: events/on-key-press
ALIAS: 포커스된, 시트에서, 사용자가, 키를, 눌렀을
ALIAS_EN: on, key, press
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-key-press
---
# onKeyPress ***(event)***
> 포커스된 시트에서 사용자가 키를 눌렀을 때 호출되는 이벤트입니다.

> [onKeyDown](./on-key-down) 이벤트가 호출된 뒤 호출되는 이벤트로, 문자, 숫자키를 누를 때만 호출됩니다.

> 문자키의 경우 `unicode` 및 `name` 파라미터의 값이 [onKeyDown](./on-key-down), [onKeyUp](./on-key-up)의 것과 **다릅니다**.

<!--!
> `[비공개 설명]` true를 리턴 시 눌린 키의 기본 동작이 무시됩니다 press의 기본동작이 많지 않아 공개하지 않는 걸로..
!-->

### Syntax

```
    onKeyPress : function(paramObject) {

    }
or
    sheet.bind("onKeyPress" , function(paramObject) {});
```

### Parameters


| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|포커스되어 있는 시트 객체|
|key|`number`|눌린 키의 `Unicode`|
|event|`object`|`onKeyPress`에서 발생된 자바스크립트 key 이벤트|
|name|`string`|누른 Key 이름(`A, Esc, Right..`)|
|prefix|`string`|두개 이상의 키 입력 시 첫 key 이름(`ctrl, shfit..`)|

<!--!
### Return
`[비공개]` ***boolean***
!-->

### Example
```javascript
options.Events = {
    onKeyPress:function(evtParam){
        alert(evtParam.name + "키가 눌렸습니다.");
    }
}
```

### Read More

- [onKeyDown event](./on-key-down)
- [onKeyUp event](./on-key-up)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
