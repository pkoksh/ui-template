---
KEY: downToExcel
KIND: method
PATH: funcs/excel/down-to-excel
ALIAS: sheet.downToExcel, downToExcel(), 시트의, 내용을, 엑셀, 파일로, 다운로드
ALIAS_EN: down, to, excel, xlsx
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/excel/down-to-excel
---
# down2Excel ***(method)***

> 시트의 내용을 엑셀 파일로 다운로드 합니다.

> 이 함수는 시트의 내용을 제품과 같이 배포되는 `Down2Excel.jsp` 파일로 전달하고, 이 파일에서 실제 엑셀 파일을 생성하여 클라이언트 측으로 전송하게 됩니다.

> 따라서 해당 함수를 사용하시려면 자바 서버모듈의 경우 `Down2Excel.jsp`와 더불어 `ibsheet8-1.0.x.jar` 파일과 `apache POI 라이브러리`가 필요로 하고, 닷넷 서버모듈의 경우 `Down2Excel.aspx`와 더불어 `IBSheet8-4.0.dll` 파일과 `Syncfusion 라이브러리 dll`가 필요합니다.

> **이 기능을 사용하시려면, 배포시 같이 제공되는 `/plugins/ibsheet-excel.js` 파일을 include 하셔야 합니다.**
>
> `Down2Excel.jsp` 또는 `Down2Excel.aspx` 파일에 대한 경로는 `Cfg`에 `Export` 속성을 통해 설정됩니다.

> 매 시트 생성시 마다 `Export`속성을 설정하기 번거로운 경우에는 [IBSheet.CommonOptions](/docs/static/common-options) 속성을 통해 모든 시트에 공통으로 설정할 수도 있습니다.

> 다시 정리해 보자면 다음과 같은 작업이 필요 합니다.

###
**자바 서버모듈**

1. `ibsheet8-1.0.x.jar` 파일과 `공통 라이브러리(POI jar)`을 WEB-INF/lib에 추가.
2. `/plugins/ibsheet-excel.js` 파일을 해당 페이지에 include.
3. 시트 생성시 `Cfg`에 `Export` 속성을 통해 `Down2Excel.jsp` 파일에 대한 경로 설정

**닷넷 서버모듈**

1. `IBSheet8-4.0.dll` 파일과 `공통 라이브러리(Syncfusion dll)`을 bin 또는 참조에 추가.
2. `/plugins/ibsheet-excel.js` 파일을 해당 페이지에 include.
3. 시트 생성시 `Cfg`에 `Export` 속성을 통해 `Down2Excel.aspx` 파일에 대한 경로 설정

[다운로드/업로드 관련 기본 정보](/docs/appx/import-export)

### Syntax
```javascript
void down2Excel( param );
```

### Parameters

|Name|Type|Required|Description|
|----------|-----|---|----|
|fileName|`string`|선택|생성할 엑셀파일 명 (`default: "Excel.xlsx"`) 
**이 속성에서 파일명과 함께 확장자를 xls, xlsx로 붙이느냐에 따라서 생성 파일이 xls형식이나, xlsx형식으로 만들어집니다.**|
|sheetName|`string`|선택|만들어지는 엑셀 파일의 WorkSheet에 부여할 이름|
|downRows|`string`|선택|지정한 행만 다운로드 합니다.
 별도의 설정이 없을 시 모든 행이 다운로드 됩니다.
 보여지는 행만 다운로드하고 싶을 경우 `"Visible"`로 설정하면 됩니다.
 (ex: "1\|3\|4\|5\|9" 식의 문자열)
 `downRows`를 사용하면 머지 기능이 동작하지 않습니다.
 데이터 행만 설정할 수 있으며, 데이터 행의 시작 Index는 1부터 시작합니다.|
|downCols|`string`|선택|지정한 열만 다운로드 합니다.
 별도의 설정이 없을시 모든 열이 다운로드 됩니다.
 보여지는 열만 다운로드하고 싶을 경우 `"Visible"`로 설정하면 됩니다.
(ex: "Price\|AMT\|TOTAL" 식의 문자열)|
|downTreeHide|`boolean`|선택|tree를 사용하는 경우, 접혀진 행도 엑셀에 다운로드 할지 여부
`0(false)`:접혀진 행(자식노드)들 다운로드 대상 제외 (`default`)
`1(true)`:접혀진 행(자식노드)들 다운로드 대상 포함|
|downHeader|`boolean`|선택|헤더행을 다운로드 할지 여부를 설정합니다.
`0(false)`:다운로드 시 헤더행 미포함
`1(true)`:다운로드 시 헤더행 포함 (`default`)|
|sheetDesign|`number`|선택|`main.css` 파일에 설정된 시트의 디자인 요소를 엑셀에도 반영할지 여부를 설정합니다.
 반영되는 디자인 요소는 다음과 같습니다.
