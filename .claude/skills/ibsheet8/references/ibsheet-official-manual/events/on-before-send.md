---
KEY: onBeforeSend
KIND: event
PATH: events/on-before-send
ALIAS: 통신으로, 시트의, 데이터, 변경, 사항을
ALIAS_EN: on, before, send, data, change, modify
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-before-send
---
# !onBeforeSend ***(event)***
> Ajax 통신으로 시트의 데이터 변경 사항을 서버에 보내기 전에 호출되는 이벤트입니다.

> 사용자가 서버에 보낼 데이터의 변경 사항을 수정하거나 다른 데이터 값을 보내길 원할 시, 서버에 보내고자하는 데이터를 문자열 형태로 리턴합니다.(Appendix의 'data 규격'에 있는 '서버 요청 시 데이터 규격' 설명 참고)

> true를 리턴하면 Ajax통신을 실행하지 않고 종료합니다.

### Syntax

```
    onBeforeSend : function(paramObject) {

    }
or
    sheet.bind("onBeforeSend" , function(paramObject) {});
```

### Parameters


| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|변경된 데이터를 가지는 시트 객체|
|source|`object`|시트에 설정된 속성들이 담긴 객체|
|data|`string`|서버에 전송할 데이터 변경 사항|
|func|`function`|Ajax통신 이후 실행될 콜백 메소드|

### Return
***mixed( `object` \| `boolean` \| `string` )***

### Example
```javascript
options.Events = {
    onBeforeSend:function(evtParam){
        // 서버에 보낼 데이터가 금지어를 포함하는 경우 Ajax 통신을 실행하지 않습니다.
        if (evtParam.data.indexOf("금지어1") > -1) {
            // Ajax를 실행하지 않지만 실패했다는 Ajax의 콜백을 여기서 실행할 수 있습니다.
            evtParam.func(-4)
            return true;
        } else if (evtParam.data.indexOf("금지어2") > -1) {
            return evtParam.data.replace("금지어2","normal");
        }

    }
}
```

### Read More

- [doSave method](/docs/funcs/core/do-save)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
