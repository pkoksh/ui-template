---
KEY: downToText
KIND: method
PATH: funcs/excel/down-to-text
ALIAS: sheet.downToText, downToText(), 시트의, 내용을, 파일이나, 파일로, 내보내기
ALIAS_EN: down, to, text
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/excel/down-to-text
---
# down2Text ***(method)***

> 시트의 내용을 `txt`파일이나 `csv`파일로 내보내기 합니다.

> 해당함수는 시트의 내용을 `Down2Text.jsp` 파일로 전달하고, 이 파일에서 실제 `txt파일(혹은 csv)`을 생성하여 클라이언트 측으로 전송하게 됩니다.

> 따라서 해당 함수를 사용하시려면 자바 서버모듈의 경우 `Down2Text.jsp`와 더불어 `ibsheet8-1.0.x.jar` 파일과 `apache POI 라이브러리`가 필요로 하고, 닷넷 서버모듈의 경우 `Down2Text.aspx`와 더불어 `IBSheet8-4.0.dll` 파일과 `Syncfusion 라이브러리 dll`가 필요합니다.
> **이 기능을 사용하시려면, 배포시 같이 보내드리는 `/plugins/ibsheet-excel.js` 파일을 include 하셔야 합니다.**
>
> `Down2Text.jsp` 파일에 대한 경로는 Cfg에 `Export` 속성을 통해 설정해야 합니다.

> 매 시트 생성시 마다 `Export`속성을 설정하기 번거로운 경우에는 [IBSheet.CommonOptions](/docs/static/common-options) 속성을 통해 모든 시트에 공통으로 설정할 수도 있습니다.

> 다시 정리해 보자면 다음과 같은 작업이 필요 합니다.

**자바 서버모듈**

1. `ibsheet8-1.0.x.jar` 파일과 `공통 라이브러리(POI jar)`를 WEB-INF/lib에 추가.
2. `/plugins/ibsheet-excel.js` 파일을 해당 페이지에 include.
3. 시트 생성시 `Cfg` 에 `Export`을 통해 `Down2Text.jsp` 파일에 대한 경로 설정

**닷넷 서버모듈**

1. `IBSheet8-4.0.dll` 파일과 `공통 라이브러리(Syncfusion dll)`을 bin 또는 참조에 추가.
2. `/plugins/ibsheet-excel.js` 파일을 해당 페이지에 include.
3. 시트 생성시 `Cfg`에 `Export` 속성을 통해 `Down2Text.aspx` 파일에 대한 경로 설정

### Syntax
```javascript
void down2Text( param );
```

### Parameters

