---
KEY: onAfterSave
KIND: event
PATH: events/on-after-save
ALIAS: 시트에서, 변경된, 내용을, 서버에, 전송한
ALIAS_EN: on, after, save
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-after-save
---
# onAfterSave ***(event)***
> 시트에서 변경된 내용을 서버에 전송한 후 서버에서 응답이 왔을 때 발생하는 이벤트입니다.

> 해당 이벤트에서 `1(true)`를 리턴하면 저장 실패시(server code 404나 500에러에 의한) 시트에 보여지는 오류 메세지 출력을 막을 수 있습니다. 


### Syntax
```
    onAfterSave : function(paramObject) {

    }
or
    sheet.bind("onAfterSave" , function(paramObject) {});
```

### Parameters
| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|서버에 변경된 내용을 전송한 시트 객체|
|result |`number`|**서버 응답 메시지**
`0`:성공
`-1`:빈 URL (`예: sheet.doSave("")`)
`-3`:요청 Url이 잘못된 경우나 네트워크 오류 등으로 결과를 받지 못한 경우
`-5`:응답 결과가 빈값인 경우
`-6`:연결 시간 초과((cfg)Timeout 초과)
`-7`:잘못된 데이터 형식(대부분 데이터 이상)
`이외`:사용자 정의 코드|
|message|`string`|서버에서 전달 받은 메시지|
|response|`object`|서버 응답 객체(XMLHttpRequest 객체)|

### Return
***boolean***

### Example
```javascript
options.Events = {
    onAfterSave: function(evtParam) {
        // 서버 응답이 '성공'인 경우
        if (evtParam.result == 0) {
            evtParam.sheet.showMessageTime({message: "성공적으로 저장되었습니다.", time: 1000});
        }
    }
}
```

### Read More

- [doSave method](/docs/funcs/core/do-save)
- [onSave event](./on-save)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|core|8.0.0.17|`return` 동작 추가|
