---
KEY: onAfterColsAdd
KIND: event
PATH: events/on-after-cols-add
ALIAS: 시트에, 새로운, 또는, 복사한, 열이
ALIAS_EN: on, after, cols, add
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-after-cols-add
---
# !onAfterColsAdd ***(event)***
> 시트에 새로운 또는 복사한 열이 추가될 때 호출되는 이벤트입니다.

> `1(true)`를 리턴 시 시트에 열을 추가하는 것을 막습니다.

> 내부 기능인 AddCols 사용 시 호출되는 이벤트입니다.

### Syntax

```
    onAfterColsAdd : function(paramObject) {

    }
or
    sheet.bind("onAfterColsAdd" , function(paramObject) {});
```

### Parameters
| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|시트 객체|
|cols|`array[string]`|시트에 추가될 열이름들의 배열|
|tocol|`string`|시트에 추가될 열들이 들어갈 위치의 기준이 되는 열의 이름(열이름)|
|right|`string`|열들이 추가될 방향
`0`:`tocol`의 왼쪽에 추가
`1`:`tocol`의 오른쪽에 추가|
|empty|`string`|열 복사시 추가될 열들이 빈 데이터를 가지도록 초기화될 지 여부|

### Return
***none***

### Example
```javascript
options.Events = {
    onAfterColsAdd:function(evtParam){
        // 열이름이 SEQ인 열의 왼쪽에는 열 추가를 하지 못하도록 설정
        if (evtParam.tocol == "SEQ" && !evtParam.right) {
            alert("SEQ 열 왼쪽에는 열을 추가할 수 없습니다.");
            return true;
        }
    }
}
```

### Read More

- [addCols method](/docs/funcs/core/add-cols)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
