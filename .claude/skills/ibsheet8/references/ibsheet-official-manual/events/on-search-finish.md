---
KEY: onSearchFinish
KIND: event
PATH: events/on-search-finish
ALIAS: 함수를, 로드된, 데이터가, 화면에, 렌더링
ALIAS_EN: on, search, finish, render, draw
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-search-finish
---
# onSearchFinish ***(event)***
> [doSearch](/docs/funcs/core/do-search)나 [loadSearchData](/docs/funcs/core/load-search-data) 함수를 통해 로드된 데이터가 화면에 렌더링(표시)까지 완료된 상태에서 발생합니다.


**<mark>주의</mark> : 이 이벤트는 조회가 끝나고 화면에 떠 있는 대기이미지 닫을시 유용하며, 시트에 접근하여 값 또는 속성을
바꾸는 작업을 할경우 `onBeforeDataLoad`나 `onDataLoad`이벤트가 적합합니다.**

### Syntax

```
    onSearchFinish : function(paramObject) {

    }
or
    sheet.bind("onSearchFinish" , function(paramObject) {});
```

### Parameters

| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|시트 객체|
|type|`string`|조회/엑셀 여부(Search, EXCEL)|

### Return
***none***

### Example
```javascript
options.Events = {
    onSearchFinish:function(evtParam){
        //로딩 이미지를 제거
        $.unblockUI();
    }
}
```

### Read More
- [onReceiveData event](/docs/events/on-receive-data)
- [onBeforeDataLoad event](./on-before-data-load)
- [onDataLoad event](./on-data-load)
- [onSearchStart event](./on-search-start)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|core|8.0.0.26|`type` 추가|
