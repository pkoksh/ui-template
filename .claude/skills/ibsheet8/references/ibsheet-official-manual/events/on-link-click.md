---
KEY: onLinkClick
KIND: event
PATH: events/on-link-click
ALIAS: 또는, 설정된, 열에, 위치한, 셀을
ALIAS_EN: on, link, click
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-link-click
---
# onLinkClick ***(event)***
> [Type](/docs/props/col/type)이 `Link` 또는 `Img`로 설정된 열에 위치한 셀을 클릭한 경우 호출되는 이벤트입니다.

> [Link](/docs/props/col/link) 속성에 의해 정의된 링크는 클릭해도 해당 이벤트가 호출되지 않습니다.

> `1(true)`를 리턴 시 링크에 의한 동작을 실행하지 않습니다.

### Syntax

```
    onLinkClick : function(paramObject) {

    }
or
    sheet.bind("onLinkClick" , function(paramObject) {});
```

### Parameters
| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|시트 객체|
|row|`object`|셀이 위치한 [데이터 로우 객체](/docs/appx/row-object)|
|col|`string`|셀의 열이름|
|url|`string`|브라우저에서 열릴 `URL` 값|
|target|`string`|`URL`이 열릴 위치(html `<a>` 태그의 `target`과 동일)|

### Return
***boolean***

### Example
```javascript
options.Events = {
    onLinkClick:function(evtParam){
        // url이 현재 클릭된 곳이 있는 프레임과 같은 곳에서 열리지 않도록 합니다.
        if (evtParam.target == "_self") {
           return true;
        }
        return false;
    }
}
```

### Read More

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
