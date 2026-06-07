---
KEY: directDownToExcel
KIND: method
PATH: funcs/excel/direct-down-to-excel
ALIAS: sheet.directDownToExcel, directDownToExcel(), 시트에, 조회된, 데이터는, 무시하고, 헤더
ALIAS_EN: direct, down, to, excel, header
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/excel/direct-down-to-excel
---
# directDown2Excel ***(method)***

> 시트에 조회된 데이터는 무시하고, 헤더 정보만 서버로 전송하여, 서버에서 만든 데이터와 결합해 엑셀파일을 생성/다운로드 하는 기능입니다.

> 이 기능은 조회된 데이터가 많아 이를 엑셀로 다운로드 시키기에는 서버측에 부하가 예상되는 경우 사용하는 기능으로, 서버측에서는 별도로 조회 데이터에 해당하는 내용을 
 `List<Map>` 구조로 생성하여 데이터를 `SHEETDATA` 라는 이름으로 `request` 객체에 담은 뒤, `DirectDown2Excel.jsp` 또는 `DirectDown2Excel.aspx` 파일로 `forward` 해 주셔야 합니다.
>
> 엑셀파일이 다운로드 되는 과정은 아래와 같습니다.

> ![DirectDown2Excel과정](/assets/imgs/directdown2excel_process.png)
<!-- IMAGE: 스크린샷/예시 이미지 - DirectDown2Excel과정 -->
>
>
> 따라서 해당 함수를 사용하시려면 자바 서버모듈의 경우 `DirectDown2Excel.jsp`와 더불어 `ibsheet8-1.0.x.jar` 파일과 `apache POI 라이브러리`가 필요하고, 닷넷 서버모듈의 경우 `DirectDown2Excel.aspx`와 더불어 `IBSheet8-4.0.dll` 파일과 `Syncfusion 라이브러리 dll`이 필요합니다.

> 그리고 import/export 관련 기능을 사용하시려면, 배포시 같이 제공되는 `/plugins/ibsheet-excel.js` 파일을 include 하셔야 합니다.
>

### Syntax
```javascript
void directDown2Excel( param );
```

### Parameters

|Name|Type|Required|Description|
|----------|-----|---|----|
|url|`string`|필수|데이터를 조회할 서버 url|
|extendParam|`string`|선택|url로 전달할 parameter(querystring형식으로 작성)|
|extendParamMethod|`string`|선택|`extendParam`의 내용을 `GET` 또는 `POST`로 전달할지를 설정합니다. (`default: "GET"`)|
|multipart|`boolean`|선택|url로 전송시 Content-Type 설정
`0(false)`:일반적인 POST로 전송
`1(true)`:Content-Type을 multipart로 전송 (`default`)|
|fileName|`string`|선택|생성할 엑셀파일 명 (`default: "Excel.xlsx"`) 
**이 속성에서 파일명과 함께 확장자를 xls, xlsx로 붙이느냐에 따라서 생성 파일이 xls형식이나, xlsx형식으로 만들어집니다.
가급적 xlsx 형식으로 다운로드 하실 것을 권합니다.**|
|sheetName|`string`|선택|만들어지는 엑셀 파일의 WorkSheet에 부여할 이름|
|downCols|`string`|선택|구분자를 통해 지정한 열만 다운로드 합니다.
 별도의 설정이 없으시 모든 열이 다운로드 됩니다.
(ex: "Price\|AMT\|TotalReward" 식의 컬럼 명을 구분자("\|")로 연결한 문자열)|
|sheetDesign|`boolean`|선택|`main.css` 파일에 설정된 시트의 디자인 요소를 엑셀에도 반영할지 여부를 설정합니다.
반영되는 디자인 요소는 다음과 같습니다. 헤더의 배경색,폰트명,폰트크기
`0(false)`:시트의 디자인 요소 엑셀에 반영 안함
`1(true)`:시트의 디자인 요소 엑셀에 반영 (`default`)|
|merge|`boolean`|선택|헤더 영역에 대한 머지 정보를 엑셀에 반영할지 여부
`0(false)`:헤더 영역에 대한 머지 정보 엑셀에 반영 안함 (`default`)
`1(true)`:헤더 영역에 대한 머지 정보 엑셀에 반영|
|numberFormatMode|`number`|선택|실수 형태의 데이터 타입에 대한 셀 서식 설정 방식을 설정합니다.
`0`:시트의 컬럼 포맷을 따릅니다. (`default`)
`1`:셀의 값 기준에 따라 정수 또는 실수 형태로 셀 서식을 설정합니다.
`2`:일반 서식으로 설정합니다.|
|titleText|`string`|선택|엑셀 문서의 상단에 원하는 문자를 추가합니다.
 문자는 열구분자("\|")와 행구분자("\r\n")을 통해서 작성하실수 있습니다.
가령 "A\|B\|C\r\nD\|E\|F" 와 같이 입력한 경우 첫 행에 3개의 셀에 각각 A,B,C 값이 들어가고 두번째 행의 3개의 셀에 각각 D,E,F 값이 입력됩니다. 값 안에서 엔터를 포함하려면 \r 이나 \n 을 삽입하면 됩니다. \r\n 이 10개가 포함되면 11줄을 차지하게 되고 12번째 행부터 시트 내용이 출력됩니다.|
|titleAlign|`string`|선택|titleText로 삽입한 문자들에 대한 좌우 정렬 (`default: "center"`, "left","right"선언가능)|
|downCombo|`string`|선택|`Enum` 타입의 선택 항목을 `Enum` 속성과 `EnumKeys` 속성 어떤 형태로 다운로드를 받을 지 설정합니다.
 `TEXT`: `Enum` 속성을 사용하여 다운로드 합니다. (`default`)
 `CODE`: `EnumKeys` 속성을 사용하여 다운로드합니다.|
