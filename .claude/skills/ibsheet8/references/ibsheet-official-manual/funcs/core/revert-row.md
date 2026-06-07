---
KEY: revertRow
KIND: method
PATH: funcs/core/revert-row
ALIAS: sheet.revertRow, revertRow(), 특정, 행의, 변경된, 내용을, 처음
ALIAS_EN: revert, row
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/revert-row
---
# revertRow ***(method)***
> 특정 행의 변경된 내용을 처음 조회된 값으로 변경합니다.

> `render:0` 을 사용하여 화면에 바로 반영하지 않고 `rerender` 호출하여 화면에 반영시 `Formula` 계산 반영이 필요한 경우에는 `calculate` 함수를 호출해 주어야 반영 됩니다.

### Syntax
```javascript
void revertRow( row, render );
```

### Parameters

|Name|Type|Required| Description |
|----------|-----|---|----|
|row |`object`|필수|[데이터 로우 객체](/docs/appx/row-object)|
|render |`boolean`|선택|즉시 화면 반영 여부
해당 기능을 `0(false)`로 사용했을 경우, 작업 마무리 시에 `rerender()`를 실행해야 화면에 반영 됩니다.
`0(false)`:반영 안함 (`default`)
`1(true)`:즉시 반영|

### Return Value
***none***

### Example
```javascript
// 특정 행에 모든 셀 내용(값)을 처음 조회된 값으로 변경한다.
sheet.revertRow( row, true );
```

### Read More

- [revertCell method](./revert-cell)
- [refreshCell method](./refresh-cell)
- [renderBody method](./render-body)
- [rerender method](./rerender)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
