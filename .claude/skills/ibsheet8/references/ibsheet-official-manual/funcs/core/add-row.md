---
KEY: addRow
KIND: method
PATH: funcs/core/add-row
ALIAS: sheet.addRow, addRow(), 신규, 행을, 추가합니다
ALIAS_EN: add, row
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/add-row
---
# addRow ***(method)***

> 신규 행을 추가합니다.

> 트리 기능을 사용시에는 `parent`인자를 지정해 줘야 원하는 레벨로 행을 추가할 수 있습니다.

> `render:0` 을 사용하여 화면에 바로 반영하지 않고 `rerender` 호출을 통해 화면에 반영할 때, `Formula` 적용 계산이 필요하다면 `calculate` 함수를 호출해 주어야 `Formula`가 반영 됩니다.

### Syntax
```javascript
object addRow( next, visible, focus, parent, init, render );
```

### Parameters
|Name|Type|Required|Description|
|----------|-----|---|----|
|next|`object`|선택|[데이터 로우 객체](/docs/appx/row-object)
(지정한 행의 위에 신규 행이 생성됨. 값이 없으면 맨 마지막행에 생성)|
|visible|`boolean`|선택|생성 즉시 화면에 반영 여부
**생성된 행의 [Visible](/docs/props/row/visible) 값 설정**
`0(false)`:감춤
`1(true)`:보임 (`default`)|
|focus|`boolean`|선택|생성 후 생성된 행으로 포커스 이동 여부
`0(false)`:포커스 이동 안함
`1(true)`:포커스 이동 (`default`)|
|parent|`object`|선택|[데이터 로우 객체](/docs/appx/row-object) (트리 사용시 부모에 해당하는 행 지정)|
|init|`object`|선택|신규 행에 값/옵션 설정 객체|
|render|`boolean`|선택|즉시 화면 반영 여부
해당 기능을 `0(false)`로 사용했을 경우, 작업 마무리 시에 `rerender()`를 실행해야 화면에 반영 됩니다.
**생성된 행의 [Visible](/docs/props/row/visible) 여부와는 관련 없음**
`0(false)`:반영 안함
`1(true)`:즉시 반영 (`default`)|

### Return Value
***object*** : 생성된 [데이터 로우 객체](/docs/appx/row-object)

### Example
```javascript
// 맨 위에 신규 행을 생성합니다.
sheet.addRow( {"next":sheet.getFirstRow()} )

// 현재 포커스가 위치한 행의 위에 신규 행을 생성합니다.
sheet.addRow( {"next":sheet.getFocusedRow()} );

// 현재 포커스가 위치한 행의 아래에 신규 행을 생성합니다.(focus 이동)
sheet.addRow( {"next":sheet.getNextRow(sheet.getFocusedRow())});

// 트리 사용시 현재 포커스가 위치한 행의 아래에 같은 레벨의 신규 행을 생성합니다.
var nextRow = sheet.getNextSiblingRow(sheet.getFocusedRow());
var parentRow = sheet.getFocusedRow().parentNode;
sheet.addRow( {"next":nextRow, "parent":parentRow} );

// 현재 포커스가 된 행의 자식 노드로 신규 행을 추가합니다.
// next 로 기준 행을 주지 않으면, 자식 노드 맨 마지막에 행이 추가됩니다.
sheet.addRow({"parent":sheet.getFocusedRow()});

// 현재 포커스가 위치한 행의 위에 신규 행을 생성합니다.
// 신규 행의 CONTRACTNO과 CARNO 열에 값을 설정합니다.
// 신규 행의 배경 색상을 빨간색으로 설정합니다.
sheet.addRow({"next":sheet.getFocusedRow(), "init":{"CONTRACTNO":"S155", "CARNO":"1234123", Color:"red"}});
```
### Demo
- [addRow sample](https://codepen.io/ibsheet/pen/dygddxQ)

### Read More
- [addRows method](./add-rows)
- [deleteRow method](./delete-row)
- [deleteRows method](./delete-rows)
- [removeRow method](./remove-row)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|core|8.0.0.3|`init` 인자 추가|
|core|8.0.0.20|`render` 인자 추가|
  