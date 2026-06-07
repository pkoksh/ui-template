---
KEY: showDownloadDialog
KIND: method
PATH: funcs/dialog/show-download-dialog
ALIAS: sheet.showDownloadDialog, showDownloadDialog(), 시트의, 내용을, 엑셀이나, 형식으로, 다운로드
ALIAS_EN: show, download, dialog
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/dialog/show-download-dialog
---
# showDownloadDialog ***(method)***

> 시트의 내용을 엑셀이나 Text형식으로 다운로드 받기 위한 다이얼로그 창을 오픈합니다.

> 해당 기능은 `Cfg.Export.Url` 에 `jsp(aspx)`파일에 대한 경로가 설정되어 있어야 합니다.

> <mark>해당 함수는 `"/plugins/ibsheet-dialog.js"` 파일이 포함되어 있어야 사용하실 수 있습니다.</mark>

> 다이얼로그에 대한 자세한 수정은 `ibsheet-dialog.js`파일에서 하실 수 있습니다.

<!--!


> **<mark>주의</mark>: [UseSpreadSheet](/docs/props/cfg/use-spread-sheet) 기능에서는 지원되지 않습니다.**
!-->

### 상세 설명
> `sheet.showDownloadDialog()`를 호출하여 동일한 기능 사용 가능합니다.

> `rowchk` 인자를 사용하여 `1(default)`인 경우 행 선택 열 생성, `0`인 경우 행 선택 열을 생성하지 않습니다. 

> `title` 인자에는 원하고자 하는 타이틀명을 입력 할 수 있음. 입력하지 않을 시 기본적으로 파일 다운로드라는 타이틀명을 사용합니다. 

> `title` 에 `html 태그`를 사용 할 수 있습니다. ex) `사내 정규직 지원 리스트` 

> `downParams.downCols` 값이 `"Visible"`일 경우 `Visible:1` 값인 컬럼들만 다이얼로그에 보여집니다.


![다운로드](/assets/imgs/DownloadDialog.png)
<!-- IMAGE: 스크린샷/예시 이미지 - 다운로드 -->

### Syntax
```javascript
void showDownloadDialog(width, height, name, rowchk, title, downParams);
```

### Parameters

|Name|Type|Required| Description |
|----------|-----|---|----|
|width|`number`|선택|다이얼로그 창의 너비 (`default: 700`)|
|height|`number`|선택|다이얼로그 창의 높이 (`default: 400`)|
|name|`string`|선택|다이얼로그 시트 이름 (`default: "excelDownloadSheet_" + 시트id`)|
|rowchk|`number`|선택|행 선택 열 기능 사용 (`default: 1`)|
|title|`string`|선택|다이얼로그 타이틀 (`default: "파일 다운로드"`)|
|downParams|`object`|선택|[down2Excel](/docs/funcs/excel/down-to-excel) 인자 모두 사용 가능
|

### Return Value
***none***

### Example
```javascript
//다운로드 다이얼로그 오픈
sheet.showDownloadDialog(600, 400);

//객체방식
sheet.showDownloadDialog({
  width: 600,
  height: 400,
  name: "excelDownSheet",
  downParams: {
    titleText:"||2020년 4월 교통비\r\n|||||||홍길동",
    userMerge:"0,2,1,4",
    downCols:"Visible"
  }
});
```

### Read More
- [showDialog static](/docs/static/show-dialog)
- [Dialog appendix](/docs/appx/dialog)
- [down2Excel method](/docs/funcs/excel/down-to-excel)
- [down2Text method](/docs/funcs/excel/down-to-text)
- [showUploadDialog method](./show-upload-dialog)

### Since

|product|version|desc|
|---|---|---|
|dialog|0.0.0|기능 추가|
|dialog|0.0.2|다운로드할 시트가 `Cfg.MultiRecord` 기능을 사용할 때 대응 할 수 있도록 수정|
|dialog|0.0.3|`showExcelDownloadDialog`에서 `showDownloadDialog`로 이름 변경|
|dialog|0.0.5|`downParams.downCols` 값이 `"Visible"`일 경우 보여지는 컬럼 변경|