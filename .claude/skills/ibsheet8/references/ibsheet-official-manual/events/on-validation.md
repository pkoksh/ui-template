---
KEY: onValidation
KIND: event
PATH: events/on-validation
ALIAS: 저장, 호출시, 사용자가, 저장할, 값들에
ALIAS_EN: on, validation, save, persist, store
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-validation
---
# onValidation ***(event)***
> [doSave](/docs/funcs/core/do-save), [getSaveJson](/docs/funcs/core/get-save-json), [getSaveString](/docs/funcs/core/get-save-string) 등 저장 api 호출시, 사용자가 저장할 값들에 관해 유효성 검사를 진행할 수 있도록 셀 별로 순회하며 발생하는 이벤트 입니다. 

> 기본적인 필수입력 항목에 대한 확인이나 전체 입력 여부에 대한 확인은 저장 전에 시트가 내부적으로 확인하지만, 업무 로직에 따라 발생할 수 있는 각종 유효성 검사를 이 이벤트에서 처리합니다. 

> 유효성 검사 기준에 맞지 않다면 true를 리턴하여 진행되고 있는 저장 처리를 중단하실 수 있습니다. 


### Syntax

```
    onValidation : function(evtParam) {

    }
or
    sheet.bind("onValidation " , function(evtParam) {});
```

### Parameters
| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|현재 유효성 검사가 진행되고 있는 시트 객체|
|row|`object`|현재 유효성 검사가 진행되고 있는 셀의 [데이터 로우 객체](/docs/appx/row-object)|
|col|`string`|현재 유효성 검사가 진행되고 있는 셀의 열 이름|

### Return
***boolean***


### Example
```javascript
options.Events = {
    onValidation: function (evtParam) {
      if (evtParam.col != "TextData") return;
      var prevCol = evtParam.sheet.getPrevCol(evtParam.col);

      // TextData 컬럼의 이전 컬럼 값이 100보다 큰 경우 메세지창을 띄우고 저장을 중단합니다.
      if (evtParam.sheet.getValue(evtParam.row, prevCol) >= 100) {
        var index = evtParam.sheet.getRowIndex(evtParam.row);
			
        evtParam.sheet.showMessageTime({
          message: index + "행 정수(Int)컬럼 셀 값이 100보다 큽니다.",
          time: 10000,
          buttons: ["OK", "취소"],
        })

        return true;
      }
    },
}
```

### Read More
- [doSave method](/docs/funcs/core/do-save)
- [getSaveJson method](/docs/funcs/core/get-save-json)
- [getSaveString method](/docs/funcs/core/get-save-string)
### Since

|product|version|desc|
|---|---|---|
|core|8.2.0.19|기능 추가|
