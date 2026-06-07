---
KEY: onButtonClick
KIND: event
PATH: events/on-button-click
ALIAS: 속성, 값이, 사이드, 버튼을, 클릭하는
ALIAS_EN: on, button, click, property, attribute
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-button-click
---
# onButtonClick ***(event)***
> [Button](/docs/props/col/button)속성 값이 `Button, Html`일 때 셀 내 사이드 버튼을 클릭하는 경우 호출되는 이벤트입니다.

> [Button](/docs/props/col/button)이 설정된 셀이 편집 불가능한 경우 버튼 클릭 뿐만 아니라 셀 내부를 클릭 시 이 이벤트가 호출됩니다.

> 해당 이벤트는 사이드에 위치한 버튼(![타입이 "Button"이 아닌 경우](/assets/imgs/button4.png "타입이 Button이 아닌 경우")
<!-- IMAGE: 버튼 이미지 - 타입이 "Button"이 아닌 경우 -->)에 한정되며, `Type`을 버튼으로 하는 형태(![타입이 "Button"인경우](/assets/imgs/typeButton.png "타입이 Button인 경우")
<!-- IMAGE: 버튼 이미지 - 타입이 "Button"인경우 -->)에서는 [onClick](./on-click) 을 통해 버튼 클릭에 대한 로직을 구성하셔야 합니다.

> `1(true)`를 리턴 시, 버튼에 대한 기본 동작이 무시됩니다.
  
### Syntax

```
    onButtonClick : function(paramObject) {

    }
or
    sheet.bind("onButtonClick" , function(paramObject) {});
```

### Parameters


| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|시트 객체|
|row|`object`|셀이 위치한 [데이터 로우 객체](/docs/appx/row-object)|
|col|`string`|셀의 열이름|
|x|`number`|버튼 내에서 마우스 클릭 x좌표|
|y|`number`|버튼 내에서 마우스 클릭 y좌표|

<!--!
### Return
`[비공개]` ***number***
!-->

### Example
```javascript
options.Cols = [
    {
        Header : "아이디",
        Name: "sId",
        Type: "Text",
        Button: "Button",
        ButtonText: "중복확인",
        WidthPad: 100       //버튼 너비 설정
    } ...
]

options.Events = {
    onButtonClick:function(evtParam){
        if (evtParam.col == "sId") {
            // sId 열에서 중복되는 값이 있는 경우 alert창을 띄웁니다.
            var value = evtParam.row[evtParam.col];
            var r = evtParam.sheet.getFirstRow();
            while (r) {
                if (r != evtParam.row && r[evtParam.col] == value) {
                    alert("같은 아이디가 있습니다. 다른 아이디를 입력하세요");
                    break;
                }
                r = r.nextSibling;
            }
        }
    }
}
```

### Try it
- [Demo of onButtonClick](https://jsfiddle.net/gh/get/library/pure/ibsheet/ibsheet8-manual-sample/tree/master/samples/properties/Col/Button/)

### Read More

- [Button col](/docs/props/col/button)
- [ButtonText col](/docs/props/col/button-text)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
