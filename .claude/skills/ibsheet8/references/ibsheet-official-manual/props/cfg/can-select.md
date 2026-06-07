---
KEY: canSelect
KIND: config-property
PATH: props/cfg/can-select
ALIAS: 또는, 선택이, 가능한지에, 여부를, 설정합니다
ALIAS_EN: can, select
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/can-select
---
# CanSelect ***(cfg)***

> 행 또는 셀 선택이 가능한지에 대한 여부를 설정합니다. 

> 셀에 포커스를 주는 것과 셀 선택을 하는 것은 다르게 동작이 가능합니다. 

> 포커스가 있는 행 또는 셀 과 다르게 다른 영역의 셀과 행들을 선택할 수 있으며, 이 때는 `CanSelect` 속성에 따라 동작합니다.

> 기본적으로 행를 선택하되 셀과 열을 선택하지 않을 때 `SelectingCells: 0`  을 설정할 수 있습니다. 

> 기본값은 `1(true)` 입니다.


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|행 또는 셀 선택 불가|
|`1(true)`|행 또는 셀 선택 가능 (`default`)|


### Example
```javascript
options.Cfg = {
  "CanSelect": true,          // 시트 선택 가능
  "SelectingCells": 0,     // 개별 셀 선택 불가능
};
```

### Read More
- [SelectingCells cfg](./selecting-cells)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
