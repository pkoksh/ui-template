---
KEY: canCopyPaste
KIND: column-property
PATH: props/col/can-copy-paste
ALIAS: 열에, 통한, 복사와, 붙여넣기를, 제한합니다
ALIAS_EN: can, copy, paste
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/can-copy-paste
---
# CanCopyPaste ***(col)***
> 열에 대한 `ctrl+c`, `ctrl+x`를 통한 복사와 `ctrl+v`를 통한 붙여넣기를 제한합니다.


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|복사/붙여넣기 불가
`CanCopyPaste: 0` 이 설정된 열에서는 `ctrl+c`, `ctrl+x` 를 하는 경우 빈셀이 복사되고 `ctrl+v`는 무시됩니다.
 시트 내에서 드래그를 통해 영역을 복사/붙여넣기 할때는 `CanCopyPaste: 0` 이 설정된 열은 ,마치 없는거 처럼 건너뛰고 클립보드에 복사됩니다.
|
|`1(true)`|복사/붙여넣기 가능 (`default`)|



### Example
```javascript
//특정 열의 데이터는 복사 불가
options.Cols = [
    ...
    {Type: "Int", Name: "Rank_Sales", CanCopyPaste: false ...},
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
