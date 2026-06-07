---
KEY: addRows
KIND: method
PATH: funcs/core/add-rows
ALIAS: sheet.addRows, addRows(), 신규, 행을, 여러개, 추가합니다
ALIAS_EN: add, rows
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/add-rows
---
# addRows ***(method)***

> 신규 행을 여러개 추가합니다.

> 트리 기능을 사용시에는 `parent`인자를 지정해 줘야 원하는 레벨로 행을 추가할 수 있습니다.

### Syntax
```javascript
object addRows( count, next, focus, parent, valid );
```

### Parameters
|Name|Type|Required|Description|
|----------|-----|---|----|
|count|`number`|필수|추가할 행의 개수|
|next|`object`|선택|[데이터 로우 객체](/docs/appx/row-object)
(지정한 행의 위에 신규행이 생성됨. 값이 없으면 맨 마지막행에 생성)|
|focus|`boolean`|선택|생성 후 생성된 행으로 포커스 이동 여부
`0(false)`:포커스 이동 안함
`1(true)`:포커스 이동 (`default`)|
|parent|`object`|선택|[데이터 로우 객체](/docs/appx/row-object) (트리 사용시 부모에 해당하는 행 지정)|
|valid|`boolean`|선택|행추가 가능여부 확인
(실제로 행이 추가되지 않고, 가능/불가능 여부를 확인해서 리턴)
`0(false)`:행추가 가능여부 확인 안함 (`default`)
`1(true)`:행추가 가능여부 확인 사용|


### Return Value
***object*** : 추가된 행들 중에 최상단 행의 [데이터 로우 객체](/docs/appx/row-object)

### Example
```javascript
//포커스행 위로 신규행을 3개 추가합니다.
var firtAddRow = sheet.addRows( {"count":3, "next":sheet.getFocusedRow()} );

//선택 행 위치에 신규행을 2개 추가합니다.
sheet.addRows({"count":2, "parent":sheet.getFocusedRow().parentNode, "next":sheet.getFocusedRow()});
```

### Read More
- [addRow method](./add-row)
- [deleteRow method](./delete-row)
- [deleteRows method](./delete-rows)
- [removeRow method](./remove-row)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
