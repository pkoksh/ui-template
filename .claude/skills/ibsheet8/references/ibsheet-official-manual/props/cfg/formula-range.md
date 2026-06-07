---
KEY: formulaRange
KIND: config-property
PATH: props/cfg/formula-range
ALIAS: 컬럼의, 포뮬러, 동작시, 영역을, 헤더에서
ALIAS_EN: formula, range
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/formula-range
---
# FormulaRange ***(cfg)***

> 컬럼의 포뮬러 동작시 영역을 헤더에서 풋까지 보도록 하는 기능입니다. 

> 기능 사용시 `CanFormula` 의 유무를 확인함. 

> 헤더의 경우, `Def.Row.CalcOrder` 내용을 보지 않으며, `Def.Header.CalcOrder` 에 따로 설정해주어야 합니다.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|데이터 영역까지 포뮬러 동작함. (`default`)|
|`1(true)`|전체 영역에 포뮬러 동작함.|


### Example
```javascript
options.Def: {
    "Row": {
      "CanFormula": 1,
      "CalcOrder": "AAAButton"
    },
    "Filter": {
      CanFormula: 0 // 필터에는 포뮬러 동작 x
    },
    "Foot": {
      CanFormula: 0 // 풋에는 포뮬러 동작 x
    },
    Header: {
      CanFormula: 1,
      CalcOrder: "AAAButton" // 헤더에서 포뮬러를 사용하기 위해서 설정 필요.
    }
  },
options.Cfg = {
    Cfg.FormulaRange = true        // 컬럼의 포뮬러 동작을 전체영역에 볼 수 있도록 함.
};
```

### Read More
- [CanFormula row](/docs/props/row/can-formula)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.23|기능 추가|
