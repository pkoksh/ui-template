---
KEY: addFormula
KIND: method
PATH: funcs/core/add-formula
ALIAS: sheet.addFormula, addFormula(), 특정, 셀에, 포뮬러를, 추가합니다
ALIAS_EN: add, formula
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/add-formula
---
# addFormula ***(method)***

> 특정 행, 열, 셀에 포뮬러를 추가합니다.

> `row`와 `col`이 없는 경우 전체 데이터에 포뮬러를 추가합니다.

> 해당 기능 사용 시 [CanFormula](/docs/props/row/can-formula)가 자동적으로 true로 설정됩니다.

> [CalcOrder](/docs/props/row/calc-order)에 설정한 포뮬러가 순차적으로 추가됩니다.

> 자세한 내용은 7장 [Formula appendix](/docs/appx/formula)를 참고하세요.
<!--!
> `[비공개 설명]` [CalcOrder](/docs/props/row/calc-order)가 def에 설정되어 있으면 def에, 로우 객체에 설정되어 있으면 로우객체에 추가됩니다.
!-->

### Syntax
```javascript
boolean addFormula( formula, row, col, attr, render );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|formula|`function` \| `string`|필수|추가하고자 하는 포뮬러|
|row |`object` \| `array[object]`|선택|[데이터 로우 객체](/docs/appx/row-object) 또는 [데이터 로우 객체](/docs/appx/row-object) 배열|
|col |`string`|선택|열 이름|
|attr|`string`|선택|추가하려는 [attribute + Formula](/docs/props/col/attribute-formula)의 속성명|
|render|`boolean`|선택|즉시 화면 반영 여부
해당 기능을 `0(false)`로 사용했을 경우, 작업 마무리 시에 `rerender()`를 실행해야 화면에 반영 됩니다.
`0(false)`:반영 안함
`1(true)`:즉시 반영 (`default`)|

### Return Value
***boolean*** : 함수 정상 동작 여부. (인자값이 잘못되어 수행되지 못한 경우에는 false 리턴)

### Example
```javascript
// 컬럼 추가 후 Formula 도 동적으로 추가
sheet.addCol( "IntData", 0, -1, {Type:"Int",Header:"추가Int컬럼",Width:200,CanEdit:1}, true);

var colorFormula = function (param) {
    if (param.Row && param.Row["IntData"] === 0) {
        return "#FFD9FA"
    }
}
// 데이터 행의 배경색을 조건에 따라 변경
sheet.addFormula(colorFormula, "", "", "Color");

////////////////////////////////////////////
var Formula = function (param) {
    if (param.Row["IntData"] > 100) {
        return true
    } else {
        return false
    }
}
// IntData의 값에 따라 체크박스 열의 체크 변경
sheet.addFormula(Formula, "", "CheckData", "", true);

////////////////////////////////////////////
// 시트의 첫번째 행의 TextData 열에 값을 IntData 열과 FloatData 열의 합으로 변경
sheet.addFormula("IntData + FloatData", sheet.getFirstRow(), "TextData", "", true);
```

### Read More
- [Formula appendix](/docs/appx/formula)
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
|core|8.2.0.4|기능 추가|
