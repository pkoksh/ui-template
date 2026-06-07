---
KEY: removeRow
KIND: method
PATH: funcs/core/remove-row
ALIAS: sheet.removeRow, removeRow(), 지정한, 행을, 삭제
ALIAS_EN: remove, row, delete
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/remove-row
---
# removeRow ***(method)***
> 지정한 행을 삭제 합니다. 

> [데이터 로우 객체](/docs/appx/row-object)가 삭제되고, 화면에서도 즉시 반영됩니다. 

> `removeRow`를 사용해서 여러행을 지우는 경우, `norender`인자를 `1`로 설정 후, 작업을 하신 후, `renderBody()`를 무조건 사용하셔야합니다. 또한 머지된 시트에서 사용시에는 `renderBody()`, `setAutoMerge()`까지 무조건 사용하여야 합니다. 
 여러행을 지우 실 때는 `removeRows` 를 사용하시면 위의 과정을 할 필요가 없습니다.

### Syntax
```javascript
void removeRow( row, nomerge, norender );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|row|`object`|필수|[데이터 로우 객체](/docs/appx/row-object)|
|nomerge|`boolean`|선택|[DataMerge cfg](/docs/props/cfg/data-merge) 값이 `0` 외의 값일 때, 머지 계산을 바로 할 것인지 여부
`0(false)`:행 삭제 후, 머지 계산 (`default`)
`1(true)`:행 삭제 후, 머지 계산 안함|
|norender|`boolean`|선택<mark>(사용주의)</mark>|즉시 화면에 반영할 것인지 여부
해당 기능을 사용한 뒤, 다른 동작을 실행 할 경우 `renderBody()`를 반드시 먼저 실행 해야 합니다.
`0(false)`:즉시 반영 (`default`)
`1(true)`:반영 안함
|

### Return Value
***none***

### Example
```javascript
// AR5 행을 제거합니다.
sheet.removeRow({row:sheet.getRowById("AR5")});

// 체크된 행들을 제거 합니다.
var rows = sheet.getRowsByChecked("chk");
for (var i = 0; i < rows.length; i++) {
    sheet.removeRow(rows[i], null, 1);
}
sheet.renderBody(); // 무조건 해주어야 다른 동작이 일어남.

var rows = sheet.getRowsByChecked("chk");
for (var i = 0; i < rows.length; i++) {
    sheet.removeRow(rows[i], null, 1);
}
sheet.renderBody(); // 무조건 해주어야 다른 동작이 일어남.
sheet.setAutoMerge(3,3,1); // 머지된 시트의 경우 머지 동작까지 다시 해줘야합니다.
```

### Read More
- [deleteRow method](./delete-row)
- [deleteRows method](./delete-rows)
- [removeRows method](./remove-rows)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|core|8.0.0.7|`norender` 추가|
