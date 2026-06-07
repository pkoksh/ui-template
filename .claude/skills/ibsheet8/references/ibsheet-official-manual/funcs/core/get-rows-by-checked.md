---
KEY: getRowsByChecked
KIND: method
PATH: funcs/core/get-rows-by-checked
ALIAS: sheet.getRowsByChecked, getRowsByChecked(), 인자, 열의, 경우, 해당, 열에
ALIAS_EN: get, rows, by, checked
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/get-rows-by-checked
---
# getRowsByChecked ***(method)***
> 인자 열의 [Type](/docs/appx/type)이 Bool인 경우 해당 열에 체크된 모든 [데이터 로우 객체](/docs/appx/row-object)를 배열로 리턴합니다.

### Syntax
```javascript
object getRowsByChecked( col );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|col|`string`|필수|열이름|



### Return Value
***mixed ( `array` \| `boolean` )*** : 열이 Bool 타입이 아닌 경우 false를 리턴하고, 그 외는 [데이터 로우 객체](/docs/appx/row-object)의 배열을 리턴합니다.

### Example
```javascript
// sCheck 열이 체크된 데이터 로우 객체들을 가져옵니다.
var rows = sheet.getRowsByChecked( "sCheck" );
if (rows && rows.length == 0) {
    ...
} else {
    ...
}
```

### Read More
- [setCheck method](./set-check)
- [setAllCheck method](./set-all-check)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|core|8.0.0.3|name 인자명 변경 -> col, 다른 API와 통일|
