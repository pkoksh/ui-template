---
KEY: getPrevShift
KIND: method
PATH: funcs/core/get-prev-shift
ALIAS: sheet.getPrevShift, getPrevShift(), 데이터, 로우, 객체, 대상으로, 사용가능한
ALIAS_EN: get, prev, shift, data
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/get-prev-shift
---
# getPrevShift ***(method)***
> [데이터 로우 객체](/docs/appx/row-object)를 대상으로 사용가능한 탐색 메소드입니다.

> 기준이 되는 [데이터 로우 객체](/docs/appx/row-object)에서 2번째 인자의 수만큼 이전에 위치한 [데이터 로우 객체](/docs/appx/row-object)를 탐색해서 리턴합니다.


### Syntax
```javascript
object getPrevShift( row, cnt );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|row|`object`|필수|검색 기준이 되는 [데이터 로우 객체](/docs/appx/row-object)|
|cnt|`number`|선택|기준으로부터 탐색하고자 하는 개수|


### Return Value
***row object*** : [데이터 로우 객체](/docs/appx/row-object)

### Example
```javascript
//AR55행의 7번째 위에 위치한 행을 확인.
var row = sheet.getRowById("AR55");
var nrow = sheet.getPrevShift(row,7);
```

### Read More
- [getNextShift method](./get-next-shift)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
