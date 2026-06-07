---
KEY: ibsheet7Migration
KIND: appendix
PATH: appx/ibsheet7-migration
ALIAS_EN: ibsheet7, migration
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/appx/ibsheet7-migration
---
# Migration
## 1. 제품 파일 변경 <a name="chapter-1"></a>

### 각 파일의 기능 비교 <a name="diff-files"></a>

|IBSheet7 파일|기능|IBSheet8 파일|
|---|---|---|
|ibsheet.js|제품core|ibsheet.js|
|ibleaders.js|라이선스|ibleaders.js|
|ibsheetinfo.js|초기화 상수,함수|ibsheet-common.js|
|ibmsg|메세지 파일|ko.js, en.js|
|Main폴더|css파일 및 이미지|css/테마폴더|
|ibsheet.cfg|공통 기능 속성|ibsheet-common.js|
|없음|찾기,피봇등 공통 다이얼로그|ibsheet-dialog.js|
|없음|파일 export/import 관련 모듈|ibsheet-excel.js|

ibsheet7을 통해 제품 개발시에는 실제 화면에 필수적으로 include 해야 하는 파일은 `ibsheet.js`와 `ibsheetinfo.js` 였습니다.

이 두 개 파일만 추가하면 나머지 파일들(`ibmsg`, `ibsheet.cfg`, `ibsheet.css`)은 ajax통신을 통해 자동으로 화면에 로딩 되었었습니다.

IBSheet8에서는 기존에 `ibmsg`나 `ibsheet.cfg`와 같이 확장자가 없거나, cfg와 같이 개별적인 확장자를 갖는 파일은 모두 js형태로 변경되었고 각 파일은 직접 화면에 include하는 형태로 변경되었습니다.

따라서 IBSheet8로 마이그레이션 시에는 다음과 같은 파일들이 추가되어야 합니다.

### IBSheet8 사용 파일 <a name="ibsheet8-files"></a>

- 필수 파일
1. `ibsheet.js` (IBSheet8 코어)
2. `/locale/ko.js` (혹은 `en.js`)  (다국어 메세지 파일)
3. `/css/default/main.css` (기본디자인 css)

- 선택 파일
1. `ibsheet-common.js`  (공통기능 설정)
2. `ibsheet-dialog.js` (각종 다이얼로그 사용)
3. `ibsheet-excel.js` (엑셀,텍스트 다운로드/업로드)


### example <a name="ibsheet8-import"></a>
 ```html
// AS-IS
<script type="text/javascript" src="/common/sheet/js/ibsheet.js"></script>
<script type="text/javascript" src="/common/sheet/js/ibsheetinfo.js"></script>
```

```html
// TO-BE
// - 필수 파일
<link rel="stylesheet" href="/common/ibsheet8/css/default/main.css">
<script type="text/javascript" src="/common/ibsheet8/ibsheet.js"></script>
<script type="text/javascript" src="/common/ibsheet8/locale/ko.js"></script>

// - 선택 추가 파일
<script type="text/javascript" src="/common/ibsheet8/ibsheet-common.js"></script>
<script type="text/javascript" src="/common/ibsheet8/ibsheet-dialog.js"></script>
<script type="text/javascript" src="/common/ibsheet8/ibsheet-excel.js"></script>
```

IBSheet8은 기본적으로 CSS3를 사용함으로 IE10 이상의 브라우저에서 정상적으로 보여집니다.

<!--!
`[비공개]` 만약 IE9이하의 브라우저에서 IBSheet8를 사용 시에는 `/css/compatible/light/main.css` 파일도 include 해주어야 합니다.

!-->

## 2. 객체 생성 및 초기화 <a name="chapter-2"></a>

### 객체 생성 <a name="create-ibsheet"></a>
IBSheet7의 객체 생성 단계는 다음과 같습니다.
1. `createIBSheet`(혹은 `createIBSheet2`)함수를 이용하여 기본 시트 객체 생성
2. 초기화 함수(`IBS_InitSheet`)를 통해 열의 개수,기능을 설정

IBSheet8은 위 두개 과정이 합쳐진 형태로 단일 함수내에서 객체에 대한 생성 및 초기화가 이루어지게 됩니다.

```javascript
//AS-IS

// 1. 시트 객체를 #sheetDIV 객체에 지정한 크기로 생성(생성객체,id,너비,높이)
createIBSheet2( document.getElementById("sheetDIV"),"mySheet","100%","250px");
// 2. 시트 초기화
var initSheet = {
    Cfg:{SearchMode:2},
    Cols:[
        {Header:"No",Type:"Seq",SaveName:"SEQ",Width:60},
        {Header:"이름",Type:"Text",SaveName:"sName",Width:100,Align:"Center"},
        {Header:"부서",Type:"Combo",SaveName:"sDept",Width:80,ComboText:"인사|총무|개발|설계",ComboCode:"A01|A04|B01|B02"},
        ...
    ]
}
//초기화 함수 호출(시트객체,초기화 설정 구문)
IBS_InitSheet(mySheet,initSheet);
```
```javascript
//TO-BE
var initSheet = {
    Cfg:{SearchMode:2},
    Cols:[
        {Header:"No",Type:"Int",Name:"SEQ",Width:60},
        {Header:"이름",Type:"Text",Name:"sName",Width:100,Align:"Center"},
        {Header:"부서",Type:"Enum",Name:"sDept",Width:80,Enum:"|인사|총무|개발|설계",EnumKeys:"|A01|A04|B01|B02"},
        ...
    ]
}
//시트 객체 생성 및 초기화(높이,너비는 sheetDIV객체의 크기를 따른다)
IBSheet.create({
    el:"sheetDIV" //생성객체
    id:"mySheet" //id
    options:initSheet //초기화 설정 구문

});
```

### 초기화 구문 변경 부분 <a name="init-ibsheet"></a>

기존 IBSheet7의 각 열 별 타입, 포맷, 기능에 대해서 IBSheet8에서 변경된 내용을 아래에서 확인해 보세요.

**주요 초기화 기능 변경**

***Cfg(SetConfig)***

|ibsheet7 속성명|기능설명|변경 내용|
|---|---|---|
|AutoFitColWidth|지정한 시점마다 각 열의 너비를 가로 스크롤바가 생기지 않는 범위 내로 조정해 주는 기능|열 생성시 [RelWidth (col)](/docs/props/col/rel-width) 속성을 통해 각 열의 너비를 비율로 조정하는 형태로 변경|
|CountFormat,CountPosition,PagingPosition|조회된 데이터 건수 표시 기능|[InfoRowConfig (cfg)](/docs/props/cfg/info-row-config) 속성을 통해 설정|
|DragMode|드래그 방식,가능 여부 설정| [CanDrag (cfg)](/docs/props/cfg/can-drag) 속성을 통해 설정 가능|
|HeaderRowHeight,DataRowHeight|헤더,데이터 행의 높이를 설정|css 를 통해 설정하는 형태로 변경
[Size (cfg)](/docs/props/cfg/size)를 통해 시트의 행 높이, 아이콘 크기, 버튼 크기 등 전체적인 크기 조절이 가능|
|FrozenCol,FrozenColRight|좌우측 열고정 기능|[LeftCols, RightCols](/docs/appx/init-structure) 속성을 통해 시트 생성시 설정. 이후로는 [setFixedCols (method)](/docs/funcs/core/set-fixed-clos) 함수로 변경가능|
|MergeSheet|헤더, 데이터행의 머지종류 설정|[HeaderMerge (cfg)](/docs/props/cfg/header-merge),[DataMerge (cfg)](/docs/props/data-merge), [PrevColumnMerge (cfg)](/docs/props/cfg/prev-column-merge) 속성으로 변경|
|Page|한번에 렌더링할 행의 개수|[PageLength (cfg)](/docs/props/cfg/page-length)로 명칭 변경|
|SearchMode|조회 렌더링 방식 설정|[SearchMode (cfg)](/docs/props/cfg/search-mode)동일 하지만 Mode는 조금씩 다르며 일부 모드는 추가됨|
|SumPosition|합계 행에 대한 위치|[setFormulaRowPosition (method)](/docs/funcs/core/set-formula-row-position) 함수를 통해 설정|
|ToolTip|풍선도움말 사용여부|row,col 속성 설정에서 `Tip` [(row)](/docs/props/row/tip) [(col)](/docs/props/col/tip) [(cell)](/docs/props/cell/tip)으로 변경|
|UseHeaderActionMenu|헤더행 컨텍스트 메뉴 기능|[Def/Header](/docs/appx/init-structure)에서 [Menu](/docs/appx/menu) 속성으로 설정|






***Cols(InitColumns)***

#### [Type](/docs/appx/type) 속성 <a name="init-col-type"></a>
|Type명|변경내용|
|---|---|
|Text|일반 문자형 타입으로 동일. 단 `MultiLineText`(여러개행)속성 사용시에는 `Lines`타입이 별도 제공됩니다.
|Status|지원안함
`Status`타입 열의 유무와 상관없이 시트 내에 변경사항에 대한 관리가 자동으로 이루집니다.
 일반적으로 수정된 행은 노란색(`.IBColorChanged`),입력은 파란색(`.IBColorAdded`),삭제는 붉은색(`.IBColorDeleted`) 배경색으로 변경되어 표시 됩니다.
