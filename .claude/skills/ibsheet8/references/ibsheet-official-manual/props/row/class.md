---
KEY: class
KIND: row-property
PATH: props/row/class
ALIAS: 행에, 포함된, 셀에, 커스텀, 클래스
ALIAS_EN: class
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/row/class
---
# Class ***(row)***

> 행에 포함된 각 셀에 `커스텀 css 클래스`를 설정합니다.


> **<mark>주의</mark> : Class로 적용한 css는 엑셀 다운로드시 디자인 반영되지 않습니다.**

### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|css에 지정한 클래스 명|

### Example
```css
<style>
.rowAlert {font-weight:700;animation:blinkingText 1s infinite;}
@keyframes blinkingText{
0%{     color: #FF0000;    }
50%{     color: #FF0000;    }
80%{    color:transparent;  }
100%{   color: #FF0000;    }
}
.subTitle{color:#EDEDED;background-color:#666666;}
</style>
```
```javascript
// 특정행의 글자를 붉은색에 깜빡이게 변경한다.
var row = sheet.getRowById("AR11")
row["Class"] = "rowAlert";
sheet.refreshRow(row);

// 헤더행의 타이틀과 배경 색상을 변경한다.
options.Def.Header = {"Class": "subTitle"};
```

### Read More
- [AlternateClass row](./alternate-class)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
