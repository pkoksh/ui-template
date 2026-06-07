---
KEY: onShowMenu
KIND: event
PATH: events/on-show-menu
ALIAS: 셀에서, 마우스, 오른쪽, 클릭, 시트에
ALIAS_EN: on, show, menu, right, click
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-show-menu
---
# onShowMenu ***(event)***
> 셀에서 마우스 오른쪽 클릭 시 시트에 설정된 메뉴가 화면에 보여질 때 호출되는 이벤트 입니다.

> **[showMenu](/docs/funcs/core/show-menu) 메소드에 의해 호출되지 않습니다.**

> `1(true)`를 리턴 시 설정된 메뉴를 화면에 보여주지 않습니다.

### Syntax

```
    onShowMenu : function(paramObject) {

    }
or
    sheet.bind("onShowMenu" , function(paramObject) {});
```

### Parameters


| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|메뉴가 보여질 시트 객체|
|row|`object`|메뉴가 보여질 셀의 [데이터 로우 객체](/docs/appx/row-object)|
|col|`string`|메뉴가 보여질 셀의 열이름|
|menu|`object`|화면에 보여질 메뉴에 대한 설정을 담고 있는 객체|

### Return
***boolean***

### Example
```javascript
options.Events = {
    onShowMenu:function(evtParam){
        // 열이름이 preTaskId인 경우 메뉴를 화면에 보여주지 않습니다.
        if (evtParam.col === "preTaskId") return true;
    }
}
```

### Read More

- [onReadMenu event](./on-read-menu)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
