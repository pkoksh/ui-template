---
KEY: showTimePicker
KIND: method
PATH: funcs/core/show-time-picker
ALIAS: sheet.showTimePicker, showTimePicker(), 특정, 셀에, 시분초, 다이얼로그를, 띄웁니다
ALIAS_EN: show, time, picker
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/show-time-picker
---
# showTimePicker ***(method)***

> 특정 셀에 시분초 다이얼로그를 띄웁니다.

> [Type](/docs/appx/type)이 `Date` / `Text` 일 경우에만 다이얼로그가 표시됩니다.

> `확인` 클릭 시 `Text` 타입의 셀의 경우 `HH:mm:ss` 의 형태로 값이 셋팅 됩니다.

![TimePicker](/assets/imgs/timepicker.png)
<!-- IMAGE: 스크린샷/예시 이미지 - TimePicker -->


### Syntax
```javascript
boolean showTimePicker( row , col , format );
```

### Parameters
|Name|Type|Required|Description|
|----------|-----|---|----|
|row|`object`|필수|[데이터 로우 객체](/docs/appx/row-object)|
|col|`string`|필수|열이름|
|format|`string`|선택|시분 / 시분초 TimePicker 선택
 (`"HHmmss"` or `"HHmm"` 만 지원) (`defualt: "HHmmss"`)|


### Return Value
***boolean*** : 다이얼로그 표시 성공여부 (정상적으로 표시가 되면 true, 표시에 실패하면 false 리턴)

### Example
```javascript
sheet.showTimePicker({row:sheet.getRowById("AR5"), col:"Date1", foramt:"HHmm"});
```

### Read More
- [TimePicker col](/docs/props/col/time-picker)


### Since
|product|version|desc|
|---|---|---|
|core|8.1.0.6|기능 추가|
|core|8.1.0.10|`format` 인자 `default` 지정|