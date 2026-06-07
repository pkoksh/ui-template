---
KEY: textStyle
KIND: cell-property
PATH: props/cell/text-style
ALIAS: 지정한, 셀의, 글자에, 숫자로, 설정합니다
ALIAS_EN: text, style
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cell/text-style
---
# TextStyle ***(cell)***

> 지정한 셀의 글자에 대한 `font-weight, font-style, font-variant, text-decoration`를 숫자로 설정합니다.

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
//1. 메소드를 통해 특정 셀에 속성 적용 (열이름: CLS)
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "TextStyle", 4);

//1-1 특정 셀에 여러 속성 적용 (열이름: CLS, 굵게 + 기울임)
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "TextStyle", 1 + 2);

//2. 객체에 직접 접근해서 속성 적용 (열이름: CLS)
var ROW = sheet.getRowById("AR10");
ROW["CLSTextStyle"] = 5;
//변경내용 확인
sheet.refreshCell({row:ROW, col:"CLS"});


//3. 조회 데이터 내에서 속성 적용  (열이름: CLS)
{
    data:[
        {... , "CLSTextStyle":8 , ...}
    ]
}
```

### Read More
- [TextColor cell](./text-color)
- [TextSize cell](./text-size)
- [TextFont cell](./text-font)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
