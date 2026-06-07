---
KEY: onBeforeFocus
KIND: event
PATH: events/on-before-focus
ALIAS: 시트, 셀이, 포커스, 되기, 전에
ALIAS_EN: on, before, focus, sheet, grid
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-before-focus
---
# onBeforeFocus ***(event)***
> 시트 내 셀이 포커스 되기 전에 호출되는 이벤트입니다.

> `1(true)`를 리턴 시 포커스를 이동하지 않습니다.

### Syntax

```
    onBeforeFocus : function(paramObject) {

    }
or
    sheet.bind("onBeforeFocus" , function(paramObject) {});
```

### Parameters
| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|포커스가 된 셀이 있는 시트 객체|
|row|`object`|포커스가 된 셀이 위치한 [데이터 로우 객체](/docs/appx/row-object)|
|col|`string`|포커스가 된 셀이 위치한 열이름|
|orow|`object`|이전에 포커스가 되어있던 셀이 위치한 [데이터 로우 객체](/docs/appx/row-object)|
|ocol|`string`|이전에 포커스가 되어있던 셀이 위치한 열이름|
|rect|`array[object]`|다수의 셀들을 포커스했을 경우 포커스된 영역|
|orect|`array[object]`|이전에 다수의 셀들을 포커스했을때의 영역|

### Return
***boolean***

### Example
```javascript
options.Events = {
    onBeforeFocus: function (evtParam) {
        if (!confirm('셀 내용: "' + evtParam.sheet.getString({row :evtParam.row, col: evtParam.col}) + '"\n포커스 하시겠습니까?')) {
          return true;
        }
    }
}
```

### Read More
- [focus method](/docs/funcs/core/focus)
- [onFocus event](/docs/events/on-focus)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.6|기능 추가|
