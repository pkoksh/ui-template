---
KEY: resultText
KIND: cell-property
PATH: props/cell/result-text
ALIAS: 위배되는, 내용이, 입력시, 으로, 보여줄
ALIAS_EN: result, text
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cell/result-text
---
# ResultText ***(cell)***
> [ResultMask](./result-mask)에 위배되는 내용이 입력시 alert으로 보여줄 내용을 설정합니다.


### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|잘못된 내용이 입력시 보여질 경고문 내용|

### Example
```javascript
//특정 셀에서 ResultMask 속성 위배시 메세지 설정
var ROW = sheet.getRowById("AR10");
ROW["CLSResultText"] = "숫자만 입력 가능합니다.";
//변경내용 확인
sheet.refreshCell({row:ROW, col:"CLS"});
```

### Read More
- [ResultMask cell](./result-mask)
- [ResultMessage cell](./result-message)
- [EditMask cell](./edit-mask)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
