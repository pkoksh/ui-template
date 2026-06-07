---
KEY: getSaveJson
KIND: method
PATH: funcs/core/get-save-json
ALIAS: sheet.getSaveJson, getSaveJson(), 시트, 내에, 변경된, 내용, 입력
ALIAS_EN: get, save, json, sheet, grid, input, import
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/get-save-json
---
# getSaveJson ***(method)***
> 시트 내에 변경된 내용(`입력(Added)`, `수정(Changed)`, `삭제(Deleted)`, `이동(Moved)`)을 json 형식의 객체로 추출합니다.


### Syntax
```javascript
object getSaveJson( saveMode, col, validRequired, showAlert, saveAttr, useLevel, formData, saveExtraAttr, rows );
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
|validRequired|`boolean`|선택|데이터 필수 입력 항목([Required col](/docs/props/col/required) 설정된 열)에 대한 검사 여부 설정.
`0(false)`:필수 입력 항목 검사 안함
`1(true)`:필수 입력 항목 검사 실행 (`default`)|
|showAlert|`boolean`|선택|`validRequired` 검사를 통과하지 못할 시 메세지 표시 여부
`0(false)`:메시지 표시 안함 (`default`)
`1(true)`:메세지 표시
![테이블](/assets/imgs/doSaveRequired1.png "테이블")
<!-- IMAGE: 시트/테이블 화면 - 테이블 -->
![경고창](/assets/imgs/doSaveRequired2.png "경고창")
<!-- IMAGE: 경고/확인 대화상자 - 경고창 -->|
|saveAttr|`string`|선택|각 셀의 속성값을 같이 추출하고자 하는 경우 Name+속성명 형식으로 설정
여러개 속성을 추출하고자 하는 경우 ","를 구분자로 작성
ex) `"sNameColor,sNoCanEdit"`|
|useLevel|`boolean`|선택|Tree기능 사용시 각 행의 Level(Depth)값을 추출되는 데이터에 포함할지 여부 (default: `1(true)`)

최 상위 노드를 1부터 시작하여 계산하며, `"tLEVEL"`이라는 이름으로 행 데이터에 추가됩니다.
`"tLEVEL"`은 각 메세지 파일(ex:`ko.js`)에서 `"TreeLevelName"`으로 변경할 수 있습니다.
Tree기능을 사용하는 시트에서 해당 속성을 `0(false)`로 설정시 `saveMode:0`을 통해 추출되는 데이터는 계층구조를 갖게 됩니다.
`saveMode`를 이용하여 전체 데이터가 아닌 일부 데이터를 추출 할 경우 데이터는 계층 구조를 가지지 않으며 `"tLEVEL"` 값은 모두 1이 됩니다.|
|formData|`boolean`|선택|저장 데이터를 Form Data로 추출 할지 여부 (default: `0(false)`)

***File 타입 저장 시 사용***|
|saveExtraAttr|`boolean`|선택|시트에 (col)[Name](/docs/props/col/name)으로 정의하지 않은 데이터가 [doSearch](/docs/funcs/core/do-search)나 [loadSearchData](/docs/funcs/core/load-search-data)함수를 통해 로드 된 경우, 함수 호출시 해당 데이터를 같이 추출할 지 여부.
로드 데이터 첫번째 행의 keyset을 기준으로 추출됨.
`0(false)`:시트에 (col)[Name](/docs/props/col/name)으로 정의 되지 않은 데이터 서버 전송 시 미포함 (`default`)
`1(true)`:시트에 (col)[Name](/docs/props/col/name)으로 정의 되지 않은 데이터 서버 전송 시 포함|
|rows|`array[object]`|선택| [데이터 로우 객체](/web-service/manuals/ibsheet8/-/wikis/docs/appx/row-object) 배열로 입력한 행에 대한 정보를 추출합니다.  (default: `null`)|
|validSize|`boolean`|선택|사이즈 설정([Size col](/docs/props/col/size))에 대한 유효성 검사 여부 설정.
`0(false)`:사이즈 유효성 검사 안함 (`default`)
`1(true)`:사이즈 유효성 검사 실행|
|validEditMask|`boolean`|선택|EditMask 설정([EditMask col](/docs/props/col/edit-mask))에 대한 유효성 검사 여부 설정.
`0(false)`:EditMask 유효성 검사 안함 (`default`)
`1(true)`:EditMask 유효성 검사 실행|
|validResultMask|`boolean`|선택|ResultMask 설정([ResultMask col](/docs/props/col/result-mask))에 대한 유효성 검사 여부 설정.
`0(false)`:ResultMask 유효성 검사 안함 (`default`)
`1(true)`:ResultMask 유효성 검사 실행|

Parameter 설정 시 결과에 대응하는 코드는 다음과 같습니다.

| Code | Message         | Description |
|------| --------------- |-------------|
| `IBS000` |NoTargetRows | 저장(Added, Changed, Deleted) 대상이 없는 경우 |
| `IBS010` |RequiredError| `validRequired` 설정 시 Validation 오류인 경우  |
| `IBS020` |InvalidRows  | `rows` 설정 시 처리대상이 없는 경우 |
| `IBS040` |SizeError | `validSize` 설정 시 Validation 오류인 경우 |
| `IBS050` |EditMaskError | `validEditMask` 설정 시 Validation 오류인 경우 |
| `IBS060` |ResultMaskError| `validResultMask` 설정 시 Validation 오류인 경우 |

### Return Value
**json 형식의 object**
```json
// 정상적인 처리시
{
    "data":[
        {"id":"AR1","ColName1":"12345","ColName2":"ABCDE" ...},
        {"id":"AR4","ColName1":"76411","ColName2":"HIJKL" ...},
        ...
    ]
}
```
```json
// validRequired 오류시
{
    "Message":"RequiredError",
    "Code":"IB010",
    "row":오류 발생 행 객체,
    "col":오류 발생 열 Name,
    "data":[]
}

// rows에 입력한 행 객체가 유효하지 않을 경우 
{
    "Message":"InvalidRows",
    "Code":"IB020",
    "data":[]
}
```


### Example
```javascript
// 각 컬럼에 수정된 데이터와 DESC 컬럼의 Color 속성값을 추출한다.
var saveJson = sheet.getSaveJson({saveMode:2, saveAttr:"DESCColor"});
$.ajax({
        type: 'post'
        ,async: true
        ,dataType: 'json'
        ,headers: {"X-Requested-With":"XMLHttpRequest"}
        ,contentType: "application/json; charset=utf-8"
        ,url: "/xgs/manage/sys/sawonTelSave.do"
        ,data: JSON.stringify(saveJson)
        , success: function(data) {
            // 저장 결과 반영
            sheet.acceptChangedData();
        }
        , error: function(data, status, err) {
            alert('서버와의 통신이 실패했습니다.');
        }
});
```

### Read More

- [getSaveString method](./get-save-string)
- [acceptChangedData method](./accept-changed-data)
- [Required col](/docs/props/col/required)
- [ValidCheck cfg](/docs/props/cfg/valid-check)
- [ValidateMessage cfg](/docs/props/cfg/validate-message)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|core|8.0.0.4|`saveAttr`,`useLevel` 기능 추가|
|core|8.0.0.5|`formData` 기능 추가|
|core|8.1.0.32|`saveExtraAttr` 기능 추가|
|core|8.1.0.43|`rows` 기능 추가|
|core|8.3.0.24|`validSize`, `validEditMask`, `validResultMask` 기능 추가|