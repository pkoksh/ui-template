---
KEY: onShowDefaults
KIND: event
PATH: events/on-show-defaults
ALIAS: 설정된, 메뉴가, 화면에, 보여질, 호출되는
ALIAS_EN: on, show, defaults
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-show-defaults
---
# onShowDefaults ***(event)***
> [Defaults](/docs/props/col/defaults)에 설정된 메뉴가 화면에 보여질 때 호출되는 이벤트입니다.([onReadDefaults](/docs/events/on-read-defaults) 이벤트 발생 후 발생합니다.)

> 표시될 메뉴의 순서나 내용을 수정할 수 있습니다.


### Syntax

```
    onShowDefaults : function(paramObject) {

    }
or
    sheet.bind("onShowDefaults" , function(paramObject) {});
```

### Parameters


| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|메뉴가 보여질 시트 객체|
|row|`object`|메뉴가 보여질 셀의 [데이터 로우 객체](/docs/appx/row-object)|
|col|`string`|메뉴가 보여질 셀의 열이름|
|menu|`object`|화면에 보여질 메뉴 객체|
|pos|`object`|메뉴에 대한 `Position` 객체|


### Return
***none***


### Example
```javascript

options.Events = {
    onShowDefaults:function(evtParam){
        // Defaults를 통해 보여지는 menu의 일부 아이템을 제거한 후 보여준다.
        evtParam.menu.Items.splice(0,3); //앞에 3개 아이템을 제거
    }
}
```

### Read More

- [Defaults col](/docs/props/col/defaults)
- [onReadDefaults event](/docs/events/on-read-defaults)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.6|기능 추가|
