---
KEY: formulaRowNoFiltered
KIND: config-property
PATH: props/cfg/formula-row-no-filtered
ALIAS: 필터링되어, 보이지, 않는, 로우를, 합계
ALIAS_EN: formula, row, no, filtered, total, sum
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/formula-row-no-filtered
---
# FormulaRowNoFiltered ***(cfg)***

> 필터링되어 보이지 않는 로우를 합계 행 계산에 제외할 지 여부를 설정합니다.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|계산에 포함시킨다. (`default`)|
|`1(true)`|계산에 포함시키지 않는다.|


### Example
```javascript
options.Cfg = {
    FormulaRowNoFiltered: true // 필터링되어 안보이는 로우를 합계 계산에서 제외합니다.
};
```

### Read More
- [ShowFilter cfg](./show-filter)
- [showFilterRow method](/docs/funcs/core/show-filter-row)
- [FormulaRow col](/docs/props/col/formula-row)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.6|기능 추가|
