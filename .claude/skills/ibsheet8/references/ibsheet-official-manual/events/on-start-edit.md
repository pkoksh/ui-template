---
KEY: onStartEdit
KIND: event
PATH: events/on-start-edit
ALIAS: 편집, 호출되는, 이벤트입니다
ALIAS_EN: on, start, edit, editable
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-start-edit
---
# onStartEdit ***(event)***
> 셀 편집 시 호출되는 이벤트입니다.

> 타입([Type](/docs/props/col/type))이 `Enum`인 경우도 호출되며, 타입이 `Radio, Bool`인 경우 해당 이벤트가 호출되지 않습니다.

> `1(true)`를 리턴 시 편집이 불가능하게 설정할 수 있습니다.

### Syntax

```
    onStartEdit : function(paramObject) {

    }
or
    sheet.bind("onStartEdit" , function(paramObject) {});
```

### Parameters


| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|편집모드로 들어갈 시트 객체|
|row |`object`|편집모드로 들어갈 셀이 위치한 [데이터 로우 객체](/docs/appx/row-object)|
|col |`string`|편집모드로 들어갈 셀의 열이름|

### Return
***boolean***

### Example
```javascript
options.Events = {
    onStartEdit:function(evtParam){
        // 편집모드로 들어갈 셀이 위치한 열이 수량을 뜻하는 sCount이고, 현재 행의 sSale 열에 해당하는 셀 값이 "판매불가"인 경우 셀 편집을 불가능하게 합니다.
        if (evtParam.col == "sCount" && evtParam.row["sSale"] == "판매불가") {
            return true;
        }
    }
}
```

### Read More

- [Enum col](/docs/props/col/enum)
- [onEndEdit event](./on-end-edit)
- [onShowEdit event](./on-show-edit)
- [onAfterEdit event](./on-after-edit)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
