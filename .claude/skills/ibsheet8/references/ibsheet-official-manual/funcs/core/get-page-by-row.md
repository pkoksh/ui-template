---
KEY: getPageByRow
KIND: method
PATH: funcs/core/get-page-by-row
ALIAS: sheet.getPageByRow, getPageByRow(), 특정, 데이터, 로우, 객체, 위치한
ALIAS_EN: get, page, by, row, data
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/get-page-by-row
---
# getPageByRow ***(method)***
> 특정 [데이터 로우 객체](/docs/appx/row-object)가 위치한 [페이지 객체](/docs/appx/page-object)를 리턴합니다.



### Syntax
```javascript
object getPageByRow( row );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|row|`object`|필수|[데이터 로우 객체](/docs/appx/row-object)


### Return Value
***page object*** : row를 포함하고 있는  [페이지 객체](/docs/appx/page-object)

### Example
```javascript
//마지막 페이지 객체를 얻는다.
var lastRow = sheet.getLastRow();
var lastPageObj = sheet.getPageByRow(lastRow);
```

### Read More
- [getPageIndex method](./get-page-index)
- [getPageByIndex method](./get-page-by-index)
- [getPageIndexByRow method](./get-page-index-by-row)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
