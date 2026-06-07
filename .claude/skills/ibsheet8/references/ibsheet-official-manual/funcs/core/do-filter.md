---
KEY: doFilter
KIND: method
PATH: funcs/core/do-filter
ALIAS: sheet.doFilter, doFilter(), 주어진, 값을, 필터행에, 반영하고, 시트를
ALIAS_EN: do, filter
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/do-filter
---
# doFilter ***(method)***

> 주어진 값을 필터행에 반영하고 시트를 필터링 합니다.

> **해당 함수는 반드시 [ShowFilter](/docs/props/cfg/show-filter)를 통해 필터가 보여지는 경우에만 사용이 가능합니다.**

> ;를 통해 필터링 하고 싶은 값들에 대해 or연산을 실행할 수 있습니다(ex |떡볶이;오뎅|...).

> ,를 통해 필터링 하고 싶은 값들에 대해 and연산을 실행할 수 있습니다(ex |떡볶이,오뎅|...).



### Syntax
```javascript
void doFilter( cols , vals , operators , nofilter , noclear );
```

### Parameters
|Name|Type|Required|Description|
|----------|-----|---|----|
|cols|`string`|필수|필터링을 수행할 열들
첫글자를 구분로 열이름과 열이름을 연결한 문자를 구성(ex:"\|DEPTNM\|POSITION\|SALARY" )|
|vals|`string`|필수|필터링 하고 싶은 값
첫글자를 구분로 열이름과 열이름을 연결한 문자를 구성 (ex:"\|총무\|대리\|3500" )|
|operators|`string`|필수|필터링 연산자(숫자)
첫글자를 구분로 열이름과 열이름을 연결한 문자를 구성 (ex:"\|0\|1\|2" )|
|nofilter|`boolean`|선택|실제 필터링은 하지않고 필터행에 글자만 입력시킴 여부
`0(false)`:필터링 실행 (`default`)
`1(true)`:필터링 미실행, 필터행에 글자만 입력|
|noclear|`boolean`|선택|필터행에 `cols`에서 지정하지 않은 열의 값을 지울것인지 여부
`0(false)`:`cols`에서 지정하지 않은 열의 값 삭제 (`default`)
`1(true)`:`cols`에서 지정하지 않은 열의 값 삭제 안함|


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
//deptName 열에 내용중 연구팀으로 끝나는 행과 cardAmt 열의 값이 50000보다 큰 경우의 행만 보여짐
sheet.doFilter("|deptName|cardAmt", "|연구팀|50000", "|9|6");
```

### Read More
- [ShowFilter cfg](/docs/props/cfg/show-filter)
- [clearFilter method](./clear-filter)
- [setFilter method](./set-filter)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|core|8.0.0.27|13 기능 추가|
|core|8.1.0.27|14,15 기능 추가|
