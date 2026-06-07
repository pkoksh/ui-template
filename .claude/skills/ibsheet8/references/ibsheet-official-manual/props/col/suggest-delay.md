---
KEY: suggestDelay
KIND: column-property
PATH: props/col/suggest-delay
ALIAS: 설정된, 컬럼에서, 글자를, 입력시, 나타나기
ALIAS_EN: suggest, delay
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/suggest-delay
---
# SuggestDelay ***(col)***

> `Suggest`가 설정된 컬럼에서 글자를 입력시 `Suggest`가 나타나기 전까지 딜레이를  ms 단위로 설정합니다. 

> `debounce`와 유사한 개념으로 딜레이를 설정한 시간 중에 다른 키가 입력되는 경우, 다시 설정한 시간만큼을 기다린 후 `Suggest`를 표시합니다.

> 가령 입력하는 글자를 기준으로 `onSuggest()`이벤트에서 디비 조회를 하는 경우, 너무 빈번하게 서버를 호출하는 것을 방지할 수 있습니다. 


### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|입력 대기 시간 (`default: 0`)|



### Example
```javascript
options.Cols = [
    ...
    {
        Type: "Text",
        Suggest: "",
        //Suggest가 설정된 컬럼에 입력시 300ms 기다린 후 Suggest를 발생시킨다.
        SuggestDelay: 300,
        Name: "CarName",
        Width: 120
    },
    ...
];
```

### Read More
- [SuggestMin col](./suggest-min)

### Since
|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
