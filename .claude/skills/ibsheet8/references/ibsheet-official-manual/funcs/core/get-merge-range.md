---
KEY: getMergeRange
KIND: method
PATH: funcs/core/get-merge-range
ALIAS: sheet.getMergeRange, getMergeRange(), 특정, 셀을, 기준으로, 머지된, 영역
ALIAS_EN: get, merge, range
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/get-merge-range
---
# getMergeRange ***(method)***
> 특정 셀을 기준으로 머지된 영역(RowSpan,Span)을 확인합니다.

> 지정한 셀을 기준으로 머지 시작셀(좌측 상단 셀)과 종료셀(우측 하단 셀)을 배열로 리턴합니다.


### Syntax
```javascript
array getMergeRange( row, col);
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|row |`object`|필수|병합기준 [데이터 로우 객체](/docs/appx/row-object)|
|col |`string`|필수|병합기준 열이름|

### Return Value
***object (array[])*** : 머지 시작 행, 머지 시작 열, 머지 종료 행, 머지 종료 열 순차적으로 들어있는 배열 리턴

[시작[데이터 로우 객체](/docs/appx/row-object) , 시작열이름 , 종료[데이터 로우 객체](/docs/appx/row-object) , 종료열이름 ]

*머지되지 않은 셀의 경우 파라미터로 입력한 row와 리턴되는 시작 행,종료 행이 동일하고 마찬가지로 파라미터로 입력한 col과 리턴되는 시작 열,종료 열이 동일합니다.*

### Example
```javascript
//AR2행, deptCd열이 주변과 병합된 경우 병합영역을 리턴
var mergeArr = sheet.getMergeRange( sheet.getRowById("AR2"), "deptCd");

var mergeStartRow = mergeArr[0]; // 머지 시작 행
var mergeStartCol = mergeArr[1]; // 머지 시작 열
var mergeEndRow = mergeArr[2]; // 머지 종료 행
var mergeEndCol = mergeArr[3]; // 머지 종료 열
```

### Read More
- [setMergeRange method](./set-merge-range)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.7|기능 추가|
