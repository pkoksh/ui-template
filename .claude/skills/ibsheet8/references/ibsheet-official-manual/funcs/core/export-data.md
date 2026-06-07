---
KEY: exportData
KIND: method
PATH: funcs/core/export-data
ALIAS: sheet.exportData, exportData(), 시트의, 내용을, 엑셀, 파일로, 다운로드
ALIAS_EN: export, data, excel, xlsx
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/export-data
---
# exportData ***(method)***

> 시트의 내용을 엑셀 파일로 다운로드 합니다. 

> 해당 함수를 사용하시려면 `jszip` 라이브러리가 반드시 필요합니다. 

> 기본적으로 `jszip` 라이브러리가 있는 경우, 그것을 그대로 사용하게 되고 `jszip` 라이브러리가 없는 경우, `plugins/jszip.min.js` 라이브러리를 가져와 사용합니다.

> [down2Excel](/docs/funcs/excel/down-to-excel) 과 동일한 기능(서버에서 처리하는 기능을 제외하고)을 제공합니다. (`xlsx 기준`) 

> 지원 하는 파일 형식은 **xlsx, txt, csv** 입니다.
> 

> 해당 함수는 [down2Text](/docs/funcs/excel/down-to-text) 에서 사용되는 기능 또한 제공됩니다. (`colDelim, rowDelim, downSum`) 


### Syntax
```javascript
void exportData( param );
```

### Parameters

|Name|Type|Required|Description|
|----------|-----|---|----|
|fileName|`string`|선택|생성할 엑셀파일 명 (`default: Excel.xlsx`) 
**이 속성에서 파일명과 함께 확장자를 xlsx, txt, csv로 붙이느냐에 따라서 생성 파일이 xlsx형식, (txt, csv)형식으로 만들어집니다.**
해당 속성 사용시에는 확장자를 입력해야 적용된 파일이 다운로드 됩니다.|
|sheetName|`string`|선택|만들어지는 엑셀 파일의 WorkSheet에 부여할 이름 `(xlsx에서만 지원)`|
|downRows|`string`|선택|지정한 행만 다운로드 합니다.
 별도의 설정이 없을시 모든 행이 다운로드 됩니다.
 보여지는 행만 다운로드하고 싶을 경우 `"Visible"`로 설정하면 됩니다.
 (ex: "1\|3\|4\|5\|9" 식의 문자열) 
 `downRows`를 사용하면 머지 기능이 동작하지 않습니다.|
|downCols|`string`|선택|지정한 열만 다운로드 합니다.
 별도의 설정이 없을시 모든 열이 다운로드 됩니다.
 보여지는 열만 다운로드하고 싶을 경우 `"Visible"`로 설정하면 됩니다.
(ex: "Price\|AMT\|TOTAL" 식의 문자열)|
|downTreeHide|`boolean`|선택|tree를 사용하는 경우, 접혀진 행도 엑셀에 다운로드 할지 여부를 설정합니다.
`1(true)`로 설정시 접혀있는 자식노드도 모두 다운로드 됩니다.(`default: 0(false)`)|
|downHeader|`boolean`|선택|헤더행을 다운로드 할지 여부를 설정합니다.(`default: 1(true)`)|
|sheetDesign|`number`|선택|시트의 디자인 요소를 엑셀에도 반영할지 여부를 설정합니다. 
 반영되는 디자인 요소는 다음과 같습니다: 헤더의 배경색,폰트명,폰트크기,데이터 배경색 
 `0`: 셀 외곽선을 제외한 모든 디자인을 적용하지 않습니다.
 `1`: 셀 외곽선을 포함해 모든 디자인을 적용합니다. (default) 
 `2`: 셀 외곽선을 제외한 셀 스타일을 적용합니다. 
 `3`: 셀 외곽선 및 스타일을 모두 적용하지 않습니다.`(xlsx에서만 지원)` 
  `4`: 헤더행에만 모든 디자인을 적용합니다. 
|titleText|`string`|선택|엑셀 문서의 상단에 원하는 문자를 추가합니다.
 문자는 열구분자("\|")와 행구분자(`"\r\n"`)을 통해서 작성하실수 있습니다.
