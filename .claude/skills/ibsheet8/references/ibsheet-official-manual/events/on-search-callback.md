---
KEY: onSearchCallback
KIND: event
PATH: events/on-search-callback
ALIAS: 해당, 기능은, 변경되었습니다
ALIAS_EN: on, search, callback
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-search-callback
---
# !onSearchCallback ***(event)***
> <mark>해당 기능은 [onReceiveData](/docs/events/on-receive-data)로 변경되었습니다!!!!</mark>


> 데이터 조회시 조회 <mark>서버 호출 직후</mark> 발생하는 이벤트입니다.

> [doSearch](/docs/funcs/core/do-search), [doSearchPaging](/docs/funcs/core/do-search-paging), [loadSearchData](/docs/funcs/core/load-search-data) 함수를 통해 가져온 데이터가 시트 내부에서 파싱되기 전에 발생합니다.

> 파싱이 완료된 이후에는 [onDataLoad](./on-data-load) 이벤트가 발생합니다.


### Syntax

```
    onSearchCallback:function(paramObject) {

    }
or
    sheet.bind("onSearchCallback" , function(paramObject) {});
```

### Parameters


| Name | Type | Description |
|----------|-----|------------|
|sheet|`object`|데이터를 로딩할 시트 객체|
|data|`string`|서버에서 조회된 데이터|
|response|`object`|`response` 객체|
|type|`string`|조회/엑셀 여부(Search, EXCEL)|

### Return
***string***

### Example
```js
// 조회된 내용에 대한 수정 예시
options.Events = {
    onSearchCallback: function(evtParam) {
        var DATA = evtParam.data; // 조회 결과 데이터
        var parseData = JSON.parse(DATA); // string으로 들어오는 data parsing

        // 조회된 데이터 일부를 수정한다
        /**
         * 조회 데이터 구조
         * { data: [{}, {}], etc: []}
         */
        for (var i = 0; i < parseData.data.length; i++){
            var row = parseData.data[i];
            // AttrYn 컬럼에 값이 Y 인 경우 ConfirmFinish 컬럼에 "결정완료"를 설정
            if (row["AttrYn"] == "Y") {
                row["ConfirmFinish"] = "결정완료";
                row["CanEdit"] = 0;
            }
        }

        return parseData; // 파싱 후 수정된 데이터 return
    }
}
```

### **Return으로 넘겨야 하는 데이터 구조**
> 어떤 조회 API를 사용하는가에 따라 `onSearchCallback`에서 리턴을 사용할 때 넘겨줘야 하는 데이터 구조가 다릅니다. 

> `return`을 사용하는 경우 아래의 데이터 구조를 지켜야만 정상적으로 조회가 완료됩니다. 


1. `loadSeacrhData`에서 return 해야하는 데이터 구조 

```js
// 객체로 리턴하는 경우
// 배열 구조 데이터 리턴
[
  {
    "EMP_ID": "08212",
    "EMP_NM": "홍길동",
    "DEPT_CD": "031"
  },
  {
    "EMP_ID": "07417",
    "EMP_NM": "허균",
    "DEPT_CD": "120"
  },
  {
    "EMP_ID": "02600",
    "EMP_NM": "홍판서",
    "DEPT_CD": "405"
  }
]

// 문자열로 리턴하는 경우
// 객체 구조를 지닌 문자열로 리턴
`{"data":[{"EMP_ID":"08212","EMP_NM":"홍길동","DEPT_CD":"031"},{"EMP_ID":"07417","EMP_NM":"허균","DEPT_CD":"120"},{"EMP_ID":"02600","EMP_NM":"홍판서","DEPT_CD":"405"}]}`
```

2. `doSearch`에서 return 해야 하는 데이터 구조 

```js
// 객체 구조 데이터 리턴
// 반드시 data 키 안에 배열 구조에 데이터가 들어가야 된다
{
  "data": [{
      "sCountry": "영국",
      "sSatisfaction": 98,
      "sCompany": "한화",
      "sSaleIncrease": 6579,
      "sPrice": 6788476,
      "sSaleQuantity": 28426
    },
    {
      "sCountry": "영국",
      "sSatisfaction": 69,
      "sCompany": "구글",
      "sSaleIncrease": 1510,
      "sPrice": 2097657,
      "sSaleQuantity": 40992
    },
    {
      "sCountry": "중국",
      "sSatisfaction": 82,
      "sCompany": "한화",
      "sSaleIncrease": 2696,
      "sPrice": 9591104,
      "sSaleQuantity": 13705
    },
    ...
  ]
}

// 문자열로 리턴하는 경우도 동일하게, 객체 구조를 지닌 문자열로 리턴해야 한다
```

3. `doSearchPaging`에서 return 해야 하는 데이터 구조 

```js
// 아래와 같은 객체 구조 데이터 리턴
// 조회 데이터 전체 건수 정보인 `Total`이 포함되어야 한다
{
  "Total":254141    //전체 데이터 건수
  "data": [{
      "sCountry": "영국",
      "sSatisfaction": 98,
      "sCompany": "한화",
      "sSaleIncrease": 6579,
      "sPrice": 6788476,
      "sSaleQuantity": 28426
    },
    {
      "sCountry": "영국",
      "sSatisfaction": 69,
      "sCompany": "구글",
      "sSaleIncrease": 1510,
      "sPrice": 2097657,
      "sSaleQuantity": 40992
    },
    {
      "sCountry": "중국",
      "sSatisfaction": 82,
      "sCompany": "한화",
      "sSaleIncrease": 2696,
      "sPrice": 9591104,
      "sSaleQuantity": 13705
    },
    ...
  ]
}

// 문자열로 리턴하는 경우도 동일하게, 객체 구조를 지닌 문자열로 리턴해야 한다
```

### Read More

- [doSearch method](/docs/funcs/core/do-search)
- [doSearchPaging method](/docs/funcs/core/do-search-paging)
- [loadSearchData method](/docs/funcs/core/load-search-data)
- [onDataLoad event](./on-data-load)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.19|기능 추가|
|core|8.0.0.24|`loadSearchData` 사용시에도 이벤트 발생하도록 추가|
|core|8.0.0.26|`type` 추가|
