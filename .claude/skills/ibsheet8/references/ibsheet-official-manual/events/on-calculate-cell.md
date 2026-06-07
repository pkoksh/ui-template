---
KEY: onCalculateCell
KIND: event
PATH: events/on-calculate-cell
ALIAS: 빈번하게, 발생하며, 사용, 용도가, 명확하지
ALIAS_EN: on, calculate, cell
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/events/on-calculate-cell
---
# !onCalculateCell ***(event)*** `[Deprecated]`

> **<mark>빈번하게 발생하며 사용 용도가 명확하지 않아 비공개 전환</mark>**

> 해당 기능은 8.1.x.x 버전 이후로 지원하지 않습니다.

> 8.2.x.x 버전 이후로 삭제됩니다.

<details>

> 시트에서 `Formula`가 계산되고 셀마다 계산이 완료될때 호출되는 이벤트입니다.

> 시트의 기본 설정되어 있는 `Formula` 및 사용자가 추가한 `Formula`를 셀마다 계산할때 발생합니다.

### Syntax

```
    onCalculateCell: function(paramObject) {

    }
or
    sheet.bind("onCalculateCell" , function(paramObject) {});
```

### Parameters

| Name | Type | Description |
|----------|-----|-------|
|sheet|`object`|`Formula` 계산이 이루어지는 시트 객체|
|show|`boolean`|화면 반영 여부|
|row|`object`|`Formula` 계산이 이루어지는 셀이 위치한 [데이터 로우 객체](/docs/appx/row-object)|
|col|`string`|`Formula` 계산이 이루어지는 셀의 열이름|
|val|`mixed`|`Formula` 계산된 값|

### Return
***mixed (셀에 설정할 값 (return이 없거나 null이면 값을 바꾸지 않음))***

### Example
```javascript
options.Events = {
    onCalculateCell : function (evtParams) {
       // InfoRow의 Cnt Cell의 값을 다른 Solid 행 Count Cell에 적용
       if (evtParams.row && evtParams.row.id == "InfoRow" && evtParams.col == "Cnt") {
           evtParams.sheet.Rows.InfoRow["Count"] = evtParams.val;
           evtParams.sheet.refreshCell(evtParams.sheet.Rows.InfoRow, "Count");
       }
    }
}
```

### Read More

- [CanFormula row](/docs/props/row/can-formula)
- [calculate method](/docs/funcs/core/calculate)
- [onAfterCalculate event](/docs/events/on-after-calculate)
- [onBeforeCalculate event](/docs/events/on-before-calculate)

</details>

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|core|8.1.0.0|`Deprecated`|