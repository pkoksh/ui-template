---
KEY: tipClass
KIND: row-property
PATH: props/row/tip-class
ALIAS: 풍선도움말, 객체에, 원하는, 클래스, 적용하여
ALIAS_EN: tip, class
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/row/tip-class
---
# TipClass ***(row)***

> 풍선도움말 객체에 원하는 `css클래스`를 적용하여 디자인을 설정 합니다.


### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|풍선도움말 객체에 적용할 css클래스 명|

### Example
```css
<style>
    .RedBold{color:red;font-weight:700;}
    .deepblue{color:#020079;}
</style>
```
```javascript

//특정 행에 풍선도움말 표시시 사용될 클레스를 설정.
var row = sheet.getRowById("AR55");
row["TipClass"] = "RedBold";


//조회 데이터에서 일부 행에 대해 풍선도움말 클레스를 설정.
{"data":[
    {"TipClass":"deepblue","ColName1":"Value1","ColName2":"Value2", ...},
    ...
]}
```

### Read More
- [Tip row](./tip)
- [TipPosition row](./tip-position)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
