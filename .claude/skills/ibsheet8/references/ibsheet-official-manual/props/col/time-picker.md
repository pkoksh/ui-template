---
KEY: timePicker
KIND: column-property
PATH: props/col/time-picker
ALIAS: 시분초, 컬럼에, 아이콘이, 생성됩니다, 아이콘
ALIAS_EN: time, picker, icon
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/time-picker
---
# TimePicker ***(col)***

> 시분초 컬럼에 아이콘이 생성됩니다. 아이콘 클릭시, 달력이 아닌 시분초 다이얼로그를 사용합니다.


### 아이콘 표시 조건
> `Type: Date`

> `EditFormat`, `Format`, `DataFormat` 3가지의 포맷 중 하나에 날짜 포맷이 없고 시간과 관련된 포맷값만 있을 경우 표시.

> ex) `HH:mm` or `HH:mm:ss`

> `EditFormat` -> `Format` -> `DataFormat` 우선순위를 따릅니다.

> ex) `EditFormat: yyyy-MM-dd`, `DataFormat: HH:mm` 일 경우 TimePicker 아이콘이 표시 되지 않음.

###

![TimePicker](/assets/imgs/timepicker.png)
<!-- IMAGE: 스크린샷/예시 이미지 - TimePicker -->


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|시분초 아이콘 생성하지 않음 (`default`)|
|`1(true)`|시분초 아이콘 생성, 다이얼로그 사용|


### Example
```javascript

//시분초 컬럼에 TimePicker 설정.
options.Cols = [
    ...
    {Type:"Date", Name: "Data_Hms", Format: 'HH:mm:ss', TimePicker: true}
    ...
];
```

### Read More

- [Interval col](./interval)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.26|기능 추가|
