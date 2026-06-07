---
KEY: onHideMessage
KIND: event
PATH: events/on-hide-message
ALIAS: 시트의, 메시지가, 없어질때, 실행되는, 이벤트입니다
ALIAS_EN: on, hide, message
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-hide-message
---
# onHideMessage ***(event)***
> 시트의 메시지가 없어질때 실행되는 이벤트입니다.

> 이벤트를 통해서 외부 라이브러리의 메시지를 닫을 수 있습니다.

### Syntax

```
    onHideMessage: function(paramObject) {

    }
or
    sheet.bind("onHideMessage" , function(paramObject) {});
```

### Parameters


| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|메시지가 발생한 시트 객체|

### Return
***none***

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
                        if (evtParams.callback) evtParams.callback(evtParams.buttons.indexOf("Ok") + 1);
                    } else {
                        // cancelButton이 눌렸을때 시트에서도 후속 기능이 실행되지 않도록 callback을 통해 Cancel 버튼이 눌린 정보를 전달한다.
                        if (evtParams.callback) evtParams.callback(evtParams.buttons.indexOf("Cancel") + 1);
                    }
                });
            } else {
                Swal.fire({
                    title: "<div>" + evtParams.message + "</div>", // 메시로 보여질 문자열(HTML Tag 포함)
                    icon: 'success',
                    showConfirmButton: false // IBSheet는 단순 메시지에서 확인버튼을 노출 시키지 않기때문에 비슷하게 구현하려면 Swal의 버튼도 숨겨야한다.
                }).then((result) => {
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

### Read More

- [showMessageTime method](/docs/funcs/core/show-message-time)
- [hideMessage method](/docs/funcs/core/hide-message)
- [SuppressMessage cfg](/docs/props/cfg/suppress-message)
- [onShowMessage event](./on-show-message)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
