---
KEY: importData
KIND: method
PATH: funcs/core/import-data
ALIAS: sheet.importData, importData(), 엑셀, 파일의, 내용을, 시트, 위로
ALIAS_EN: import, data, excel, xlsx, sheet, grid
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/import-data
---
# importData ***(method)***

> 엑셀 파일의 내용을 시트 위로 `import` 합니다.

> 해당 함수를 사용하시려면 `jszip` 라이브러리가 반드시 필요합니다. 

> [loadExcel](/docs/funcs/excel/load-excel)과 동일한 이벤트를 사용 할 수 있습니다. 

> [loadExcel](/docs/funcs/excel/load-excel) 기능 중 (서버에서 처리하는 기능을 제외하고) 제외한 동일한 기능을 제공하고 있습니다.  

> 해당 함수를 호출시 파일 다이얼로그가 나타나고, 사용자가 엑셀 파일을 선택하면 선택된 파일을 클라이언트 단에서 처리합니다.(서버x) 

> 지원 하는 파일 형식은 **xlsx, txt, csv** 입니다.


### Syntax
```javascript
void importData( param );
```

### Parameters

|Name|Type|Required| Description |
|----------|-----|---|----|
|append|`boolean`|선택|시트의 기존 데이터를 뒤에 엑셀의 데이터를 추가할지 여부(`default: 0(false)`)
설정을 하지 않으면 기존데이터는 모두 삭제한 후 엑셀의 데이터가 추가됨
 `주의` 해당 옵션은 `SearchMode:4,5 (서버페이징)` 모드에서는 사용할 수 없습니다.
`0(false)`:기존 데이터 제거 후 엑셀 데이터 추가 (`default`)
`1(true)`:기존 데이터에 엑셀 데이터 추가|
|fileExt|`string`|선택|파일 선택창에서 허용하는 파일 확장자를 구분자("\|")로 연결하여 설정합니다. (`default: "xlsx"`)|
|mode|`string`|선택| `"HeaderMatch"`, `"NoHeader"`, `"HeaderSkip"` 중에 하나의 문자열을 입력합니다.
각 문자의 의미는 다음과 같습니다.
<ul><li>`"HeaderMatch"` : 시트의 헤더행의 타이틀과 엑셀의 첫번째 행부터 타이틀을 비교해서 읽습니다.
  StartRow속성이 지정된 경우 StartRow에서 지정한 행부터 해더행의 개수만큼의 행을 읽어 비교합니다.</li><li>`"NoHeader"` : 헤더행이 없다고 가정하고 첫행부터 순서대로 각 열에 대입합니다.</li><li>`"HeaderSkip"` : 헤더행은 있지만 열비교를 하지 않고 좌측부터 순서대로 읽습니다. 시트의 헤더행의 2개라면 엑셀의 위에서 두개행을 제외하고 그 아래부터 읽는다고 생각하시면 됩니다.</li></ul>(`default: "HeaderMatch"`)|
| next | `object` | 선택 | [데이터 로우 객체](/docs/appx/row-object)
지정한 행 위에부터 데이터 `append`. (`append:1(true)`일때만 사용 가능) |
|startRow|`number`|선택|엑셀에서 시트가 몇번째 행에서 시작하는지 설정합니다. 설정하지 않으면 엑셀의 첫번째 행부터 (1부터시작) 읽어 들임 (`default: 1`) (`xlsx에서만 지원`)|
|startCol|`number`|선택|엑셀에서 시트가 몇번째 열에서 시작하는지 설정합니다. 설정하지 않으면 엑셀의 첫번째 열부터 (1부터시작) 읽어 들임 
 `mode: HeaderMatch`의 경우 (7,12)에 있는 시트를 찾을 때, `startRow: 7` 만 설정해 줘도 그 Row에 헤더길이만큼 텍스트를 보기 때문에 `startCol`을 설정할 필요가 없다.
 만약, `startCol`을 사용할 경우, 엑셀에 있는 시트에 첫번째 컬럼부터 `startCol`이 시작하게 된다 (`default: 1`) (`xlsx에서만 지원`)|
