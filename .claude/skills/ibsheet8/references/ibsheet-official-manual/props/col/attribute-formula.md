---
KEY: attributeFormula
KIND: column-property
PATH: props/col/attribute-formula
ALIAS: 열의, 각종, 속성, 설정할
ALIAS_EN: attribute, formula, property
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/attribute-formula
---
# attribute+Formula ***(col)***
> 열의 각종 속성(`CanEdit, TextColor` 등)을 `Formula`를 통해 설정할 수 있습니다.

> 가령 `CanEdit, Color` 등과 같은 속성을 `Formula`로 지정하여 설정한다는 것은 다음과 같이 선언될 수 있습니다.
> ```js
> options.Cols = [
>   {Type:"Text", Name:"Total",
>       CanEditFormula:"CHK==1&&AMT>10?1:0",
>       ColorFormula:"Value>10000 ? '#FF0000':'#FFFF00'",
>       FormatFormula:function(param){
>           if(param.Row["SaupJuminNo"].length == 10){
>               return "###-##-#####";
>           }else{
>                return "######-#######";
>            }
>       }
>   }
> ];
> ```
> `※**매우중요**`

> 1. 모든 포뮬러 기능을 사용시에는 (row)[**CanFormula**](/docs/props/row/can-formula)가 1로 설정되어야 동작합니다.
> 2. `attribute+Formula` 사용시에는 반드시 (row)[**CalcOrder**](/docs/props/row/calc-order)에 `열이름+기능명` 형식으로 포뮬러별 계산 순서가 정의되어야 합니다. 

>가령 "A"열에 대해 `CanEdit`속성 포뮬러를 설정하고 "B"열에 대해 `Color`속성 포뮬러를 설정했다면,  [**CalcOrder**](/docs/props/row/calc-order)에는 "ACanEdit,BColor"로 명시하면 됩니다.
> 3. **`CalcOrder` 설정시 이름들은 반드시 띄어쓰기 없이 서로 붙여 작성해주셔야 됩니다. 이름들 간에 띄어쓰기가 되어 있는 경우 Formula 동작이 정상적으로 이뤄지지 않습니다.**

### Type
mixed( `function` \| `string` )

### Options
|Value|Description|
|-----|-----|
|`string`|열이름을 기준으로 한 계산 로직 (ex: `"sCount \* sPrice - ( Discount \* Rate ) \* 1.24"`)|
|`function`|별도 함수를 통해 계산 가능(함수 내에서는 `Sheet`,`Row`,`Col`,`Attr` 예약어를 통해 접근 가능)|


### Example
```javascript
// formula 사용시 CanFormula:1이 설정 되어야 하고, attribute+Formula사용시에는 CalcOrder도 설정되어야 함
options.Def.Row = {
    CanFormula: 1,
    CalcOrder: "yearSumColor,rateCanEdit" // 열이름 간에 띄어쓰지말고 전부 붙여쓰셔야 합니다.
};
options.Cols = [
    ...
    {Type: "Bool" Name: "CHK"},
    // 해당 열의 값이 100보다 큰 경우 붉은색 그렇지 않은 경우 옅은노란색으로 배경색이 자동 변경
    {Type: "Int",  Name: "yearSum",
        ColorFormula:function(fr){
            return fr.Value>100?'#FF0000':'#FFFFAA';
        }
    },
    // CHK 열이 체크되어있고, yearSum열의 값이 150보다 큰 경우에만 편집이 가능
    {Type: "Float", Name: "rate",
        CanEditFormula:function(fr) {
            if (fr.Row["CHK"] == 1 && fr.Row["yearSum"] > 150)
                return true;
            else
                return false;
        }
    },
    ...
];
```

### Try it
- [Demo of attribute+Formula](https://jsfiddle.net/gh/get/library/pure/ibsheet/ibsheet8-manual-sample/tree/master/samples/properties/Col/attributeFormula/)

### Read More
- [CanFormula row](/docs/props/row/can-formula)
- [CalcOrder row](/docs/props/row/calc-order)
- [attribute+formula row](/docs/props/row/attribute-formula)
- [Formula appendix](/docs/appx/formula)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
