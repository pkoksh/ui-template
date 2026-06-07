---
KEY: textSize
KIND: cell-property
PATH: props/cell/text-size
ALIAS: 지정한, 셀의, 글자, 크기를, 설정합니다
ALIAS_EN: text, size
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cell/text-size
---
# TextSize ***(cell)***
> 지정한 셀의 글자 크기를 설정합니다.

> `px, pt, em` 단위를 사용할 수 있으며, 단위를 지정하지 않으면 px기준으로 설정됩니다.
### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|크기숫자와 단위로 이루어진 문자열(ex: 25px)|

### Example
```javascript
//1. 메소드를 통해 특정 셀에 속성 적용 (열이름: CLS)
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "TextSize", "12pt");


//2. 객체에 직접 접근해서 속성 적용 (열이름: CLS)
var ROW = sheet.getRowById("AR10");
ROW["CLSTextSize"] = "20px";
//변경내용 확인
sheet.refreshCell({row:ROW, col:"CLS"});


//3. 조회 데이터 내에서 속성 적용 (열이름: CLS)
{
    data:[
        {... , "CLSTextSize": "22px", ...}
    ]
}
```

### Read More
- [TextStyle cell](./text-style)
- [TextColor cell](./text-color)
- [TextFont cell](./text-font)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
