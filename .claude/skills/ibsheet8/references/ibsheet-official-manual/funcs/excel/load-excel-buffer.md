---
KEY: loadExcelBuffer
KIND: method
PATH: funcs/excel/load-excel-buffer
ALIAS: sheet.loadExcelBuffer, loadExcelBuffer(), 하나의, 엑셀파일에서, 여러개의, 시트에, 번에
ALIAS_EN: load, excel, buffer
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/excel/load-excel-buffer
---
# loadExcelBuffer ***(method)***

> 하나의 엑셀파일에서 여러개의 시트에 한 번에 로드하는 기능을 제공합니다.

> **이 기능을 사용하시려면, 배포시 같이 제공되는 `/plugins/ibsheet-excel.js` 파일을 include 하셔야 합니다.**
>
> `loadExcelBuffer(true)`를 호출하면 이후에 여러개 시트에서 [loadExcel](./load-excel)를 호출하더라도 실제로는 동작하지 않다가, 최종적으로 `loadExcelBuffer(false)`가 호출될 때 파일다이얼로그를 통해 선택한 엑셀파일의 내용을 각 시트에 로드할 수 있습니다.

### Syntax
```javascript
void loadExcelBuffer( isBuffer );
```

### Parameters

|Name|Type|Required| Description |
|----------|-----|---|----|
|isBuffer|`boolean`|필수|버퍼링 여부
`0(false)`:버퍼링 사용 안함 (`default`)
`1(true)`:버퍼링 사용|


### Return Value
***none***

### Example
```javascript
//버퍼링 시작
sheet1.loadExcelBuffer(true);

//정규직 워크시트의 내용을 sheet1에 업로드
var param1 = {workSheetName:"정규직"};
sheet1.loadExcel(param1);

//비정규직 워크시트의 내용을 sheet1에 업로드
var param2 = {workSheetName:"비정규직"};
sheet2.loadExcel(param2);

//버퍼링 종료 (파일다이얼로그 오픈)
sheet1.loadExcelBuffer(false);
```

### Read More
- [loadExcel method](./load-excel)

### Since

|product|version|desc|
|---|---|---|
|excel|0.0.3|기능 추가|
