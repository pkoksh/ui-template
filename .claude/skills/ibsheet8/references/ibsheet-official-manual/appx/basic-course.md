---
KEY: basicCourse
KIND: appendix
PATH: appx/basic-course
ALIAS: 기초, 개발자, 교육, 시트에, 여러개의
ALIAS_EN: basic, course
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/appx/basic-course
---
# 기초 개발자 교육  ***(appendix)***

목차
1. 제품 파일 구성
2. 기본 시트 생성 방법
3. 함수와 이벤트
4. 시트 구조 이해 (<a href="../../#docs/start/basic-structure" target="_blank">Header, Head, Body, Foot, Solid</a>)
5. <a href="../../#docs/start/basic-structure" target="_blank">Def</a> 와 `ibsheet-common.js`
6. 렌더링과 데이터 로드
7. 데이터 추출과 저장
8. Formula 기능 사용
9. <a href="../../#docs/appx/solid" target="_blank">Solid (appendix)</a>, <a href="../../#docs/appx/menu" target="_blank">Menu (appendix)</a>, 달력 기능
10. 커스텀 다이얼로그 기능 사용
11. 파일 export/import 기능 사용
12. FAQ


## 1. 제품 파일 구성
IBSheet8 기본 파일 구성에 대해 설명하고(<a href="../../#docs/intro/files" target="_blank">참고</a>), `plugins 파일` 3개의 역할을 설명합니다.

## 2. 기본 시트 생성 방법
간단하게 javascript를 이용하여 시트 객체를 생성하는 방법을 설명합니다.(<a href="../../#docs/start/quick-start" target="_blank">참고</a>)
```javascript
var OPT = {
	Cfg:{
		Alternate:2, HeaderMerge:3
	},
	LeftCols:[
		{ Header: "No", Name: "SEQ", Type: "Text", Width:40, Align:"Center"},
	],
	Cols:[
		{ Header: "이름", Name: "sa_nm", Type: "Text", Width:80},
		{ Header: "성별", Name: "sa_gender", Type: "Enum", Enum:"|남|여",EnumKeys:"|M|F", MinWidth:50},
		{ Header: "사원번호", Name: "sa_id", Type: "Text", Align: "center", Width:70,Size:6,EditMask:"^\\d*$"},
		{ Header: "부서", Name: "sa_dept", Type: "Enum", Enum: "|경영지원|총무|인사|설계|시공1|시공2", EnumKeys: "|01|02|03|04|05|06",Width:80 },
		{ Header: "직급", Name: "sa_position", MinWidth:60, MaxWidth:60, Type: "Enum", Enum: "|대표|상무|이사|부장|차장|과장|대리|사원", EnumKeys: "|A1|A2|A3|B0|B1|C4|C5|C6"},
		{ Header: "입사일",	Name: "sa_enterdate", Type: "Date", Width:100, Format: "yyyy/MM/dd", DataForamt:"yyyyMMdd", EditFormat:"yyyy-MM-dd"},
		{ Header: "급여", Name: "sa_salary", Type: "Int", Width:80},
		{ Header: "퇴직여부", Name: "sa_retire", Type: "Radio", Enum:"|퇴직|재직", EnumKeys:"|Y|N",Align:"center",MinWidth:125},
		{ Header: "비고", Name: "sa_desc", Type: "Lines", RelWidth:1 }
	]
};

IBSheet.create({
	id:"mySheet",   //생성하는 시트 이름
	el:"sheet_DIV", //시트가 생성될 div 객체 id
	options:OPT     //ibsheet 기본 설정
});
```

## 3. 함수와 이벤트
ibsheet 함수 와 이벤트에 대한 기본적인 사용법을 설명합니다.
#### 1) <a href="../../#docs/funcs/method" target="_blank">기본적인 함수 사용 방법</a>

- 자주 사용되는 함수

