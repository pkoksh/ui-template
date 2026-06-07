---
KEY: onRenderStart
KIND: event
PATH: events/on-render-start
ALIAS: 시트를, 렌더링하기, 전에, 호출되는, 이벤트입니다
ALIAS_EN: on, render, start
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-render-start
---
# onRenderStart ***(event)*** 

> 시트를 렌더링하기 전에 호출되는 이벤트입니다.

> `1(true)` 값을 리턴 시 시트의 렌더링이 취소가 됩니다.

### Syntax

```
    onRenderStart : function(paramObject) {

    }
or
    sheet.bind("onRenderStart" , function(paramObject) {});
```

### Parameters


| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|렌더링을 진행할 시트 객체|

### Return
***boolean***

### Example
```javascript
user_authority = 3;// 현재 권한을 3이라고 지정
options.Events = {
    onRenderStart:function(evtParam){
        // 권한이 3 이하인 경우 시트의 렌더링을 진행하지 않습니다.
        if (user_authority < 3) return true;

        /*
         ***** 주의 사항 *****
          시트 전체 렌더링 시 항상 onRenderStart 이벤트가 호출되므로, 시트 전체에 대해 렌더링을 진행하는 메소드는 여기서 작성하면 안됩니다.
         */
    }
}
```

### Read More

- [onRenderFinish event](./on-render-finish)
- [render method](/docs/funcs/core/render)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