헤더의 배경색, 헤더의 폰트 색상,
 폰트명(main.css 파일에 설정한 IBMain class 속성값),
폰트크기(excelFontSize 속성값),데이터 배경색 
 `0`:셀 외곽선을 제외한 모든 디자인을 적용하지 않습니다.
 `1`:셀 외곽선을 포함해 모든 디자인을 적용합니다. (`default`)
`2`:셀 외곽선을 제외한 셀 스타일을 적용합니다.
`3`:셀 외곽선 및 스타일을 모두 적용하지 않습니다.
 `4`:헤더행에만 모든 디자인을 적용합니다. **해당 옵션을 사용하시려면 서버모듈을 1.1.16 이후 버전으로 업데이트해주셔야 합니다.**
|titleText|`string`|선택|엑셀 문서의 상단에 원하는 문자를 추가합니다.
 문자는 열구분자("\|")와 행구분자("\r\n")을 통해서 작성하실수 있습니다.
가령 "A\|B\|C\r\nD\|E\|F" 와 같이 입력한 경우 첫 행에 3개의 셀에 각각 A,B,C 값이 들어가고 두번째 행의 3개의 셀에 각각 D,E,F 값이 입력됩니다. 
 값 안에서 엔터를 포함하려면 \r 이나 \n 을 삽입하면 됩니다. \r\n 이 10개가 포함되면 11줄을 차지하게 되고 12번째 행부터 시트 내용이 출력됩니다.|
|userMerge|`string`|선택|`TitleText`와 더불어 사용하면서 엑셀 안에 원하는 영역을 머지(병합)합니다.
 입력방법은 4개의 숫자로 
`"머지시작셀 row index,머지시작셀 col index,아래로 병합할 행 개수(1을 설정하면 병합 없음),우측으로 병합할 개수"`
로 이루어 집니다.(여러개 병합시에는 띄어쓰기로 구분)
가령 `"2,2,1,6 3,2,3,3"`위와 같이 설정하였다면 2,2 셀부터 오른쪽으로 6칸이 병합되고, 3,2 셀부터 아래로 3칸, 오른쪽으로 3칸이 병합 됩니다.
![userMerge](/assets/imgs/userMerge.png)
<!-- IMAGE: 스크린샷/예시 이미지 - userMerge -->|
|excelRowHeight|`number`|선택|엑셀 문서의 행 높이를 설정합니다. -1 설정시 셀의 내용물 크기에 맞춰 엑셀 문서의 행 높이가 조절됩니다.|
|excelHeaderRowHeight|`number`|선택|엑셀의 헤더행의 높이를 설정합니다.|
|wordWrap|`boolean`|선택|엑셀 문서의 "텍스트 줄바꿈" 여부를 설정합니다.
`0(false)`:줄바꿈 미적용
`1(true)`:줄바꿈 적용 (`default`)|
|comboValidation|`boolean`|선택|Enum 타입으로 만들어진 열에 대해 엑셀에서도 데이터 기능을 통해 드롭다운리스트 형태로 표현합니다.
Enum의 종류가 많은 경우 무시됩니다.
`0(false)`:드롭다운리스트 형태 사용 안함 (`default`)
`1(true)`:드롭다운리스트 형태 사용|
|hiddenColumn|`boolean`|선택|숨은 컬럼들을 엑셀로 다운로드 받은 경우, 해당 컬럼이 눈에 보이지는 않지만 엑셀 메뉴중 "숨기기 취소"를 선택한 경우 해당 컬럼이 다시 보일 수 있도록 엑셀 문서에 다운로드 받는다.
 `hiddenColumn:1` 은 `downCols`와 **절대 같이 사용하시면 안됩니다.**