|workSheetName|`string`|선택|읽어들일 엑셀 파일의 워크시트 명을 설정합니다. 일치하는 워크시트 명이 없으면 첫번째 워크시트를 읽습니다.|
|workSheetNameStrict|`boolean`|선택|workSheetName에 설정한 워크시트가 없는 경우 첫번째 워크시트를 로드하지 않고 -17 에러 코드를 반환합니다.
`0(false)`:workSheetName에 설정된 워크시트가 없는 경우 첫번째 워크시트를 로드 (`default`)
`1(true)`:workSheetName에 설정된 워크시트가 없는 경우  -17 에러 코드를 반환|
|workSheetNo|`number`|선택|읽어들일 엑셀 파일의 워크시트 순번을 설정합니다. 설정하지 않으면 첫번째 워크시트를 읽습니다. (`default: 1`)|
|columnMapping|`string`|선택|엑셀 컬럼 번호를 이용해서 시트의 열 순서에 따라 데이터를 로드하는 옵션입니다. 구분자("\|")로 연결하여 설정합니다.(1번부터 시작)
 `mode: HeaderMatch`에서 컬럼매핑을 사용 할 경우 `HeaderMatch`의 기능은 무시되고 `HeaderSkip` 처럼 사용됩니다 (`xlsx에서만 지원`)|
|colSeparator|`string`|선택|열과 열 사이의 구분자 문자, txt 업로드 일 경우 (`default: \t(탭문자)`, csv 업로드 일 경우(`default: ,(콤마)`) 업로드되는 파일에 따라 기본 구분자가 변경됩니다. `(txt, csv에서만 지원)`|
|encoding|`string`|선택|텍스트 파일의 인코딩 형식 지정`(txt, csv에서만 지원)` (`default: "utf-8"`)|
|endRow|`number`|선택|엑셀에서 몇번째 행까지 읽어들일 지 설정합니다. 설정하지 않으면 끝까지 읽어들입니다. 0부터 시작합니다.|
|file|`object`|선택|file 객체 또는 Blob 객체로 된 엑셀 데이터를 직접 읽어들입니다. (`xlsx에서만 지원`)
 해당 인자를 사용하게 되면 파일 다이얼로그가 나타나지 않습니다.|
|uploadImage|`boolean`|선택| 셀 위에 띄워진 이미지를 업로드할지 여부를 결정합니다. 
 `0(false)`: 셀 위에 띄워진 이미지를 업로드하지 않음 
`1(true)`:셀 위에 띄워진 이미지를 업로드함 (`default`) |
|skipSEQ|`boolean`|선택|mode: `NoHeader`, `HeaderSkip`으로 데이터를 업로드할 때 SEQ 컬럼을 스킵하고 데이터를 업로드합니다. `columnMapping`을 설정한 경우에는 해당 인자가 동작하지 않습니다. (`default: 0`) |
<!--!
|`[비공개]`fileType|`string`|선택|file 인자를 통하여 엑셀 데이터 업로드시 파일의 확장자를 명시해 줍니다. `(xlsx, csv, txt)` (`default: xlsx`)|
!-->


### Return Value
***none***
xlsx에서만 지원
### Example
```javascript
// 워크시트이름이 sheet이고 mode: "HeaderMatch" 엑셀에 시트가 3번째 행에 있는 경우 업로드
var param = {startRow:3, mode:"HeaderMatch", workSheetName:"sheet"};
sheet.importData(param);

// mode: "HeaderSkip" 엑셀에 시트가 3번째 행과 3번째 열에 있는 경우 업로드
var param = {startRow:3, startCol:3, mode:"HeaderSkip"};
sheet.importData(param);

// mode: "NoHeader", workSheet순서가 4번째인 엑셀에 시트가 7번째 행과 3번째 열에 있는 경우 업로드
var param = {startRow:7, startCol:3, mode:"NoHeader", workSheetNo:4};
sheet.importData(param);

// 1~5번째 까지 있는 엑셀 컬럼을 시트에 3,4,5,2,1 순서로 업로드
var param = {columnMapping: "3|4|5|2|1"}
sheet.importData(param);

// 파일 확장자를 이용하여 텍스트 업로드
var param = {fileExt:"csv|txt"};
sheet.importData(param);
```

### Read More
- [exportData method](./export-data)
- [loadExcel method](/docs/funcs/excel/load-excel)
- [onSelectFile event](/docs/events/on-select-file)
- [onImportFinish event](/docs/events/on-import-finish)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.7|기능 추가|
|core|8.0.0.20|`endRow` 기능 추가, 파일 형식 내용 추가|
|core|8.1.0.20|`file` 기능 추가|
|core|8.1.0.33|`workSheetNameStrict` 기능 추가|
|core|8.2.0.14|`next` 기능 추가|
|core|8.3.0.22|`uploadImage` 기능 추가|
|core|8.3.0.45|`skipSEQ` 기능 추가|
<!--!
|`[비공개]`core|8.1.0.20| `fileType` 기능 추가|
!-->