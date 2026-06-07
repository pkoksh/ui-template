---
KEY: onBeforeCheckAll
KIND: event
PATH: events/on-before-check-all
ALIAS: 시트에서, 사용자의, 클릭이나, 타입의, 전체
ALIAS_EN: on, before, check, all, total
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-before-check-all
---
# onBeforeCheckAll ***(event)***
> 시트에서 사용자의 클릭이나 [setAllCheck](/docs/funcs/core/set-all-check)를 통해 `Bool` 타입의 열 전체 체크/언체크 전 호출되는 이벤트입니다.

> `0(false)`를 리턴 시 열 전체 체크/언체크를 진행하지 않습니다.

> (대부분의 이벤트는 1(true)를 리턴 시 입력을 무시하는 것과 달리 이 이벤트에서는 false를 리턴시 입력을 무시하므로 주의 요망)

### Syntax

```
    onBeforeCheckAll: function(paramObject) {

    }
or
    sheet.bind("onBeforeCheckAll" , function(paramObject) {});
```

### Parameters

| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|열 전체 체크/언체크가 될 시트 객체|
|col|`string`|열 전체 체크/언체크가 될 열이름|

### Return
***boolean***

### Example
```javascript
options.Events = {
    onBeforeCheckAll:function(evtParam){
        if(!confirm(evtParam.col + "열을 체크하시겠습니까?")){
            return false;   
        }
    }
}
```

### Read More

- [setAllCheck method](/docs/funcs/core/set-all-check)
- [onCheckAllFinish event](/docs/events/on-check-all-finish)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.8|기능 추가|
