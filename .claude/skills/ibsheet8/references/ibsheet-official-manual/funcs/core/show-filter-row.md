---
KEY: showFilterRow
KIND: method
PATH: funcs/core/show-filter-row
ALIAS: sheet.showFilterRow, showFilterRow(), 헤더, 밑에, 필터, 행을, 보여지게
ALIAS_EN: show, filter, row, header
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/show-filter-row
---
# showFilterRow ***(method)***
> 헤더 밑에 필터 행을 보여지게 합니다.

> 필터를 통해 감춰지는 행은 내부적으로 [Visible](/docs/props/row/visible):`0(false)` 값이 설정됩니다. 

> 예약어의 사용을 원하지 않을 경우 [DisableKeyWord](/docs/props/cfg/disable-keyword) 를 통해 예약어 기능을 off 할 수 있습니다.



> 문자열 컬럼에서는 `','(and검색)` 나 `';'(or검색)` 을 사용하실 수 있습니다.

>  - ex1. `사과;복숭아` ==> 사과나 복숭아 글자를 포함한 행만 남기고 감춤
>  - ex2. `사과,복숭아` ==> 사과 복숭아가 함께 있는 행만 남기고 감춤
 

> 숫자나 날짜 컬럼에 대해서는 `'~'` 를 통해 범위를 설정 할 수 있습니다. 필터 행의 기호(연산자) 1(같음), 2(같지않음) 에서만 사용 할 수 있고 다른 기호 에서는 사용 할 수 없습니다.

>  - ex1. `20170101~20181231` ==> 2017년 1월 1일 부터 2018년 12월 31일 까지만 남기고 모두 감춤
>  - ex2. `20241022~20241025;20241031` ==> 2024년 10월 22일 부터 2024년 10월 25일 까지의 데이터와 2024년 10월 31일의 데이터만 남기고 모두 감춤
>  - ex3. `199000~488000` ==> 199000 부터 488000 사이의 데이터만 남기고 모두 감춤
>  - ex4. ` 99000;199000~488000` ==> 99000의 데이터와 199000 부터 488000 사이의 데이터만 남기고 모두 감춤

> 구분자는 메세지 파일에서 변경 가능합니다.

> "`ValueSeparator`": "`;`"     //or 구분자 

> "`ValueSeparatorHtml`": "`;`" //or 구분자 

> "`ValueAndSeparator`": "`,`"  //and 구분자 

> "`RangeSeparator`": "`~`"     //범위 연산자 

> "`RangeSeparatorHtml`": "`~`" //범위 연산자 


### Syntax
```javascript
boolean showFilterRow();
```


### Return Value
***boolean*** : 필터 행 보임 여부 (필터 행이 이미 보여지고 있거나, 보일 수 없는 경우 `0(false)` 리턴)

### Example
```javascript
//필터 행을 보여 줍니다.
sheet.showFilterRow();
```

### Read More
- [hideFilterRow method](./hide-filter-row)
- [DisableKeyWord](/docs/props/cfg/disable-keyword)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
