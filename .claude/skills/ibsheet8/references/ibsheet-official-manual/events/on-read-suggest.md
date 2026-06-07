---
KEY: onReadSuggest
KIND: event
PATH: events/on-read-suggest
ALIAS: 셀이, 편집모드로, 들어갈, 호출되는, 이벤트로
ALIAS_EN: on, read, suggest
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-read-suggest
---
# onReadSuggest ***(event)***
> 셀이 편집모드로 들어갈 때 호출되는 이벤트로, 편집 시 사용자에게 셀 값을 제안하는 기능인 [Suggest](/docs/props/col/suggest)의 값을 확인할 수 있습니다.

> 사용자는 [Suggest](/docs/props/col/suggest)의 형식을 지닌 새로운 값을 리턴하여 [Suggest](/docs/props/col/suggest)에 설정된 값이 아닌 다른 값을 사용자에게 추천할 수 있습니다.

> 편집 모드로 들어갈 때 1회만 호출됩니다.

### Syntax

```
    onReadSuggest : function(paramObject) {

    }
or
    sheet.bind("onReadSuggest" , function(paramObject) {});
```

### Parameters


| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|시트 객체|
|row|`object`|셀의 [데이터 로우 객체](/docs/appx/row-object)|
|col|`string`|셀의 열이름|
|suggest|`string`|기존에 설정된 `Suggest`의 값|

### Return
***mixed***

### Example
```javascript
options.Events = {
    onReadSuggest:function(evtParam){
        // 행의 sRating 열에 해당하는 셀 값이 50 이상인 경우와 이하인 경우에 대해 다른 Suggest값 적용
        if (evtParam.row["sRating"] >= 50) {
            return "|보통|만족|매우만족";
        } else {
            return "|매우불만족|불만족|보통";
        }
    }
}
```

### Read More

- [onSuggest event](./on-suggest)
- [Suggest col](/docs/props/col/suggest)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
