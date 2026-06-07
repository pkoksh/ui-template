---
KEY: moveCol
KIND: method
PATH: funcs/core/move-col
ALIAS: sheet.moveCol, moveCol(), 지정한, 열의, 위치를, 이동합니다
ALIAS_EN: move, col
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/move-col
---
# moveCol ***(method)***
> 지정한 열의 위치를 이동합니다.

> `tocol`을 공백("")으로 설정하는 경우 `right` 인자에 따라 section의 맨 앞이나 맨 뒤로 이동됩니다.

### Syntax
```javascript
boolean moveCol( col, tocol, right, norender );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|col|`string`|필수|옮길 열이름|
|tocol|`string`|필수|옮겨질 열이름|
|right|`boolean`|선택|`toCol`에서 지정한 열에 우측으로 이동할지 여부
`0(false)`:`toCol`에서 지정한 열에 좌측으로 이동 (`default`)
`1(true)`:`toCol`에서 지정한 열에 우측으로 이동|
|norender|`boolean`|선택<mark>(사용주의)</mark>|즉시 화면에 반영할 것인지 여부
해당 기능을 사용한 뒤, 다른 동작을 실행 할 경우 `rerender()`를 반드시 먼저 실행 해야 합니다.
`0(false)`:즉시 반영 (`default`)
`1(true)`:반영 안함
|


### Return Value
***boolean*** : 정상적으로 옮겨졌는지 여부(인자가 잘못되어 이동에 실패한 경우 `undefined` 리턴)

### Example
```javascript
//CUSTOMER_NAME 열을 AMOUNT12 열의 오른쪽으로 이동합니다.
sheet.moveCol("CUSTOMER_NAME", "AMOUNT12", 1, 0);
```

### Read More
- [addCol method](./add-col)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