`0(false)`: 엑셀 다운로드 시 감춰진 열도 Visible:1 컬럼과 동일하게 일반 컬럼처럼 표현됨 (`default`)
`1(true)`:감춰진 열 다운로드 시 "열 숨기기" 형태로 엑셀 다운로드|
|merge|`number`|선택|시트의 머지 상태를 엑셀에 그대로 반영할지를 설정합니다.
`0`:사용 안 함 (`default`)
`1`:사용함 (셀 병합 시, 부속 셀의 값을 원본으로 유지함)
`2`:사용함 (셀 병합 시, 부속 셀의 값을 비움)|
|textToGeneral|`boolean`|선택|Type:`Text`의 엑셀 서식 형식
`0(false)`: Type:`Text`의 엑셀 서식을 텍스트 서식으로 지정 
`1(true)`: Type:`Text`의 엑셀 서식을 일반 서식으로 지정(`default`)|
|allTypeToText|`boolean`|선택|시트의 `Int`, `Float` 타입을 제외한 모든 컬럼의 엑셀 서식을 `Text` 타입으로 받고자 하는 경우 설정합니다.
`0(false)`:`Int`, `Float` 타입을 제외한 모든 컬럼의 엑셀 서식을 `Text` 타입으로 설정 안함 (`default`)
`1(true)`:`Int`, `Float` 타입을 제외한 모든 컬럼의 엑셀 서식을 `Text` 타입으로 설정|
|appendPrevSheet|`boolean`|선택|[down2ExcelBuffer](./down-to-excel-buffer) 메소드를 사용하여 2개 이상의 시트를 엑셀로 다운로드 할 때 이전의 시트 내용을 마지막으로 작성한 워크시트에 시트 내용을 덧붙일지 여부를 설정합니다.
`0(false)`: 워크시트를 새로 생성하여 작성합니다. (`default`)
`1(true)`: 마지막으로 작성한 워크시트에 시트 내용을 덧붙입니다.|
|checkBoxOnValue|`string`|선택|체크박스와 라디오 박스에서 체크를 한 경우 `1`값 대신 지정한 값을 사용합니다.|
|checkBoxOffValue|`string`|선택|체크박스와 라디오 박스에서 체크 해제를 한 경우 `0`값 대신 지정한 값을 사용합니다.|
|downSum|`boolean`|선택|합계 행 다운로드 여부를 설정합니다.
`0(false)`:합계 행 다운로드 시 미포함
`1(true)`:합계 행 다운로드 시 포함 (`default`)|
|excelFontSize|`number`|선택|엑셀의 폰트 크기를 설정합니다.|
|excludeFooterRow|`boolean`|선택|푸터 행 제외 여부를 설정합니다.
`0(false)`:푸터 행 포함 (`default`) 
`1(true)`:푸터 행 제외|
|numberTypeToText|`boolean`|선택|`Int`, `Float` 타입의 컬럼을 `Text` 타입으로 다운로드 받을지 여부를 설정합니다.
`0(false)`:`Int`, `Float` 타입의 컬럼을 `Text` 타입으로 설정 안함 (`default`)
`1(true)`:`Int`, `Float` 타입의 컬럼을 `Text` 타입으로 설정|
|reqHeader|`object`|선택|서버 전송 헤더에 사용자가 지정한 헤더 정보를 설정합니다.|
|extendParam|`string`|선택|서버로 전달해야 하는 내용이 있는 경우 `GET` 방식의 `QueryString`으로 연결하여 서버로 같이 전달됩니다.
 (ex: `sheet.down2Excel({extendParam: "sido=서울시&sigungu=관악구"}`)|
|extendParamMethod|`string`|선택|`extendParam`의 내용을 `GET` 또는 `POST`로 전달할지를 설정합니다. (`default: "GET"`)|
|requiredMark|`boolean`|선택|필수 입력 항목 마크(`*`)를 다운로드 받을지 여부를 설정합니다.
`0(false)`:필수 입력 항목 마크(`*`) 다운로드 시 미포함
`1(true)`:필수 입력 항목 마크(`*`) 다운로드 시 포함 (`default`)|
|titleAlign|`string`|선택|`titleText`로 설정한 내용에 대하여 `left`, `center`, `right` 중 정렬을 설정합니다. (`default: "center"`)|
|downCombo|`string`|선택|`Enum` 타입의 선택 항목을 `Enum` 속성과 `EnumKeys` 속성 어떤 형태로 다운로드를 받을 지 설정합니다.
 `TEXT`: `Enum` 속성을 사용하여 다운로드 합니다. (`default`)
 `CODE`: `EnumKeys` 속성을 사용하여 다운로드합니다.|