서버로 전송되는 행 상태에 대한 값은 기본적으로 'STATUS' 로 전송되며 이름을 변경하고 싶은 경우에는 Cfg에서 `ReqStatusName` 속성으로 변경할수 있습니다.
기존에 `I`, `U`, `D`로 서버로 전송되던 값은 `Added`, `Changed`, `Deleted` 로 전송됩니다.
 이를 기존과 동일한 `I`, `U`, `D`로 변경하시려면 ko.js(메세지파일)에서 `ReqStatusAdded`, `ReqStatusChanged`, `ReqStatusDeleted`를 `I`, `U`, `D`로 수정해 주세요.
기존 IBSheet7과 마찬가지로 사용자에게 행의 입력/수정/삭제 여부를 별도 열을 통해 표시하고자 하는 경우에는 아래 <a href="#mig-status-type">Status 타입 마이그레이션</a> 부분을 참고해 주세요.|
|DelCheck|지원안함
 `deleteRow()`함수를 통해서 행의 상태를 삭제로 변경할 수 있습니다.
IBSheet7처럼 체크박스를 두고 상태를 삭제로 변경하고자 하신다면 열의 Type을 `Bool`로 설정하시고 [OnChange (json event)](/docs/props/event/on-change)를 통해 행의 상태를 바꾸게끔 설정하시면 됩니다.
자세한 코드는 아래 <a href="#mig-del-check-type">DelCheck 타입 마이그레이션</a> 부분 참고해주세요.|
|CheckBox|`Bool`타입으로 변경되었습니다.
|DummyCheck|지원안함
`Bool` 타입으로 설정하고 [NoChanged (col)](/docs/props/col/no-changed) 속성을 1로 설정하시면 됩니다.
|Radio| `Radio`로 동일합니다.|
|Combo| `Enum` 타입으로 변경되었습니다. 
콤보의 item을 설정하던 `ComboText`, `ComboCode`는 각각 [Enum (col)](/docs/props/col/enum), [EnumKeys (col)](/docs/props/enum-keys)로 변경되었습니다.
특히 `Enum`, `EnumKeys`의 첫번째 글자를 구분자로 사용하는 것을 주의해 주세요.
보다 자세한 내용은 아래 <a href="#mig-combo-combo-edit-type">Combo,ComboEdit 타입 마이그레이션</a>을 참고해 주세요.|
|ComboEdit|지원안함.
<a href="#mig-combo-combo-edit-type">Combo,ComboEdit 타입 마이그레이션</a>을 참고해 주세요.|
|AutoSum|타입은 Int나 Float으로 설정하시고, [FormulaRow (col)](/docs/props/col/formula-row) 속성을 사용하시면 합계나 평균을 표시할 수 있습니다.|
|Image|`Img`타입으로 변경되었습니다.
특히 데이터 구조가 크게 변경되었으므로 [Type](/docs/appx/type)부분의 내용을 참고해 주세요.
|Int|`Int`로 동일합니다.|
|Float|`Float`로 동일합니다.|
|Date|`Date`로 동일합니다.
 반드시 ([DataFormat](/docs/props/col/data-format))을 설정해야 합니다.|
|Popup|지원안함.
열 우측에 버튼을 두고자 하시는 경우에는 `Button`속성을 통해 설정하실 수 있습니다.
ex) {Type:"Text",Name:"DEPTPOP",`Button:"../assets/imgs/popup.png"`}
버튼 클릭시 발생하는 이벤트는 [onButtonClick (event)](/docs/events/on-button-click)을 참고하세요.|
|Pass|`Pass`로 동일합니다.|
|Seq|지원안함
 열의 타입을 Int로 설정하시고, `Name`을 `"SEQ"`로 지정하시면 자동 순번열 형태로 동작합니다.|
