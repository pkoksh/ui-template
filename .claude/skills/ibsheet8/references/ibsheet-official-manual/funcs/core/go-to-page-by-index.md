---
KEY: goToPageByIndex
KIND: method
PATH: funcs/core/go-to-page-by-index
ALIAS: sheet.goToPageByIndex, goToPageByIndex(), 특정, 페이지로, 이동합니다
ALIAS_EN: go, to, page, by, index
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/go-to-page-by-index
---
# goToPageByIndex ***(method)***
> 특정 페이지로 이동합니다.

> 클라이언트/서버 페이징에서 사용 가능합니다.


### Syntax
```javascript
void goToPageByIndex(index);
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|index|`number`|필수|조회할 페이지 순서 번호


### Return Value
***none***

### Example
```javascript
//12번째 페이지로 이동
sheet.goToPageByIndex(12);
```

### Read More
- [goToNextPage method](./go-to-next-page)
- [goToPrevPage method](./go-to-prev-page)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
