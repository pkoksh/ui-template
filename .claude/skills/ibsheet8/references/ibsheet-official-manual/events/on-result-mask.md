---
KEY: onResultMask
KIND: event
PATH: events/on-result-mask
ALIAS: 셀에, 입력한, 데이터가, 에서, 설정된
ALIAS_EN: on, result, mask
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-result-mask
---
# onResultMask ***(event)***
> 셀에 입력한 데이터가 [ResultMask](/docs/props/col/result-mask)에서 설정된 유효성 검사를 통과하지 못하는 경우 발생하는 이벤트입니다.

> 리턴 결과에 따라 시트 내 동작이 달라집니다. 아무 값도 리턴하지 않을시 기본값은 `0` 입니다.

>
> `0(default)`을 리턴 시 [ResultText](/docs/props/col/result-text)에서 설정된 값이 alert 경고 메시지에 띄워지며 계속 편집을 진행합니다.

> `1`을 리턴 시 경고 메시지가 뜨지 않고 계속 편집을 진행합니다.

> `2`를 리턴 시 값을 셀에 저장하지 않고 편집을 종료합니다.

> `3`을 리턴 시 값을 셀에 저장하고 편집을 종료합니다.

> `4`를 리턴 시 값을 셀에 저장하고 편집을 종료한 뒤, 배경색의 색상을 빨간색으로 변경시킵니다. (3, 4 의 차이점은 배경색 입니다.)
>
> 유효성 통과를 못한 경우 [Error](/docs/props/cell/error) 속성에 [ResultMask](/docs/props/col/result-mask)값이 설정되며, 해당 셀의 배경색이 빨간색으로 설정됩니다.

### Syntax

```
    onResultMask : function(paramObject) {

    }
or
    sheet.bind("onResultMask" , function(paramObject) {});
```

### Parameters

| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|시트 객체|
|row|`object`|셀이 위치한 [데이터 로우 객체](/docs/appx/row-object)|
|col|`string`|셀의 열이름|
|val|`string`|유효성 통과를 하지 못한 사용자 입력 값|
|error|`object`|붙여넣기등의 동작을 통한 다중 셀 편집 시 유효성 검사를 통과하지 못할 경우설정되는 에러 객체([이벤트 error 객체](/docs/appx/event-error) 참고)|

### Return
***number***

### Example
```javascript
options.Cols = [
    {
        Header : "아이디",
        Name: "sId",
        Type: "Text",
        ResultMask: "^(([A-Z]|[a-z]){6,10})$",
        ResultText: "아이디는 6~10글자 이내의 영문자로 작성해주세요"
    } ...
]

options.Events = {
    onResultMask:function(evtParam){
        if (evtParam.col == "sId") {
            // sId 열의 ResultMask 설정에 의한 유효성 검사를 통과하지 못한 경우
            // alert 메시지 창을 띄우지 않고 편집모드를 계속 진행
            return 1;
        }

    }
}
```

### Read More

- [ResultMask col](/docs/props/col/result-mask)
- [ResultText col](/docs/props/col/result-text)
- [Error cell](/docs/props/cell/error)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
