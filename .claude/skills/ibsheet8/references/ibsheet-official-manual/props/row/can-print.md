---
KEY: canPrint
KIND: row-property
PATH: props/row/can-print
ALIAS: 행의, 프린트, 가능, 여부
ALIAS_EN: can, print
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/row/can-print
---
# CanPrint ***(row)***

> 행의 프린트 가능 여부.

> [doPrint](/docs/funcs/core/do-print) 또는 [down2Pdf](/docs/funcs/excel/down-to-pdf)를 이용하여 프린트 할 경우 해당 행을 프린트 할지 여부를 설정할 수 있습니다.

### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|프린트 불가|
|`1`|프린트 가능 (`default`)|


### Example
```javascript
//특정 행에 대해서 프린트를 막는다.
var row = sheet.getRowById("AR55");
sheet.setAttribute(row, null, 'CanPrint', 0);
```

### Read More
- [doPrint method](/docs/funcs/core/do-print)
- [down2Pdf method](/docs/funcs/excel/down-to-pdf)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
