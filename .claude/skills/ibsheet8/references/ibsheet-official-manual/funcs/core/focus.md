---
KEY: focus
KIND: method
PATH: funcs/core/focus
ALIAS: sheet.focus, focus(), 지정한, 특정, 셀에, 포커스를, 줍니다
ALIAS_EN: focus
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/focus
---
# focus ***(method)***
> 지정한 특정 셀에 포커스를 줍니다.

> 시트 외부에 버튼을 클릭함으로써 포커스를 설정하고자 하는 경우에는 `setTimeout`을 통해 딜레이를 주어야 합니다.

### Syntax
```javascript
boolean focus( row, col, pagepos, ignoreEvent, triggerOnFocus );
```

### Parameters
|Name|Type|Required|Description|
|----------|-----|---|----|
|row|`object`|필수|[데이터 로우 객체](/docs/appx/row-object)|기본값은 포커스된 행이 있으면 포커스된 행, 포커스된 행이 없으면 보이는 행의 첫번째
|col|`string`|필수|열이름|기본값은 포커스된 열이 있으면 포커스된 열, 포커스된 열이 없으면 보이는 첫번째 열
|pagepos|`number`|선택|서버페이징 사용시 페이지 지정 (`default: null`)|
|ignoreEvent|`boolean`|선택|함수 호출시 `focus Event(onBeforeFocus, onFocus)`를 발생시킬지 유무
`0(false)`:`focus Event` 발생 시킴 (`default`)
`1(true)`:`focus Event`를 발생 시키지 않음|
|triggerOnFocus|`boolean`|선택|이미 선택한 셀을 다시 선택하는 함수 호출시 `focus Event(onBeforeFocus, onFocus)`를 항상 발생시킵니다.
`0(false)`:이미 선택된 셀을 함수로 다시 포커스 하였을 때, `focus Event`를 발생 시키지 않음 (`default`)
`1(true)`:이미 선택된 셀을 함수로 다시 포커스 하였을 때, `focus Event` 를 발생 시킴|

### Return Value
***boolean*** : 포커스가 지정되면 true, 이미 포커스가 된 셀에 함수 적용시 false, 해당셀이 없는 경우 null 리턴

### Example
```javascript
//버튼 클릭시 특정셀에 포커스 지정
document.getElementById("btn_validCheck").onclick = function(){
    setTimeout(function(){
        var errRow = sheet.getRowById("AR4");
        sheet.focus(errRow, "CARNO");
    } , 10);
}
```

### Read More
- [blur method](./blur)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|core|8.0.0.7|`ignoreEvent` 인자 추가|
|core|8.1.0.94|`triggerOnFocus` 인자 추가|
