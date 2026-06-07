---
KEY: onShowCol
KIND: event
PATH: events/on-show-col
ALIAS: 열이, 보이거나, 숨겨질, 호출되는, 이벤트입니다
ALIAS_EN: on, show, col
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-show-col
---
# onShowCol ***(event)***
> 열이 보이거나 숨겨질 때 호출되는 이벤트입니다.

> `1(true)`를 리턴 시 열에 대한 숨김/보임 동작을 실행하지 않고 현상 유지합니다.

<!--!
> `[비공개 설명]` 이 이벤트는 showCol, hideCol 메소드를 실행시 호출됩니다.
!-->

### Syntax

```
    onShowCol : function(paramObject) {

    }
or
    sheet.bind("onShowCol" , function(paramObject) {});
```

### Parameters


| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|시트 객체|
|col|`string`|화면에서 보이거나 숨겨질 열이름|
|hide|`boolean`|숨김 여부
`0(false)`:보임
`1(true)`:숨김|

### Return
***boolean***

### Example
```javascript
options.Events = {
    onShowCol:function(evtParam){
        // 도시 열에 있는 셀 값이 서울인 경우와 인천인 경우에 대해 다른 Enum을 보여줍니다.
        if (evtParam.hide == "0" && evtParam.col == "privacy") {
            return true;
        }
    }
}
```

### Read More

- [showCol method](/docs/funcs/core/show-col)
- [hideCol method](/docs/funcs/core/hide-col)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
