---
KEY: tipValue
KIND: cell-property
PATH: props/cell/tip-value
ALIAS: 셀의, 내용이, 특정값일때, 풍선도움말로, 보여줄
ALIAS_EN: tip, value
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cell/tip-value
---
# Tip+Value ***(cell)***

> 셀의 내용이 특정값일때 풍선도움말로 보여줄 문자를 설정합니다.

> 가령 TipY:"선택하셨습니다", TipN:"취소하셨습니다." 식으로 Tip 과 뒤에 Value를 결합한 속성명으로 보여질 문자를 설정합니다.

### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|풍선도움말에 보여질 문자열|

### Example
```javascript
//1. 메소드를 통해 특정 셀에 속성 적용 (열이름: CLS)
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "TipAA", "심사기준을 확인해 주세요.");
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "TipBB", "진행율을 확인해 주세요.");


//2. 객체에 직접 접근해서 속성 적용 (열이름: CLS)
var ROW = sheet.getRowById("AR10");
ROW["CLSY"] = "선택됨";
ROW["CLSN"] = "취소됨";
//변경내용 확인
sheet.refreshCell({row:ROW, col:"CLS"});


//3. 조회 데이터 내에서 속성 적용 (열이름: CLS)
{
    data:[
        {... , "CLS0":"반려","CLS1":"확인중","CLS2":"진행중","CLS3":"완료됨", ...}
    ]
}
```

### Read More
- [Tip cell](./tip-value)
- [TipPosition cell](./tip-position)
- [TipClass cell](./tip-class)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
