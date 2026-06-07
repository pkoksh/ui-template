---
KEY: tip
KIND: cell-property
PATH: props/cell/tip
ALIAS: 위에, 마우스, 커서, 오버시, 풍선도움말을
ALIAS_EN: tip
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cell/tip
---
# Tip ***(cell)***

> 셀 위에 마우스 커서 오버시 풍선도움말을 표시할지 여부와 표시될 내용을 설정 합니다.

> 기본적으로 html태그를 사용하여 상세한 내용을 표시할 수 있으나, cfg의 [StandardTip](/docs/props/cfg/standard-tip)의 값이 `1(true)`인 경우에는 브라우저의 내장 툴팁을 사용하게 되어 html태그를 표현할수 없습니다.

### Type
`mixed`( `boolean` \| `string` )

### Options
|Value|Description|
|-----|-----|
|`0(false)`|풍선도움말 사용 안함|
|`1(true)`|풍선도움말 사용|
|`string`|풍선도움말에서 표시 될 내용 설정|

### Example
```javascript
//1. 메소드를 통해 특정 셀에 속성 적용 (열이름: CLS)
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "Tip", 0);


//2. 객체에 직접 접근해서 속성 적용 (열이름: CLS)
var ROW = sheet.getRowById("AR10");
ROW["CLSTip"] = 1;
//변경내용 확인
sheet.refreshCell({row:ROW, col:"CLS"});


//3. 조회 데이터 내에서 속성 적용 (열이름: CLS)
{
    data:[
        {... , "CLSTip":"작업 시작일과 종료일을 입력해 주세요." , ...}
    ]
}
```

### Read More
- [Tip+Value cell](./tip-value)
- [TipClass cell](./tip-class)
- [StandardTip cfg](/docs/props/cfg/standard-tip)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
