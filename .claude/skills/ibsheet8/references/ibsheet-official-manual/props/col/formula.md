---
KEY: formula
KIND: column-property
PATH: props/col/formula
ALIAS: 간에, 계산, 로직을, 문자열이나, 함수를
ALIAS_EN: formula
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/formula
---
# Formula ***(col)***
> 열 간에 계산 로직을 문자열이나 함수를 통해 설정합니다. 

> 함수 형태로 `Formula`를 설정시에는 반드시 `return값`이 있어야 반영됩니다.

>
> ※**매우중요**

> 1. 모든 포뮬러 기능을 사용시에는 (row)[**CanFormula**](/docs/props/row/can-formula)가 1로 설정되어야 동작합니다.
> 2. 열 간의 계산의 순서를 정하기 위해 반드시 (row)[**CalcOrder**](/docs/props/row/calc-order)를 정의해야 합니다.
>
> `Formula`로 설정한 기능은 조회되거나, 연관된 열의 값이 사용자의 편집에 의해 변경될 때 자동으로 계산,적용됩니다.

> 특히 Formula를 통해 값이 변경되는 것도 Formula를 일으키므로 자신의 컬럼값을 Formula를 통해 수정하는 것은 권장하지 않습니다.(Formula에 의해 수정되면서 다시 Formula가 발생하여 무한루프에 빠질수 있음)

> 자세한 내용은 7장 [Formula appendix](/docs/appx/formula)를 참고하세요.


### Type
`mixed`( `function` \| `string` )

### Options
|Value|Description|
|-----|-----|
|`string`|열이름을 기준으로 한 계산 로직 (ex: "sCount \* sPrice - ( Discount \* Rate ) \* 1.24")|
|`function`|별도 함수를 통해 계산 가능(함수 내에서는 `Sheet, Row, Col` 예약어를 통해 접근 가능)|

### Example
```javascript
//                           yearSum열이 먼저 계산되고 total열이 계산됨.
options.Def.Row = {CanFormula: 1, CalcOrder: "yearSum,total"};
options.Cols = [
    ...
    {Type: "Int", Name: "qt1", Width: 120 ...},
    {Type: "Int", Name: "qt2", Width: 120 ...},
    {Type: "Int", Name: "qt3", Width: 120 ...},
    {Type: "Int", Name: "qt4", Width: 120 ...},
    {Type: "Int", Name: "yearSum",
        Formula:function(fr){
            return fr.Row["qt1"] + fr.Row["qt2"] + fr.Row["qt3"] + fr.Row["qt4"];
        }
    },
    {Type: "Float", Name: "rate"},
    {Type: "Float", Name: "total",
        Formula:function(fr){
            return fr.Row["yearSum"] * fr.Row["rate"];
        }
    },
    ...
];
```

### Try it
- [Demo of Formula](https://jsfiddle.net/gh/get/library/pure/ibsheet/ibsheet8-manual-sample/tree/master/samples/properties/Col/Formula/)

### Read More
- [CanFormula row](/docs/props/row/can-formula)
- [CalcOrder row](/docs/props/row/calc-order)
- [attribute+Formula appendix](/docs/props/col/attribute-formula)
- [Formula appendix](/docs/appx/formula)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
