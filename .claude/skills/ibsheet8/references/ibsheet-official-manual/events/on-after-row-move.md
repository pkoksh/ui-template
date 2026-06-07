---
KEY: onAfterRowMove
KIND: event
PATH: events/on-after-row-move
ALIAS: 같은, 시트, 내에, 이동, 호출되는
ALIAS_EN: on, after, row, move, sheet, grid
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-after-row-move
---
# onAfterRowMove ***(event)***
> 같은 시트 내에 행 이동 시 호출되는 이벤트입니다.

> 드래그 앤 드랍, [moveRow](/docs/funcs/core/move-row)메소드 사용시 호출됩니다.

### Syntax
```
    onAfterRowMove : function(paramObject) {

    }
or
    sheet.bind("onAfterRowMove" , function(paramObject) {});
```

### Parameters


| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|이동할 행이 위치한 시트 객체|
|row|`object`|이동할 행의 [데이터 로우 객체](/docs/appx/row-object)|
|oldparent|`object`|이동할 행의 부모 객체([데이터 로우 객체](/docs/appx/row-object) 또는 [페이지 객체](/docs/appx/page-object))|
|oldnext|`object`|이동할 행의 다음 행의 [데이터 로우 객체](/docs/appx/row-object)|

### Return
***number***

### Example
```javascript
options.Events = {
    onAfterRowMove:function(evtParam){
        alert(evtParam.row.id + "행을 옮깁니다.");
    }
}
```

### Read More

- [onStartDrag event](./on-start-drag)
- [onEndDrag event](./on-end-drag)
- [moveRow method](/docs/funcs/core/move-row)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
