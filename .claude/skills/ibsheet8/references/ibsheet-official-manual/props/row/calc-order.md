---
KEY: calcOrder
KIND: row-property
PATH: props/row/calc-order
ALIAS: 포뮬러, 일반, 혹은, 설정된, 열들에
ALIAS_EN: calc, order
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/row/calc-order
---
# CalcOrder ***(row)***

> 포뮬러(`일반 혹은 attribute+Formula`)가 설정된 열들에 대해서 계산 순서를 구분자 ","로 연결한 문자열로 정의합니다.

>
> 열에 [attribute + Formula](/docs/props/col/attribute-formula)를 설정시에는 반드시 **CalcOrder** 에 `열이름+attribute명`(ex: "SalaryCanEdit") 로 설정해야 하며, 수식계산만 하는 열의 경우 열이름만 넣으면 됩니다.

>
> `**※매우중요**`

> 1. 일반 Formula(수식계산)만 사용하는 시트에서는 **CalcOrder**를 사용하지 않아도 `Formula`가 동작하지만 [attribute + Formula](/docs/props/col/attribute-formula)를 일반 `Formula`와 같이 사용하는 경우엔, 일반 `Formula`도 반드시 **CalcOrder**에 정의(열이름을 명시)를 해야만 동작합니다.
> 2. **`CalcOrder` 설정시 이름들은 반드시 띄어쓰기 없이 서로 붙여 작성해주셔야 됩니다. 이름들 간에 띄어쓰기가 되어 있는 경우 Formula 동작이 정상적으로 이뤄지지 않습니다.**

### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|계산 순서에 맞게 열이름(또는 열이름+속성명)을 ","를 구분자로 연결한 문자열|



### Example
```javascript
//SubTotal, Total에 대해 Formula가 동작하고, SubTotal의 ColorFormula와 Total에 TextColorFormula가 다음으로 동작됨.
options.Def.Row = { CalcOrder: "SubTotal,Total,SubTotalColor,TotalTextColor" };
options.Cols = [
    {Type:"Int", Name:"QT1"},
    {Type:"Int", Name:"QT2"},
    {Type:"Int", Name:"SubTotal", Formula:QT12SUM, ColorFormula:STColur},
    {Type:"Int", Name:"QT3"},
    {Type:"Int", Name:"QT4"},
    {Type:"Int", Name:"Total", Formula:TOTSUM, TextColorFormula:TOTTextColur},
];

function QT12SUM(fr){
    return fr.Row["QT1"] + fr.Row["QT2"];
}
function TOTSUM(fr){
    return fr.Row["QT1"] + fr.Row["QT2"] + fr.Row["QT3"] + fr.Row["QT4"];
}
function STColur(fr){
    return fr.Value > 500 ? "#FF0000" : "#333333";
}
function TOTTextColur(fr){
    if (fr.Value > 1000) {
        return '#FF0000';
    } else {
        return '#333333';
    }
}
```

### Read More

- [CanFormula row](./can-formula)
- [Formula col](/docs/props/col/formula)
- [attribute+Formula col](/docs/props/col/attribute-formula)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
