---
KEY: downToPdf
KIND: method
PATH: funcs/excel/down-to-pdf
ALIAS: sheet.downToPdf, downToPdf(), 시트의, 내용을, 파일로, 다운로드
ALIAS_EN: down, to, pdf
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/excel/down-to-pdf
---
# down2Pdf ***(method)***

> 시트의 내용을 PDF 파일로 다운로드 합니다.

> 이 함수는 시트의 내용을 제품과 같이 배포되는 `Down2Pdf.jsp` 파일로 전달하고, 이 파일에서 PDF 파일을 생성하여 클라이언트 측으로 전송하게 됩니다.

> 따라서 해당 함수를 사용하시려면 `Down2Pdf.jsp`와 더불어 `ibsheet8-x.x.x.jar` 파일과 `ib-itext 라이브러리`가 필요로 합니다.


> **<mark>주의</mark>: 멀티레코드([MultiRecord](/docs/props/cfg/multi-record)) 기능을 사용하는 시트에서는 제약이 있습니다**

> **<mark>주의</mark>: 이 기능을 사용하시려면, 배포시 같이 제공되는 `/plugins/ibsheet-excel.js` 파일을 include 하셔야 합니다.**


> `Down2Pdf.jsp` 파일에 대한 경로는 `Cfg`에 `Export` 속성을 통해 설정됩니다.

> 매 시트 생성시 마다 `Export`속성을 설정하기 번거로운 경우에는 [IBSheet.CommonOptions](/docs/static/common-options) 속성을 통해 모든 시트에 공통으로 설정할 수도 있습니다.

> 다시 정리해 보자면 다음과 같은 작업이 필요 합니다.

**자바 서버모듈**

1. `ibsheet8-1.0.x.jar` 파일과 `공통 라이브러리(ib-itext.jar)`을 WEB-INF/lib에 추가.
2. `/plugins/ibsheet-excel.js` 파일을 해당 페이지에 include.
3. 시트 생성시 `Cfg`에 `Export` 속성을 통해 `Down2Pdf.jsp` 파일에 대한 경로 설정
4. `Down2Pdf.jsp` 파일에서 폰트 경로 설정

**닷넷 서버모듈**

1. `IBSheet8-4.0.dll` 파일을 bin 또는 참조에 추가.
2. `/plugins/ibsheet-excel.js` 파일을 해당 페이지에 include.
3. 시트 생성시 `Cfg`에 `Export` 속성을 통해 `Down2Pdf.aspx` 파일에 대한 경로 설정
4. `Down2Pdf.aspx` 파일에서 `wkhtmltopdf.exe` 및 폰트가 위치한 경로 설정

### Syntax
```javascript
void down2Pdf( param );
```

### Parameters

|Name|Type|Required|Description|
|----------|-----|---|----|
|fileName|`string`|선택|생성할 PDF 파일명. 파일 확장자는 반드시 `.pdf`여야 합니다.
확장자를 생략할 경우 자동으로 `.pdf`를 붙여 다운로드 합니다. (`default: "ibsheet.pdf"`) |
|downCols|`string`|선택|지정한 열만 다운로드 합니다.
별도의 설정이 없을시 모든 열이 다운로드 됩니다.
 보여지는 열만 다운로드하고 싶을 경우 `"Visible"`로 설정하면 됩니다.
(ex: "Price\|AMT\|TOTAL" 식의 문자열)|
|dpi|`number`|선택|축소/확대 비율로 값이 작을 수록 크게 출력됩니다.
50~32840 사이 값으로 설정 가능합니다. (`defalut: 2000`)|
|fontTo|`string`|선택|PDF에 사용할 한글 폰트를 설정.
"Gothic", "Gulim" 중 선택 (`default: "Gulim"`)

**<mark>주의</mark> : `Gothic` 폰트는 서버모듈 제품에 포함되어 있지 않습니다.**|
|paper|`string`|선택|용지의 방향을 설정합니다.
가로: `landscape` 또는 세로: `portrait` (`default: "portrait"`)|
|title|`string`|선택|PDF 파일에 출력할 제목 설정 (`default: ""`)

**<mark>주의</mark> : 해당 기능은 닷넷 서버모듈에서 지원하지 않습니다.** |
|titleStyle|`string`|선택|PDF 파일에 출력할 제목에 적용할 css style (`default: ""`)|
|url|`string`|선택|`down2Pdf`와 더불어 서버에서 처리해야 하는 내용이 있는 경우 로직을 처리할 URL을 넣어주면 `Down2Pdf.jsp` 페이지를 호출하기 전에 먼저 URL인자에서 설정한 페이지를 호출한다.
 따라서 설정 페이지에서는 작업이 끝난 후, request를 `Down2Pdf.jsp` 페이지로 전달해야 한다. (`default: ""`)|
|extendParam|`string`|선택|서버로 전달해야 하는 내용이 있는 경우 `GET` 방식의 QueryString으로 연결하여 설정 (`default: ""`)|
|extendParamMethod|`string`|선택|extendParam을 전달하는 방식을 설정 (`default: "POST"`)|
|reqHeader|`object`|선택|서버 전송 헤더에 사용자가 지정한 헤더 정보를 설정합니다.|
|useXhr|`boolean`|선택| xhr 통신을 이용해 파일을 다운로드받습니다.
`0(false)`:xhr 통신 사용 안함 (`default`)
`1(true)`:xhr 통신 사용|
<!--!
|`[동작안됨 비공개]` wordWrap|`boolean`|선택|(`default: 0`)|
!-->

### Return Value
***none***

### Example
```javascript
  var param = {
    fileName: "홍길동 교통비 내역.pdf",
    title: "홍길동 교통비 내역",
    titleStyle: "color:red; font-size:100px;"
  };

  sheet.down2Pdf(param);
```

### Read More
- [doPrint method](/docs/funcs/core/do-print)
- [CanPrint row](/docs/props/row/can-print)
- [CanPrint col](/docs/props/col/can-print)
- [onBeforeExport event](/docs/events/on-before-export)
- [onExportFinish event](/docs/events/on-export-finish)


### Since

|product|version|desc|
|---|---|---|
|excel|0.0.0|기능 추가|
|excel|0.0.8|`reqHeader` 기능 추가|