|함수명|기능설명|
|---|---|
|<a href="../../#docs/funcs/core/get-value" target="_blank">getValue</a>|셀의 값을 얻음|
|<a href="../../#docs/funcs/core/set-value" target="_blank">setValue</a>|셀의 값을 수정|
|<a href="../../#docs/funcs/core/get-string" target="_blank">getString</a>|포멧이 적용된 셀의 값을 얻음|
|<a href="../../#docs/funcs/core/set-string" target="_blank">setString</a>|포멧을 포함한 문자열로 셀값을 수정|
|<a href="../../#docs/funcs/core/set-all-check" target="_blank">setAllCheck</a>|bool타입 컬럼에서 전체 체크|
|<a href="../../#docs/funcs/core/get-attribute" target="_blank">getAttribute</a>|행,열,셀의 속성을 얻음|
|<a href="../../#docs/funcs/core/set-attribute" target="_blank">setAttribute</a>|행,열,셀의 속성을 수정|
|<a href="../../#docs/funcs/core/add-row" target="_blank">addRow</a>|행 추가|
|<a href="../../#docs/funcs/core/delete-row" target="_blank">deleteRow</a>|행 삭제|
|<a href="../../#docs/funcs/core/remove-all" target="_blank">removeAll</a>|전체 데이터 제거|
|<a href="../../#docs/funcs/core/dispose" target="_blank">dispose</a>|시트객체 초기화|
|<a href="../../#docs/funcs/core/focus" target="_blank">focus</a>|특정 위치로 포커스 이동|
|<a href="../../#docs/funcs/core/do-dort" target="_blank">doSort</a>|특정 컬럼 소팅|
|<a href="../../#docs/funcs/core/do-filter" target="_blank">doFilter</a>|특정 컬럼 필터링|
|<a href="../../#docs/funcs/core/make-sub-total" target="_blank">makeSubTotal</a>|소계 삽입 기능|
|<a href="../../#docs/funcs/core/version" target="_blank">version</a>|제품의 버젼확인|


#### 2) <a href="../../#docs/events/event" target="_blank">이벤트 사용 방법</a>

- 자주 사용되는 이벤트

|이벤트명|기능설명|
|---|---|
|<a href="../../#docs/events/on-after-click" target="_blank">onAfterClick</a>|클릭시 발생 이벤트|
|<a href="../../#docs/events/on-dbl-click" target="_blank">onDblClick</a>|더블클릭시 발생 이벤트|
|<a href="../../#docs/events/on-before-change" target="_blank">onBeforeChange</a>|셀 값이 수정되기 전 발생 이벤트|
|<a href="../../#docs/events/on-after-change" target="_blank">onAfterChange</a>|셀의 값이 수정된 후 발생 이벤트|
|<a href="../../#docs/events/on-focus" target="_blank">onFocus</a>|시트 내에 포커스가 이동될때 발생 이벤트|
|<a href="../../#docs/events/on-render-first-finish" target="_blank">onRenderFirstFinish</a>|시트 객체가 최초 생성되었을 때 발생 이벤트|

#### 3) JSON 이벤트 (Properties/Event)
- 특정 행이나 열 혹은 셀에 이벤트 정의(<a href="../../#docs/props/event/on-change" target="_blank">참고</a>)

## 4. 시트 구조 이해
아이비시트 각 구조 (헤더, 헤드, 바디, 풋)에 대해 이해하고, 행/열 객체에 대해 설명합니다.


![구조](/assets/imgs/structure.png "시트 구조")
<!-- IMAGE: 스크린샷/예시 이미지 - 구조 -->

#### 1) 헤더행
##### 가. 여러개 헤더행 만들기, 배경색, 글자색, 내용 변경하기
> 시트에 여러개의 헤더행을 생성할 수 있습니다.

> 헤더행은 생성 후에도 타이틀을 변경하거나, 속성(글자색,배경색 등)을 변경할 수 있습니다.

```
┌────────┬──────┬──────┬──────┬─────────────────┬─────────────┐
│        │      │ 신청 │ 신청 │     근태기간    │   시간      │ 
│ 신청인 │ 선택 │ 사유 │ 금액 ├────────┬────────┼──────┬──────┤
│        │      │      │      │ 시작일 │ 종료일 │ 시작 │ 종료 │
└────────┴──────┴──────┴──────┴────────┴────────┴──────┴──────┘
```
위와 같은 구조의 두줄 헤더행을 생성시 로직

