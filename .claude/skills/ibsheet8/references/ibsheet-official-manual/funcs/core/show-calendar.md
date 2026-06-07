---
KEY: showCalendar
KIND: method
PATH: funcs/core/show-calendar
ALIAS: sheet.showCalendar, showCalendar(), 메소드를, 시트, 내부에서, 달력, 컨트롤을
ALIAS_EN: show, calendar, sheet, grid
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/show-calendar
---
# showCalendar ***(method)***
> 메소드를 통해 시트 내부에서 달력 컨트롤을 사용하실 수 있습니다. 


### Syntax
```javascript
object showCalendar(row, col, calendar, pos, func, date, always);
```


### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|row |`object`|필수|[데이터 로우 객체](/docs/appx/row-object)|
|col |`string`|필수|열이름|
|calendar|`object`|선택|캘린더 구성하는 JSON 객체 ([showCalendar](/docs/static/show-calendar)의 `calOption` 참고)
|pos|`object`|선택|보여질 달력의 좌우/상하 위치 조정 ex) `{x:10, y:10}`
|func|`function`|선택|컨택스트 메뉴에서 사용자가 선택시 `callback` 함수
|date|`string`|선택|보여질 달력의 최초 날짜 지정
|always|`boolean`|선택|이미 달력이 보여지고 있다면 계속 보여줄지에 대한 여부
`0(false)`:달력 보임/감춤에 대한 Toogle (`default`)
`1(true)`:달력 보임|


### Return Value
***object*** : 달력 객체


### Example
```javascript
// 현재 포커스가 된 행의 sDate 컬럼에 달력을 생성합니다.
sheet.showCalendar(sheet.getFocusedRow(), "sDate", {Date: "2020-06-02", Format: "yyyy-MM-dd"});
```

### Read More

- [showCalendar static](/docs/static/show-calendar)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.5|기능 추가|
