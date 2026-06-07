---
KEY: selectingFocus
KIND: config-property
PATH: props/cfg/selecting-focus
ALIAS: 포커스를, 가진, 영역으로, 자동으로, 선택할지를
ALIAS_EN: selecting, focus
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/selecting-focus
---
# !SelectingFocus ***(cfg)***

> 포커스를 가진 영역으로 자동으로 선택할지를 설정합니다.

> 포커스된 셀이나 영역이 변경되는 경우 시트의 선택된 셀은 초기화 됩니다. 



### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|포커스를 가진 영역으로 `select` 하지 않음 (`default`)|
|`1`|포커스를 가진 영역으로 자동으로 `select` 함
주의: shift+방향키 `select`에 문제 있음|
|`2`|포커스를 가진 한 셀만 `select` 함|


### Example
```javascript
options.Cfg = {
   SelectingCells: 0,     // 개별 셀 선택 불가능
   ...
};
```

### Read More
- [CanSelect cfg](./can-select)
- [SelectingCells cfg](./selecting-cells)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
