---
KEY: dateToString
KIND: static-member
PATH: static/date-to-string
ALIAS: 날짜, 객체, 유닉스, 시간, 부터
ALIAS_EN: date, to, string, datetime
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/static/date-to-string
---
# dateToString ***(static)***

> 날짜 객체(`new Date()`)나 유닉스 시간(1970/1/1 부터 지정한 일자까지 밀리초 단위)를 지정한 날짜형식의 포맷으로 리턴합니다.

### Syntax
```javascript
string IBSheet.dateToString(time, format);
```

### Parameters
|Name|Type|Required|Description|
|----------|-----|---|----|
|time|`mixed`( `date` \| `number` )|필수|javascript `Date()객체`나 `new Date().getTime()`으로 얻는 숫자값|
|format|`string`|필수|마스킹 적용할 날짜 포맷 ([Format appendix](/docs/appx/format) 참고)|


### Return Value
***string*** : 마스킹이 적용된 문자열

### Example
```javascript
  var maskedDate = IBSheet.dateToString(new Date(2019,2,1), "yyyy-MM-dd");
  //"2019-03-01"

  var maskedDate = IBSheet.dateToString(1551155311957, "yyyy/MM/dd dddd");
  //"2019/02/26 화요일"
```
### Read More
- [stringToDate static](/docs/static/string-to-date)
- [Format appendix](/docs/appx/format)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
