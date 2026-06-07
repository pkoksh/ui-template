---
KEY: onBeforeCalculate
KIND: event
PATH: events/on-before-calculate
ALIAS: 빈번하게, 발생하며, 사용, 용도가, 명확하지
ALIAS_EN: on, before, calculate
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-before-calculate
---
# !onBeforeCalculate ***(event)***

> **<mark>빈번하게 발생하며 사용 용도가 명확하지 않아 비공개 전환</mark>**

> 시트에서 `Formula`가 계산을 시작할때 호출되는 이벤트입니다.

> 시트의 기본 설정되어 있는 `Formula` 및 사용자가 추가한 `Formula`를 계산하기 전에 발생합니다. 

> `return` 값에 따라 계산 중단 여부를 설정할 수 있습니다.

### Syntax

```
    onBeforeCalculate: function(paramObject) {

    }
or
    sheet.bind("onBeforeCalculate" , function(paramObject) {});
```

### Parameters

| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|`Formula` 계산이 시작된 시트 객체|
|show|`boolean`|화면 반영 여부
`Formula` 계산 함수 (`calculate()`, `addFormula()`, `setFormulaRow()`) 에서 `render`, `norender`의 값에 따라 반환 값이 바뀜
`0`:화면에 반영 안함 (`render:0(false)`, `norender:1(true)`)
`1`:화면에 반영 (`render:1(true)`, `norender:0(false)`)|
|row|`object`|`Formula` 계산이 시작된 셀이 위치한 [데이터 로우 객체](/docs/appx/row-object)|
|col|`string`|`Formula` 계산이 시작된 셀의 열이름|

### Return
***boolean***

### Example
```javascript
options.Events = {
    onBeforeCalculate:function(evtParam){
        console.log("==================== [" + evtParams.sheet.id + "] 시트 Formula 계산 시작 ====================");
        //return true; 계산 중단
    }
}
```

### Read More

- [CanFormula row](/docs/props/row/can-formula)
- [calculate method](/docs/funcs/core/calculate)
- [onCalculateCell event](/docs/events/on-calculate-cell)
- [onAfterCalculate event](/docs/events/on-after-calculate)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
