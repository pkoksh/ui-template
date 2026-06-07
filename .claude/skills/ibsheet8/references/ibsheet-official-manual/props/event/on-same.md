---
KEY: onSame
KIND: event-property
PATH: props/event/on-same
ALIAS: 값을, 변경했을, 값과, 편집된, 셀값이
ALIAS_EN: on, same
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/event/on-same
---
# OnSame ***(json event)***

> 셀 값을 변경했을 때 셀 값과 편집된 셀값이 같을 경우 호출되는 `Json` 이벤트입니다.

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
            OnSame: Handler,  // 함수 호출이 아닌 문자열을 통한 간단한 로직 설정 가능
                                // ** 아래와 같은 예약어 사용 가능
                                // Sheet(현재 시트 객체),
                                // Row(현재 이벤트가 호출된 셀의 데이터 로우 객체),
                                // Value(현재 이벤트가 호출된 셀의 값),
                                // Col(현재 이벤트가 호출된 열이름),
                                // ex) "Value && alert('Same')"
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
            OnSame: Handler,
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
        열이름OnSame: Handler,
        ...
    },
    ...
];

// 특정 행에 넣는 경우
var data = [
    {
        ...
        OnSame: Handler,
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
|row|`object`|편집 후에도 값이 이전과 같은 셀의 [데이터 로우 객체](/docs/appx/row-object)|
|col|`string`|편집 후에도 값이 이전과 같은 셀의 열이름|
|event|`object`|이벤트에 대한 정보를 담고 있는 객체|

### Example
```javascript
/*
  예시 1 열에 OnSame이벤트를 선언하는 경우
*/

// 값이 편집전과 같은 경우 alert를 띄우고 셀 배경을 빨간색으로 변경합니다.
function Handler(evtParam) {
    alert("기존의 값과 결과가 같습니다.");
    evtParam.sheet.setCellStyle({row: evtParam.row, col: evtParam.col, attr: {Color:'red'}, render:1});

}
var options = {
    Cols: [
        {
            Name: "sCountry",
            Type: "Text",
            OnSame: Handler
        }
        ...
    ]
};


/*
  예시 2 셀에 OnSame이벤트 선언하는 경우(시트에 사용될 데이터에 선언)
*/
var data = [
    {
        "sCountry": "한국",
        sCountryOnSame:"alert('기존의 값과 결과가 같습니다.') || Sheet.setCellStyle({row: Row, col: Col, attr: {Color:'red'}, render:1});",
    },
    ...
];
```

### Read More


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
