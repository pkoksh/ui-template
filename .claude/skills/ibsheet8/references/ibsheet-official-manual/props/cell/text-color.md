---
KEY: textColor
KIND: cell-property
PATH: props/cell/text-color
ALIAS: 지정한, 셀에, 글자색을, 설정합니다
ALIAS_EN: text, color
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cell/text-color
---
# TextColor ***(cell)***
> 지정한 셀에 글자색을 설정합니다.


### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|HEX형식 (ex:#FF00F0)
rgb형식 (ex:rgb(244,200,40)|

### Example
```javascript
//1. 메소드를 통해 특정 셀에 속성 적용 (열이름: CLS)
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "TextColor", "#FF0000");


//2. 객체에 직접 접근해서 속성 적용 (열이름: CLS)
var ROW = sheet.getRowById("AR10");
ROW["CLSTextColor"] = "#AD4499";
//변경내용 확인
sheet.refreshCell({row:ROW, col:"CLS"});


//3. 조회 데이터 내에서 속성 적용  (열이름: CLS)
{
    data:[
        {... , "CLSTextColor": "#0000FF", ...}
    ]
}
```

### Read More
- [TextStyle cell](./text-style)
- [TextSize cell](./text-size)
- [TextFont cell](./text-font)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
