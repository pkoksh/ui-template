---
KEY: copyValue
KIND: cell-property
PATH: props/cell/copy-value
ALIAS: 셀의, 원래, 대신, 혹은, 클립보드로
ALIAS_EN: copy, value
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cell/copy-value
---
# CopyValue ***(cell)***

> 셀의 원래 값 대신 `Ctrl+C(혹은 Ctrl+X)`시 클립보드로 복사될 값을 설정합니다.

> 특히 타입이 Html이나 버튼 같이 편집이 불가능한 셀에 유용하게 사용하실 수 있습니다.


### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|복사시 클립보드로 들어갈 문자|


### Example
```javascript
//특정 열에 대해서 복사시 원래 데이터가 아닌 다른 문자가 복사되게 끔 합니다.
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "CopyValue", "복사불가필드");
```

### Read More
- [SortValue cell](./sort-value)
- [FilterValue cell](./filter-value)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
