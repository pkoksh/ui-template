---
KEY: moveRow
KIND: method
PATH: funcs/core/move-row
ALIAS: sheet.moveRow, moveRow(), 지정한, 행을, 이동합니다
ALIAS_EN: move, row
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/move-row
---
# moveRow ***(method)***
> 지정한 행을 이동합니다. 

> `row`로 지정한 행을 `next`로 지정한 행의 위로 이동시킵니다.

> 트리의 경우, `row`로 지정한 행을 `parent`에 지정된 행의 하위 노드로 이동시키며, `next`를 통해 하위 노드 내에서 들어갈 위치를 지정할 수 있습니다. 

> 포커스가 된 행을 `moveRow`시 움직인 위치로 `focus` 동작이 일어납니다. 포커스 동작이 일어나지 않게 할려면, `focus: 0` 을 주셔서 사용하면 됩니다.


### Syntax
```javascript
boolean moveRow( row, next, render, parent, spannedMove, focus );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|row|`object`|필수|이동할 [데이터 로우 객체](/docs/appx/row-object)|
|next|`object`|필수|복사할 위치에 있는 [데이터 로우 객체](/docs/appx/row-object)
지정행 위로 이동됩니다.(`next`가 없을시 데이터 마지막 행으로 이동)|
|render|`boolean`|선택|즉시 화면 반영 여부
해당 기능을 `0(false)`로 사용했을 경우, 작업 마무리 시에 `rerender()`를 실행해야 화면에 반영 됩니다.
`0(false)`:반영 안함
`1(true)`:즉시 반영 (`default`)|
|parent|`object`|선택|트리기능 사용시 이동할 부모 [데이터 로우 객체](/docs/appx/row-object)|
|spannedMove|`boolean`|선택|인자를 `1(true)`로 주는 경우 머지의 첫번째 행을 이동하면 머지된 행이 모두 이동 여부
`0(false)`:`row`에서 지정한 행만 이동 (`default`)
`1(true)`:`row`에서 지정한 행이 병합된 첫번째 행인 경우, 해당 행에 병합된 행 모두 이동|
|focus|`boolean`|선택|행 이동한 행으로 포커스 이동 여부
`0(false)`:이동한 행으로 포커스 이동 안함 (`default`)
`1(true)`:이동한 행으로 포커스 이동|


### Return Value
***boolean*** : 이동이 성공시 `1(true)`, 실패한 경우(이동할 위치가 원본의 위치와 같은 경우등) `0(false)`를 리턴

### Example
```javascript
//AR5 행을 시트 최 상단으로 이동시킵니다.
sheet.moveRow({row:sheet.getRowById("AR5"), next:sheet.getFirstRow()});

//AR8 행을 시트의 현재 포커스된 행의 자식 노드 중 마지막 위치로 이동시킵니다.
var target = sheet.getRowById("AR8");
sheet.moveRow({row:target, parent:sheet.getFocusedRow()});
```

### Read More
- [copyRow method](./copy-row)
- [copyRows method](./copy-rows)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|core|8.0.0.8|`focus` 인자 추가 및 `moveRow`시 `focus`된 행으로 포커스동작이 발생함.|
