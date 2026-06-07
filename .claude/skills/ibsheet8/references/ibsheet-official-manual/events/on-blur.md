---
KEY: onBlur
KIND: event
PATH: events/on-blur
ALIAS: 시트가, 포커스를, 잃을, 호출되는, 이벤트입니다
ALIAS_EN: on, blur
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-blur
---
# onBlur ***(event)***
> 시트가 셀 포커스를 잃을 때 호출되는 이벤트입니다.


### Syntax

```
    onBlur : function(paramObject) {

    }
or
    sheet.bind("onBlur" , function(paramObject) {});
```

### Parameters


| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|포커스를 잃은 시트 객체|
|orow|`object`|포커스를 잃기전에 포커스가 되어있던 셀이 위치한 [데이터 로우 객체](/docs/appx/row-object)|
|ocol|`string`|포커스를 잃기전에 포커스가 되어있던 셀이 위치한 열이름|
|orect|`array[object]`|포커스를 잃기전에 다수의 셀들을 포커스했을때의 영역|

### Return
***none***


### Example
```javascript
options.Events = {
    onBlur:function(evtParam){
        alert("시트가 포커스를 잃었습니다. 이전 포커스된 셀의 값은"+evtParam.sheet.getValue({row :evtParam.orow, col: evtParam.ocol}+"입니다."));
    }
}
```

### Read More

- [blur method](/docs/funcs/core/blur)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
