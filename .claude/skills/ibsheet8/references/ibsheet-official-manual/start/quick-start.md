---
KEY: quickStart
KIND: guide
PATH: start/quick-start
ALIAS_EN: quick, start
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/start/quick-start
---
# Quick Start


## ibsheet 파일 구성
`IBSheet8`을 사용하기 위해서 다음 4~7가지 파일을 추가합니다.

```html
<!----- ibsheet 기본 모듈 ----->
<!-- 디자인 css -->
<link rel="stylesheet" type="text/css" href="ibsheet/css/default/main.css">
<!-- 시트 코어 파일 -->
<script src="ibsheet/ibsheet.js"></script>
<!-- 라이선스 파일 -->
<script src="ibsheet/ibleaders.js"></script>
<!-- 메세지 파일 ko.js 나 en.js 중 하나 추가 -->
<script src="ibsheet/locale/ko.js"></script>


<!----- ibsheet 선택 모듈 ----->
<!-- 엑셀 다운/업로드 관련 모듈 -->
<script src="ibsheet/plugins/ibsheet-excel.js"></script>
<!-- 찾기,상세보기 등 다이얼로그 관련 모듈 -->
<script src="ibsheet/plugins/ibsheet-dialog.js"></script>
<!-- 공통 속성 관련 모듈 -->
<script src="ibsheet/plugins/ibsheet-common.js"></script>
```

## 시트 생성

이 후 열의 개수와 기능, 헤더 타이틀과 같은 정보를 설정하고 **[IBSheet.create()](/docs/static/create)** 함수를 통해 객체를 생성합니다.

*초기 생성시 **시트의 너비, 높이**는 el 속성에서 정의하는 **div객체의 너비, 높이**를 따르며, <mark>*해당 div에 너비, 높이가 **없는 경우*** 너비는 **100%**, 높이는 **800px**를 기본값으로 갖습니다.</mark>*

[자바스크립트 구문]
```javascript
function initSheet() {
    //시트의 초기화 속성 설정
    var OPT = {
            //각 열에 대한 정의 (열의 이름, 유형(Type), 포맷(Format)등을 설정)
            //열의 "Type"과 "Name" 속성은 반드시 설정되어야 합니다.
            Cols:[
                {Header: "컬럼1", Name: "colName1", Type: "Text"},
                {Header: "컬럼2", Name: "colName2", Type: "Text", Align: "center"}
            ]
        };
    //초기 데이터 설정
    var DATA = [];

    IBSheet.create({
        id: "sheet",        // 시트 객체 ID
        el: "sheetDiv",     // 시트를 생성할 DIV객체 ID
        options: OPT,       // 초기화 구문 변수
        data: DATA          // 초기 로딩 데이터
    });
}
```
[HTML 구문 - 시트 높이 고정]
```html
<body onload="initSheet()">
  <div class="btnCls">
     <button type="button" class="mainBtnB">조회</button>
     <button type="button" class="mainBtnB">신규</button>
  </div>
  <hr>
  <!-- 시트가 될 DIV 객체 -->
  <div id="sheetDiv" style="width:100%; height:500px;"></div>
</body>
```
[HTML 구문 - 시트 부모 요소 높이 고정]
```html
<body onload="initSheet()">
  <div class="btnCls">
     <button type="button" class="mainBtnB">조회</button>
     <button type="button" class="mainBtnB">신규</button>
  </div>
  <hr>
  <!-- 시트의 부모 요소 -->
  <div style="width:100%; height:600px;">
     <!-- 시트가 될 DIV 객체 -->
     <div id="sheetDiv" style="width:100%; height:100%;"></div>
   </div>
</body>
```

**시트의 높이를 100% 등 상대값으로 생성할 경우 부모 요소의 높이가 고정되어 있어야합니다.**

<mark>**시트의 높이는 고정된 행(헤더,필터,합계 행등)이 모두 보여질 정도로 설정 되어야 합니다.** 
이는 보통 150~200px 정도이며 이보다 작게 설정한 경우에는 시트가 생성되지 않을 수 있습니다.</mark>

*`options` 와 `data` 는 [시트객체구조](/docs/start/basic-structure)를 참고하세요.*

![시트생성](/assets/imgs/quickStart1.png "시트 간단 생성")
<!-- IMAGE: 시트/테이블 화면 - 시트생성 -->

[그림 1] 생성된 ibsheet

## 시트 초기화 및 열 설정

