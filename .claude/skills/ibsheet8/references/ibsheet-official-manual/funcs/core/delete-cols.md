---
KEY: deleteCols
KIND: method
PATH: funcs/core/delete-cols
ALIAS: sheet.deleteCols, deleteCols(), 지정한, 열들의, 상태를, 삭제, 변경
ALIAS_EN: delete, cols, remove, change, modify
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/delete-cols
---
# !deleteCols ***(method)***
> 지정한 열들의 <mark>상태를 `삭제`로 변경</mark>하고, 영역을 삭제할 수 있습니다.


### Syntax
```javascript
void deleteCols(col , del);
```

### Parameters
|Name|Type|Required|Description|
|----------|-----|---|----|
|cols|`array`|필수|삭제할 열 이름|
|del|`number`|선택|삭제 여부
`0`:삭제취소
`1`:삭제  (`default`)
`2`:영역삭제(remove)|

### Return Value
***none***

### Example
```javascript
//sName, sAddr 열에 대해 상태를 삭제로 변경한다.
sheet.deleteRow({cols:["sName", "sAddr"], del:1});
```

### Read More
- [addCol method](./add-col)
- [deleteCol method](./delete-col)
- [removeCol method](./remove-col)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|