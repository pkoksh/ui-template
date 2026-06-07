---
KEY: dragCell
KIND: config-property
PATH: props/cfg/drag-cell
ALIAS: 드래그, 단위, 여부를, 설정합니다
ALIAS_EN: drag, cell
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/drag-cell
---
# DragCell ***(cfg)***

> 드래그 시 셀 단위 드래그 여부를 설정합니다.


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|행 단위 드래깅 (`default`)|
|`1(true)`|셀 단위 드래깅|


### Example
```javascript
options.Cfg = {
   "CanDrag": true, // 마우스 드래그를 통한 이동 설정
   "DragCell": true // 셀 단위 드래그 설정
};
```

### Read More

- [CanDrag cfg](/docs/props/cfg/can-drag)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.27|기능 추가|
