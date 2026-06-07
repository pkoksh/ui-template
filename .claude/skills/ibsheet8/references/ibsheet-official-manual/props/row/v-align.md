---
KEY: vAlign
KIND: row-property
PATH: props/row/v-align
ALIAS: 전체의, 문자열, 상하, 정렬을, 설정합니다
ALIAS_EN: align
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/row/v-align
---
# VAlign ***(row)***

> 행 전체의 문자열 상하 정렬을 설정합니다.

> 좌우 정렬과 관련해서는 [Align](./align)속성을 참고하세요.

### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`Top`|문자열 상단 정렬  (Top, TOP, top 허용)|
|`Middle`|문자열 중단 정렬 (Middle, MIDDLE, middle 허용)|
|`Bottom`|문자열 하단 정렬 (Bottom, BOTTOM, bottom 허용)

### Example
```javascript
//특정행의 문자열을 상단 정렬
var row = sheet.getFirstVisibleRow();
row["VAlign"] = "Top";
sheet.refreshRow(row);

//합계 행의 문자열을 하단 정렬.
options.Def.Footer = {"VAlign": "Bottom"};
```

### Read More
- [Align row](./align)
- [VAlign col](/docs/props/col/v-align)
- [VAlign cell](/docs/props/cell/v-align)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
