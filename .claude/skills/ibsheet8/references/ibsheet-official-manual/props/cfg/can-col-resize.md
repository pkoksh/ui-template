---
KEY: canColResize
KIND: config-property
PATH: props/cfg/can-col-resize
ALIAS: 마우스를, 통한, 너비, 조정의, 가능여부를
ALIAS_EN: can, col, resize, width
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/can-col-resize
---
# CanColResize ***(cfg)***

> 마우스를 통한 열 너비 조정의 가능여부를 설정할 수 있습니다. 

> 기본값은 `1(true)` 로 헤더 영역의 열과 열 사이에서 마우스를 이용하여 너비조절을 할 수 있습니다.



### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|열 너비 조정 불가능|
|`1(true)`|열 너비 조정 가능 (`default`)|


### Example
```javascript
options.Cfg = {
    "CanColResize": true        // 열 너비 조정 불허
};
```

### Try it
- [True by default](https://jsfiddle.net/gh/get/library/pure/ibsheet/ibsheet8-manual-sample/tree/master/samples/properties/Cfg/CanColResize-true/)

### Read More
- [CanResize col](/docs/props/col/can-resize)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
