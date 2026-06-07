---
KEY: onColResize
KIND: event
PATH: events/on-col-resize
ALIAS: 열의, 크기가, 변경될, 호출되는, 이벤트입니다
ALIAS_EN: on, col, resize
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-col-resize
---
# onColResize ***(event)***
> 열의 크기가 변경될 때 호출되는 이벤트입니다.

> 사용자의 클릭 또는 [setColWidth](/docs/funcs/core/set-col-width) 메소드 사용으로 인한 열 사이즈 변경 시 호출됩니다.

> 열 전체에 [RelWidth](/docs/props/col/rel-width) 설정이 되어 있는 경우 일부 열의 사이즈 변경 시 모든 열에 대해 해당 이벤트가 호출됩니다.


### Syntax

```
    onColResize : function(paramObject) {

    }
or
    sheet.bind("onColResize" , function(paramObject) {});
```

### Parameters


| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|서버에 변경된 내용을 전송할 시트 객체|
|col|`string`|너비가 변경된 열의 열이름|

### Return
***none***

### Example
```javascript
options.Events = {
    onColResize:function(evtParam){
        alert("시트의 "+evtParam.col+"열의 크기가 변경되었습니다.");
    }
}
```

### Read More

- [onAfterColResize event](./on-after-col-resize)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
