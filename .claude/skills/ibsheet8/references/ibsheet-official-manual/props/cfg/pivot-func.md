---
KEY: pivotFunc
KIND: config-property
PATH: props/cfg/pivot-func
ALIAS: 피벗, 시트의, 데이터, 값을, 도출할
ALIAS_EN: pivot, func, data
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/pivot-func
---
# PivotFunc ***(cfg)***

> 피벗 시트의 데이터 값을 도출할 때 사용할 함수를 설정합니다. 

> [AcceptPivotData cfg](./accept-pivot-data) 를 통해 여러 개의 데이터 컬럼을 설정한다면 `PivotFunc` 도 동일한 개수로 맞춰주어야 합니다. 구분자는 `,(쉼표)` 를 이용합니다.

### Type
`string`

### Options
|Value|Description|
|-----|-----|
|Sum|원본 데이터행 셀 값들을 합하여 피벗 시트의 셀 값을 설정합니다. (`default`)|
|Count|원본 데이터행 셀 개수를 카운팅하여 피벗 시트의 셀 값을 설정합니다.|
|Max|원본 데이터행 셀 값들 중 최대값으로 피벗 시트의 셀 값을 설정합니다.|
|Min|원본 데이터행 셀 값들 중 최소값으로 시트의 셀 값을 설정합니다.|

### Example
```javascript
options.Cfg = {
    UsePivot: true, // 피벗 사용 여부
    PivotFunc: "Count,Sum" // PivotDataCol이 2개인 경우 각각 설정할 DataType. 구분자는 ,(쉼표)
};
```

### Read More
- [UsePivot cfg](./use-pivot)
- [PivotFormat cfg](./pivot-format)
- [AcceptPivotRows cfg](./accept-pivot-rows)
- [AcceptPivotCols cfg](./accept-pivot-cols)
- [AcceptPivotData cfg](./accept-pivot-data)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|core|8.1.0.46|`Max`, `Min` 기능 추가|
|core|8.2.0.15|`PivotFunc` 각 데이터 별 적용되도록 기능 개선|