|Html|`Html`로 동일합니다.|
|Button|`Button`으로 동일합니다.
단 [onButtonClick (event)](/docs/events/on-button-click)이벤트 대신 [onClick (event)](/docs/events/on-click)이벤트를 통해 클릭에 대한 로직을 구성하셔야 합니다.|
|Result|지원안함|
|Sparkline|D3 라이브러리를 이용하여 구현 가능 ([스파크차트 예제 참고](https://www.ibsheet.com/v8/ibsheet/html/examples.html))|


#### Format 속성 <a name="init-format"></a>
IBSheet8에서는 타입별로 설정할 수 있는 포맷이 다양하고 기본적인 [Format (col)](/docs/props/col/format) 외에도 [DataFormat (col)](/docs/props/col/data-format), [EditFormat (col)](/docs/props/col/edit-format), [CustomFormat (col)](/docs/props/col/custom-format)를 통해 서버와 주고받을 데이터 유형이나 사용자 편집시 보여질 데이터 유형 등을 설정할 수 있습니다.

이로 인해 굉장히 유연하고 다양한 형태의 포맷을 지원할 수 있습니다.

또한 자주 사용되는 설정들을(`Format`,`DataFormat`,`EditFormat`...) `IB_Preset` 혹은 다른 변수에 담아두고, 해당 포맷이 필요한 경우 [Extend (col)](/docs/props/col/extend) 속성을 통해 쉽게 사용하실 수 있습니다.
```javascript
//AS-IS
var Cols = [
    {Type:"Date",SaveName:"eDate",Width:100,Format:"Ymd"},
];
```

```javascript
//TO-BE
opt.Cols = [
    //YMD 안에 Type,Width,Format 등이 모두 설정되어 있음.
    {Name:"eDate",Extend:IB_Preset.YMD},
];
```
IB_Preset 변수는 `ibsheet-common.js` 파일 내에 있습니다.


#### 그외에 속성 <a name="init-etc"></a>
|속성명|IBSheet8 지원 방법|
|---|---|
|AcceptKeys,ExceptKeys|지원안함
[ResultMask (col)](/docs/props/col/result-mask) 속성을 통해 정규식으로 로직을 구성하셔야 합니다.
기존 코드에 대해 IBSheet8에서 [EditMask (col)](/docs/props/col/edit-mask) 변환하는 코드는 아래 <a href="#mig-accept-keys-except-keys">AcceptKeys,ExceptKeys 마이그레이션</a>을 참고해 주세요.|
|Align|이전과 동일 (center,left,right)|
|ApproximateType|컬럼별 설정 불가.
(locale파일(ko.js)에서 Format.DecimalAdjust 값에 따라 결정(ceil,round,floor)|
|AutoSum|[FormulaRow (col)](/docs/props/col/formula-row) 속성으로 변경. 사용법은 유사하나 함수 연결도 가능해졌습니다.|
|BackColor|[Color (col)](/docs/props/col/color)로 속성명 변경. 사용법은 동일합니다.|
|CalcLogic|[Formula (col)](/docs/props/col/formula)속성으로 변경되고 기능이 확장되었습니다. 자세한 내용은 [Formula (appendix)](/docs/appx/formula)를 참고해 주세요.|
|ColMerge|[ColMerge (col)](/docs/props/col/col-merge)속성으로 동일합니다.|
|ComboCode,ComboText|위에 `Combo`, `ComboEdit` 타입에 대한 마이그레이션에서 언급한 것과 같이 [Enum (col)](/docs/props/col/enum), [EnumKeys (col)](/docs/props/col/enum-keys)로 변경되었습니다.
마이그레이션시 IBSheet8에서는 첫번째 글자를 구분자로 사용하는 것을 주의해 주세요.|
|Edit,EditLen|`Edit`는 [CanEdit (col)](/docs/props/col/can-edit)로 `EditLen`은 [Size (col)](/docs/props/col/size)로 변경되었습니다.|
|EmptyToReplaceChar|[EmptyValue (col)](/docs/props/col/empty-value)로 변경되었습니다.
|FontBold,FontUnderline|[TextStyle (col)](/docs/props/col/text-style)로 속성명 변경. bold외 밑줄,스트라이크,기울임등을 설정할 수 있습니다.|
|FontColor|[TextColor (col)](/docs/props/col/text-color)로 속성명 변경. 사용법은 동일합니다.|
|Hidden|[Visible (col)](/docs/props/col/visible)로 변경되었습니다. 따라서 값도 기존과 반대로 입력되어야 합니다.([Hidden (col)](/docs/props/col/hidden)속성은 실제 행의 높이 혹은 열의 너비만 줄여서 표시합니다.)|
|KeyField|[Required (col)](/docs/props/col/required)로 속성명 변경. 사용법은 동일합니다.|
|MaximumValue,MinimumValue|onEndEdit 이벤트를 override 하여 구현하여야 합니다. ([예제참고](#user-content-maximumvalueminimumvalue-마이그레이션))|
|SaveName|[Name (col)](/docs/props/col/name)으로 속성명 변경. 
 __특히 `Name`은 필수요소로 모든 열에는 반드시 `Name`속성이 있어야 합니다. 또한 한 시트 내에 동일한 `Name`을 갖는 열이 2개 이상 있어도 안됩니다.__|
|Sort|[CanSort (col)](/docs/props/col/can-sort)로 속성명 변경. 사용법은 동일합니다.|
|ToolTip|[Tip (col)](/docs/props/col/tip)으로 속성명 변경. 사용법은 동일합니다.|
|TreeCol|지원안함
 트리기능 사용시 [MainCol cfg](/docs/props/cfg/main-col)속성을 통해 트리가 될 열을 지정하셔야 합니다.|
|InsertEdit|[AddEdit(col)](/docs/props/col/add-edit)으로 속성명 변경|
|UpdateEdit|[ChangeEdit(col)](/docs/props/col/change-edit)으로 속성명 변경|
|Width|기존과 동일합니다.
그리고 [MinWidth (col)](/docs/props/col/min-width), [MaxWidth (col)](/docs/props/col/max-width), [RelWidth (col)](/docs/props/col/rel-width)를 통해 열 너비의 최소,최대 크기나 상대적 크기를 설정하실 수 있습니다.|


## 3. 이벤트 대응 <a name="chapter-3"></a>

#### 이벤트 사용 방법 변경 <a name="events-use"></a>
IBSheet7에서 이벤트는 global window객체 안에 `시트id_이벤트명` 형식의 함수를 만드는 형태였습니다.

IBSheet8에서는 다른 속성과 마찬가지로 [Events](/docs/appx/init-structure)라는 속성명안에서 필요한 이벤트를 정의하는 형태로 변경되었습니다.

또한 각 이벤트별로 달랐던 argument의 개수도 IBSheet8에서는 모든 이벤트가 동일하게 `evtParam` 객체 하나를 받고, `evtParam` 객체안에 각 이벤트에 따라 다른 인자를 갖는 형태로 바뀌었습니다.
```javascript
//AS-IS
//change 이벤트
function mySheet_OnChange(row, col, value, oldValue) {
    if (col == 5 && value > 100) {
        alert("최대 100 까지 입력 가능합니다.");
    }
}
//click 이벤트
function mySheet_OnClick(row, col, value, cellx, celly, cellw, cellh, rowtype) {
    if (mySheet.ColSaveName(col) == "SA_NO") {
        showEmpPopup( value ,"simple" );
    }
}
```
```javascript
//TO-BE
opt.Events = {
    //change 이벤트
    onAfterChange:function(evtParam) {
        if (evtParam.col == "AVGRST" && evtParam.val > 100 ) {
            alert("최대 100 까지 입력 가능합니다.");
        }
    },
    //click 이벤트
    onAfterClick:function(evtParam) {
        if (evtParam.col == "SA_NO") {
            showEmpPopup( evtParam.sheet.getValue(evtParam.row, evtParam.col) );
        }
    }
}
```
#### 자주 사용되는 이벤트 <a name="events-favorite"></a>

IBSheet7에서 자주 사용되는 이벤트에 대해 IBSheet8에서 변경된 부분을 확인합니다.

이벤트의 발생 시점은 조금씩 차이가 있을 수 있습니다.

이벤트 명칭이 기존에 `파스칼케이스(PascalCase)`에서 `카멜케이스(camelCase)`로 변경된 점을 주의해 주세요.

|이벤트명|IBSheet8 이벤트|설명|
|---|---|---|
|OnAfterEdit|[onAfterEdit (event)](/docs/events/on-after-edit)||
|OnBeforeCheck|[onBeforeChange (event)](/docs/events/on-before-change)|별도에 `CheckBox`타입에서만 발생하는 이벤트는 없고,해당 이벤트는 모든 타입의 열에서 발생합니다.|
|OnBeforeDownload|[onBeforeDownload (event)](/docs/events/on-before-download)||
|OnBeforePaste|[onBeforePaste (event)](/docs/events/on-before-paste)||
|OnButtonClick|[onClick (event)](/docs/events/on-click)|`Button`타입에서만 발생하는 이벤트는 없고,해당 이벤트는 모든 타입의 열에서 발생합니다.
JSON Evnet [onClickSide (props event)](/docs/props/event/on-click-side) 를 사용할 수도 있습니다.|
|OnChange|[onAfterChange (event)](/docs/events/on-after-change)|[setValue (method)](/docs/funcs/core/set-value)와 같이 외부 함수를 통한 변경에서는 발생하지 않습니다.|
|OnClick|[onAfterClick (event)](/docs/events/on-after-click)| IBSheet8의 [onClick (event)](/docs/events/on-click)는 IBSheet7의 동일 이벤트보다 발생 시점이 앞섭니다.
따라서 마이그레이션시 [onAfterClick (event)](/docs/events/on-after-click)를 사용해 주세요.|
|OnDblClick|[onDblClick (event)](/docs/events/on-dbl-click)||
|OnDownFinish|[onExportFinish (event)](/docs/events/on-export-finish)|명칭변경|
|OnKeyUp, OnKeyDown|[onKeyUp (event)](/docs/events/on-key-up), [onKeyDown (event)](/docs/events/on-key-down)||
|OnLoad|[onRenderFirstFinish (event)](/docs/events/on-render-first-finish)|이벤트의 발생시점은 IBSheet7의 OnLoad와 다르나, 최초 생성후 1회 발생하는 점에서 동일합니다.|
|OnLoadData|[onBeforeDataLoad (event)](/docs/events/on-before-data-load)|명칭변경|
|OnLoadExcel, OnLoadText|[onImportFinish (event)](/docs/events/on-import-finish)|단일 이벤트에서 공통처리|
|OnMouseDown, OnMouseUp, OnMouseMove|[onMouseDown (event)](/docs/events/on-mouse-down), [onMouseUp (event)](/docs/events/on-mouse-up), [onMouseMove (event)](/docs/events/on-mouse-move)||
|OnMovePage|[onBeforeGoToPage (event)](/docs/events/on--before-go-to-page)|명칭변경|
|OnRowSearchEnd|[onRowLoad (event)](/docs/events/on-row-load)|명칭변경|
|OnSaveEnd|[onAfterSave (event)](/docs/events/on-after-save)|IBSheet7의 OnSaveEnd는 저장 후 데이터 반영 및 렌더링 처리까지 끝난 상태에서 발생하나, [onAfterSave (event)](/docs/events/on-after-save)는 저장데이터를 서버에서 전송받은 직후 발생합니다.|
|OnSearchEnd|[onSearchFinish (event)](/docs/events/on-search-finish)|명칭변경|
|OnSelectMenu|[onSelectMenu (event)](/docs/events/on-select-menu)||
|OnSelectCell|[onFocus (event)](/docs/events/on-focus)|명칭변경|
|OnSort|[onAfterSort (event)](/docs/events/on-after-sort)|명칭변경|
|OnHScroll, OnVScroll|[onScroll (event)](/docs/events/on-scroll)|단일 이벤트에서 공통처리|

## 4. 자주 사용되는 함수 대응 <a name="chapter-4"></a>

IBSheet7에서 비교적 자주 사용되었다고 생각되는 함수에 대해 지원 여부와 변경된 내용입니다.

|IBSheet7 함수명|기능 설명|IBSheet8 지원 여부|
|---|---|---|
|ActionMenu|데이터 영역에서 마우스 우측 버튼 클릭시 컨텍스 메뉴 생성|[Menu](/docs/appx/menu)속성으로 대체|
|CellAlign|셀의 좌우 정렬 값 설정|[Align (cell)](/docs/props/cell/align)속성으로 대체.
ex) `sheet.setAttribute(row,'colName','Align','Right');`|
|CellBackColor|셀의 배경색 변경|[Color (cell)](/docs/props/cell/color)속성으로 대체.
ex) `var color = sheet.getAttribute(row, 'colName', 'Color');`|
|CellComboItem|셀의 드롭리스트 아이템 변경|[Enum (cell)](/docs/props/cell/enum), [EnumKeys (cell)](/docs/props/cell/enum-keys) 속성으로 대체.
ex) `sheet.setAttribute(row, 'colName', 'Enum', '\|사장\|과장\|대리\|사원');`
`sheet.setAttribute(row, 'colName', 'EnumKeys', '\|A01\|B0\|B2\|C0');`|
|CellEditable|셀의 편집가능 여부|[CanEdit (cell)](/docs/props/cell/can-edit)속성으로 대체.
ex) `sheet.setAttribute(row, 'colName', 'CanEdit', 0);`|
|CellFont|셀의 다양한 폰트 유형 설정|[TextFont (cell)](/docs/props/cell/text-font), [TextStyle (cell)](/docs/props/cell), [TextSize (cell)](/docs/props/cell) 속성으로 대체
ex) `sheet.setAttribute(row, 'colName', 'TextSize', '1.3em');`
|CellFontBold|셀의 font-weight 수정|[TextStyle (cell)](/docs/props/cell/text-style)속성으로 대체
ex) `sheet.setAttribute(row, 'colName', 'TextStyle', 1);`
|CellFontColor|셀의 폰트 색상 변경|[TextColor (cell)](/docs/props/cell/text-color)속성으로 대체
ex) `var color = sheet.getAttribute(row, 'colName', 'TextColor');`
|CellFontItalic|셀의 font-style를 italic으로 수정|[TextStyle (cell)](/docs/props/cell/text-style)속성으로 대체|
|CellFontName|셀의 font-family 수정|[TextFont (cell)](/docs/props/cell/text-font)속성으로 대체|
|CellFontSize|셀의 font-size 수정|[TextSize (cell)](/docs/props/cell/text-size)속성으로 대체|
|CellFontStrike|셀 내용에 취소선(strike) 설정|[TextStyle (cell)](/docs/props/cell/text-style)속성으로 대체|
|CellFontUnderline|셀 내용에 밑줄(Underline) 설정|[TextStyle (cell)](/docs/props/cell/text-style)속성으로 대체|
|CellVAlign|셀 내용의 상하 정렬 설정|[VAlign (cell)](/docs/props/cell/v-align)속성으로 대체
ex) `sheet.setAttribute(row, 'colName', 'VAlign', 'top');`|
|CellImage|이미지 셀의 이미지 변경|[getValue (method)](/docs/funcs/core/get-value), [setValue (method)](/docs/funcs/core/set-value)함수로 변경([Img타입에 대한 데이터 확인](/docs/appx/type))
ex) `sheet.setValue(row, 'colName', '\|./img/pic/sw97231.png\|200\|300');`|
|CellSearchValue|셀의 최초 로딩된 데이터 확인|[Orig (cell)](/docs/props/cell/orig)속성으로 대체
ex) `var orgValue = sheet.getAttribute( sheet.getRowById("AR99") , "CLS" , "Orig");`|
|CellText|셀의 값을 포맷이 적용된 상태로 얻거나 설정|[getString (method)](/docs/funcs/core/get-string), [setString (method)](/docs/funcs/core/set-string)함수로 대체
ex) `var v = sheet.getString(row, col);`|
|CellValue|셀의 값을 포맷을 제거한 상태로 얻거나 설정|[getValue (method)](/docs/funcs/core/get-value), [setValue (method)](/docs/funcs/core/set-value)함수로 대체
ex) `sheet.setValue(row, 'colName', 'A01');`|
|CheckAll|열 전체에 값을 체크|[setAllCheck (method)](/docs/funcs/set-all-check)함수로 대체
ex) `sheet.setAllCheck('colName', 1);` |
|CheckedRows|체크된 전체 행의 개수를 얻음|[getRowsByChecked (method)](/docs/funcs/core/get-row-by-checked)함수를 이용
ex)  `var cnt = sheet.getRowsByChecked( 'sCheck' ).length;`|
|ColBackColor|열 전체의 배경색 설정|[Color (col)](/docs/props/col/color)속성으로 대체
ex) `sheet.setAttribute(null, 'colName', 'Color', '#FF9AE0');`|
|ColFontBold||열 전체의 font-weight를 설정|[TextStyle (col)](/docs/props/col/text-style)속성으로 대체
ex) `sheet.setAttribute(null, 'colName', 'TextStyle', 1);`|
|ColFontColor|열 전체의 글자색을 설정|[TextColor (col)](/docs/props/col/text-color)속성으로 대체
ex) `sheet.setAttribute(null, 'colName', 'TextColor', '#FF0000');`|
|ColFontUnderline|열 전체 내용에 밑줄(Underline)설정|[TextStyle (col)](/docs/props/col/text-style)속성으로 대체
ex) `sheet.setAttribute(null, 'colName', 'TextStyle', 4);`|
|ColWidth|열의 너비 설정|[Width (col)](/docs/props/col/width)속성으로 대체
ex) `sheet.setAttribute(null, 'colName', 'Width', 250);`|
|ColEditable|열의 편집 가능여부 설정|[CanEdit (col)](/docs/props/col/can-edit)속성으로 대체
ex) `sheet.setAttribute(null, 'colName', 'CanEdit', 0);`|
|ColInsert|신규 열 추가 기능|[addCol (method)](/docs/funcs/core/add-col)함수로 변경|
|ColHidden|열 보임/감춤 설정|[hideCol (method)](/docs/funcs/core/hide-col)함수로 변경

