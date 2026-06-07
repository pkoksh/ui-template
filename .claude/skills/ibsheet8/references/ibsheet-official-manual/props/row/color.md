---
KEY: color
KIND: row-property
PATH: props/row/color
ALIAS: 행의, 배경색상을, 설정합니다
ALIAS_EN: color
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/row/color
---
# Color ***(row)***

> 행의 배경색상을 설정합니다.

> 행의 색상은 상태에 따른 배경색상의 영향을 받습니다.

> rgb(255,255,255)는 투명색이 됩니다.

### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|HEX형식 (ex:#FF00F0)
rgb형식 (ex:rgb(244,200,40)|

### Example

```javascript
//특정행의 배경색상을 회색으로 설정한다.
var row = sheet.getRowById("AR11");
row["Color"] = "#ADADAD";
sheet.refreshRow(row);


//조회 데이터 중에 특정행의 배경색을 노란색으로 설정한다.
{"data":[
    ...
    {"Color":"#FFFF00","ColName1":"Value1","ColName2":"Value2", ...},
    ...
]}
```

### Read More
- [AlternateColor row](./alternate-color)
- [TextColor row](./text-color)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