[IBSheet.create()](/docs/static/create) 함수의 `options`를 통해 시트의 헤더, 행, 열 등에 대한 자세한 부분을 설정할 수 있습니다.
```javascript
var OPT = {
        //각 열에 대한 정의 (열의 이름, 유형(Type), 포맷(Format)등을 설정)
        Cols:[
            {
                Header: "이름",
                Name: "sa_nm", Type: "Text"
            },
            {
                Header: "사원번호",
                Name: "sa_id", Type: "Text", Align: "center"
            },
            {
                Header: "부서",
                Name: "sa_dept", Type: "Enum",
                Enum: "|경영지원|총무|인사|설계|시공1|시공2", EnumKeys: "|01|02|03|04|05|06"
            },
            {
                Header: "직급",
                Name: "sa_position", Type: "Enum",
                Enum: "|대표|상무|이사|부장|차장|과장|대리|사원", EnumKeys: "|A1|A2|A3|B0|B1|C4|C5|C6"
            },
            {
                Header: "입사일",
                Name: "sa_enterdate", Type: "Date", Width:100, Format: "yyyy/MM/dd",
            },
            {
                Header: "비고",
                Name: "sa_desc", Type: "Lines"
            }
        ]
    };
```
![시트생성2](/assets/imgs/quickStart2.png "시트생성2")
<!-- IMAGE: 시트/테이블 화면 - 시트생성2 -->

[그림 2] 열 설정이 적용된 `ibsheet`

두 줄 이상의 헤더를 생성하거나 헤더 안에 셀간 병합을 설정하는 방법은 [(col)Header](/docs/props/col/header)속성을 참고해 주세요.


[IBSheet.create](/docs/static/create)의 data를 설정하면 시트를 생성하는 것과 동시에 데이터를 로딩할 수 있습니다.

```javascript
var DATA = [
    {"sa_nm": "홍길동", "sa_id": "9821450", "sa_dept": "04", "sa_position": "B0", "sa_enterdate": "19980305", "sa_desc": ""},
    {"sa_nm": "김한국", "sa_id": "9510427", "sa_dept": "01", "sa_position": "A3", "sa_enterdate": "19890317", "sa_desc": ""}
];
```

![시트생성3](/assets/imgs/quickStart3.png "시트생성3")
<!-- IMAGE: 시트/테이블 화면 - 시트생성3 -->

[그림 3] 데이터가 로드된 `ibsheet`

사용자 입력에 의한 조회가 필요하면 시트를 생성 후, [loadSearchData()](/docs/funcs/core/load-search-data) 나 [doSearch()](/docs/funcs/core/do-search) API 를 이용하면 됩니다.


<div class='notice'>

### 주의
시트 생성 함수 [IBSheet.create()](/docs/static/create)는 비동기 형식으로 동작함으로 생성 직후에 시트의 기능 함수를 호출시 오류가 발생할 수 있습니다.

```javascript
//시트 생성 함수
IBSheet.create({ ... });
//비동기적으로 생성됨으로 "sheet"객체가 생성되었는지 알 수 없다.
sheet.showFilterRow(); //onRenderFirstFinish 이벤트에서 호출하거나 options.Cfg.ShowFilter: true로 설정하면 시트 생성과 동시에 필터행이 보여집니다.
```
따라서 시트 생성 후 필요한 함수를 호출하시려면 [onRenderFirstFinish](/docs/events/on-render-first-finish) 이벤트에 로직을 구성하셔야 합니다.

</div>

## 각종 기능 사용의 예

[아이비시트 메소드 사용법](/docs/funcs/method)

### **행추가**
[addRow()](/docs/funcs/core/add-row) 함수를 통해 신규 행을 추가할 수 있습니다.	

```javascript
//선택행 행 위로 새로운 행을 추가합니다.
sheet.addRow(sheet.getFocusedRow(), 1);
```

### **데이터 로드**
[loadSearchData()](/docs/funcs/core/load-search-data) 함수를 통해 데이터를 로딩할 수 있습니다.

```javascript
//jquery를 이용한 ajax 통신
$.ajax({
    url: "./data.jsp",
    param: "edate=19950101&position=C1",
    success: function (rtnData) {
        //서버에서 가져온 json데이터를 로딩
        sheet.loadSearchData(rtnData);
    }
});
```

[doSearch()](/docs/funcs/core/do-search) 함수를 통해 url에서 데이터를 로딩할 수 있습니다.


조회된 데이터라 로딩 완료 후
```javascript
//ajax 통신 및 데이터 로드
sheet.doSearch("/ex/getPetaData.do", "edate=19950101&position=C1");
```

위 [loadSearchData()](/docs/funcs/core/load-search-data)와 [doSearch()](/docs/funcs/core/do-search) 함수는 모두 비동기 형식으로 동작합니다.


### **수정된 데이터 추출**

 [getSaveJson()](/docs/funcs/core/get-save-json), [getSaveString()](/docs/funcs/core/get-save-string) 함수를 통해 시트에서 수정된 데이터(혹은 전체 데이터)를 json형식이나 querystring 형식으로 추출할 수 있습니다.

([getChangedData()](/docs/funcs/core/get-changed-data)는 수정된 데이터를 셀단위로 추출하고, [getSaveJson()](/docs/funcs/core/get-save-json), [getSaveString()](/docs/funcs/core/get-save-string)은 행단위로 추출합니다.)

