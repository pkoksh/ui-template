---
KEY: textFont
KIND: cell-property
PATH: props/cell/text-font
ALIAS: 특정, 셀의, 설정합니다
ALIAS_EN: text, font
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cell/text-font
---
# TextFont ***(cell)***
> 특정 셀의 `font-family`를 설정합니다.

> 여러개 폰트를 지정하거나 폰트에 띄어쓰기가 들어가는 경우에는 `single(')/double quotation(")`으로 지정합니다.
### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|글자체|

### Example
```javascript
//1. 메소드를 통해 특정 셀에 속성 적용 (열이름: CLS)
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "TextFont", "Dotum");


//2. 객체에 직접 접근해서 속성 적용 (열이름: CLS)
var ROW = sheet.getRowById("AR10");
ROW["CLSTextFont"] = "'Nanum Gothic'";
//변경내용 확인
sheet.refreshCell({row:ROW, col:"CLS"});


//3. 조회 데이터 내에서 속성 적용  (열이름: CLS)
{
    data:[
        {... , "CLSTextFont":"Gulim" , ...}
    ]
}
```

### Read More
- [TextStyle cell](/docs/props/cell/text-style)
- [TextColor cell](/docs/props/cell/text-color)
- [TextSize cell](/docs/props/cell/text-size)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
