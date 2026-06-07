---
KEY: textSize
KIND: row-property
PATH: props/row/text-size
ALIAS: 지정한, 행의, 글자, 크기를, 설정합니다
ALIAS_EN: text, size
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/row/text-size
---
# TextSize ***(row)***

> 지정한 행의 글자 크기를 설정합니다.

> `px, pt, em` 단위를 사용할 수 있으며, 단위를 지정하지 않으면 px기준으로 설정됩니다.
### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|크기숫자와 단위로 이루어진 문자열(ex: 25px)|

### Example
```javascript
//특정행의 글자를 1.2em 지정합니다.
var row = sheet.getRowById("AR33");
row["TextSize"] = "1.2em";
sheet.refreshRow(row);

//조회 데이터에서 특정행에 대해 글자를 27px로 지정합니다.
{"data":[
    ...
    {"TextSize": "27px", "ColName1": "Value1", "ColName2": "Value2", ...},
    ...
]}
```

### Read More
- [TextStyle row](./text-style)
- [TextColor row](./text-color)
- [TextFont row](./text-font)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
