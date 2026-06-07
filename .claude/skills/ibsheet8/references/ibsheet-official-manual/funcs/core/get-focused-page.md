---
KEY: getFocusedPage
KIND: method
PATH: funcs/core/get-focused-page
ALIAS: sheet.getFocusedPage, getFocusedPage(), 현재, 포커스가, 위치한, 데이터, 페이지
ALIAS_EN: get, focused, page, data
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/get-focused-page
---
# getFocusedPage ***(method)***

> 현재 포커스가 위치한 데이터 [페이지 객체](/docs/appx/page-object)를 리턴합니다.


### Syntax
```javascript
object getFocusedPage();
```

### Return Value
***page object*** : [페이지 객체](/docs/appx/page-object)

### Example
```javascript
//현재 포커스가 있는 페이지 객체
var pageObj = sheet.getFocusedPage();
```

### Read More
- [getPageIndex method](./get-page-index)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
