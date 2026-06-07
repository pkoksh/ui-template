---
KEY: directLoadExcel
KIND: method
PATH: funcs/excel/direct-load-excel
ALIAS: sheet.directLoadExcel, directLoadExcel(), 사용자가, 선택한, 엑셀파일의, 내용을, 시트에
ALIAS_EN: direct, load, excel
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/excel/direct-load-excel
---
# directLoadExcel ***(method)***

> 사용자가 선택한 엑셀파일의 내용을 시트에 로드하지 않고 원하는 서블릿으로 전달하여 해당 서블릿에서 데이터베이스에 저장하게 끔 도와주는 기능입니다.

> 이 기능은 대량의 데이터가 담긴 엑셀파일의 내용을 사용자 피씨로 불러오고 이후 다시 저장하는 절차를 단순화 시켜는데 목적이 있습니다.

>
> 엑셀파일이 서블릿에 전달되는 과정은 아래와 같습니다.

> ![DirectLoadExcel과정](/assets/imgs/directloadexcel_process.png)
<!-- IMAGE: 스크린샷/예시 이미지 - DirectLoadExcel과정 -->
>
>
> 해당 함수를 사용하시려면 자바 서버모듈의 경우 `DirectLoadExcel.jsp`와 더불어 `ibsheet8-1.0.x.jar` 파일과 `apache POI 라이브러리`가 필요로 하고, 닷넷 서버모듈의 경우 `DirectLoadExcel.aspx`와 더불어 `IBSheet8-4.0.dll` 파일과 `Syncfusion 라이브러리 dll`이 필요합니다.

> 그리고 import/export 관련 기능을 사용하시려면, 배포시 같이 제공되는 `/plugins/ibsheet-excel.js` 파일을 include 하셔야 합니다.
>

### Syntax
```javascript
void directLoadExcel( param );
```

### Parameters

|Name|Type|Required|Description|
|----------|-----|---|----|
|extendParam|`string`|선택|전달할 parameter(querystring형식으로 작성, String 형태로 rquest.setAttribute("extendParam에 설정한 파라미터 이름")으로 담음)
<mark>DirectLoadExcel.jsp에서 파싱한 정보를 처리할 서블릿(혹은 jsp)경로를 **FP**라는 이름으로 전달해야 함</mark>|
|fileExt|`string`|선택|업로드 가능한 파일 확장자를 구분자("\|")로 연결하여 설정합니다. (`default: "xls\|xlsx"`)|
|mode|`string`|선택| "HeaderMatch", "NoHeader", "HeaderSkip" 중에 하나의 문자열을 입력합니다.
각 문자의 의미는 다음과 같습니다.
<ul><li>"HeaderMatch" : 시트의 헤더행의 타이틀과 엑셀의 첫번째 행부터 타이틀을 비교해서 읽습니다.
  StartRow속성이 지정된 경우 StartRow에서 지정한 행부터 해더행의 개수만큼의 행을 읽어 비교합니다.</li><li>"NoHeader" : 헤더행이 없다고 가정하고 첫행부터 순서대로 각 열에 대입합니다.</li><li>"HeaderSkip" : 헤더행은 있지만 열비교를 하지 않고 좌측부터 순서대로 읽습니다. 시트의 헤더행의 2개라면 엑셀의 위에서 두개행을 제외하고 그 아래부터 읽는다고 생각하시면 됩니다.</li></ul>(`default: "HeaderMatch"`)|
|startRow|`number`|선택|엑셀에서 시트가 몇번째 행에서 시작하는지 설정합니다. 설정하지 않으면 엑셀의 첫번째 행부터 (1부터시작) 읽어들임.|
|endRow|`number`|선택|엑셀에서 시트가 몇번째 행까지 읽어들일지를 설정합니다. 설정하지 않으면 엑셀의 마지막 행까지 읽어들임.|
|workSheetName|`string`|선택|읽어들일 엑셀 파일의 워크시트 명을 설정합니다. 일치하는 워크시트 명이 없으면 첫번째 워크시트를 읽습니다.|
|workSheetNo|`number`|선택|읽어들일 엑셀 파일의 워크시트 순번을 설정합니다. 설정하지 않으면 첫번째 워크시트를 읽습니다.|
|reqHeader|`object`|선택|서버 전송 헤더에 사용자가 지정한 헤더 정보를 설정합니다.|
|useXhr|`boolean`|선택| xhr 통신을 이용해 엑셀 파일을 로드합니다.
`0(false)`:xhr 통신 사용 안함 (`default`)
`1(true)`:xhr 통신 사용|


### Return Value
***none***

### Example
```javascript
//FP로 최종 데이터를 받을 서블릿(혹은 jsp) 경로를 지정해야 함
var param = {
        startRow:5,
        workSheetName:"sheet4",
        extendParam:"year=2019&deptNo=0041&FP=./save/empExcelData.do"
        };
sheet.directLoadExcel(param);
```

```java
//directLoadExcel 자바 서버모듈 예시
List<Map<String, Object>> data = (List<Map<String, Object>>)request.getAttribute("SHEETDATA");	

Map<String, Object> header = (Map<String, Object>)data.get(0);
for (String key : header.keySet()) {
  System.out.print(key + "|");
}
System.out.println();
	
for (Map<String, Object> row : li) {
  for (String key : row.keySet()) {
    System.out.print(row.get(key) + "|");
  }
  System.out.println();
}
```

```cs
//directLoadExcel 닷넷 서버모듈 예시
List<Object> data = (List<Object>)this.Context.Items["sheetData"];

Dictionary<String, String> header = (Dictionary<String, String>)data[0];
foreach (String key in header.Keys) {
  System.Diagnotics.Debug.Write(key + "|");
}
System.Diagnotics.Debug.WriteLine();

foreach (Dictionary<String, String> row in data) {
  foreach (String key in row.Keys) {
    System.Diagnotics.Debug.Write(row[key] + "|");
  }
  System.Diagnotics.Debug.WriteLine();
}
```

### Read More
- [loadExcel method](./load-excel)
- [onSelectFile event](/docs/events/on-select-file)
- [onImportFinish event](/docs/events/on-import-finish)

### Since

|product|version|desc|
|---|---|---|
|excel|0.0.0|기능 추가|
|excel|0.0.8|`reqHeader` 기능 추가|
