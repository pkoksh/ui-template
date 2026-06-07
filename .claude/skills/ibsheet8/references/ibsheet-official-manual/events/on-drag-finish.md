---
KEY: onDragFinish
KIND: event
PATH: events/on-drag-finish
ALIAS: 드래그된, 행들이, 드랍이, 가장, 마지막에
ALIAS_EN: on, drag, finish
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-drag-finish
---
# onDragFinish ***(event)***
> 드래그된 행들이 드랍이 된 뒤, 가장 마지막에 발생하는 이벤트 입니다. 

> 해당 이벤트는 `tosheet` 에 드래그된 내용이 시트에 반영된 이후 입니다. 

> 이벤트 발생 순서: `onEndDrag` -> `onAfterRowMoveTosheet` -> `onDragFinish`

### Syntax

```
    onDragFinish : function(paramObject) {

    }
or
    sheet.bind("onDragFinish " , function(paramObject) {});
```

### Parameters
| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|드래그된 행들이 기존에 위치하던 시트 객체|
|row|`object`|드래그된 행들의 기존 [데이터 로우 객체](/docs/appx/row-object)|
|tosheet|`object`|드랍된 시트 객체|
|torow|`object`|드랍한 어디에 들어갈지에 대한 기준이 되는 [데이터 로우 객체](/docs/appx/row-object)|

### Return
***none***


### Example
```javascript
options.Events = {
    onDragFinish:function(evtParam){
        // 해당 구간은 드래그가 끝난 뒤 시트에 반영된 상태입니다.
    }
}
```

### Read More

- [onStartDrag event](./on-start-drag)
- [onEndDrag event](./on-end-drag)
- [onAfterRowMoveTosheet event](./on-after-row-move-to-sheet)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.15|기능 추가|
