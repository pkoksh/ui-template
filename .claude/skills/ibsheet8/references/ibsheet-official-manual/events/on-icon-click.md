---
KEY: onIconClick
KIND: event
PATH: events/on-icon-click
ALIAS: 속성, 값이, 이미지, 설정되어, 있을때
ALIAS_EN: on, icon, click, property, attribute
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-icon-click
---
# onIconClick ***(event)***
> [Icon](/docs/props/col/icon)속성 값이 이미지 URL로 설정되어 있을때 셀 내 아이콘을 클릭하는 경우 호출되는 이벤트입니다.

> [Icon](/docs/props/col/icon)이 설정된 셀이 편집 불가능한 경우 버튼 클릭 뿐만 아니라 셀 내부를 클릭 시 이 이벤트가 호출됩니다.

> `1(true)`를 리턴 시 현재의 클릭으로 발생 가능한 이벤트들 중 `onIconClick` 후에 발생하는 이벤트들의 동작(ex [OnClickSide](/docs/props/event/on-click-side))을 막습니다.

### Syntax

```
    onIconClick : function(paramObject) {

    }
or
    sheet.bind("onIconClick" , function(paramObject) {});
```

### Parameters


| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|시트 객체|
|row|`object`|셀이 위치한 [데이터 로우 객체](/docs/appx/row-object)|
|col|`string`|셀의 열이름|
|x|`number`|아이콘 내에서 마우스 클릭 x좌표|
|y|`number`|아이콘 내에서 마우스 클릭 y좌표|

### Return
***boolean***

### Example
```javascript
options.Cols = [
    {
        Header : "아이디",
        Name: "sId",
        Type: "Text",
        Icon: "http://ibsheet.com/demo/images/11/s1.jpg"
    } ...
]

options.Events = {
    onIconClick:function(evtParam){
        // sId 열에 있는 아이콘 클릭시 http://ibsheet.com/ibsheet_main.html url이 새창에서 열리도록 합니다.
        if (evtParam.col == "sId") {
           window.open('http://ibsheet.com/ibsheet_main.html');
        }
    }
}
```

### Read More

- [Icon col](/docs/props/col/icon)
- [OnClickSide event](/docs/props/event/on-click-side)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
