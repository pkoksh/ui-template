---
KEY: canFormula
KIND: row-property
PATH: props/row/can-formula
ALIAS: 행에, 동작, 여부를, 설정합니다
ALIAS_EN: can, formula
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/row/can-formula
---
# CanFormula ***(row)***

> 행에 `Formula` 동작 여부를 설정합니다.

> `0(false)`으로 설정하면 `Formula` 설정된 셀 값에 변경이 있어도 계산이 이루어지지 않습니다.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|`Formula` 동작 안함|
|`1(true)`|`Formula` 동작 가능|


### Example
```javascript
//전체 데이터행에 대해서 Formula를 수행하지 않는다.
//(특정 행에 대해서 따로 CanFormula를 작성한 뒤, (method)calculate()함수를 통해 필요할때만 Formula를 수행할 수도 있음.)
options.Def.Row = {CanFormula: 0};

or

//전체 데이터행에 대해서 Formula을 허용한다.
options.Def.Row = {CanFormula: 1};
... 시트 생성 ...



//조회 이후 특정 시점에서 특정 행에만 Formula동작
sheet.getRowById("AR3")["CanFormula"] = 1;
sheet.getRowById("AR5")["CanFormula"] = 1;

//formula를 계산한다.
sheet.calculate(1, 1);
```

### Read More

- [CalcOrder row](./calc-order)
- [calculate method](/docs/funcs/core/calculate)
- [Formula appendix](/docs/appx/formula)
<!--!
- `[비공개]` [onAfterCalculate event](/docs/events/on-after-calculate)
- `[비공개]` [onBeforeCalculate event](/docs/events/on-before-calculate)
- `[비공개]` [onCalculateCell event](/docs/events/on-calculate-cell)
!-->

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
