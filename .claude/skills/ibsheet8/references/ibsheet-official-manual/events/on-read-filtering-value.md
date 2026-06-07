---
KEY: onReadFilteringValue
KIND: event
PATH: events/on-read-filtering-value
ALIAS: 필터링, 진행, 대상이, 되는, 셀마다
ALIAS_EN: on, read, filtering, value
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-read-filtering-value
---
# onReadFilteringValue ***(event)***
> 필터링 진행 시 필터링 대상이 되는 열(들)의 각 셀마다 호출되는 이벤트.

> 리턴된 값으로 필터링을 진행합니다(실제 셀 값은 유지).

### Syntax

```
    onReadFilteringValue:function(paramObject) {

    }
or
    sheet.bind("onReadFilteringValue" , function(paramObject) {});
```

### Parameters
| Name | Type | Description |
|----------|-----|------------|
|sheet|`object`|필터링 진행중인 시트 객체|
|row|`object`|필터링 대상이 되는 셀이 위치한 [데이터 로우 객체](/docs/appx/row-object)|
|col|`string`|필터링 대상이 되는 셀이 위치한 열이름|
|val|`boolean` \| `number` \| `string`|셀 값|

### Return
***mixed( `boolean` \| `number` \| `string` )***

### Example
```javascript
options.Events = {
    onReadFilteringValue:function(evtParam){
        // 셀값이 비어있거나 "미정"인 경우 "미입력"이라는 단어로 대신 필터링을 진행합니다(필터 행에 있는 값과 "미입력"이라는 값을 비교하여 필터링). 실제 셀값에 영향을 주진 않습니다.
        if (evtParam.val == "" || evtParam.val == "미정") return "미입력";
    }
}
```

### Read More

- [onBeforeFilter event](./on-before-filter)
- [onAfterFilter event](./on-after-filter)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
