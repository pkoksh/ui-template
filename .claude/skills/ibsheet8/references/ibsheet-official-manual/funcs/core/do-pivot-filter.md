---
KEY: doPivotFilter
KIND: method
PATH: funcs/core/do-pivot-filter
ALIAS: sheet.doPivotFilter, doPivotFilter(), 주어진, 값을, 필터행에, 반영하여, 원본
ALIAS_EN: do, pivot, filter
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/do-pivot-filter
---
# doPivotFilter ***(method)***

> 주어진 값을 필터행에 반영하여, 원본 시트에서 필터된 데이터 결과에 따라 피벗 시트를 생성합니다.

> ;를 통해 필터링 하고 싶은 값들에 대해 or연산을 실행할 수 있습니다(ex |떡볶이;오뎅|...).

> ,를 통해 필터링 하고 싶은 값들에 대해 and연산을 실행할 수 있습니다(ex |떡볶이,오뎅|...).



### Syntax
```javascript
void doPivotFilter( cols , vals , operators );
```

### Parameters
|Name|Type|Required|Description|
|----------|-----|---|----|
|cols|`string`|필수|필터링을 수행할 열들
첫글자를 구분로 열이름과 열이름을 연결한 문자를 구성(ex:"\|DEPTNM\|POSITION\|SALARY" )|
|vals|`string`|필수|필터링 하고 싶은 값
첫글자를 구분로 열이름과 열이름을 연결한 문자를 구성 (ex:"\|총무\|대리\|3500" )|
|operators|`string`|필수|필터링 연산자(숫자)
첫글자를 구분로 열이름과 열이름을 연결한 문자를 구성 (ex:"\|7\|7\|5" )|


**operators 상세설명**

|value|type|desc|
|---|---|---|
|`0`|공통|필터를 사용하지 않음|
|`1`|공통|같다|
|`2`|공통|같지않다|
|`3`|숫자, 날짜|작다|
|`4`|숫자, 날짜|작거나 같다|
|`5`|숫자, 날짜|크다|
|`6`|숫자, 날짜|크거나 같다|
|`7`|문자|앞글자 일치|
|`8`|문자|앞글자가 일치하지 않음|
|`9`|문자|뒷글자 일치|
|`10`|문자|뒷글자 일지하지 않음|
|`11`|문자|해당 글자 포함|
|`12`|문자|해당 글자 포함하지 않음|
|`13`|숫자|상위 10|
|`14`|공통|값 있음|
|`15`|공통|값 없음|

### Return Value
***none***

### Example
```javascript
//deptName 열에 내용중 연구팀으로 끝나는 행과 cardAmt 열의 값이 50000보다 큰 경우의 행을 기반으로 원본 시트를 필터하여, 피벗 시트를 생성합니다.
pivotSheet_sheet.doPivotFilter("|deptName|cardAmt", "|연구팀|50000", "|9|6");
```

### Read More
- [clearPivotFilter method](./clear-pivot-filter)

### Since

|product|version|desc|
|---|---|---|
|core|8.2.0.1|기능 추가|

