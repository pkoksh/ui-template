---
KEY: canMove
KIND: column-property
PATH: props/col/can-move
ALIAS: 사용자의, 이동, 가능, 여부를, 설정합니다
ALIAS_EN: can, move
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/can-move
---
# CanMove ***(col)***
> 사용자의 열 이동 가능 여부를 설정합니다.

> 사용자가 헤더 셀을 드래그하여 열의 위치를 변경하는 기능을 허용할지 여부를 설정합니다..

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|사용자 열 이동 불가|
|`1(true)`|사용자 열 이동 가능 (`default`)|

### Example
```javascript
//모든 열의 사용자 위치 변경을 불허
options.Def.Col = {CanMove: 0};
```

### Read More
- [CanColMove cfg](/docs/props/cfg/can-col-move)
- [moveCol method](/docs/funcs/core/move-col)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
