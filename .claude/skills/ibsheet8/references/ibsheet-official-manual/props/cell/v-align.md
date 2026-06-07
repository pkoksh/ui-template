---
KEY: vAlign
KIND: cell-property
PATH: props/cell/v-align
ALIAS: 안에, 문자열, 상하, 정렬을, 설정합니다
ALIAS_EN: align
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cell/v-align
---
# VAlign ***(cell)***

> 셀 안에 문자열 상하 정렬을 설정합니다.

> 좌우 정렬과 관련해서는 [Align](./align)속성을 참고하세요.

### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`Top`|문자열 상단 정렬|
|`Middle`|문자열 가운데 정렬|
|`Bottom`|문자열 하단 정렬|


### Example
```javascript
//특정 셀의 문자열을 상단 정렬로 설정
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "VAlign", "Top", 1);
```

### Read More
- [Align cell](./align)
- [VAlign row](/docs/props/row/v-align)
- [VAlign col](/docs/props/col/v-align)


### Since
|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
