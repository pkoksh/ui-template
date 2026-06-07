---
KEY: showUploadDialog
KIND: method
PATH: funcs/dialog/show-upload-dialog
ALIAS: sheet.showUploadDialog, showUploadDialog(), 엑셀, 업로드할때, 옵션을, 선택할, 있는
ALIAS_EN: show, upload, dialog, excel, xlsx
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/dialog/show-upload-dialog
---
# showUploadDialog ***(method)***
> 엑셀 업로드할때 옵션을 선택할 수 있는 다이얼로그입니다.

> 팝업에 로드된 데이터 중 일부를 사용자가 수정할 수 있습니다.

> 앞 쪽 체크박스를 통해 팝업에 로드된 데이터 중 일부 행을 로드에서 제외할 수 있습니다.

> 엑셀 뿐만 아니라 `txt, csv` 파일도 업로드 가능하고 `txt` 파일의 경우 열 구분자를 사용자가 직접 선택할 수 있습니다.

> 과도한 `colCount` 설정은 성능에 문제가 될 수 있기 때문에 기본값을 20으로 설정했습니다.

> 마스터 헤더의 Value를 업로드 시트 Head에서 `value/value..` 형식으로 만들고 있습니다. 

> `Header`가 예를 들어 `["캠페인","시작일"], ["시즌","시작일"] `인 경우가 있기 때문에 `Enum`에 `"캠페인"/"시작일", "시즌"/"시작일"` 로 표현합니다. 

> 마스터 시트의 컬럼을 가져와 `Head - Enum`을 만들고 원하는 컬럼 위치를 스왑 할 수 있습니다. 필수항목의 경우 이름 옆에 (필수)가 붙습니다.

> 오류건의 경우 셀의 배경이 노란색으로 나오며 업로드가 되지 않습니다. 너비, 높이의 최솟값은 기본값으로 설정하고 있습니다. 

> <mark>해당 함수는 `"/plugins/ibsheet-dialog.js"` 파일이 포함되어 있어야 사용하실 수 있습니다.</mark>

###
![다운로드](/assets/imgs/showuploaddialog_recent.png)
<!-- IMAGE: 스크린샷/예시 이미지 - 다운로드 -->

### Syntax
```javascript
void showUploadDialog( uploadType, width, height, name, colCount );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|uploadType|`text`|필수|업로드 할 파일 (`'excel'`, `'txt'`, `'csv'`)|
|width|`number`|선택|다이얼로그 가로 크기 (`default: 700`)|
|height|`number`|선택|다이얼로그 세로 크기 (`default: 400`)|
|name|`string`|선택|다이얼로그 시트 이름 (`defulat: "excelUploadSheet_"+ 시트id`)|
|colCount|`number`|선택|실제 엑셀 파일의 컬럼 갯수가 더 많을 때 업로드 해야함으로 임의 컬럼을 만듬 (`default: 20`)|


### Return Value
***none***

### Example
```javascript
//excel 업로드 다이얼로그 생성
sheet.showUploadDialog("excel");

//txt 업로드 다이얼로그 생성
sheet.showUploadDialog("txt");

//객체 형식
sheet.showUploadDialog({
  uploadType:"excel",
  colCount: 25
});
```
### Read More
- [showDialog static](/docs/static/show-dialog)
- [Dialog appendix](/docs/appx/dialog)
- [loadExcel method](/docs/funcs/excel/load-excel)
- [loadText method](/docs/funcs/excel/load-text)
- [showDownloadDialog method](./show-download-dialog)

### Since

|product|version|desc|
|---|---|---|
|dialog|0.0.2|기능 추가 및 업로드할 시트가 `Cfg.MultiRecord` 기능을 사용할때 대응 할 수 있도록 수정|
