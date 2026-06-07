---
KEY: canColMove
KIND: config-property
PATH: props/cfg/can-col-move
ALIAS: 사용자가, 시트의, 헤더셀을, 드래그하여, 열의
ALIAS_EN: can, col, move
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/can-col-move
---
# CanColMove ***(cfg)***

> 사용자가 시트의 헤더셀을 드래그하여 열의 위치를 변경하는 기능을 허용할지 여부를 설정합니다.

> 열 이동시 헤더 열과 데이터 열이 같이 이동됩니다.

### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|열 이동 불가능|
|`1`|열 이동 가능 (`default`)|
|`2`|헤더가 2줄 이상일 때 부모 헤더가 열병합 되어있는 경우 병합된 영역 안에서만 이동 가능|

### Example
```javascript
options.Cfg = {
    "CanColMove":0        // 사용자 열 순서 변경 불가
};
```

### Try it
- [Set to 2](https://jsfiddle.net/gh/get/library/pure/ibsheet/ibsheet8-manual-sample/tree/master/samples/properties/Cfg/CanColMove-2/)

### Read More
- [CanMove col](/docs/props/col/can-move)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|core|8.2.0.12|`CanColMove: 2` 기능 추가|
