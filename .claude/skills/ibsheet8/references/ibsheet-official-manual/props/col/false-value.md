---
KEY: falseValue
KIND: column-property
PATH: props/col/false-value
ALIAS: 타입, 열에는, 기본적으로, 값만, 입력이
ALIAS_EN: false, value
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/false-value
---
# FalseValue ***(col)***

> `Bool타입` 열에는 기본적으로 `1(true)/0(false)`값만 입력이 가능합니다.

> 하지만 디비에 저장된 값이 `1(true)/0(false)`가 아닌 별도의 값인 경우를 대비하여 `0(false)`값에 해당하는 값을 해당 속성을 통해 설정합니다.

> 해당 속성을 통해 설정된 값은 데이터를 조회([doSearch](/docs/funcs/core/do-search),[loadSearchData](/docs/funcs/core/load-search-data)등)하거나 저장([doSave](/docs/funcs/core/do-save),[getSaveJson](/docs/funcs/core/get-save-json)등)할때 사용됩니다.

> 이 속성 값은 단지 서버와 데이터를 주고 받을때만 사용될 뿐, 해당 셀의 값을 [getValue](/docs/funcs/core/get-value)함수를 통해 확인시에는 `1(true)/0(false)`로 리턴됩니다.

### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|`Bool타입`의 열에 대해 `0(false)`(언체크)에 해당하는 값|


### Example
```javascript
//Bool Type 열에 대해서 서버에서 주고 받는 값을 Y/N으로 설정
options.Cols = [
    ...
    {
       Type: "Bool",
       Name: "ConfirmYN",
       Align: "Center",
       Width: 70,
       TrueValue: "Y",
       FalseValue: "N"
    },
    ...
];
```

### Try it
- [Set to "N" With Set to "Y" by TrueValue](https://jsfiddle.net/gh/get/library/pure/ibsheet/ibsheet8-manual-sample/tree/master/samples/properties/Col/TrueValue-FalseValue/)

### Read More
- [TrueValue col](./true-value)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
