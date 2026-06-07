---
KEY: canFocus
KIND: column-property
PATH: props/col/can-focus
ALIAS: 열에, 클릭이나, 키보드를, 통한, 이동시
ALIAS_EN: can, focus
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/can-focus
---
# CanFocus ***(col)***
> 열에 클릭이나 키보드를 통한 이동시 포커스 가능 여부를 설정합니다.

> `CanFocus: 0`으로 설정된 열에 대해서는 클릭을 통한 포커스 진입이 불가능하고, 키보드의 Tab 키를 이용한 이동시 열을 건너뛰게 됩니다.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|포커스 진입 불가|
|`1(true)`|포커스 집입 가능 (`default`)|



### Example
```javascript
//특정 열에 대해 포커스가 이루어지지 않게끔 설정
options.Cols = [
    ...
    {Type: "Text", Name: "EM_DC", CanFocus: 0 ...},
    ...
];
```

### Read More
- [CanEdit col](./can-edit)
- [CanMove col](./can-move)
- [CanResize col](./can-resize)
- [CanSort col](./can-sort)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
