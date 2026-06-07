---
KEY: onKeyUp
KIND: event
PATH: events/on-key-up
ALIAS: 포커스된, 시트에서, 키보드의, 눌린, 키가
ALIAS_EN: on, key, up
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-key-up
---
# onKeyUp ***(event)***
> 포커스된 시트에서 키보드의 눌린 키가 올라왔을때 호출되는 이벤트입니다.

> 모든 기능 키에 대해 호출되며 [onKeyPress](./on-key-press) 이벤트가 발생한 뒤 호출됩니다.

### Syntax

```
    onKeyUp : function(paramObject) {

    }
or
    sheet.bind("onKeyUp" , function(paramObject) {});
```

### Parameters


| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|포커스되어 있는 시트 객체|
|key|`number`|눌린 키의 `Unicode`|
|event|`object`|`onKeyUp`에서 발생된 자바스크립트 key 이벤트|
|name|`string`|누른 Key 이름(`A, Esc, Right..`)|
|prefix|`string`|두개 이상의 키 입력 시 첫 key 이름(`ctrl, shfit..`)|

### Return
***none***


### Example
```javascript
options.Events = {
    onKeyUp:function(evtParam){
        alert(evtParam.name + "키가 눌렸습니다.");
    }
}
```

### Read More

- [onKeyDown event](./on-key-down)
- [onKeyPress event](./on-key-press)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
