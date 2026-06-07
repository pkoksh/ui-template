---
KEY: onFocus
KIND: event
PATH: events/on-focus
ALIAS: 시트, 셀이, 포커스, 되었을때, 호출되는
ALIAS_EN: on, focus, sheet, grid
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-focus
---
# onFocus ***(event)***
> 시트 내 셀이 포커스 되었을때 호출되는 이벤트입니다.


### Syntax

```
    onFocus : function(paramObject) {

    }
or
    sheet.bind("onFocus" , function(paramObject) {});
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
***none***


### Example
```javascript
options.Events = {
    onFocus:function(evtParam){
        alert("현재 포커스된 셀의 값은 "+evtParam.sheet.getValue({row :evtParam.row, col: evtParam.col})+" 입니다.");
    }
}
```

### Read More
- [focus method](/docs/funcs/core/focus)
- [onBeforeFocus event](/docs/events/on-before-focus)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
