---
KEY: canSelect
KIND: row-property
PATH: props/row/can-select
ALIAS: 행의, 선택, 가능여부를, 설정합니다, 드래그를
ALIAS_EN: can, select, selection
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/row/can-select
---
# CanSelect ***(row)***
> 행의 선택 가능여부를 설정합니다.(드래그를 통한 영역선택)

> 속성이 `0(false)`인 경우, 특정 행에 대해 선택(selecting)을 막을 수 있습니다.

> 드래그를 통한 선택시 `CanSelect: 0`인 행은 건너 뛰고 선택됩니다.


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|선택 불가|
|`1(true)`|선택 가능|



### Example
```javascript
//특정 행에 대해서 드래그를 막는다.
var row = sheet.getRowById("AR55");
row["CanSelect"] = 0;
```

### Read More
- [CanSelect cfg](/docs/props/cfg/can-select)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
