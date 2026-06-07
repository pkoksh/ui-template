---
KEY: doSearch
KIND: method
PATH: funcs/core/do-search
ALIAS: sheet.doSearch, doSearch(), 통신을, 형식의, 데이터를, 가져와, 시트에
ALIAS_EN: do, search
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/do-search
---
# doSearch ***(method)***

> ajax 통신을 통해 json형식의 데이터를 가져와 시트에 로드합니다.

> 비동기형식으로 동작하므로, 데이터 로드 이후에 대한 처리는 [onSearchFinish](/docs/events/on-search-finish) 이벤트에서 로직을 구성하셔야 합니다.


### Syntax

```javascript
void doSearch( url, param,  method, append, reqHeader, callback, timeout, sync, next, strictParse, traditional );
```

### Parameters

|Name|Type|Required|Description|
|----------|-----|---|----|
|url|`string`|필수|ajax를 통해 호출할 url|
|param|`string`\|`object`|선택|서버로 전송할 파라미터|
|method|`string`|선택| 전송방식 GET / POST 선택 (`default: 'GET'`)|
|append|`boolean`|선택|기존 데이터에 `append` 여부
조회 방식의 차이로 인해 `append:1(true)`사용 시 [SearchMode](/docs/props/cfg/search-mode):2인 경우 [onRenderFinish](/docs/events/on-render-finish)이벤트가 발생하지 않습니다.
`0(false)`:기존 데이터 제거 후 조회 데이터 로드 (`default`)
`1(true)`:기존 데이터에 조회 데이터 추가|
|reqHeader|`object`|선택|서버 전송시 request header에 정의할 내용
ex : `{"callBy":"ibsheetObject","method":"doSearch"}`|
|callback|`function`|선택|조회 후 호출할 콜백 함수|
|timeout|`number`|선택|서버 통신 최대 대기 시간 (단위: 초(second), `default: 60`)|
|sync|`number`|선택|동기 조회 여부. 비동기일 경우 연속으로 호출시 이전 조회가 종료되지 않으면 이후의 조회는 무시됩니다. 연속으로 호출해야 되고, 반드시 모든 조회가 완료되어야 한다면 동기 조회 모드를 사용해야 합니다.
`0`:비동기 방식 (`default`)
`1`:비동기 순차 처리 방식
`2`:동기 방식|
|next|`object`|선택|[데이터 로우 객체](/docs/appx/row-object)
지정한 행 위에부터 데이터 `append`. (`append:1(true)`일때만 사용 가능)|
|strictParse|`boolean`|선택|json 파서 선택
일반적으로 유연한 파서를 통해 JSON데이터를 파싱하고, true 설정시에 브라우져의 JSON.parse()를 통해 파싱
`0(false)`:유연한 파서 사용 (`default`)
`1(true)`:	브라우저에서 제공하는 JSON.parse() 내장함수 사용|
|traditional|`boolean`|선택|서버로 전달될 param 구조 설정
`param: {"data": [1, 2]}` 배열 구조 param 전송시 설정
**`0(false)`:[] 을 포함하여 전송** (`default`)
ex) `data[]=1&data[]=2`
**`1(true)`:[] 없이 전송**
ex) `data=1&data=2`
|
|parent|`object`|선택|[데이터 로우 객체](/docs/appx/row-object)
 (동적 트리 조회 사용시 부모에 해당하는 행 지정) 
|


유연한 파서란 일반적인 JSON.parse()를 통해 파싱하는 경우 허용하지 않는 몇가지를 허용합니다.
 1. 여분의 콤마 허용
 2. 프로퍼티 이름의 쌍따옴표가 없어도 됨.

참고
- [MDN:bad parsing](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Errors/JSON_bad_parse)
- JSON.parse()가 유연한 파싱보다 성능이 우수(약 5배)하지만 데이터 로딩과정에서 파싱이 차지하는 시간이 크지 않아 5만건 이내에서는 사용자가 느끼기 어려운 수준임.

### Return Value
***none***

### Example

```javascript
// GET 방식으로 데이터 조회
sheet.doSearch("./insaAppMain.do", "dept_cd=031&position_cd=A0", "GET");

// POST 방식으로 데이터 조회
var opt = {
  url: "./insaAppMain.do",
  param: {"dept_cd": 031, "position_cd": "A0"},
  method: "POST",
  reqHeader: {"Content-Type":"application/json"}
};
sheet.doSearch(opt);
```

### Read More

- [dataStructure appendix](/docs/appx/data-structure)
- [loadSearchData method](./load-search-data)
- [doSearchPaging method](./do-search-paging)
- [onReceiveData event](/docs/events/on-receive-data)
- [onBeforeDataLoad event](/docs/events/on-before-data-load)
- [onDataLoad event](/docs/events/on-data-load)
- [onSearchFinish event](/docs/events/on-search-finish)
- [Timeout cfg](/docs/props/cfg/timeout)
- [StrictParse cfg](/docs/props/cfg/strict-parse)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|core|8.0.0.4|다른 API와 동일하게 제공하기 위해 `params` 인자명을 `param`으로 변경, 기존의 `params`를 사용할 수 있지만 권장하지 않음.|
|core|8.0.0.5|`timeout` 인자 추가|
|core|8.0.0.6|`sync` 인자 추가|
|core|8.0.0.7|`next` 인자 추가|
|core|8.0.0.7|`strictParse` 인자 추가|
|core|8.0.0.7|`traditional` 인자 추가|
|core|8.0.0.25|`parent` 인자 추가|
