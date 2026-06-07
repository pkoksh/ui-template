---
KEY: setTotalRowCount
KIND: method
PATH: funcs/core/set-total-row-count
ALIAS: sheet.setTotalRowCount, setTotalRowCount(), 기능, 사용시, 표시되는, 전체, 데이터
ALIAS_EN: set, total, row, count, all, data
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/set-total-row-count
---
# setTotalRowCount ***(method)***

> [InfoRowConfig cfg](/docs/props/cfg/info-row-config) 기능 사용시 표시되는 전체 데이터 행수를 변경합니다.

> DB에서 가저온 건수와 다르게 표시하고 싶을때 유용합니다.


### Syntax
```javascript
void setTotalRowCount ( count );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|count |`number`|필수|전체 데이터 행수로 표시할 숫자|

### Return Value
***none***

### Example
```javascript
// 전체 데이터 행수를 변경
sheet.setTotalRowCount ( 2000 );
```

### Read More
- [InfoRowConfig cfg](/docs/props/cfg/info-row-config)
- [getTotalRowCount method](./get-total-row-count)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.7|기능 추가|