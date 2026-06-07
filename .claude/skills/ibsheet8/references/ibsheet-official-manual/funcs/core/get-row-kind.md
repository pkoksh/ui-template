---
KEY: getRowKind
KIND: method
PATH: funcs/core/get-row-kind
ALIAS: sheet.getRowKind, getRowKind(), 행의, 유형을, 확인합니다
ALIAS_EN: get, row, kind
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/get-row-kind
---
# getRowKind ***(method)***
> 행의 유형을 확인합니다.

> 행이 유형은 `Data(데이터영역), Header(헤더영역), Head(상단고정), Foot(합계행 혹은 하단고정), Filter(필터행), Group(그룹행), Space(건수정보표시행 혹은 솔리드행)` 등이 있습니다.


### Syntax
```javascript
string getRowKind( row );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|row|`object`|필수|[데이터 로우 객체](/docs/appx/row-object)|


### Return Value
***string*** : 행의 유형

### Example
```javascript
//행의 유형을 확인
var rowKind = sheet.getRowKind(rowObj);
```

### Read More
- [Kind appedix](/docs/appx/kind)
### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
