---
KEY: onRenderFinish
KIND: event
PATH: events/on-render-finish
ALIAS: 시트가, 렌더링된, 발생되는, 이벤트입니다
ALIAS_EN: on, render, finish
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-render-finish
---
# onRenderFinish ***(event)*** 

> 시트가 렌더링된 후 발생되는 이벤트입니다.

> 아래와 같은 부분에서 이벤트 발생합니다.

1. 시트 초기화
1. 데이터 조회
1. 화면의 크기 변화시 (예: Ctrl + 휠)
1. 소계행 사용 시
1. 그룹핑 시
1. `removeAll`
1. `rerender`
1. `revertData`
1. `reload`
1. `makeSubTotal`
1. `removeSubTotal`
1. `setFixedCols, setFixedLeft, setFixedRight, setFixedTop`
1. `setFormulaRow`
1. `setInfoRow`
1. `setSize`
1. `setTheme`
1. `setFormulaRowPosition`
1. `setLocale`
1. `updateClientPaging`
1. `setCurrentInfo`
1. `setAttribute`로 `Width`나 `Visible`을 변경하는 경우

### Syntax

```
    onRenderFinish : function(paramObject){

    }
or
    sheet.bind("onRenderFinish" , function(paramObject) {});
```

### Parameters
| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|렌더링된 시트 객체|

### Return
***none***


### Example
```javascript
options.Events = {
    onRenderFinish:function(evtParam){
        // 시트 렌더링이 진행된 후 AR5 행 "sPerson" 열에 해당하는 셀에 12345 값을 입력
        var r5 = sheet.getRowById("AR5");
        sheet.setValue({row:r5 , col:"sPerson" , val:12345 , render:1});

        /*
         ***** 주의 사항 *****
          시트 전체 렌더링 시 항상 onRenderFinish 이벤트가 호출되므로, 시트 전체에 대해 렌더링을 진행하는 메소드는 여기서 작성하면 안됩니다.
         */
    }
}
```

### Read More

- [onRenderStart event](./on-render-start)
- [render method](/docs/funcs/core/render)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
