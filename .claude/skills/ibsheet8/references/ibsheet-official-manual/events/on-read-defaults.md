---
KEY: onReadDefaults
KIND: event
PATH: events/on-read-defaults
ALIAS: 설정된, 메뉴가, 화면에, 보여질, 호출되는
ALIAS_EN: on, read, defaults
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-read-defaults
---
# onReadDefaults ***(event)***
> [Defaults](/docs/props/col/defaults)에 설정된 메뉴가 화면에 보여질 때 호출되는 이벤트입니다.

> 사용자가 원하는 메뉴를 문자열 또는 객체로 리턴 시 이에 해당하는 메뉴가 화면에 보여지며, 기존에 설정된 메뉴는 무시됩니다.

> `null`을 리턴 시 메뉴를 화면에 보여주지 않습니다.

### Syntax

```
    onReadDefaults : function(paramObject) {

    }
or
    sheet.bind("onReadDefaults" , function(paramObject) {});
```

### Parameters

| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|메뉴가 보여질 시트 객체|
|row|`object`|메뉴가 보여질 셀의 [데이터 로우 객체](/docs/appx/row-object)|
|col|`string`|메뉴가 보여질 셀의 열이름|
|defaults|`object`|화면에 보여질 `Defaults` 설정 값|

### Return
***mixed( `string` \| `object` )***

### Example
```javascript

options.Events = {
    onReadDefaults:function(evtParam){
        // 행에서 sProgress 열의 값이 "진행", "완료"일 때 화면에 보일 메뉴에 대한 설정
        if(evtParam.col == "sTitle" && evtParam.row["sProgress"] == "진행") {
            return "{Items:[{Columns:1,Items:[ { Name: '30프로' },{ Name: '40프로' },{ Name: '50프로' },{ Name: '60프로' },{ Name: '80프로' }]}]}"
        } else if (evtParam.col == "sTitle" && evtParam.row["sProgress"] == "완료") return null;
        else {
            return evtParam.defaults; // 그 외의 경우 기존에 설정된 메뉴를 그대로 화면에 보여줍니다.
        }
    }
}
```

### Read More

- [Defaults col](/docs/props/col/defaults)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
