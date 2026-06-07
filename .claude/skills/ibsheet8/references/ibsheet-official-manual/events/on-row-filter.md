---
KEY: onRowFilter
KIND: event
PATH: events/on-row-filter
ALIAS: 필터링, 진행, 행에, 대해, 호출되는
ALIAS_EN: on, row, filter
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-row-filter
---
# onRowFilter ***(event)***
> 필터링 진행 시 각 행에 대해 호출되는 이벤트입니다.

> 행이 화면에 보일지 여부를 `boolean` 값으로 반드시 리턴해야합니다.

### Syntax

```
    onRowFilter:function(paramObject) {

    }
or
    sheet.bind("onRowFilter" , function(paramObject) {});
```

### Parameters


| Name | Type | Description |
|----------|-----|------------|
|sheet|`object`|필터링 진행중인 시트 객체|
|row|`object`|필터링 진행된 [데이터 로우 객체](/docs/appx/row-object)|
|show|`boolean`|필터링 결과
`0(false)`:화면에 감춤
`1(true)`:화면에 보임|

### Return
***boolean***

### Example
```javascript
options.Events = {
    onRowFilter:function(evtParam){
        // sName 열의 값이 "구청앞"인 경우 필터링 결과와 상관없이 화면에 보여줍니다.
        // 다른 열의 값에 의해 필터링이 영향을 받을 때 유용합니다.
        if (evtParam.row["sName"] == "구청앞") return true;
        return evtParam.show;
    }
}
```

### Read More


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
