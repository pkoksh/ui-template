---
KEY: onBeforeFilter
KIND: event
PATH: events/on-before-filter
ALIAS: 시트에서, 필터링하기, 전에, 호출되는, 이벤트입니다
ALIAS_EN: on, before, filter
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-before-filter
---
# onBeforeFilter ***(event)***
> 시트에서 필터링하기 전에 호출되는 이벤트입니다.

> `1(true)`를 리턴시 필터링을 진행하지 않습니다.

### Syntax

```
    onBeforeFilter:function(paramObject) {

    }
or
    sheet.bind("onBeforeFilter" , function(paramObject) {});
```

### Parameters
| Name | Type | Description |
|----------|-----|------------|
|sheet|`object`|필터링이 적용될 시트 객체|
|type|`number`|필터링 동작 정보
`0`:필터 값이 바뀐 경우
`2`:렌더링 도중 필터링을 실행하거나 그룹의 변경이 필터링과 같이 발생한 경우|
<!--!
`[비공개 설명]` ***1이 있는데 이는 쿠키 관련된 것이므로 제외했고, 2번을 1번으로 바꾸어야할 것으로 보입니다.***
!-->


### Return
***boolean***

### Example
```javascript
options.Events = {
    onBeforeFilter:function(evtParam){
        if(evtParam.type == 2) return false;
        return true;
    }
}
```

### Read More
- [onAfterFilter event](./on-after-filter)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
