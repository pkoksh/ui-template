---
KEY: onAfterExpand
KIND: event
PATH: events/on-after-expand
ALIAS: 트리, 사용시, 트리가, 접히거나, 펼쳐진
ALIAS_EN: on, after, expand, tree, hierarchy
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-after-expand
---
# onAfterExpand ***(event)***
> 트리 사용시 트리가 접히거나 펼쳐진 후 호출됩니다.

### Syntax

```
    onAfterExpand : function(paramObject) {

    }
or
    sheet.bind("onAfterExpand" , function(paramObject) {});
```

### Parameters
| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|시트 객체|
|row|`object`|펼쳐진/접힌 행 [데이터 로우 객체](/docs/appx/row-object)|


### Return
***none***

### Example
```javascript
options.Events = {
    onAfterExpand:function(evtParam){
        // 펼쳐진 행의 레벨이 4 이상인 경우 카운트
        if(evtParam.row["Level"] >= 4){
            LevCount++;
        }
    }
}
```

### Read More

- [setExpandRow method](/docs/funcs/core/set-expand-row)
- [showTreeLevel method](/docs/funcs/core/show-tree-level)
- [onBeforeExpand event](/docs/events/on-before-expand)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.4|기능 추가|
