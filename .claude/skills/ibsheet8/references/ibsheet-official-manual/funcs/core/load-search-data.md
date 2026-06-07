---
KEY: loadSearchData
KIND: method
PATH: funcs/core/load-search-data
ALIAS: sheet.loadSearchData, loadSearchData(), 형식의, 데이터를, 시트에, 로드합니다
ALIAS_EN: load, search, data
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/load-search-data
---
# loadSearchData ***_(method)_***

> json형식의 데이터를 시트에 로드합니다.\
> `append` 인자를 설정하지 않으면 기존에 시트의 데이터는 클리어 된 후, 로드 됩니다.\
> 비동기 형식으로 동작하므로, 데이터 로드 이후에 대한 처리는 [onDataLoad](/docs/events/on-data-load) 이벤트에서 로직을 구성하셔야 합니다.

### Syntax

```javascript
void loadSearchData( data, append, callback, sync, next, strictParse, parent, ignoreEvent );
```

### Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| data | `object` | 필수 | json형식의 데이터 |
| append | `boolean` | 선택 | 기존 데이터 하단에 `append` 여부
조회 방식의 차이로 인해 `append:1(true)`사용 시 [SearchMode](/docs/props/cfg/search-mode):2인 경우 [onRenderFinish](/docs/events/on-render-finish)이벤트가 발생하지 않습니다..
`0(false)`:기존 데이터 제거 후 조회 데이터 로드 (`default`)
`1(true)`:기존 데이터에 조회 데이터 추가|
| callback | `function` | 선택 | 조회 후 호출할 콜백 함수
ex) `sheet`: 시트 객체, `data`: 조회 데이터, `result(0)`: 조회 성공 |
| sync | `boolean` | 선택 | 동기 조회 여부. 
`0(false)`: 비동기 방식 (`default`)
`1(true)`: 동기 방식 |
| next | `object` | 선택 | [데이터 로우 객체](/docs/appx/row-object)
지정한 행 위에부터 데이터 `append`. (`append:1(true)`일때만 사용 가능) |
| strictParse | `boolean` | 선택 | json 파서 선택
일반적으로 유연한 파싱으로 구동되고 true 설정시에 브라우져의 JSON.parse()를 통해 파싱
`0(false)`:유연한 파서 사용 (`default`)
`1(true)`:	브라우저에서 제공하는 JSON.parse() 내장함수 사용|
| parent | `object` | 선택 | [데이터 로우 객체](/docs/appx/row-object)
(동적 트리 조회 사용시 부모에 해당하는 행 지정) |
| ignoreEvent | `boolean` | 선택 | 조회 관련 이벤트를 발생시키지 않도록 하는 인자 
`0(false)`:조회 관련 이벤트를 발생 시킴 (`default`)
`1(true)`:조회 관련 이벤트를 발생 시키지 않음 |

유연한 파싱이란 일반적인 JSON.parse()를 통해 파싱하는 경우 허용하지 않는 몇가지를 허용합니다.

1. 여분의 콤마 허용
2. 프로퍼티 이름의 쌍따옴표가 없어도 됨.

참고

- [MDN:bad parsing](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Errors/JSON_bad_parse)
- JSON.parse()가 유연한 파싱보다 성능이 우수(약 5배)하지만 데이터 로딩과정에서 파싱이 차지하는 시간이 크지 않아 5만건 이내에서는 사용자가 느끼기 어려운 수준임.

### Return Value

**_none_**

### Example

```javascript
var DATA = {"data":[
    {"EMP_ID":"08212","EMP_NM":"홍길동","DEPT_CD":"031"},
    {"EMP_ID":"07417","EMP_NM":"허균","DEPT_CD":"120"},
    {"EMP_ID":"02600","EMP_NM":"홍판서","DEPT_CD":"405"},
]};

//기존 데이터 밑에  데이터를 append한다..
sheet.loadSearchData( DATA, 1 );

//지정한 행 위에부터 데이터가 append 된다..
sheet.loadSearchData({ data: DATA.data, append: true, next: sheet.getRowByIndex(3) })
```

### Read More

- [StrictParse cfg](/docs/props/cfg/strict-parse)
- [dataStructure appendix](/docs/appx/data-structure)
- [doSearch method](./do-search)
- [doSearchPaging method](./do-search-paging)
- [onReceiveData event](/docs/events/on-receive-data)
- [onDataLoad event](/docs/events/on-data-load)

### Since

| product | version | desc |
|---------|---------|------|
| core | 8.0.0.0 | 기능 추가 |
| core | 8.0.0.6 | `sync` 인자 추가 |
| core | 8.0.0.7 | `next` 인자 추가 |
| core | 8.0.0.7 | `strictParse` 인자 추가 |
| core | 8.0.0.25 | `parent` 인자 추가 |

