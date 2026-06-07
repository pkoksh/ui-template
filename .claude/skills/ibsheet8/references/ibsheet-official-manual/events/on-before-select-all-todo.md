---
KEY: onBeforeSelectAllTodo
KIND: event
PATH: events/on-before-select-all-todo
ALIAS: 시트의, 모든, 셀을, 선택하거나, 선택해제하기
ALIAS_EN: on, before, select, all, todo
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-before-select-all-todo
---
# !onBeforeSelectAll ***(event)***
> 시트의 모든 행, 열, 셀을 선택하거나 선택해제하기 전 호출되는 이벤트입니다.

> true를 리턴 시 선택/선택해제의 동작을 실행하지 않습니다.


<!--!
### 비공개 내용
시트의 모든 행을 선택하는 경우 selectAllRows메소드 

열을 모두 선택하는 경우는 현재 공개 안함 

셀을 모두 선택하는 경우는 현재 공개 안함.

type 인자에 열/셀을 공개할지 결정해야합니다. 

!-->


### Syntax

```
    onBeforeSelectAll : function(paramObject) {

    }
or
    sheet.bind("onBeforeSelectAll" , function(paramObject) {});
```

### Parameters


| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|시트 객체|
|select|`number`|선택 여부
`0`:선택 해제
`1`:선택
`-1`:선택 반전|
|type|`number`|선택 대상
`1`:셀
`2`:행
`3`:열|

### Return
***boolean***

### Example
```javascript

options.Events = {
    onBeforeSelectAll:function(evtParam){
        // 선택을 취소할지 여부를 여기서 결정할 수 있습니다.
        if(evtParam.type == 1 || evtParam.type == 3) return true;
    }
}
```

### Read More

- [onBeforeSelect event](./on-before-select)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
