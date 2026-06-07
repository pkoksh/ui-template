---
KEY: onEndEdit
KIND: event
PATH: events/on-end-edit
ALIAS: 편집이, 완료되기, 호출되는, 이벤트입니다
ALIAS_EN: on, end, edit
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-end-edit
---
# onEndEdit ***(event)***
> 셀 편집이 완료되기 전 호출되는 이벤트입니다.

> 타입([Type](/docs/props/col/type))이 `Enum`인 경우도 호출되며, 타입이 `Radio, Bool`인 경우 해당 이벤트가 호출되지 않습니다.


**save 인자 값에 따른 return 사용 방법**

- `save` 인자는 값을 변경하는 것이 아니고 확인하는 용도로 사용할 수 있으며 사용자가 종료한 편집은 `save` 인자가 `1(true)`이고 [endEdit method](/docs/funcs/core/end-edit)로 종료된 편집은 `save` 인자가 `0(false)`입니다.
- `save` 인자가 `1(true)`인 경우, `return` 값에 따라 내용을 반영할 수 있습니다. (`true` 리턴시 편집이 계속 유지되고 다른 값(`string, number`)을 리턴시 해당 값이 반영됩니다.)
- `save` 인자가 `0(false)`인 경우 리턴 값에 상관 없이 편집이 종료되며 리턴 값이 변영되지 않습니다.

### Syntax

```
    onEndEdit : function(paramObject) {

    }
or
    sheet.bind("onEndEdit" , function(paramObject) {});
```

### Parameters
| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|편집모드가 종료될 시트 객체|
|row|`object`|편집모드가 종료될 셀이 위치한 [데이터 로우 객체](/docs/appx/row-object)|
|col|`string`|편집모드가 종료될 셀의 열이름|
|save|`boolean`|편집이 적용될지 여부|
|val|`number` \| `string` \| `object`|편집된 값|
|raw|`string`|셀에 입력한 값|


### Return
***mixed***( `boolean` \| `number` \| `string` \| `object` )

### Example
```javascript
options.Events = {
    onEndEdit:function(evtParam){
        // 편집된 값이 금지어에 포함될 경우 입력한 값이 금지어라는 것을 띄우고 기존에 있던 셀 값을 그대로 유지합니다.
        var banArray = ["금지어1", "금지어2"];
        if (banArray.indexOf(evtParam.val) > -1) {
            alert("금지어입니다.");
            return evtParam.row[evtParam.col];
        }
    }
}
```

### Read More
- [onStartEdit event](/docs/events/on-start-edit)
- [onShowEdit event](/docs/events/on-show-edit)
- [onAfterEdit event](/docs/events/on-after-edit)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