|onlyHeaderMerge|`boolean`|선택|시트의 데이터 영역의 머지를 강제로 제한하고 헤더 영역의 머지만을 엑셀에 반영 여부
`0(false)`:헤더 영역과 데이터 영역의 머지 사항을 다운로드 시 반영 (`default`)
`1(true)`:헤더 영역의 머지 사항만 다운로드 시 반영|
|numberExMode|`boolean`|선택|시트의 `Int`, `Float` 타입의 컬럼을 숫자 서식으로 다운로드 받을 지 여부를 설정합니다. 설정하지 않을 시, 통화나 사용자 지정 서식으로 다운로드됩니다.
`0(false)`:다운로드 시, 시트의 `Int`, `Float` 타입의 컬럼을 통화나 사용자 지정 서식으로 받습니다 (`default`)
`1(true)`:다운로드 시, 시트의 `Int`, `Float` 타입의 컬럼을 숫자 서식으로 다운로드 받습니다|
|numberFormatMode|`number`|선택|실수 형태의 데이터 타입에 대한 셀 서식 설정 방식을 설정합니다.
`0`:시트의 컬럼 포맷을 따릅니다. (`default`)
`1`:셀의 값 기준에 따라 정수 또는 실수 형태로 셀 서식을 설정합니다.
`2`:일반 서식으로 설정합니다.|
|useXhr|`boolean`|선택| xhr 통신을 이용해 엑셀 파일을 다운로드받습니다.
`0(false)`:xhr 통신 사용 안함 (`default`)
`1(true)`:xhr 통신 사용|
|exHead|`object`|선택|시트 상단에 표시하고 싶은 내용을 설정합니다.
titleText, userMerge, header, footer 속성과 같이 사용할 수 없으며, 같이 사용시 titleText, userMerge, header, footer속성은 무시됩니다. 
 해당 속성은 poi를 사용하는 경우에만 설정이 가능합니다.|
|exFoot|`object`|선택|시트 하단에 표시하고 싶은 내용을 설정합니다.
titleText, userMerge, header, footer 속성과 같이 사용할 수 없으며, 같이 사용시 titleText, userMerge, header, footer속성은 무시됩니다. 
 해당 속성은 poi를 사용하는 경우에만 설정이 가능합니다.|
|tempFile|`string`|선택|템플릿으로 사용할 엑셀 파일명을 설정합니다. **반드시 `Down2Excel.jsp` 또는 `Down2Excel.aspx`에서 템플릿 경로를 설정해야합니다.**|
|sheetNo|`number`|선택|`tempFile`인자로 지정한 엑셀 파일에서 템플릿으로 사용할 워크시트 번호를 설정합니다. (`default: 0`)|
|startCol|`number`|선택|템플릿 적용 다운로드 시, 엑셀 파일 내 데이터를 쓰기 시작할 컬럼 번호를 설정합니다. (`default: 0`)|
|startRow|`number`|선택|템플릿 적용 다운로드 시, 엑셀 파일 내 데이터를 쓰기 시작할 행 번호를 설정합니다. (`default: 0`)|
|freezePane|`number`|선택|상단 행과 왼쪽 열을 틀 고정하여 다운로드하는 옵션입니다. 옵션 설정에 따라 다르게 틀 고정이 적용되어 다운로드되며, 비트 연산으로 동작합니다. 
 
 `0`: 틀 고정을 적용하지 않음(`default`) 
 `1`: 헤더 틀 고정 적용 (`2`과 함께 적용시 헤드 영역 틀 고정으로 동작) 
 `2`: 헤드 영역 틀 고정 적용 
 `4`: 왼쪽 고정 열 틀 고정 적용|
|workbookPassword|`string`|선택| 다운받을 엑셀 파일에 비밀번호를 설정하려는 경우 사용하는 옵션입니다.
xlsx 확장자 파일에서만 지원됩니다.|
|enableFilter|`boolean`|선택| 시트를 엑셀로 다운로드할 때, 시트영역에 엑셀 필터 기능을 활성화하여 다운로드합니다. 
  **이 옵션은 현재 시트에 필터가 적용되어 있는지 여부와는 무관합니다. 더불어 이 옵션은 필터링된 결과를 다운로드하는 기능이 아니며, 단지 엑셀 필터 기능을 바로 사용할 수 있도록 시트 영역에 필터를 설정하는데 그칩니다.**|
<!--!
|`[점검]` excludeSubSum|`boolean`|선택|소계/누계 행 제외 여부를 설정합니다.
 `0(false)`: 소계/누계 모두 제외하지 않습니다. (`default`)
 `1(true)`: 소계/누계 모두 제외합니다.|
