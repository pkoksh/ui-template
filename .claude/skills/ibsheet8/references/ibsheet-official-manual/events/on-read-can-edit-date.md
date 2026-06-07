---
KEY: onReadCanEditDate
KIND: event
PATH: events/on-read-can-edit-date
ALIAS: 달력창을, 보여줄, 달력, 내에, 생성되는
ALIAS_EN: on, read, can, edit, date
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-read-can-edit-date
---
# onReadCanEditDate ***(event)***
> 달력창을 보여줄 때 달력 내에 생성되는 모든 날짜들에 대해 호출되는 이벤트입니다.

> 모든 날짜에 대해 호출되기에 많은 작업을 실행 시 느려질 수 있습니다.

> `True/False`를 리턴하여 날짜를 사용할지 여부를 선택할 수 있습니다.

> `False`리턴 시 날짜에 취소선이 생성되며 사용자가 선택할 수 없습니다.

> `array` 타입으로 리턴 시 `True/False` 에 따라 CSS Class를 지정 할 수 있습니다.

### Syntax

```
    onReadCanEditDate : function(paramObject) {

    }
or
    sheet.bind("onReadCanEditDate" , function(paramObject) {});
```

### Parameters
| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|달력창이 보여질 시트 객체|
|row|`object`|달력창이 보여질 셀의 [데이터 로우 객체](/docs/appx/row-object)|
|col|`string`|달력창이 보여질 셀의 열이름|
|date|`date`|달력 내에 보여질 날짜(자바스크립트 date 객체)|

### Return
***mixed( boolean | array )***

### Example
`boolean 리턴`
```javascript
options.Events = {
    onReadCanEditDate:function(evtParam){
        // 12월 13일 ~ 12월 18일을 제외한 나머지 날짜들은 취소선으로 표시하여 선택 불가를 표현
        var date = evtParam.date;
        if ((date.getMonth()+1) == 12 && (date.getDate() >= 13 && date.getDate() <= 18)) {
            return true;
        }
        return false;
    }
}
```
`array 리턴`
```css
.NoEdit {
  background-color: #f5e4f2;
}
.CanEdit {
  background-color: #baebbd;
}
```
```javascript
options.Events = {
    onReadCanEditDate:(evtParam) => {
        var date = evtParam.date;
        // 13일 부터 18일 까지 선택 가능
        if ((date.getDate() >= 13 && date.getDate() <= 18)) {
          return [true, "CanEdit"];
        }
        return [false, "NoEdit"];
    }
}
```

### Read More
- [onReadDate event](./on-read-date)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|core|8.1.0.27|array 리턴 기능 추가|
