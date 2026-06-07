---
KEY: noPivotSort
KIND: config-property
PATH: props/cfg/no-pivot-sort
ALIAS: 피벗, 시트, 생성시, 원본, 데이터
ALIAS_EN: no, pivot, sort, sheet, grid, data
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/no-pivot-sort
---
# NoPivotSort ***(cfg)***

> 피벗 시트 생성시 원본 시트 데이터 정렬을 사용할지 여부를 결정합니다.

> 정렬을 사용하는 경우 계산 대상의 행 정보 순서대로 정렬됩니다.



### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|피벗 시트 생성을 위한 원본 데이터 정렬 사용 (`default`)|
|`1(true)`|피벗 시트 생성을 위한 원본 데이터 정렬 사용 안함|


### Example
```javascript
options = {
  "Cfg":{
    "NoPivotSort": 1,  // 원본 시트 정렬 안함
  }
};
```

### Read More
- [UsePivot cfg](./use-pivot)
- [makePivotTable method](/docs/funcs/core/make-pivot-table)
- [switchPivotSheet method](/docs/funcs/core/switch-pivot-sheet)
- [clearFilter method](/docs/funcs/core/clear-filter)
- [setFilter method](/docs/funcs/core/set-filter)

### Since

|product|version|desc|
|---|---|---|
|core|8.1.0.12|기능 추가|
