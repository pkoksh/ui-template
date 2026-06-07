---
KEY: setMergeCancel
KIND: method
PATH: funcs/core/set-merge-cancel
ALIAS: sheet.setMergeCancel, setMergeCancel(), 셀의, 병합, 취소
ALIAS_EN: set, merge, cancel, combine
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/set-merge-cancel
---
# setMergeCancel ***(method)***
> 셀의 병합(`span`)을 취소 합니다.

> **[SearchMode](/web-service/manuals/ibsheet8/-/wikis/docs/props/cfg/search-mode):0에서는 구조 상의 문제로 스크롤 시 병합 상태가 유지되지 않기 때문에 해당 기능이 정상적으로 지원되지 않습니다.** 


### Syntax
```javascript
void setMergeCancel( row, col );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|row |`object`|필수|병합 된 [데이터 로우 객체](/docs/appx/row-object)|
|col |`string`|필수|병합 된 열이름|


### Return Value
***none***

### Example
```javascript
//병합된 셀을 다시 분리(split) 함
sheet.setMergeCancel( sheet.getRowById("AR2"), "deptCd");
```

### Read More
- [setMergeRange method](./set-merge-range)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
