---
KEY: onSuggest
KIND: event
PATH: events/on-suggest
ALIAS: 편집, 도중, 호출되는, 이벤트로, 사용자에게
ALIAS_EN: on, suggest, edit, editable
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-suggest
---
# onSuggest ***(event)***
> 셀 편집 도중 호출되는 이벤트로, 사용자에게 셀 값을 제안하는 기능인 [Suggest](/docs/props/col/suggest)의 값을 확인할 수 있습니다.

> 사용자는 Suggest의 형식을 지닌 새로운 값을 리턴하여 Suggest에 설정된 값이 아닌 다른 값을 사용자에게 셀 값이 변경될 때마다 추천할 수 있습니다.

> 편집 시 셀 값이 변경될 때마다 호출됩니다.

### Syntax

```
    onSuggest : function(paramObject) {

    }
or
    sheet.bind("onSuggest" , function(paramObject) {});
```

### Parameters


| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|시트 객체|
|row|`object`|셀의 [데이터 로우 객체](/docs/appx/row-object)|
|col|`string`|셀의 열이름|
|val|`string`|셀의 데이터 값|
|suggest|`string`|기존에 설정된 Suggest의 값|

### Return
***mixed***

### Example
```javascript
// assessment 열에 설정된 Suggest 값이 |불만족|보통|만족|매우만족
options.Cols = [
    {
        Header:"평가",
        Name:"assessment",
        Type:"Text",
        Suggest:"|불만족|보통|만족|매우만족"
    } ...
]

options.Events = {
    onSuggest:function(evtParam){
        // assessment 열의 셀에 입력한 값이 "바로"를 포함하는 경우 동적으로 Suggest의 값이 |바로가기1|바로가기2|바로가기3|바로가기4|바로가기5로 바뀝니다. 그 외의 경우 기존 suggest 기능이 그대로 적용됩니다.
        if (evtParam.col == "assessment" && evtParam.val.indexOf("바로") > -1 ) {
            return "|바로가기1|바로가기2|바로가기3|바로가기4|바로가기5";
        }
        else {
            return evtParam.suggest;
        }
    }
}
```

### Read More

- [onReadSuggest event](./on-read-suggest)
- [Suggest col](/docs/props/col/suggest)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
