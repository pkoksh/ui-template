---
KEY: getTotalRowCount
KIND: method
PATH: funcs/core/get-total-row-count
ALIAS: sheet.getTotalRowCount, getTotalRowCount(), 조회모드에, 따라, 조회된, 전체, 데이터
ALIAS_EN: get, total, row, count, all, data
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/get-total-row-count
---
# getTotalRowCount ***(method)***

> 조회모드에 따라 조회된 전체 데이터 건수 또는 DB 에서 가져올 전체 데이터 행수를 리턴합니다.

> [(Cfg)SearchMode](/docs/props/cfg/search-mode) 가 0, 1, 2 로 설정된 경우 조회된 전체 데이터 행수를 리턴합니다. 

> [(Cfg)SearchMode](/docs/props/cfg/search-mode) 가 3, 4, 5 인 경우 조회 데이터의 Total 에 설정된 값을 리턴합니다. 이 때 Total 값은 조회조건에 따라 가져올 DB 의 전체 건수가 설정되어야 합니다.

### Syntax
```javascript
number getTotalRowCount();
```

### Return Value
***number*** : 조회된 전체 데이터 건수 또는 조회데이터에 포함된 Total 값

### Example
```javascript
//전체 데이터 건수를 얻음
var tRow = sheet.getTotalRowCount();
```

### Read More
- [getDataRows method](./get-data-rows)
- [getShownRows method](./get-shown-rows)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
