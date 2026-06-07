---
KEY: onEndDragCell
KIND: event
PATH: events/on-end-drag-cell
ALIAS: 드래그, 셀이, 드랍되는, 시점에, 호출되는
ALIAS_EN: on, end, drag, cell
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-end-drag-cell
---
# onEndDragCell ***(event)***
> 드래그 된 셀이 드랍되는 시점에 호출되는 이벤트입니다.



### Syntax

```
    onEndDragCell : function(paramObject) {

    }
or
    sheet.bind("onEndDragCell" , function(paramObject) {});
```

### Parameters
| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|드래그 된 셀이 기존에 위치하던 시트 객체|
|row|`object`|드래그 된 셀의 기존 [데이터 로우 객체](/docs/appx/row-object)|
|col|`string`|드래그 된 셀의 기존 열 이름|
|tosheet|`object`|드랍 된 시트 객체|
|torow|`object`|드랍 된 셀의 [데이터 로우 객체](/docs/appx/row-object)|
|tocol|`string`|드랍 된 셀의 열 이름|
|x|`number`|드랍할 때 마우스 커서의 x좌표(브라우저 기준)|
|y|`number`|드랍할 때 마우스 커서의 y좌표(브라우저 기준)|


### Return
***none***


### Example
```javascript
options.Events = {
    onEndDragCell: function (evtParam) {
        if (!evtParam.torow || !evtParam.tocol || evtParam.tocol === '_ConstWidth' || (evtParam.row && evtParam.row.Kind != 'Data') || (evtParam.torow && evtParam.torow.Kind != 'Data')) { return; }

        var bValue = evtParam.tosheet.getValue(evtParam.torow, evtParam.tocol);
        var aValue = evtParam.sheet.getValue(evtParam.row, evtParam.col);

        if (evtParam.tosheet && evtParam.torow && evtParam.tocol) {
            evtParam.tosheet.setValue(evtParam.torow, evtParam.tocol, aValue);

            if (bValue) {
                evtParam.sheet.setValue(evtParam.row, evtParam.col, bValue);
            } else {
                evtParam.sheet.setValue(evtParam.row, evtParam.col, '');
            }
        }
    }
}
```

### Read More

- [CanDrag cfg](/docs/props/cfg/can-drag)
- [DragCell cfg](/docs/props/cfg/drag-cell)
- [onStartDragCell event](./on-start-drag-cell)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.27|기능 추가|
