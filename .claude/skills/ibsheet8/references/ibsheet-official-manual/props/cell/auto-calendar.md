---
KEY: autoCalendar
KIND: cell-property
PATH: props/cell/auto-calendar
ALIAS: 셀에, 대해, 사용자가, 편집모드로, 들어갈때
ALIAS_EN: auto, calendar
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cell/auto-calendar
---
# AutoCalendar ***(cell)***
> [Type](/docs/appx/type)이 Date인 셀에 대해 사용자가 편집모드로 들어갈때 달력을 띄울지 여부를 설정합니다.


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|기능 사용 안함 (`default`)|
|`1(true)`|편집시 달력을 띄움|


### Example
```javascript
//메소드를 통해 특정 셀에 속성 적용 (열이름 :CLS )
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "AutoCalendar", 1);
```

### Read More
- [AutoCalendar col](/docs/props/col/auto-calendar)
- [AutoCalendar cfg](/docs/props/cfg/auto-calendar)
- [Type appendix](/docs/appx/type)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
