---
KEY: onStartDrag
KIND: event
PATH: events/on-start-drag
ALIAS: 시트, 드래그되기, 전에, 호출되는, 이벤트입니다
ALIAS_EN: on, start, drag, sheet, grid
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-start-drag
---
# onStartDrag ***(event)***
> 시트 내 행(들)이 드래그되기 전에 호출되는 이벤트입니다.

> `1(true)`를 리턴 시 행 드래그가 취소되고 행 선택(`Select`)이 실행됩니다.

> `-1` 리턴 시 행 드래그가 취소되고 이후 동작도 모두 취소됩니다. 

> `string`을 리턴하는 경우 드래그로 보여지는 `html` 값이 리턴값으로 보여집니다.


### Syntax

```
    onStartDrag : function(paramObject) {

    }
or
    sheet.bind("onStartDrag" , function(paramObject) {});
```

### Parameters


| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|드래그가 실행된 시트 객체|
|row|`object`|드래그가 시작된 지점의 셀이 위치한 [데이터 로우 객체](/docs/appx/row-object)|
|col|`string`|드래그가 시작된 지점의 셀이 위치한 열이름|
|more|`boolean`|복수개의 행들이 드래그될지 여부|
|rows|`array[object]`|복수개의 행들이 드래그된 경우 해당 행들의 [데이터 로우 객체](/docs/appx/row-object) 배열|
<!--!
|`[비공개]` copy|`boolean`|드래그 시 행의 이동이 아닌 행의 복사가 일어나는지 여부|
!-->

### Return
***mixed(`number` \| `string`)*** : string을 리턴할 경우 셀 드래그 객체가 리턴된 값으로 대체 됩니다


### Example
```javascript
options.Events = {
    onStartDrag:function(evtParam){
        // 새롭게 추가된 행 또는 다중 행들을 드래깅할 경우 취소합니다.
        if(evtParam.row["Added"] == 1 || evtParam.more) return true;
    }
}
```

### Read More

- [onEndDrag event](./on-end-drag)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|core|8.1.0.1|`-1` 리턴 기능 추가|
|core|8.1.0.14|`string` 리턴 기능 추가|
