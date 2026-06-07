---
KEY: findRows
KIND: method
PATH: funcs/core/find-rows
ALIAS: sheet.findRows, findRows(), 시트에서, 검색, 알맞은, 데이터를, 찾아
ALIAS_EN: find, rows, search, lookup
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/find-rows
---
# findRows ***(method)***
> 시트에서 검색 식([SearchExpression](/docs/props/cfg/search-expression))에 알맞은 데이터를 찾아 선택, 마킹, 포커스 등 처리할 수 있습니다.


### Syntax
```javascript
void findRows( action, match, callback );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|action|`string`|필수| 검색 기능(action)을 설정합니다.|
|match|`boolean`|선택| 전체 셀 내용이 일치할 경우만 검색 대상에 포함합니다.
`0(false)`:데이터에서 찾을 데이터가 포함 된 경우  (`default`)
`1(true)`:데이터에서 찾을 데이터가 일치 할 경우|
|callback|`function`|선택| findRows로 데이터 검색이 완료된 뒤 호출되는 콜백 함수입니다. 
 콜백 함수의 인자로 두 가지 인자가 주어집니다. 

 1. `action`: 현재 실행된 검색 기능 
 2. `result`: findRows로 조회된 데이터 결과값|

### 검색 기능(action)
|Name| Description |
|----------|----|
|`'Find'`| 다음 행 검색 |
|`'FindPrev'`| 이전 행 검색 |
|`'Mark'`| 검색식에 해당하는 행을 강조 (총 갯수가 `sheet.SearchCount`에 설정됨) |
|`'Select'`| 검색식에 해당하는 행을 선택 (총 갯수가 `sheet.SearchCount`에 설정됨) |
|`'Filter'`| 검색식에 해당하는 행만 보이도록 필터링 (총 갯수가 `sheet.FilterCount`에 설정됨) |
|`'Clear'`| 검색 결과를 초기화 |

### Example
```javascript
// 시트에서 '서울'을 포함한 데이터 행을 검색
sheet.SearchExpression = '서울';
sheet.findRows('Find');
```

### Read More

- [SearchCaseSensitive cfg](/docs/props/cfg/search-case-sensitive)
- [SearchCount cfg](/docs/props/cfg/search-count)
- [SearchExpression cfg](/docs/props/cfg/search-expression)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|core|8.1.0.98|`callback` 기능 공개|
<!--!
|`[비공개]` core|8.0.0.25|`match`, `callback` 기능 추가|
!-->
