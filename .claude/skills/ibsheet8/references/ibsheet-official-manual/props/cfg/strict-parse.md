---
KEY: strictParse
KIND: config-property
PATH: props/cfg/strict-parse
ALIAS: 조회, 함수에서, 데이터를, 파싱할, 파서를
ALIAS_EN: strict, parse, search, query, fetch, load, retrieve
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/strict-parse
---
# StrictParse ***(cfg)***

> 조회 함수에서 JSON 데이터를 파싱할 때 파서를 선택합니다.

> 설정을 안하거나 false로 설정시 유연한 파서를 통해 파싱되고, true로 설정시 브라우져가 제공하는 JSON.parse()를 통해 파싱됩니다.

유연한 파서란 일반적인 JSON.parse()를 통해 파싱하는 경우 허용하지 않는 몇가지를 허용합니다.
 1. 여분의 콤마 허용
 2. 프로퍼티 이름의 쌍따옴표가 없어도 됨.

참고 
- [MDN:bad parsing](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Errors/JSON_bad_parse)
- JSON.parse()가 유연한 파서보다 성능이 우수(약 5배)하지만 데이터 로딩과정에서 파싱이 차지하는 시간이 크지 않아 5만건 이내에서는 사용자가 느끼기 어려운 수준임.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|유연한 파서 사용 (`default`)|
|`1(true)`|브라우저에서 제공하는 JSON.parse() 내장함수 사용|



### Example
```javascript
options.Cfg = {
    StrictParse: 1,       // 조회 함수를 JSON.parse()를 통해 데이터 파싱  
};
```

### Read More
- [doSearch method](/docs/funcs/core/do-search)
- [doSearchPaging method](/docs/funcs/core/do-search-paging)
- [loadSearchData method](/docs/funcs/core/load-search-data)

### Since
|product|version|desc|
|---|---|---|
|core|8.0.0.7|기능 추가|
