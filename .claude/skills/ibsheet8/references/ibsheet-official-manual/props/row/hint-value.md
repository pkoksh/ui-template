---
KEY: hintValue
KIND: row-property
PATH: props/row/hint-value
ALIAS: 힌트는, 열의, 너비보다, 셀의, 내용이
ALIAS_EN: hint, value
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/row/hint-value
---
# HintValue ***(row)***

> 힌트는 열의 너비보다 셀의 내용이 많은 경우, 마우스 커서가 해당 셀 위에 오버시 해당 셀의 너비를 늘려 가려진 내용을 보여주는 기능입니다.

> 이 기능은 행단위로 힌트 기능 활성화시 보여질 내용을 변경/설정합니다.


###
![HintValue](/assets/imgs/hintValue.png "마우스 커서가 셀에 오버시 설정한 글자가 보여짐")
<!-- IMAGE: 스크린샷/예시 이미지 - HintValue -->

### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|힌트 활성화시 보여질 내용|

### Example
```javascript
//10번 행에 대해서는 Hint기능 사용시 원래 내용과 다른 내용이 보여지게 끔 한다.
var row = sheet.getRowById("AR10");
row["HintValue"] = "해당 건은 결제가 완료되었습니다.";


//조회 데이터에서 일부 행에 대해 원래 셀의 내용과 다른 내용이 보여지게 끔 한다.
{"data":[
    {"HintValue":"의심거래항목입니다.", "ColName1":"Value1", "ColName2":"Value2", ...},
    ...
]}
```

### Read More
- [ShowHint row](./show-hint)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
