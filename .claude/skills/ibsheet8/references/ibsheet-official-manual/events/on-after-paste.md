---
KEY: onAfterPaste
KIND: event
PATH: events/on-after-paste
ALIAS: 시트, 내에서, 붙여넣기가, 동작, 이후에
ALIAS_EN: on, after, paste, sheet, grid
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-after-paste
---
# onAfterPaste ***(event)***
> 시트 내에서 `ctrl+v`를 통해 붙여넣기가 동작 된 이후에 발생합니다.


### Syntax

```
    onAfterPaste : function(paramObject) {

    }
or
    sheet.bind("onAfterPaste" , function(paramObject) {});
```

### Parameters

| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|시트 객체|
|pasteError|`array`|붙여넣기 실패한 셀의 정보|

### Return
***none***

### Example
```javascript
options.Events = {
    onAfterPaste:function(evtParam){
        //붙여넣어기가 동작 된 이후 발생
    }
}
```

### Read More
- [PasteFocused cfg](/docs/props/cfg/paste-focused)
- [CanCopyPaste col](/docs/props/col/can-copy-paste)
- [onBeforePaste event](./on-before-paste)


### Since

|product|version|desc|
|---|---|---|
|core|8.1.0.73|기능 추가|
|core|8.2.0.12|`pasteError` 인자 추가|
