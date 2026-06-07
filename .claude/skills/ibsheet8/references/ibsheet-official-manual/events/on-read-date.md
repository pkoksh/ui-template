---
KEY: onReadDate
KIND: event
PATH: events/on-read-date
ALIAS: 달력창을, 보여줄, 달력, 내에, 생성되는
ALIAS_EN: on, read, date
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-read-date
---
# onReadDate ***(event)***
> 달력창을 보여줄 때 달력 내에 생성되는 모든 날짜들에 대해 호출되는 이벤트입니다.

> 모든 날짜에 대해 호출되기에 많은 작업을 실행 시 느려질 수 있습니다.

> 달력내에 해당 일자를 리턴해야 하는데, 리턴값을 통해 특정일자에 원래의 날짜 대신 다른 문자를 표시하거나, 특정일의 색상, 굵기등의 디자인을 변경하실 수 있습니다.

### Syntax

```
    onReadDate : function(paramObject) {

    }
or
    sheet.bind("onReadDate" , function(paramObject) {});
```

### Parameters
| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|달력창이 보여질 시트 객체|
|row|`object`|달력창이 보여질 셀의 [데이터 로우 객체](/docs/appx/row-object)|
|col|`object`|달력창이 보여질 셀의 열이름|
|date|`date`|달력 내에 보여질 날짜(자바스크립트 date 객체)|
|text|`string`|달력 내에 보여질 날짜|
|classes|`array`|각 일자별 적용될 css class 배열 `[normal, hover, selected, selected+hover]`|
|range|`array`|달력의 `Range` 속성을 사용하여 여러일자가 선택되어 있는 경우 시작일과 마지막일 배열 `[startdate, enddate]`, Range속성을 사용하지 않는 경우에는 `undefined` |

### Return
***각 일자 파라미터의 `text` 인자를 그대로 리턴하면 됨***

### Example
```javascript
options.Events = {
    onReadDate:function(evtParam){
        //달력에서 매월 15일은 두꺼운 오렌지 색으로 표시
        var date = evtParam.date;
        if (date.getDate() == 15) {
            return "<strong style='color:orange'>" + evtParam.text + "</strong>";
        } else {
            return evtParam.text;
        }
    }
}
```
### Read More
- [onReadCanEditDate event](./on-read-can-edit-date)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
