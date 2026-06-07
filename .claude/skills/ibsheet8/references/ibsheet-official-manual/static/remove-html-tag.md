---
KEY: removeHtmlTag
KIND: static-member
PATH: static/remove-html-tag
ALIAS: 인자로, 들어온, 문자열에서, 형식의, 문자열을
ALIAS_EN: remove, html, tag
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/static/remove-html-tag
---
# removeHTMLTag ***(static)***

> 인자로 들어온 문자열에서 HTML Tag형식의 문자열을 제거해서 문자열을 리턴합니다.

### Syntax
```javascript
string IBSheet.removeHTMLTag(html);
```

### Parameters
|Name|Type|Required|Description|
|----------|-----|---|----|
|html|`string`|필수|대상 문자열|


### Return Value
***string*** : HTML Tag가 제거된 문자열

### Example
```javascript
  var string = IBSheet.removeHTMLTag("<div><p>안녕하세요.
Hello, World~!</p></div>");
  // "안녕하세요.Hello, World~!"
```
### Read More

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
