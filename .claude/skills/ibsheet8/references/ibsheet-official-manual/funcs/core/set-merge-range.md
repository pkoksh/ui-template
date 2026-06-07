---
KEY: setMergeRange
KIND: method
PATH: funcs/core/set-merge-range
ALIAS: sheet.setMergeRange, setMergeRange(), 특정, 영역을, 하나의, 셀로, 병합
ALIAS_EN: set, merge, range, combine
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/set-merge-range
---
# setMergeRange ***(method)***
> 특정 영역을 하나의 셀로 병합(`span`)합니다.

> 시작셀(`row1, col1`) 부터 종료셀(`row2, col2`)까지를 사각형 형태로 병합합니다.

> `row2`는 반드시 `row1`보다 아래 위치하고 있어야 하고, `col2`는 반드시 `col1`보다 우측에 위치하여야 합니다.

> **[SearchMode](/docs/props/cfg/search-mode):0에서는 구조 상의 문제로 스크롤 시 병합 상태가 유지되지 않기 때문에 해당 기능이 정상적으로 지원되지 않습니다.** 


###
![병합](/assets/imgs/setMergeRange.png "특정 영역을 병합")
<!-- IMAGE: 스크린샷/예시 이미지 - 병합 -->



### Syntax
```javascript
void setMergeRange( row1, col1, row2, col2 );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|row1 |`object`|필수|병합시작 [데이터 로우 객체](/docs/appx/row-object)|
|col1 |`string`|필수|병합시작 열이름|
|row2 |`object`|필수|병합종료 [데이터 로우 객체](/docs/appx/row-object)|
|col2 |`string`|필수|병합종료 열이름|

### Return Value
***none***

### Example
```javascript
//AR2행부터 AR4행까지 deptCd열부터 empNm열까지 병합
sheet.setMergeRange( sheet.getRowById("AR2"), "deptCd", sheet.getRowById("AR4"), "empNm");
```

### Read More
- [setMergeCancel method](./set-merge-cancel)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
