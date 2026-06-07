---
KEY: canDrag
KIND: config-property
PATH: props/cfg/can-drag
ALIAS: 마우스, 드래그로, 행을, 이동할지, 여부를
ALIAS_EN: can, drag
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/can-drag
---
# CanDrag ***(cfg)***

> 마우스 드래그로 행을 이동할지 여부를 설정합니다.


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|마우스 드래그를 통한 행 이동 불가 (`default`)|
|`1(true)`|마우스 드래그를 통한 행 이동 가능|


### Example
```javascript
options.Cfg = {
   "CanDrag": true       //마우스 드래그를 통한 행 이동 설정
};
```

### Try it
- [True](https://jsfiddle.net/gh/get/library/pure/ibsheet/ibsheet8-manual-sample/tree/master/samples/properties/Cfg/CanDrag-true/)

### Read More

- [CanDrag row](/docs/props/row/can-drag)
- [DragCell cfg](./drag-cell)
- [DragObject cfg](./drag-object)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
