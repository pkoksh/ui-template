---
KEY: forceEnterEdit
KIND: config-property
PATH: props/cfg/force-enter-edit
ALIAS: 값이, 아닌, 경우, 포커스, 상태에서
ALIAS_EN: force, enter, edit, focus
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/force-enter-edit
---
# ForceEnterEdit ***(cfg)***

> [EnterMode](/docs/props/cfg/enter-mode)의 `mode`값이 `0`이 아닌 경우 포커스 상태에서 편집 상태가 되고 이후의 동작이 되도록 설정하는 옵션입니다.


### Type
`boolean`


### Options
|Value|Description|
|-----|-----|
|`0(false)`|`EnterMode`의 기본 동작 수행|
|`1(true)`|포커스 상태에서는 편집 상태로 바뀐 후 `EnterMode`의 기본 동작 수행 (`default`)|


### Example
```javascript
options.Cfg{
   // enter 키 이동시 편집 상태일때는 편집을 종료하고 우측 셀로 이동 (포커스 상태일 때는 우측 셀로 바로 이동)
   EnterMode: 3,
   ForceEnterEdit: false
   ...
};
```

### Read More

- [EnterMode cfg](/docs/props/cfg/enter-mode)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
