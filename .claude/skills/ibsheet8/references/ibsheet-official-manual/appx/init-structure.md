---
KEY: initStructure
KIND: appendix
PATH: appx/init-structure
ALIAS: 시트, 객체, 구조
ALIAS_EN: init, structure, sheet, grid
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/appx/init-structure
---
# 시트 객체 구조

***시트 객체 초기화(options)***

## 초기화 구문 구조
```
options.(ROOT)
├── Def               // 각 영역의 공통 기능 설정
│   ├── Row:{}        // 모든 데이터 행의 공통 기능 설정
│   ├── Col:{}        // 모든 데이터 열의 공통 기능 설정
│   ├── Header:{}     // 헤더 행의 공통 기능 설정
│   ├── CustomID:{}   // 임의의 행에 대한 설정
│   ├── Group: {}     // Group 행에 대한 설정
│   ├── SubSum : {}   // 소계/누계 행에 대한 설정
│   └── FormulaRow:{} // FormulaRow행(합계)에 대한 설정
│
├── Cfg:{}            // 시트 전역 기능 설정
│
├── LeftCols:[]       // 왼쪽 고정 영역 열 설정
├── Cols:[]           // 기본열 설정(가운데 영역)
├── RightCols:[]      // 우측 고정 영역 열 설정
│
├── Events:{}         // 이벤트 선언
│
├── Head:[]           // 헤드영역에 커스텀행 추가/정의
├── Foot:[]           // 풋 영역에 커스텀행 추가/정의
├── Solid:[]          // Solid 행 추가/정의
└── Filter:{}         // 필터 행 추가/정의
```

시트설정 예)
```javascript
var OPT =
{
    "Def" : {               // 공통 속성 설정
        "Col": {            // 모든 열 공통 설정  (col property)
            "CanEdit": 0
        },
        "Row": {            // 모든 행 공통 설정  (row property)
            "AlternateColor": "#FEEDFF",
            "Spanned": 1
        },
        "Header": {          // 헤더행 공통 설정 (row property)
            "Align": "Center",
            "TextStyle": 1
        },
        "MyCustomRow": {     // 임의의 행 공통 설정 (row property)
            "Color": "#666666",
            "TextColor": "#FFFFFF",
            "CanFocus": 0
        },
        "FormulaRow": {     // FormulaRow 설정 (row property)
            "Spanned": true,
            "SEQSpan": 2
        },
        "Group": {          // Group 행 설정 (row property)
            "Expanded": 1,
            "sPrice": {
               "Formula": sPriceFormula
             }
        },
        "SubSum": {         // 소계/누계 행 설정 (row property)
            "AFormat": "#,##0.##",
            "BFormat": "#,##0"
        }
    },
    "Cfg": {                // 전역 기능 설정(cfg property)
        "LeftCanResize": 1,
        "LeftWidth": 100,
        "RightCanResize": 1,
        "RightWidth": 100
    },
    "LeftCols": [           // 왼쪽영역(LeftSection) 고정 열 설정 (col property)
        {
            "Header": "NO",
            "Type": "Int",
            "Name": "SEQ",
            "Width": 50
        },{
            "Header": {"Value": "", "Type": "Bool"},
            "Type": "Bool",
            "CanEdit": 1,
            "CanSort": 0,
            "Name": "CHK",
            "MaxWidth": 40
        }
    ],
    "Cols": [               // 기본 열 설정(가운데영역)  (col property)
        {
            "Header": {     // 열의 헤더 설정 개별 셀 설정
                "Value": "부서명",
                "Color": "#085820"
            },
            "Name": "deptName",
            "Type": "Text",
            "Size": 30
        }, {
            "Header": "1분기",
            "Name": "qt1",
            "Type": "Int",
            "Width": 100,
            "Format": "#,##0 만원",
            "FormulaRow": "Avg"
        }, {
            "Header": "2분기",
            "Name": "qt2",
            "Type": "Int",
            "Width": 100,
            "Format": "#,##0 만원",
            "FormulaRow": "Avg",
            "Color": "#EDEDED"
        }, {
            "Header": "3분기",
            "Name": "qt3",
            "Type": "Int",
            "Width": 100,
            "Format": "#,##0 만원",
            "FormulaRow": "Avg"
        }, {
            "Header": "4분기",
            "Name": "qt4",
            "Type": "Int",
            "Width": 100,
            "Format": "#,##0 만원",
            "FormulaRow": "Avg",
            "Color": "#EDEDED"
        }
    ],
    "RightCols": [          // 오른쪽영역(RightSection) 고정 열 설정 (col property)
        {
            "Header": "1년 합산",
            "Name": "YEARSUM",
            "Type": "Int",
            "Format": "#,##0 만원",
            "Formula": "qt1+qt2+qt3+qt4",
            "Width": 100
        }
    ],
    "Foot": [               // 풋 영역 설정
        {
            "Def": "MyCustomRow",
        	"SEQ": {"Type": "Text"},
        	"CHK": {"Type": "Text"},
            "deptName": {"Value": "2017년 자료", "TextColor": "#FF0000", "Span": 5, "Format": "", "Type": "Text", "Align": "Center"},
            "YEARSUM": {"Type": "Text", "Format": "", "Value": "", "Formula": ""}
        }
    ],
    "Events":{              // 이벤트 설정
        "onSelectMenu":function (evt) {

        }
    },
    "Solid": [              // Solid 행 설정
    ],
    "Filter": {              // 필터 행 설정
        컬럼명: {            // 컬럼 단위로 필요한 기능을 셋팅 할 수 있음.
          Button: 'Defaults',
          Defaults: '|*Rows'
        }
    }
};
```

## 조회 데이터 구조
```js
{
    "data":[
        {"deptName": "국내영업 1팀", "qt1": 15030, "qt2": 21102, "qt3": 20308, "qt4": 23041},
        {"deptName": "국내영업 2팀", "qt1": 25100, "qt2": 42460, "qt3": 38740, "qt4": 54765},
        {"deptName": "국내영업 3팀", "qt1": 11474, "qt2": 19671, "qt3": 24746, "qt4": 20754},
        {"deptName": "해외 영업팀", "qt1": 24146, "qt2": 24654, "qt3": 24164, "qt4": 48121}
    ]
}
```
![로드된 시트 이미지](/assets/imgs/basicSheet.png "로드된 시트 이미지")
<!-- IMAGE: 시트/테이블 화면 - 로드된 시트 이미지 -->

[로드된 시트 이미지]

## 이벤트 호출(event)

시트는 일반적으로 기본 이벤트와 행, 열, 셀에서 설정 가능한 `JSON 이벤트`를 가집니다.

시트 생성, 데이터 & 통신, 행, 열, 셀, 셀 타입, 페이징, 전역 설정 부분에서 각각 사용될 수 있는 다양한 이벤트가 있습니다.

이벤트 설정 방법 : 시트 생성 시 사용되는 `options`에 설정
```javascript
options.Events : { // 일반 event
    onAfterChange:function (params) {
        alert(params.oldval + "값이 " + params.val + "로 수정되었습니다.");
    }
}

options.Cols: [ // JSON event
    {
        Name: "ColName", OnClickSide:function () {alert("JSON Event");}
    }, ...
]
```

### Read More


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