```javascript
//시트 생성부
options.Cols = [
	{ Header : ["신청인", "신청인"], Type : "Text", Name : "userName"},  
	{ Header : ["선택", "선택"], Type : "Bool", Name: "CHK"} 
	{ Header : ["신청\n사유", "신청\n사유"], Type : "Text", Name : "reason"},  
	{ Header : ["신청\n금액", "신청\n금액"], Type : "Int", Name : "amtReq"},  
	{ Header : ["근태기간", "시작일"], Type : "Date", Name : "startWD"},  
	{ Header : ["근태기간", "종료일"], Type : "Date", Name : "endWD"},  
	{ Header : ["시간", "시작"], Type : "Date", Name : "startHm", Format: "HH:mm"},  
	{ Header : ["시간", "종료"], Type : "Date", Name : "endHm", Format: "HH:mm"}  
];
```
##### 나. 헤더행에 디자인 속성(배경색, 글자색 등) 적용하기
> 메뉴얼 Properties > Cell 의 속성을 헤더셀에 적용합니다.
```javascript
//시트 생성부
options.Cols = [
	// 글자색을 빨간색으로 설정하고 폰트를 굵게 변경
	{ Header : [{Value: "라인번호", TextColor: "red", TextStyle: 1}], Type : "Text", Name : "lineNo"},  
	// 배경색을 하늘색으로 변경하고 타이틀 앞에 icon을 추가한다.
	{ Header : [{Value: "생산자ID", Color: "#adceffff", HtmlPrefix: "<i class='fa-solid fa-person-digging'></i>"}], Type : "Text", Name: "userId"} 
	...
];
```

##### 다. 생성된 헤더행 수정하기
> 생성된 헤더행에 접근하여 값이나 속성을 변경할 때는 id를 통해 헤더행에 접근해야 합니다.

> 첫번째 헤더행의 id는  `Header` 이고, 2번째 헤더행부터는 `HR1,HR2,HR3 …` 식으로 id를 갖습니다.
```javascript
	const firstHeaderRow = mySheet.getRowById("Header"); //첫번째 헤더행을 얻는다.

  //생성 후 해더 내용/속성 변경하기
	sheet.setValue(firstHeaderRow , "sa_nm" , "사원정보", 1 );//첫번째 헤더행 내용 변경
	sheet.setAttribute({row:sheet.getRowById("HR1"),attr:"Color",val:"#FFED37"}); //두번째 해더행의 배경색 변경
	sheet.setValue(sheet.getRowById("HR2"), "sa_nm" , "사원명"); //세번째 해더행의 내용 변경
```
****


#### 2) 행 객체에 대한 접근 및 값 확인(<a href="../../#docs/start/row" target="_blank">참고</a>)

> ***시트 내에 모든 행은 `id`를 갖고 있고, 이 `id`를 통해 접근할 수 있습니다.***

> 첫번째 헤더행의 `id`는 `Header`이고 두번째 이후부터는 **HR1, HR2..** 식으로 자동 부여됩니다.

> 데이터 행의 `id`는 생성 순서대로 **AR1, AR2, AR3...** 식으로 자동 부여됩니다.

> 이외에 필터행은 `Filter`, 합계행은 `FormulaRow`등의 이름을 갖고 있습니다.

> Head,Foot,Solid등의 행을 만들때는 직접 `id`를 지정하실 수 있습니다.


```javascript
/**  행 객체 얻기 **/
//첫번째 데이터 행
var headerRow = sheet.getFirstRow();
//포커스 행
var focusRow = sheet.getFocusedRow();
//포커스된 행의 아래 행
var nrow = sheet.getNextRow(  sheet.getFocusedRow() );
//포커스된 행의 위 행
var nrow = sheet.getPrevRow(  sheet.getFocusedRow() );
//10번째 데이터 행
var row = sheet.getRowByIndex( 10 );
//합계행
var sumRow = sheet.getRowById("FormulaRow");

//전체 데이터 행 얻기
var dataRows = sheet.getDataRows();
//현재 보여지는 행 얻기
var dataRows = sheet.getShownRows();

/** 행 객체 내에 값 확인 및 수정**/
var edit = sheet.getRowById("AR2").CanEdit;
var edit = sheet.getAttribute(sheet.getFocusedRow() , null , "CanEdit" );

sheet.setAttribute(sheet.getFocusedRow(), null, "Color" , "#FF0000",0);
```


#### 3) 열 속성 변경(<a href="../../#docs/start/col" target="_blank">참고</a>)

> 시트 생성 시 Cols 속성을 통해 설정되는 컬럼에는 반드시 Name과 Type을 지정해 주셔야 합니다.

> 시트가 생성된 이후에는 각 컬럼에 부여한 Name을 기준으로 컬럼의 속성을 확인하거나 변경할 수 있습니다.