[Visible (col)](/docs/props/col/visible)속성으로 대체 가능
ex) `sheet.setAttribute(null, 'colName', 'Visible', 0);`|
|ColSaveName|열 index를 기준으로 `Name`을 확인|[getColByIndex (method)](/docs/funcs/core/get-col-by-index)함수로 대체
ex) `var c = sheet.getColByIndex(4);`|
|ColumnSort|지정한 열 소팅|[doSort (method)](/docs/funcs/core/do-sort)함수로 대체
ex) `sheet.doSort('colName1|-colName2');`|
|ColValueDup|열내 중복행 검사|[getRowsByDup (method)](/docs/funcs/core/get-rows-by-dup)함수로 대체
ex) `var dupRows = sheet.getRowByDup({cols:'colName','firstOnly':1});`|
|ColValueDupRows|열내 전체 중복행 추출|[getRowsByDup (method)](/docs/funcs/core/get-rows-by-dup)함수로 대체
ex) `var dupRows = sheet.getRowByDup({cols:'colName'});`|
|CountFormat|조회건수 표시|[setInfoRow (method)](/docs/funcs/core/set-info-row)함수로 대체|
|CountPosition|조회 건수 표시 위치|[setInfoRow (method)](/docs/funcs/core/set-info-row)함수로 대체|
|CurrentColInfo|현재 열 정보(순서,너비등) 추출|[getCurrentColInfo (method)](/docs/funcs/core/get-current-col-info), [setCurrentColInfo (method)](/docs/funcs/core/set-current-col-info)함수로 동일|
|DataCopy|행 복사 기능|[copyRow (method)](/docs/funcs/core/copy-row)함수로 대체
ex) `sheet.copyRow(sheet.getFocusedRow());`|
|DataInsert|행 추가 기능|[addRow (method)](/docs/funcs/core/add-row)함수로 대체
ex) `sheet.addRow();`|
|DataMove|행 이동 기능|[moveRow (method)](/docs/funcs/core/move-row)함수로 대체
ex) `sheet.moveRow(row, nextRow);`|
|DirectDown2Excel|||
|DirectLoadExcel|||
|DoAllSave|전체 데이터 저장|[doSave (method)](/docs/funcs/core/do-save)함수에 `saveMode`인자로 대체
ex) `sheet.doSave({url:'saveData.do',saveMode:0});`|
|DoPrint|시트데이터 인쇄|[doPrint (method)](/docs/funcs/core/do-print)함수로 동일|
|DoSave|시트 데이터 저장|[doSave (method)](/docs/funcs/core/do-save)함수로 동일|
|DoSearch|시트 데이터 조회|[doSearch (method)](/docs/funcs/core/do-search)함수로 동일|
|DoSearchPaging|SearchMode가 서버페이징 인 경우 조회 함수|[doSearchPaging (method)](/docs/funcs/core/do-search-paging)함수로 동일|
|Down2Excel|시트를 excel파일로 export|[down2Excel (method)](/docs/funcs/excel/down-to-excel)함수로 동일|
|Down2ExcelBuffer|여러개의 시트를 엑셀파일로 export|[down2ExcelBuffer (method)](/docs/funcs/excel/down-to-excel-buffer)함수로 동일|
|Down2Pdf|||
|Down2Text|시트의 내용을 text파일로 export|[down2Text (method)](/docs/funcs/excel/down-to-text)함수로 동일|
|Editable|시트 전체에 대한 편집가능 여부설정|[CanEdit (cfg)](/docs/props/cfg/can-edit)속성으로 대체
ex) `sheet.CanEdit = 0;
sheet.renderBody();`|
|EnterBehavior|||
|Enable|시트 활성화 여부|[enable (method)](/docs/funcs/core/enable),[disable (method)](/docs/funcs/core/disable) 두개 함수로 변경|
|ExportData|||
|ExtendLastCol|마지막 열의 자동 너비 조절 기능|[RelWidth (col)](/docs/props/col/rel-width)속성을 통해 열간 너비 비율 조정 가능|
|FindCheckedRow|특정 열에 체크된 행 추출 기능|[getRowsByChecked (method)](/docs/funcs/core/get-rows-by-checked)함수로 변경|
|FindStatusRow|상태변화된 행 추출 기능|[getRowsByStatus (method)](/docs/funcs/core/get-rows-by-status)함수로 변경 |
|FindSubSumRow|||
|FindText|특정 문자를 포함하는 행 추출 기능|[findText (method)](/docs/funcs/core/find-text)함수로 동일|
|FitColWidth|열의 너비 재조정|[RelWidth (col)](/docs/props/col/rel-width)속성을 통해 자동 조정는 형태로 변경|
|FitSizeCol|열의 너비를 열내에 가장 긴글자를 갖는 셀에 맞게 조정|[fitSize (method)](/docs/funcs/core/fit-size)함수로 변경|
|FocusAfterProcess|데이터 로딩 후 첫번째 행에 포커스를 둘지 여부|[IgnoreFocused (cfg)](/docs/props/cfg/ignore-focused)속성으로 대체
0으로 설정하면 데이터 로딩 후 첫번째 행에 포커스를 이동 시킴 (default: 0)|
|FrozenCol|좌측 열 고정 기능|[setFixedLeft (method)](/docs/funcs/core/get-fixed-left)함수로 변경|
|FrozenRows|상단에 행 고정 기능|[setFixedTop (method)](/docs/funcs/core/set-fixed-top)함수로 변경 |
|GetCellProperty|행또는 셀에 속성 확인 기능|[getAttribute (method)](/docs/funcs/core/get-attribute)함수 통해 확인 가능
ex) `var colEdit = sheet.getAttribute({col:'colName',attr:'CanEdit'});` |
|GetChildRows|트리사용시 특정행의 자식행 추출|[getChildRows (method)](/docs/funcs/core/get-child-rows)함수로 동일|
|GetComboInfo|드랍리스트의 item 내용 확인|[Enum (col)](/docs/props/col/enum), [EnumKeys (col)](/docs/props/col/enum-keys)속성을 통해 확인 가능
ex) `var enum = sheet.getAttribute(null, 'colName', 'Enum');`|
|GetCurrentPage|현재 페이지 index를 확인|[getPageIndex (method)](/docs/funcs/core/get-page-index)함수로 변경|
|GetDataFirstRow|첫번째 데이터행 index 확인|[getFirstRow (method)](/docs/funcs/core/get-first-row)함수로 변경|
|GetDataLastRow|마지막 데이터행 index 확인|[getLastRow (method)](/docs/funcs/core/get-last-row)함수로 변경|
|GetEditText|현재 편집중인 내용 확인||
|GetSaveData|ajax 통신 전용 함수|지원 안함|
|GetSaveJson|시트 내 데이터를 json형식으로 추출|[getSaveJson (method)](/docs/funcs/core/get-save-json)함수로 동일|
|GetSaveString|시트 내 데이터를 querystring형식으로 추출|[getSaveString (method)](/docs/funcs/core/get-save-string)함수로 동일|
|GetSearchData|ajax 통신 전용 함수|지원 안함|
|GetSelectionCols|현재 선택된 열 index 추출|[getSelectedRanges (method)](/docs/funcs/core/get-selection-ranges)함수를 통해 선택 영역 전체를 얻는 형태로 변경|
|GetSelectionRows|현재 선택된 행 index 추출|[getSelectedRanges (method)](/docs/funcs/core/get-selection-ranges)함수를 통해 선택 영역 전체를 얻는 형태로 변경|
|HeaderActionMenu|헤더행에서 마우스 우측버튼 클릭시 컨텍스트 메뉴 표시 기능|[Menu (row)](/docs/props/row/menu)속성을 [Def.Header](/docs/appx/init-structure)에 설정하는 형태로 변경(`ibsheet-common.js` 참고)|
|HeaderBackColor|헤더행에 대한 배경색|가급적 css 파일에서 설정하는 것을 권장.
[Def.Header](/docs/appx/init-structure)에 [Color (row)](/docs/props/row/color)속성으로 통해 설정 가능|
|HeaderCheck|헤더 체크박스에 대한 체크/언체크 설정|[Checked (cell)](/docs/props/cell/checked)속성을 통해 설정
ex) sheet.getAttribute(sheet.Header,"CheckData","Checked");|
|HeaderFontBold|헤더 타이틀 font-weight 설정|가급적 css 파일에서 설정하는 것을 권장.[Def.Header](/docs/appx/init-structure)에 [TextStyle (row)](/docs/props/row/text-style)속성으로 통해 설정 가능|
|HeaderFontColor|헤더 타이틀 글자색 설정|가급적 css 파일에서 설정하는 것을 권장.[Def.Header](/docs/appx/init-structure)에 [TextColor (row)](/docs/props/row/text-color)속성으로 통해 설정 가능|
|HeaderRows|헤더 행의 개수|[getHeaderRows (method)](/docs/funcs/core/get-header-rows)함수로 확인 가능
ex) `var hcnt = sheet.getHeaderRows().length;`|
|HideFilterRow|필터행 제거 기능|[hideFilterRow (method)](/docs/funcs/core/hide-filter-row)함수로 동일|
|HideProcessDlg|대기 이미지 제거|[hideMessage (method)](/docs/funcs/core/hide-message)함수로 변경|
|HideSubSum|소계 행 제거|[removeSubTotal (method)](/docs/funcs/core/remove-sub-total)함수로 변경|
|IBCloseCalendar|달력 제거|[IBSheet.showCalendar (static)](/docs/static/show-calendar)함수로 생성된 객체의 [`다이얼로그객체.Close` (appendix)](/docs/appx/dialog)함수로 변경|
|IBShowCalendar|시트 외부영역에서 달력 오픈|[IBSheet.showCalendar (static)](/docs/static/show-calendar)함수로 변경|
|ImageList|이미지 파일 index 설정|지원안함|
|InitCellProperty|셀단위 설정 변경|[setAttribute (method)](/docs/funcs/core/set-attribute)함수로 변경가능|
|InitColumns|열 초기화|[IBSheet.create (static)](/docs/static/create)함수에 통합|
|InitComboNoMatchText|||
|InitHeaders<a name="mig-init-headers"></a>|헤더 기본 기능 설정|[Cfg](/docs/appx/init-structure) 속성으로 통합.
ex) `options.Cfg = {CanColResize:0,CanSort:1}; //전체 소팅,리사이징 금지`|
|IsDataModified|데이터 수정 여부 확인|[hasChangedData (method)](/docs/funcs/core/has-changed-data)함수로 변경|
|IsHaveChild|자식노드 유무확인|[getChildRows (method)](/docs/funcs/core/get-child-rows)를 이용해서 반환되는 배열의 길이가 0이상이면 자식이 1개 이상 존재하는걸 알 수 있음|
|LastCol|마지막 열 index 얻기|[getLastCol (method)](/docs/funcs/core/get-last-col)함수로 변경(열의 Name이 리턴)|
|LastRow|마지막 행 index 얻기|[getLastRow (method)](/docs/funcs/core/get-last-row)함수로 변경(마지막 데이터 행 객체을 리턴)|
|LoadSaveData|저장 결과에 대한 반영|[applySaveResult (method)](/docs/funcs/core/apply-save-result)함수로 변경|
|LoadSearchData|조회 데이터 로드|[loadSearchData (method)](/docs/funcs/core/load-search-data)함수로 동일(xml 지원 안함)|
|LoadExcel|엑셀파일 데이터 로드|[loadExcel (method)](/docs/funcs/excel/load-excel)함수로 동일|
|LoadExcelBuffer|여러개 워크시트 내용 로등|[loadExcelBuffer (method)](/docs/funcs/excel/load-excel-buffer)함수로 동일|
|LoadText|텍스트 파일 데이터 로드|[loadText (method)](/docs/funcs/core/load-text)함수로 동일|
|MergeSheet|데이터 자동 병합 기능|[HeaderMerge (cfg)](/docs/props/cfg/header-merge), [DataMerge (cfg)](/docs/props/cfg/data-merge)속성으로 변경|
|MouseCol|마우스 커서가 위치한 열 index|[getMouseCol (method)](/docs/funcs/core/get-mouse-col)함수로 변경(열의 Name 리턴)|
|MouseHoverMode|데이터위에 마우스 Hover시 표현 설정|[Hover (cfg)](/docs/props/cfg/hover)속성으로 변경
ex) `sheet.Hover = 1; //셀단위`|
|MouseRow|마우스 커서가 위치한 행 index|[getMouseRow (method)](/docs/funcs/core/get-mouse-row)함수로 변경(행 객체 리턴)|
|MouseToolTipText|풍선도움말 표시 설정|[showTip (method)](/docs/funcs/core/show-tip)함수로 변경
ex) `sheet.showTip('<div class="warn">분기 마감 3일 전입니다.</div>');`|
|MoveColumnPos|열 위치 변경|[moveCol (method)](/docs/funcs/core/move-col)함수로 변경|
|PagingPosition|페이지네이션 설정|[InfoRowConfig (cfg)](/docs/props/cfg/info-row-config)속성에 통합|
|RangeBackColor|특정 영역의 배경색 변경|렌더링 시점을 직접 컨트롤 할수 있으므로 [setAttribute (method)](/docs/funcs/core/set-attribute)함수를 통해 각 cell별로 [Color (cell)](/docs/props/cell/color)속성을 설정(`render`인자를 0으로)하고, 설정이 끝났을때 [rerender (method)](/docs/funcs/core/rerender)함수를 호출|
|RangeFontBold|특정 영역의 font-weight변경|렌더링 시점을 직접 컨트롤 할수 있으므로 [setAttribute (method)](/docs/funcs/core/set-attribute)함수를 통해 각 cell별로 [TextStyle (cell)](/docs/props/cell/text-style)속성을 설정(`render`인자를 0으로)하고, 설정이 끝났을때 [rerender (method)](/docs/funcs/core/rerender)함수를 호출|
|RangeFontColor|특정 영역의 글자색 변경|렌더링 시점을 직접 컨트롤 할수 있으므로 [setAttribute (method)](/docs/funcs/core/set-attribute)함수를 통해 각 cell별로 [TextColor (cell)](/docs/props/cell/text-color)속성을 설정(`render`인자를 0으로)하고, 설정이 끝났을때 [rerender (method)](/docs/funcs/core/rerender)함수를 호출|
|RangeText|특정 영역의 내용 추출|렌더링 시점을 직접 컨트롤 할수 있으므로 [setString (method)](/docs/funcs/core/set-string)함수를 통해 각 cell별로 값을 설정(`render`인자를 0으로)하고, 설정이 끝났을때 [rerender (method)](/docs/funcs/core/rerender)함수를 호출|
|RangeValue|특정 영역의 내용 추출|렌더링 시점을 직접 컨트롤 할수 있으므로 [setValue (method)](/docs/funcs/core/set-value)함수를 통해 각 cell별로 값을 설정(`render`인자를 0으로)하고, 설정이 끝났을때 [rerender (method)](/docs/funcs/core/rerender)함수를 호출|
|RedrawSum|합계 재 계산|[calculate (method)](/docs/funcs/core/calculate)함수로 변경|
|RemoveAll|전체 데이터 삭제|[removeAll (method)](/docs/funcs/core/remove-all)함수도 동일|
|RenderSheet|수정 내용 일시 반영 중지/실행|[renderBody (method)](/docs/funcs/core/renderBody), [rerender (method)](/docs/funcs/core/rerender)함수로 변경|
|ReNumberSeq|Seq열에 대한 다시 순번 매김|지원안함
매번 자동으로 순번을 계산함.|
|Reset|시트 객체 클리어|[dispose (method)](/docs/funcs/core/dispose)함수를 호출해서 시트를 완전히 제거하고 같은 id로 다시 생성([IBSheet.create (static)](/docs/static/create))|
|ReturnCellData|셀 데이터를 최초 로딩된 데이터로 변경|[revertCell (method)](/docs/funcs/core/revert-cell)함수로 변경|
|ReturnColumnPos|열의 순서를 최초 생성상태로 되돌림|지원안함|
|ReturnData|행 전체 데이터를 최초 로딩된 데이터로 변경|[revertRow (method)](/docs/funcs/core/revert-row)함수로 변경|
|RowBackColor|행 배경색 변경|[Color (row)](/docs/props/row/color)속성으로 대체
ex) `sheet.setAttribute(row, null, 'Color', '#FFAA99');`|
|RowBackColorD|삭제될 행의 배경색|css파일 `.IBColorDeleted` class에서 설정|
|RowBackColorI|추가행의 배경색|css파일 `.IBColorAdded` class에서 설정|
|RowBackColorU|수정된 행의 배경색|css파일 `.IBColorChanged` class에서 설정|
|RowCount|상태별 행 개수 확인|[getRowsByStatus (method)](/docs/funcs/core/get-rows-by-status)나 [getTotalRowCount (method)](/docs/funcs/core/get-total-row-count)함수로 확인 가능|
|RowData|행의 값을 json형태로 얻거나 설정|[getRowById (method)](/docs/funcs/core/get-row-by-id), [getFocusedRow (method)](/docs/funcs/core/get-focused-row)등 모든 행 객체를 통해 값 얻기 가능|
|RowDelete|행 즉시 삭제|[removeRow (method)](/docs/funcs/core/remove-row)함수로 변경|
|RowEditable|행 전체 수정 가능 여부 설정|[CanEdit (row)](/docs/props/row/can-edit)속성으로 대체
ex) `sheet.setAttribute(row, null, 'CanEdit', 0);`|
|RowExpanded|트리 사용시 자식행에 대한 펼침 여부 설정|[setExpandRow (method)](/docs/funcs/core/set-expand-row)함수로 변경|
|RowFontColor|행의 글자색 변경|[TextColor (row)](/docs/props/row/text-color)속성으로 대체
ex) `var fc = sheet.getAttribute(row, null, 'TextColor');`|
|RowHeight|행의 높이 설정|[getRowHeight (method)](/docs/funcs/core/get-row-height)함수로 확인
[Height (row)](/docs/props/row/height)속성으로 높이 변경.
ex) `sheet.setAttribute(sheet.getFocusedRow(), null, "Height", 200);`|
|RowHeightMax|전체 데이터 행의 최대 높이 설정|[Def.Row.MaxHeight](/docs/appx/init-structure)속성으로 설정
ex) `sheet.Def.Row.MaxHeight = 100; sheet.rerender();`|
|RowHeightMin|전체 데이터 행의 최소 높이를 설정|[Def.Row.MinHeight](/docs/appx/init-structure)속성으로 설정
ex) `sheet.Def.Row.MinHeight = 50; sheet.rerender();`|
|RowHidden|행을 보임/감춤 설정|[Visible (row)](/docs/props/row/visible)속성으로 대체
ex) `sheet.setAttribute(row, null, 'Visible', 0);`
[hideRow (method)](/docs/funcs/core/hide-row)함수로 변경
ex) `sheet.hideRow(row, null, 0);`|
|RowLevel|트리 사용시 행의 Depth index 설정|`Level`속성으로 대체(확인만 가능)
ex) `var lvl = sheet.getAttribute(row, null, 'Level');`
[moveRow (method)](/docs/funcs/core/move-row)함수로 행을 이동시켜야함.|
|SaveNameCol|열 명에 대한 Index|[getColIndex (method)](/docs/funcs/core/get-col-index)함수로 변경|
|SearchRows|로드된 데이터 행의 수|[getDataRows (method)](/docs/funcs/core/get-data-rows)함수로 변경
하지만 상태가 변경된 데이터행을 제외하고 싶다면 다음과 같이 갯수를 구할 수 있습니다.
ex) `var searchRow = sheet.getDataRows() - sheet.getRowsByStatus("Added,Deleted").length;`|
|SelectCell|특정 위치로 포커스 이동|[focus (method)](/docs/funcs/core/focus)함수로 변경
ex) `sheet.focus(row, 'colName');`|
|SelectCol|특정 열로 포커스 이동|[focus (method)](/docs/funcs/core/focus)함수로 변경
ex) `sheet.focus(null, 'colName');`
`var fc = sheet.getFocusedCol();`|
|SelectionMode|행,셀단위 select 설정|[SelectingCells (cfg)](/docs/props/cfg/selecting-cells)속성으로 대체|
|SelectRow|특정 행으로 포커스 이동|[focus (method)](/docs/funcs/core/focus)함수로 변경
ex) `sheet.focus(row, null);`
`var fr = sheet.getFocusedRow();`|
|SetBlur|시트내 포커스 제거|[blur (method)](/docs/funcs/core/blur)함수로 변경
ex) `sheet.blur(2);`|
|SetColProperty|열 속성 변경|[setAttribute (method)](/docs/funcs/core/set-attribute)를 통해 각종 속성 설정 가능
ex) `sheet.setAttribute(null, 'colName', 'CanEdit', 0);`|
|SetConfig|초기 기능 설정|[IBSheet.create (static)](/docs/static/create)함수에 [Cfg](/docs/appx/init-structure)속성으로 대체|
|SetEndEdit|편집 종료 기능|[endEdit (method)](/docs/funcs/core/end-edit)함수로 변경|
|SetHeaderMode|헤더행에 대한 기능 설정|위에 <a href="#mig-init-headers">InitHeaders</a>함수에 대한 설명 참고.
ex) `sheet.CanSort = 0;`|
|SetMergeCell|특정 영역에 대한 span|[setMergeRange (method)](/docs/funcs/core/set-merge-range)함수로 변경|
|SetSelectRange|특정 영역 선택|[selectRange (method)](/docs/funcs/core/select-range)함수로 변경|
|SetSplitMergeCell|머지된 영역에 대해 머지취소|[setMergeCancel (method)](/docs/funcs/core/set-merge-cancel)함수로 변경|
|SheetWidth|시트의 너비 변경|[IBSheet.create (static)](/docs/static/create)함수로 생성할때 지정된 el객체의 너비를 수정|
|SheetHeight|시트이 높이 변경|[IBSheet.create (static)](/docs/static/create)함수로 생성할때 지정된 el객체의 높이 수정|
|ShowCalendar|특정 셀위에 달력 팝업 open|[AutoCalendar (cfg)](/docs/props/cfg/auto-calendar)속성으로 대체|
|ShowColumnPopup|열에 설정한 컨텍스트 메뉴를 표시|[showMenu (method)](/docs/funcs/core/show-menu)함수로 유사하게 기능 구현 가능
ex) `var menu = sheet.getAttribute(sheet.getFocusedRow(),"sCompany","Menu");`
`sheet.showMenu(sheet.getFocusedRow(),"sCompany",menu);`|
|ShowFilterRow|필터행 표시|[showFilterRow (method)](/docs/funcs/core/show-filter-row)함수로 동일 |
|ShowFindDialog|찾기 다이얼로그 창 open|[showFindDialog (method)](/docs/funcs/dialog/show-find-dialog)함수로 동일(`ibsheet-dialog.js` 파일 필요)|
|ShowGroupRow|그룹행 생성|solid 행 사용으로 변경|
|ShowMsgMode|메세지 event 발생 여부 설정||
|ShowPivotDialog|피봇 다이얼로그 창 open|[showPivotDialog (method)](/docs/funcs/dialog/show-pivot-dialog)함수로 변경(`ibsheet-dialog.js` 파일 필요)|
|ShowProcessDlg|대기 이미지 표시|[showMessage (method)](/docs/funcs/core/show-message)함수로 변경|
|ShowSubSum|소계행 생성 기능|[makeSubTotal (method)](/docs/funcs/core/make-sub-total)함수로 변경|
|ShowToolTip|풍선도움말 표시|[showTip (method)](/docs/funcs/core/show-tip)함수로 변경|
|ShowTreeLevel|트리 시트 사용시 지정한 Depth까지 펼침|[showTreeLevel (method)](/docs/funcs/core/show-tree-level)함수로 동일|
|SumBackColor|합계 행에 대한 배경색|css파일의 `.IBFormulaRow` class에서 설정 혹은 합계행에 대해 직접 설정
ex) `var frow = sheet.getRowById("FormulaRow");`
`sheet.setAttribute(frow, null, 'Color', "#FF0099");`|
|SumFontBold|합계 행에 대한 font-weight|css파일의 `.IBFormulaRow` class에서 설정|
|SumFontColor|합계 행에 대한 글자색 설정|css파일의 `.IBFormulaRow` class에서 설정|
|SumRowHidden|합계 행 보입/감춤 설정|[showRow (method)](/docs/funcs/core/show-row), [hideRow (method)](/docs/funcs/core/hide-row)로 분리 및 변경
[Visible (row)](/docs/props/row/visible)속성으로 대체
ex) `sheet.setAttribute(sheet.FormulaRow, null, "Visible", true);`|
|SumValue|합계 행의 값 설정|[getValue (method)](/docs/funcs/core/get-value), [setValue (method)](/docs/funcs/core/set-value)함수로 변경
ex) `sheet.setValue(sheet.FormulaRow, "sAmt", 250000);`|
|TabBehavior|포커스 상태에서 'Tab'키 클릭시 동작 설정||
|Theme|테마 설정|[setTheme (method)](/docs/funcs/core/set-theme)만 동일|
|ToolTipText|특정 셀에 풍선도움말 설정|[Tip (cell)](/docs/props/cell/tip)속성으로 대체
ex) `sheet.setAttribute(row, 'colName', 'Tip', '사원번호를 먼저 입력하세요');`|
|TopRow|최상단의 행 index 확인|[getShownRows (method)](/docs/funcs/core/get-shown-rows)함수로 확인 가능
ex) `var trow = sheet.getShownRows()[0];`|
|TotalRows|전체 데이터 건수 설정|[getTotalRowCount (method)](/docs/funcs/core/get-total-row-count)함수로 변경|
|Visible|시트 전체 보임/감춤 설정|[IBSheet.create (static)](/docs/static/create)로 생성할때 지정된 el객체에 대해 display나 visibility 변경|

