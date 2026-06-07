---
KEY: setCheck
KIND: method
PATH: funcs/core/set-check
ALIAS: sheet.setCheck, setCheck(), 타입의, 셀의, 값을, 체크, 언체크
ALIAS_EN: set, check, checkbox
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/set-check
---
# setCheck ***(method)***
> `Bool` 타입의 셀의 값을 체크/언체크 합니다.

> **셀이 편집불가능한 경우, 값 수정이 이루어지지 않습니다.(불가 여부와 상관없이 수정하시려면 setValue를 사용)**

> `valid` 인자를 통해 값 변경이 가능한지 여부를 확인할 수 있습니다.

> 이미 체크된 셀에 `val`인자를 `1(true)`로 설정하고 `valid:1`로 확인하면 값은 `false`가 리턴됩니다.

> 반대로 `val`인자를 `0(false)`으로 설정하고 `valid:1`로 확인하면 값은 `true`가 리턴됩니다.

> 해당 셀이 `Bool` 타입이 아닌 경우 혹은 편집이 불가능한 경우, `valid:1`로 확인하면 `false`가 리턴됩니다.

### Syntax
```javascript
boolean setCheck( row, col, val, valid);
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|row |`object`|필수|[데이터 로우 객체](/docs/appx/row-object)|
|col |`string`|필수|열이름|
|val |`boolean`|필수|체크 여부
`0(false)`:체크해제 
`1(true)`:체크
`null`:Toogle (`default`)|
|valid|`boolean`|선택|셀에 체크/체크해제 가능여부 확인
(실제로 체크/체크해제가 되지 않고, 가능/불가능 여부를 확인해서 리턴)
`0(false)`:체크/체크해제 가능여부 확인 안함 (`default`)
`1(true)`:체크/체크해제 가능여부 확인 사용|

### Return Value
***boolean*** : `true`: 값이 변경됨 `false`: 값이 변경되지 않음

### Example
```javascript
var r5 = sheet.getRowById("AR5");
//AR5 행에 "CHK"열 값을 체크로 변경
sheet.setCheck(r5, "CHK", 1);

//AR5 행에 "CHK" 열 값이 변경되는지 확인
var isChecked = sheet.setCheck(r5, "CHK", 0, 1);
```
### Read More

- [setValue method](./set-value)
- [setString method](./set-string)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
