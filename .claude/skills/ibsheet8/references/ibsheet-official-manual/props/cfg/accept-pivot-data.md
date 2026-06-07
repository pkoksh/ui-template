---
KEY: acceptPivotData
KIND: config-property
PATH: props/cfg/accept-pivot-data
ALIAS: 피벗, 시트에서, 데이터의, 값으로, 사용될
ALIAS_EN: accept, pivot, data
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/accept-pivot-data
---
# AcceptPivotData ***(cfg)***

> 피벗 시트에서 데이터의 값으로 사용될 수 있는 열을 설정합니다.

> `","`로 연결하여 복수 개의 열 이름을 지정할 수 있습니다.

### Type
`string`


### Example
```javascript
options.Cfg = {
    UsePivot: true, // 피벗 사용 여부
    AcceptPivotData: "sAge,sPeriod,sSalary,sBonus"
};
```

### Read More
- [UsePivot cfg](./use-pivot)
- [PivotFunc cfg](./pivot-func)
- [AcceptPivotCols cfg](./accept-pivot-cols)
- [AcceptPivotRows cfg](./accept-pivot-rows)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
