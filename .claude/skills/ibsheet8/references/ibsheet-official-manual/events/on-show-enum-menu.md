---
KEY: onShowEnumMenu
KIND: event
PATH: events/on-show-enum-menu
ALIAS: 타입, 열에서, 리스트를, 호출되는, 이벤트입니다
ALIAS_EN: on, show, enum, menu
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-show-enum-menu
---
# onShowEnumMenu ***(event)***
> Enum 타입 열에서 리스트를 열 때 호출되는 이벤트입니다.

> 새로운 리스트를 만들고 리턴하여 [EnumMenu](/docs/props/col/enum-menu)을 대체해서 사용할 수 있습니다(기존에 [EnumMenu](/docs/props/col/enum-menu)가 설정되어 있지 않아도 사용가능 합니다).


### Syntax

```
    onShowEnumMenu : function(paramObject) {

    }
or
    sheet.bind("onShowEnumMenu" , function(paramObject) {});
```

### Parameters


| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|시트 객체|
|row|`object`|콤보가 열릴 셀이 위치한 [데이터 로우 객체](/docs/appx/row-object)|
|col|`string`|콤보가 열릴 셀의 열이름|
|enummenu|`string`|[EnumMenu](/docs/props/col/enum-menu)에 설정된 값|

### Return
***string***

### Example
```javascript
options.Events = {
    onShowEnumMenu:function(evtParam){
        // EnumMenu 설정이 안되어 있고 열이름이 "sCity"이면 새로운 EnumMenu를 생성하여 리턴합니다.
        if (!evtParam.enummenu && evtParam.col == "sCity") {
            if (evtParam.sheet.getString({row: evtParam.row, col: "sLocal"}) === "Asia") {
                return "{Items: [{ Text: '한국',Menu: 1,Items: [{ Value: '01', Text: '서울' }, { Value: '02', Text: '인천' }]}, {Text: '일본', Menu: 1,Items: [{ Value: '03', Text: '토쿄' }, { Value: '04', Text: '오사카' }] }]}";
            }
            else {
                return "{Items: [{Text: '미국',Menu: 1,Items: [{ Value: '05', Text: '워싱턴' }, { Value: '06', Text: '뉴욕' }]}, {Text: '캐나다',Menu: 1,Items: [{ Value: '07', Text: '토론토' }, { Value: '08', Text: '몬트리올' }]}]}";
            }
        }

    }
}
```

### Read More

- [EnumMenu col](/docs/props/col/enum-menu)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
