---
KEY: rowMerge
KIND: row-property
PATH: props/row/row-merge
ALIAS: 데이터, 영역, 헤더, 영역에서, 기준
ALIAS_EN: row, merge, data, header
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/row/row-merge
---
# RowMerge ***(row)***

> 데이터 영역/헤더 영역에서 값 기준 병합 실행([DataMerge](/docs/props/cfg/data-merge), [HeaderMerge](/docs/props/cfg/header-merge))시 해당 행에 대해서 `병합할지 여부`를 설정합니다.


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|해당 행을 병합 대상에 포함하지 않습니다.|
|`1(true)`|해당 행을 병합 대상에 포함합니다. (`default`)|

### Example
```javascript
//특정행을 병합하지 않음.
var row = sheet.getFirstVisibleRow();
row["RowMerge"] = false;
sheet.setAutoMerge( {dataMerge: 1, headerMerge: 0, prevColumnMerge: 0} );

// 첫번 째 헤더행을 병합하지 않음.
var header = sheet.getHeaderRows()[0];
header["RowMerge"] = false;
```

### Read More
- [ColMerge col](/docs/props/col/col-merge)
- [ColMerge cell](/docs/props/cell/col-merge)
- [DataMerge cfg](/docs/props/cfg/data-merge)
- [HeaderMerge cfg](/docs/props/cfg/header-merge)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