## 5. 마이그레이션시 차이점,유의사항 <a name="chapter-5"></a>

1. 객체 접근,렌더링 시점 변화 <a name="mig-approach"></a>
IBSheet8에서는 기존 버전의 제품과 달리 시트 내부의 각 객체에 직접 접근하여 값을 확인하거나 수정하는 방식으로 변경되었습니다.

또한 각 함수의 수행 후에 즉시 렌더링이 일어나던 IBSheet7과 달리 렌더링이 필요한 순간 렌더링 함수를 호출하여 실제 화면에 반영하는 방식으로 루프를 돌면서 하는 작업들에 있어서 성능이 개선되었습니다.

아래 예제는 "TOTAL"라는 열에 대해 전체 데이터를 확인하여 열의 값이 100보다 큰 경우, 해당 셀의 배경색을 붉은색으로 표시하게 끔 로직을 구성하는 예제를 참고해 주세요.


```javascript
//AS-IS
//첫번째 데이터 행부터 마지막 데이터 행까지 루프를 돈다.
for (var i = sheet.GetDataFirstRow(); i <= sheet.GetDataLastRow(); i++) {
    if (sheet.GetCellValue(i,"TOTAL") > 100){ //셀 내의 값을 clone해서 가져옴.
        sheet.SetCellBackColor(i,"TOTAL", "#FF0000"); //해당 셀에 배경색을 붉은색으로 변경한다. (함수 호출시마다 렌더링이 발생함.)
    }
}
```

