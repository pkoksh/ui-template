---
KEY: htmlPrefix
KIND: column-property
PATH: props/col/html-prefix
ALIAS: 열의, 셀의, 문자열, 앞에, 원하는
ALIAS_EN: html, prefix
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/html-prefix
---
# HtmlPrefix ***(col)***

> 열의 각 셀의 문자열 앞에 원하는 `HTML 태그`를 삽입합니다.



### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|원하는 `HTML태그`|


### Example
```javascript
//열의 앞에 icon 이미지를 추가한다
options.Cols = [
    ...
    {Type: "Text", Name: "sa_nm", HtmlPrefix:' <i class="fas fa-apple-alt"></i>'},
    ...
];
```

### Read More
- [HtmlPostfix col](./html-postfix)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
