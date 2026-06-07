---
KEY: calcMergeMode
KIND: config-property
PATH: props/cfg/calc-merge-mode
ALIAS: 혹은, 사용시, 머지된, 셀을, 각각
ALIAS_EN: calc, merge, mode
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/calc-merge-mode
---
# CalcMergeMode ***(cfg)***
> [makeSubTotal](/docs/funcs/core/make-sub-total) 혹은 [FormulaRow](/docs/props/col/formula-row) 사용시 머지된 셀을 각각 병합된 하나의 데이터로 계산하도록 기능입니다.

> ~~주의 : SearchMode:0 모드에서 사용시 소계 값에 오류가 있을 수 있습니다~~ (8.0.0.8 버전에서 개선) 


> 사용자 입력에 의해 셀 값을 변경하거나 [setValue](/docs/)로 셀 값 변경 시 [SearchMode](/docs/props/cfg/search-mode)에 따라 [MergeCellsMatch](/docs/props/cfg/merge-cells-match) 혹은 [EditAutoMerge](/docs/props/cfg/edit-auto-merge) 를 반드시 설정해주어야 합니다. 
 
> 1. `SearchMode:0/3`: `MergeCellsMatch:1`설정 시 값 편집 시에도 정확한 값 계산 가능
> 2. `SearchMode:1/2`: `EditAutoMerge:1` 혹은 `MergeCellsMatch:1`설정 시 값 편집 시에도 정확한 값 계산 가능

###
[CalcMergeMode: 0 설정시] 

![다운로드](/assets/imgs/nonCalcMergeMode.png)
<!-- IMAGE: 스크린샷/예시 이미지 - 다운로드 --> 


[CalcMergeMode: 1 설정시] 

![다운로드](/assets/imgs/CalcMergeMode.png)
<!-- IMAGE: 스크린샷/예시 이미지 - 다운로드 --> 


### Type
`number`

### Options
|Value|Description|
|-----|------|
|`0`|소계, FormulaRow사용 시 머지가 된 셀도 Row별 값 계산 (`default`)|
|`1`|소계 계산시 머지된 셀을 하나의 값으로 계산([makeSubTotal](/docs/funcs/core/make-sub-total)만 적용)|
|`2`|FormulaRow계산 시 머지된 셀을 하나의 값으로 계산 ([FormulaRow](/docs/props/col/formula-row)만 적용)|
|`3`|FormulaRow와 소계 계산시 머지가 된 셀을 하나의 값으로 계산(둘다 적용)|

### Example
```javascript
options.Cfg = {CalcMergeMode: 1};
sheet.makeSubTotal({...});
```

### Read More
- [makeSubTotal method](/docs/funcs/core/make-sub-total)
- [FormulaRow col](/docs/props/col/formula-row)
- [SearchMode](/docs/props/cfg/search-mode)
- [EditAutoMerge](/docs/props/cfg/edit-auto-merge)
- [MergeCellsMatch](/docs/props/cfg/merge-cells-match)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.5|기능 추가|
|core|8.0.0.8|SearchMode:0에서 동작하게 수정|
|core|8.0.0.11|CalcMergeMode: 2/3 추가|