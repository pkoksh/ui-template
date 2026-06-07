---
KEY: onReadMenu
KIND: event
PATH: events/on-read-menu
ALIAS: 마우스, 오른쪽, 클릭, 시트에, 설정된
ALIAS_EN: on, read, menu, right, click
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-read-menu
---
# onReadMenu ***(event)***
> 마우스 오른쪽 클릭 시 시트에 설정된 메뉴가 화면에 보여지기전 호출되는 이벤트 입니다.

> **[showMenu](/docs/funcs/core/show-menu) 메소드에 의해 호출되지 않습니다.**

> 새로운 메뉴를 문자열 또는 객체로 리턴하여 사용할 수 있습니다(기존에 메뉴가 설정되어 있는 경우 이를 대체합니다).

### Syntax

```
    onReadMenu : function(paramObject) {

    }
or
    sheet.bind("onReadMenu" , function(paramObject) {});
```

### Parameters
| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|메뉴가 보여질 시트 객체|
|row|`object`|메뉴가 보여질 셀의 [데이터 로우 객체](/docs/appx/row-object)|
|col|`string`|메뉴가 보여질 셀의 열이름|
|menu|`object`|화면에 보여질 메뉴에 대한 설정을 담고 있는 객체|

### Return
***mixed( `string` \| `object` )***

### Example
```javascript
options.Cfg = {
    // 기존에 설정된 메뉴
    Menu: {
        Items: [
            { Name: "before", Text: "이전" },
            { Name: "after", Text: "이후" },
            { Name: "now", Text: "지금" }
        ]
    }
}

options.Events = {
    onReadMenu:function(evtParam){
        // 열이름이 sTitle인 경우 기존의 메뉴가 아닌 새로운 메뉴를 사용합니다.
        if(evtParam.col == "sTitle") {
            var M = { Items: [
                { Name: "title", Text: "바로가기" },
                { Name: "title1", Text: "바로가기1" },
                { Name: "title2", Text: "바로가기2" },
                { Name: "title3", Text: "바로가기3" },
                { Name: "title4", Text: "바로가기4" }
                ] };

            return M;
        }
    }
}
```

### Read More
- [onShowMenu event](./on-show-menu)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
