---
KEY: getPageIndexByRow
KIND: method
PATH: funcs/core/get-page-index-by-row
ALIAS: sheet.getPageIndexByRow, getPageIndexByRow(), 메소드의, 이름과, 동작이, 일치하지, 않으며
ALIAS_EN: get, page, index, by, row
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/get-page-index-by-row
---
# !getPageIndexByRow ***(method)***

> **<mark>메소드의 이름과 동작이 일치하지 않으며 사용하지 않는 기능으로 비공개 처리</mark>**

> 특정 [데이터 로우 객체](/docs/appx/row-object)가 위치한 페이지에서의 행 `index`를 리턴합니다.

> `index`는 `0`부터 시작합니다.

### Syntax
```javascript
number getPageIndexByRow( row );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|row|`object`|필수|[데이터 로우 객체](/docs/appx/row-object)


### Return Value
***number*** : [페이지 객체](/docs/appx/page-object)에서 row의 순번

### Example
```javascript
// 마지막 행의 페이지에서 행 순번을 얻는다.
var lastRow = sheet.getLastRow();
var lastPageIdx = sheet.getPageIndexByRow(lastRow);
```

### Read More
- [getPageIndex method](./get-page-index)
- [getPageByIndex method](./get-page-by-index)
- [getPageByRow method](./get-page-by-row)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
