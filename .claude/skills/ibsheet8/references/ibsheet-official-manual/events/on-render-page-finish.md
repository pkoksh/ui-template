---
KEY: onRenderPageFinish
KIND: event
PATH: events/on-render-page-finish
ALIAS: 시트의, 페이지가, 렌더링된, 호출되는, 이벤트입니다
ALIAS_EN: on, render, page, finish
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-render-page-finish
---
# !onRenderPageFinish ***(event)***
> 시트의 페이지가 렌더링된 후 호출되는 이벤트입니다.

> 시트의 첫 페이지를 로딩 시, 페이지에 대한 새로 고침 실행 시, 페이지 간 이동 시 해당 이벤트가 발생합니다.

### Syntax

```
    onRenderPageFinish : function(paramObject){

    }
or
    sheet.bind("onRenderPageFinish" , function(paramObject) {});
```

### Parameters
| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|렌더링 된 페이지를 가지는 시트 객체|
|row|`object`|렌더링 된 [페이지 객체](/docs/appx/page-object)(페이지에 대해 정보를 담고 있는 객체)|


### Return
***none***


### Example
```javascript
options.Events = {
    onRenderPageFinish:function(evtParam){
        // 마지막 페이지인 경우 메시지를 띄웁니다.
        if (evtParam.row.nextSibling == null) {
            sheet.showMessageTime({message: "마지막 페이지입니다.", time:1000});
        }
    }
}
```

### Read More

- [onRenderPageStart event](./on-render-page-start)
- [render method](/docs/funcs/core/render)
- [goToNextPage method](/docs/funcs/core/go-to-next-page)
- [refreshPage method](/docs/funcs/core/refresh-page)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
