---
KEY: getHeaderRows
KIND: method
PATH: funcs/core/get-header-rows
ALIAS: sheet.getHeaderRows, getHeaderRows(), 헤더, 영역에, 있는, 로우, 객체
ALIAS_EN: get, header, rows
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/get-header-rows
---
# getHeaderRows ***(method)***
> 헤더 영역에 있는 [헤더 로우 객체](/docs/appx/row-object)들의 배열을 반환합니다.



### Syntax
```javascript
object getHeaderRows(  );
```


### Return Value
***array[row object]*** : 헤더 영역에 있는 [헤더 로우 객체](/docs/appx/row-object)들의 배열

### Example
```javascript
//행의 유형을 확인
var headers = sheet.getHeaderRows();
```

### Read More

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
