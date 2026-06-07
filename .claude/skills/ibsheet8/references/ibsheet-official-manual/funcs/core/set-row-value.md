---
KEY: setRowValue
KIND: method
PATH: funcs/core/set-row-value
ALIAS: sheet.setRowValue, setRowValue(), 단위별, 데이터를, 설정
ALIAS_EN: set, row, value, config, setting, option
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/set-row-value
---
# setRowValue ***(method)***
> 행 단위별 데이터를 설정 합니다.

> [getRowValue](/docs/funcs/core/get-row-value) 로 추출한 데이터를 행 단위별로 set 할 수 있습니다.


### Syntax
```javascript
object setRowValue( row, data, render, noCalc );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|row|`object`|필수|데이터를 설정할 대상 행(row)|
|data|`object`|필수|json 형식의 object 데이터|
|render|`boolean`|선택|즉시 화면 반영 여부
해당 기능을 `0(false)`로 사용했을 경우, 작업 마무리 시에 `rerender()`를 실행해야 화면에 반영 됩니다.
`0(false)`:반영 안함
`1(true)`:즉시 반영 (`default`)|
|calc|`boolean`|선택|포뮬러 계산 여부 
 해당 기능을 `0(false)`로 설정할 경우 `setValue`시 포뮬러 계산이 이뤄지지 않습니다. 포뮬러를 반영하려면 이후 반드시 `calculate()`를 호출해줘야 됩니다.(`default:1`) |


### Return Value

***none***

### Example
```javascript

var row = sheet.getRowById("AR5"); // ID가 AR5인 행
var data = sheet.getRowValue(row); // ID가 AR5인 행의 json 데이터 추출
var targetRow = sheet.getRowById("AR1"); // ID가 AR1인 행
sheet.setRowValue(targetRow, data); // AR5 행의 데이터를 AR1 행에 set

```

### Read More

- [getRowValue](/docs/funcs/core/get-row-value)

### Since

|product|version|desc|
|---|---|---|
|core|8.1.0.25|기능 추가|
|core|8.3.0.45|render인자 추가|
|core|8.3.0.46|calc 인자 추가|