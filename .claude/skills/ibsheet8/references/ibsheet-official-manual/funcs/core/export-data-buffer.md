---
KEY: exportDataBuffer
KIND: method
PATH: funcs/core/export-data-buffer
ALIAS: sheet.exportDataBuffer, exportDataBuffer(), 여러개의, 하나의, 엑셀파일에, 다운로드, 하고자
ALIAS_EN: export, data, buffer
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/export-data-buffer
---
# exportDataBuffer ***(method)***

> 여러개의 `ibsheet`를 하나의 엑셀파일에 다운로드 하고자 할때 사용됩니다.

> `exportDataBuffer(1(true))`로 실행하면 이후 각 시트에서 [exportData](./export-data)를 호출하더라도 다운로드가 이루어지지 않고, `exportDataBuffer(0(false))` 호출하는 순간 각 시트의 내용이 엑셀파일 안에 각기 다른 worksheet에 다운로드 됩니다.

> 해당 기능을 이용하여 하나의 시트로 여러개의 워크시트를 갖는 엑셀파일을 만드는 것도 가능합니다. 

<!--!
> 
> **<mark>주의</mark> : [UseSpreadSheet](/docs/props/cfg/use-spread-sheet) 기능에서는 지원되지 않습니다.**
!-->

### Syntax
```javascript
void exportDataBuffer( isBuffer );
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
sheet1.exportDataBuffer(true);

//첫번째 시트 데이터 버퍼링
var param1 = {
        fileName:"여행경비 내역.xlsx",
        sheetName:"교통비"  //엑셀파일내 워크시트 명
};
sheet1.exportData(param1);

//두번째 시트 데이터 버퍼링
var param2 = {
        sheetName:"식비"    //엑셀파일내 워크시트 명
};
sheet2.exportData(param2);

//세번째 시트 데이터 버퍼링
var param3 = {
        sheetName:"숙박비/기타"    //엑셀파일내 워크시트 명
};
sheet3.exportData(param3);

//전체 시트 다운로드(실제 다운로드가 시작됨)
sheet1.exportDataBuffer(false);





//2. 하나의 시트에서 컬럼별로 나누어 엑셀파일을 생성
//버퍼링 시작
sheet.exportDataBuffer(true);

//4개 컬럼만 첫번째 워크시트로 다운
var param1 = {
        sheetName:"12분기",
        downCols:"1QTCost|1QTProfit|2QTCost|2QTProfit"
};
sheet.exportData(param1);

//나머지 컬럼을 두번째 워크시트로 다운
var param2 = {
        sheetName:"34분기 및 종합"
        downCols:"3QTCost|3QTProfit|4QTCost|4QTProfit|Total|Summary"
};
sheet.exportData(param2);

//버퍼링 종료 (실제 다운로드가 시작됨)
sheet.exportDataBuffer(false);
```

### Read More

- [exportData method](./export-data)


### Since

|product|version|desc|
|---|---|---|
|core|8.1.0.24|기능 추가|
