---
KEY: onEndDrag
KIND: event
PATH: events/on-end-drag
ALIAS: 드래그된, 드랍되는, 시점에, 호출되는, 이벤트입니다
ALIAS_EN: on, end, drag
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-end-drag
---
# onEndDrag ***(event)***
> 드래그된 행(들)이 드랍되는 시점에 호출되는 이벤트입니다.

> 리턴 값으로 드래그 드랍이 가능할지 여부 및 드랍될 위치를 선택할 수 있습니다(리턴값으로 취할 수 있는 값은 type 파라미터와 동일합니다).

### Syntax

```
    onEndDrag : function(paramObject) {

    }
or
    sheet.bind("onEndDrag" , function(paramObject) {});
```

### Parameters
| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|드래그된 행들이 기존에 위치하던 시트 객체|
|row|`object`|드래그된 행들의 기존 [데이터 로우 객체](/docs/appx/row-object)|
|tosheet|`object`|드랍된 시트 객체|
|torow|`object`|드랍했을때 어디에 들어갈지에 대한 기준이 되는 [데이터 로우 객체](/docs/appx/row-object)|
|type|`number`|드래그 드랍이 가능할지 여부 및 드랍될 위치에 대한 정보
`0`:드래그 드랍할 수 없음
`1`:`torow` [데이터 로우 객체](/docs/appx/row-object)의 위쪽에 드랍(드랍될 시트의 데이터가 없을 경우도 이에 해당)
`2`:`tosheet` 시트가 트리/그룹인 경우 `torow` [데이터 로우 객체](/docs/appx/row-object)의 하위 노드에 드랍
`3`:`torow` [데이터 로우 객체](/docs/appx/row-object)의 아래쪽에 드랍
`4`:드래그 드랍할 수 없는 시트 외부 영역에 드랍|
|x|`number`|드랍할 때 마우스 커서의 x좌표(브라우저 기준)|
|y|`number`|드랍할 때 마우스 커서의 y좌표(브라우저 기준)|
|rows|`array[object]`|복수개의 행들이 드래그 드랍된 경우 해당 행들의 [데이터 로우 객체](/docs/appx/row-object) 배열|
<!--!
|`[비공개]` copy|`boolean`|드래그 드랍 시 행의 이동이 아닌 행의 복사가 일어날지 여부|
!-->

### Return
***number***

### Example
```javascript
options.Events = {
    onEndDrag:function(evtParam){
        // 서로 다른 시트 객체간 드래그 드롭할 경우 이를 취소합니다.
        if(evtParam.sheet == evtParam.tosheet) return 0;
    }
}
```

### Read More

- [onStartDrag event](./on-start-drag)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|core|8.3.0.28|type:4 기능 추가|
