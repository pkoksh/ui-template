---
KEY: expanded
KIND: row-property
PATH: props/row/expanded
ALIAS: 트리, 기능, 사용시, 행의, 접힘
ALIAS_EN: expanded, tree, hierarchy
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/row/expanded
---
# Expanded ***(row)***

> 트리 기능 사용시 행의 접힘/펼침 여부를 설정합니다.

<!--!
> `[비공개 설명]` (cell) [ExpandedCols](/docs/props/cell/expand-cols), (cell) [ExpandedRows](/docs/props/cell/expand-rows)로 사용하는 접힘/펼침 여부도 설정가능합니다.
!-->

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|접힘|
|`1(true)`|펼침|


### Example
```javascript
//특정행의 접힘여부 확인
var ep = sheet.getAttribute(sheet.getFocusedRow(), null, "Expanded");

//특정행을 펼칩니다. setExpandRow api 사용
sheet.setExpandRow(sheet.getRowByIndex(4), null, 1);
```

### Read More

- [showTreeLevel method](/docs/funcs/core/show-tree-level)
- [setExpandRow method](/docs/funcs/core/set-expand-row)
- [onBeforeExpand event](/docs/events/on-before-expand)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
