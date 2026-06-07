---
KEY: tipClass
KIND: cell-property
PATH: props/cell/tip-class
ALIAS: 풍선도움말, 객체에, 원하는, 클래스를, 적용하여
ALIAS_EN: tip, class
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cell/tip-class
---
# TipClass ***(cell)***

> 풍선도움말 객체에 원하는 css클래스를 적용하여 디자인을 설정 합니다.


### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|풍선도움말 객체에 적용할 클레스 명|

### Example
```css
<style>
    .RedBold{color:red;font-weight:700;}
    .deepblue{color:#020079;}
</style>
```
```javascript
//1. 메소드를 통해 특정 셀에 속성 적용 (열이름: CLS)
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "TipClass", "RedBold");


//2. 객체에 직접 접근해서 속성 적용 (열이름: CLS)
var ROW = sheet.getRowById("AR10");
ROW["CLSTipClass"] = "deepblue";
//변경내용 확인
sheet.refreshCell({row:ROW, col:"CLS"});


//3. 조회 데이터 내에서 속성 적용 (열이름: CLS)
{
    data:[
        {... , "CLSTipClass": "RedBold", ...}
    ]
}
```

### Read More
- [Tip cell](./tip)
- [Tip+Value cell](./tip-value)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
