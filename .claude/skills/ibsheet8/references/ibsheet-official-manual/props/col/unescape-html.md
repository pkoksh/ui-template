---
KEY: unescapeHtml
KIND: column-property
PATH: props/col/unescape-html
ALIAS: 타입, 컬럼, 데이터, 조회에서, 등의
ALIAS_EN: unescape, html, data
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/unescape-html
---
# UnescapeHTML ***(col)***

> `Text`, `Lines` 타입 컬럼 데이터 조회에서 `&gt;`, `&amp;`, `&lt;` 등의 문자를 unescape 처리하여 `<`, `&`, `>` 문자로 변경하는 기능

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|문자 그대로 조회 (`default`)|
|`1(true)`|문자 unescape 처리하여 조회|


### Example
```javascript
// 조회에 들어오는 문자 HTML unescape 처리
options.Cols = [
  ...
  {
    Type: "Text",
    Name: "TextData",
    Width: 110,
    UnescapeHTML: 1
    ...
  },
  ...
];
```

### Read More
- [SaveHTMLChar cfg](/docs/props/cfg/save-html-char)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.24|기능 추가|