다음과 같은 Name은 예약어로 사용에 주의가 필요합니다. (대/소문자 유의)
|예약어|용도|
|------|---|
|SEQ|Type과 무관하게 자동으로 증가하는 숫자형식으로 동작 (모든 시트에는 SEQ가 존재)|
|id|<mark>모든 행은 고유한 **id**가 있으므로 **id**를 별도로 컬럼이름으로 사용 불가</mark>
(조회데이터에 "`id`"가 포함된 경우 `"___id"`로 조회됨.)|
|STATUS|[getSaveJson()](/docs/funcs/core/get-save-json), [doSave()](/docs/funcs/core/do-save) 등 저장함수 호출시 자동으로 서버로 전송되는 상태값으로 사용|

```javascript
//모든 컬럼명 얻기
var cols = sheet.getCols();

//컬럼 속성 확인
var color = sheet.getAttribute(null, "saID", "Color");

//컬럼 속성 변경
sheet.setAttribute({col:"AMT_12",attr:"CanEdit",val:0});
```

#### 4) 헤드,풋 추가해 보기
헤더와 데이터 영역 사이나 데이터행 하단에 고정된 행을 설정할 수 있습니다.
```javascript
var OPT = {
	//상단 고정행
	Head : [
		{
			id:"HEAD1",Kind:"Head",CanEdit:0,
			sa_salary:"",sa_salaryType:"Text",sa_retire:"퇴직자만 보기",sa_retireType:"Text",sa_descType:"Bool",sa_descAlign:"left",sa_descCanEdit:1,
			sa_descOnChange:function(evt){
				if(evt.row[evt.col]){
					evt.sheet.setFilter({name:"myFilter",filter:"sa_retire=='Y'?1:0",render:1});
				}else{
					evt.sheet.clearFilter();
				}
			}
		}
	],
	//하단 고정행
	Foot : [
		{id:"FOOT1",Kind:"Foot",sa_desc:"2019년 자료",CanEdit:0,Color:"#FFDDEE"}
	]
}
```

## 5. 공통 기능 정의 (Def 와 ibsheet-common.js)
#### 1) <a href="../../#docs/appx/init-structure" target="_blank">Def</a> 의 역할
시트 내에 모든 행이나 열에 공통 기능을 설정 할 수 있습니다.

options.Def.Col을 통해 특정 속성을 모든 열에 설정해도, options.Cols를 통해 개별 열에 동일한 속성이 설정된 경우 개별 열에 설정된 값이 우선됩니다.

#### 2) <a href="../../#docs/static/common-options" target="_blank">CommonOptions</a> 속성과 <a href="../../#docs/static/on-before-create" target="_blank">onBeforeCreate</a>  함수 사용
시스템 내에 모든 시트에 공통 기능을 설정 할 수 있습니다.

CommonOptions를 통해 설정된 값보다 개별 시트에서 설정한 값이 우선되고, 이보다 onBeforeCreate 함수를 통해 설정된 값이 가장 우선됩니다.

IBSheet.CommonOptions 는 ibsheet-common.js 에 정의되어 있습니다.

#### 3) IB_Preset 과 <a href="../../#docs/props/col/extend" target="_blank">Extend</a>
열에 설정되는 여러가지 속성을 변수에 담아두었다가, Extend 속성을 동일한 기능을 하는 열을 손쉽게 생성할 수 있습니다.

IB_Preset 변수는 ibsheet-common.js 파일에 정의 되어 있습니다.



## 6. 렌더링 과 데이터 로드
#### 1) 시트 내 값 변경과 렌더링

시트 내에 값을 변경하거나 색상을 변경하는 등 화면에 변화를 일으키는 경우 렌더링 타이밍에 주의하여야 합니다.

```javascript
//여러번 렌더링이 일어나는 로직
var drows = sheet.getDataRows();
for(var i=0;i<drows.length;i++){
	sheet.setValue(drows[i], "DWT" , "사용불가");
	sheet.setAttribute( {row:drows[i],attr:"Color","#FF0000"});
}

//단 한번만 렌더링이 일어나는 로직
var drows = sheet.getDataRows();
for(var i=0;i<drows.length;i++){
	//setValue나 setAttribute에 render인자값을 0으로 설정(값의 수정이 있어도 화면에 반영되지 않음)
	sheet.setValue(drows[i], "DWT" , 0 , 0 );
	sheet.setAttribute( {"row":drows[i],attr:"Color","#FF0000","render":0});
}
//최종 변경된 내용이 화면에 표시됨.
sheet.rerender();
```

