---
KEY: applySaveResult
KIND: method
PATH: funcs/core/apply-save-result
ALIAS: sheet.applySaveResult, applySaveResult(), 시트의, 수정된, 내용을, 서버로, 전송했다가
ALIAS_EN: apply, save, result
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/apply-save-result
---
# applySaveResult ***(method)***

> 시트의 수정된 내용을 서버로 전송했다가 돌아온 결과 `json`으로 부터 이후에 수행되어야할 작업을 처리합니다.
>
> 동작하는 내용을 아래와 같습니다.
> 1. 첫번째 `result` 인자의 값이 양수(0 이상)이면 [appeptChangedData()](./accept-changed-data)를 통해 수정내용을 반영합니다.

>    음수가 리턴되는 경우, 값에 따라 경고 메세지를 표시합니다.
> 2. `result` 값과 무관하게 [onAfterSave](/docs/events/on-after-save)이벤트가 발생시킵니다.


### Syntax
```javascript
boolean applySaveResult( result, message, response, files );
```

### Parameters
|Name|Type|Required|Description|
|----------|-----|---|----|
|result|`number`|필수|서버 응답 결과([onAfterSave](/docs/events/on-after-save) 이벤트의 `result` 파라미터 값 참고.)|
|message|`string`|선택|[onAfterSave](/docs/events/on-after-save) 이벤트로 전달할 메세지 문자열|
|response|`object`|선택|ajax 통신의 response 객체([onAfterSave](/docs/events/on-after-save) 이벤트로 전달)|
|files|`array`|선택|`file` 타입 저장 시 ajax 통신 후 저장된 파일 데이터를 전달 ([getSaveJson](./get-save-json)의 `formData`인자와 함께 사용)|


### Return Value
***boolean*** : 함수 정상 동작 여부. (인자값이 잘못되어 수행되지 못한 경우에는 `false` 리턴)

### Example
```javascript
// 포커스행 위로 신규행을 3개 추가합니다.
$.ajax({
    url:"saveDO.do",
    data: param,
    dataType:"json",
    success:function(data){
        var result = data.IO.Result;
        var message  = data.IO.Message;
        // 결과를 시트에 반영한다.
        sheet.applySaveResult(result, message);
    }
})
```

### Read More
- [appeptChangedData method](./accept-changed-data)
- [onAfterSave event](/docs/events/on-after-save)
- [getSaveJson method](./get-save-json)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|core|8.0.0.5|files 기능 추가|