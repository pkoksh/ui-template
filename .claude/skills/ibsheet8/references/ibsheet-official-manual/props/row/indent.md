---
KEY: indent
KIND: row-property
PATH: props/row/indent
ALIAS: 전체의, 문자열, 들여쓰기를, 설정합니다
ALIAS_EN: indent
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/row/indent
---
# Indent ***(row)***

> 행 전체의 문자열 들여쓰기를 설정합니다.

> 좌측정렬을 하는 셀은 좌측 끝부터, 우측정렬을 하는 셀은 우측 끝부터 들여쓰기가 적용됩니다.

> 들여쓰기 1칸은 `10px` 입니다.

### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|들여쓰기 정도 (10px 단위)|

### Example
```javascript
//특정행의 들여쓰기 정도를 2로 설정
var row = sheet.getRowById("AR11");
row["Indent"] = 2;
sheet.refreshRow(row);

//전체 데이터 행의 들여쓰기를 1로 설정
options.Def.Row = {"Indent": 1};
```

### Read More
- [Align row](./align)
- [Align col](/docs/props/col/align)
- [Align cell](/docs/props/cell/align)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
