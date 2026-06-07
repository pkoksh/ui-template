---
KEY: onKeyDown
KIND: event
PATH: events/on-key-down
ALIAS: 포커스된, 시트에서, 사용자가, 키를, 눌렀을
ALIAS_EN: on, key, down
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-key-down
---
# onKeyDown ***(event)***
> 포커스된 시트에서 사용자가 키를 눌렀을 때 호출되는 이벤트입니다.

> 모든 기능 키에 대해 호출되며, `1(true)`를 리턴 시 눌린 키의 기본 동작이 무시됩니다(ex: Insert키를 통한 행 추가, Enter키를 통한 편집모드로 변경 등).

> 편집 모드에서 이벤트는 동작하지만, 리턴을 통한 기본 동작을 막을 수 없습니다.

### Syntax

```
    onKeyDown : function(paramObject) {

    }
or
    sheet.bind("onKeyDown" , function(paramObject) {});
```

### Parameters


| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|포커스되어 있는 시트 객체|
|key|`number`|눌린 키의 `keyCode`|
|event|`object`|`onKeyDown`에서 발생된 자바스크립트 key 이벤트|
|name|`string`|누른 Key의 이름(`A, Esc, Backspace, Enter` 등)|
|prefix|`string`|`Shift, Alt, Ctrl` 키와 같이 눌려진 경우 key 이름
`Shift-> Ctrl-> Alt` 순으로 문자열을 조합하여 리턴.
가령 `Shift`와 `Ctrl`이 같이 눌려진 경우 `"ShiftCtrl"` 이 리턴, `Alt`와 `Ctrl`이 같이 눌려진 경우 `"CtrlAlt"`가 리턴|

### Return
***boolean***

### Example
```javascript
options.Events = {
    onKeyDown:function(evtParam){
        // 포커스된 시트에 Insert키 Delete키 입력시 키입력 동작을 막습니다.
        if(evtParam.name == "Ins" || evtParam.name == "Del") return true;
    }
}
```

### Read More

- [onKeyUp event](./on-key-up)
- [onKeyPress event](./on-key-press)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
