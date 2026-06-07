---
KEY: canFocus
KIND: row-property
PATH: props/row/can-focus
ALIAS: 행에, 포커스, 가능, 여부를, 설정합니다
ALIAS_EN: can, focus
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/row/can-focus
---
# CanFocus ***(row)***
> 행에 대한 포커스 가능 여부를 설정합니다.


### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|포커스가 불가능해 집니다|
|`1`|포커스가 가능합니다|
|`2`|마우스 클릭으로만 포커스가 가능해 집니다.|


### Example
```javascript
//특정 행의 포커스를 막는다.
var row = sheet.getRowById("AR55");
row["CanFocus"] = 0;
```

### Read More
- [CanFocus col](/docs/props/col/can-focus)
- [CanFocus cell](/docs/props/cell/can-focus)



### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
