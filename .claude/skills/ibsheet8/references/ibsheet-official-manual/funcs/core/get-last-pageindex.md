---
KEY: getLastPageindex
KIND: method
PATH: funcs/core/get-last-pageindex
ALIAS: sheet.getLastPageindex, getLastPageindex(), 페이징, 조회, 방식에서, 마지막, 페이지의
ALIAS_EN: get, last, pageindex, search, query, fetch, load, retrieve
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/get-last-pageindex
---
# getLastPageIndex ***(method)***

> 페이징 조회 방식에서 마지막 페이지의 인덱스를 반환합니다.

### Syntax
```javascript
number getLastPageIndex();
```

### Return Value
***number*** : 마지막 페이지 인덱스

### Example
```javascript
// 현재 조회된 마지막 페이지의 인덱스를 얻습니다.
var lastIndex = sheet.getLastPageIndex();
```

### Since

|product|version|desc|
|---|---|---|
|core|8.1.0.78|기능 추가|