|userMerge|`string`|선택|TitleText와 더불어 사용하면서 엑셀 안에 원하는 영역을 머지(병합)합니다.
 입력방법은 4개의 숫자로 
"머지시작셀 row index,머지시작셀 col index,아래로 병합할 행 개수(1을 설정하면 병합 없음),우측으로 병합할 개수"
로 이루어 집니다.(여러개 병합시에는 띄어쓰기로 구분)
가령 "2,2,1,6 3,2,3,3"위와 같이 설정하였다면 2,2 셀부터 오른쪽으로 6칸이 병합되고, 3,2 셀부터 아래로 3칸,오른쪽으로 3칸이 병합 됩니다.
![userMerge](/assets/imgs/userMerge.png)
<!-- IMAGE: 스크린샷/예시 이미지 - userMerge -->|
|excelRowHeight|`number`|선택|엑셀 문서의 행 높이를 설정합니다.|
|excelHeaderRowHeight|`number`|선택|엑셀의 헤더행의 높이를 설정합니다.|
|comboValidation|`boolean`|선택|Enum 타입으로 만들어진 열에 대해 엑셀에서도 데이터 기능을 통해 드롭다운리스트 형태로 표현합니다.
Enum의 종류가 많은 경우 무시됩니다.
`0(false)`:드롭다운리스트 형태 사용 안함 (`default`)
`1(true)`:드롭다운리스트 형태 사용|
|reqHeader|`object`|선택|서버 전송 헤더에 사용자가 지정한 헤더 정보를 설정합니다.|
|useXhr|`boolean`|선택| xhr 통신을 이용해 엑셀 파일을 다운로드받습니다.
`0(false)`:xhr 통신 사용 안함 (`default`)
`1(true)`:xhr 통신 사용|
|exHead|`object`|선택|시트 상단에 표시하고 싶은 내용을 설정합니다.
titleText, userMerge, header, footer 속성과 같이 사용할 수 없으며, 같이 사용시 titleText, userMerge, header, footer속성은 무시됩니다. 
 해당 속성은 poi를 사용하는 경우에만 설정이 가능합니다.|
|exFoot|`object`|선택|시트 하단에 표시하고 싶은 내용을 설정합니다.
titleText, userMerge, header, footer 속성과 같이 사용할 수 없으며, 같이 사용시 titleText, userMerge, header, footer속성은 무시됩니다. 
 해당 속성은 poi를 사용하는 경우에만 설정이 가능합니다.|
<!--!
|`[비공개]` hiddenColumn|`boolean`|선택|시트 내에 감춰진 열을 엑셀에서도 "열 숨기기" 형태로 다운로드 합니다.
`0(false)`:감춰진 열 다운로드 시 미포함 (`default`)
`1(true)`:감춰진 열 "열 숨기기" 형태로 다운로드 시 포함|
!-->


### Return Value
***none***

### Example
```javascript
var param = {
        url:"./apex/yearApexDataList.do",
        extendParam:"year=2019&deptNo=0041",
        fileName:"년단위 결산 정보.xlsx"
};
sheet.directDown2Excel(param);
```

```java
//directDown2Excel 자바 서버모듈 예시
String[] sido = { "서울특별시", "수원시", "성남시" };
String[] sigungu = { "관악구", "팔달구", "분당구" };

List<Map<String, Object>> data = new ArrayList<>();

for (int i = 0; i < sido.length(); i++) {
  Map<String, Object> row = new HashMap<>();

  row.put("sSido", sido[i]);
  row.put("sSiGunGu", sigungu[i]);

  data.add(row);
}

request.setAttribute("SHEETDATA", data);

String forwardPath = "./DirectDown2Excel.jsp";
if (!"".equals(forwardPath)) {
  RequestDispatcher rd = request.getRequestDispatcher(forwardPath);
  rd.forward(request, response);
}
```

```cs
// directDown2Excel 닷넷 서버모듈 예시
// 엑셀로 내려질 데이터를 DB에서 조회 
String connectionString = "Provider=Microsoft.JET.OLEDB.4.0;data source=C:\\mdb\\bussinessList.mdb";
String query = "SELECT * FROM bussinessList";

OleDbConnection conn = new OleDbConnection(connectionString);
OleDbCommand cmd = new OleDbCommand(query, conn);
conn.Open();

OleDbDataReader reader = cmd.ExecuteReader();

// 데이터를 List(Dictionary -> Object)형태로 전환.
// Dictionary 데이터 생성 시 이름은 반드시 시트의 SaveName과 동일 해야 함.
List<Object> li = new List<object>();
while (reader.Read()) {
  Dictionary<String, String> row = new Dictionary<string, string>();
  for (int i = 0; i < reader.FieldCount; i++) {
    row[reader.GetName(i)] = reader.GetValue(i).ToString();
  }

  li.Add(row);
}

reader.Close();
conn.Close();

this.Context.Items["SHEETDATA"] = li; 

// DirectDown2Excel.aspx 페이지로 forwarding             
String forwardPath = "./DirectDown2Excel.aspx"; 
if(forwardPath != "") {
  Server.Execute(forwardPath);
}

```

### Read More
- [down2Excel method](./down-to-excel)
- [onBeforeExport event](/docs/events/on-before-export)
- [onExportFinish event](/docs/events/on-export-finish)

### Since

|product|version|desc|
|---|---|---|
|excel|0.0.0|기능 추가|
|excel|0.0.8|`reqHeader` 기능 추가|
