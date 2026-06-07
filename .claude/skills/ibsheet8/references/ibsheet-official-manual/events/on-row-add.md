---
KEY: onRowAdd
KIND: event
PATH: events/on-row-add
ALIAS: 시트에, 새로운, 행이, 추가된, 직후
ALIAS_EN: on, row, add
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-row-add
---
# onRowAdd ***(event)***
> 시트에 새로운 행이 추가된 직후(렌더링 되기전) 호출되는 이벤트입니다.

> [addRow](/docs/funcs/core/add-row) 메소드 사용시 호출됩니다.

### Syntax

```
    onRowAdd : function(paramObject) {

    }
or
    sheet.bind("onRowAdd" , function(paramObject) {});
```

### Parameters


| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|시트 객체|
|row|`object`|시트에 추가될 [데이터 로우 객체](/docs/appx/row-object)|

### Return
***none***


### Example
```javascript
options.Events = {
    onRowAdd:function(evtParam){
        // 행 추가시 여기서 초기값을 설정해줄 수 있습니다.
        // 렌더링을 이 이벤트가 일어난 후 하기 때문에 값만 설정해줘도 반영됩니다.
        evtParam.row["sTitle" ] = "없음";
        evtParam.row["sAudience" ] = 0;
        evtParam.row["sPlace" ] = "미정";
    }
}
```

### Read More

- [addCols method](/docs/funcs/core/add-cols)
- [onAfterRowAdd event](./on-after-row-add)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
