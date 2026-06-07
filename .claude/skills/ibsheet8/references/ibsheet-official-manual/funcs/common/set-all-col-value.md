---
KEY: setAllColValue
KIND: method
PATH: funcs/common/set-all-col-value
ALIAS: sheet.setAllColValue, setAllColValue(), 이용하여, 하나, 컬럼의, 전체, 데이터행
ALIAS_EN: set, all, col, value, total
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/common/set-all-col-value
---
# setAllColValue ***(method)***

> setValue를 이용하여 하나 컬럼의 전체 데이터행 값을 일괄적으로 변경합니다. 


### Syntax
```javascript
void setAllColValue( colName, value );
```

### Parameters

|Name|Type|Required|Description|
|----------|-----|---|----|
|colName|`string`|선택|열 이름|
|value|`string`|선택|입력값|

### Return Value
***none***

### Example
```javascript
// StartDate 컬럼의 값을 20210124로 일괄 변경합니다.
sheet.setAllColValue("StartDate", "20210124");
```

### Read More

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
