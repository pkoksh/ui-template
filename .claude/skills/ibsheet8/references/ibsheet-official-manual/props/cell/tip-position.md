---
KEY: tipPosition
KIND: cell-property
PATH: props/cell/tip-position
ALIAS: 풍선도움말, 객체의, 위치나, 크기, 정렬을
ALIAS_EN: tip, position, size
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cell/tip-position
---
# TipPosition ***(cell)***

> 풍선도움말 객체의 위치나 크기,정렬을 설정합니다.


### Type
`object`

### Options
|Value|Description|
|-----|-----|
|`X`|풍선도움말의 X축 가감 위치|
|`Y`|풍선도움말의 Y축 가감 위치|


### Example

```javascript
//1. 메소드를 통해 특정 셀에 속성 적용 (열이름: CLS)
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "TipPosition", {X:0, Y:-20});


//2. 객체에 직접 접근해서 속성 적용 (열이름: CLS)
var ROW = sheet.getRowById("AR10");
ROW["CLSTipPosition"] = {X:-30};
//변경내용 확인
sheet.refreshCell({row:ROW, col:"CLS"});


//3. 조회 데이터 내에서 속성 적용 (열이름: CLS)
{
    data:[
        {... , "CLSTipPosition": {Y:210}, ...}
    ]
}
```

### Read More
- [Tip cell](./tip)
- [TipClass cell](./tip-class)
### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
