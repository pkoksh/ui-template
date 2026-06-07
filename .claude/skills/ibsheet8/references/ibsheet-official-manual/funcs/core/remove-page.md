---
KEY: removePage
KIND: method
PATH: funcs/core/remove-page
ALIAS: sheet.removePage, removePage(), 특정, 페이지를, 삭제합니다
ALIAS_EN: remove, page
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/remove-page
---
# removePage ***(method)***
> 특정 페이지를 삭제합니다.

> 현재 포커스가 위치한 페이지는 삭제하실 수 없습니다.


### Syntax
```javascript
boolean removePage( page );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|page|`object`|필수|페이지 데이터 객체


### Return Value
***boolean*** : 페이지 삭제 성공/실패 여부

### Example
```javascript
//마지막 페이지를 얻음
var page = sheet.getPageByRow(  sheet.getLastRow() );
//마지막 페이지를 삭제
sheet.removePage(page);
```

### Read More
- [goToPage method](./go-to-page)
- [goToNextPage method](./go-to-next-page)
- [goToPrevPage method](./go-to-prev-page)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
