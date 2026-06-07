---
KEY: solid
KIND: appendix
PATH: appx/solid
ALIAS: 시트, 내에, 헤더, 주변이나, 푸터
ALIAS_EN: solid, sheet, grid, header, footer, foot
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/appx/solid
---
# Solid ***(appendix)***
> 시트 내에 헤더 주변이나 푸터 주변에 고정된 행을 생성하여 사용하 실 수 있습니다.
솔리드로 만들어진 행은 시트의 열의 개수나 너비에 영향을 받지 않고 독립적으로 구성됩니다.

![솔리드 행](/assets/imgs/solid1.gif "솔리드 사용 예")
<!-- IMAGE: 스크린샷/예시 이미지 - 솔리드 행 -->

[솔리드로 생성된 행 예]


## 설정 구문
```javascript
options.Solid = [
     {
        "id": "mySolidRow", //솔리드 행의 ID 부여
        "Space": 5, //솔리드 행의 위치 (아래에 위치 참고)
        "Height": 40, //솔리드 행의 높이 설정
        "Cells": "Today,Spacer1,DESC,BtnRed,Spacer1,BtnYellow,Spacer2,DESC2,DESC3", //커스텀 셀의 순서
        "CanFormula": 1,
        "CalcuOrder": "DESC3",

        //각 셀의 기능 정의
        "Spacer1": { // 중간 공백 셀
          Type: "Text",
          Width: 3,
          CanEdit: 0,
          CanFocus: 0
        },
        "Spacer2": { // 중간 공백 셀 정의
          Type: "Text",
          Width: 10,
          CanEdit: 0,
          CanFocus: 0
        },
        "Today": { //오늘 날짜 셀
          Type: "Text",
          CanFocus: 0,
          CanEdit: 0,
          Color: "#334477",
          TextColor: "#EEEEEE",
          Align: "Center",
          Value: "오늘일자 : " + IBSheet.dateToString(new Date(), "yyyy-MM-dd")
        },
        "DESC": { // 레이블 셀
          Type: "Text",
          CanFocus: 0,
          CanEdit: 0,
          Align: "Right",
          Width: 120,
          Value: "위험도 변경 :"
        },
        "BtnRed": { //위험 버튼 셀
          Type: "Button",
          Button: "Button",
          Name: "redBtn",
          Class: "RED",
          Value: "위험",
          Width: 40,
          OnClick: function (e) {
            if (e.row) {
              e.row.Color = "#FFAAAA";
              e.sheet.refreshRow(e.row);
            }
          }
        },
        "BtnYellow": { //주의 버튼 셀
          Type: "Button",
          Button: "Button",
          Name: "yellowBtn",
          Class: "YELLOW",
          Value: "주의",
          Width: 40,
          OnClick: function (e) {
            if (e.row) {
              e.row.Color = "#FFFFAA";
              e.sheet.refreshRow(e.row);
            }
          }
        },
        "DESC2": { // 레이블 셀
          Type: "Text",
          Value: "검수까지 남은 기한:",
          Align: "Right",
          CanFocus: 0,
          CanEdit: 0,
          Width: 120
        },
        "DESC3": { // Formula를 이용한 남은기한 계산 셀
          Type: "Text",
          Color: "#DDD",
          Formula: function (f) {
            return f.Row ? ((f.Row.DTDY31 - new Date(2018, 1, 23)) / 86400000) + " 일" : "";
          },
          Width: 120
        }
      }
];
```

## 위치
솔리드 행은 Space 속성 값에 따라 다음과 같이 위치할 수 있습니다.
|위치|Space값|생성예|
|---|---|---|
|시트 밖 상단|-1|!["시트밖상단"](/assets/imgs/solid-1.png "시트밖상단")
<!-- IMAGE: 시트/테이블 화면 - "시트밖상단" -->|
|시트 안 헤더 위|0|!["시트안헤더위"](/assets/imgs/solid0.png "시트안헤더위")
<!-- IMAGE: 시트/테이블 화면 - "시트안헤더위" -->|
|시트 안 헤더 아래|1|!["시트안헤더아래"](/assets/imgs/solid1.png "시트안헤더아래")
<!-- IMAGE: 시트/테이블 화면 - "시트안헤더아래" -->|
|시트 안 푸터 위|2|!["시트안풋위"](/assets/imgs/solid2.png "시트안풋위")
<!-- IMAGE: 시트/테이블 화면 - "시트안풋위" -->|
|시트 안 푸터 아래|3|!["시트안풋아래"](/assets/imgs/solid3.png "시트안풋아래")
<!-- IMAGE: 시트/테이블 화면 - "시트안풋아래" -->|
|시트 안 가로스크롤바 아래|4|!["시트 안 가로스크롤바 아래"](/assets/imgs/solid4.png "시트 안 가로스크롤바 아래")
<!-- IMAGE: 시트/테이블 화면 - "시트 안 가로스크롤바 아래" -->|
|시트 밖 하단|5|!["시트밖하단"](/assets/imgs/solid5.png "시트밖하단")
<!-- IMAGE: 시트/테이블 화면 - "시트밖하단" -->|


