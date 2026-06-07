---
KEY: getRowByIndex
KIND: method
PATH: funcs/core/get-row-by-index
ALIAS: sheet.getRowByIndex, getRowByIndex(), 인덱스를, 기준으로, 데이터, 로우, 객체
ALIAS_EN: get, row, by, index, data
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/get-row-by-index
---
# getRowByIndex ***(method)***
> 인덱스를 기준으로 [데이터 로우 객체](/docs/appx/row-object)를 확인합니다.

> 인덱스는 `1`부터 시작

> 감취진 행은 index계산에서 제외됩니다.

### Syntax
```javascript
object getRowByIndex( index );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|index|`number`|필수|행 인덱스(1부터 시작)|


### Return Value
***row object*** : [데이터 로우 객체](/docs/appx/row-object)

### Example
```javascript
//5번 index행의 데이터 로우 객체를 얻습니다.
var rowObj = sheet.getRowByIndex(5);
```

### Read More
- [getRowById method](./get-row-by-id)
- [getRowIndex method](./get-row-index)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
