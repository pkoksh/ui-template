---
KEY: doSort
KIND: method
PATH: funcs/core/do-sort
ALIAS: sheet.doSort, doSort(), 지정한, 열들을, 함수를, 소팅
ALIAS_EN: do, sort
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/do-sort
---
# doSort ***(method)***
> 지정한 열들을 함수를 통해 소팅 합니다. 

> `doSort`는 비동기로 동작합니다. 

> 소계에서 `doSort` 사용시 `stdCol`은 소팅되지 않습니다.
### Syntax
```javascript
void doSort( sortcols );
```

### Parameters
|Name|Type|Required|Description|
|----------|-----|---|----|
|sortcols|`string`|필수|소팅할 열이름을 `","`를 구분자로 순서대로 입력
(열이름만 쓰면 오름차순, 열이름 앞에 `"-"`기호를 붙이면 내림차순이 됨)

### Return Value
***none***

### Example
```javascript
//부서를 내림차순으로 이름을 오름차순으로 정렬
sheet.doSort("-dempNm,empNm");
```

### Read More
- [clearSort method](./clear-sort)
- [onBeforeSort event](/docs/events/on-before-sort)
- [onAfterSort event](/docs/events/on-after-sort)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
