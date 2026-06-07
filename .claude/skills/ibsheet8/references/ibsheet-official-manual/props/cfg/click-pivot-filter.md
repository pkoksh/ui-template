---
KEY: clickPivotFilter
KIND: config-property
PATH: props/cfg/click-pivot-filter
ALIAS: 피벗, 시트에서, 데이터를, 클릭할, 경우
ALIAS_EN: click, pivot, filter
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/click-pivot-filter
---
# ClickPivotFilter ***(cfg)***

> 피벗 시트에서 피벗 데이터를 클릭할 경우 원본 시트에서 해당 피벗 데이터의 행들을 필터링하여 보여줍니다.

> 필터된 시트에서 원본 시트를 보고 싶은 경우 [clearFilter](/docs/funcs/core/clear-filter) 해야합니다.



### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|피벗 시트 클릭 필터 기능 사용 안함 (`default`)|
|`1(true)`|피벗 시트 클릭 필터 기능 사용|


### Example
```javascript
options = {
  "Cfg":{
    "ClickPivotFilter": 1,  // 피벗 시트 클릭 필터 기능 사용
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
|core|8.0.0.20|기능 추가|