```javascript
//TO-BE
//전체 데이터행 객체를 배열로 얻음
var rows = sheet.getDataRows();
for (var i = 0; i < rows.length; i++) {
    //한 행 객체를 얻음
    var row = rows[i];
    //row 객체 내에서 값을 비교하고 설정한다.
    //이렇게 수정해도 실제 화면에 반영(렌더링)되지는 않는다.
    if (sheet.getValue(row, "TOTAL") > 100) {
        sheet.setAttribute(row, "TOTAL", "Color", "#FF0000", 0);//render 속성을 0
    }
}
//전체 수정된 내용을 화면에 반영
sheet.renderBody();
```
IBSheet7의 경우 빈번한 렌더링 발생과 값에 대한 핸들링 방식의 차이로 인해 성능을 저해해 왔습니다.

IBSheet8에서는 객체에 대한 직접 접근 및 렌더링 시점 조절을 통해 이러한 작업에 있어서 강점이 있습니다.

실제로 위 예제는 IBSheet7과의 로직 차이를 설명하기 위해 작성된 것으로 IBSheet8에 [Formula](./formula) 기능을 이용하면 보다 간단하고 빠르게 해당 기능을 구현하실 수 있습니다.

2. Tree(트리)데이터 파싱 <a name="mig-parse-tree-data"></a>
IBSheet7에서는 트리를 사용하는 경우 두가지 데이터 구조를 지원하였습니다.

