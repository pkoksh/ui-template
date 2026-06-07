---
KEY: getRowById
KIND: method
PATH: funcs/core/get-row-by-id
ALIAS: sheet.getRowById, getRowById(), 기준으로, 데이터, 로우, 객체, 반환합니다
ALIAS_EN: get, row, by, id, data
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/get-row-by-id
---
# getRowById ***(method)***
> ID를 기준으로 [데이터 로우 객체](/docs/appx/row-object)를 반환합니다.



### Syntax
```javascript
string getRowById( id );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|id|`string`|필수|행의 id|


### Return Value
***row object*** : [데이터 로우 객체](/docs/appx/row-object)

### Example
```javascript
//AR5 행객체를 얻어 상태를 삭제로 변경한다.
var row = sheet.getRowById("AR5");
row["Deleted"] = 1;
sheet.renderBody();
```

### Read More
- [getRowIndex method](./get-row-index)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
