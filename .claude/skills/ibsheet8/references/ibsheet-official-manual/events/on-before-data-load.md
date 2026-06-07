---
KEY: onBeforeDataLoad
KIND: event
PATH: events/on-before-data-load
ALIAS: 서버를, 호출하여, 데이터가, 시트에, 로드되기
ALIAS_EN: on, before, data, load
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-before-data-load
---
# onBeforeDataLoad ***(event)***
> 서버를 호출하여 데이터가 시트에 로드되기 전에 발생하는 이벤트 입니다.

> [doSearch](/docs/funcs/core/do-search), [doSearchPaging](/docs/funcs/core/do-search-paging), [loadSearchData](/docs/funcs/core/load-search-data) 함수를 통해 가져온 데이터가 시트 내부에서 파싱되기 전에 발생하므로 시트 함수(`getValue`, `getAttribute`등)를 사용할 수 없습니다.
이 시점에서는 이벤트 파라미터인 `data` 객체를 활용하여 데이터를 가공 할 수 있습니다.

> 파싱이 완료된 이후에는 [onDataLoad](./on-data-load)이벤트가 발생합니다.

### Syntax

```
    onBeforeDataLoad:function(paramObject) {

    }
or
    sheet.bind("onBeforeDataLoad" , function(paramObject) {});
```

### Parameters


| Name | Type | Description |
|----------|-----|------------|
|sheet|`object`|데이터를 로딩할 시트 객체|
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
|data|`object`|시트에 로딩될 데이터|
|message|`string`|조회 결과 `json`에 포함된 `Message` 내용|
|response|`object`|`response` 객체|
|type|`string`|조회/엑셀 여부(Search, EXCEL)|

### Return
***none***

### Example
```javascript
// 조회 후 오류에 대한 예시
options.Events = {
    onBeforeDataLoad:function(evtParam){
        if (evtParam.row["result"] < 0) {
            alert("오류가 발생하였습니다\n"+evtParam.message);
        }
    }
}


// 조회된 내용에 대한 수정 예시
options.Events = {
    onBeforeDataLoad:function(evtParam){
        // 조회 결과 데이터
        var DATA = evtParam.data;
        // 조회된 데이터 일부를 수정한다.
        for(var i = 0; i < DATA.length; i++){
            var row = DATA[i];
            // AttrYn 컬럼에 값이 Y 인 경우 ConfirmFinish 컬럼에 "결정완료"를 설정하고
            // 해당 행의 Edit를 막는다. (수정된 데이터에 대한 별도 리턴은 필요 없음[CallByReference])
            if(row["AttrYn"] == "Y"){
                row["ConfirmFinish"] = "결정완료";
                row["CanEdit"] = 0;
            }
        }
    }
}
```
```javascript
// 조회 결과 json 참고
{
    //IO,Result,Message 대소문자 주의!
    "IO":{"Result":100,"Message":"정상조회완료"},
    "Data":[ ... ]
}
```

### Read More

- [doSearch method](/docs/funcs/core/do-search)
- [doSearchPaging method](/docs/funcs/core/do-search-paging)
- [loadSearchData method](/docs/funcs/core/load-search-data)
- [onReceiveData event](/docs/events/on-receive-data)
- [onDataLoad event](/docs/events/on-data-load)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|core|8.0.0.26|`type` 추가|
