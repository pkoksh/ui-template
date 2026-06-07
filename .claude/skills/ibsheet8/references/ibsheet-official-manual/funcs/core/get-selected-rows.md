---
KEY: getSelectedRows
KIND: method
PATH: funcs/core/get-selected-rows
ALIAS: sheet.getSelectedRows, getSelectedRows(), 선택된, 객체를, 리턴한다
ALIAS_EN: get, selected, rows
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/get-selected-rows
---
# getSelectedRows ***(method)***
> 선택된 행 객체를 리턴한다.

> type 인자에 따라 셀단위 선택한 행이나 행전체 선택한 행에 대해 추출할 수 있습니다.

> attr 인자를 통해 선택된 행들 중에서도 특정 속성이 있는 행만 추출할 수 있습니다.

### Syntax
```javascript
object getSelectedRows( type , attr );
```

### Parameters

|Name|Type|Required| Description |
|----------|-----|---|----|
|type|`number`|선택|`0`:행이나 셀 중 선택된 것은 모두 추출 (`default`)
`1`:행단위 선택만 추출
`2`:셀단위 선택만 추출|
|attr|`string`|선택|같이 확인하고자 하는 속성명|

### Return Value
***array[row object]*** : 선택된 [데이터 로우 객체](/docs/appx/row-object) (배열형태)

### Example
```javascript
//일부 행을 선택
sheet.setAttribute(sheet.getRowById("AR5"), null, "Selected", 1, 1);
sheet.setAttribute(sheet.getRowById("AR10"), "RENTFEE", "Selected", 1, 1);
//일부 영역을 선택
sheet.selectRange(sheet.getRowById("AR6"),"CARNO",sheet.getRowById("AR8"),"PROMOCODE");
//행의 Edit 속성을 변경
sheet.setAttribute(sheet.getRowById("AR7"), null, "CanEdit", 0, 1);


//선택된 행(Selected=1)을 추출
var rows = sheet.getSelectedRows(1); //["AR5" , "AR10"]

//선택된 셀을 추출
var rows = sheet.getSelectedRows(2); //["AR6" , "AR7" , "AR8"]

//선택된 셀,행 모두 추출
var rows = sheet.getSelectedRows(0); //["AR5" , "AR6" , "AR7" , "AR8" , "AR10"]

//선택된 셀,행 중에 CanEdit=1 인 데이터 로우 객체 추출
var rows = sheet.getSelectedRows(0, "CanEdit"); //["AR5" , "AR6" , "AR8" , "AR10"]
```

### Read More
- [getSelectedRanges method](./get-selected-ranges)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
