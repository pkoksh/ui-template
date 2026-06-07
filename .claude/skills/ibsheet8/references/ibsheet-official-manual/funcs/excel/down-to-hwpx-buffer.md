---
KEY: downToHwpxBuffer
KIND: method
PATH: funcs/excel/down-to-hwpx-buffer
ALIAS: sheet.downToHwpxBuffer, downToHwpxBuffer(), 여러개의, 하나의, 한글파일에, 다운로드, 하고자
ALIAS_EN: down, to, hwpx, buffer
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/excel/down-to-hwpx-buffer
---
# down2HwpxBuffer ***(method)***

> 여러개의 `ibsheet`를 하나의 한글파일에 다운로드 하고자 할때 사용됩니다.

> **이 기능을 사용하시려면, 배포시 같이 제공되는 `/plugins/ibsheet-excel.js` 파일을 include 하셔야 합니다.**
>
> `down2HpwxBuffer(1(true))`로 실행하면 이후 각 시트에서 [down2Hwpx](./down-to-hwpx)를 호출하더라도 다운로드가 이루어지지 않고, `down2HwpxBuffer(0(false))` 호출하는 순간 각 시트의 내용이 `down2Hwpx` 호출 순서대로 한글의 표로 그려집니다.
> 또한 템플릿 기능과 `down2Hwpx` 의 `sheetField` 속성을 활용하여 원하는 위치에 원하는 테이블을 생성 할 수 있습니다.

[다운로드/업로드 관련 기본 정보](/docs/appx/import-export)

### Syntax
```javascript
void down2HwpxBuffer( isBuffer );
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

//1. 템플릿을 사용하지 않고 한글 파일에 여러개의 시트를 그리는 방법
//버퍼링 시작
sheet.down2HwpxBuffer(true);

//4개 컬럼만 한글 표로 다운
var param1 = {
        downCols:"1QTCost|1QTProfit|2QTCost|2QTProfit"
};
sheet.down2Hwpx(param1);

//나머지 컬럼을 두번째 다음 문장의 한글 표로 다운
var param2 = {
        downCols:"3QTCost|3QTProfit|4QTCost|4QTProfit|Total|Summary"
};
sheet.down2Hwpx(param2);

//버퍼링 종료 (실제 다운로드가 시작됨)
sheet.down2HwpxBuffer(false);

//2. 템플릿을 사용 하여 원하는 위치에 시트를 생성하는 방법.

//버퍼링 시작
sheet1.down2HwpxBuffer(true);

//첫번째 시트 데이터 버퍼링
var param1 = {
        fileName:"이력서.hwpx",
        //tempFile과 keyField는 첫번째에서만 설정.
        tempFile:"Resume.hwpx",
        keyField: {
                "name": "홍길동",
                "engName": "Hong Gil Dong"
        },
        sheetField : "sheet1"
};
sheet1.down2Hwpx(param1);

//두번째 시트 데이터 버퍼링
var param2 = {
        sheetField : "shee2"
};
sheet2.down2Hwpx(param2);

//세번째 시트 데이터 버퍼링
var param3 = {
        sheetField : "shee3"
};
sheet3.down2Hwpx(param3);

//네번째 시트 데이터 버퍼링
var param4 = {
        sheetField : "shee4"
};
sheet4.down2Hwpx(param4);


//전체 시트 다운로드(실제 다운로드가 시작됨)
sheet1.down2HwpxlBuffer(false);
```
* 템플릿 화면 예시

![image](/assets/imgs/Resume.png)
<!-- IMAGE: 스크린샷/예시 이미지 - image -->


### Read More

- [down2Hwpx method](./down-to-hwpx)


### Since

|product|version|desc|
|---|---|---|
|core|8.1.0.85|Down2Hwpx 기능 추가|
|excel|1.1.2|Down2Hwpx 기능 추가|
|jar|1.0.0|Down2Hwpx 기능 추가|