1) `Items` 속성을 이용한 단계적인 구조 트리 데이터
```javascript
{Data:[
    {ID:1,sName:"할아버지",Items:[
        {ID:2,sName:"큰아버지"},
        {ID:3,sName:"아버지",Items:[
            {ID:5,sName:"형"},
            {ID:6,sName:"나"}
        ]},
        {ID:4,sName:"작은아버지"}
    ]}
]}
```
2) `Level` 속성을 이용한 Depth지정 트리 데이터
```javascript
{Data:[
    {ID:1 ,Level:1,sName:"할아버지"},
    {ID:2 ,Level:2,sName:"큰아버지"},
    {ID:3 ,Level:2,sName:"아버지"},
    {ID:5 ,Level:3,sName:"형"},
    {ID:6 ,Level:3,sName:"나"},
    {ID:4 ,Level:2,sName:"작은 아버지"},
]}
```

IBSheet8에서는 기본적으로 위에 1) `Items` 속성을 이용한 트리데이터 구조를 지원합니다.
그리고 이전과 마찬가지로 `Level` 속성을 이용한 파싱을 사용하시려면 `ibsheet-common.js` 안에 `v7.convertTreeData` 함수를 이용하여야 합니다.

**`IBSheet.v7`에 정의된 API는 시트 객체를 바인딩해줘야합니다.**

```javascript
// IBSheet7의 Level 데이터 구조를 변경해 줌.
sheet.loadSearchData( IBSheet.v7.convertTreeData(jsonData) );
```

## 6. 기타 <a name="chapter-6"></a>

### Status 타입 마이그레이션 <a name="mig-status-type"></a>
ibsheet7에서 행의 상태를 보여주는 "Status"타입이 ibsheet8에는 없고, 행에 대한 추가,삭제,수정시 자동으로 관리됩니다. (행 객체 안에 Added,Deleted,Changed 속성이 추가됨)

그리고 상태에 따라 기본적으로 행의 색상이 변경됩니다. (파랑:신규,분홍:삭재,노랑:수정)

만약 ibsheet7처럼 상태를 보여주는 컬럼을 만들고자 하시는 경우에는 `IBSheet-common.js` 파일에 `IB_Preset.STATUS`를 (Col)[Extend](/docs/props/col/extend)하시면 됩니다.

```javascript
var initSheet = {
    Cols:[
        //Status 열처럼 동작하는 열을 만든다.
        {
            Header: "상태",
            Name: "RStatus",
            Extend: IB_Preset.STATUS
        }
    ]
};
```
참고
- 위 IB_Preset.STATUS의 내용을 ibsheet-common.js 에 찾아보면 [Formula (col)](/docs/props/col/formula)를 사용하므로 [Def/Row](/docs/appx/init-structure)에 [CanFormula (row)](/docs/props/row/can-formula) 속성이 1로 설정하고 [CalcOrder (row)](/docs/props/row/calc-order) 속성이 설정 되어야 합니다.
- 저장 시 [Formula (col)](/docs/props/col/formula)로 `STATUS` 데이터 값이 변경되므로 `local/언어.js` 파일 안에 문자열(`"ReqStatusAdded": "Added"`(I), `"ReqStatusChanged": "Changed"`(U), `"ReqStatusDeleted": "Deleted"`(D), `"ReqStatusEmpty": ""`(R))을 수정해야 합니다.
- IBSheet7의 `Cfg.ImageStatus` 속성처럼 상태를 별도 이미지로 표시하고자 하는 경우에는 [Format (col)](/docs/props/col/format)에서 입력,수정,삭제 대신 해당 이미지를 넣어 주시면 됩니다.

```js
Format:{"I":"<img src='../images/added.gif'>","U":"<img src='../images/changed.gif'>","D":"..."}
```

### DelCheck 타입 마이그레이션 <a name="mig-del-check-type"></a>
열 생성시 [OnChange (json event)](/docs/props/event/on-change)를 통해 값에 따라 행의 상태를 변경하는 로직을 넣어 줍니다.

`IBSheet-common.js` 파일에 `IB_Preset.DelCheck`를 (Col)[Extend](/docs/props/col/extend)하시면 됩니다.

```javascript
var initSheet = {
    Cols:[
        //DelCheck 열 처럼 동작하는 열을 만든다.
        {
            Header:"삭제",
            Name:"DEL",
            Extend: IB_Preset.DelCheck
        }
    ]
};
```
### Combo,ComboEdit 타입 마이그레이션 <a name="mig-combo-combo-edit-type"></a>
`Combo` 타입은 [Enum](/docs/appx/type)타입으로 변경되었고, `ComboText`, `ComboCode`는 각각 [Enum (col)](/docs/props/col/enum), [EnumKeys (col)](/docs/props/enum-keys) 속성으로 변경되었습니다.

```javascript
//AS-IS
{Header:"직급", Type:"Combo", SaveName:"Position", ComboText:"사원|대리|과장|차장|부장", ComboCode:"A0|A1|B0|B1|B3"}
```
```javascript
//TO-BE (Enum,EnumKeys속성의 첫번째 글자가 구분자로 사용됨을 주의)
{Header:"직급", Type:"Enum", Name:"Position", Enum:"|사원|대리|과장|차장|부장", EnumKeys:"|A0|A1|B0|B1|B3"}
```

