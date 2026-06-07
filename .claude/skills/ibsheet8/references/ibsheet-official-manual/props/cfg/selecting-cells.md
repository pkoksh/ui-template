---
KEY: selectingCells
KIND: config-property
PATH: props/cfg/selecting-cells
ALIAS: 개별적인, 선택, 혹은, 범위, 선택이
ALIAS_EN: selecting, cells, select, selection
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/selecting-cells
---
# SelectingCells ***(cfg)***

> 개별적인 셀 선택 혹은 셀 범위 선택이 가능한지 여부와 셀 선택시 행와 열 선택에 주는 영향에 대해 설정 합니다.

> 옵션을 `1` 이상으로 설정하는 경우 **Row, Col, Cell** 별 `Selected` 속성값의 영향을 받습니다.



### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|개별 셀 선택 불가. 행 단위로만 선택만 가능|
|`1`|셀,행/열단위로 선택 가능 (`default`) 
Row 내의 선택된 셀이 없을때, Row의 `Selected = 0` 를 가짐 
Row 내의 모든 셀이 선택된 경우, Row의 `Selected = 1` 를 가짐 
Row 내의 일부 셀만 선택된 경우, Row 의 `Selected = 2` 를 가짐. 단, 개별 셀의 `Selected = 1` 로 설정해야 함 |
|`2`|개별 셀만 선택 가능. Row 내의 모든 셀이 선택된 경우, Row의 `Selected = 1` 를 가지지 않음. 
Row 내의 선택된 셀이 없을때, Row의 `Selected = 0` 를 가짐 
Row 내의 일부 셀만 선택된 경우, Row 의 `Selected = 2` 를 가짐. 단, 개별 셀의 `Selected = 1` 로 설정해야 함 |
|`3`|개별 셀과 행/열선택이 상관 없이 독립적으로 선택 가능
Row 내 선택 셀이 없고, Row 도 선택 안된 경우. Row 의 `Selected = 0` 
Row 내 선택 셀이 없고, Row가 선택된 경우. Row 의 `Selected = 1` 
Row 내 일부 셀이 선택되고, Row가 선택 안된 경우. Row 의 `Selected = 2`. 단, 개별 셀의 `Selected = 1` 로 설정해야 함 
Row 내 일부 셀이나 전체 셀이 선택되고, Row가 선택된 경우. Row 의 `Selected = 3`|
|`4`|`SEQ` 컬럼을 선택할 경우에는 `SelectingCells:0`으로 동작. 그 외 컬럼을 선택할 경우에는 `SelectingCells:1`로 동작.|


### Example
```javascript
options.Cfg = {
  SelectingCells: 0,     // 개별 셀 선택 불가능
  ...
};
```

### Read More
- [CanSelect cfg](./can-select)
- [Selected row](/docs/props/row/selected)
- [Selected col](/docs/props/col/selected)
- [Selected cell](/docs/props/cell/selected)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
