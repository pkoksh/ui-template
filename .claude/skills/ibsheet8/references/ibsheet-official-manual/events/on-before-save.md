---
KEY: onBeforeSave
KIND: event
PATH: events/on-before-save
ALIAS: 서버, 데이터, 저장, 메소드, 호출시
ALIAS_EN: on, before, save, server, ajax, data, persist, store
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-before-save
---
# onBeforeSave ***(event)***
> 서버 데이터 저장 [doSave](/docs/funcs/core/do-save) 메소드 호출시 전송 할 데이터를 수집 후 발생하는 이벤트 입니다.

> [onSave](./on-save) 이벤트 발생 후, 호출됩니다.

> 해당 이벤트에서 `1(true)`를 리턴하면 저장 작업을 중단합니다.

### Syntax
```javascript
    onBeforeSave : function(paramObject) {

    }
or
    sheet.bind("onBeforeSave" , function(paramObject) {});
```

### Parameters

| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|변경된 데이터를 가지는 시트 객체|
|source|`object`|시트에 설정된 속성들이 담긴 객체|
|source.params|`string`|서버에 전송할 데이터 변경 사항 ([doSave](/docs/funcs/core/do-save) 사용시 `queryMode: 1, 2` 에서 사용가능)|
|source.data|`string`|서버에 전송할 데이터 변경 사항 ([doSave](/docs/funcs/core/do-save) 사용시 `queryMode: 0` 에서 사용가능)|

### Return
***boolean***

### Example
```javascript
options.Events = {
    onBeforeSave:function(evtParam){
        // 서버에 보낼 데이터가 금지어1 또는 금지어2를 포함하는 경우 Ajax 통신을 실행하지 않습니다.
        if (source.Params.indexOf("금지어1") > -1 || source.Params.indexOf("금지어2") > -1) {
            return true;
        }
    }
}
```

### Read More
- [doSave method](/docs/funcs/core/do-save)
- [onSave event](./on-save)
- [onAfterSave event](./on-after-save)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|core|8.0.0.19|`source.data` 추가|
