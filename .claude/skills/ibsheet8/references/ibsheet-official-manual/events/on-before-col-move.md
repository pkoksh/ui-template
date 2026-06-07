---
KEY: onBeforeColMove
KIND: event
PATH: events/on-before-col-move
ALIAS: 열을, 드래그를, 다른, 위치로, 움직이기
ALIAS_EN: on, before, col, move
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-before-col-move
---
# onBeforeColMove ***(event)***
> 열을 드래그를 통해 다른 위치로 움직이기 전 호출되는 이벤트입니다.</br>
> `return true` 시 컬럼 이동을 취소 할 수 있습니다.

### Syntax
```
    onBeforeColMove : function(paramObject) {

    }
or
    sheet.bind("onBeforeColMove" , function(paramObject) {});
```

### Parameters
| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|시트 객체|
|col|`string`|이동하는 열이름|
|toCol|`string`|이동될 위치의 열이름|

### Return
***boolean***

### Example
```javascript
options.Events = {
    onBeforeColMove:function(evtParam){
        // 열의 이동되는 위치가 SEQ 컬럼이면 열이동을 취소 합니다.
        if (evtParam.toCol == "SEQ") return true;
    }
}
```

### Read More


### Since

|product|version|desc|
|---|---|---|
|core|8.2.0.1|기능 추가|
