---
KEY: setSelectingCells
KIND: method
PATH: funcs/core/set-selecting-cells
ALIAS: sheet.setSelectingCells, setSelectingCells(), 값을, 동적으로, 바꿀
ALIAS_EN: set, selecting, cells
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/set-selecting-cells
---
# setSelectingCells ***(method)***
> `SelectingCells`의 값을 동적으로 바꿀 수 있습니다. 

> 단, 멀티레코드([MultiRecord](/docs/props/cfg/multi-record))는 `SelectingCells` 의 값이 `0`으로 고정됩니다.

### Syntax
```javascript
boolean setSelectingCells( mode );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|mode|`number`|선택|선택할 모드 (`default: 1`)|


### Return Value
***boolean*** : 동적으로 바뀌었는지 확인.

### Example
```javascript
// SelectingCells를 0 으로 바꿉니다.
sheet.setSelectingCells(0);
```

### Read More
- [SelectingCells cfg](/docs/props/cfg/selecting-cells)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.7|기능 추가|
