---
KEY: hasFilter
KIND: method
PATH: funcs/core/has-filter
ALIAS: sheet.hasFilter, hasFilter(), 필터가, 사용됐는지, 여부를, 리턴합니다
ALIAS_EN: has, filter
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/has-filter
---
# hasFilter ***(method)***
> 필터가 사용됐는지 여부를 리턴합니다.

> 필터된 결과와 무관하게 필터를 사용했으면 `true`가 리턴됩니다.



### Syntax
```javascript
boolean hasFilter();
```

### Return Value
***boolean*** : 필터 적용 여부

### Example
```javascript
//필터를 사용했나?
var fuse = sheet.hasFilter();
```

### Read More
- [clearFilter method](./clear-filter)
- [setFilter method](./set-filter)
- [doFilter method](./do-filter)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