다양한 렌더링 함수 참고

- 시트 전체 렌더링 : <a href="../../#docs/funcs/core/rerender" target="_blank">rerender()</a>
- 데이터 영역만 렌더링 : <a href="../../#docs/funcs/core/render-body" target="_blank">renderBody()</a>
- 특정 행 하나만 렌더링 : <a href="../../#docs/funcs/core/refresh-row" target="_blank">refreshRow()</a>
- 특정 셀 하나만 렌더링 : <a href="../../#docs/funcs/core/refresh-cell" target="_blank">refreshCell()</a>

#### 2) 조회 / 데이터 로드 함수 이용

시트내에  데이터  로딩은 <a href="../../#docs/props/cfg/search-mode" target="_blank">SearchMode</a> 설정에 따라 달라집니다.

|유형|함수명|기능설명|
|---|---|---|
|기본 조회|<a href="../../#docs/funcs/core/do-search" target="_blank">doSearch</a>|지정한 URL을 호출하여 리턴된 json을 시트에 로딩합니다.|
|페이징 조회|<a href="../../#docs/funcs/core/do-search-paging" target="_blank">doSearchPaging</a>|페이징 조회(cfg:{SearchMode:3 or 4}) 사용시 지속적으로 호출할 서버 URL을 설정합니다.|
|데이터 로드|<a href="../../#docs/funcs/core/load-search-data" target="_blank">loadSearchData</a>|json 데이터(string혹은 object)를 시트에 로딩합니다.|
**위 함수는 모두 비동기 형식입니다.**

#### 3) 관련 이벤트

조회/데이터 로딩 과정에서 다음과 같은 이벤트가 발생합니다. (중간에 렌더링함수는 제외)
|순서|이벤트명|기능설명|
|---|---|---|
|1|<a href="../../#docs/events/on-receive-data" target="_blank">onReceiveData</a>|데이터 파싱 직전에 발생합니다. 로드 될 데이터를 조작할 수 있습니다.|
|2|<a href="../../#docs/events/on-before-data-load" target="_blank">onBeforeDataLoad</a>|json 데이터 파싱 후 발생합니다. 파싱된 json 데이터를 조작할 수 있습니다.|
|3|<a href="../../#docs/events/on-data-load" target="_blank">onDataLoad</a>|화면에 렌더링 전에 발생합니다.|
|4|<a href="../../#docs/events/on-search-finish" target="_blank">onSearchFinish</a>|데이터에 대한 렌더링이 끝나고, 모든 조회 절차가 끝난 후에 발생합니다.|

#### 4) 데이터 구조

<a href="../../#docs/appx/data-structure" target="_blank">조회/저장 데이터 구조 참고</a>
```javascript
//일반적인 조회 데이터 구조
{"data":[
	{"colName1":"1234", "colName2":"abcd","colName3":"가나다라"},
	{"colName1":"1234", "colName2":"abcd","colName3":"가나다라"},
	....
]}
```
## 7. 데이터 추출과 저장
#### 1) 데이터 추출 함수

다음과 같은 함수를 통해 시트내에 데이터를 추출할 수 있습니다.

|함수명|기능설명|
|---|---|
|<a href="../../#docs/funcs/core/do-save" target="_blank">doSave</a>|시트에서 변경된 내용을 추출하여 서버로 전송하고, 서버에서 응답 JSON 내용에 따라 시트에 반영합니다.|
|<a href="../../#docs/funcs/core/get-save-string" target="_blank">getSaveString</a>|시트 내에 수정된 내용을 행단 위로 querystring형식으로 추출하여 리턴합니다.|
|<a href="../../#docs/funcs/core/get-save-json" target="_blank">getSaveJson</a>|시트 내에 수정된 내용을 행단 위로 json형식으로 추출하여 리턴합니다.|


#### 2) 행,셀안에 데이터 수정 정보 확인

- 수정된 행 객체를 얻음

<a href="../../#docs/funcs/core/get-rows-by-status" target="_blank">getRowsByStatus()</a>함수를 수정,삭제,입력 에 따라 필요한 행 객체를 추출할 수 있습니다.

- 수정된 값이 1개라도 존재하는지 여부 확인

<a href="../../#docs/funcs/core/has-changed-data" target="_blank">hasChangedData()</a>함수를 통해 true/false로 판별할 수 있습니다.

