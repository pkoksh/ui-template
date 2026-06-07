---
KEY: clearRange
KIND: method
PATH: funcs/core/clear-range
ALIAS: sheet.clearRange, clearRange(), 시트, 내에, 특정, 영역의, 값을
ALIAS_EN: clear, range, sheet, grid
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/clear-range
---
# clearRange ***(method)***

> 시트 내에 특정 영역의 값을 지웁니다.

> `range` 인자에 설정된 row1, col1 셀부터 row2, col2 셀까지 영역의 값을 지웁니다.

### Syntax
```javascript
void clearRange( range );
```

### Parameters
|Name|Type|Required|Description|
|----------|-----|---|----|
|range|`array`|필수|시트 내에서 값을 지울 영역을 지정하는 배열
 [ row1, col1, row2, col2 ]
 row1 : 영역의 시작되는 부분에 위치한 셀의 [데이터 로우 객체](/docs/appx/row-object)
 col1 : 영역의 시작되는 부분에 위치한 셀의 열이름
 row2 : 영역의 끝나는 부분에 위치한 셀의 [데이터 로우 객체](/docs/appx/row-object)
 col2 : 영역의 끝나는 부분에 위치한 셀의 열이름|


### Return Value
***none***

### Example
```javascript
//첫번째 행부터, 포커스된 행까지 CUST_CD 열부터 ORDER_DATE열까지 값을 모두 지웁니다.
sheet.clearRange([sheet.getFirstVisibleRow(), "CUST_CD", sheet.getFocusedRow(), "ORDER_DATE"])
```

### Read More

- [setValue method](./set-value)
- [setString method](./set-string)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
