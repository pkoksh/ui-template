---
KEY: colMerge
KIND: cell-property
PATH: props/cell/col-merge
ALIAS: 헤더, 영역에서, 기준, 병합, 실행
ALIAS_EN: col, merge, header, combine
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cell/col-merge
---
# ColMerge ***(Cell)***

> 헤더 영역에서 값 기준 병합 실행([DataMerge](/docs/props/cfg/DataMerge), [HeaderMerge](/docs/props/cfg/HeaderMerge))시 열을 포함할지 여부를 설정합니다.

> 병합 대상에서 제외/포함할 열에 해당하는 헤더 영역의 <b>모든 셀</b>에 설정해야 합니다.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|병합 할 때 열을 포함하지 않습니다. |
|`1(true)`|병합 할 때 열을 포함합니다. |

### Example
```javascript
options.Cfg = {
    IgnoreHeaderColMerge: false, // ColMerge 속성을 헤더 영역에도 적용합니다.
};

options.Cols = [
    ...
    { Header: [{ Value: "부서1", ColMerge:0 }, { Value: "부서2", ColMerge:0 }, { Value: "부서3", ColMerge:0 },{ Value: "부서4", ColMerge:0 }],
    Type:"Text", Name:"Dept", ColMerge:false, Width:100 ...},
    ...
];
```

### Read More

- [RowMerge row](/docs/props/row/RowMerge)
- [ColMerge col](/docs/props/col/ColMerge)
- [DataMerge cfg](/docs/props/cfg/DataMerge)
- [HeaderMerge cfg](/docs/props/cfg/HeaderMerge)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
