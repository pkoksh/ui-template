---
KEY: onAfterRowMoveToSheet
KIND: event
PATH: events/on-after-row-move-to-sheet
ALIAS: 서로, 다른, 시트, 사이에, 이동
ALIAS_EN: on, after, row, move, to, sheet, grid
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-after-row-move-to-sheet
---
# onAfterRowMoveToSheet ***(event)***
> 서로 다른 시트 사이에 행 이동 시(드래그 앤 드랍) 호출되는 이벤트입니다.

> 해당 이벤트는 행이 이동하기전에 있던 시트에서만 호출됩니다(이동할 대상이 되는 시트에서는 발생되지 않습니다).

> 리턴 결과에 따라 행 이동시 기존 시트에서 행을 삭제(행을 삭제 상태로 변경)/제거(행을 완전히 제거)/유지(행 복사로 처리)할지 여부가 결정됩니다.

> `0(false)` 을 리턴 시 행을 이동한 것으로 간주하고 기존 시트에서 행을 삭제 처리합니다.

> `1(true)` 을 리턴 시 행을 복사한 것으로 간주하고 기존 시트에서 행을 유지합니다.

> `-1` 을 리턴 시 행을 이동한 것으로 간주하고 기존 시트에서 행을 제거 처리합니다.

### Syntax
```
    onAfterRowMoveToSheet : function(paramObject) {

    }
or
    sheet.bind("onAfterRowMoveToSheet" , function(paramObject) {});
```

### Parameters
| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|이동할 행이 위치한 시트 객체|
|row|`object`|이동할 행의 [데이터 로우 객체](/docs/appx/row-object)|
|tosheet|`object`|행이 이동할 타깃이 되는 시트 객체|
|torow|`object`|이동해서 새롭게 생성된 행의 [데이터 로우 객체](/docs/appx/row-object)(`tosheet`에 존재)|
|copy|`boolean`|드래그앤 드랍으로 행 이동이 아닌 복사를 실행한건지의 여부
`0(false)`:이동
`1(true)`:복사|

### Return
***number***

### Example
```javascript
options.Events = {
    onAfterRowMoveToSheet:function(evtParam){
        // 기존 시트에서의 행에 대한 처리를 이동할 타깃이 되는 시트별로 달리 할 수 있습니다.
        if (evtParam.tosheet == Sheet1) return 1;
        else if (evtParam.tosheet == Sheet2) return -1;
        else return 0;
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
