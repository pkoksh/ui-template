---
KEY: row
KIND: guide
PATH: start/row
ALIAS: 행, 구조에, 대한, 이해, 가로로
ALIAS_EN: row
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/start/row
---
# 행(Row) 구조에 대한 이해

> `ibsheet`를 가로로 나누어보면 크게 `헤더`와 `바디`, `푸터`로 나누어 집니다.

> 헤더는 데이터 영역 상단에 고정되어 보여지는 부분으로 헤더행과 필터 등이 헤더 영역에 속합니다.

> 바디는 스크롤에 의해 보여지는 데이터 영역이고, 푸터는 합계행과 같이 바디 영역 하단에서 스크롤 여부와 상관없이 항상 보여지는 부분을 의미합니다.

---
## 헤더 영역

### *헤더행*
시트 생성시 `options.Cols.Header`를 통해 설정한 값들이 헤더에 들어가게 됩니다.

헤더 셀은 클릭시 소팅이 되거나 드래그를 통해 열의 위치이동, 컬럼의 사이즈 조절 등의 역할을 수행합니다.

```javascript
var options = {
    "Cols": [
        {
            Header: [
                {    // 열의 헤더 설정 개별 셀 설정
                    "Value": "부서정보",
                    "Color": "#085820",
                    "Span": 2
                }, "부서명"
            ],
            "Name": "deptName", "Type": "Text", "Size": 100
        }, {
            Header: ["", "부서코드"],
            "Name": "deptCd", "Type": "Text", "Width": 100
        }, {
            Header: [
                {
                    "Value": "2014 년 실적",
                    "Color": "#6699FF",
                    "Span": 4
                }, "1분기"
            ],
            "Name": "qt1", "Type": "Int", "Width": 100
        }, {
            Header: ["", "2분기"],
            "Name": "qt2", "Type": "Int", "Width": 100
        }, {
            Header: ["", "3분기"],
            "Name": "qt3", "Type": "Int", "Width": 100
        }, {
            Header: ["", "4분기"],
            "Name": "qt4", "Type": "Int", "Width": 100
        }
    ]
};
```
![해더행](/assets/imgs/header1.png "헤더행")
<!-- IMAGE: 스크린샷/예시 이미지 - 해더행 -->

[생성된 헤더행]

### *필터행*
(`cfg`) [ShowFilter](/docs/props/cfg/show-filter)나 sheet.[showFilterRow()](/docs/funcs/core/show-filter-row)함수를 통해 생성되는 필터행도 헤더부에 위치하게 됩니다.
```javascript
sheet.showFilterRow();
```
![필터행](/assets/imgs/header2.png "필터행")
<!-- IMAGE: 스크린샷/예시 이미지 - 필터행 -->

[필터행]

### *커스텀 행(Head)*
헤더행 아래(필터행이 있으면 필터행 아래)에 세로 스크롤 여부와 상관없이 항상 보여지는 행을 원하는 개수만큼 만드실 수 있습니다.

커스텀 헤더행은 `options.Head` 속성을 통해 설정합니다.

`컬럼Name : {"Type":"Text", "Value":"Test"}` 와 같이 커스텀 헤더행의 컬럼 속성을 부여하고 생성할 수 있습니다.
```javascript
options = {
    Head: [
        {
            "id": "myHeadRow1",          // 커스텀 헤더행 Row 객체의 ID를 의미합니다. Def 에 id 로 선언하여 
                                         // 커스텀 헤더행의 속성을 공통으로 사용할 수 있습니다.
            "Spanned": 1,                 // 커스텀 헤더행 Span 병합 가능 설정
            "deptName": {
                "Type": "Text", "Value": "미수금 포함 여부",
                "Span": 2, "Color": "#EDEDED", "Align": "center", "TextStyle": 1
            }, // 커스텀 헤더행에서 deptName 컬럼의 Type, Value, Span, Color, Align, TextStyle 속성을 설정합니다.
            "qt1": {"Type": "Bool"},
            "qt2": {"Type": "Bool"},
            "qt3": {"Type": "Bool"},
            "qt4": {"Type": "Bool"}
        }
    ]
}
```
아래의 이미지는 위의 설정을 통해 생성되는 커스텀행(Head) 예시 이미지 입니다.

![커스텀해더행](/assets/imgs/header3.png "커스텀헤더행")
<!-- IMAGE: 스크린샷/예시 이미지 - 커스텀해더행 -->

[커스텀헤더행]

---
## 바디 영역
바디는 [doSearch()](/docs/funcs/core/do-search), [loadSearchData()](/docs/funcs/core/load-search-data)함수를 통해서 조회 된 데이터나 [addRow()](/docs/funcs/core/add-row)함수를 통해 추가된 데이터가 보여지는 영역입니다.

![바디 영역](/assets/imgs/body.png "바디 영역")
<!-- IMAGE: 스크린샷/예시 이미지 - 바디 영역 -->

[**바디 영역**]

---
## 푸터 영역
### *합계 행*
열 생성시 (`col`) [FormulaRow](/docs/props/col/formula-row) 속성을 설정하면 시트 하단에 고정된 합계행이 만들어져 합계값을 보여 줍니다.

