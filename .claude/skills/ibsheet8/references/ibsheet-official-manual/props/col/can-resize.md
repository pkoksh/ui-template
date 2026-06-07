---
KEY: canResize
KIND: column-property
PATH: props/col/can-resize
ALIAS: 열의, 너비, 변경, 가능여부를, 설정합니다
ALIAS_EN: can, resize, width, change, modify
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/can-resize
---
# CanResize ***(col)***

> 열의 너비 변경 가능여부를 설정합니다.

> 사용자가 헤더 영역에서 열과 열 사이를 드래그 하여 열의 너비를 변경할 수 있는데, 이 기능에 대한 허용 여부를 설정합니다.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|사용자 열 너비 변경 불가|
|`1(true)`|사용자 열 너비 변경 가능 (`default`)|


### Example
```javascript
//특정 열에 대한 너비 조정 불허
options.Cols = [
    ...
    {Type: "Date", Name: "kDate", Width: 110, CanResize: 0 ...},
    ...
];
```

### Read More
- [CanMove col](./can-move)
- [CanSort col](./can-sort)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
