---
KEY: onBeforeExpand
KIND: event
PATH: events/on-before-expand
ALIAS: 트리, 사용시, 트리가, 접히거나, 펼쳐질때
ALIAS_EN: on, before, expand, tree, hierarchy
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-before-expand
---
# onBeforeExpand ***(event)***
> 트리 사용시 트리가 접히거나 펼쳐질때 호출됩니다.

> 해당 이벤트에서 `1(true)`를 리턴하면 접거나 펼쳐지는 작업을 중단할 수 있습니다.

### Syntax

```
    onBeforeExpand : function(paramObject) {

    }
or
    sheet.bind("onBeforeExpand" , function(paramObject) {});
```

### Parameters


| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|시트 객체|
|row|`object`|펼칠 행 [데이터 로우 객체](/docs/appx/row-object)|

### Return
***boolean***

### Example
```javascript
options.Events = {
    onBeforeExpand:function(evtParam){
        // 레벨에 따라 펼침을 막는다.
        if(evtParam.row["Level"] > 4){
            sheet.showMessageTime("세부항목 확인은 현행 진도에 대한 완료 후 가능합니다.",2000);
            return true;
        }
    }
}
```

### Read More

- [setExpandRow method](/docs/funcs/core/set-expand-row)
- [showTreeLevel method](/docs/funcs/core/show-tree-level)
- [onAfterExpand event](/docs/events/on-after-expand)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
