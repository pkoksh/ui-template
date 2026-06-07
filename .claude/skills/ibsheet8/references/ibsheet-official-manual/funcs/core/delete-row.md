---
KEY: deleteRow
KIND: method
PATH: funcs/core/delete-row
ALIAS: sheet.deleteRow, deleteRow(), 지정한, 행의, 상태를, 삭제로, 변경
ALIAS_EN: delete, row, change, modify
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/delete-row
---
# deleteRow ***(method)***

> 지정한 행의 <mark>상태를 삭제로 변경</mark>합니다.

> 지정한 행에는 [Deleted](/docs/props/row/deleted) 속성값이 `1`로 세팅됩니다.

> 트리의 경우 행의 상태를 삭제로 변경할 경우 행의 자식 행들도 삭제 상태로 변경됩니다.

### Syntax
```javascript
boolean deleteRow( row , del , valid, visible);
```

### Parameters
|Name|Type|Required|Description|
|----------|-----|---|----|
|row|`object`|필수|[데이터 로우 객체](/docs/appx/row-object)|
|del|`number`|선택|삭제 여부
`0`:삭제취소
`1`:삭제 (`default`)|
|valid|`boolean`|선택|삭제/삭제취소 가능여부 확인
(실제로 삭제/삭제취소 되진 않고 삭제/삭제취소 가능/불가능 여부를 확인해서 리턴)
`0(false)`:삭제/삭제취소 가능여부 확인 안함 (`default`)
`1(true)`:삭제/삭제취소 가능여부 확인 사용|
|visible|`boolean`|선택|삭제 행을 화면에 보여줄지 여부
`0(false)`:삭제 행 감춤
`1(true)`:삭제 행 보임 (`default`)|


### Return Value
***boolean*** : 상태 변경여부 (상태가 삭제/삭제취소로 변경이 이루어지면 true, 변화가 없으면 false 리턴)

### Example
```javascript
//AR5 행에 대해 상태를 삭제로 변경한다.
sheet.deleteRow({row:sheet.getRowById("AR5"), del:1});
```

### Read More
- [addRow method](./add-row)
- [addRows method](./add-rows)
- [deleteRows method](./delete-rows)
- [removeRow method](./remove-row)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|core|8.1.0.38|visible 기능 추가|
