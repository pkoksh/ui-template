---
KEY: getRowsByStatus
KIND: method
PATH: funcs/core/get-rows-by-status
ALIAS: sheet.getRowsByStatus, getRowsByStatus(), 특정, 상태의, 행을, 배열로, 리턴
ALIAS_EN: get, rows, by, status
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/get-rows-by-status
---
# getRowsByStatus ***(method)***
> 특정 상태의 행을 배열로 리턴 합니다.

> 행이 상태는 `Added, Changed, Deleted`이 있습니다. 

> 속성명 앞에 `!`를 붙이면 해당 속성의 값이 참(`true` or `1`)이더라도 건너뛸 수 있습니다.


### Syntax
```javascript
array getRowsByStatus( status );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|status|`string`|필수|상태값(여러개 상태를 동시에 확인하고자 하는 경우에는 ","구분자로 연결|


### Return Value
***array[row object]*** : [데이터 로우 객체](/docs/appx/row-object) 배열

### Example
```javascript
// 수정된 행을 모두 얻습니다.
var chgRows = sheet.getRowsByStatus("Changed");

// 신규로 추가되거나 수정된 행을 모두 얻습니다.
var rows = sheet.getRowsByStatus("Added,Changed");

// Added 속성이 설정되어 있으면서, Deleted 속성이 설정되지 않은 행을 추출
var rows = sheet.getRowsByStatus("Added,!Deleted");

// Changed 속성이 설정되어 있으면서, Added, Deleted 속성이 설정되지 않은 행만 추출
var rows = sheet.getRowsByStatus("!Added,Changed,!Deleted");

```

### Read More

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
