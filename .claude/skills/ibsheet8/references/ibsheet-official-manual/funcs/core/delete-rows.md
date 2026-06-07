---
KEY: deleteRows
KIND: method
PATH: funcs/core/delete-rows
ALIAS: sheet.deleteRows, deleteRows(), 지정한, 행들의, 상태를, 삭제로, 변경
ALIAS_EN: delete, rows, change, modify
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/delete-rows
---
# deleteRows ***(method)***

> 지정한 행들의 <mark>상태를 삭제로 변경</mark>합니다.

> 지정한 행들에는 [Deleted](/docs/props/row/deleted) 속성값이 `1`로 세팅됩니다.

### Syntax
```javascript
boolean deleteRows( rows, del );
```

### Parameters
|Name|Type|Required|Description|
|----------|-----|---|----|
|rows|`array[object]`|필수|[데이터 로우 객체](/docs/appx/row-object) 배열|
|del|`number`|선택|삭제 여부
`0`:삭제취소
`1`:삭제 (`default`)
`2`:삭제후 삭제된 행들 숨김(Visible:`0(false)` 처리|


### Return Value
***boolean*** : 상태 변경 여부 (상태가 삭제/삭제취소로 변경이 이루어지면 true, 변화가 없으면 false 리턴)

### Example
```javascript
//AR5,AR8 행에 대해 상태를 삭제로 변경한다.
sheet.deleteRows({"rows":[sheet.getRowById("AR5"), sheet.getRowById("AR8")],"del":1});
```

### Read More
- [addRow method](./add-row)
- [addRows method](./add-rows)
- [deleteRow method](./delete-row)
- [removeRow method](./remove-row)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