`ComboEdit`는 [Defaults (col)](/docs/props/col/defaults), [Format (col)](/docs/props/col/format), [EditFormat (col)](/docs/props/col/edit-format), [Suggest (col)](/docs/props/col/suggest) 속성을 사용하여 유사하게 동작하는 열을 만드실 수 있습니다.
```javascript
//AS-IS
{Header:"직급", Type:"ComboEdit", SaveName:"Position", ComboText:"사원|대리|과장|차장|부장|이사|상무|사장", ComboCode:"A0|A1|B0|B1|B3|C0|C1|C2"}
```

```javascript
//TO-BE
var comboText = "사원|대리|과장|차장|부장|이사|상무|사장";
var comboCode = "A0|A1|B0|B1|B3|C0|C1|C2";

{
    Header:"직급", Type:"Text", Name:"Position",
    Button: "Defaults",
    // 화면에 표시될 셀 값의 Format 형태를 설정. 값이 A0면 "사원"이 화면에 표시
    Format: {
        "A0": "사원",
        "A1": "대리",
        "B0": "과장",
        "B1": "차장",
        "B3": "부장",
        "C0": "이사",
        "C1": "상무",
        "C2": "사장"
    },
    // 셀 편집시 화면에 표시될 Format 형태를 설정
    EditFormat: {
        "A0": "사원",
        "A1": "대리",
        "B0": "과장",
        "B1": "차장",
        "B3": "부장",
        "C0": "이사",
        "C1": "상무",
        "C2": "사장"
    },
    Suggest:"|"+comboText,  // 입력시 아이템 필터링
    Defaults: "|"+comboCode // 셀 선택시 기본값
}
```
위와 같이 설정하면 사용가능합니다. `ComboEdit` 사용은 [onBeforeCreate (static)](/docs/static/on-before-create)이벤트에서 공통으로 설정하여 사용하시기 바랍니다.


### AcceptKeys,ExceptKeys 마이그레이션 <a name="mig-accept-keys-except-keys"></a>

`AcceptKeys`와 `ExceptKeys`는 둘다 특정 문자에 대한 입력만 허용하거나 불허하는 기능입니다.
IBSheet7에서는 `E(영문)`, `N(숫자)`, `K(한글)` 와 같은 예약어와 함께 특정 원하는 문자를 다음과 같이 설정하였습니다.

```javascript
//AS-IS
var Cols = [
    //AcceptKeys 예          영문자,숫자,-(기호)만 허용
    {Type:"Text", Name:"SA_NO", AcceptKeys:"E|N|[-]" },

    //ExceptKeys 예          영문자와 !,@,# 는 입력 불가
    {Type:"Text", Name:"SA_PRT", ExceptKeys:"E|[!@#]" }
];
```

```javascript
///TO-BE
opt.Cols = [
    //AcceptKeys 대신 EditMask를 이용하여 영문자,숫자,-(기호)만 허용
    {Type:"Text", Name:"SA_NO", EditMask:"^[a-zA-Z|\\d|\\-]*$" },

    //ExceptKeys 대신 EditMask를 이용하여 영문자와 !,@,# 는 입력 불가
    {Type:"Text", Name:"SA_PRT", EditMask:"^[^a-zA-Z|^!|^@|^#]*$" }
];
```
정규식에 익숙하지 않다면 [onBeforeCreate (static)](/docs/static/on-before-create)에서 공통로직을 통해 기존에 설정한 `AcceptKeys`, `ExceptKeys`를 자동으로 [EditMask (col)](/docs/props/col/edit-mask)로 변환하게 할 수도 있습니다.

아래 로직을 참고해 주세요.

```javascript
//시트 생성 직전에 발생하는 이벤트(IBSheet.create함수에 넣은 인자가 opt안에 모두 들어있음.)
IBSheet.onBeforeCreate = function(opt){
    var acceptExceptKeysMig = function(Cols){

        for(var i = 0; i < Cols.length; i++) {
            var c = Cols[i];

            //EditMask를 통해 AcceptKeys를 유사하게 구현한다.
            if (c["AcceptKeys"]) {

                var setV = c["AcceptKeys"];
                var acceptKeyArr = setV.split("|");
                var mask = "";

                for (var i = 0; i < acceptKeyArr.length; i++) {
                    switch (acceptKeyArr[i]) {
                    case "E":
                        mask += "|a-zA-Z";
                        break;
                    case "N":
                        mask += "|\\d";
                        break;
                    case "K":
                        mask += "|\\u3131-\\u314e\\u314f-\\u3163\\uac00-\\ud7a3";
                        break;
                    default:
                        if (acceptKeyArr[i].substring(0, 1) == "[" && acceptKeyArr[i].substring(acceptKeyArr[i].length-1) == "]") {
                            var otherKeys = acceptKeyArr[i].substring(1, acceptKeyArr[i].length-1);
                            for (var x = 0; x < otherKeys.length; x++) {
                                if ([".","-","$","^","*","+","|","(",")"].indexOf(otherKeys[x]) > -1) {
                                    mask += "|\\" + otherKeys[x];
                                } else {
                                    mask += "|" + otherKeys[x];
                                }
                            }
                        }
                        break;
                    }
                }
                c.EditMask = "^[" + mask.substring(1) + "]*$";

            //EditMask를 통해 ExceptKeys를 유사하게 구현한다.
            } else if(c["ExceptKeys"]) {

                var setV = c["ExceptKeys"];
                var acceptKeyArr = setV.split("|");
                var mask = "";

                for (var i = 0; i < acceptKeyArr.length; i++) {
                    switch (acceptKeyArr[i]) {
                    case "E":
                        mask += "|^a-zA-Z";
                        break;
                    case "N":
                        mask += "|^\\d";
                        break;
                    case "K":
                        mask += "|^\\u3131-\\u314e\\u314f-\\u3163\\uac00-\\ud7a3";
                        break;
                    default:
                        if (acceptKeyArr[i].substring(0, 1) == "[" && acceptKeyArr[i].substring(acceptKeyArr[i].length-1) == "]") {
                            var otherKeys = acceptKeyArr[i].substring(1, acceptKeyArr[i].length-1);
                            for (var x = 0; x<otherKeys.length; x++) {
                                if ([".","-","$","^","*","+","|","(",")"].indexOf(otherKeys[x]) > -1) {
                                    mask += "|^\\" + otherKeys[x];
                                } else {
                                    mask += "|^" + otherKeys[x];
                                }
                            }
                        }
                        break;
                    }
                }
                c.EditMask = "^[" + mask.substring(1) + "]*$";
            }
        }
    }

    acceptExceptKeysMig(opt.options.Cols);
    if(opt.options.LeftCols) acceptExceptKeysMig(opt.options.LeftCols);
    if(opt.options.RightCols) acceptExceptKeysMig(opt.options.RightCols);

    //반드시 수정된 opt를 리턴해야 시트가 만들어짐.
    return opt;
}
```



### MaximumValue,MinimumValue 마이그레이션

[IBSheet.onBeforeCreate](../static/on-before-create) 이벤트에서 [onEndEdit](../events/on-end-edit) 이벤트를 공통 정의 함으로써 구현 가능합니다. 

아래 내용을 참고해 주세요.
1. ibsheet-common.js 에 onBeforeCreate 이벤트를 다음과 같이 정의 합니다.
```js
_IBSheet.onBeforeCreate = function(init) {
    //event 공통 정의
    init.options.Events = init.options.Events || {};
    
    // 개별 화면에서 선언한 onEndEdit가 있는 경우, orgEndEdit에 저장
    if(typeof init.options.Events.onEndEdit != "undefined") {
      init.options.Events.orgEndEdit = init.options.Events.onEndEdit;
    }

    // onEndEdit 이벤트 공통 정의
    init.options.Events.onEndEdit = function(evt) {
      // 컬럼에 MinimumValue 가 정의 돈 경우
      if (typeof evt.sheet.Cols[evt.col].MinimumValue != "undefined") {
        if (evt.sheet.Cols[evt.col].MinimumValue > Number(evt.raw)) {
          alert(
            "입력 가능한 최소값은" +
              evt.sheet.Cols[evt.col].MinimumValue +
              "입니다."
          );
          // 편집창을 빠져나가지 못하게 함
          return true;
        }
      }

      // 컬럼에 MaximumValue가  정의 된 경우
      if (typeof evt.sheet.Cols[evt.col].MaximumValue != "undefined") {
        if (evt.sheet.Cols[evt.col].MaximumValue < Number(evt.raw)) {
          alert(
            "입력 가능한 최대값은" +
              evt.sheet.Cols[evt.col].MaximumValue +
              "입니다."
          );
          return true;
        }각 셀(cell)에서 사용가는한 속성 형태로 변경
      }

      // 개별화면에서 정의한 onEndEiddt가 있는 경우
      if(typeof init.options.Events.orgEndEdit != "undefined") {
        return init.options.Events.orgEndEdit(evt)
      }
    }
    return init;
  }
```
 
2. 시트 생성시 IBSheet7 제품과 동일하게 MaximumValue, MinimumValue를 정의하여 사용합니다.
```js
const initSheet = {
    Cols:[
        {Header:"이익", Type: "Int", Name:"income", MinimumValue:1000 }, // 값은 1000 이상 입력 가능
        {Header:"손해", Type: "Int", Name:"loss", MaximumValue:0 }  // 값은 0 이하 입력 가능
        ...
    ]
}
IBSheet.create({
    id: "mySheet",
    el: "sheetDIV",
    options: initSheet
})

```