|`[비공개]` autoSizeColumn|`boolean`|선택|엑셀의 컬럼 너비를 자동으로 조절할 지 여부를 설정합니다.(단, 자동 조절 결과가 정확하지 않을 수 있습니다.) (`default: 0(false)`)|
|`[비공개]` printSetup|`object`|선택|엑셀을 다운로드할 때, 프린트에 관한 설정(용지 크기, 용지 방향 등)을 설정합니다.|
|`[비공개]` reportXMLURL|`boolean`|선택|엑셀에 타이틀이나 패턴 등을 별도의 xml파일을 통해 설정합니다.|
|`[비공개]` treeLevel|`boolean`|선택|트리 구조의 데이터를 다운 받을 때, 트리 레벨을 엑셀에 별도의 컬럼으로 표시할 지 여부를 설정합니다. (`default: 0(false))`|
|`[비공개]` URL|`string`|선택|`down2Excel`과 더불어 서버에서 처리해야하는 내용이 있는 경우, 로직을 처리할 URL을 설정합니다.|

!-->

### downCols, downRows 사용시 merge 적용 정리

| downCols |화면과 동일하게 컬럼 설정 | 화면과 다르게 컬럼 설정 |
| ------ | ------ | ------ |
| downRows 사용| X |  X |
| downRows 사용 안함 | O | 아래 설명 참고|

merge 옵션을 적용해 downCols를 사용하시려면 downCols에 머지가 이뤄진 컬럼을 **순서대로** **모두** 포함하고 있어야만 합니다. **Visible: 0이 설정된 컬럼이 있다면 해당 컬럼도 반드시 downCols에 포함해둬야만 합니다.** 


머지가 이뤄진 컬럼 중 특정 컬럼이 빠지거나, 머지가 이뤄진 컬럼을 모두 포함하고 있더라도 다운로드받는 컬럼의 순서가 다르면 엑셀 다운시 머지가 정상적으로 이뤄지지 않습니다. 





![downCols사용시 머지](/assets/imgs/downcols_merge.png "downCols사용시 머지")
<!-- IMAGE: 스크린샷/예시 이미지 - downCols사용시 머지 -->




이미지로 예를 들자면,  "머지 컬럼" 컬럼을 온전히 머지가 적용된 채로 다운로드받고 싶다면 downCols: "컬럼1|컬럼2|컬럼3|컬럼4"와 같이 설정하셔야 합니다. 


downCols: "컬럼2|컬럼3|컬럼4"와 같이 특정 컬럼을 제외하거나 downCols: "컬럼4|컬럼1|컬럼3|컬럼2"와 같이 컬럼 순서를 바꾸시면 머지가 온전히 적용되지 않습니다. 

### exHead,exFoot options
|Name|Type|Required|Description|
|----------|-----|---|----|
|Height|`number`|선택|행의 높이|
|Cells|`array[object]`|선택|행의 각셀에 표시될 내용,속성 설정|
|Cells[{Value}]|`string`|선택|셀에 표시될 내용|
|Cells[{Color}]|`string`|선택|셀의 배경색 (ex `#FFDDEE`)|
|Cells[{TextColor}]|`string`|선택|셀의 글자색 (ex `#446622`)|
|Cells[{TextSize}]|`number`|선택|셀의 글자 크기|
|Cells[{TextStyle}]|`number`|선택|셀의 글자 style 
 8, 16, 32는 설정이 불가합니다. ([참고](/docs/props/cell/text-style))|
|Cells[{Wrap}]|`boolean`|선택|자동 줄바꿈 여부
`0(false)`:자동 줄바꿈 적용 안함
`1(true)`:자동 줄바꿈 적용 (`default`)|
|Cells[{Type}]|`string`|선택|셀타입(Image를 사용해야 하는 경우에만 Img로 설정)|
|Cells[{ColSpan}]|`number`|선택|가로 병합 셀 개수(`default: 1`) (주의: 가로 병합 옵션은 시트에 걸쳐서 사용할 수는 없습니다.)|
|Cells[{RowSpan}]|`number`|선택|세로 병합 셀 개수(`default: 1`) (주의: 세로 병합 옵션은 시트에 걸쳐서 사용할 수는 없습니다.)|
|Cells[{BorderTop}]|`string`|선택|`상단 보더` 굵기,스타일,색상을 구분자 " "로 연결한 문자열  (ex: "1 solid #FF0000")|
|Cells[{BorderBottom}]|`string`|선택|`하단 보더` 굵기,스타일,색상을 구분자 " "로 연결한 문자열  (ex: "1 solid #FF0000")|
|Cells[{BorderLeft}]|`string`|선택|`좌측 보더` 굵기,스타일,색상을 구분자 " "로 연결한 문자열  (ex: "1 solid #FF0000")|
|Cells[{BorderRight}]|`string`|선택|`우측 보더` 굵기,스타일,색상을 구분자 " "로 연결한 문자열  (ex: "1 solid #FF0000")|
 
#### Cells 내에 Border 속성 설정시 주의 사항

1. 굵기는 px단위가 아니며, 1은 가늘게 2는 굵게 표시하도록 설정합니다. 

   스타일은 `solid`,`dashed`,`dotted` 세 가지 스타일을 제공합니다. 

   색상은 hex code로 설정합니다. (ex `#FF00FF`)
2. 좌우로 붙어있는 셀에 각각 우측보더와 좌측보더를 다르게 설정했을 때는 우측셀에 설정한 좌측 보더값이 적용됩니다.

   상하로 붙어있는 셀에 각각 하단보더와 상단보더를 다르게 설정했을 때는 하단셀에 설정하 상단 보더값이 적용됩니다.
3. RowSpan,ColSpan속성으로 통해 병합된 셀이라도 각 셀별로 보더 설정이 필요합니다.





### 템플릿을 적용하여 엑셀 파일 다운로드하기

`tempFile` 옵션은 미리 서버에 템플릿을 준비해둔 뒤, 해당 템플릿에 시트 데이터만 삽입해 엑셀 파일을 다운로드하고 싶으실 때 사용하는 옵션입니다.  


템플릿 기능을 사용하시려면 `Down2Excel.jsp`또는 `Down2Excel.aspx`에 미리 `TempRoot` 설정을 이용해 템플릿 파일 폴더 위치를 지정해주셔야 됩니다. 


`startRow`, `startCol` 옵션으로 템플릿 파일에서 데이터를 작성하기 시작할 위치를 지정하실 수 있으며, `sheetNo` 옵션으로 템플릿 파일에서 데이터를 작성할 워크시트를 지정하실 수 있습니다. 


더불어 `tempFile` 옵션을 이용해 엑셀 파일을 다운로드받는 경우, 디자인은 온전히 템플릿 파일에 설정된 디자인을 따라가게 되며 `excelFontSize`, `excelRowHeight`, `sheetDesign` 등 옵션은 무시됩니다. 


```js

// 5번째 행, 3번째 컬럼부터 데이터 작성 시작
sheet.down2Excel({
      fileName: "sheet.xlsx",
      tempFile: "template.xlsx",
      startRow: 4,
      startCol: 2,
})
```

```java
// 서버 사이드 설정
// 템플릿 파일이 위치한 폴더 경로 설정
down.setTempRoot("D:/");
```

[템플릿 파일 예시]

<img src="../../../assets/imgs/down2ExcelTempFile1.png" width="700" height="400"/>

[템플릿 파일을 활용해 다운로드받은 파일 결과물]

<img src="../../../assets/imgs/down2ExcelTempFile2.png" width="700" height="400"/>
 


### Return Value
***none***

### Example
```javascript
var param = {
  fileName:"홍길동 교통비 내역.xlsx",
  titleText:"||2019년 3월 교통비\r\n|||||||홍길동",
  userMerge:"0,2,1,4"
};
sheet.down2Excel(param);
```

### Read More
she
- [Down2ExcelConfig cfg](/docs/props/cfg/down-to-excel-config)
- [AutoExcelMode cfg](/docs/props/cfg/auto-excel-mode)
- [exportData method](/docs/funcs/core/export-data)
- [loadExcel method](./load-excel)
- [down2Text method](./down-to-text)
- [onBeforeExport event](/docs/events/on-before-export)
- [onExportFinish event](/docs/events/on-export-finish)


### Since

|product|version|desc|
|---|---|---|
|excel|0.0.0|기능 추가|
|excel|0.0.8|`reqHeader` 기능 추가|
|excel|1.0.19|`sheetDesign: 4` 옵션 추가|
|excel|1.0.18|`requiredMark` 기능 수정: 소문자로 사용 가능|
|excel, servermodule|1.1.0, 1.1.24|`exHead`, `exFoot` 기능 추가|
|excel, servermodule|1.1.15, 1.1.37|`freezePane` 기능 추가|
|excel, servermodule|1.1.32(excel), 2.0.15(servermodule) |`enableFilter` 기능 추가|