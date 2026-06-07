---
KEY: textStyle
KIND: row-property
PATH: props/row/text-style
ALIAS: 지정한, 행의, 글자에, 숫자로, 설정합니다
ALIAS_EN: text, style
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/row/text-style
---
# TextStyle ***(row)***

> 지정한 행의 글자에 대한 `font-weight, font-style, font-variant, text-decoration`를 숫자로 설정합니다.

> 숫자를 서로 더해서 여러 속성을 동시에 적용하 실 수 있습니다.


### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`1`| 굵게 Bold|
|`2`| 기울임 Italic|
|`4`| 밑줄 Underline|
|`8`| 취소선 Strike|
|`16`| 윗줄 Overline|
|`32`| 작은 대문자 Small Caps|


### Example
```javascript
//특정행의 글자를 굵고 취소선이 들어가게 수정한다.
var row = sheet.getRowById("AR33");
row["TextStyle"] = 9;
sheet.refreshRow(row);

//조회 데이터에서 특정행에 대해 기울임이면서 밑줄을 표시한다.
{"data":[
    {"TextStyle": 6, "ColName1": "Value1", "ColName2": "Value2", ...},
    ...
]}
```

### Read More
- [TextColor row](./text-color)
- [TextSize row](./text-size)
- [TextFont row](./text-font)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
