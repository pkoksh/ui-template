---
KEY: moveDeselectMode
KIND: config-property
PATH: props/cfg/move-deselect-mode
ALIAS: 해당, 옵션, 설정, 방향키, 페이지
ALIAS_EN: move, deselect, mode, config, setting, option
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/move-deselect-mode
---
# MoveDeselectMode ***(cfg)***

> 해당 옵션 설정 후 **방향키, 페이지 업다운 키, 홈 엔드 키** 입력시 현재 선택된 영역이 해제됩니다.


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|방향키, 페이지 업다운 키, 홈 엔드 키 입력시에도 현재 선택된 영역이 해제되지 않음. (`default`)|
|`1(true)`|방향키, 페이지 업다운 키, 홈 엔드 키 입력시 현재 선택된 영역 해제|

### Example
```javascript
options.Cfg = {
    MoveDeselectMode: true
};
```

### Read More
- [CanSelect cfg](./can-select)
- [SelectingCells cfg](./selecting-cells)
- [Selected row](/docs/props/row/selected)
- [Selected col](/docs/props/col/selected)
- [Selected cell](/docs/props/cell/selected)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.5|기능 추가|
