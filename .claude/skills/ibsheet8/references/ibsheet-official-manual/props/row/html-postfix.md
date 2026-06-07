---
KEY: htmlPostfix
KIND: row-property
PATH: props/row/html-postfix
ALIAS: 전체, 셀의, 문자열, 뒤에, 원하는
ALIAS_EN: html, postfix, all, total
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/row/html-postfix
---
# HtmlPostfix ***(row)***

> 행 전체 각 셀의 문자열 뒤에 원하는 HTML 태그를 삽입합니다.

> 이 속성은 행에서 사용되는 일은 거의 드물며, 보통 `Col`이나 `Cell`단위로 사용한다.

### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|원하는 Html태그|


### Example
```javascript
//헤더행의 각 셀 타이틀 끝에 특정 Icon을 추가한다
options.Def.Header = {"HtmlPostfix": '<i class="fas fa-apple-alt"></i>'};
```

### Read More
- [HtmlPrefix row](./html-prefix)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
