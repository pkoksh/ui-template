---
KEY: onDataLoad
KIND: event
PATH: events/on-data-load
ALIAS: 데이터가, 시트, 내에서, 파싱되어, 로드된
ALIAS_EN: on, data, load, sheet, grid
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-data-load
---
# onDataLoad ***(event)***
> 데이터가 시트 내에서 파싱되어 로드된 후에 발생합니다.

> 내부적인 로딩은 완료되었지만 화면에 반영(렌더링)은 일어나기 전 입니다.

### Syntax

```
    onDataLoad : function(paramObject) {

    }
or
    sheet.bind("onDataLoad" , function(paramObject) {});
```

### Parameters
| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|데이터가 로드된 시트 객체|
|result|`number`| 1. 서버를 통한 조회 시([doSearch](/docs/funcs/core/do-search))
`0`:성공
`-1`:빈 URL (`예: sheet.doSearch("")`)
`-3`:요청 Url이 잘못된 경우나 네트워크 오류 등으로 결과를 받지 못한 경우
`-5`:응답 결과가 빈값인 경우
`-6`:연결 시간 초과((cfg)Timeout 초과)
`-7`:잘못된 데이터 형식(대부분 데이터 이상)
`이외`:사용자 정의 코드

 2. 일반 데이터 조회 시([loadSearchData](/docs/funcs/core/load-search-data))
`0`:성공
`-7`:잘못된 데이터 형식
|
|message|`string`|조회 결과 `json`에 포함된 `Message` 내용|
|response|`object`|`response` 객체|
|type|`string`|조회/엑셀 여부(Search, EXCEL)|

<!--!
### Return
`[비공개]` ***boolean***
!-->

### Example
```javascript
options.Events = {
    onDataLoad:function(evtParam){
        if (res == 0) alert("데이터가 로드되었습니다.");
        else alert("데이터를 로딩하는데 실패했습니다.");
    }
}
```
### Read More
- [doSearch method](/docs/funcs/core/do-search)
- [doSearchPaging method](/docs/funcs/core/do-search-paging)
- [loadSearchData method](/docs/funcs/core/load-search-data)
- [onReceiveData event](/docs/events/on-receive-data)
- [onBeforeDataLoad event](/docs/events/on-before-data-load)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|core|8.0.0.26|`type` 추가|
