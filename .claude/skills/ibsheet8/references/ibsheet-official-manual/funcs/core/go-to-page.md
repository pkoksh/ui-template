---
KEY: goToPage
KIND: method
PATH: funcs/core/go-to-page
ALIAS: sheet.goToPage, goToPage(), 특정, 페이지로, 이동합니다
ALIAS_EN: go, to, page
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/go-to-page
---
# goToPage ***(method)***
> 특정 페이지로 이동합니다.



### Syntax
```javascript
void goToPage( page );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|page|`object`|필수|[데이터 페이지 객체](/docs/appx/page-object)|


### Return Value
***none***

### Example
```javascript
//마지막 페이지를 얻음
var page = sheet.getPageByRow(sheet.getLastRow() );
//마지막 페이지로 이동
sheet.goToPage(page);
```

### Read More
- [goToNextPage method](./go-to-next-page)
- [goToPrevPage method](./go-to-prev-page)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
