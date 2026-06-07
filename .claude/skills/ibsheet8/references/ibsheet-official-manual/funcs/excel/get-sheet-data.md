---
KEY: getSheetData
KIND: method
PATH: funcs/excel/get-sheet-data
ALIAS: sheet.getSheetData, getSheetData(), 시트의, 데이터를, 인자의, 형식으로, 추출
ALIAS_EN: get, sheet, data
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/excel/get-sheet-data
---
# getSheetData ***(method)***

> 시트의 데이터를 인자의 형식으로 추출 합니다. 

> 대상 컬럼을 설정하지 않은 경우는 모든 컬럼을 대상으로 합니다. 


### Parameters

|Name|Type|Required|Description|
|----------|-----|---|----|
|type|`string`|선택|시트 데이터를 JSON으로 추출할지, `CSV`로 추출할지 선택합니다.(`default: json`)|
|cols|`string`|선택|추출할 컬럼을 지정합니다. 설정하지 않는 경우 모든 컬럼 데이터를 추출합니다. 보여지는 열만 추출하고 싶다면 "Visible"로 설정하면 됩니다.|
|colDelim|`string`|선택|출력 대상의 컬럼 구분자를 지정합니다. 해당 옵션은 type을 `CSV`로 지정한 경우만 사용하실 수 있습니다.(`default: ,`)|
|newLine|`string`|선택|셀 데이터에 개행이 포함되어 있는 경우, 출력 데이터의 개행 구분자를 설정합니다. 해당 옵션은 type을 `CSV`로 지정한 경우만 사용하실 수 있습니다.(`default: \r\n`)|

|rowDelim|`string`|선택|출력 대상의 행 구분자를 설정합니다. 해당 옵션은 type을 `CSV`로 지정한 경우만 사용하실 수 있습니다.(`default: \r\n`)|
|styleProperty|`string`|선택|행과 셀에 관한 스타일 관련 속성값을 포함하여 추출할지 여부를 설정합니다. 해당 옵션은 type을 `JSON`으로 지정한 경우만 사용하실 수 있습니다.(`default: 0`)|
<!-- |formattedText|`string`|선택|데이터를 포맷이 적용된 문자열로 추출할지 여부를 설정합니다.(`default: 0`)| -->

### styleProperty로 추출되는 데이터
|Target|Propery|Description|
|----------|-----|---|----|
|Row|CanEdit|대상 행의 편집 허용 여부|
|Row|Color|대상 행의 배경색|
|Row|TextColor|대상 행의 폰트 색상|
|Cell|CanEdit|대상 셀의 편집 허용 여부|
|Cell|Color|대상 셀의 배경색|
|Cell|TextColor|대상 셀의 폰트 색상|
|Cell|TextBold|대상 셀의 폰트 굵게(Bold) 여부|
|Cell|TextItalic|대상 셀의 폰트 기울임(Italic) 여부|
|Cell|TextUnderLine|대상 셀의 폰트 밑줄(Underline) 여부|
|Cell|TextStrike|대상 셀의 폰트 취소선(Strike) 여부|
|Cell|TextOverline|대상 셀의 폰트 윗줄(Overline) 여부|
|Cell|Text|대상 셀의 작은 대문자(Small Caps) 여부|

### Return Value
***none***

### Example
```javascript
// 시트의 데이터를 json 형식으로 추출합니다.
sheet.getSheetData({type: "json"});
```

### Read More

### Since

|product|version|desc|
|---|---|---|
|excel|1.1.12|기능 추가|