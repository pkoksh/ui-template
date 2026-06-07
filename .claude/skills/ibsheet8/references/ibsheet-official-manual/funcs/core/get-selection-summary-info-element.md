---
KEY: getSelectionSummaryInfoElement
KIND: method
PATH: funcs/core/get-selection-summary-info-element
ALIAS: sheet.getSelectionSummaryInfoElement, getSelectionSummaryInfoElement(), 선택한, 영역의, 개수, 합계, 평균
ALIAS_EN: get, selection, summary, info, element, total, sum
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/get-selection-summary-info-element
---
# getSelectionSummaryInfoElement ***(method)***

> 선택한 영역의 셀 개수 및 합계/평균 값 정보를 시트 외부의 Dom Element 에 표시하고 있을 경우 정보 출력되는 Dom Element 를 반환합니다.


### Syntax
```javascript
HTML Element getCountInfoElement ();
```

### Return Value
***object*** : 선택한 영역의 셀 개수 및 합계/평균 값 정보가 출력 되는 Dom Element

### Example
```javascript
// 선택한 영역의 셀 개수 및 합계/평균 값 정보가 출력 되는 Dom Element 확인
sheet.getSelectionSummaryInfoElement ();
```

### Read More
- [InfoRowConfig cfg](/docs/props/cfg/info-row-config)
- [SelectionSummary cfg](/docs/props/cfg/selection-summary)
- [setSelectionSummaryInfoElement method](./set-selection-summary-info-element)


### Since

|product|version|desc|
|---|---|---|
|core|8.1.0.6|기능 추가|