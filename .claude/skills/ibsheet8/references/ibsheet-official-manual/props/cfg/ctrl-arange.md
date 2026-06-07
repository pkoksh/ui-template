---
KEY: ctrlArange
KIND: config-property
PATH: props/cfg/ctrl-arange
ALIAS: 사용하여, 선택복사시, 영역을, 헤더에서, 풋까지
ALIAS_EN: ctrl, arange
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/ctrl-arange
---
# CtrlARange ***(cfg)***

> `Ctrl + A` 를 사용하여 선택복사시 영역을 헤더에서 풋까지 보도록 하는 기능입니다. 

> 기능 사용시 `CanSelect` 의 유무를 보기 때문에 `Def.Header, Def.Foot` 에 `CanSelect: 1` 을 설정하면 됩니다. 

> 예를 들어 `Header` 에만 `CanSelect: 1` 로 설정하고 `Foot` 에 `CanSelect: 0` 으로 설정시에 `Foot` 은 선택복사가 되지 않습니다.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|선택 복사시 데이터 영역만 봄. (`default`)|
|`1(true)`|선택 복사시 헤더부터 풋영역까지 보도록 함.|


### Example
```javascript
options.Def = {
    Header: {
        CanSelect: true
    },
    Foot: {
        CanSelect: true
    },
};
options.Cfg = {
    CtrlARange: true        // Ctrl + A 의 선택복사 영역을 헤더부터 풋 까지 보게 합니다.
};
```

### Read More
- [CanSelect row](/docs/props/row/can-select)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.23|기능 추가|
