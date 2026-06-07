---
KEY: onBeforeGroup
KIND: event
PATH: events/on-before-group
ALIAS: 시트를, 특정, 기준으로, 그룹, 실행
ALIAS_EN: on, before, group
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-before-group
---
# onBeforeGroup ***(event)***
> 시트를 특정 열(들)을 기준으로 그룹 실행/해제전에 호출되는 이벤트입니다.

> `1(true)`를 리턴 시 그룹을 실행/해제하지 않습니다.

### Syntax

```
    onBeforeGroup:function(paramObject) {

    }
or
    sheet.bind("onBeforeGroup" , function(paramObject) {});
```

### Parameters
| Name | Type | Description |
|----------|-----|------------|
|sheet|`object`|그룹 실행/해제 동작이 발생된 시트 객체|
|group|`string`|시트에서 그룹의 기준이 되는 열이름들|


### Return
***boolean***

### Example
```javascript
options.Events = {
    onBeforeGroup:function(evtParam){
        // 지원 부서 열로 그룹할 수 없습니다.
        if(evtParam.group.indexOf("deptNm") > -1){
            alert("지원 부서 열로 그룹이 불가능합니다.");
            return true; // 그룹 취소
        } // 4개 이상의 열로 그룹할 수 없습니다.
        else if (evtParam.group.split(",").length > 3) {
            alert("4개 이상의 열로 그룹할 수 없습니다.");
            return true;
        }
    }
}
```

### Read More
- [onAfterGroup event](./on-after-group)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
