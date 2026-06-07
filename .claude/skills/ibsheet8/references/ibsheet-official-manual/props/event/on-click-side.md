---
KEY: onClickSide
KIND: event-property
PATH: props/event/on-click-side
ALIAS: 또는, 속성을, 사용하는, 셀에, 만들어지는
ALIAS_EN: on, click, side
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/event/on-click-side
---
# OnClickSide ***(json event)***

> [Button](/docs/props/col/button) 또는 [Icon](/docs/props/col/icon)이 속성을 사용하는 셀에 만들어지는 버튼을 클릭시 호출되는 `Json` 이벤트 입니다.

> `Json` 이벤트는 셀, 행, 열에서 선언될 수 있으며 적용되는 우선 순위는 **셀 > 행 > 열**입니다. 

> 예를 들어, 셀과 행 둘 다 선언했다면, 우선순위로 인해 행에 선언한 이벤트는 발생하지 않습니다.


***Icon이나 Button 속성의 값이 Check 인 경우, 이 이벤트 내에서 값을 얻어보면 변경 전에 값이 추출됩니다.
이는 이 이벤트의 발생 시점이 실제로 체크가 변경되기 보다 앞서있기 때문입니다.
따라서 "Check"를 사용하실 때는 얻은 값의 반대 값을 입력해 주어야 합니다.***

### Syntax

```js
function Handler(evtParam) {
  // ...
}

// 행에 넣는 경우
var options = {
  // ...
  Def: {
    Row: {
      // ...
      // 함수 호출이 아닌 문자열을 통한 간단한 로직 설정 가능
      // ** 아래와 같은 예약어 사용 가능
      // Sheet(현재 시트 객체),
      // Row(현재 이벤트가 호출된 셀의 데이터 로우 객체),
      // Value(현재 이벤트가 호출된 셀의 값),
      // Col(현재 이벤트가 호출된 열이름),
      // ex) 'Value && alert("Changed")'
      OnClickSide: Handler,
      // ...
    }
  }
  // ...
};

// 열에 넣는 경우
var options = {
  // ...
  Cols: [{
        // ...
        OnClickSide: Handler,
        // ...
      }
      // ...
    ]
    // ...
};

// 특정 셀에 넣는 경우
var data = [{
    // ...
    '열이름': '',
    '열이름OnClickSide': Handler,
    // ...
  },
  ...
];

// 특정 행에 넣는 경우
var data = [{
    // ...
    OnClickSide: Handler,
    // ...
  },
  // ...
];

// 위에서 설정한 options 또는 data 객체를 시트 생성자의 인자로 넣습니다.
IBSheet.create({
  id: 'sheet',
  el: 'Main',
  options: options,
  data: data
});
```

### Parameters


| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|시트 객체|
|row|`object`|클릭된 버튼/아이콘이 위치한 셀의 [데이터 로우 객체](/docs/appx/row-object)|
|col|`string`|클릭된 버튼/아이콘이 위치한 셀의 열이름|
|event|`object`|이벤트에 대한 정보를 담고 있는 객체|

### Return
boolean

### Example
```js
/**
 * [예시 1]
 * 열에 OnClickSide이벤트를 선언하는 경우
 * */

// 셀 내에 위치한 오른쪽 버튼을 클릭시 http://www.ibsheet.com 페이지를 새창에서 띄웁니다.
function Handler(evtParam) {
  window.open('http://www.ibsheet.com', '_blank');
}
var options = {
  Cols: [{
      Name: 'sCompany',
      Type: 'Text',
      Button: 'http://ibsheet.com/demo/images/11/s1.jpg',
      OnClickSide: Handler
    }
    // ...
  ]
};

/**
 * [예시 2]
 * 셀에 OnClickSide이벤트 선언하는 경우(시트에 사용될 데이터에 선언)
 * */
var data = [{
    sCompany: '시트',
    sCompanyOnClickSide: 'window.open("http://www.ibsheet.com", "_blank")',
  },
  // ...
];
```

### Read More


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
