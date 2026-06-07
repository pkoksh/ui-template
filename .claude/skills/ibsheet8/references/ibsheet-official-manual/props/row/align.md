---
KEY: align
KIND: row-property
PATH: props/row/align
ALIAS: 전체의, 문자열, 정렬을, 설정합니다
ALIAS_EN: align
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/row/align
---
# Align ***(row)***

> 행 전체의 문자열 정렬을 설정합니다.

> 트리 또는 그룹에서 사용할 때는 기준으로 지정된 컬럼(**트리의 접힘/펼침 아이콘이 보이는 컬럼**)의 데이터영역은 `Align`이 먹지 않습니다. 

> 일반적으로 데이터 행보다는 헤더 행에서 사용됩니다.

### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`Left`|문자열 왼쪽 정렬  (Left, LEFT, left 허용)|
|`Center`|문자열 가운데 정렬 (Center, CENTER, center 허용)|
|`Right`|문자열 오른쪽 정렬 (Right, RIGHT, right 허용)

### Example
```javascript
// 특정 행의 문자열을 가운데 정렬
var row = sheet.getFirstVisibleRow();
row["Align"] = "Center";
sheet.refreshRow(row);

// 전체 헤더 행에 대해 문자열을 가운데 정렬.
options.Def.Header = {"Align": "CENTER"};
```

### Read More
- [Align col](/docs/props/col/align)
- [Align cell](/docs/props/cell/align)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
