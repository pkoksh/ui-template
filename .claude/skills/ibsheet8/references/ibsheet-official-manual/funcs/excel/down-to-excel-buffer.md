---
KEY: downToExcelBuffer
KIND: method
PATH: funcs/excel/down-to-excel-buffer
ALIAS: sheet.downToExcelBuffer, downToExcelBuffer(), 여러개의, 하나의, 엑셀파일에, 다운로드, 하고자
ALIAS_EN: down, to, excel, buffer
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/excel/down-to-excel-buffer
---
# down2ExcelBuffer ***(method)***

> 여러개의 `ibsheet`를 하나의 엑셀파일에 다운로드 하고자 할때 사용됩니다.

> **이 기능을 사용하시려면, 배포시 같이 제공되는 `/plugins/ibsheet-excel.js` 파일을 include 하셔야 합니다.**
>
> `down2ExcelBuffer(1(true))`로 실행하면 이후 각 시트에서 [down2Excel](./down-to-excel)를 호출하더라도 다운로드가 이루어지지 않고, `down2ExcelBuffer(0(false))` 호출하는 순간 각 시트의 내용이 엑셀파일 안에 각기 다른 worksheet에 다운로드 됩니다.

> 해당 기능을 이용하여 하나의 시트로 여러개의 워크시트를 갖는 엑셀파일을 만드는 것도 가능합니다.

[다운로드/업로드 관련 기본 정보](/docs/appx/import-export)

### Syntax
```javascript
void down2ExcelBuffer( isBuffer );
```

### Parameters

|Name|Type|Required|Description|
|----------|-----|---|----|
|isBuffer|`boolean`|필수|버퍼링 여부
`0(false)`:버퍼링 사용 안함 (`default`)
`1(true)`:버퍼링 사용|


### Return Value
***none***

### Example
```javascript
//1. 일반적인 사용 방법
//버퍼링 시작
sheet1.down2ExcelBuffer(true);

//첫번째 시트 데이터 버퍼링
var param1 = {
        fileName:"여행경비 내역.xlsx",
        sheetName:"교통비"  //엑셀파일내 워크시트 명
};
sheet1.down2Excel(param1);

//두번째 시트 데이터 버퍼링
var param2 = {
        sheetName:"식비"    //엑셀파일내 워크시트 명
};
sheet2.down2Excel(param2);

//세번째 시트 데이터 버퍼링
var param3 = {
        sheetName:"숙박비/기타"    //엑셀파일내 워크시트 명
};
sheet3.down2Excel(param3);

//전체 시트 다운로드(실제 다운로드가 시작됨)
sheet1.down2ExcelBuffer(false);





//2. 하나의 시트에서 컬럼별로 나누어 엑셀파일을 생성
//버퍼링 시작
sheet.down2ExcelBuffer(true);

//4개 컬럼만 첫번째 워크시트로 다운
var param1 = {
        sheetName:"12분기",
        downCols:"1QTCost|1QTProfit|2QTCost|2QTProfit"
};
sheet.down2Excel(param1);

//나머지 컬럼을 두번째 워크시트로 다운
var param2 = {
        sheetName:"34분기 및 종합",
        downCols:"3QTCost|3QTProfit|4QTCost|4QTProfit|Total|Summary"
};
sheet.down2Excel(param2);

//버퍼링 종료 (실제 다운로드가 시작됨)
sheet.down2ExcelBuffer(false);
```

### Read More

- [down2Excel method](./down-to-excel)


### Since

|product|version|desc|
|---|---|---|
|excel|0.0.3|기능 추가|
