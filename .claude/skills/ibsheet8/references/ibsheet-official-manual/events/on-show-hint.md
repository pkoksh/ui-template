---
KEY: onShowHint
KIND: event
PATH: events/on-show-hint
ALIAS: 힌트가, 화면에, 보여질, 호출되는, 이벤트입니다
ALIAS_EN: on, show, hint
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-show-hint
---
# onShowHint ***(event)***
> 힌트가 화면에 보여질 때 호출되는 이벤트입니다.

> 힌트 값을 변경하고 싶은 경우, 사용자가 원하는 커스텀 `hint` 값(기본은 셀 값)을 리턴합니다.

### Syntax

```
    onShowHint : function(paramObject) {

    }
or
    sheet.bind("onShowHint" , function(paramObject) {});
```

### Parameters


| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|힌트가 보여질 시트 객체|
|row|`object`|힌트가 보여질 셀의 [데이터 로우 객체](/docs/appx/row-object)|
|col|`string`|힌트가 보여질 셀의 열이름|
|hint|`object`|화면에 보여질 힌트 값|
|reason|`number`|힌트가 보여지게된 원인
`1`:셀 내용의 너비가 셀의 너비보다 클 때
`2`:셀 내용의 높이가 셀의 높이보다 클 때
`3`:셀 내용의 너비/높이가 셀의 너비/높이보다 클 때|

### Return
***string***

### Example
```javascript
options.Events = {
    onShowHint:function(evtParam){
        // 열이름이 sTitle인 셀에서 힌트가 보여지는데 셀 내용이 5글자 이상이면 "첫 5글자..." 형태로 힌트를 보여줍니다.
        if(evtParam.col == "sTitle" && evtParam.hint.length >= 5) {
            return evtParam.hint.slice(0,5) + "...";
        }
    }
}
```

### Read More

<!--!
- `[비공개]` [HintValue col](/docs/props/col/hint-value) cell,col, row에 설정되는 값
!-->
- [showHint method](/docs/funcs/core/show-hint)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
