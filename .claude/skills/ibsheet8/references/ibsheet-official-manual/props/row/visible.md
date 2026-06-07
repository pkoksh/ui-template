---
KEY: visible
KIND: row-property
PATH: props/row/visible
ALIAS: 행의, 보임, 감춤, 여부를, 설정합니다
ALIAS_EN: visible
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/row/visible
---
# Visible ***(row)***

> 행의 보임/감춤 여부를 설정합니다.

> 필터를 통해 감춰지는 행은 자동으로 `Visible: (0)false` 속성이 설정됩니다.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|감춰짐|
|`1(true)`|보임|

### Example
```javascript
//Chk열의 값이 1인 행들을 감춘다.
var rows = sheet.getDataRows();
for(var i = 0; i < rows.length; i++){
    if (rows[i]["Chk"] == 1) {
        //속성 값을 바꾼다고 즉시 행이 감춰지는 것은(렌더링이 일어나는 것은) 아님.
        rows[i]["Visible"] = 0;
    }
}
sheet.renderBody(); //감춘 행을 화면에 반영(렌더링)


//조회 데이터에서 특정행을 감춘다.
{"data":[
    ...
    {"Visible": 0, "ColName1": "Value1", "ColName2": "Value2", ...},
    ...
]}
```


### Read More
- [Hidden row](./hidden)
- [hideRow method](/docs/funcs/core/hide-row)
### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
