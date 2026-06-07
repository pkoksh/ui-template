---
KEY: doSave
KIND: method
PATH: funcs/core/do-save
ALIAS: sheet.doSave, doSave(), 시트에서, 변경된, 내용을, 추출하여, 서버로
ALIAS_EN: do, save
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/do-save
---
# doSave ***(method)***

> 시트에서 변경된 내용을 추출하여 서버로 전송하고, 서버에서 응답 JSON 내용에 따라 시트에 반영합니다.

> 서버로 전송하기 전에 [onBeforeSave](/docs/events/on-before-save)이벤트가 발생하고, 서버에서 응답이 왔을 때 [onAfterSave](/docs/events/on-after-save) 이벤트가 발생 합니다.
> 서버에서 받게 되는 JSON 내용과 관련해서는 7장 appendix에 [dataStructure](/docs/appx/data-structure)를 참고하세요.

### Syntax
```javascript
void doSave( url , param , saveMode , col , urlEncode , delim ,  queryMode , reqHeader , request , sync, validRequired, saveAttr, useLevel ,questCallback, timeout, traditional, saveExtraAttr );
```

### Parameters

|Name|Type|Required|Description|
|----------|-----|---|----|
|url|`string`|필수|ajax를 통해 호출할 url|
|param|`string` \| `object`|선택|서버로 전송할 파라미터|
|saveMode|`number`|선택|상태별 데이터 추출 여부 
`0`:전체데이터
`1`:전체데이터 중 `Deleted` 만 제외
`2`:수정된 데이터(`Added,Changed,Deleted`) (`default`)
`3`:수정된 데이터(`Added,Changed,Deleted`)+이동한 데이터(`Moved`)|
|col|`string`|선택|저장 기준 열의 열이름
특정 열을 지정하면 행의 상태(`Added,Changed,Deleted`)를 무시하고 지정한 열의 데이터 유무에 따라 저장됨.|
|urlEncode|`boolean`|선택|시트의 데이터에 대한 encoding 여부 
 **`queryMode`별로 `default`가 달라짐** 
`0(false)`:`queryMode:0 (default)`
`1(true)`:`queryMode:1/2 (default)`
|
|delim|`string`|선택|queryMode값이 2인 경우에 데이터 사이 구분자 지정 (`default: "\|"`)|
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
|reqHeader|`object`|선택|전송시 request header에 추가하고자 하는 내용 (ex) {key1:value1, key2:value2})
[Type](/docs/props/col/type)이 file인 셀의 값이 수정된 경우 reqHeader에 Content-Type:application/json을 설정하여도 form으로 전송됩니다.
|quest|`boolean`|선택|저장시 confirm 메세지 사용 여부
`0(false)`:confirm 메세지 사용 안함 (`default`)
`1(true)`:confirm 메세지 사용
![경고창](/assets/imgs/quest.png "경고창")
<!-- IMAGE: 경고/확인 대화상자 - 경고창 -->|
|sync|`boolean`|선택|저장시 동기 여부
`0(false)`:비동기 방식 (`default`)
`1(true)`:동기 방식|
|validRequired|`boolean`|선택|데이터 필수 입력 항목(Required 설정된 열)에 대한 검사 여부 설정. 검사를 통과하지 못할 시 메세지를 띄우며 편집모드 실행.
`0(false)`:필수 입력 항목 검사 안함
`1(true)`:필수 입력 항목 검사 실행 (`default`)
![테이블](/assets/imgs/doSaveRequired1.png "테이블")
<!-- IMAGE: 시트/테이블 화면 - 테이블 -->
![경고창](/assets/imgs/doSaveRequired2.png "경고창")
<!-- IMAGE: 경고/확인 대화상자 - 경고창 -->|
|saveAttr|`string`|선택|각 셀의 속성값을 같이 추출하고자 하는 경우 Name+속성명 형식으로 설정
여러개 속성을 추출하고자 하는 경우 ","를 구분자로 작성
ex) "sNameColor,sNoCanEdit"|
|useLevel|`boolean`|선택|Tree기능 사용시 각 행의 Level(Depth)값을 추출되는 데이터에 포함할지 여부
`0(false)`:Level값 데이터 미포함
`1(true)`:Level값 데이터 포함(`default`)
최 상위 노드를 1부터 시작하여 계산하며, "tLEVEL"이라는 이름으로 행 데이터에 추가됩니다.
"tLEVEL"은 각 메세지 파일(ex: ko.js)에서 "TreeLevelName"으로 변경할 수 있습니다.
Tree기능을 사용하는 시트에서 해당 속성을 `0(false)`로 설정시 `saveMode:0, queryMode:0`을 통해 추출되는 데이터는 계층구조를 갖게 됩니다.
`saveMode`를 이용하여 전체 데이터가 아닌 일부 데이터를 추출 할 경우 데이터는 계층 구조를 가지지 않으며 `"tLEVEL"` 값은 모두 1이 됩니다.|
|questCallback|`function`|선택|confirm 메세지 사용시(`quest:true`) Ok, Cancel에 대한 콜백 함수
 Ok(확인) : `{result:1}` 
 Cancel(취소) : `{result:2}` |
|timeout|`number`|선택|서버 통신 최대 대기 시간 (단위: 초(second), `default: 60`)|
|traditional|`boolean`|선택|서버로 전달될 param 구조 설정
`param: {"data": [1, 2]}` 배열 구조 param 전송시 설정
**`0(false)`:[] 을 포함하여 전송** (`default`)
ex) `data[]=1&data[]=2`
**`1(true)`:[] 없이 전송**
ex) `data=1&data=2`
|
|saveExtraAttr|`boolean`|선택|시트에 (col)[Name](/docs/props/col/name)으로 정의하지 않은 데이터가 [doSearch](/docs/funcs/core/do-search)나 [loadSearchData](/docs/funcs/core/load-search-data)함수를 통해 로드 된 경우, 저장시 해당 데이터를 서버로 전송할 지 여부.
로드 데이터 첫번째 행의 keyset을 기준으로 추출됨.
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
***none***

### Example
```javascript
// 인자가 많으므로 가급적 json 형식으로 사용이 유리함
sheet.doSave({
  url:"./insaAppMain.do",
  param:"dept_cd=031&position_cd=A0",
  request:1,
  quest:1,
  questCallback:function (evt) {
    if (evt.result == 2) {
      alert("취소 되었습니다.");
    }
  }
});
```

### Read More
- [Required col](/docs/props/col/required)
- [dataStructure appendix](/docs/appx/data-structure)
- [onBeforeSave event](/docs/events/on-before-save)
- [onAfterSave event](/docs/events/on-after-save)
- [getSaveJson method](./get-save-json)
- [getSaveString method](./get-save-string)
- [Timeout cfg](/docs/props/cfg/timeout)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|core|8.0.0.4|`saveAttr`, `useLevel` 기능 추가|
|core|8.0.0.5|`timeout` 기능 추가
`reqHeader` 설명 추가(`file` 타입 관련)|
|core|8.0.0.7|`traditional` 기능 추가|
|core|8.1.0.32|`saveExtraAttr` 기능 추가|
|core|8.3.0.24|`validSize`, `validEditMask`, `validResultMask` 기능 추가|