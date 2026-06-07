---
KEY: ajax
KIND: method
PATH: funcs/core/ajax
ALIAS: sheet.ajax, ajax(), 통신을, 서버로부터, 데이터를, 받아옵니다
ALIAS_EN: ajax
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/ajax
---
# ajax ***(method)***

> ajax 통신을 통해 서버로부터 데이터를 받아옵니다.

> 서버 통신이 완료되었을때 실행되는 callback 함수를 이용해서 서버로부터 받은 데이터를 사용할 수 있습니다.


### Syntax
```javascript
void ajax ( url, param, method, callback, sync, reqHeader, timeout, traditional );
```

### Parameters

|Name|Type|Required|Description|
|----------|-----|---|----|
|url|`string`|필수|ajax를 통해 호출할 url|
|param|`string`\|`object`|선택|서버로 전송할 파라미터|
|method|`string`|선택| 전송방식 `GET / POST` 선택 (`default: 'GET'`)|
|callback|`funtion`|선택|서버 통신이 완료되었을때 발생하는 콜백 함수
ex) `func(res(결과 코드), data(서버로부터 받은 데이터), responseXML(XMLHttpRequest.responseXML), response(XMLHttpRequest 객체))`|
|sync|`boolean`|선택|동기식 처리 여부
`0(false)`:비동기 방식 (`default`)
`1(true)`:동기 방식|
|reqHeader|`object`|선택|서버로 전송할 헤더 {key1: value1, key2: value2}|
|timeout|`number`|선택|서버 통신 최대 대기 시간 (단위: 초(second), `default: 60`)|
|traditional|`boolean`|선택|서버로 전달될 param 구조 설정
`param: {"data": [1, 2]}` 배열 구조 param 전송시 설정
**`0(false)`:[] 을 포함하여 전송** (`default`)
ex) `data[]=1&data[]=2`
**`1(true)`:[] 없이 전송**
ex) `data=1&data=2`
|

### Return Value
***none***

### Example
```javascript
// POST 방식으로 데이터 조회
sheet.ajax("./insaAppMain.do", "dept_cd=031&position_cd=A0", "POST", function (res, data, resXml, response) {
  if (res >= 0) {
    sheet.loadSearchData(data);
  } else {
    alert("데이터 조회에 실패 했습니다!!");
  }
});

// GET 방식으로 데이터 조회
sheet.ajax({
  url: "./insaAppMain.do",
  param: {"dept_cd": 31, "position_cd": "A0"},
  method: "GET",
  reqHeader: {"Content-Type":"application/json"},
  callback: function (res, data, resXml, response) {
    if (res >= 0) {
      sheet.loadSearchData(data);
    } else {
      alert("데이터 조회에 실패 했습니다");
    }
  }
});
```

### Read More
- [loadSearchData method](./load-search-data)
- [Timeout cfg](/docs/props/cfg/timeout)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|core|8.0.0.5|`timeout` 인자 추가|
|core|8.0.0.7|`traditional` 인자 추가|
|core|8.0.0.17|`params` -> `param` 인자명 변경 (`params` 사용 가능)|