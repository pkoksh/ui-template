---
KEY: onClick
KIND: event-property
PATH: props/event/on-click
ALIAS: 클릭시, 호출되는, 이벤트입니다
ALIAS_EN: on, click
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/event/on-click
---
# OnClick ***(json event)***

> 셀 클릭시 호출되는 `Json` 이벤트입니다.

> `Json` 이벤트는 셀, 행, 열에서 선언될 수 있으며 적용되는 우선 순위는 **셀 > 행 > 열**입니다. 

> 예를 들어, 셀과 행 둘 다 선언했다면, 우선순위로 인해 행에 선언한 이벤트는 발생하지 않습니다.

### Syntax

```javascript
function Handler(evtParam) {
    ...
}

// 행에 넣는 경우
var options = {
    ...
    Def: {
        Row: {
            ...
            OnClick: Handler,  // 함수 호출이 아닌 문자열을 통한 간단한 로직 설정 가능
                                // ** 아래와 같은 예약어 사용 가능
                                // Sheet(현재 시트 객체),
                                // Row(현재 이벤트가 호출된 셀의 데이터 로우 객체),
                                // Value(현재 이벤트가 호출된 셀의 값),
                                // Col(현재 이벤트가 호출된 열이름),
                                // ex) "Value && alert('Changed')"
            ...
        }
    }
    ...
};

// 열에 넣는 경우
var options = {
    ...
    Cols: [
        {
            ...
            OnClick: Handler,
            ...
        }
        ...
    ]
    ...
};

// 특정 셀에 넣는 경우
var data = [
    {
        ...
        열이름: "",
        열이름OnClick: Handler,
        ...
    },
    ...
];

// 특정 행에 넣는 경우
var data = [
    {
        ...
        OnClick: Handler,
        ...
    },
    ...
];

// 위에서 설정한 options 또는 data 객체를 시트 생성자의 인자로 넣습니다.
IBSheet.create({
    id: "sheet",
    el: "Main",
    options: options,
    data: data
});
```

### Parameters


| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|시트 객체|
|row|`object`|클릭된 셀의 [데이터 로우 객체](/docs/appx/row-object)|
|col|`string`|클릭된 셀의 열이름|
|event|`object`|이벤트에 대한 정보를 담고 있는 객체|

### Return
boolean


### Example
```javascript
/*
  예시 1 열에 OnClick이벤트를 선언하는 경우
*/

// PCount 열의 셀을 클릭시 해당 셀의 값을 sProduct 열의 셀의 값과 곱하여 그 결과를 sTotal 열의 셀에 설정합니다.
function Handler(evtParam) {
    evtParam.sheet.setValue({row: evtParam.row, col: "sTotal", val: evtParam.sheet.getValue({row: evtParam.row,col: evtParam.col}) * evtParam.sheet.getValue({row: evtParam.row,col: "sProduct"}), render:1});
}
var options = {
    Cols: [
        {
            Name: "PCount",
            Type: "Int",
            OnClick: Handler
        }
        ...
    ]
};


/*
  예시 2 셀에 OnClick이벤트 선언하는 경우(시트에 사용될 데이터에 선언)
*/
var data = [
    {
        "PCount": "5",
        PCountOnClick: "Sheet.setValue({row: Row, col: 'sTotal', val: Sheet.getValue({row: Row, col: Col}) * Sheet.getValue({row: Row, col: 'sProduct'}), render:1})",
    },
    ...
];
```

### Read More


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
