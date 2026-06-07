---
KEY: onAfterSort
KIND: event
PATH: events/on-after-sort
ALIAS: 소팅이, 이루어진, 호출되는, 이벤트입니다
ALIAS_EN: on, after, sort
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-after-sort
---
# onAfterSort ***(event)***
> 소팅이 이루어진 후 호출되는 이벤트입니다.


### Syntax

```
    onAfterSort:function(paramObject) {

    }
or
    sheet.bind("onAfterSort" , function(paramObject) {});
```

### Parameters
| Name | Type | Description |
|----------|-----|------------|
|sheet|`object`|소팅이 실행된 시트 객체|

### Return
***none***



### Example
```javascript
options.Events = {
    onAfterSort:function(evtParam){
        // 모든 정렬이 다 끝난 후 호출되기에 여기서 상태 메시지를 띄운다.
        alert("정렬이 완료되었습니다.");
    }
}
```

### Read More

- [onBeforeSort event](./on-before-sort)
- [doSort method](/docs/funcs/core/do-sort)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
