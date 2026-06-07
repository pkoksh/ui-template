---
KEY: onAfterRowCopy
KIND: event
PATH: events/on-after-row-copy
ALIAS: 시트에, 행을, 복사, 렌더링, 되기전
ALIAS_EN: on, after, row, copy, duplicate, render, draw
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-after-row-copy
---
# onAfterRowCopy ***(event)***
> 시트에 행을 복사([copyRow](/docs/funcs/core/copy-row),[copyRows](/docs/funcs/core/copy-rows))한 후(렌더링 되기전) 호출되는 이벤트입니다.

> [copyRow](/docs/funcs/core/copy-row)를 통해 여러개 행을 복사하는 경우에는 행의 개수만큼 이벤트가 발생합니다.


### Syntax
```
    onAfterRowCopy : function(paramObject) {

    }
or
    sheet.bind("onAfterRowCopy" , function(paramObject) {});
```

### Parameters
| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|시트 객체|
|row|`object`|시트에 복사되어 생성된 [데이터 로우 객체](/docs/appx/row-object)
이벤트 발생시점에서 생성된 행은 아직 시트에 추가되기 전임으로 `index`는 안갖고 있음.|
|source|`object`|시트에 복사된 원본 [데이터 로우 객체](/docs/appx/row-object)|
<!--!
|`[비공개]` empty|`boolean`|원본 데이터 로우 객체의 데이터들도 같이 복사할지 여부 
비공개 사유: 코어 내부에 인자를 전달하는 코드가 없음|
!-->
### Return
***none***


### Example
```javascript
options.Events = {
    onAfterRowCopy:function(evtParam){
        if(evtParam.source.Deleted === true) {
            alert("지워진 행은 복사할 수 없습니다.");
        }
    }
}
```

### Read More
- [copyRow method](/docs/funcs/core/copy-row)
- [copyRows method](/docs/funcs/core/copy-rows)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|