---
KEY: tip
KIND: row-property
PATH: props/row/tip
ALIAS: 위에, 마우스, 커서, 오버시, 풍선도움말을
ALIAS_EN: tip
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/row/tip
---
# Tip ***(row)***

> 행 위에 마우스 커서 오버시 풍선도움말을 표시합니다.

> 설정을 통해 풍선도움말 사용 여부와 풍선도움말에서 표시될 내용까지 설정할 수 있습니다.

###
![Tip](/assets/imgs/tip.png "Tip 사용")
<!-- IMAGE: 스크린샷/예시 이미지 - Tip -->

### Type
`mixed`( `boolean` \| `string`)

### Options
|Value|Description|
|-----|-----|
|`0(false)`|풍선도움말 사용 안함|
|`1(true)`|풍선도움말 사용|
|`string`|풍선도움말에서 표시 될 내용 설정|

### Example
```javascript
//55번 행에 마우스 커서 오버시 풍선 도움말에 표시될 내용을 변경.
var row = sheet.getRowById("AR55");
row["Tip"] = "해당 건은 결제가 완료되었습니다.";


//조회 데이터에서 일부 행에 대해 풍선도움말 기능을 제거.
{"data":[
    {"Tip": 0, "ColName1": "Value1", "ColName2": "Value2", ...},
    ...
]}
```

### Read More
- [TipClass row](./tip-class)
- [TipPosition row](./tip-position)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
