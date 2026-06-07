---
KEY: onSave
KIND: event
PATH: events/on-save
ALIAS: 함수, 호출, 발생하는, 이벤트
ALIAS_EN: on, save, function, method, event
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-save
---
# onSave ***(event)***
> doSave() 함수 호출 시 발생하는 이벤트 입니다.

> 저장할 데이터에 대한 수집 작업이 이루어지기 전에 발생합니다.

> `1(true)`를 리턴 시 다음 이벤트([onBeforeSave](./on-before-save))을 실행하지 않고, 저장이 중단 됩니다.

### Syntax

```
    onSave : function(paramObject) {

    }
or
    sheet.bind("onSave" , function(paramObject) {});
```

### Parameters


| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|서버에 변경된 내용을 전송할 시트 객체|

### Return
***boolean***

### Example
```javascript
options.Events = {
    onSave:function(evtParam){
        var changes = evtParam.sheet.getChangedData();
        if (changes.indexOf("금지어") > -1) {
            alert("잘못된 문자열이 포함되어 있습니다. 저장을 취소합니다.");
            return true;
        }
    }
}
```

### Read More

- [doSave method](/docs/funcs/core/do-save)
- [onBeforeSave event](./on-before-save)
- [onAfterSave event](./on-after-save)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
