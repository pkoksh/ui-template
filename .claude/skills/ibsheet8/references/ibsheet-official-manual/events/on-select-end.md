---
KEY: onSelectEnd
KIND: event
PATH: events/on-select-end
ALIAS: 마우스, 드래그로, 선택, 완료, 시점에
ALIAS_EN: on, select, end, selection
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-select-end
---
# onSelectEnd ***(event)***
> 마우스 드래그로 선택 완료 시점에 발생하는 이벤트입니다.

> API로 선택 시 해당 API의 `ignoreEvent` 인자를 통해 `onSelectEnd` 이벤트 발생을 제어할 수 있습니다.

### Syntax

```
    onSelectEnd : function(paramObject) {

    }
or
    sheet.bind("onSelectEnd" , function(paramObject) {});
```

### Parameters


| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|시트 객체|
|range|`object`|선택된 영역들에 대한 이중 배열 

[시작[데이터 로우 객체](/docs/appx/row-object) , 시작열이름 , 종료[데이터 로우 객체](/docs/appx/row-object) , 종료열이름 , 시작행인덱스 , 시작열인덱스 , 선택행의개수 , 선택열의 개수]|
|rows|`array[object]`|선택된 영역의 로우 객체들에 대한 배열 [데이터 로우 객체](/docs/appx/row-object)|
|cols|`array[string]`|선택된 영역의 `colName` 배열|

### Return
***none***


### Example
```javascript
options.Events = {
    onSelectEnd:function(evtParam){
        // 선택된 영역들의 정보를 확인 할 수 있습니다.
        console.log("SelectedRows:", evtParam.rows, "SelectedCols", evtParam.cols);
    }
}
```

### Read More

- [selectRange method](/docs/funcs/core/select-range)
- [getSelectedRanges method](/docs/funcs/core/get-selected-range)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.10|기능 추가|
