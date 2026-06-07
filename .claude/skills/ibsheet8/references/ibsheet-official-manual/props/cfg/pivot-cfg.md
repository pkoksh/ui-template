---
KEY: pivotCfg
KIND: config-property
PATH: props/cfg/pivot-cfg
ALIAS: 피벗, 시트의, 속성을, 설정합니다
ALIAS_EN: pivot, cfg
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/pivot-cfg
---
# !PivotCfg ***(cfg)***

> 피벗 시트의 Cfg 속성을 설정합니다.

> 원본 시트와 다른 Cfg 값을 설정하고 싶을 때 사용하면 됩니다.

> 설정 값이 없을 경우 피벗 시트는 원본 시트의 속성 값을 따라가게 됩니다. 



### Type
`object`


### 설정 가능한 Cfg 속성 목록
|Value|
|-----|
|`Style`|
|`CtrlARange`|
|`ColorState`|
|`Alternate`|
|`AlternateCount`|
|`AlternateStart`|
|`AlternateType`|
|`SelectingCells`|


### Example

```javascript
options.Cfg = {
    ColorState: 63, // 원본 시트 설정
    Alternate: 2, // 원본 시트 설정
    PivotCfg: {
        ColorState: 0, // 피벗 시트 속성 설정
        Alternate: 0 // 피벗 시트 속성 설정
    }
};

// 피벗 시트 색상 설정
options.Def = {
    PivotRow: {
        Color: '', // 원하는 색상 설정 가능 (default: "245,245,245")
        PivotDataColor: '' // 원하는 색상 설정 가능 (default: "245,255,255")
    }
};
```

### Read More

- [Style cfg](./style)
- [CtrlARange cfg](./ctrl-arange)
- [ColorState cfg](./color-state)
- [Alternate cfg](./alternate)
- [AlternateCount cfg](./alternate-count)
- [AlternateStart cfg](./alternate-start)
- [AlternateType cfg](./alternate-type)


### Since

|product|version|desc|
|---|---|---|
|core|8.1.0.8|기능 추가|
