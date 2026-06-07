---
KEY: onAfterColMove
KIND: event
PATH: events/on-after-col-move
ALIAS: 열을, 드래그를, 다른, 위치로, 움직인
ALIAS_EN: on, after, col, move
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-after-col-move
---
# onAfterColMove ***(event)***
> 열을 드래그를 통해 다른 위치로 움직인 후 호출되는 이벤트입니다.

### Syntax

```
    onAfterColMove : function(paramObject) {

    }
or
    sheet.bind("onAfterColMove" , function(paramObject) {});
```

### Parameters
| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|시트 객체|
|col|`string`|드래그된 열의 열이름|

### Return
***none***

### Example
```javascript
options.Events = {
    onAfterColMove:function(evtParam){
        // 변경된 열이름과 그 변화량을 alert로 보여줍니다.
        alert(params.col+"열의 드래깅이 완료되었습니다.");
    }
}
```

### Read More


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
