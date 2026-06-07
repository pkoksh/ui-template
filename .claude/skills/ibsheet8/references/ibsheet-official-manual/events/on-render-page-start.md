---
KEY: onRenderPageStart
KIND: event
PATH: events/on-render-page-start
ALIAS: 시트의, 페이지를, 렌더링하기, 호출되는, 이벤트입니다
ALIAS_EN: on, render, page, start
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-render-page-start
---
# !onRenderPageStart ***(event)***
> 시트의 페이지를 렌더링하기 전 호출되는 이벤트입니다.

> 시트의 첫 페이지를 로딩하거나 페이지 새로 고침 실행, 페이지 간 이동 시 발생합니다.

### Syntax

```
    onRenderPageStart : function(paramObject) {

    }
or
    sheet.bind("onRenderPageStart" , function(paramObject) {});
```

### Parameters


| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|렌더링 할 페이지를 가지는 시트 객체|
|row|`object`|렌더링 할 [페이지 객체](/docs/appx/page-object)(페이지에 대해 정보를 담고 있는 객체)|

### Return
***none***


### Example
```javascript
options.Events = {
    onRenderPageStart:function(evtParam){
        // 마지막 페이지인 경우 메시지를 띄웁니다.
        if (evtParam.row.nextSibling == null) {
            sheet.showMessageTime({message: "마지막 페이지입니다.", time:1000});
        }
    }
}
```

### Read More

- [onRenderPageFinish event](./on-render-page-finish)
- [rerender method](/docs/funcs/core/rerender)
- [goToNextPage method](/docs/funcs/core/go-to-next-page)
- [refreshPage method](/docs/funcs/core/refresh-page)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
