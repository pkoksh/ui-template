---
KEY: onAfterFilter
KIND: event
PATH: events/on-after-filter
ALIAS: 시트에서, 필터링이, 진행된, 호출되는, 이벤트입니다
ALIAS_EN: on, after, filter
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-after-filter
---
# onAfterFilter ***(event)***
> 시트에서 필터링이 진행된 후 호출되는 이벤트입니다.

### Syntax

```
    onAfterFilter:function(paramObject) {

    }
or
    sheet.bind("onAfterFilter" , function(paramObject) {});
```

### Parameters
| Name | Type | Description |
|----------|-----|------------|
|sheet|`object`|필터링이 적용된 시트 객체|
|type|`number`|필터링 동작 정보
`0`:필터 값이 바뀐경우
`2`:렌더링 도중 필터링을 실행하거나 그룹의 변경이 필터링과 같이 발생한 경우|
<!--!
`[비공개 설명]` ***1이 있는데 이는 쿠키 관련된 것이므로 제외했고, 2번을 1번으로 바꾸어야할 것으로 보입니다.***
!-->

### Return
***none***

### Example
```javascript
options.Events = {
    onAfterFilter:function(evtParam){
        // 필터링 완료 여부에 대한 메시지를 띄울수 있습니다.
        alert("필터링이 완료되었습니다.");
    }
}
```

### Read More
- [onBeforeFilter event](./on-before-filter)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
