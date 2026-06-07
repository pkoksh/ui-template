---
KEY: error
KIND: cell-property
PATH: props/cell/error
ALIAS: 셀에, 수정값이, 선언한, 유효성, 검사에
ALIAS_EN: error, validation, valid
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cell/error
---
# Error ***(cell)***

> 셀에 수정값이 [ResultMask](./result-mask)에 선언한 유효성 검사에 위배되는 경우 속성값이 `1(true)`로 세팅됩니다.

> 이 속성은 직접 값을 변경하기 보다는, 수정 여부를 확인하는 용도로 사용할 것을 권합니다.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`1(true)`|`Validation` 위배됨|


### Example
```javascript
//셀값의 오류여부를 확인. (열이름이 CLS 라고 가정)
var error = sheet.getAttribute(sheet.getRowById("AR99"), "CLS", "Error");
if (error) {
    //잘못 입력된 내용이 있습니다.
}
```

### Read More
- [ResultMask cell](./result-mask)
- [ResultText cell](./result-text)



### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
