---
KEY: colMerge
KIND: column-property
PATH: props/col/col-merge
ALIAS: 데이터, 영역에서, 기준, 병합, 실행
ALIAS_EN: col, merge, data, combine
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/col-merge
---
# ColMerge ***(col)***

> 데이터 영역에서 값 기준 병합 실행([DataMerge](/docs/props/cfg/data-merge), [HeaderMerge](/docs/props/cfg/header-merge))시 열을 포함할지 여부를 설정합니다.

> 해당 속성은 지정한 컬럼 내에 `병합할지 여부`를 설정합니다.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|해당 컬럼을 병합하지 않습니다. |
|`1(true)`|해당 컬럼을 병합 대상에 포함합니다. (`default`)|

### Example
```javascript
options.Cols = [
    ...

    {Type: "Text", Name: "Dept", ColMerge: false, Width: 100 ...},
    ...
];
```

### Read More

- [RowMerge row](/docs/props/row/row-merge)
- [ColMerge cell](/docs/props/cell/col-merge)
- [DataMerge cfg](/docs/props/cfg/data-merge)
- [HeaderMerge cfg](/docs/props/cfg/header-merge)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
