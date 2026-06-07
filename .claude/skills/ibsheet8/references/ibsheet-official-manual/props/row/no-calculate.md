---
KEY: noCalculate
KIND: row-property
PATH: props/row/no-calculate
ALIAS: 특정행에, 소계, 또는, 합계, 계산
ALIAS_EN: no, calculate, subtotal, total, sum
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/row/no-calculate
---
# NoCalculate ***(row)***
> 특정행에 대한 소계 또는 합계 계산 포함 여부를 설정합니다.

> `1(true)`로 설정시 해당 행은 소계 또는 합계 계산에 포함되지 않습니다.

> 동적으로 속성을 추가한 후 셀 값을 변경할 경우 `NoCalculate: 1(true)` 행을 제외하고 소계가 재계산됩니다


> **<mark>주의</mark> : 소계행을 [refreshRow](/docs/funcs/core/refresh-row) 하는 것으로는 소계 재계산이 이루어지지 않습니다**

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|소계/합계 계산 포함 (`default`)|
|`1(true)`|소계/합계 계산 제외|


### Example
```javascript
// 특정행들은 소계/합계 계산에 포함되지 않는다
{"data":[
    ...
    {"NoCalculate":1,"ColName1":"Value1","ColName2":"Value2", ...},
    ...
]}
```

### Read More
- [makeSubTotal method](/docs/funcs/core/make-sub-total)
- [setFormulaRow method](/docs/funcs/core/set-formula-row)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.7|기능 추가|
