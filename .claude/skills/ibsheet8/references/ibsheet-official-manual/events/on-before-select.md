---
KEY: onBeforeSelect
KIND: event
PATH: events/on-before-select
ALIAS: 시트의, 셀을, 선택하거나, 선택해제하기, 호출되는
ALIAS_EN: on, before, select
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-before-select
---
# !onBeforeSelect ***(event)***
> 시트의 행, 셀을 선택하거나 선택해제하기 전 호출되는 이벤트입니다.

> true를 리턴 시 선택/선택해제의 동작을 실행하지 않습니다.


<!--!
### 비공개 내용
`[비공개]` 메소드로 했을땐 문제 없는데 드래그시 이 이벤트가 발생하기 전에 painting이 발생해서 선택으로 색칠됨(객체에 selected는 아직 없음) refresh가 필요함. 
!-->


### Syntax

```
    onBeforeSelect : function(paramObject) {

    }
or
    sheet.bind("onBeforeSelect" , function(paramObject) {});
```

### Parameters


| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|시트 객체|
|row|`object`|선택/선택해제가 된 행(또는 셀)의 [데이터 로우 객체](/docs/appx/row-object)|
|deselect|`boolean`|선택 해제 여부|
|cols|`array[string]`|선택/선택해제된 셀들이 위치한 열이름|

### Return
***boolean***

### Example
```javascript
options.Events = {
    onBeforeSelect:function(evtParam){
        // 선택을 취소할지 여부를 여기서 결정할 수 있습니다.
        // 선택한 행에 "CHK"열의 값이 0인 경우 선택을 취소합니다.
        if(evtParam.row["CHK"] == 0) return true;
    }
}
```

### Read More

- [onBeforeSelectAll event](./on-before-select-all)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
