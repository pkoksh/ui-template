---
KEY: calendarButtons
KIND: column-property
PATH: props/col/calendar-buttons
ALIAS: 달력이, 표시될때, 달력, 하단에, 보여질
ALIAS_EN: calendar, buttons
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/calendar-buttons
---
# CalendarButtons ***(col)***

> 달력이 표시될때 달력 하단에 보여질 버튼을 설정합니다.

> 설정값의 합을 통해 여러 개 버튼을 표시할 수도 있습니다.

> 년월 달력의 경우 [AutoSelectYm](/docs/props/cfg/auto-select-Ym) 값에 따라 `"확인"` 버튼 보여짐 여부가 달라집니다. 


###
1. 년월일 달력

![CalendarButtons](/assets/imgs/calendarButtons.png "CalendarButtons")
<!-- IMAGE: 버튼 이미지 - CalendarButtons -->

2. 년월 달력

![MonthCalendarButtons](/assets/imgs/monthCalendar.png "MonthCalendarButtons")
<!-- IMAGE: 스크린샷/예시 이미지 - MonthCalendarButtons -->


### Type
`number`

### Options

* 년월일 달력 (`default: 0`)

|Value|Description|
|-----|-----|
|`1`|"오늘" 버튼|
|`2`|"취소" 버튼|
|`4`|"확인" 버튼|
|`8`|"어제" 버튼|

* 년월 달력  (`default: 4`)

|Value|Description|
|-----|-----|
|`1`|"이번달" 버튼|
|`2`|"취소" 버튼|
|`4`|"확인" 버튼|



* 년 달력  (`default: 4`)

|Value|Description|
|-----|-----|
|`2`|"취소" 버튼|
|`4`|"확인" 버튼|



### Example
```javascript
options.Cols = [
    ...
    // 년월일 달력에 어제, 오늘 버튼을 표시한다.
    {Type: "Date", Name: "sa_enterDate", CalendarButtons: 9 ...},
    ...
    // 년월 달력에 이번달, 취소, 확인 버튼을 표시한다.
    {Type: "Date", Name: "sa_monthDate", CalendarButtons: 7, Format: "yyyy/MM" ...}
];
```

### Read More

- [AutoSelectYm cfg](/docs/props/cfg/auto-select-Ym)
- [AutoCalendar col](./auto-calendar)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
