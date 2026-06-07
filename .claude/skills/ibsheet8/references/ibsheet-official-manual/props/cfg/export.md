---
KEY: export
KIND: config-property
PATH: props/cfg/export
ALIAS: 같은, 함수를, 통해서, 데이터를, 파일로
ALIAS_EN: export
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/export
---
# Export ***(cfg)***

> `IBSheet`는 [down2Excel()](/docs/funcs/excel/down-to-excel)나 [down2Text()](/docs/funcs/excel/down-to-text)등 과 같은 함수를 통해서 데이터를 `xlsx, txt` 파일로 export 하거나 import 할 수 있습니다.

> 이러한 작업은 해당 함수 호출시 시트의 내용을 서버 측으로 전달하고, 서버에서는 제품과 같이 제공되는 `jsp(혹은 aspx)`파일에서 전달된 내용을 파싱하여 파일을 클라이언트 측으로 리턴하거나, 파일의 내용을 시트에 로드시키게 됩니다.

> 따라서 위와 같은 함수를 사용하기 위해서는 서버측 `jsp모듈(혹은 aspx)`에 대한 `Url`을 이 속성을 통해 명시해 주어야 합니다.

> `Url` 속성만 필수적으로 설정해야 하고 그 외 속성은 선택 가능합니다.


### Type
`object`

### Info
|Name|Type|Description|
|---------|----|-----------|
|Url|`string`|서버모듈 `jsp(Down2Excel.jsp,LoadExcel.jsp 등)` 파일에 대한 경로 (`필수`)
`Url`을 통해 `Down2Excel.jsp` 파일이 위치한 디렉토리를 지정하면 해당 URL위에 `Down2Excel.jsp`를 호출합니다.|
|Down2ExcelUrl|`string`|[down2Excel](/docs/funcs/excel/down-to-excel) 함수 호출시 연결할 `URL`을 강제 지정
이 속성이 설정되면 위에 `Url` 속성은 무시되고, 이 속성으로 지정한 `URL`이 호출됩니다.|
|LoadExcelUrl|`string`|[loadExcel](/docs/funcs/excel/load-excel) 함수 호출시 연결할 `URL`을 강제 지정
이 속성이 설정되면 위에 `Url` 속성은 무시되고, 이 속성으로 지정한 `URL`이 호출됩니다.|
|DirectLoadExcelUrl|`string`|[directLoadExcel](/docs/funcs/excel/direct-load-excel) 함수 호출시 연결할 `URL`을 강제 지정
이 속성이 설정되면 위에 `Url` 속성은 무시되고, 이 속성으로 지정한 `URL`이 호출됩니다.|
|Down2TextUrl|`string`|[down2Text](/docs/funcs/excel/down-to-text) 함수 호출시 연결할 `URL`을 강제 지정
이 속성이 설정되면 위에 `Url` 속성은 무시되고, 이 속성으로 지정한 `URL`이 호출됩니다.|
|LoadTextUrl|`string`|[loadText](/docs/funcs/excel/load-text) 함수 호출시 연결할 `URL`을 강제 지정
이 속성이 설정되면 위에 `Url` 속성은 무시되고, 이 속성으로 지정한 `URL`이 호출됩니다.|
|Down2PdfUrl|`string`|[down2Pdf](/docs/funcs/excel/down-to-pdf) 함수 호출시 연결할 `URL`을 강제 지정
이 속성이 설정되면 위에 `Url` 속성은 무시되고, 이 속성으로 지정한 `URL`이 호출됩니다.|
|down2HwpxUrl|`string`|[down2Hwpx](/docs/funcs/excel/down-to-hwpx) 함수 호출시 연결할 `URL`을 강제 지정
이 속성이 설정되면 위에 `Url` 속성은 무시되고, 이 속성으로 지정한 `URL`이 호출됩니다.|
|Ext|`string`|`Url` 경로를 설정 시 서버 파일의 확장자를 지정합니다.
ex) `"aspx"` or `"jsp"` (`default: "jsp"`)|
|FilePath|`string`|[File](/docs/appx/file-type-upload)타입 사용 시 조회 데이터의 파일 저장 경로를 설정 할 수 있습니다.
우선 순위는 [Path](/docs/props/cell/path)> `FilePath` 입니다.|
<!--!
|Down2HmlUrl|`string`|[down2Hml](/docs/funcs/excel/down-to-hml) 함수 호출시 연결할 `URL`을 강제 지정
이 속성이 설정되면 위에 `Url` 속성은 무시되고, 이 속성으로 지정한 `URL`이 호출됩니다.|
|DirectDown2ExcelUrl|`string`|[directDown2Excel](/docs/funcs/excel/direct-down-to-excel) 함수 호출시 연결할 `URL`을 강제 지정
이 속성이 설정되면 위에 `Url` 속성은 무시되고, 이 속성으로 지정한 `URL`이 호출됩니다.|
|`[비공개 동작안됨]` Relative|`boolean`|주소의 상대경로 유무. `false: 실제주소(절대경로)` / `true: ibsheet.js` 기준 상태경로|
|`[비공개 동작안됨]` Method|`string`|주소로 접근할때 통신방식을 지정 . `POST/GET(default: "GET")`|
|`[비공개 동작안됨]` Param|`object`|전송 받거나 보낼 데이터의 파라미터를 설정(`객체형`)|
|`[비공개 동작안됨]` Params|`string`|전송받거나 보낼 데이터의 파라미터를 설정(`문자열형`)|
|`[비공개 동작안됨]` Header|`object`|http 헤더에 사용자가 지정한 헤더 정보를 설정|
!-->

### Example
```javascript
options.Cfg.Export = {
   Url: '/IBSheet/jsp/',   // 시트 데이터를 엑셀로 다운로드 하기 위해 보내질 서버모듈 경로
   FilePath: '/IBSheet/file/' // 파일 타입 컬럼 저장 경로
};

//Down2Excel 함수를 호출하는 경우 실제 호출되는 URL은 "/IBSheet/jsp/Down2Excel.jsp" 가 호출됩니다.
```

### Read More

- [down2Excel method](/docs/funcs/excel/down-to-excel)
- [loadExcel method](/docs/funcs/excel/load-excel)
- [down2Text method](/docs/funcs/excel/down-to-text)
- [loadText method](/docs/funcs/excel/load-text)
- [directDown2Excel method](/docs/funcs/excel/direct-down-to-excel)
- [directLoadExcel method](/docs/funcs/excel/direct-load-excel)
- [down2Hwpx method](/docs/funcs/excel/down-to-hwpx)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|excel|0.0.11|`Ext` 기능 추가|
|excel|8.1.0.85|`down2Hwpx` 기능 추가|
