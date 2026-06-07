---
KEY: autoCalendar
KIND: config-property
PATH: props/cfg/auto-calendar
ALIAS: 모든, 셀에, 대해, 사용자가, 편집모드로
ALIAS_EN: auto, calendar
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/auto-calendar
---
# AutoCalendar ***(cfg)***
> 모든 [Type](/docs/appx/type)이 `Date`인 셀에 대해 사용자가 편집모드로 들어갈때 달력을 띄울지 여부를 설정합니다.


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|기능 사용 안함 (`default`)|
|`1(true)`|편집시 달력을 띄움|


### Example
```javascript
//모든 Date 타입 열에 대해서 편집시 자동으로 달력을 오픈한다.
options.Cfg = {
    AutoCalendar: true
};
```

### Read More
- [AutoCalendar col](/docs/props/col/auto-calendar)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
