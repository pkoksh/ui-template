---
KEY: getGroupRows
KIND: method
PATH: funcs/core/get-group-rows
ALIAS: sheet.getGroupRows, getGroupRows(), 그룹으로, 생성된, 그룹행들을, 반환합니다
ALIAS_EN: get, group, rows
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/get-group-rows
---
# getGroupRows ***(method)***

> 그룹으로 생성된 그룹행들을 반환합니다.

> 리턴 값은 다음과 같습니다
> {그룹 컬럼명1: [컬럼명1로 생성된 그룹 행들], 그룹 컬럼명2 : [컬럼명2로 생성된 그룹 행들], ...}

### Syntax
```javascript
object getGroupRows();
```

### Return Value
***object***

### Example
```javascript
//그룹 행을 얻습니다.
var groupRows = sheet.getGroupRows();
```

### Read More
- [GroupMain cfg](/docs/props/cfg/group-main)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
