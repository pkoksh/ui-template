---
KEY: initPivotRows
KIND: config-property
PATH: props/cfg/init-pivot-rows
ALIAS: 피벗, 시트에서, 기준, 행의, 값으로
ALIAS_EN: init, pivot, rows
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/init-pivot-rows
---
# InitPivotRows ***(cfg)***

> 피벗 시트에서 기준 행의 값으로 사용할 열(들)을 설정합니다.

> `","`로 연결하여 복수 개의 열 이름을 지정할 수 있습니다.

### Type
`string`


### Example
```javascript
options.Cfg = {
    UsePivot: true, // 피벗 사용 여부
    InitPivotRows: "sDept" // 세로 기준 컬럼 설정
};
```

### Read More
- [UsePivot cfg](./use-pivot)
- [PivotFunc cfg](./pivot-func)
- [InitPivotCols cfg](./init-pivot-cols)
- [InitPivotData cfg](./init-pivot-data)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.6|기능 추가|
|dialog|8.0.0.4|기능 추가|
