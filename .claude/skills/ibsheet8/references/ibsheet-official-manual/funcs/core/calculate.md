---
KEY: calculate
KIND: method
PATH: funcs/core/calculate
ALIAS: sheet.calculate, calculate(), 시트에, 설정된, 계산을, 따라, 실행합니다
ALIAS_EN: calculate
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/calculate
---
# calculate ***(method)***

> 시트에 설정된 `Formula` 계산을 [Row.CalcOrder](/docs/props/row/calc-order) 에 따라 실행합니다.

> 경우에 따라서 [CanFormula row](/docs/props/row/can-formula)속성을 통해 계산이 이루어져야 할 행만 `1`로 설정하고 나머지 행은 `0`으로 설정한 뒤, 해당 함수를 통해 계산할 수 있습니다.


### Syntax
```javascript
void calculate( render, calconly, fixedonly );
```

### Parameters


|Name|Type|Required|Description|
|----------|-----|---|----|
|render |`boolean`|선택|즉시 화면 반영 여부
해당 기능을 `0(false)`로 사용했을 경우, 작업 마무리 시에 `rerender()`를 실행해야 화면에 반영 됩니다.
`0(false)`:반영 안함
`1(true)`:즉시 반영 (`default`)|
|calconly|`boolean`|선택|`Row.CanFormula = 1` 인 행만 계산할 지 여부
`0(false)`:전체 행 계산 (`default`)
`1(true)`:`Row.CanFormula = 1` 인 행들만 계산|
|fixedonly |`boolean`|선택|`Fiexd` 행들(`Header, Filter, FormulaRow`)만 계산할 지 여부
`0(false)`:전체 행 계산 (`default`)
`1(true)`:`Fiexd` 행들(`Header, Filter, FormulaRow`)만 계산|

### Return Value
***none***

### Example
```javascript
//전체 Formula를 실행하여 결과를 반영한다.
sheet.calculate( true, false );
```

### Read More

- [Formaula appendix](/docs/appx/formula)
- [CanFormula row](/docs/props/row/can-formula)
- [CalcOrder row](/docs/props/row/calc-order)
<!--!
- `[비공개]` [onAfterCalculate event](/docs/events/on-after-calculate)
- `[비공개]` [onBeforeCalculate event](/docs/events/on-before-calculate)
- `[비공개]` [onCalculateCell event](/docs/events/on-calculate-cell)
!-->

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|core|8.0.0.8|`render` 인자 `default` 값 변경(`false -> true`)|
|core|8.0.0.11|`fixedonly` 추가|