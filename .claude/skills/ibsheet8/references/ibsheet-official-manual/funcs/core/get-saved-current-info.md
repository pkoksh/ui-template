---
KEY: getSavedCurrentInfo
KIND: method
PATH: funcs/core/get-saved-current-info
ALIAS: sheet.getSavedCurrentInfo, getSavedCurrentInfo(), 현재, 로컬, 스토리지, 혹은, 세션
ALIAS_EN: get, saved, current, info
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/get-saved-current-info
---
# getSavedCurrentInfo ***(method)***
> 현재 로컬 스토리지 혹은 세션 스토리지에 저장되어 있는 시트의 컬럼 정보를 문자열로 가져옵니다.

### Syntax
```javascript
string getSavedCurrentInfo();
```

### Return Value
***string 현재 로컬 스토리지, 혹은 세션 스토리지에 저장되어 있는 컬럼들의 숨김, 너비, 위치 정보 값***

### Example
```javascript
// 현재 로컬 스토리지 혹은 세션 스토리지에 저장되어 있는 시트의 컬럼 정보를 담고 있는 문자열을 반환
sheet.getSavedCurrentInfo();
```

### Read More
- [getCurrentInfo method](./get-current-info)
- [setCurrentInfo method](./set-current-info)
- [saveCurrentInfo method](./save-current-info)

### Since

|product|version|desc|
|---|---|---|
|core|8.3.0.28|기능 추가|
