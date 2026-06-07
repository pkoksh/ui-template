---
KEY: onBeforePaste
KIND: event
PATH: events/on-before-paste
ALIAS: 시트, 내에서, 붙여넣기가, 이루지기, 전에
ALIAS_EN: on, before, paste, sheet, grid
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-before-paste
---
# onBeforePaste ***(event)***
> 시트 내에서 `ctrl+v`를 통해 붙여넣기가 이루지기 전에 발생합니다.

> `cols, pastedtext`의 내용을 수정하시면 붙여넣어질 내용이나 위치를 수정하실 수 있습니다.

> 이벤트에서 `1(true)`를 리턴시 붙여넣기를 중단합니다.


### Syntax

```
    onBeforePaste : function(paramObject) {

    }
or
    sheet.bind("onBeforePaste" , function(paramObject) {});
```

### Parameters

| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|시트 객체|
|cols|`array[string]`|붙여넣기가 이루어질 `colName` 배열(수정가능)|
|pastedtext|`array[string]`|각 행에 붙여넣어질 내용(수정가능)|

### Return
***boolean***

### Example
```javascript
options.Events = {
    onBeforePaste:function(evtParam){
        //붙여넣어질 내용에 주민등록번호 패턴[######-#######]이 있으면 뒤에 6자리를 '*'로 변경
        var pasteArr = evtParam.pastedtext;
        for(var i = 0; i < pasteArr.length; i++){
            pasteArr[i] = pasteArr[i].replace(/([0-9]{6}\-[0-9]{1})[0-9]{6}/g, "$1"+"******")
        }
    }
}
```

### Read More
- [PasteFocused cfg](/docs/props/cfg/paste-focused)
- [CanCopyPaste col](/docs/props/col/can-copy-paste)
- [onAfterPaste event](./on-after-paste)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