```javascript
var chgData = sheet.getSaveJson();
```
return 값
```js
{
    "data":[
        // 삭제 데이터
        {"id":"AR2","SEQ":2,"sStatus":"D","DCheck":"1","sNation":"한국", ... "STATUS":"Deleted"},
        // 신규 데이터
        {"id":"AR51","SEQ":4,"sStatus":"I","DCheck":"0","sNation":"미국", ... "STATUS":"Added"},
        // 수정 데이터
        {"id":"AR5","SEQ":6,"sStatus":"U","DCheck":"0","sNation":"한국", ... "STATUS":"Changed"}
    ]
}
```
시트의 수정 여부는 [hasChangedData()](/docs/funcs/core/has-changed-data)를 통해 확인할 수 있습니다.

특정 상태의 행만 추출하는 경우, 가령 신규 입력된 행만 추출해야 한다면 [getRowsByStatus('Added')](/docs/funcs/core/get-rows-by-status)함수를 이용하시면 편리합니다.



### **행삭제**
[deleteRow()](/docs/funcs/core/delete-row) 함수로 특정 행의 상태를 `Deleted`로 변경 할 수 있습니다.

[removeRow()](/docs/funcs/core/remove-row) 함수로 특정 행을 즉시 삭제할 수 있습니다.

[removeAll()](/docs/funcs/core/remove-all) 함수로 모든 데이터 행을 삭제할 수 있습니다.
```javascript
//첫번째 행 객체 추출
var row = sheet.getFirstRow();
//첫번째 행을 즉시 삭제한다.
sheet.removeRow(row);
```

### **상태 클리어**
[acceptChangedData](/docs/funcs/core/accept-changed-data) 함수를 통해 저장 작업이 완료된 후 시트의 상태를 클리어 할 수 있습니다.

위 함수를 호출하면 수정(Changed),입력(Added)인 행은 조회 상태로 변경되고, 삭제(Deleted)인 행은 삭제 됩니다.


### **셀 값의 확인/변경**
[getValue](/docs/funcs/core/get-value),[setValue](/docs/funcs/core/set-value) 함수를 통해 셀의 값을 확인하거나 변경하실 수 있습니다.

```javascript
// 셀의 값 READ
var cls = sheet.getValue( sheet.getFirstRow(), "CLS" ); //첫번째 데이터 행에 "CLS" 컬럼의 값을 얻음.

// 셀의 값 WRITE
sheet.setValue( sheet.getRowByIndex(100), "DESC", "임계값 근접 경고!" ); //100번째 행의 "DESC" 값을 변경.
```



### **글자색,배경색 설정**
[setAttribute()](/docs/funcs/core/set-attribute) 함수를 통해 특정 셀의 속성을 변경 할 수 있습니다.
```javascript
// AMT 컬럼의 배경색을 FF0000로 변경
sheet.setAttribute(null, "AMT", "Color", "#FF0000" );

// 마지막행의 글자색을 0000FF로 변경
sheet.setAttribute( sheet.getLastRow(), null, "TextColor", "#0000FF" );

// 특정 셀의 폰트를 Bold로 변경
sheet.setAttribute( sheet.getFocusedRow(), "ETC", "TextStyle", 1 );
```


여러개의 디자인 속성을 한꺼번에 변경해야 하는 경우에는 [setCellStyle()](/docs/funcs/core/set-cell-style) 함수를 사용합니다.
```javascript
var row = sheet.getFirstRow();
sheet.setCellStyle({row: row, col: "sa_nm", attr: {TextColor:"red", Color: "#00FF00"}, render: 1});
```


## 이벤트 사용

[아이비시트 이벤트 사용법](/docs/events/event)

### 데이터 수정시 이벤트 사용 예
```javascript
//객체 생성시 이벤트 선언
options.Events = {
    onAfterChange:function (evtParam) {
        if (evtParam.col == "AMT" && evtParam.val == 3000) {
            evtParam.sheet.showMessage("I Love You 3000");
        }
    }
};
```

### 더블 클릭 이벤트 bind 예 (권장하지 않음)
```javascript
//시트객체 생성 이후 이벤트 바인딩
sheet.bind("onDblClick" , function(evtParam) {
    var row = evtParam.row;
    var col = evtParam.col;
    //편집불가능한 셀 더블클릭시 상세 다이얼로그 open
    if (!sheet.getAttribute(row, col, "Edit")) {
        evtParam.sheet.showEditDialog(row);
    }
});
```


### Read More
- [시트 객체 구조 getting started](/docs/start/basic-structure)
- [Header col](/docs/props/col/header)
- [method 사용법 기초 method](/docs/funcs/method)
- [event 사용법 기초 event](/docs/events/event)
- [onRenderFirstFinish event](/docs/events/on-render-first-finish)
- [create static](/docs/static/create)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
