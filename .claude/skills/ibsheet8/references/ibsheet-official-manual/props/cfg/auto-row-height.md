---
KEY: autoRowHeight
KIND: config-property
PATH: props/cfg/auto-row-height
ALIAS: 시트에서, 자동, 줄넘김이, 되어, 행의
ALIAS_EN: auto, row, height
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/auto-row-height
---
# AutoRowHeight ***(cfg)***

> [SearchMode:0](/docs/props/cfg/search-mode) 인 시트에서 자동 줄넘김이 되어 행의 높이가 각각 다르게 표현 되는 시트가 동작이 되도록 설정하는 옵션입니다.

> 컬럼 타입 `Lines`, `Html`, `Img`, `Button` 또는 컬럼 속성 [Wrap](/docs/props/col/wrap), [HtmlPrefix](/docs/props/col/html-prefix), [HtmlPostfix](/docs/props/col/html-postfix), [TextSize](/docs/props/col/text-size), `HtmlPrefixFormula`, `HtmlPostfixFormula`, `TextSizeFormula`, [SignFontStyle](/docs/props/col/sign-font-style)중 `TextSize`속성을 사용한 컬럼이 있을 경우에만 사용이 가능합니다.


> **<mark>주의</mark> : 한번 `AutoRowHeight: false` 의 조건으로 생성된 시트에 대해서 `AutoRowHeight: true` 의 조건에 맞게 설정을 변경한 뒤 다시 [rerender](/docs/funcs/core/rerender) 동작을 하더라도 `AutoRowHeight` 옵션 값은 변하지 않습니다. 소스 상 동적으로 해당 속성을 변경하는 경우 시트 내부적으로 충돌이 일어날 수 있습니다.**


### Type
`boolean`


### Options
|Value|Description|
|-----|-----|
|`0(false)`|행 높이 자동 맞춤 기능 사용 안함 (`default`)|
|`1(true)`|SearchMode:0 모드에서 행 높이 자동 맞춤 기능 사용 (사용 조건에 맞지 않을 경우 `false` 로 변경되어 시트 생성)|


### Example
```javascript
options.Cfg{
   //SearchMode:0 시트에서 자동 행 높이 기능 사용
   SearchMode: 0,
   AutoRowHeight: true
   ...
};
```

### Try it
- [True](https://jsfiddle.net/gh/get/library/pure/ibsheet/ibsheet8-manual-sample/tree/master/samples/properties/Cfg/AutoRowHeight-true/)

### Read More
- [SearchMode cfg](/docs/props/cfg/search-mode)
- [Wrap col](/docs/props/col/wrap)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.27|기능 추가|
|core|8.3.0.19|`SignFontStyle`속성 중 `TextSize` 대응 추가|