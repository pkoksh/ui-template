---
KEY: revertCell
KIND: method
PATH: funcs/core/revert-cell
ALIAS: sheet.revertCell, revertCell(), 특정, 셀의, 변경된, 내용을, 처음
ALIAS_EN: revert, cell
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/revert-cell
---
# revertCell ***(method)***
> 특정 셀의 변경된 내용을 처음 조회된 값으로 변경합니다.

### Syntax
```javascript
void revertCell( row, col, render );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|row |`object`|필수|[데이터 로우 객체](/docs/appx/row-object)|
|col |`string`|필수|열이름|
|render |`boolean`|선택|즉시 화면 반영 여부
해당 기능을 `0(false)`로 사용했을 경우, 작업 마무리 시에 `rerender()`를 실행해야 화면에 반영 됩니다.
`0(false)`:반영 안함 (`default`)
`1(true)`:즉시 반영|

### Return Value
***none***

### Example
```javascript
// 특정 셀에 내용(값)을 처음 조회된 값으로 변경한다.
sheet.revertCell( sheet.getFirstVisibleRow(), "EMT_DESC", true );
```

### Read More

- [revertRow method](./revert-row)
- [refreshRow method](./refresh-row)
- [refreshCell method](./refresh-cell)
- [renderBody method](./render-body)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
