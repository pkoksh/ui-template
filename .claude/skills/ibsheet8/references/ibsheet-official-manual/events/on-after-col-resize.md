---
KEY: onAfterColResize
KIND: event
PATH: events/on-after-col-resize
ALIAS: 열의, 너비가, 사용자에, 의해, 변경
ALIAS_EN: on, after, col, resize, change, modify
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-after-col-resize
---
# onAfterColResize ***(event)***
> 열의 너비가 사용자에 의해 변경 시 호출되는 이벤트입니다.

> [setColWidth](/docs/funcs/core/set-col-width) 메소드 사용 시 호출되지 않습니다.

### Syntax

```
    onAfterColResize : function(paramObject) {

    }
or
    sheet.bind("onAfterColResize" , function(paramObject) {});
```

### Parameters
| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|시트 객체|
|col|`string`|너비가 변경된 열의 열이름|
|row|`object`|열의 너비를 변경시키기 위해 드래그 된 [헤더 로우 객체](/docs/appx/row-object)|
|chg|`number`|너비의 변화량|

### Return
***none***

### Example
```javascript
options.Events = {
    onAfterColResize:function(evtParam){
        // 변경된 열이름과 그 변화량을 alert로 보여줍니다.
        alert(evtParam.col + "열이 " + evtParam.chg+"px 만큼 변경되었습니다.");
    }
}
```

### Read More
- [setColWidth method](/docs/funcs/core/set-col-width)
- [onColResize event](./on-col-resize)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
