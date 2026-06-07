---
KEY: htmlPrefix
KIND: cell-property
PATH: props/cell/html-prefix
ALIAS: 셀의, 문자열, 앞에, 원하는, 태그를
ALIAS_EN: html, prefix
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cell/html-prefix
---
# HtmlPrefix ***(cell)***

> 셀의 문자열 앞에 원하는 HTML 태그를 삽입합니다.



### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|원하는 HTML태그|


### Example
```javascript
//1. 메소드를 통해 특정 셀에 속성 적용 (열이름 :CLS )
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "HtmlPrefix", "<i class='fas fa-apple-alt'></i>");


//2. 객체에 직접 접근해서 속성 적용 (열이름 :CLS )
var ROW = sheet.getRowById("AR10");
ROW["CLSHtmlPrefix"] = "약어";
//변경내용 확인
sheet.refreshCell({row:ROW, col:"CLS"});


//3. 조회 데이터 내에서 속성 적용  (열이름 :CLS )
{
    data:[
        {... , "CLSHtmlPrefix":"<div class='btn'>time</div>" , ...}
    ]
}

```

### Read More
- [HtmlPostfix cell](./html-postfix)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
