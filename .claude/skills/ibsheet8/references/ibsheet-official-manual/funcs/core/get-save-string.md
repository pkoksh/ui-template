---
KEY: getSaveString
KIND: method
PATH: funcs/core/get-save-string
ALIAS: sheet.getSaveString, getSaveString(), 시트, 내에, 변경된, 내용, 입력
ALIAS_EN: get, save, string, sheet, grid, input, import
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/get-save-string
---
# getSaveString ***(method)***
> 시트 내에 변경된 내용(`입력(Added)`, `수정(Changed)`, `삭제(Deleted)`, `이동(Moved)`)을 querystring 형식의 문자열로 추출합니다.


### Syntax
```javascript
string getSaveString( saveMode, col, urlEncode, delim, queryMode, validRequired, prefix, showAlert, saveAttr, saveExtraAttr );
```

### Parameters

|Name|Type|Required| Description |
|----------|-----|---|----|
|saveMode|`number`|선택|상태별 데이터 추출 여부 
`0`:전체데이터
`1`:전체데이터 중 `Deleted` 만 제외
`2`:수정된 데이터(`Added`,`Changed`,`Deleted`) (`default`)
`3`:수정된 데이터(`Added`,`Changed`,`Deleted`)+이동한 데이터(`Moved`)|
|col|`string`|선택|저장 기준 열의 열이름
특정 열을 지정하면 행의 상태(`Added`,`Changed`,`Deleted`)를 무시하고 지정한 열의 데이터 유무에 따라 저장됨.|
|urlEncode|`boolean`|선택|조합되는 문자열의 인코딩 여부(encodeURIComponent로 문자열을 인코딩함 )
 **`queryMode`별로 `default`가 달라짐** 
`0(false)`:`queryMode:0 (default)`
`1(true)`:`queryMode:1/2 (default)`|
|delim|`string`|선택|queryMode값이 2인 경우에 데이터 사이 구분자 지정 (`default : "\|"`)|
|queryMode|`number`|선택|서버로 전달될 데이터 구조 설정
**`0`:json 구조로 전달**
ex)
Data={
"data":[
{"STATUS":"Added","ColName1":"홍길동","ColName2":25},
{"STATUS":"Changed","ColName1":"심청","ColName2":18}
]}
*단 **reqHeader**속성에 {"Content-Type":"application/json"}를 추가시 앞에 "Data="이 제거되고 순수하게 json형식만 서버로 전송*
**`1`:QueryString 구조 전달** (`default`)
ex)
STATUS=Added&ColName1=홍길동&ColName2=25&STATUS=Changed&ColName1=심청&ColName2=18
**`2`:열데이터 기준 QueryString 구조 전달**
ex)
STATUS=Added\|Changed&ColName1=홍길동\|심청&ColName2=25\|18|
|validRequired|`boolean`|선택|데이터 필수 입력 항목([Required col](/docs/props/col/required) 설정된 열)에 대한 검사 여부
`0(false)`:필수 입력 항목 검사 안함
`1(true)`:필수 입력 항목 검사 실행 (`default`)
**`Validation`결과가 실패인 경우 규격** 
 1. Validation 오류인 경우 
 - Code: `IBS010`, Message: `RequiredError`|
|prefix|`string`|선택|열의 이름 앞에 설정할 문자열
여러개 시트를 한번에 서버로 보낼때 시트id_colName 형식으로 보낼 수 있음
ex) `sheet_saName=홍길동&sheet_saId=839212` 식으로 queryString이 만들어짐
(`default : ""`)|
|showAlert|`boolean`|선택| `validRequired` 검사를 통과하지 못할 시 메세지 표시 여부
`0(false)`:메시지 표시 안함 (`default`)
`1(true)`:메세지 표시
![테이블](/assets/imgs/doSaveRequired1.png "테이블")
<!-- IMAGE: 시트/테이블 화면 - 테이블 -->
![경고창](/assets/imgs/doSaveRequired2.png "경고창")
<!-- IMAGE: 경고/확인 대화상자 - 경고창 -->|
|saveAttr|`string`|선택|각 셀의 속성값을 같이 추출하고자 하는 경우 Name+속성명 형식으로 설정
여러개 속성을 추출하고자 하는 경우 ","를 구분자로 작성
ex) `"sNameColor,sNoCanEdit"`|
|saveExtraAttr|`boolean`|선택|시트에 (col)[Name](/docs/props/col/name)으로 정의하지 않은 데이터가 [doSearch](/docs/funcs/core/do-search)나 [loadSearchData](/docs/funcs/core/load-search-data)함수를 통해 로드 된 경우, 함수 호출시 해당 데이터를 같이 추출할 지 여부.
로드 데이터 첫번째 행의 keyset을 기준으로 추출됨
`0(false)`:시트에 (col)[Name](/docs/props/col/name)으로 정의 되지 않은 데이터 서버 전송 시 미포함 (`default`)
`1(true)`:시트에 (col)[Name](/docs/props/col/name)으로 정의 되지 않은 데이터 서버 전송 시 포함|
|validSize|`boolean`|선택|사이즈 설정([Size col](/docs/props/col/size))에 대한 유효성 검사 여부 설정.
`0(false)`:사이즈 유효성 검사 안함 (`default`)
`1(true)`:사이즈 유효성 검사 실행|
|validEditMask|`boolean`|선택|EditMask 설정([EditMask col](/docs/props/col/edit-mask))에 대한 유효성 검사 여부 설정.
`0(false)`:EditMask 유효성 검사 안함 (`default`)
`1(true)`:EditMask 유효성 검사 실행|
|validResultMask|`boolean`|선택|ResultMask 설정([ResultMask col](/docs/props/col/result-mask))에 대한 유효성 검사 여부 설정.
`0(false)`:ResultMask 유효성 검사 안함 (`default`)
`1(true)`:ResultMask 유효성 검사 실행|

### Return Value
| 결과 | Description |
|------|-------------|
|sa_name=홍길동&sa_id=02712&sa_dept=031&...| 정상 처리일 경우(querystring 형태) |
|""| 저장(Added, Changed, Deleted) 대상이 없는 경우 |
|RequiredError\|IBS010\|오류발생 행 id\|오류발생 열 Name| `validRequired` 설정 시 Validation 오류인 경우  |

### Example
```javascript
// 열이름이 CHK인 열에 체크된 데이터만 추출한다.
// 데이터를 추출하면서 AA 컬럼에 Checked 속성도 추출한다.
var saveStr = sheet.getSaveString({col:"CHK",saveAttr:"AAChecked"});
$.ajax({
    url:"sheetSaveWorx.do",
    data:saveStr,
    success:function(data){
        // 저장성공시 처리
        sheet.acceptChangedData();
    }
})
```

### Read More

- [getSaveJson method](./get-save-json)
- [acceptChangedData method](./accept-changed-data)
- [Required col](/docs/props/col/required)
- [ValidCheck cfg](/docs/props/cfg/valid-check)
- [ValidateMessage cfg](/docs/props/cfg/validate-message)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|core|8.0.0.4|`saveAttr` 기능 추가|
|core|8.1.0.32|`saveExtraAttr` 기능 추가|
|core|8.3.0.24|`validSize`, `validEditMask`, `validResultMask` 기능 추가|