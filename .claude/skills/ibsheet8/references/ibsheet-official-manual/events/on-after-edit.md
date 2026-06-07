---
KEY: onAfterEdit
KIND: event
PATH: events/on-after-edit
ALIAS: 편집이, 완료되기, 편집모드의, 문자열을, 셀값으로
ALIAS_EN: on, after, edit
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-after-edit
---
# onAfterEdit ***(event)***
> 셀 편집이 완료되기 전 편집모드의 문자열을 셀값으로 변환할 때 호출되는 이벤트입니다.

> [onEndEdit](./on-end-edit) 이벤트 이후와 [onBeforeChange](./on-before-change) 이벤트 이전 시점에 호출되며, 셀 값에 적용될 편집모드의 최종 값을 수정해서 리턴가능합니다.

> 타입([Type](/docs/props/col/type))이 편집모드가 되지 않는 `Enum, Radio, Bool`과 같은 경우 해당 이벤트가 호출되지 않습니다.

### Syntax

```
    onAfterEdit : function(paramObject) {

    }
or
    sheet.bind("onAfterEdit" , function(paramObject) {});
```

### Parameters
| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|편집모드가 종료될 시트 객체|
|row|`object`|편집모드가 종료될 셀이 위치한 [데이터 로우 객체](/docs/appx/row-object)|
|col|`string`|편집모드가 종료될 셀의 열이름|
|val|`string`|편집모드가 종료되기전 입력된 값|


### Return
***string***

### Example
```javascript
options.Events = {
    onAfterEdit:function(evtParam){
        // 사용자가 입력한 결과 값이 0보다 작은 경우 0으로 초기화 시켜줍니다.
        if (evtParam.val < 0) return 0;
    }
}
```

### Read More

- [onStartEdit event](./on-start-edit)
- [onShowEdit event](./on-show-edit)
- [onEndEdit event](./on-end-edit)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