- 특정 행의 수정여부를 확인
```javascript
var row = getRowByIndex(55);
if(row["Changed"]){
	//해당 행은 수정된 내용이 있음.
}
if(row["Added"]){
	//신규로 추가된 행임.
}
if(row["Deleted"]){
	//삭제 예정행임
}
```
- 특정 셀의 수정여부 및 수정 전 값을 확인
```javascript
var row = sheet.getFocusedRow();
//Name이 AMT인 컬럼의 수정 여부 확인
if(row["AMTChanged"]){//수정됨.
	//수정 전 값 확인
	var oldValue = row["AMTOrgi"];
}
```
 - 수정한 내용 시트에 반영

 <a href="../../#docs/funcs/core/accept-changed-data" target="_blank">acceptChangedData()</a>,  <a href="../../#docs/funcs/core/apply-save-result" target="_blank">applySaveResult()</a> : 수정된 데이터를 시트에 반영합니다. 

 (Deleted속성을 갖고 있는 행은 삭제하고, Added,Changed 속성은 행에서 제거합니다.)

#### 3) 저장 함수 사용

<a href="../../#docs/funcs/core/do-save" target="_blank">doSave()</a> : 수정된 내용을 지정한 URL로 전송하고, 리턴된 결과에 따라 내용을 반영합니다.

doSave함수는 getSaveString(데이터 취합), ajax(데이터 전송), acceptChangedData(상태 클리어) 함수가 순차적으로 동작합니다.

doSave함수 사용시 리턴 json 형식(<a href="../../#docs/appx/data-structure" target="_blank">참고</a>)
```javascript
{
	"IO":{
		"Result":1, "Message":"저장되었습니다."
	}
}
```

#### 4) 저장 관련 이벤트

|순서|이벤트명|기능설명|
|---|---|---|
|1|<a href="../../#docs/events/on-save" target="_blank">onSave</a>|doSave함수 호출시 발생합니다.|
|2|<a href="../../#docs/events/on-before-save" target="_blank">onBeforeSave</a>|doSave함수를 통해 수정한 데이터가 서버로 전송되기 전에 발생합니다.|
|3|<a href="../../#docs/events/on-after-save" target="_blank">onAfterSave</a>|서버에서 저장에 대한 결과를 받은 후 발생합니다.|

## 8. formula 기능
#### 1) 합계 행 생성

컬럼 생성시 <a href="../../#docs/props/col/formula-row" target="_blank">FormulaRow</a>를 통해 하단에 합계행을 생성할 수 있습니다.

합계행에는 일반적인 컬럼의 합계 값 외에 평균이나 건수 등의 계산값도 표시 할 수 있습니다.

#### 2) 컬럼 간의 연산

컬럼과 컬럼 간의 계산 결과를 표시하기 위한 <a href="../../#docs/props/col/formula" target="_blank">Formula</a>기능을 제공합니다.

<a href="../../#docs/props/col/formula" target="_blank">Formula</a>속성이 설정된 컬럼은 사용자의 편집이 불가하고 자동 계산된 값을 표시합니다.

자세한 내용은 appendix의 <a href="../../#docs/appx/formula" target="_blank">Formula</a>를 참고해 주세요.

#### 3) 속성에 대한 변경

컬럼의 속성을 변경하는 <a href="../../#docs/props/col/attribute-formula" target="_blank">Attribute+Formula</a> 기능을 제공합니다.

<mark>**Formula**나 **Attribute+Formula** 기능을 사용하는 경우에는 반드시 <a href="../../#docs/props/row/can-formula" target="_blank">CanFormula</a>, <a href="../../#docs/props/row/calc-order" target="_blank">CalcOrder</a> 속성이 Def.Row에 설정되어야 합니다.</mark>

## 9. solid,contextmenu 기능
#### 1) solid 행 이해

시트 내에 독립적인 기능을 수행하는 행을 추가할 수 있습니다.

appendix에 <a href="../../#docs/appx/solid" target="_blank">solid</a>를 참고해 주세요.

#### 2) menu 기능 활용

마우스 우측 버튼 클릭시 표시되는 컨텍스트 메뉴를 설정할 수 있습니다.

appendix에 <a href="../../#docs/appx/menu" target="_blank">menu</a>를 참고해 주세요.

## 10. 커스텀 다이얼로 기능 사용

