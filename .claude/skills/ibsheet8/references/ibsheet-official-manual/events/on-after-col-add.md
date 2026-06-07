---
KEY: onAfterColAdd
KIND: event
PATH: events/on-after-col-add
ALIAS: 시트에, 새로운, 열이, 추가되어, 렌더링된
ALIAS_EN: on, after, col, add
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-after-col-add
---
# onAfterColAdd ***(event)***
> 시트에 새로운 열이 추가되어 렌더링된 후 호출되는 이벤트입니다.


### Syntax

```
    onAfterColAdd : function(paramObject) {

    }
or
    sheet.bind("onAfterColAdd" , function(paramObject) {});
```

### Parameters
| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|시트 객체|
|col|`string`|시트에 추가된 열이름|

### Return
***none***

### Example
```javascript
options.Events = {
    onAfterColAdd:function(evtParam){
        console.log(evtParam.col);
    }
}
```

### Read More

- [addCol method](/docs/funcs/core/add-col)

### Since

|product|version|desc|
|---|---|---|
|core|8.2.0.12|기능 추가|
