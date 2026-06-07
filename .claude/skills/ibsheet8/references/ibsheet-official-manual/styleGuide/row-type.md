---
KEY: rowType
KIND: style-guide
PATH: styleGuide/row-type
ALIAS: 행의, 유형에, 따른, 적용
ALIAS_EN: row, type
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/styleGuide/row-type
---
# 행의 유형에 따른 class 적용

## 소계, 합계 행

합계 행은 `options.Def.FormulaRow`를 통해 제어가 가능합니다.

```javascript
var OPT = {
  Def: {
    FormulaRow: {
      ...
    }
  }
}
```

### <strong>.IBFormulaRow, .IBFormulaRow *</strong>
`.IBFormulaRow, .IBFormulaRow *`은 Formula 행을 관리하는 클래스입니다.

css보다 `options.Def.Formula`의 설정이 우선적으로 적용됩니다.

```css
.IBFormulaRow, .IBFormulaRow * {
  /* 배경색 적용 */
  background-color: #d8f2dd;
  /* 글자색 적용 */
  color: tomato;
}
```

|기본 테마|커스텀 적용|
|-----|-----|
|기본 테마의 FormulaRow (합계행)
![기본 테마의 FormulaRow](/assets/imgs/styleguide_formularow_default.png "기본 테마의 FormulaRow")
<!-- IMAGE: 스크린샷/예시 이미지 - 기본 테마의 FormulaRow -->|커스텀 FormulaRow
![커스텀 FormulaRow 적용](/assets/imgs/styleguide_formularow_custom.png "커스텀 FormulaRow 적용")
<!-- IMAGE: 스크린샷/예시 이미지 - 커스텀 FormulaRow 적용 -->|

<mark>소계와 누계 행은 css를 통해 관리되는 것이 아니라, 시트의 기능을 통해 관리됩니다.</mark>

소계와 누계행은 `Def.SubSum`을 통해 제어가 가능하며, [makeSubTotal func](/docs/funcs/core/make-sub-total)에서 `color`속성을 통해 **소계행의 배경색**을, `cumulateColor`속성을 통해 **누계행의 배경색**을 설정하여 사용하실 수 있습니다.

```javascript
var OPT = {
  Def: {
    SubSum: {
      ...
    }
  }
}
```

```javascript
sheet.makeSubTotal([
  {
    stdCol: 'sPolicy',
    sumCols: 'A|B|C|D',
    color: '#dbe2eb', // 소계행 배경색
    cumulateColor: '#b2c4d9', // 누계행 배경색
    captionCol: [
      {
        col: 'sPolicy',
        val: '%s: %col',
        cumVal: '%s: %col',
        span: 3
      }
    ],
    showCumulate: 1,
    position: 'bottom'
  }
]);
```

기본 테마의 소계/누계 행

![기본 테마의 소계/누계 행](/assets/imgs/styleguide_subtotal_default.png "기본 테마의 소계/누계 행")
<!-- IMAGE: 스크린샷/예시 이미지 - 기본 테마의 소계/누계 행 -->

커스텀 소계/누계 행

![커스텀 소계/누계 행 적용](/assets/imgs/styleguide_subtotal_custom.png "커스텀 소계/누계 행 적용")
<!-- IMAGE: 스크린샷/예시 이미지 - 커스텀 소계/누계 행 적용 -->

* * *

## 그룹 행
<mark>그룹 행은 css를 통해 관리되는 것이 아니라, 시트의 기능을 통해 관리됩니다.</mark>

그룹 행은 `options.Def.Group`을 통해 제어가 가능합니다.

```javascript
var OPT = {
  Def: {
    Group: {
      ...
    }
  }
}
```
* * *

## 필터행
<mark>필터 행은 css를 통해 관리되는 것이 아니라, 시트의 기능을 통해 관리됩니다.</mark>

필터 행은 `options.Filter`를 통해 제어가 가능합니다.

```javascript
var OPT = {
  Filter: {
    ...
  }
}
```