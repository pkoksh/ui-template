---
KEY: attributeFormula
KIND: cell-property
PATH: props/cell/attribute-formula
ALIAS: 셀에, 설정, 가능한, 여러가지, 속성
ALIAS_EN: attribute, formula, config, setting, option, property
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cell/attribute-formula
---
# attribute+Formula ***(cell)***
> 셀에 설정 가능한 여러가지 속성(`CanEdit, Color 등`)을 Formula문자열과 결합하여 계산에 따라 속성 값이 적용되게 끔 할수 있습니다.

> 자세한 내용은 `col` 설정에서 [attribute + Formula](/docs/props/col/attribute-formula)을 참고해 주세요.

>
> `※**매우중요**`

> 1. 모든 포뮬러 기능을 사용시에는 (row)[**CanFormula**](/docs/props/row/can-formula)가 `1`로 설정되어야 동작합니다.
> 2. `attribute + Formula` 사용시에는 반드시 (row)[**CalcOrder**](/docs/props/row/calc-order)에 `열이름+기능명` 형식으로 포뮬러별 계산 순서가 정의되어야 합니다. 

>가령 "A"열에 대해 `CanEdit`속성 포뮬러를 설정하고 "B"열에 대해 `Color`속성 포뮬러를 설정했다면,  `CalcOrder`에는 "ACanEdit,BColor"로 명시하면 됩니다. 
> 3. **`CalcOrder` 설정시 이름들은 반드시 띄어쓰기 없이 서로 붙여 작성해주셔야 됩니다. 이름들 간에 띄어쓰기가 되어 있는 경우 Formula 동작이 정상적으로 이뤄지지 않습니다.**

### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|각 속성에 들어갈 값을 계산하는 계산식|


### Example
```javascript
// 생성시 CalcOrder 정의
options.Def.Row = {
    // 열이름 간에 띄어쓰지말고 전부 붙여쓰셔야 합니다.
    CalcOrder: "CLSCanEdit,CLSColor"
};

// 조회 데이터 내에서 속성 적용
// CHK열의 값이 false 이면 CLS 열은 편집 불가
// AMT열의 값이 4000 보다 크면 CLS 열에 핑크색 배경색 적용
{
    data:[
        {..., "CLSCanEditFormula": "CHK?1:0", "CLSColorFormula": "AMT>4000?'#FFDDDD':''", ...}
    ]
}
```

### Read More
- [CanFormula row](/docs/props/row/can-formula)
- [CalcOrder row](/docs/props/row/calc-order)
- [Formula appendix](/docs/appx/formula)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
