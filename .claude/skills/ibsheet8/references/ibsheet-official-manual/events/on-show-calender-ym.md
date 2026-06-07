---
KEY: onShowCalenderYm
KIND: event
PATH: events/on-show-calender-ym
ALIAS: 달력창을, 보여줄, 달력창, 내에, 생성되는
ALIAS_EN: on, show, calender, ym
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-show-calender-ym
---
# onShowCalendarYm ***(event)***
> 달력창을 보여줄 때, 년/월 달력창 내에 생성되는 모든 년/월들에 대해 호출되는 이벤트입니다.

> 모든 년/월에 대해 호출되기에 많은 작업을 실행 시 느려질 수 있습니다.

> `True/False`를 리턴하여 년/월을 사용할지 여부를 선택할 수 있습니다.

> `False`리턴 시 해당 년/월에 취소선이 생성되며 사용자가 선택할 수 없습니다.

![onShowCalendarYm](/assets/imgs/onShowCalendarYm.png)
<!-- IMAGE: 스크린샷/예시 이미지 - onShowCalendarYm -->

### Syntax

```
    onShowCalendarYm : function(paramObject) {

    }
or
    sheet.bind("onShowCalendarYm" , function(paramObject) {});
```

### Parameters
| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|년/월 달력창이 보여질 시트 객체|
|row|`object`|년/월 달력창이 보여질 셀의 [데이터 로우 객체](/docs/appx/row-object)|
|col|`string`|년/월 달력창이 보여질 셀의 열이름|
|year|`number`|년/월 달력 내에 보여질 년도|
|month|`number`|년/월 달력 내에 보여질 월(년도가 그려지는 호출시점에서는 <b>null을 리턴</b>)|

### Return
***boolean***

### Example
```javascript
options.Events = {
    onShowCalendarYm:function(evtParam){
        // 2013년 1월 ~ 2013년 4월을 제외한 나머지 년/월들은 취소선으로 표시하여 선택 불가를 표현
        if (evtParam.year == 2013 && (evtParam.month == null || (evtParam.month >= 1 && evtParam.month <= 4))) {
            return true;
        }
        return false;
    },
    onShowCalendarYm:function(evtParam){
        // 1월 ~ 4월을 제외한 나머지 월들은 취소선으로 표시하여 선택 불가를 표현(년도는 모두 선택가능)
        if (evtParam.month == null || (evtParam.month >= 1 && evtParam.month <= 4)) {
            return true;
        }
        return false;
    },
    onShowCalendarYm:function(evtParam){
        // 2013년을 제외한 나머지 년/월들은 취소선으로 표시하여 선택 불가를 표현(2013년을 선택시 표시되는 월들은 모두 선택가능)
        if (evtParam.year == 2013) {
            return true;
        }
        return false;
    }
}
```

### Read More
- [onReadCanEditDate event](./on-read-can-edit-date)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.9|기능 추가|
