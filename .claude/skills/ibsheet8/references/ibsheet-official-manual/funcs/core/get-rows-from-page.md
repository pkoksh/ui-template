---
KEY: getRowsFromPage
KIND: method
PATH: funcs/core/get-rows-from-page
ALIAS: sheet.getRowsFromPage, getRowsFromPage(), 특정, 페이지, 내에, 위에서부터, 번째에
ALIAS_EN: get, rows, from, page
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/get-rows-from-page
---
# getRowsFromPage ***(method)***
> 특정 페이지 내에 위에서부터 pos 번째에 위치한 [데이터 로우 객체](/docs/appx/row-object)를 리턴합니다.

> pos값은 보여지는 행을 기준으로 합니다.


### Syntax
```javascript
object getRowsFromPage( page , pos );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|page|`object`|필수|[데이터 페이지 객체](/docs/appx/page-object)|
|pos|`number`|선택|페이지 내에 위에서부터 순서 (default: `0`)|


### Return Value
***row object*** : [데이터 로우 객체](/docs/appx/row-object)

### Example
```javascript
//4번 페이지의 10번째 행을 얻습니다.
var page = sheet.getPageByIndex(4);
var rowObject = sheet.getRowsFromPage(page,10);
```

### Read More
- [getRowByIndex method](./get-row-by-index)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
