---
KEY: searchExpression
KIND: config-property
PATH: props/cfg/search-expression
ALIAS: 시트에서, 검색할, 문자열을, 설정합니다
ALIAS_EN: search, expression
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/search-expression
---
# SearchExpression ***(cfg)***

> 시트에서 검색할 문자열을 설정합니다.

> 구글에서 검색하듯이 일반적인 문자열 및 검색 조건을 사용할 수 있습니다.

### Type
`string`

### 검색 조건
|Name| Description |
|----------|----|
|`'-서울'`| `서울`을 제외하고 검색 |
|`'서울 OR 경기'`| `서울`과 `경기`를 검색 |
|`'#'`| 셀값이 하나라도 비어있는 데이터 행을 검색 |

### Example
```javascript
// 대/소문자를 구분해서 시트에 'Seoul'을 포함한 데이터 행을 검색
sheet.SearchCaseSensitive = true;
sheet.SearchExpression = "Seoul";
sheet.findRows('Find');
```

### Read More
- [SearchCount cfg](./search-count)
- [SearchCaseSensitive cfg](./search-case-sensitive)
- [findRows method](/docs/funcs/core/find-rows)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
