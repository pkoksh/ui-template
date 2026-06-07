---
KEY: deleteCol
KIND: method
PATH: funcs/core/delete-col
ALIAS: sheet.deleteCol, deleteCol(), 지정한, 열의, 상태를, 삭제로, 변경
ALIAS_EN: delete, col, change, modify
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/delete-col
---
# !deleteCol ***(method)***
> 지정한 열의 <mark>상태를 삭제로 변경</mark>합니다.

> 지정한 열에는 [Deleted](/docs/props/row/deleted) 속성값이 `1`로 세팅됩니다.

### Syntax
```javascript
boolean deleteCol( col, del, valid );
```

### Parameters
|Name|Type|Required|Description|
|----------|-----|---|----|
|col|`string`|필수|삭제할 열 이름|
|del|`number`|선택|삭제 여부
`0`:삭제취소
`1`:삭제 (`default`)|
|valid|`boolean`|선택|삭제 가능여부 확인
(실제로 삭제되진 않고 삭제 가능/불가능 여부를 확인해서 리턴)
`0(false)`:삭제 기능여부 확인 안함 (`default`)
`1(true)`:삭제 가능여부 확인 사용|

### Return Value
***boolean*** : 상태 변경여부 (상태가 삭제/삭제취소로 변경이 이루어지면 true, 변화가 없으면 false 리턴)

### Example
```javascript
//sName 열에 대해 상태를 삭제로 변경한다.
sheet.deleteCol({col:"sName", del:1});
```

### Read More
- [addCol method](./add-col)
- [deleteCols method](./delete-cols)
- [removeCol method](./remove-col)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|