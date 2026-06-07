---
KEY: htmlPostfix
KIND: cell-property
PATH: props/cell/html-postfix
ALIAS: 셀의, 문자열, 뒤에, 원하는, 태그를
ALIAS_EN: html, postfix
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cell/html-postfix
---
# HtmlPostfix ***(cell)***

> 셀의 문자열 뒤에 원하는 HTML 태그를 삽입합니다.


### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|원하는 HTML태그|


### Example
```javascript
//1. 메소드를 통해 특정 셀에 속성 적용 (열이름 :CLS )
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "HtmlPostfix", "<i class='fas fa-apple-alt'></i>");


//2. 객체에 직접 접근해서 속성 적용 (열이름 :CLS )
var ROW = sheet.getRowById("AR10");
ROW["CLSHtmlPostfix"] = "약어";
//변경내용 확인
sheet.refreshCell({row:ROW, col:"CLS"});


//3. 조회 데이터 내에서 속성 적용  (열이름 :CLS )
{
    data:[
        {... , "CLSHtmlPostfix":"<div class='btn'>time</div>" , ...}
    ]
}
```

### Read More
- [HtmlPrefix cell](./html-prefix)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
