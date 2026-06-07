---
KEY: getRowsByDup
KIND: method
PATH: funcs/core/get-rows-by-dup
ALIAS: sheet.getRowsByDup, getRowsByDup(), 내에, 중복된, 데이터를, 가진, 데이터
ALIAS_EN: get, rows, by, dup, data
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/get-rows-by-dup
---
# getRowsByDup ***(method)***

> 열 내에 중복된 데이터를 가진 [데이터 로우 객체](/docs/appx/row-object)들을 리턴합니다.

> 여러 개의 열이름을 설정 시 열이름에 해당하는 열들의 셀 값이 모두 같은 경우에만 [데이터 로우 객체](/docs/appx/row-object)를 반환합니다.


### Syntax
```javascript
object getRowsByDup( cols, firstOnly, emptyVal, subsum, exceptStatus );
```

### Parameters
|Name|Type|Required|Description|
|----------|-----|---|----|
|cols|`string`|필수|비교할 대상이 되는 열이름
 ","를 구분자로 사용하여 복수 개의 열이름들을 지정 가능|
|firstOnly|`boolean`|선택|처음으로 중복된 행을 반환할지 여부
 설정 시 가장 먼저 중복된 행을 리턴합니다(원래 값을 가지는 [데이터 로우 객체](/docs/appx/row-object), 중복된 [데이터 로우 객체](/docs/appx/row-object)로 이루어진 배열).
`0(false)`:처음으로 중복된 행 반환 사용 안함 (`default`)
`1(true)`:처음으로 중복된 행 반환 사용|
|emptyVal|`boolean`|선택|"", undefined, null 값을 가지는 행을 비교 대상에 포함할지 여부
`0(false)`:중복된 값 비교 대상에 "", undefined, null 값을 가진 행을 포함 안함 (`default`)
`1(true)`:중복된 값 비교 대상에 "", undefined, null 값을 가진 행을 포함|
|subsum|`boolean`|선택|중복된 값 비교할 때 소계행을 사용할 지 여부
`0(false)`:중복된 값 비교대상에 소계행 포함 안함 (`default`)
`1(true)`:중복된 값 비교대상에 소계행 포함|
|exceptStatus|`string`|선택|비교대상에서 제외할 행의 상태
 ","를 구분자로 사용하여 복수 개의 상태값들을 지정 가능|


### Return Value
***array[row object]*** : 중복된 값을 가지는 [데이터 로우 객체](/docs/appx/row-object)들의 배열의 배열(각기 다른 중복된 값 마다 생성된 [데이터 로우 객체](/docs/appx/row-object)들의 배열)

### Example
```javascript
// sName, sSalary의 열이 서로 같은 값을 가지는 데이터 로우 객체들의 배열의 배열을 리턴합니다.
// ex) [ [r1, r2...] [r5, r9...] ]
// r1과 r2는 sName, sSalary의 값이 같습니다. r5과 r9..는 sName, sSalary의 값이 같습니다.
// Added, Deleted 상태의 로우 객체는 제외하여 리턴합니다.
sheet.getRowsByDup( "sName,sSalary" , false, false, false, "Added,Deleted" );
```

### Read More


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|core|8.0.0.8|exceptStatus 기능 추가|
