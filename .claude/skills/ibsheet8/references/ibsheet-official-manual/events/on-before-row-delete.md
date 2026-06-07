---
KEY: onBeforeRowDelete
KIND: event
PATH: events/on-before-row-delete
ALIAS: 행의, 상태를, 삭제, 처리, 호출되는
ALIAS_EN: on, before, row, delete, remove
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-before-row-delete
---
# onBeforeRowDelete ***(event)***
> 행의 상태를 삭제 처리 전 호출되는 이벤트입니다.

> 리턴을 통해 삭제를 취소할지 또는 유지할지 여부를 결정할 수 있습니다(type파라미터 결과에 따라 다른 동작).

> type 파라미터가 `0`일 때, `1(true)`를 리턴시 삭제 처리하고, `0(false)`를 리턴시 삭제를 취소합니다.

> type 파라미터가 `1`일 때, `1(true)`를 리턴시 삭제를 취소하고, `0(false)`를 리턴시 삭제를 진행합니다.


### Syntax

```
    onBeforeRowDelete : function(paramObject) {

    }
or
    sheet.bind("onBeforeRowDelete" , function(paramObject) {});
```

### Parameters
| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|시트 객체|
|row|`object`|삭제 처리/취소될 행의 [데이터 로우 객체](/docs/appx/row-object)|
|type|`number`|삭제 여부
`0`:삭제 처리
`1`:삭제 취소|
|rows|`array[object]`|선택된 복수개의 행을 삭제 처리/취소할 때 해당 행들의 [데이터 로우 객체](/docs/appx/row-object) 배열|

### Return
***boolean***

### Example
```javascript
options.Events = {
    onBeforeRowDelete:function(evtParam){
        // 삭제 처리할 행의 sProgress 열에 있는 셀 값이 80이상인 경우 삭제 처리를 하지 않습니다.
        if (evtParam.row["sProgress"] >= 80) {
            return false;
        } else {
            return true;
        }
    }
}
```

### Read More

- [onAfterRowDelete event](./on-after-row-delete)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