---

## 솔리드를 이용한 예약된 기능
솔리드 행을 이용하여 **그룹행**이나 **찾기행**을 만들어 사용하실 수 있습니다.

1. 그룹행 사용하기

다음과 같은 구성을 통해 그룹행을 생성하실 수 있습니다. 

그룹행 생성시 열의 헤더셀을 드래그하여 그룹행 위로 드롭하면 해당 열을 기준으로 한 그룹핑이 이루어 집니다.
   ```javascript
options.Solid = [
    {
        "id":"myGroupRow",      //솔리드 행의 ID 부여
        "Space":0,              //솔리드 행의 위치
        "Kind":"Group"          //솔리드 행의 종류
    }
];
   ```
![그룹행사용](/assets/imgs/group.png "그룹행 생성")
<!-- IMAGE: 스크린샷/예시 이미지 - 그룹행사용 -->




2. 찾기(Search)행 사용하기

찾기 행을 통해 시트 내에 원하는 데이터를 선택하거나 표시할 수 있습니다.
   ```javascript
options.Solid = [
    {
        "Kind": "Search",           // 솔리드 행의 종류
        "Space": 1,                 // 솔리드 행의 위치
        "id": "searchZone",         // 솔리드 행의 ID 부여

        Cells: "Expression,Spacer1,Filter,Select,Mark,Find,Clear,Spacer2", // 솔리드 행 내에 Cell 생성.
                //Expression, Filter, Select, Mark, Find, FindPrev, Clear는 내장 설정 예약어

        Expression: { // 검색하기 위한 expression 설정
            Action: "Last", // expression 셀 내용이 변경되었을때 취할 동작에 대한 설정
                            //Filter,Select,Mark,Find,FindPrev,Last 를 설정할 수 있음(Last는 이전 행동을 계속함.)
            Left: "5", // 셀 좌측에 지정한 px 만큼의 빈 공간 생성
            MinWidth: "90", // 최소 너비 px 단위
            // MaxWidth: "300",
            EmptyValue: "<s>검색어를 입력해 주세요</s>"  // input의 placeholder 속성과 동일한 기능
        },
        Spacer1: {   // 중간 공백 셀 정의
            Width: "10",
            Type: "Empty",
            CanFocus:0
        },
        Spacer2: {
            Width: "10",
            Type: "Empty",
            CanFocus:0
        },
        Filter: {   //필터 기능 버튼 (Expression 셀에 입력한 글자를 바탕으로 전체 열에 대해 필터링 실시)
            ButtonText: "필터"
        },
        Select: {   //선택 기능 버튼 (Expression 셀에 입력한 글자를 바탕으로 행단위로 선택)
            ButtonText: "선택"
        },
        Mark: {     //표시 기능 버튼 (Expression 셀에 입력한 글자를 포함하고 있는 행에 배경색을 변경)
            ButtonText: "마킹"
        },
        Find: {     //찾기 기능 버튼 (Expression 셀에 입력한 글자를 포함하고 있는 셀을 찾음. 아래로 계속 찾기 가능)
            ButtonText: "찾기"
        },
        Clear: {    //클리어 기능 버튼 (위에서 한 행위(필터,선택,마킹등을 원상복귀))
            ButtonText: "클리어",
            Width: "50"
        }
    }
];

   ```
![찾기행사용](/assets/imgs/searchRow2.png "찾기행 생성")
<!-- IMAGE: 스크린샷/예시 이미지 - 찾기행사용 -->




### Read More
[Kind appendix](./kind)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
