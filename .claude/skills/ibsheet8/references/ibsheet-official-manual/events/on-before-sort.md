---
KEY: onBeforeSort
KIND: event
PATH: events/on-before-sort
ALIAS: 사용자가, 헤더, 셀을, 클릭하였을, 경우
ALIAS_EN: on, before, sort, header
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-before-sort
---
# onBeforeSort ***(event)***
> 사용자가 헤더 셀을 클릭하였을 경우, 소팅이 이루어지기 전에 호출되는 이벤트입니다.

> [doSort](/docs/funcs/core/do-sort) 메소드를 통한 소팅에는 호출되지 않습니다.

> 이벤트 내에서 `-1`을 리턴 시 소팅 작업이 취소됩니다. (소팅 아이콘도 표시되지 않음)

> 이벤트 내에서 `1`을 리턴시에는 소팅 아이콘만 변경되고 실제 소팅은 이루어지지 않습니다.

> **해당 기능은 [doSort](/docs/funcs/core/do-sort)함수를 통한 소팅시에는 발생하지 않습니다.**

### Syntax

```
    onBeforeSort:function(paramObject) {

    }
or
    sheet.bind("onBeforeSort" , function(paramObject) {});
```

### Parameters


| Name | Type | Description |
|----------|-----|------------|
|sheet|`object`|값 변경이 일어날 시트 객체|
|col |`string`|소팅이 일어날 열이름|
|sort|`string`|여러개 열에 대한 소팅 내역 (ex: "colName4, -colName2, colName6")
(열이름과 열이름 사이에 `","`문자로 구분 된 문자열, 내림차순(descending) 소팅인 경우 열이름 앞에 `"-"` 가 붙음)|

### Return
***number***

### Example
```javascript
options.Events = {
    onBeforeSort:function(evtParam){
        // 특정 열을 다른 열과 같이 소팅하려 시도시 취소합니다.
        // sort 인자에 다음과 같이 문자열이 넘어옵니다. ex)  "colName4,colName2,-colName5"
        if(evtParam.col == "quarter" && evtParam.sort.split(",").length > 2){
            alert("분기 열은 '다중열소팅'을 허용하지 않습니다.\n 다른 열의 소팅을 취소해 주세요.");
            return -1; //소팅 작업을 취소합니다.
        }
    }
}
```

### Read More
- [doSort method](/docs/funcs/core/do-sort)
- [onAfterSort event](./on-after-sort)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
