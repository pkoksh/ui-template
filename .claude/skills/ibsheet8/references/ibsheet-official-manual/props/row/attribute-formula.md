---
KEY: attributeFormula
KIND: row-property
PATH: props/row/attribute-formula
ALIAS: 행의, 각종, 속성, 설정할
ALIAS_EN: attribute, formula, property
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/row/attribute-formula
---
# attribute+Formula ***(row)***
> 행의 각종 속성(`CanEdit, TextColor 등`)을 `Formula`를 통해 설정할 수 있습니다.

> 가령 `CanEdit나 Color` 등과 같은 속성을 `Formula`로 지정하여 설정한다는 것은 다음과 같이 선언될 수 있습니다.
>```javascript
> options.Def.Row = [
>   {
>       "CanFormula": true,      //formula를 쓰려면 항상 들어감.
>       "CalcOrder": "Color",    //Color formula를 사용함.
>       "ColorFormula": function (param) {
>           //부서명이 "총무"이면 행 전체 배경색으로 노랑으로 표시한다.
>           if (param.Row["DeptNm"] == "총무") {
>               return "#FFFFDD";
>           }
>        }
>   }
> ];
> ```
> `※**매우중요**`

> 1. 모든 포뮬러 기능을 사용시에는 [**CanFormula** row](/docs/props/row/can-formula)가 1로 설정되어야 동작합니다.
> 2. `attribute+Formula(row)` 사용시에는 반드시 [**CalcOrder** row](/docs/props/row/calc-order)에 `속성명`을 계산 순서대로 설정 해야 합니다. 

> 가령 `CanEdit`속성 포뮬러와 `Color`속성 포뮬러를 설정했다면, `CalcOrder`에는 `"CanEdit,Color"`로 명시하면 됩니다. 
> 3. **`CalcOrder` 설정시 이름들은 반드시 띄어쓰기 없이 서로 붙여 작성해주셔야 됩니다. 이름들 간에 띄어쓰기가 되어 있는 경우 Formula 동작이 정상적으로 이뤄지지 않습니다.** 

### Type
`function`

### Options
|Value|Description|
|-----|-----|
|`Sheet`|해당 시트 객체|
|`Row`|`formula`가 동작할 행 객체|
|`Attr`|`formula`를 적용할 속성(`Color`, `CanEdit` 등)|


### Example
```javascript
//formula 사용시 CanFormula:1이 설정 되어야 하고, attribute+Formula 사용시에는 CalcOrder도 설정되어야 함
options.Def.Row = {
    CanFormula: 1,                //formula를 사용하려면 반드시 설정되어야 함.
    // CalcOrder 설정시 속성 이름 간에 띄어쓰지 말고 전부 붙여 쓰셔야 합니다.
    CalcOrder: "Color,CanEdit",  //적용할 속성을 순서대로 설정
    CanEditFormula: function (param) {
        //결산여부가 체크된 행에 대해서는 편집 불가
        if (param.Row["FinishedYN"]) {
            return 0;
        }
    },
    ColorFormula:function(param) {
        //부서가 회계인 경우 배경색을 "#FFFFDD"로 설정
        if(param.Row["DeptCd"] == "1B"){
            return "#FFFFDD";
        }
    }
};

options.Cols = [
    ...
    {Header:"결산완료 여부", Type:"Bool", Name:"FinishedYN"},
    {Header:"부서", Type:"Enum", Name:"DeptCd", Enum:"|총무|회계|인사|영업|개발", EnumKeys:"|2A|1B|C9|B4|D0"},
    ...
];
```

### Read More
- [CanFormula row](/docs/props/row/can-formula)
- [CalcOrder row](/docs/props/row/calc-order)
- [attrbute+formula col](/docs/props/col/attribute-formula)
- [Formula appendix](/docs/appx/formula)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
