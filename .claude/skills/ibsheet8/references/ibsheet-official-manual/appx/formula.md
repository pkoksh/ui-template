---
KEY: formula
KIND: appendix
PATH: appx/formula
ALIAS: 계산된, 결과를, 가지는, 셀은, 기본적으로
ALIAS_EN: formula
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/appx/formula
---
# Formula ***(appendix)***
셀의 값(value)이나 속성(글자색,배경색 등)을 주변 열과의 계산을 통해 나온 결과 값으로 설정해 주는 기능입니다.

### 시트의 Formula 기능에는
1. 일반적인 수식계산을 위한 Formula(이하 **일반 Formula**)와
2. 셀의 속성값 변경을 위해 사용되는 Attribute+Formula(이하 **속성 Formula**)가 있습니다.

> Formula로 계산된 결과를 가지는 셀은 기본적으로 편집이 불가능하지만 CanEditFormula를 1로 설정시 편집이 가능합니다.

> Formula 내에서 시트와 데이터 행 객체, 열이름에 대한 접근은 예약어 Sheet, Row, Col을 통해 가능합니다.

> Formula 설정에서 특정 열이름을 사용 시 각 데이터 행 객체 별로 열이름에 해당하는 열의 셀 값을 계산에 사용합니다.

> **Formula에 외부 함수를 단독으로 사용하는 경우 함수는 반드시 값을 리턴해야합니다.**

> Formula는 값이 변경된 경우 다른 셀의 refresh 여부와 상관없이 기본적으로 변경된 값이 화면에 노출됩니다.
>
> * <mark>**Formula를 시트에 적용하기 위해 기본적으로 (row)[CanFormula](/docs/props/row/can-formula) 속성을 설정해야 하며,**</mark>

> * <mark>**attribute+Formula를 사용하는 경우에는  반드시 (row)[CalcOrder](/docs/props/row/calc-order) 속성도 설정해야 합니다.**</mark>

**매우주의 : `attribute+Formula`와 일반 `Formula`를 같이 사용하는 경우에는, 일반 Formula에 대해 `컬럼명`을 `CalcOrder`에 설정해 주어야 합니다.**
>

### Syntax
```Javascript
options.Def = {
    Row: {
        // 일반 행에서 Formula 사용
        CanFormula: 1,
        CalcOrder:"Formula가 선언된 열이름"
    }
};
options.Cols = [
    {
        // 일반 Formula
        "Formula": "주변 열과의 계산을 통해 나온 결과를 해당 셀의 값으로 사용"

        or

        // 속성(Color,TextColor,CanEdit 등)이 대상
        속성명Formula: "속성 값을 설정하기 위한 계산식"
    }
]
```


### Formula 적용 대상
|대상|설명|
|----|----|
|셀 값|셀 값에 들어갈 값을 동적으로 계산합니다.|
|셀 속성|셀의 특정 속성에 설정될 값을 동적으로 계산합니다.|
|열 속성|열의 특정 속성에 설정될 값을 동적으로 계산합니다.|

### Example
```Javascript
    options.Def = {
        Row:{
            // Formula 기능을 사용할지 여부를 설정합니다.
            CanFormula: 1,
            // Formula의 계산 순서를 설정합니다. Formula 사용 시 반드시 CalcOrder는 설정되어야합니다.
            // 열이름 간에 띄어쓰지말고 전부 붙여쓰셔야 합니다.
            CalcOrder:"sCountColor,sMoneyTextColor,sResult,sComment,sGrade"
        }
    };

    options.Cols = [
        {
            Name:"sCount",
            Type:"Int",
            // 화면에 표시될 배경색을 설정하기 위한 Formula
            ColorFormula: 'Value < 0 ? "rgb(245, 226, 24)" : Value == 0 ? "" : "rgb(11, 231, 109)"'
        },
            ...
        {
            Name: "sMoney",
            Type: "Int",
            // 화면에 표시될 텍스트 컬러 속성을 설정하기 위한 Formula
            TextColorFormula: "Value < 3000 ? '#ff0000' : '#f0694e'",
        },
            ...
        {
            Name:"sResult",
            Type:"Float",
            // 값을 설정하기 위한 Formula
            Formula: "sCount * sPrice - (sCount * sPrice * sDiscount) / 100"
        },
            ...
        {
            Name:"sComment",
            Type:"Text",
            // Formula에서 외부 함수 사용의 예시
            Formula: "useFormula1(Sheet,Row,Col)"
        },
            ...
        {
            Name:"sGrade",
            Type:"Text",
            // Formula에서 외부 함수 사용의 예시2
            Formula: useFormula2
        }

    ];

    function useFormula1(fr) {
        //fr 포뮬러 객체  fr.Sheet, fr.Row, fr.Col 로 접근 가능
        var rtnValue = (fr.Row['QT1']+fr.Row['QT2'])/2;
        ...
        //반드시 리턴이 있어야 합니다.
        return rtnValue;
    }
    //obj.Sheet, obj.Row, obj.Col
    function useFormula2(obj) {
        var Value = obj.Row[obj.Col];
        ...
        //반드시 리턴이 있어야 합니다.
        return Value;
    }
```

### Read More

 - [CanFormula Row](/docs/props/row/can-formula)
 - [CalcOrder Row](/docs/props/row/calc-order)
 - [attribute+Formula col](/docs/props/col/attributeformula)
 - [FormulaRow col](/docs/props/col/formula-row)
 - [Formula col](/docs/props/col/formula)
 - [attribute+Formula cell](/docs/props/cell/attribute-formula)
 - [calculate method](/docs/funcs/core/calculate)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
