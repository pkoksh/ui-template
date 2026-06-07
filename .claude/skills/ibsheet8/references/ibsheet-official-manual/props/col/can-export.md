---
KEY: canExport
KIND: column-property
PATH: props/col/can-export
ALIAS: 열의, 다운로드, 가능, 여부
ALIAS_EN: can, export
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/can-export
---
# CanExport ***(col)***

> 열의 다운로드 가능 여부.

> 사용자가 엑셀/텍스트 다운로드 시 해당 열을 다운로드 할지 여부를 설정할 수 있습니다.

> Export API([down2Excel](/docs/funcs/excel/down-to-excel), [exportData](/docs/funcs/core/export-data) 등) 호출 시 사용하는 `downCols`와 같이 사용하는 경우 `downCols`의 우선순위가 더 높게 적용됩니다.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|다운로드 불가|
|`1(true)`|다운로드 가능 (`default`)|


### Example
```javascript
//특정 열에 대해 다운로드를 막음
options.Cols = [
    ...
    { Type: "Int", Name: "Rank_Sales", CanExport: 0 ... },
    ...
];
```

### Read More
- [down2Excel method](/docs/funcs/excel/down-to-excel)
- [exportData method](/docs/funcs/core/export-data)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
