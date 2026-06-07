---
KEY: onAfterPivot
KIND: event
PATH: events/on-after-pivot
ALIAS: 피벗, 시트를, 생성, 시트가, 호출되는
ALIAS_EN: on, after, pivot
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-after-pivot
---
# onAfterPivot ***(event)***
> 'UsePivot: 1'로 피벗 시트를 생성 할 때, 피벗 시트가 생성 된 후 호출되는 이벤트 입니다.

> 피벗 시트가 생성 후 onRenderFirstFinish 시점에 발생합니다.

### Syntax

```
    onAfterPivot : function(paramObject) {

    }
or
    sheet.bind("onAfterPivot" , function(paramObject) {});
```

### Parameters


| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|부모 시트 객체|
|pivotSheet|`object`|피벗시트 객체|
|criterias|`object`|피벗시트 기준 대상 컬럼명들 설정|
|init|`object`|피벗시트 열, 행, 계산 대상 설정|
|format|`string`|피벗시트에서 보여질 포맷|
|type|`string`|계산 대상 컬럼별 계산 방법|

### Return
***boolean***|


### Example
```javascript
options.Events = {
    onAfterPivot:function(evtParam){
        // 피벗시트가 생성된 후 피벗시트의 정보 확인
        alert("피벗시트의 계산 타입은 " + evtParam.type + "입니다.");
    }
}
```

### Read More

- [UsePivot Cfg](/docs/props/cfg/use-pivot)

### Since

|product|version|desc|
|---|---|---|
|core|8.1.0.41|기능 추가|
