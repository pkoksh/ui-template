---
KEY: remove-Col
KIND: method
PATH: funcs/core/remove-Col
ALIAS: sheet.remove-Col, remove-Col(), 지정한, 열의, 데이터와, 영역을, 삭제합니다
ALIAS_EN: remove-, col
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/remove-Col
---
# removeCol ***(method)***
> 지정한 열의 데이터와 영역을 삭제합니다. 

> 여러 컬럼을 `remove` 할 시 `render` 인자를 `false` 로 하여 작업 후에는 `rerender` 를 무조건 호출하셔야 합니다.

### Syntax
```javascript
void removeCol( col, render );
```

### Parameters
|Name|Type|Required|Description|
|----------|-----|---|----|
|col|`string`|필수|삭제할 열 이름|
|render|`boolean`|선택|즉시 화면 반영 여부
해당 기능을 `0(false)`로 사용했을 경우, 작업 마무리 시에 `rerender()`를 실행해야 화면에 반영 됩니다.
`0(false)`:반영 안함
`1(true)`:즉시 반영 (`default`)|

### Return Value
***none***

### Example
```javascript
// sName 열을 삭제한다.
sheet.removeCol("sName");

// render 인자 false
for (var i = 0; i < 50; i++) {
  sheet.removeCol( "EXT_SUBSUM" + i, false );
}
sheet.rerender();
```

### Read More


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|core|8.0.0.17|`render` 인자 추가|
