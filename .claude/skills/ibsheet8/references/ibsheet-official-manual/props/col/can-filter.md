---
KEY: canFilter
KIND: column-property
PATH: props/col/can-filter
ALIAS: 특정, 열에, 대해, 필터기능을, 사용하지
ALIAS_EN: can, filter
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/can-filter
---
# CanFilter ***(col)***

> 특정 열에 대해 필터기능을 사용하지 못하게 설정합니다.

> 이 속성을 사용하면 해당 열은 필터셀이 입력불가가 됩니다.

### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|필터 사용 불가|
|`1`|필터 사용 가능 (`default`)|
|`2`|트리에서 사용시 하위 노트가 모두 감춰지면 부모도 감춥니다.|


### Example
```javascript
//특정 열에 필터링 하지 못하게 막음
options.Cols = [
    ...
    {Type: "Int", Name: "Rank_Sales", CanFilter: 0 ...},
    ...
];
```

### Read More
- [showFilter cfg](/docs/props/cfg/show-filter)
- [CanMove col](./can-move)
- [CanResize col](./can-resize)
- [CanSort col](./can-sort)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
