---
KEY: onSearchStart
KIND: event
PATH: events/on-search-start
ALIAS: 조회, 함수를, 통한, 데이터, 조회가
ALIAS_EN: on, search, start, query, fetch, load, retrieve, data
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-search-start
---
# onSearchStart ***(event)***
> 조회 함수를 통한 데이터 조회가 시작하기 전에 발생합니다

> `1(true)` 값을 리턴 시 조회가 취소됩니다.

### Syntax

```
    onSearchStart : function(paramObject) {

    }
or
    sheet.bind("onSearchStart" , function(paramObject) {});
```

### Parameters
| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|시트 객체|
|type|`string`|조회/엑셀 여부(Search, EXCEL)|


### Return
***boolean***

### Example
```javascript
options.Events = {
    onSearchStart: function(evtParam) {
        //로딩 이미지 보이기
        $.blockUI();
    }
}
```

### Read More
- [onSearchFinish event](./on-search-finish)
- [doSearch method](/docs/funcs/core/do-search)
- [doSearchPaging method](/docs/funcs/core/do-search-paging)
- [loadSearchData method](/docs/funcs/core/load-search-data)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.24|기능 추가|
|core|8.0.0.26|`type` 추가|
