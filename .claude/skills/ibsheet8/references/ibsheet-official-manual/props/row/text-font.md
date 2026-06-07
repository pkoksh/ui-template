---
KEY: textFont
KIND: row-property
PATH: props/row/text-font
ALIAS: 특정행의, 설정합니다
ALIAS_EN: text, font
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/row/text-font
---
# TextFont ***(row)***

> 특정행의 `font-family`를 설정합니다.

> 여러개 폰트를 지정하거나 폰트에 띄어씌기가 들어가는 경우에는 `single(')/double quotation("")`으로 지정합니다.
### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|글자체|

### Example
```javascript
//특정행의 글자체를 수정합니다.
var row = sheet.getRowById("AR33");
row["TextFont"] = '"Times New Roman", "Gungsuh", "Helvetica"';
sheet.refreshRow(row);

//조회 데이터에서 특정행에 대해 글자체를 변경합니다.
{"data":[
    ...
    {"TextFont": "Gulim", "ColName1": "Value1", "ColName2": "Value2", ...},
    ...
]}
```

### Read More
- [TextStyle row](./text-style)
- [TextColor row](./text-color)
- [TextSize row](./text-size)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