가령 "A\|B\|C\r\nD\|E\|F" 와 같이 입력한 경우 첫 행에 3개의 셀에 각각 A, B, C 값이 들어가고 두번째 행의 3개의 셀에 각각 D, E, F 값이 입력됩니다. 값 안에서 엔터를 포함하려면 `"\r"` 이나 `"\n"` 을 삽입하면 됩니다. `"\r\n"` 이 10개가 포함되면 11줄을 차지하게 되고 12번째 행부터 시트 내용이 출력됩니다. `(xlsx에서만 지원)`|
|userMerge|`string`|선택|`titleText`와 같이 사용하며, titleText를 원하는 모양으로 머지합니다.
 입력방법은 4개의 숫자로 `"머지시작셀 row index, 머지시작셀 col index, 아래로 병합할 행 개수(1을 설정하면 병합 없음), 우측으로 병합할 개수"` 로 이루어 집니다. 
(여러개 병합시에는 띄어쓰기로 구분)
가령 `"2,2,1,6 3,2,3,3"`위와 같이 설정하였다면 2,2 셀부터 오른쪽으로 6칸이 병합되고, 3,2 셀부터 아래로 3칸, 오른쪽으로 3칸이 병합 됩니다. `(xlsx에서만 지원)`
![userMerge](/assets/imgs/userMerge.png)
<!-- IMAGE: 스크린샷/예시 이미지 - userMerge -->|
|excelRowHeight|`number`|선택|엑셀 문서의 행 높이를 설정합니다. -1 설정시 셀의 내용물 크기에 맞춰 엑셀 문서의 행 높이가 조절됩니다. `(xlsx에서만 지원)`|
|excelHeaderRowHeight|`number`|선택|엑셀의 헤더행의 높이를 설정합니다. `(xlsx에서만 지원)`|
|wordWrap|`boolean`|선택|엑셀 문서의 "텍스트 줄바꿈" 여부를 설정합니다.(`default: 1(true)`) `(xlsx에서만 지원)`|
|comboValidation|`boolean`|선택|Enum 타입으로 만들어진 열에 대해 엑셀에서도 데이터 기능을 통해 드롭다운리스트 형태로 표현합니다. `(xlsx에서만 지원)`|
|rowDelim|`string`|선택|text파일을 만들때 행 구분자(기본은 줄넘김 문자 `"\r\n"`) `(txt, csv)에서만 지원`
|colDelim|`string`|선택|txt 다운로드 일 경우(`default: \t(탭문자)`, csv 다운로드 일 경우(`default: ,(콤마)` 업로드되는 파일에 따라 기본 구분자가 변경됩니다. `(txt, csv)에서만 지원`
|hiddenColumn|`boolean`|선택|숨은 컬럼들을 엑셀로 다운로드 받은 경우, 해당 컬럼이 눈에 보이지는 않지만 엑셀 메뉴중 "숨기기 취소"를 선택한 경우 해당 컬럼이 다시 보일 수 있도록 엑셀 문서에 다운로드 받는다.
 `hiddenColumn:1` 은 `downCols`와 **절대 같이 사용하시면 안됩니다.**
`0(false)`: 엑셀 다운로드 시 감춰진 열도 Visible:1 컬럼과 동일하게 일반 컬럼처럼 표현됨 (`default`)
`1(true)`:감춰진 열 다운로드 시 "열 숨기기" 형태로 엑셀 다운로드|
|merge|`number`|선택|시트의 머지 상태를 엑셀에 그대로 반영할지를 설정합니다.
 `0`: 사용 안 함 (`default`)
 `1`: 사용함 (셀 병합 시, 부속 셀의 값을 원본으로 유지함)
 `2`: 사용함 (셀 병합 시, 부속 셀의 값을 비움) `(xlsx에서만 지원)`|
|textToGeneral|`boolean`|선택|Type:`Text`의 엑셀 서식 형식
`0(false)`: Type:`Text`의 엑셀 서식을 텍스트 서식으로 지정 
`1(true)`: Type:`Text`의 엑셀 서식을 일반 서식으로 지정(`default`)|
|allTypeToText|`boolean`|선택|시트의 `Int`, `Float` 타입을 제외한 모든 컬럼의 엑셀 서식을 `Text` 타입으로 받고자 하는 경우 설정합니다.(`default: 0(false)`) `(xlsx에서만 지원)`|
|checkBoxOnValue|`string`|선택|체크박스와 라디오 박스에서 체크를 한 경우 `1`값 대신 지정한 값을 사용합니다. `(xlsx에서만 지원)`|
|checkBoxOffValue|`string`|선택|체크박스와 라디오 박스에서 체크 해제를 한 경우 `0`값 대신 지정한 값을 사용합니다. `(xlsx에서만 지원)`|
|downSum|`boolean`|선택|합계 행 다운로드 여부를 설정합니다.(`default: 1(true)`)|
|excelFontSize|`number`|선택|엑셀의 폰트 크기를 설정합니다. `(xlsx에서만 지원)`|
|excludeFooterRow|`boolean`|선택|푸터 행 제외 여부를 설정합니다.(`default: 0(false)`) `(xlsx에서만 지원)`|
|numberTypeToText|`boolean`|선택|`Int`, `Float` 타입의 컬럼을 `Text` 타입으로 다운로드 받을지 여부를 설정합니다.(`default: 0(false)`) `(xlsx에서만 지원)`|
|excelFontFamily|`string`|선택|엑셀의 폰트를 설정합니다. `(xlsx에서만 지원)`|
|exHead|`array[object]`|선택|시트 상단에 표시하고 싶은 내용을 설정합니다.
**titleText 속성과 같이 사용할 수 없으며, 같이 사용시 titleText속성은 무시됩니다.**`(xlsx에서만 지원)`|
|exFoot|`array[object]`|선택|시트 하단에 표시하고 싶은 내용을 설정합니다.`(xlsx에서만 지원)`
|appendPrevSheet|`boolean`|선택|[exportDataBuffer](./export-data-buffer) 메소드를 사용하여 2개 이상의 시트를 엑셀로 다운로드 할 때 마지막으로 작성한 워크시트에 해당 옵션이 적용된 시트를 덧붙일지 여부를 설정합니다. 
 `0(false)`: 워크시트를 새로 생성하여 작성합니다.(`default`) 
 `1(true)`: 마지막으로 작성한 워크시트에 시트를 덧붙입니다. `(xlsx에서만 지원)`|
|onlyHeaderMerge|`boolean`|선택|`1(true)`로 설정 시, 시트의 데이터 영역의 머지를 강제로 제한하고 헤더 영역의 머지만을 엑셀에 반영합니다.(`default: 0(false)`)|
|freezePane|`number`|선택|상단 행과 왼쪽 열을 틀 고정하여 다운로드하는 옵션입니다. 옵션 설정에 따라 다르게 틀 고정이 적용되어 다운로드되며, 비트 연산으로 동작합니다. 
 
 `0`: 틀 고정을 적용하지 않음(`default`) 
 `1`: 헤더 틀 고정 적용 (`2`과 함께 적용시 헤드 영역 틀 고정으로 동작) 
 `2`: 헤드 영역 틀 고정 적용 
 `4`: 왼쪽 고정 열 틀 고정 적용|
|numberFormatMode|`number`|선택|실수 형태의 데이터 타입에 대한 셀 서식 설정 방식을 설정합니다.
`0`:시트의 컬럼 포맷을 따릅니다. (`default`)
`1`:셀의 값 기준에 따라 정수 또는 실수 형태로 셀 서식을 설정합니다.
`2`:일반 서식으로 설정합니다.|

<!--!
|`[비공개]` directExcelData|`object`|선택|시트의 데이터가 아닌 별도의 데이터를 이용하여 엑셀을 다운로드 하는 기능 (xlsx에서만 지원)|
|`[비공개]` excelPage|`object`|선택|엑셀 용지에 대한 동작을 설정합니다 (xlsx에서만 지원)|
|`[비공개]` downCombo|`string`|선택|`Enum` 타입의 선택 항목을 `Enum` 속성과 `EnumKeys` 속성 어떤 형태로 다운로드를 받을 지 설정합니다.
 `TEXT`: `Enum` 속성을 사용하여 다운로드 합니다. (`default`)
 `CODE`: `EnumKeys` 속성을 사용하여 다운로드합니다.|
|`[비공개]` requiredMark|`string`|선택|필수 입력 항목 마크(`*`)를 다운로드 받을지 여부를 설정합니다.(`default: 1(true)`)|
!-->

<!--!
### `[비공개]` excelPage Options

|Name|Type|Required|Description|
|----------|-----|---|----|
|paperSize|`string`|선택|용지 크기를 설정합니다. 설정하지 않을 경우 기본 `A4`로 다운로드 됩니다. (`default: "A4"`)|
|orientation|`string`|선택|용지 방향을 설정합니다.
세로: "portrait", 가로: "landscape" (`default: "portrait"`)|
|marginLeft|`number`|선택|용지 왼쪽의 여백을 설정합니다. (`default: 1.8`)|
|marginRight|`number`|선택|용지 오른쪽의 여백을 설정합니다. (`default: 1.8`)|
|marginTop|`number`|선택|용지 위쪽의 여백을 설정합니다. (`default: 1.9`)|
|marginBottom|`number`|선택|용지 아래쪽의 여백을 설정합니다. (`default: 1.9`)|
|marginHeader|`number`|선택|용지 머리글의 여백을 설정합니다. (`default: 0.8`)|
|marginFooter|`number`|선택|용지 바닥글의 여백을 설정합니다. (`default: 0.8`)|
|fitToWidth|`number`|선택|페이지 레이아웃의 너비를 설정합니다. (`default: 0`)|
|fitToHeight|`number`|선택|페이지 레이아웃의 높이를 설정합니다. (`default: 0`)|
!-->
### exHead,exFoot options
|Name|Type|Required|Description|
|----------|-----|---|----|
|Height|`number`|선택|행의 높이|
|Cells|`array[object]`|선택|행의 각셀에 표시될 내용,속성 설정|
|Cells[{Value}]|`string`|선택|셀에 표시될 내용|
|Cells[{Color}]|`string`|선택|셀의 배경색 (ex `#FFDDEE`)|
|Cells[{TextColor}]|`string`|선택|셀의 글자색 (ex `#446622`)|
|Cells[{TextSize}]|`number`|선택|셀의 글자 크기|
|Cells[{TextStyle}]|`number`|선택|셀의 글자 style ([참고](/docs/props/cell/text-style))|
|Cells[{TextFont}]|`string`|선택|셀의 글자 family ([참고](/docs/props/cell/text-font))|
|Cells[{Wrap}]|`boolean`|선택|자동 줄바꿈 여부(default: true)|
|Cells[{Type}]|`string`|선택|셀타입(Image를 사용해야 하는 경우에만 Img로 설정)|
|Cells[{ColSpan}]|`number`|선택|가로 병합 셀 개수(default: 1)|
|Cells[{RowSpan}]|`number`|선택|세로 병합 셀 개수(default: 1)|
|Cells[{BorderTop}]|`string`|선택|`상단 보더` 굵기,스타일,색상을 구분자 " "로 연결한 문자열  (ex: "1 solid #FF0000")|
|Cells[{BorderBottom}]|`string`|선택|`하단 보더` 굵기,스타일,색상을 구분자 " "로 연결한 문자열  (ex: "1 solid #FF0000")|
|Cells[{BorderLeft}]|`string`|선택|`좌측 보더` 굵기,스타일,색상을 구분자 " "로 연결한 문자열  (ex: "1 solid #FF0000")|
|Cells[{BorderRight}]|`string`|선택|`우측 보더` 굵기,스타일,색상을 구분자 " "로 연결한 문자열  (ex: "1 solid #FF0000")|

#### Cells 내에 Border 속성 설정시 주의 사항

1. 굵기는 px단위가 아닌 1은 가늘게 2는 굵게 표시

   스타일은 `solid`,`dashed`,`dotted` 제공 

   색상은 hex code로 설정 (ex `#FF00FF`)
2. 좌우로 붙어있는 셀에 각각 우측보더와 좌측보더를 다르게 설정시 우측셀에 설정한 좌측 보더값이 적용됨

   상하로 붙어있는 셀에 각각 하단보더와 상단보더를 다르게 설정시 하단셀에 설정하 상단 보더값이 적용됨
3. RowSpan,ColSpan속성으로 통해 병합 된 셀이라도 각 셀별로 보더 설정이 필요함



### Return Value
***none***

### Example
```javascript
// xlsx 확장자로 다운로드, 보여지는 행만 다운로드.
sheet.exportData({fileName: "재고리스트.xlsx",downRows: "Visible"});

// txt 확장자로 다운로드, 열 구분자 ',' 로 변경.
var param = {fileName: "exportTEXT.txt", colDelim: ","};
sheet.exportData(param);

// csv 확장자로 다운로드, 합계행 다운받지 않음.
var param = {fileName: "exportCSV.csv", downSum: 0}
sheet.exportData(param);
```

<!--!
### [`비공개`] Example
```js
// 임의의 데이터
var tmpData = [
  {
    SEQ: 1,
    TextData: '박만우',
    ComboData: '02',
    ISO: 'AWG',
    Currency: '아루바 플로린',
    IntData: 1120,
    FloatData: 115.25,
    DateData: '20100922',
    PhoneNo: '0425741245',
    LinesData: '서해상에 위치한 고기압의 영향을 받겠습니다.',
    Userformat: '',
    ImageData: '|../assets/imgs/fe.jpg|||||',
    PassData: '75646',
    RadioData: 'M:1',
    CheckData: 0
  },
  {
    SEQ: 3,
    TextData: '최호건',
    ComboData: '01',
    ISO: 'GBP',
    Currency: '영국 파운드',
    IntData: 65,
    FloatData: 154.36,
    DateData: '',
    PhoneNo: '',
    LinesData: '',
    Userformat: '',
    ImageData: '|../assets/imgs/ch.jpg|||||',
    PassData: '4564',
    RadioData: 'H:1',
    CheckData: 0
  }
];

// 임의의 데이터를 이용한 엑셀 다운로드
sheet.exportData({ directExcelData: tmpData });
```
!-->

```javascript
//exHead 사용 예제
var param = {
          sheetDesign: 1,
          merge: 1,
          fileName: '22년도_근무외수당.xlsx'
        };

        param["exHead"] = [
          { // 첫번째 행
            Height: 30,
            Cells:[
              {
                // 첫번째 셀에 이미지 설정
                Type:"Img",
                Value:"|/assets/imgs/logo.png|78|28"
              },
              {},{},{},{},{},{},{}, //7칸 빈셀
              {
                Type:"Text",
                Value:"(취급주의)대외비",
                TextColor:"#FF0000",
                Wrap: 0,
                TextSize: 14
              }
            ]
          }, 
          { // 두번째 행
            Height: 40,
            Cells:[
              {}, //첫칸 빈셀
              {
                Type:"Text",
                Align: "Center",
                Value: "2022년 근무 외 수당 청구 내역",
                Color:"#DEDEDE",
                TextSize: 45,
                TextStyle: 1,
                BorderTop:"2 dashed #0000FF",
                BorderBottom:"2 dashed #0000FF",
                BorderLeft:"2 dashed #0000FF",
                ColSpan: 8
              },
              {
                BorderTop:"2 dashed #0000FF",
                BorderBottom:"2 dashed #0000FF"
              },
              {
                BorderTop:"2 dashed #0000FF",
                BorderBottom:"2 dashed #0000FF"
              },
              {
                BorderTop:"2 dashed #0000FF",
                BorderBottom:"2 dashed #0000FF"
              },
              {
                BorderTop:"2 dashed #0000FF",
                BorderBottom:"2 dashed #0000FF"
              },
              {
                BorderTop:"2 dashed #0000FF",
                BorderBottom:"2 dashed #0000FF"
              },
              {
                BorderTop:"2 dashed #0000FF",
                BorderBottom:"2 dashed #0000FF"
              },
              {
                BorderTop:"2 dashed #0000FF",
                BorderBottom:"2 dashed #0000FF",
                BorderRight:"2 dashed #0000FF"
              }
            ]
          },
          {}, // 3번째 행 (빈행)
          {// 4번째 행
            Cells:[
              {
                Value:"부서",
                Align:"Right",
                Color:"#DEDEDE",
                BorderTop:"1 solid #222222",
                BorderRight:"1 solid #222222",
                BorderBottom:"1 solid #222222",
                BorderLeft:"1 solid #222222",
              },{
                ColSpan: 3,
                Value:"총무부",
                Align:"Left",
                BorderTop:"1 solid #222222",
                BorderRight:"1 solid #222222",
                BorderBottom:"1 solid #222222",
                BorderLeft:"1 solid #222222",
              },
              {
                BorderTop:"1 solid #222222",
                BorderBottom:"1 solid #222222"
              },
              {
                BorderTop:"1 solid #222222",
                BorderBottom:"1 solid #222222",
                BorderRight:"1 solid #222222"
              }
            ]
          },
          {// 5번째 행
            Cells:[
              {
                Value:"기간",
                Align:"Right",
                Color:"#DEDEDE",
                BorderTop:"1 solid #222222",
                BorderRight:"1 solid #222222",
                BorderBottom:"1 solid #222222",
                BorderLeft:"1 solid #222222",
              },
              {
                ColSpan: 3,
                Value:"2022/01/01 ~ 2022/12/31",
                Align:"Left",
                BorderTop:"1 solid #222222",
                BorderBottom:"1 solid #222222",
                BorderLeft:"1 solid #222222",
              },
              {
                BorderTop:"1 solid #222222",
                BorderBottom:"1 solid #222222"
              },
              {
                BorderTop:"1 solid #222222",
                BorderBottom:"1 solid #222222",
                BorderRight:"1 solid #222222"
              }
            ]
          }
        ];
        param["exFoot"] = [
          {}, //첫번째 행 (빈행)
          { 
            Height:30,
            Cells:[
              {
                Value: "출력: 2023-06-23 홍길동",
                Align: "Left",
                Wrap: 0
              }
            ]
          }
        ];


        sheet.exportData(param);

```
![exHead,exFoot](/assets/imgs/exportDataExHeadExFoot.png "exHead,exFoot")
<!-- IMAGE: 스크린샷/예시 이미지 - exHead,exFoot -->


### `downCols, downRows` 사용시 `merge` 적용 정리

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

### 템플릿 파일을 활용한 엑셀 파일 다운로드 

`tempFile` 옵션은 미리 서버에 템플릿을 준비해둔 뒤, 해당 템플릿에 시트 데이터만 삽입해 엑셀 파일을 다운로드하고 싶으실 때 사용하는 옵션입니다.  

템플릿 기능을 사용하시려면 `Down2Excel.jsp`또는 `Down2Excel.aspx`에 미리 `TempRoot` 설정을 이용해 템플릿 파일 폴더 위치를 지정해주셔야 됩니다. 

`startRow`, `startCol` 옵션으로 템플릿 파일에서 데이터를 작성하기 시작할 위치를 지정하실 수 있으며, `sheetNo` 옵션으로 템플릿 파일에서 데이터를 작성할 워크시트를 지정하실 수 있습니다. 

더불어 `tempFile` 옵션을 이용해 엑셀 파일을 다운로드받는 경우, 디자인은 온전히 템플릿 파일에 설정된 디자인을 따라가게 되며 `excelFontSize`, `excelRowHeight`, `sheetDesign` 등 옵션은 무시됩니다.


### Read More

- [importData method](./import-data)
- [AutoExcelMode cfg](/docs/props/cfg/auto-excel-mode)
- [LevelMark cfg](/docs/props/cfg/level-mark)
- [down2Excel method](/docs/funcs/excel/down-to-excel)
- [down2Text method](/docs/funcs/excel/down-to-text)
- [onBeforeExport event](/docs/events/on-before-export)
- [onExportFinish event](/docs/events/on-export-finish)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|core|8.0.0.6|`fileName`, `sheetName`, `downRows`, `downCols`, `downRows`, `downTreeHide`, `downHeader`, `sheetDesign`, `titleText`, `userMerge`, `excelRowHeight`, `excelHeaderRowHeight`, `wordWrap`, `comboValidation`, `rowDelim`, `colDelim`, `downSum` 기능 추가|
|core|8.0.0.20|파일 형식 내용 추가|
|core|8.0.0.21|`merge`, `allTypeToText`, `checkBoxOnValue`, `checkBoxOffValue`, `excelFontSize`, `excludeFooterRow`, `numberTypeToText` (xlsx 에서만 지원)|
|core|8.0.0.29|`excelFontFamily` 기능 추가 (xlsx 에서만 지원)|
|core|8.1.0.30|`exHead`,`exFoot` 기능 추가 (xlsx 에서만 지원)|
|core|8.1.0.39|`excelRowHeight : -1` 설정 추가|
|core|8.1.0.41|`sheetDesign : 4` 설정 추가|
|core|8.1.0.83|`appendPrevSheet` 설정 추가 (exportDataBuffer 사용시에만 사용 가능)|
|core|8.2.0.5|`onlyHeaderMerge` 설정 추가|
|core|8.2.0.11|`hiddenColumn` 설정 추가|
|core|8.2.0.25|`freezePane` 설정 추가|
|core|8.3.0.16|`numberFormatMode` 설정 추가|
<!--!
|`[비공개]` core|8.0.0.22|`downCombo` 기능 추가|
|`[비공개]` core|8.1.0.4|`excelPage.paperSize`, `excelPage.orientation`, `excelPage.marginLeft`, `excelPage.marginRight`, `excelPage.marginTop`, `excelPage.marginBottom`, `excelPage.marginHeader`, `excelPage.marginFooter` 기능 추가|
|`[비공개]` core|8.1.0.6|`directExcelData` 기능 추가|
|`[비공개]` core|8.1.0.40|`requiredMark` 기능 추가|
|`[비공개]` core|8.1.0.73|`excelPage.fitToWidth`, `excelPage.fitToHeight` 기능 추가|
!-->
