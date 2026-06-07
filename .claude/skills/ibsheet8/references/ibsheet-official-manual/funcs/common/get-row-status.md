---
KEY: getRowStatus
KIND: method
PATH: funcs/common/get-row-status
ALIAS: sheet.getRowStatus, getRowStatus(), 특정, 행의, 상태값을, 반환합니다
ALIAS_EN: get, row, status
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/common/get-row-status
---
# getRowStatus ***(method)***

> 특정 행의 상태값을 반환합니다. 

> 상태값 반환 우선순위는 아래와 같습니다. 

> 

> 1. 행 상태에 Added가 포함된 경우 우선 무조건적으로 Added를 반환합니다. 

> 2. 행 상태에 Deleted가 포함된 경우 그 다음 무조건적으로 Deleted를 반환합니다. 

> 3. 그 이외의 경우에는 Changed를 반환합니다. 

> 4. 상태가 없는 경우에는 ""를 반환합니다. 


### Syntax
```javascript
void getRowStatus();
```

### Return Value
***string*** 행 상태

### Example
```javascript
sheet.getRowStatus( row ); // 파라미터로 기입한 행의  상태값을 반환합니다.
```

### Read More

### Since

|product|version|desc|
|---|---|---|
|common|1.0.27|기능 추가|
