---
KEY: onAfterProgress
KIND: event
PATH: events/on-after-progress
ALIAS: 변경하면, 발생하는, 이벤트입니다
ALIAS_EN: on, after, progress
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-after-progress
---
# onAfterChangeProgress ***(event)***
> `progressBar`를 변경하면 발생하는 이벤트입니다.

> 이미 [showProgress (method)](/docs/funcs/core/show-progress)가 호출되고 메시지가 나타나있는 상태에서 [showProgress (method)](/docs/funcs/core/show-progress)를 계속 호출해서 `progressBar`를 변경하면 발생하는 이벤트입니다.

### Syntax
```
    onAfterChangeProgress: function(paramObject) {

    }
or
    sheet.bind("onAfterChangeProgress" , function(paramObject) {});
```

### Parameters
| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|이벤트가 발생한 시트 객체|
|messageTag|`object`|메시지를 보여주는 `Dom` 객체|
|caption|`string`|다이얼로그의 제목으로 설정된 문자열|
|text|`string`|다이얼로그의 내용으로 설정된 문자열|
|cancel|`string`|다이얼로그에 표시될 버튼 내용으로 설정된 문자열(버튼을 클릭시 다이얼로그는 제거되고 시트 내부에 `CancelProgress` 속성이 1로 수정됨)|
|pos|`number`|진행 정도로 설정된 숫자|
|cnt|`number`|진행 마지노선으로 설정된 숫자 (`cnt:5, pos:1`이면 프로그레스 바는 1/5 진행으로 표시됨)|
|rate|`number`|진행 비율 (단위: `%`)|

### Return
***none***

### Example
```javascript
// [SweetAlert2](https://sweetalert2.github.io/)를 활용한 예제
options.Events = {
    onAfterChangeProgress: function (evtParams) {
        if (window.Swal) {
            // Swal의 메시지가 있는지 확인
            var elemMsgCont = Swal.getContainer();
            if (elemMsgCont) {
                // 취소 버튼 객체를 가져옴
                var elemCancelButton = Swal.getCancelButton();
                // showProgress로 생성된 메시지 Tag를 가져옴
                var elemProgessMain = elemMsgCont.getElementsByClassName("IBProgressMain")[0];
                var elemProgessCaption = elemProgessMain.children[0]; // caption 영역
                var elemProgessText = elemProgessMain.children[1]; // text 영역
                var elemProgessBar = elemProgessMain.children[2]; // progressbar 영역

                if (elemProgessBar && elemProgessBar.firstChild) {
                    // progressbar의 gauge를 변경
                    elemProgessBar.firstChild.style.width = evtParams.rate + "%";
                }

                if (elemProgessCaption) {
                    // caption을 변경
                    elemProgessCaption.innerHTML = evtParams.caption;
                }

                if (elemProgessText) {
                    // text를 변경
                    elemProgessText.innerHTML = evtParams.text + evtParams.rate + "% [" + evtParams.pos + "/" + evtParams.cnt + "]";
                }

                if (evtParams.cencel != null && elemCancelButton) {
                    // 취소버튼의 내용을 변경
                    elemCancelButton.innerText = evtParams.cancel;
                }
            }
        }
    }
}
```

### Read More

- [showProgress method](/docs/funcs/core/show-progress)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