**ibsheet-dialog.js** 파일을 통해 몇가지 다이얼로그 기능을 사용하실 수 있습니다.

(아래 기능을 사용하기 위해서는 반드시 ibsheet-dialog.js 파일이 해당화면에 include되어 있어야 합니다.)

|다이얼로그|함수명|역할|
|---|---|---|
|찾기|<a href="../../#docs/funcs/dialog/show-find-dialog" target="_blank">showFindDialog</a>|시트 내에 조회된 데이터에서 특정 문자를 찾거나, 표시합니다.|
|상세보기|<a href="../../#docs/funcs/dialog/show-edit-dialog" target="_blank">showEditDialog(rowObject,width,height)</a>|특정 행의 내용을 다이얼로그로 표시합니다.|
|피벗|<a href="../../#docs/funcs/dialog/show-pivot-dialog" target="_blank">showPivotDialog()</a>|시트의 각 컬럼의 Type에 따라 피벗 다이얼로그를 생성하여 표시합니다.|
|다운로드|<a href="../../#docs/funcs/dialog/show-download-dialog" target="_blank">showDownloadDialog()</a>|시트에 조회 된 내용 중 사용자가 원하는 행/열을 지정하여 다운로드 할 수 있습니다.|
|업로드|<a href="../../#docs/funcs/dialog/show-upload-dialog" target="_blank">showUploadDialog()</a>|엑셀의 내용을 시트에 로드하기 전에 미리보기 다이얼로그를 통해 사용자가 컬럼의 순서를 정할수 있습니다.|
|소트|<a href="../../#docs/funcs/dialog/show-sort-dialog" target="_blank">showSortDialog()</a>|다이얼로그를 통해 여러개 컬럼을 동시에 소팅 할 수 있습니다.|

## 11. 파일 export/import 기능 사용
파일을 export하거나 import 하는 방법은 크게 서버에서 수행하는 방법과 클라이언트에서 수행하는 방법으로 나누어 집니다.

### 서버에서 export/import 하는 방법 
서버에서 파일에 대한 import/export 작업을 위해서는 사전 작업이 필요합니다.

<a href="../../#docs/appx/import-export" target="_blank">엑셀 업로드/다운로드 설정하기</a> 부분을 참고 하시기 바랍니다.


- 엑셀 다운로드/업로드 기능

<a href="../../#docs/funcs/excel/down-to-excel" target="_blank">down2Excel()</a>, <a href="../../#docs/funcs/excel/load-excel" target="_blank">loadExcel()</a> 함수를 통해 데이터 다운로드,업로드를 하실 수 있습니다.

- 텍스트 다운로드/업로드 기능

<a href="../../#docs/funcs/excel/down-to-text" target="_blank">down2Text()</a>, <a href="../../#docs/funcs/excel/load-text" target="_blank">loadText()</a> 함수를 통해 데이터 다운로드,업로드를 하실 수 있습니다.

### 클라이언트에서 import/export 하는 방법
javascript를 이용하여 import/export 작업을 위해서는 아래와 같은 작업이 필요합니다.

#### 1) jszip.min.js 파일 추가하기
/plugins/jszip.min.js 파일을 추가 합니다.

#### 2) 다음 함수를 통해 import/export 기능 수행
- 엑셀,text 다운로드 기능

<a href="../../#docs/funcs/excel/exportData" target="_blank">exportData()</a>
- 엑셀,text 업로드 기능

<a href="../../#docs/funcs/excel/importData" target="_blank">importData()</a>


## 12. FAQ

- 시트에 버튼을 추가하거나 혹은 Click이벤트를 통해 layer형태의 팝업을 띄우는 경우, 파업 내에 시트나 input element에서 입력을 해도 계속 파업을 띄운 시트에서 입력이 이루어지는 문제.

시트를 클릭하여 팝업을 띄우는 경우, 시트는 아직까지 포커스를 자신이 갖고 있다고 판단하기 때문에 발생하는 문제입니다.

팝업을 띄울때, [blur()](/docs/funcs/core/blur)함수를 호출하여 더 이상 시트가 포커스를 잡지 않게 해야 합니다.

- 조회 직후 시트가 포커스를 가져가지 않게 하는 방법.

시트는 데이터를 로딩후 첫번째 행,첫번째 열에 포커스를 갖게 됩니다. 

