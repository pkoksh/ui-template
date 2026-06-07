---
KEY: onCanDrop
KIND: event
PATH: events/on-can-drop
ALIAS: 시트에서, 드래그, 하여, 다른, 행에
ALIAS_EN: on, can, drop
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-can-drop
---
# !onCanDrop ***(event)***

> 시트에서 행(들)을 드래그 하여 다른 행에 호버시 발생하는 이벤트입니다.

> 리턴 값으로 드래그 드랍이 가능할지 여부 및 드랍될 위치를 선택할 수 있습니다(리턴값으로 취할 수 있는 값은 type 파라미터와 동일합니다).

### Syntax

```
    onCanDrop : function(paramObject {

    }
or
    sheet.bind("onCanDrop" , function(paramObject) {});
```

### Parameters


| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|드래그 대상이 되는 행이 있는 시트 객체|
|row|`object`|드래그 대상이 되는 행의 [데이터 로우 객체](/docs/appx/row-object)|
|tosheet|`object`|행을 드랍할 시트 객체|
|torow|`object`|행을 드랍했을때 어디에 들어갈지에 대한 기준이 되는 [데이터 로우 객체](/docs/appx/row-object)|
|type|`number`|드래그 드랍이 가능할지 여부 및 드랍될 위치에 대한 정보
`0`:드래그 드랍할 수 없음
`1`:`torow` [데이터 로우 객체](/docs/appx/row-object)의 위쪽에 드랍
`2`:`tosheet` 시트가 트리/그룹인 경우 `torow` [데이터 로우 객체](/docs/appx/row-object)의 하위 노드에 드랍
`3`:`torow` [데이터 로우 객체](/docs/appx/row-object)의 아래쪽에 드랍|
|copy|`boolean`|드래그 드랍 시 행의 이동이 아닌 행의 복사가 일어날지 여부|
|rows|`array[object]`|복수개의 행들이 드래그 드랍된 경우 해당 행들의 [데이터 로우 객체](/docs/appx/row-object) 배열|

### Return
***boolean***

### Example
```javascript
options.Events = {
    onCanDrop:function(evtParam){
        // sMoney열의 값이 드랍될 값보다 작은 경우 드랍하지 않습니다.
        if (evtParam.row["sMoney"] > evtParam.torow["sMoney"]) return 0;
        // sMoney열의 값이 드랍될 값과 같은 경우 아래쪽에 드랍합니다.
        else if (evtParam.row["sMoney"] == evtParam.torow["sMoney"]) return 2;
    }
}
```

### Read More

- [onStartDrag event](./on-start-drag)
- [onEndDrag event](./on-end-drag)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
