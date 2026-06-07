---
KEY: htmlPrefix
KIND: row-property
PATH: props/row/html-prefix
ALIAS: 전체, 셀의, 문자열, 앞에, 원하는
ALIAS_EN: html, prefix, all, total
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/row/html-prefix
---
# HtmlPrefix ***(row)***

> 행 전체 각 셀의 문자열 앞에 원하는 HTML 태그를 삽입합니다.

> 이 속성은 행에서 사용되는 일은 거의 드물며, 보통 `Col`이나 `Cell`단위로 사용한다.


### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|원하는 Html태그|


### Example
```javascript
//헤더행의 각 셀에 특정 Icon을 추가한다
options.Def.Header = {"HtmlPrefix": '<i class="far fa-angry"></i>'};
```

### Read More
- [HtmlPostfix row](./html-postfix)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
