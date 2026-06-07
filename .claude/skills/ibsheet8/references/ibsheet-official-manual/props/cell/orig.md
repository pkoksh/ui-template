---
KEY: orig
KIND: cell-property
PATH: props/cell/orig
ALIAS: 셀에, 최초, 로딩된, 데이터를, 담고
ALIAS_EN: orig
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cell/orig
---
# Orig ***(cell)***

> 셀에 최초 로딩된 데이터를 담고 있습니다.

> 해당 셀에 대한 최초 조회시 데이터를 알고자 할 때 확인 용도로 사용해 주세요.
### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`Orig`|처음 로딩된 데이터|


### Example
```javascript
//수정하기 전, 최초 데이터를 확인한다.
var orgValue = sheet.getAttribute(sheet.getRowById("AR99"), "CLS", "Orig");
```

### Read More
- [revertCell method](/docs/funcs/core/revert-cell)
- [revertRow method](/docs/funcs/core/revert-row)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