|Name|Type|Required|Description|
|----------|-----|---|----|
|fileName|`string`|선택|다운로드 받을 파일명입니다. 확장자를 설정하지 않으면 `txt` 파일로 다운로드 됩니다.|
|rowDelim|`string`|선택|text파일을 만들때 행 구분자(기본은 줄넘김 문자: `"\r\n"`)
|colDelim|`string`|선택|txt 다운로드 일 경우(`default: \t(탭문자)`, csv 다운로드 일 경우(`default: ,(콤마)` 업로드되는 파일에 따라 기본 구분자가 변경됩니다.
|downRows|`string`|선택|다운로드 받을 행 인덱스(구분자 "\|"로 연결 ex: "1\|3\|4\|5\|7")|
|downCols|`string`|선택|다운로드 받을 열 Name(구분자 "\|"로 연결 ex: "amt\|qty1\|qty2\|qty3\|years")|
|downHeader|`boolean`|선택|헤더행을 다운로드 받을지 여부
`0(false)`:다운로드 시 헤더행 미포함
`1(true)`:다운로드 시 헤더행 포함 (`default`)|
|downSum|`boolean`|선택|합계행도 다운로드 받을지 여부
`0(false)`:합계 행 다운로드 시 미포함
`1(true)`:합계 행 다운로드 시 포함 (`default`)|
|downTreeHide|`boolean`|선택|tree를 사용하는 경우, 접혀진 행도 엑셀에 다운로드 할지 여부를 설정합니다.
`0(false)`:접혀진 행(자식노드)들 다운로드 대상 제외 (`default`)
`1(true)`:접혀진 행(자식노드)들 다운로드 대상 포함|
|reqHeader|`object`|선택|서버 전송 헤더에 사용자가 지정한 헤더 정보를 설정합니다.|
|downloadEncoding|`string`|선택|다운로드받는 텍스트 파일의 인코딩 형식을 지정합니다. UTF-8(BOM) 설정시 BOM을 삽입한 UTF-8 인코딩 형식으로 텍스트 파일을 다운로드합니다. (`default: "txt: UTF-8, csv: EUC-KR"`)|
|extendParam|`string`|선택|서버로 전달해야 하는 내용이 있는 경우 `GET` 방식의 `QueryString`으로 연결하여 서버로 같이 전달됩니다.
 (ex: `sheet.down2Excel({extendParam: "sido=서울시&sigungu=관악구"}`)|
|extendParamMethod|`string`|선택|`extendParam`의 내용을 `GET` 또는 `POST`로 전달할지를 설정합니다.(`default: "GET"`)|
|useXhr|`boolean`|선택| xhr 통신을 이용해 파일을 다운로드받습니다.
`0(false)`:xhr 통신 사용 안함 (`default`)
`1(true)`:xhr 통신 사용|
<!--!
|`[비공개]` downCombo|`string`|선택|`Enum` 타입의 선택 항목을 `Enum` 속성과 `EnumKeys` 속성 어떤 형태로 다운로드를 받을 지 설정합니다.
 `TEXT`: `Enum` 속성을 사용하여 다운로드합니다. (`default`)
 `CODE`: `EnumKeys` 속성을 사용하여 다운로드합니다.|
!-->

### Return Value
***none***

### Example
```javascript
//1. text 확장자로 다운로드
sheet.down2Text({fileName:"yearsProfit.txt"});


//2. csv 확장자로 다운로드
sheet.down2Text({fileName:"yearsProfit.csv", colDelim:","});
```

### downloadEncoding 설정시 유의사항 

![downloadEncoding_utf_8](/assets/imgs/downloadencoding_utf_8.png "downloadEncoding_utf_8")
<!-- IMAGE: 스크린샷/예시 이미지 - downloadEncoding_utf_8 -->

`downloadEncoding`을 `UTF-8`로 설정해 csv 파일을 다운로드하시면 엑셀로 열였을 때 한글이 깨지는 현상이 발생합니다. 

엑셀로 열었을 때 한글이 깨지는 현상을 예방하면서 `UTF-8` 인코딩을 적용하기 위해서는 `downloadEncoding`을 `UTF-8(BOM)`으로 설정해주세요 (서버모듈 1.1.18 버전 이후 설정 가능).

### csv 다운로드시 기본 인코딩에 관해 

엑셀 플러그인 1.0.21 버전 이후로 csv 다운로드시 기본 인코딩 형식이 EUC-KR에서 UTF-8(BOM)으로 변경되었습니다. 

그런데 해당 인코딩 형식은 서버모듈 1.1.18 버전 이후로 지원되는 형식이기에, 엑셀 플러그인 1.0.21 버전을 사용하시며 down2Text 기능을 사용하시려면 반드시 서버모듈 버전을 1.1.18 버전 이후의 버전으로 업그레이드하시거나 downloadEncoding 옵션을 UTF-8(BOM) 이외의 값으로 별도 설정해주셔야 됩니다.

### Read More
- [AutoExcelMode cfg](/docs/props/cfg/auto-excel-mode)
- [down2Excel method](./down-to-excel)
- [exportData method](/docs/funcs/core/export-data)
- [loadText method](./load-text)
- [onBeforeExport event](/docs/events/on-before-export)
- [onExportFinish event](/docs/events/on-export-finish)

### Since

|product|version|desc|
|---|---|---|
|excel|0.0.0|기능 추가|
|excel|0.0.8|`reqHeader` 기능 추가|
|servermodule|1.1.18|`downloadEncoding: UTF-8(BOM)` 설정 추가|
|excel|1.0.21|csv 다운로드시 디폴트 인코딩 형식 `EUC-KR`에서 `UTF-8(BOM)`으로 변경 |