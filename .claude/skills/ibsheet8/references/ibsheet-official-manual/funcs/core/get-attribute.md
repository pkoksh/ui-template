---
KEY: getAttribute
KIND: method
PATH: funcs/core/get-attribute
ALIAS: sheet.getAttribute, getAttribute(), 특정, 셀에, 설정된, 속성값을, 확인합니다
ALIAS_EN: get, attribute
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/get-attribute
---
# getAttribute ***(method)***

> 특정 행,열,셀에 설정된 속성값을 확인합니다.

> `row`를 `null`로 설정시 열에 설정한 속성값이 리턴됩니다.

> `col`을 `null`로 설정시 행에 설정한 속성값이 리턴됩니다.


### Syntax
```javascript
mixed getAttribute( row, col, attr);
```

### Parameters

|Name|Type|Required|Description|
|----------|-----|---|----|
|row |`object`|선택|[데이터 로우 객체](/docs/appx/row-object)|
|col |`string`|선택|열이름|
|attr|`string`|선택|확인하고자 하는 속성명|

### Return Value
***mixed ( `number` \| `string` )*** : 인자에 따라 행이나 열,셀의 속성 값을 리턴

### Example
```javascript
//특정 열의 타입 확인
if (sheet.getAttribute(null, sheet.getFocusedCol(), "Type") == "Radio") {
    alert("해당 열에는 적용할 수 없습니다.");
}

//합계 행의 셀의 글자색 확인
var fcolor =  sheet.getAttribute( sheet.getRowById("FormulaRow"), sheet.getFocusedCol(), "TextColor");
```

### Read More

- [setAttribute method](./set-attribute)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
