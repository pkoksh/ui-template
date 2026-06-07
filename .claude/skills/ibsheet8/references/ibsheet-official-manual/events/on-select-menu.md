---
KEY: onSelectMenu
KIND: event
PATH: events/on-select-menu
ALIAS: 마우스, 오른쪽, 클릭, 시트에, 설정된
ALIAS_EN: on, select, menu, right, click
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-select-menu
---
# onSelectMenu ***(event)***
> 마우스 오른쪽 클릭 시 시트에 설정된 메뉴([Menu](/docs/props/col/menu))의 아이템을 클릭했을 때 호출되는 이벤트입니다.

> **[showMenu](/docs/funcs/core/show-menu) 메소드로 생성된 메뉴를 클릭 시 호출되지 않습니다.**


### Syntax

```
    onSelectMenu : function(paramObject) {

    }
or
    sheet.bind("onSelectMenu" , function(paramObject) {});
```

### Parameters


| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|메뉴가 보여지고 있는 시트 객체|
|row|`object`|메뉴가 보여지고 있는 셀의 [데이터 로우 객체](/docs/appx/row-object)|
|col|`string`|메뉴가 보여지고 있는 셀의 열이름|
|result|`string`|메뉴에서 선택한 아이템(아이템의 Value, Value가 선언되어있지 않으면 Name)|

### Return
***none***


### Example
```javascript
options.Cfg = {
    // 기존에 설정된 메뉴
    Menu: {
        Items: [
            { Name: "title", Text: "바로가기", Value:"0" },
            { Name: "title1", Text: "바로가기1", Value:"1" },
            { Name: "title2", Text: "바로가기2", Value:"2" },
            { Name: "title3", Text: "바로가기3", Value:"3" },
            { Name: "title4", Text: "바로가기4", Value:"4" }
        ] ;
    }
}

options.Events = {
    onSelectMenu:function(evtParam){
        // 메뉴에서 선택된 값으로 셀 값을 변경하기
        evtParam.sheet.setValue({row: evtParam.row, col: evtParam.col, val: evtParam.result, render: 1});
        evtParam.sheet.refreshRow(evtParam.row);
    }
}
```

### Read More


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
