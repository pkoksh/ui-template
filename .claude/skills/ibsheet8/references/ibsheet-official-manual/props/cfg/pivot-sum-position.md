---
KEY: pivotSumPosition
KIND: config-property
PATH: props/cfg/pivot-sum-position
ALIAS: 피벗, 합계행의, 위치를, 설정합니다
ALIAS_EN: pivot, sum, position
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/pivot-sum-position
---
# PivotSumPosition ***(cfg)***

> 피벗 시 합계행의 위치를 설정합니다.


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|하단 - 푸터 영역 (`default`)|
|`1(true)`|상단 - 헤더 영역|

### Example
```javascript
options.Cfg = {
    UsePivot: true, // 피벗 사용 여부
    PivotSumPosition: true
};
```

### Read More
- [UsePivot cfg](./use-pivot)
- [AcceptPivotRows cfg](./accept-pivot-rows)
- [AcceptPivotData cfg](./accept-pivot-data)
- [AcceptPivotCols cfg](./accept-pivot-cols)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.7|기능 추가|
