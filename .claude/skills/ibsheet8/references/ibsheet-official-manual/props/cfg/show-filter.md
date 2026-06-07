---
KEY: showFilter
KIND: config-property
PATH: props/cfg/show-filter
ALIAS: 시트, 생성시, 상단, 고정행으로, 필터행을
ALIAS_EN: show, filter, sheet, grid
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/show-filter
---
# ShowFilter ***(cfg)***

> 시트 생성시 상단 고정행으로 필터행을 추가할지 여부를 설정합니다

> 필터행을 추가하는 경우 열별 데이터에 대한 필터링 기능을 사용할 수 있습니다.

> `(0)false` 으로 설정시 필터행은 생성되지 않으며, 시트 생성 이후에 [showFilterRow](/docs/funcs/core/show-filter-row) 함수를 통해 동적으로 필터행을 생성시킬 수 있습니다. 

> 아래는 `ShowFilter:true` 를 이용하여 생성한 필터행의 사용 예시 입니다.


> 문자열 컬럼에서는 `','(and검색)` 나 `';'(or검색)` 을 사용하실 수 있습니다.

>  - ex1. `사과;복숭아` ==> 사과나 복숭아 글자를 포함한 행만 남기고 감춤
>  - ex2. `사과,복숭아` ==> 사과 복숭아가 함께 있는 행만 남기고 감춤
 

> 숫자나 날짜 컬럼에 대해서는 `'~'` 를 통해 범위를 설정 할 수 있습니다. 필터행의 기호(연산자) 1(같음), 2(같지않음) 에서만 사용 할 수 있고 다른 기호 에서는 사용 할 수 없습니다.

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


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|필터행을 추가하지 않는다. (`default`)|
|`1(true)`|필터행을 추가한다.|


### Example
```javascript
options = {
    Cfg :{
      ShowFilter: true,  // 시트 생성시 필터행도 추가해서 같이 생성한다.
    }
};
```

### Try it
- [True](https://jsfiddle.net/gh/get/library/pure/ibsheet/ibsheet8-manual-sample/tree/master/samples/properties/Cfg/ShowFilter-true/)

### Read More
- [showFilterRow method](/docs/funcs/core/show-filter-row)
- [hideFilterRow method](/docs/funcs/core/hide-filter-row)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
