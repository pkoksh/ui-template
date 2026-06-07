---
KEY: onShowMessage
KIND: event
PATH: events/on-show-message
ALIAS: 시트의, 메시지가, 발생할, 실행되는, 이벤트입니다
ALIAS_EN: on, show, message
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-show-message
---
# onShowMessage ***(event)***
> 시트의 메시지가 발생할 때 실행되는 이벤트입니다.

> showMessage(), showMessageTime() 메서드를 통한 메세지나 doSave()와 같은 함수 호출시 시트 내부에서 발생하는 메세지가 표시되기 전에 이벤트가 발생합니다.
> 이 이벤트를 통해서 시트가 제공하는 메세지`Dialog` 대신 프로젝트 공통으로 사용하는 디자인 된 메시지를 보여줄 수 있습니다. 

> 리턴 값을 1이나 true로 할 경우 원래 표시해야 할 메세지를 표시하지 않습니다.(기본값 없음)

### Syntax

```
    onShowMessage: function(paramObject) {

    }
or
    sheet.bind("onShowMessage" , function(paramObject) {});
```

### Parameters


| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|메시지가 발생한 시트 객체|
|messageTag|`object`|메시지를 보여주는 `Dom` 객체|
|message|`string`|메시지로 보여질 문자열(`html tag`도 포함)|
|isConfirm|`boolean`|[showMessageTime (method)](/docs/funcs/core/show-message-time)으로 호출 되었는지 여부|
|time|`number`|[showMessageTime (method)](/docs/funcs/core/show-message-time)으로 호출될때 `time`인자 값|
|buttons|`array[string]`|[showMessageTime (method)](/docs/funcs/core/show-message-time)으로 호출될때 설정된 `buttons`인자 값|
|callback|`function`|[showMessageTime (method)](/docs/funcs/core/show-message-time)으로 호출될때 설정된 `func`을 호출하는 콜백 메소드
buttons를 통해 설정한 버튼의 개수에 따라 좌측부터 순서대로 1,2,3...이 함수의 arguments로 리턴
(가령 버튼이 두 종류이면 클릭한 버튼에 따라 1 또는 2가 리턴 됩니다.)|
|isAlert|`boolean`|alert 으로 호출 되었는지 여부|

### Return
***boolean*** 

### Example
```javascript
// [SweetAlert2](https://sweetalert2.github.io/)를 활용한 예제
options.Events = {
    onShowMessage: function (evtParams) {
        if (window.Swal) {
            // showMessage와 showMessageTime에 따라 메시지 처리를 다르게 해준다.
            if (evtParams.isConfirm) {
                Swal.fire({
                    title: "<div>" + evtParams.message + "</div>", // 메시로 보여질 문자열(HTML Tag 포함)
                    icon: 'warning',
                    showConfirmButton: (evtParams.buttons.indexOf("Ok") > -1), // 확인 버튼이 있으면 확인 버튼을 만들어준다.
                    showCancelButton: (evtParams.buttons.indexOf("Cancel") > -1), // 취소 버튼이 있으면 취소 버튼을 만들어준다.
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: '확인',
                    cancelButtonText: '취소',
                    timer: evtParams.time // showMessageTime의 time인자로 단위는 밀리초(ms)로 설정한다.
                }).then((result) => {
                    if (result.value) {
                        // confirmButton이 눌렸을때 시트에서도 후속 기능이 실행되도록 callback을 통해 Ok 버튼이 눌린 정보를 전달한다.
                        if (evtParams.callback) evtParams.callback(1);
                    } else {
                        // cancelButton이 눌렸을때 시트에서도 후속 기능이 실행되지 않도록 callback을 통해 Cancel 버튼이 눌린 정보를 전달한다.
                        if (evtParams.callback) evtParams.callback(2);
                    }
                });
            } else {
                Swal.fire({
                    title: "<div>" + evtParams.message + "</div>", // 메시로 보여질 문자열(HTML Tag 포함)
                    icon: 'success',
                    showConfirmButton: false // IBSheet는 단순 메시지에서 확인버튼을 노출 시키지 않기때문에 비슷하게 구현하려면 Swal의 버튼도 숨겨야한다.
                }).then((result) => {
                    // callback이 있는 경우 반드시 처리
                    if (evtParams.callback) evtParams.callback(1);

                    // Swal이 클릭이나 esc 키 등 Swal 액션으로 닫혔을때 sheet.hideMessage()도 같이 실행 시켜준다.
                    // sheet.hideMessage()호출로 Swal가 닫히면 result.value, result.dismiss 등 값이 없음.
                    // 무조건 sheet.hideMessage()를 호출하도록 코드가 구현되어 있으면 연속으로 메시지가 호출되는 경우 메시지가 제대로 보여지지 않을 수 있음.

                    if (result.value || result.dismiss) {
                        evtParams.sheet.hideMessage();
                    }
                });
            }
            return true; // 시트 메시지를 대체함.
        }
    },
    onHideMessage: function (evtParams) {
        if (window.Swal) {
            // sheet.hideMessage()가 호출될때 Swal의 메시지도 close() 시켜준다.
            Swal.close();
        }
    }
}
```

```javascript
// javascript native의 alert 및 confirm을 활용한 예제
options.Events = {
    onShowMessage: function (evtParams) {
        // alert이나 confirm은 버튼이 눌릴때까지 기다리므로 반드시 showMessageTime로 호출되었을때만 처리해야하며,
        // time이 있는경우 자동으로 닫히기 때문에 alert이나 confirm으로 사용했을때 구현된 로직이 정상적으로 동작하지 않을 수 있음.
        if (evtParams.isConfirm && !evtParams.time) {
            var parseMsg = evtParams.message; // 메시로 보여질 문자열(HTML Tag 포함)
            if (typeof parseMsg == "string") {
                // 메시지 파일에 정의된 문자열에 HTML Tag가 있을 경우 제거해준다.
                parseMsg = parseMsg.replace(/\<br(\/)?\>/g, "\n").replace(/\<\/(div|span|p)+\>/g, "\n");
                parseMsg = IBSheet.removeHTMLTag(parseMsg);
            }
            // 취소 버튼의 유무에 따라 alert을 실행할지 confirm을 실행할지 구분한다.
            if (evtParams.buttons.indexOf("Cancel") > -1) {
                if (!confirm(parseMsg)) {
                    // 취소 버튼을 눌렸을때 시트에서도 후속 기능이 실행되지 않도록 callback을 통해 Cancel 버튼이 눌린 정보를 전달한다.
                    if (evtParams.callback) evtParams.callback(2);
                } else {
                    // 확인 버튼을 눌렸을때 시트에서도 후속 기능이 실행되도록 callback을 통해 Ok 버튼이 눌린 정보를 전달한다.
                    if (evtParams.callback) evtParams.callback(1);
                }
            } else {
                alert(parseMsg);
                // 확인 버튼을 눌렸을때 시트에서도 후속 기능이 실행되도록 callback을 통해 Ok 버튼이 눌린 정보를 전달한다.
                if (evtParams.callback) evtParams.callback(1);
            }
            // 시트 메시지를 대체함.
            return true;
        }
    }
}
```

### Read More
- [showMessage method](/docs/funcs/core/show-message)
- [showMessageTime method](/docs/funcs/core/show-message-time)
- [hideMessage method](/docs/funcs/core/hide-message)
- [SuppressMessage cfg](/docs/props/cfg/suppress-message)
- [onHideMessage event](./on-hide-message)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|core|8.2.0.15|`isAlert` 인자 추가|
<!--!|`[비공개]` core-lwc|8.1.1.98|`isAlert` 인자 추가|
!-->
