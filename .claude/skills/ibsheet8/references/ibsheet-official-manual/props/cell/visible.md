---
KEY: visible
KIND: cell-property
PATH: props/cell/visible
ALIAS: 데이터의, 보임, 감춤, 여부를, 설정합니다
ALIAS_EN: visible
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cell/visible
---
# Visible ***(cell)***

> 셀 데이터의 보임/감춤 여부를 설정합니다.


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|감춰짐|
|`1(true)`|보임|

### Example
```javascript
// 첫번째행 "CLS" 컬럼에 해당하는 셀의 데이터를 감춘다.
sheet.setAttribute(sheet.getRowById("AR1"), "CLS", "Visible", 0, 1);


//조회 데이터에서 특정셀을 감춘다.
{"data":[
    ...
    {"ColName1Visible": 0, "ColName1": "Value1", "ColName2": "Value2", ...},
    ...
]}
```


### Read More
- [Visible row](/docs/props/row/visible)
- [Visible col](/docs/props/col/visible)
### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
