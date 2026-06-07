---
KEY: dblClickSelectionMode
KIND: config-property
PATH: props/cfg/dbl-click-selection-mode
ALIAS: 데이터, 영역에서, 마우스, 더블, 클릭
ALIAS_EN: dbl, click, selection, mode, data
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/dbl-click-selection-mode
---
# !DblClickSelectionMode ***(cfg)***
> 데이터 영역에서 마우스 더블 클릭 동작하는 `Selection` 정보 초기화의 동작 여부를 설정합니다.

> `1(true)`로 설정 시, 행 선택 정보가 초기화 되지 않습니다.

> [SelectiongCells](./selecting-cells)가 `2`외일 때에는 행 선택된 경우 [Selected](/docs/props/row/selected)의 값이 `1`로 반환됩니다.

> [SelectiongCells](./selecting-cells)가 `2`일 때에는 행 선택된 경우 [Selected](/docs/props/row/selected)의 값이 `2`로 반환됩니다.


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|데이터 영역 더블 클릭 시 `Selection` 정보 초기화 (`defalut`)|
|`1(true)`|데이터 영역 더블 클릭 시 행 선택 정보는 초기화 하지 않음|

### Example
```javascript
options.Cfg = {
    DblClickSelectionMode: true  // 데이터 영역에서 마우스 더블 클릭 시 행 선택 정보는 초기화 하지 않도록 설정
};
```

### Read More
- [SelectingCells cfg](./selecting-cells)
- [Selected row](/docs/props/row/selected)

### Since

|product|version|desc|
|---|---|---|
|core|8.3.0.43|기능 추가|