만약 조회 후 포커스를 가져가지 않게 하려면 (cfg)[IgnoreFocused](/docs/props/cfg/ignore-focused) 속성을 1로 설정하시면 됩니다.

- 컬럼에 [Attribute+Formula](/docs/props/col/attribute-formula) 선언하니까 다른 [Formula](/docs/props/col/formula)까지 동작하지 않는 문제

Formula만 사용할때 계산 순서를 결정하는  [CalcOrder](/docs/props/row/calc-order)를 설정하지 않으면 컬럼명의 알파벳 순으로 자동 계산을 합니다. 하지만 Attribute+Formula가 사용되면 Attribute+Formula와 일반 Formula에 대한 연산 순서를 모두 CalcOrder에 정의하여야만 정상 작동하게 됩니다.

- 시트 생성후 조회를 했는데 오류가 나거나 조회가 간헐적으로 안되는 문제

시트 생성 이전에 조회함수를 호출하여 발생하는 경우가 많습니다. 시트 생성이 비동기 형태이기 때문에 IBSheet.[create()](/docs/static/create)함수 호출 이후에 조회 함수를 호출하게되면 이러한 문제가 발생할 수 있습니다.

문제를 해결하기 위해서는 생성 후 발생 이벤트인  [onRenderFirstFinish](/docs/events/on-render-first-finish)에서 조회 함수를 호출하여야 합니다.

- 시트를 제거하거나 시트를 다시 생성하는 방법

화면 내에 모든 시트를 제거하려면 IBSheet.[disposeAll()](/docs/static/dispose-all)함수를 호출하면 됩니다. 단일 시트를 제거할때는 sheet.[dispose()](/docs/funcs/core/dispose)함수를 통해 제거할 수 있습니다.

이렇게 제거된 함수를 다시 생성하는 것은 일반적인 시트를 생성하는 것과 동일하게 IBSheet.[create()](/docs/static/create)함수를 사용하시면 됩니다.



### Read More
- [파일 구성 introduction](/docs/intro/files)
- [Quick Start getting started](/docs/start/quick-start)
- [시트 객체 기본 구조 getting stated](/docs/start/basic-structure)
- [시트 객체 구조 getting stated](/docs/appx/init-structure)
- [SearchMode cfg](/docs/props/cfg/search-mode)
- [Extend col](/docs/props/col/extend)
- [method 사용법 기초 method](/docs/funcs/method)
- [doSearch method](/docs/funcs/core/do-search)
- [doSearchPaging method](/docs/funcs/core/do-search-paging)
- [down2Excel method](/docs/funcs/excel/down-to-excel)
- [down2Text method](/docs/funcs/excel/down-to-text)
- [getSaveString method](/docs/funcs/core/get-save-string)
- [getSaveJson method](/docs/funcs/core/get-save-json)
- [getChangedData method](/docs/funcs/core/get-changed-data)
- [loadSearchData method](/docs/funcs/core/load-search-data)
- [loadExcel method](/docs/funcs/excel/load-excel)
- [loadText method](/docs/funcs/excel/load-text)
- [rerender method](/docs/funcs/core/rerender)
- [renderBody method](/docs/funcs/core/render-body)
- [refreshRow method](/docs/funcs/core/refresh-row)
- [refreshCell method](/docs/funcs/core/refresh-cell)
- [showDownloadDialog method](/docs/funcs/dialog/show-download-dialog)
- [showEditDialog method](/docs/funcs/dialog/show-edit-dialog)
- [showFindDialog method](/docs/funcs/dialog/show-find-dialog)
- [showPivotDialog method](/docs/funcs/dialog/show-pivot-dialog)
- [showUploadDialog method](/docs/funcs/dialog/show-upload-dialog)
- [event 사용법 기초 event](/docs/events/event)
- [onReceiveData event](/docs/events/on-receive-data)
- [onBeforeDataLoad event](/docs/events/on-before-data-load)
- [onDataLoad event](/docs/events/on-data-load)
- [onSearchFinish event](/docs/events/on-search-finish)
- [onSave event](/docs/events/on-save)
- [onBeforeSave event](/docs/events/on-before-save)
- [onAfterSave event](/docs/events/on-after-save)
- [static 객체 란 static](/docs/static/static)
- [onBeforeCreate static](/docs/static/on-before-create)
- [CommonOptions static](/docs/static/common-options)
- [Solid appendix](/docs/appx/solid)
- [Menu appendix](/docs/appx/menu)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
  