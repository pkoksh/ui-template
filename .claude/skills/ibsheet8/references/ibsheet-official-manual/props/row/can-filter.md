---
KEY: canFilter
KIND: row-property
PATH: props/row/can-filter
ALIAS: 특정행에, 필터, 적용, 여부를, 설정합니다
ALIAS_EN: can, filter
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/row/can-filter
---
# CanFilter ***(row)***
> 특정행에 대한 필터 적용 여부를 설정합니다.

> `0(false)`로 설정시 해당 행은 필터설정과 무관한게 보여지게 됩니다.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|필터 적용 제외|
|`1(true)`|필터 적용|


### Example
```javascript
// 특정행들은 필터와 무관하게 항상 보여지게 한다
{"data":[
    ...
    {"CanFilter":0,"ColName1":"Value1","ColName2":"Value2", ...},
    ...
]}
```

### Read More
- [showFilterRow method](/docs/funcs/core/show-filter-row)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
