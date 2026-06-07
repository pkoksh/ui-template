---
KEY: getSubsumOptions
KIND: method
PATH: funcs/common/get-subsum-options
ALIAS: sheet.getSubsumOptions, getSubsumOptions(), 시트에, 소계, 기능을, 사용시, 설정된
ALIAS_EN: get, subsum, options, subtotal
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/common/get-subsum-options
---
# getSubSumOptions ***(method)***

> [makeSubTotal()](../core/make-sub-total)로 시트에 소계 기능을 사용시, 설정된 옵션을 확인합니다. 


### Syntax
```javascript
object getSubSumOptions();
```

### Return Value
***array[option]*** makeSubTotal()에 설정된 옵션
```
[
  {
    "stdCol": 3,
    "avgCols": "B|C",
    "captionCol": [
      {
        "col": "sUnit",
        "val": "%s: %col"
      }
    ],
    "position": "bottom",
    "color": "#dbe2eb",
    "stdColName": "sUnit"
  },
  {
    "stdCol": 2,
    "sumCols": "B|C",
    "position": "bottom",
    "color": "#b2c4d9",
    "stdColName": "sPolicy",
    "captionCol": [
      {
        "col": "sPolicy",
        "val": "%s : %col",
        "cumVal": "%s : %col"
      }
    ]
  }
]
```

### Example
```javascript
// 소계에 설정된 옵션을 배열 형태로 반환합니다.
var opt = sheet.getSubSumOptions();
```

### Read More
- [makeSubTotal method](../core/make-sub-total) 

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
