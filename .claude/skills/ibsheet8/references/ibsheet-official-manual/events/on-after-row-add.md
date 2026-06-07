---
KEY: onAfterRowAdd
KIND: event
PATH: events/on-after-row-add
ALIAS: 시트에, 새로운, 행이, 추가되어, 렌더링된
ALIAS_EN: on, after, row, add
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-after-row-add
---
# onAfterRowAdd ***(event)***
> 시트에 새로운 행이 추가되어 렌더링된 후 호출되는 이벤트입니다.

> 단일 행 추가([addRow](/docs/funcs/core/add-row))가 아닌 여러개 행을 추가하는 ([addRows](/docs/funcs/core/add-rows)) 메소드 사용시 호출됩니다.

<!--!
> `[비공개 설명]` addRows, copyRows에서 호출됩니다. 

!-->

### Syntax
```
    onAfterRowAdd : function(paramObject) {

    }
or
    sheet.bind("onAfterRowAdd" , function(paramObject) {});
```

### Parameters
| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|시트 객체|
|row|`object`|시트에 추가된 [데이터 로우 객체](/docs/appx/row-object)|

### Return
***none***

### Example
```javascript
options.Events = {
    onAfterRowAdd:function(evtParam){
        // 행 추가시 여기서 초기값을 설정해줄 수 있습니다.
        // 렌더링 된 후 호출되는 이벤트이기에 값 변경시 렌더링을 해줘야합니다.
        evtParam.sheet.setValue({row:evtParam.row,col:"sTitle",val:"없음",render:1});
        evtParam.sheet.setValue({row:evtParam.row,col:"sAudience",val:0,render:1});
        evtParam.sheet.setValue({row:evtParam.row,col:"sPlace",val:"미정",render:1});
    }
}
```

### Read More
- [addRows method](/docs/funcs/core/add-rows)
- [copyRows method](/docs/funcs/core/copy-rows)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
