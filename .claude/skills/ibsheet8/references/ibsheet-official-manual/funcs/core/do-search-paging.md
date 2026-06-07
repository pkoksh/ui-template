---
KEY: doSearchPaging
KIND: method
PATH: funcs/core/do-search-paging
ALIAS: sheet.doSearchPaging, doSearchPaging(), 페이징, 조회, 사용하는, 시트에서만, 사용됩니다
ALIAS_EN: do, search, paging, query, fetch, load, retrieve
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/do-search-paging
---
# doSearchPaging ***(method)***

> 페이징 조회 (cfg [SearchMode](/docs/props/cfg/search-mode) : 3 or 4 or 5)를 사용하는 시트에서만 사용됩니다.

> (cfg)[PageLength](/docs/props/cfg/page-length)에서 설정한 건수 만큼 서버에서 데이터를 만들어 리턴해야 합니다.

> 조회데이터 JSON 에 `Total` 속성을 통해 전체 데이터의 건수를 갖고 오면 해당 건수만큼 페이지를 나누어 조회 됩니다.


> **<mark>주의</mark> : PageLength 값과 서버에서 받아오는 데이터의 갯수를 반드시 동일하게 설정해야 합니다.(PageLength 설정하지 않았을 경우 기본값은 20 입니다)**

### Syntax
```javascript
void doSearchPaging( url, pageParam, param, reqHeader, method, callback, timeout, sync, strictParse, traditional, restapi, cPage, pageLengthParam, beforeSend, orderByParam );
```

### Parameters

|Name|Type|Required|Description|
|----------|-----|---|----|
|url|`string`|필수|ajax를 통해 호출할 url|
|pageParam|`string`|선택|서버로 전송할 페이지 변수 (`default: 'ibpage'`)|
|param|`string`\|`object`|선택|서버로 전송할 조회 조건 파라미터|
|reqHeader|`object`|선택|서버 전송시 request header에 정의할 내용
ex : `{"callBy":"ibsheetObject","method":"doSearchPaging"}`|
|method|`string`|선택|GET/POST 선택 (`default: 'GET'`)|
|callback|`function`|선택|조회 후 호출할 콜백 함수|
|timeout|`number`|선택|서버 통신 최대 대기 시간 (단위: 초(second), `default: 60`)|
|sync|`number`|선택|동기 조회 여부. 비동기일 경우 연속으로 호출시 이전 조회가 종료되지 않으면 이후의 조회는 무시됩니다. 연속으로 호출해야 되고, 반드시 모든 조회가 완료되어야 한다면 동기 조회 모드를 사용해야 합니다.
`0`:비동기 방식 (`default`)
`1`:비동기 순차 처리 방식
`2`:동기 방식|
|strictParse|`boolean`|선택|json 파서 선택
일반적으로 유연한 파싱으로 구동되고 true 설정시에 브라우져의 JSON.parse()를 통해 파싱
`0(false)`:유연한 파서 사용 (`default`)
`1(true)`:	브라우저에서 제공하는 JSON.parse() 내장함수 사용|
|traditional|`boolean`|선택|서버로 전달될 param 구조 설정
`param: {"data": [1, 2]}` 배열 구조 param 전송시 설정
**`0(false)`:[] 을 포함하여 전송** (`default`)
ex) `data[]=1&data[]=2`
**`1(true)`:[] 없이 전송**
ex) `data=1&data=2`
|
|restapi|`boolean`|선택|페이지 URL 주소 형식이 REST API 주소형식에 맞게 변경되도록 하는 설정
`0(false)`:페이지 URL 주소 변경 기능 사용 안함 (`default`)
`1(true)`:페이지 URL 주소 REST API 주소형식에 맞게 변경 기능 사용

 **<mark>주의</mark> : GET 방식으로 보낼 경우 pageParam을 제외한 다른 파라미터들은 전송되지 않음** 
ex) `/userInfo/users/2`|
|cPage| `number`|선택|조회 시 처음 보여질 페이지 번호 (1부터 시작)|
|pageLengthParam| `string`|선택|서버로 전송할 `pageLength` 변수 (`default: 'ibpagelength'`)|
|beforeSend|`function`|선택|조회 전 호출할 함수
`1(true)` 값을 리턴 시 조회가 취소|
|orderByParam|`string`|선택|서버로 전송할 소팅 정보 파라미터 변수 (`default: 'iborderby'`)|


### Return Value
***none***

### Example
```javascript
//SearchMode가 3이거나 4이거나 5인 경우 조회 함수
var opt = {
  "url":"/cust/getCustInfo.do",
  "param":"custId=92123&empId=24342",
  "method":"POST",
  "beforeSend":function (rtn) {
    console.log(rtn.sheet);  // 시트 객체
   },
  "callback":function (rtn) {
    var rtnData = JSON.parse(rtn.data);
    alert("전체 데이터 건수 :" + rtnData["Total"]);
  }
};
sheet.doSearchPaging(opt);

//조회 데이터 예시
{
  "Total":254141    //전체 데이터 건수
  "Data":[
    {},...,{}   //PageLength에서 설정한 건수만큼 조회
  ]
}
```

### Read More

- [dataStructure appendix](/docs/appx/data-structure)
- [SortCurrentPage cfg](/docs/props/cfg/sort-current-page)
- [Timeout cfg](/docs/props/cfg/timeout)
- [PageLength cfg](/docs/props/cfg/page-length)
- [StrictParse cfg](/docs/props/cfg/strict-parse)
- [onReceiveData event](/docs/events/on-receive-data)
- [onDataLoad event](/docs/events/on-data-load)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|core|8.0.0.5|`timeout` 인자 추가|
|core|8.0.0.6|`sync` 인자 추가|
|core|8.0.0.7|`strictParse` 인자 추가|
|core|8.0.0.7|`traditional` 인자 추가|
|core|8.0.0.7|`restapi` 인자 추가|
|core|8.0.0.20|`cPage` 인자 추가|
|core|8.1.0.41|`pageLengthParam` 인자 추가|
|core|8.1.0.49|`beforeSend` 인자 추가|