---
KEY: onCheckAllFinish
KIND: event
PATH: events/on-check-all-finish
ALIAS: 시트에서, 사용자의, 클릭이나, 타입의, 전체
ALIAS_EN: on, check, all, finish, total
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-check-all-finish
---
# onCheckAllFinish ***(event)***
> 시트에서 사용자의 클릭이나 [setAllCheck](/docs/funcs/core/set-all-check)를 통해 `Bool` 타입의 열 전체 체크/언체크 완료 시 호출되는 이벤트입니다.


### Syntax

```
    onCheckAllFinish: function(paramObject) {

    }
or
    sheet.bind("onCheckAllFinish" , function(paramObject) {});
```

### Parameters

| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|열 전체 체크/언체크가 완료 된 시트 객체|
|col|`string`|열 전체 체크/언체크가 완료 된 열이름|
|result|`boolean`|열 전체 체크 여부
`0(false)`:체크해제
`1(true)`:체크|

### Return
***none***

### Example
```javascript
options.Events = {
    onCheckAllFinish:function(evtParam){
        alert(evtParam.col + "열이 체크(" + evtParam.result + ") 완료되었습니다.");
    }
}
```

### Read More

- [setAllCheck method](/docs/funcs/core/set-all-check)
- [onBeforeCheckAll event](/docs/events/on-before-check-all)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.8|기능 추가|
