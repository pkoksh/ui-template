---
KEY: dragCopy
KIND: config-property
PATH: props/cfg/drag-copy
ALIAS: 개의, 시트, 사이에서, 이동시, 원본
ALIAS_EN: drag, copy, sheet, grid
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/drag-copy
---
# DragCopy ***(cfg)***

> 두 개의 시트 사이에서 행 이동시 원본 시트의 행 상태를 변경할지 여부를 설정합니다.


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|드래그 이동시 원본 시트의 행이 `Deleted` 상태로 변경됨 (`default`)|
|`1(true)`|드래그 이동시 원본 시트의 행은 변화없음|


### Example
```javascript
options.Cfg = {
   "DragCopy": true       //마우스 드래그를 통한 행 이동시 원본시트의 상태변화 없음
};
```

### Read More
- [CanDrag cfg](/docs/props/cfg/can-drag)
- [CanDrag row](/docs/props/row/can-drag)
- [onEndDrag event](/docs/events/on-end-drag)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