합계행의 위치는 상단으로 올릴 수 도 있으나 기본적으로 생성되는 합계행은 푸터 영역에 위치하게 됩니다.
```javascript
var options = {
    "Cols": [
        ...
       }, {
            "Header": [
                {
                    "Value": "2014 년 실적",
                    "Color": "#6699FF",
                    "Span": 4
                }, "1분기"
            ],
            "Name": "qt1", "Type": "Int", "Width": 100, FormulaRow: "Sum"
        }, {
            "Header": ["", "2분기"],
            "Name": "qt2", "Type": "Int", "Width": 100, FormulaRow: "Avg"
        }, {
        ...
    ]
}
```
![합계행](/assets/imgs/formulaRow.png "합계행")
<!-- IMAGE: 스크린샷/예시 이미지 - 합계행 -->

[합계행]

### *커스텀 행(Foot)*
헤더 영역과 마찬가지로 푸터 영역에도 커스텀행을 추가할 수 있습니다.

커스텀 푸터행은 `options.Foot` 속성을 통해 설정합니다.

`컬럼Name : {"Type":"Text", "Value":"Test"}` 와 같이 커스텀 푸터행의 컬럼 속성을 부여하고 생성할 수 있습니다.
```javascript
options = {
    Foot: [ //커스텀행(Foot) 영역 설정
        {
            "id": "MyFootRow1", // 커스텀 푸터행 Row 객체의 ID를 의미합니다. Def 에 id 로 선언하여 
                                // 커스텀 푸터행의 속성을 공통으로 사용할 수 있습니다.
            "Spanned" 1,        // 커스텀 푸터행의 Span 병합 가능 설정
            "Color": "#666666",
            "TextColor": "#FFFFFF",
            "deptName": {"Value": "2015년 자료", "TextColor": "#FFBBBB", "Span": 5},
            // 커스텀 푸터행에서 deptName 컬럼의 Value, TextColor, Span 속성을 설정합니다.
            "qt4": {"Type": "Int", "Format": "#,###", "Value": 1248423}
        }
    ]
}
```
아래의 이미지는 위의 설정을 통해 생성되는 커스텀행(Foot) 예시 이미지 입니다.

![푸터행](/assets/imgs/foot.png "푸터행")
<!-- IMAGE: 스크린샷/예시 이미지 - 푸터행 -->

[푸터행]

---

## 기타

### *솔리드 행*
헤더나 푸터 영역 주변에 임의의 행을 추가할 수 있습니다.

이렇게 추가된 행은 시트 내 열과 무관하게 기능과 크기를 갖을 수 있습니다.

보다 자세한 내용은 (appendix) [Soild](/docs/appx/solid)을 참고하세요.




### *행의 ID*
모든 행은 고유한 `ID`를 갖고 있습니다.

데이터 행은 순서대로 `AR1, AR2, AR3...` 식의 `ID`를 갖습니다.

**헤더 행은 헤더가 한줄 일 때는 Header 라는 이름을 갖고 2번째 헤더행부터는 `HR1,HR2...` 식으로 `ID`를 갖습니다.**

헤더 영역나 푸터 영역에 커스텀하게 생성한 행 또는 솔리드 행은, 만드실 때 부여한 id속성 값이 고유한 ID가 됩니다.

(푸터 행을 만들때 별도의 id를 지정하지 않으면 `FR1,FR2..` 식의 `ID`를 갖습니다.)


**이외에 필터행은 `Filter`, 합계행은 `FormulaRow` 라는 ID를 갖고 있습니다.**

이러한 ID를 이용하여 행에 대한 값을 변경하거나 내용을 확인하실 수 있습니다.

```javascript
//example1 헤더행의 타이틀를 수정
var hrow = sheet.getRowById("Header"); //헤더행 객체 얻기
hrow["colName"] = "수정할 헤더명";
sheet.refreshCell(hrow, "colName");

//example2 일반행에 기능 설정하기
var trow = sheet.getRowById("AR34"); //AR34번 행을 얻음
trow["CanEdit"] = 0; //행에대한 편집 불가 설정
trow["CanFocus"] = 0; //행 포커스 불가 설정
sheet.refreshRow(trow);
```


### *Def를 통한 행 공통 설정*
시트 생성시 행/열에 대한 공통기능을 설정하는 `Def`를 통해서 커스텀행에 대한 디자인과 기능을 설정할 수 있습니다.
```javascript
var options = {
    Def: {
        "Col": {},  //전체 열에 대한 공통 설정
        "Row": {},  //전체 데이터 행에 대한 공통 설정
        "Header": {}, //헤더행에 대한 공통 설정

        myCustomRow2: {  //임의의 커스텀 행에대한 공통 기능 설정
            "Color": "#555555",
            "TextColor": "#FFFFFF",
            "CanFocus": 0,
            "Tip": "커스텀 행입니다."
        }
    }
};
```
위와 같이 만들어진 "myCustomRow2"는 아래와 같은 방식으로 커스텀행에 적용하실 수 있습니다.
```javascript
options = {
    Head:[
        {       //커스텀 헤더행
            Def: "myCustomRow2", //Def에서 정의한 공통을 적용함
            id: "headRow1",
            "colName1": {"Type": "Text", "Align": "Right", "Value": "상태"},
            "colName2": {"Type": "Text", "Align": "Left", "Value": "작업완료"}
        }
    ]
};
```
### Read More
- [ShowFilter cfg](/docs/props/cfg/show-filter)
- [FormulaRow col](/docs/props/col/formula-row)
- [addRow method](/docs/funcs/core/add-row)
- [doSearch method](/docs/funcs/core/do-search)
- [loadSearchData method](/docs/funcs/core/load-search-data)
- [showFilterRow method](/docs/funcs/core/show-filter-row)
- [행 객체 appendix](/docs/appx/row-object)
- [Soild appendix](/docs/appx/solid)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
