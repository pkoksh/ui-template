---
KEY: textColor
KIND: row-property
PATH: props/row/text-color
ALIAS: 지정한, 행의, 글자색을, 설정합니다
ALIAS_EN: text, color
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/row/text-color
---
# TextColor ***(row)***

> 지정한 행의 글자색을 설정합니다.


### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|HEX형식 (ex:#FF00F0)
rgb형식 (ex:rgb(244,200,40)|

### Example
```javascript
//특정행의 글자를 붉은색으로 지정합니다..
var row = sheet.getRowById("AR33");
row["TextColor"] = "#FF0000";
sheet.refreshRow(row);

//조회 데이터에서 특정행에 대해 글자를 파란색으로 표시한다.
{"data":[
    ...
    {"TextColor": "#0000FF", "ColName1": "Value1", "ColName2": "Value2", ...},
    ...
]}
```

### Read More
- [TextStyle row](./text-style)
- [TextSize row](./text-size)
- [TextFont row](./text-font)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
