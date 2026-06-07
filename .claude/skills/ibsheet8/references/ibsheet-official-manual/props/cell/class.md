---
KEY: class
KIND: cell-property
PATH: props/cell/class
ALIAS: 셀에, 적용할, 커스텀, 명을, 설정합니다
ALIAS_EN: class
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cell/class
---
# Class ***(cell)***

> 셀에 적용할 커스텀 css class명을 설정합니다.


> **<mark>주의</mark> : Class로 적용한 css는 엑셀 다운로드시 디자인 반영되지 않습니다.**

### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|열에 적용할 css class 명|


### Example
```css
<style>
.RedBold{color:#FF0000;font-weight:700}
</style>
```
```javascript
//특정 셀에 "RedBold" 클래스를 적용
var ROW = sheet.getRowById("AR10");
ROW["CLSClass"] = "RedBold";
//변경내용 반영
sheet.refreshCell({row:ROW, col:"CLS"});
```

### Read More



### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
