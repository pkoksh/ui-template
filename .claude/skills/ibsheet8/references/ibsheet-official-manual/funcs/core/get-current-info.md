---
KEY: getCurrentInfo
KIND: method
PATH: funcs/core/get-current-info
ALIAS: sheet.getCurrentInfo, getCurrentInfo(), 현재, 시트의, 컬럼, 정보를, 문자열로
ALIAS_EN: get, current, info
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/get-current-info
---
# getCurrentInfo ***(method)***
> 현재 시트의 컬럼 정보를 문자열로 가져오는 메소드입니다.

### Syntax
```javascript
string getCurrentInfo();
```

### Return Value
***string 현재 컬럼들의 숨김, 너비, 위치 정보 값***

### Example
```javascript
// 현재 시트의 컬럼 정보를 담고 있는 문자열을 반환
sheet.getCurrentInfo();
```

### Read More
- [setCurrentInfo method](./set-current-info)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
