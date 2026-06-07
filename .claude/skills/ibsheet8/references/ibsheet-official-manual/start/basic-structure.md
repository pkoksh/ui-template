---
KEY: basicStructure
KIND: guide
PATH: start/basic-structure
ALIAS: 시트, 객체, 기본, 구조
ALIAS_EN: basic, structure, sheet, grid
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/start/basic-structure
---
# 시트 객체 기본 구조

***시트 객체 초기화(options)***

## 초기화 구문 구조
```
options.(ROOT)
├── Cfg:{}            // 시트 전역 기능 설정
│
├── LeftCols:[]       // 왼쪽 고정 영역 열 설정
├── Cols:[]           // 기본열 설정(가운데 영역)
├── RightCols:[]      // 우측 고정 영역 열 설정
│
└── Events:{}         // 이벤트 선언
```

시트설정 예)
```javascript
var OPT =
{
    "Cfg": {                // 전역 기능 설정(cfg property)
        "CanEdit": 0,
    },
    "LeftCols": [           // 왼쪽영역(LeftSection) 고정 열 설정 (col property)
        { "Header": "NO", "Type": "Int", "Name": "SEQ", "Width": 50 },
        { "Header": "선택", "Type": "Bool", "CanEdit": 1, "Name": "CHK"} 
    ],
    "Cols": [               // 기본 열 설정(가운데영역)  (col property)
        { "Header": "부서명", "Name": "deptName", "Type": "Text", "Size": 30 }, 
        { "Header": "1분기", "Name": "qt1", "Type": "Int", "Width": 100, "Format": "#,##0 만원", "FormulaRow": "Avg" }, 
        { "Header": "2분기", "Name": "qt2", "Type": "Int", "Width": 100, "Format": "#,##0 만원", "FormulaRow": "Avg", "Color": "#EDEDED" }, 
        { "Header": "3분기", "Name": "qt3", "Type": "Int", "Width": 100, "Format": "#,##0 만원", "FormulaRow": "Avg" }, 
        { "Header": "4분기", "Name": "qt4", "Type": "Int", "Width": 100, "Format": "#,##0 만원", "FormulaRow": "Avg", "Color": "#EDEDED"}
    ],
    "RightCols": [],        // 오른쪽 영역(RightSection)
    "Events":{              // 이벤트 설정
        "onBeforeChange":function (evt) {
            ...
        }
    }
};
```

## 조회 데이터 구조
```js
var DATA = [
        {"deptName": "국내영업 1팀", "qt1": 15030, "qt2": 21102, "qt3": 20308, "qt4": 23041},
        {"deptName": "국내영업 2팀", "qt1": 25100, "qt2": 42460, "qt3": 38740, "qt4": 54765},
        {"deptName": "국내영업 3팀", "qt1": 11474, "qt2": 19671, "qt3": 24746, "qt4": 20754},
        {"deptName": "해외 영업팀", "qt1": 24146, "qt2": 24654, "qt3": 24164, "qt4": 48121}
    ]
```

## 시트 생성 구문
```js
IBSheet.create({
    "id": "mySheet", // 시트객체 이름 (SPA에서는 사용 X)
    "el": document.querySelector("div.part1 .gridarea"), // 시트를 생성할 html element 
    "options": OPT, // 초기화 구문
    "data": DATA  //초기 데이터
});
```

![로드된 시트 이미지](/assets/imgs/basicStructure.png "로드된 시트 이미지")
<!-- IMAGE: 시트/테이블 화면 - 로드된 시트 이미지 -->

[로드된 시트 이미지]


### Read More
- [상세 구조](/docs/appx/init-structure)

### Since
  
|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
