---
KEY: refreshCell
KIND: method
PATH: funcs/core/refresh-cell
ALIAS: sheet.refreshCell, refreshCell(), 특정, 셀의, 변경된, 내용을, 화면에
ALIAS_EN: refresh, cell
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/refresh-cell
---
# refreshCell ***(method)***
> 특정 셀의 변경된 내용을 화면에 반영합니다.

> `render` 함수와 달리 화면의 깜빡임이 없습니다.

> 행 전체의 변경 내용을 반영할 때는 [refreshRow](./refresh-row)함수를 사용하는게 좋습니다.

### Syntax
```javascript
void refreshCell( row, col );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|row |`object`|필수|[데이터 로우 객체](/docs/appx/row-object)|
|col |`string`|필수|열이름|

### Return Value
***none***

### Example
```javascript
//특정 셀에 변경된 내용(값,속성)을 화면에 반영한다.
sheet.refreshCell( sheet.getFirstVisibleRow(), "EMT_DESC" );
```

### Read More

- [refreshRow method](./refresh-row)
- [renderBody method](./render-body)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
