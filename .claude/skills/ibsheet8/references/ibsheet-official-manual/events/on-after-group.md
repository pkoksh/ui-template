---
KEY: onAfterGroup
KIND: event
PATH: events/on-after-group
ALIAS: 시트를, 특정, 기준으로, 그룹, 실행
ALIAS_EN: on, after, group
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-after-group
---
# onAfterGroup ***(event)***
> 시트를 특정 열(들)을 기준으로 그룹 실행/해제된 후(렌더링 전) 호출되는 이벤트입니다.

### Syntax

```
    onAfterGroup:function(paramObject) {

    }
or
    sheet.bind("onAfterGroup" , function(paramObject) {});
```

### Parameters
| Name | Type | Description |
|----------|-----|------------|
|sheet|`object`|그룹 실행/해제 동작이 발생된 시트 객체|


### Return
***boolean***

### Example
```javascript
options.Events = {
    onAfterGroup:function(evtParam){
        // 그룹 실행/해제에 대한 메시지를 여기서 띄울 수 있습니다.
        alert("그룹이 설정/해제 되었습니다.");
    }
}
```

### Read More

- [onBeforeGroup event](./on-before-group)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
