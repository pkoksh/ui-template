---
KEY: kind
KIND: row-property
PATH: props/row/kind
ALIAS: 행이, 갖고, 있는, 기능을, 의미합니다
ALIAS_EN: kind
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/row/kind
---
# Kind ***(row)***

> 각 행이 갖고 있는 기능을 의미합니다.

> 행 마다의 기능(헤더, 데이터, 필터, 그룹 등)을 확인할 때 사용됩니다.

> 이 속성의 값은 동적으로 수정할 수 없으며, 확인용도로만 사용하실 것을 권합니다.

> `Kind`의 자세한 종류는 **Appendix**에 [Kind attribute](/docs/appx/kind) 를 참고하세요.

### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|행의 기능|


### Example
```javascript
//행의 Kind를 확인한다.
var row = sheet.getRowById("CustRow");

alert(row["Kind"]);
```

### Read More
- [Kind appendix](/docs/appx/kind)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
