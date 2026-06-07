---
KEY: setFormulaRow
KIND: method
PATH: funcs/core/set-formula-row
ALIAS: sheet.setFormulaRow, setFormulaRow(), 합계행, 계산을, 변경, 하거나, 행을
ALIAS_EN: set, formula, row, change, modify
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/set-formula-row
---
# setFormulaRow ***(method)***
> `FormulaRow`(합계행)에 계산을 변경(`Sum,Avg,Min,Max`)하거나 행을 감출수 있습니다.

### Syntax
```javascript
void setFormulaRow( val, cols, visible, render );
```

### Parameters


|Name|Type|Required| Description |
|----------|-----|---|----|
|val |`string`\|`object`|필수|설정할 계산 방식 (`'Sum'`,`'Avg'`,`'Min'`,`'Max'` 중 하나) 
또는 object 형태로 설정시 `{"ColName1":"Sum","ColName2:"Avg"}` 식으로 설정 가능
(object형을 사용시에는 `cols` 인자는 필요 없음)|
|cols |`string`|선택|계산할 열이름(복수개인 경우 ,를 구분자로 연결한 문자열)|
|visible |`boolean`|선택|`FormulaRow` 보임 여부
`0(false)`:`FormulaRow`(합계행) 감춤 (`default`)
`1(true)`:`FormulaRow`(합계행) 보임|
|render |`boolean`|선택|즉시 화면 반영 여부
해당 기능을 `0(false)`로 사용했을 경우, 작업 마무리 시에 `rerender()`를 실행해야 화면에 반영 됩니다.
`0(false)`:반영 안함 (`default`)
`1(true)`:즉시 반영|

### Return Value
***boolean*** : 설정 완료 여부

### Example
```javascript
//합계행에 계산을 평균값으로 변경
sheet.setFormulaRow( "Avg", "AMT1,AMT2", 1, 1 );

//합계행을 감춘다.
sheet.setFormulaRow({visible:0});
```

### Read More
- [setFormulaRowPosition method](./set-formula-row-position)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
