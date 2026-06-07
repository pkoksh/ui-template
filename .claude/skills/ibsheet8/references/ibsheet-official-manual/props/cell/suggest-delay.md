---
KEY: suggestDelay
KIND: cell-property
PATH: props/cell/suggest-delay
ALIAS: 설정된, 셀에서, 글자를, 입력시, 나타나기
ALIAS_EN: suggest, delay
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cell/suggest-delay
---
# SuggestDelay ***(cell)***

> [Suggest](/docs/props/cell/suggest)가 설정된 셀에서 글자를 입력시 [Suggest](/docs/props/cell/suggest)가 나타나기 전까지 딜레이를 ms단위로 설정합니다. 

> debounce와 유사한 개념으로 딜레이를 설정한 시간 중에 다른 키가 입력되는 경우, 다시 설정한 시간만큼을 기다린 후 [Suggest](/docs/props/cell/suggest)를 표시합니다.

> 가령 입력하는 글자를 기준으로 `onSuggest()`이벤트에서 디비 조회를 하는 경우, 너무 빈번하게 서버를 호출하는 것을 방지할 수 있습니다. 


### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|입력 대기 시간 (`default: 0`)|



### Example
```javascript
//3번째 행의 "SaName" 컬럼에서 Suggest표시 전에 300ms 대기 시간을 둔다.
var row = sheet.getRowByIndex(3);
row["SaNameSuggetDelay"] = 300;
```

### Read More
- [Suggest cell](/docs/props/cell/suggest)
- [SuggestMin cell](./suggest-min)

### Since
|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
