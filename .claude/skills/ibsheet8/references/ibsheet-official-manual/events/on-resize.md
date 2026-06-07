---
KEY: onResize
KIND: event
PATH: events/on-resize
ALIAS: 시트의, 크기가, 변경될, 발생합니다
ALIAS_EN: on, resize
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-resize
---
# onResize ***(event)***
> 시트의 크기가 변경될 때 발생합니다.

### Syntax

```
    onResize : function(paramObject) {

    }
or
    sheet.bind("onResize" , function(paramObject) {});
```

### Parameters


| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|시트 객체|
|oldwidth|`number`|크기 변경 전 너비|
|oldheight|`number`|크기 변경 전 높이|
|width|`number`|크기 변경 후 너비|
|height|`number`|크기 변경 후 높이|

### Return
***none***

### Example
```javascript
options.Events = {
    onResize:function(evtParam){
        //시트크기가 너무 작아지면 일부 열을 감추자
        if (evtParam.sheet.getBodyWidth(1) < 1200) {
            evtParam.sheet.setAttribute(null , "SN", "Visible", 0, 0);
            evtParam.sheet.setAttribute(null , "ProductID", "Visible", 0, 0);
            evtParam.sheet.setAttribute(null , "CustomerID", "Visible", 0, 0);
        } else {
            evtParam.sheet.setAttribute(null , "SN", "Visible", 0, 1);
            evtParam.sheet.setAttribute(null , "ProductID", "Visible", 0, 1);
            evtParam.sheet.setAttribute(null , "CustomerID", "Visible", 0, 1);
        }
        evtParam.sheet.rerender();

    }
}
```

### Read More
- [onColResize event](./on-col-resize)
- [onAfterColResize event](./on-after-col-resize)
- [onSectionResize event](./on-section-resize)
- [onAfterSectionResize event](./on-after-section-resize)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
