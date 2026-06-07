---
KEY: onStartDragCell
KIND: event
PATH: events/on-start-drag-cell
ALIAS: 시트, 셀이, 드래그되기, 전에, 호출되는
ALIAS_EN: on, start, drag, cell, sheet, grid
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-start-drag-cell
---
# onStartDragCell ***(event)***
> 시트 내 셀이 드래그되기 전에 호출되는 이벤트입니다.

> `1(true)`를 리턴 시 행 드래그가 취소되고 선택(`Select`)이 실행됩니다.

> `string`을 리턴하는 경우 드래그로 보여지는 `html` 값이 리턴값으로 보여집니다.

### Syntax

```
    onStartDragCell : function(paramObject) {

    }
or
    sheet.bind("onStartDragCell" , function(paramObject) {});
```

### Parameters


| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|드래그가 실행된 시트 객체|
|row|`object`|드래그가 된 셀이 위치한 [데이터 로우 객체](/docs/appx/row-object)|
|col|`string`|드래그가 된 셀이 위치한 열이름|
|html|`string`|마우스에 첨부될 드래그 한 객체 html|

### Return

***mixed(`boolean` \| `string`)*** : string을 리턴할 경우 셀 드래그 객체가 리턴된 값으로 대체 됩니다


### Example
```javascript
options.Events = {
    onStartDragCell: function (evtParam) {
        // Int 타입 컬럼은 Drag가 되지 않도록 true 리턴
        if (evtParam.sheet.getType(evtParam.row, evtParam.col) == 'Int') {
            return true;
        }
    }
}
```

### Read More

- [CanDrag cfg](/docs/props/cfg/can-drag)
- [DragCell cfg](/docs/props/cfg/drag-cell)
- [onEndDragCell event](./on-end-drag-cell)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.27|기능 추가|
