---
KEY: buttonWidth
KIND: row-property
PATH: props/row/button-width
ALIAS: 이고, 속성의, 값이, 경우, 셀에
ALIAS_EN: button, width
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/row/button-width
---
# ButtonWidth ***(row)***
> [Type col](/docs/props/col/type)이 [Button col](/docs/props/col/button)이고, [Button row](./button)속성의 값이 `Button`인 경우, 셀에 생성되는 버튼 객체의 너비를 설정합니다.


### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|버튼 태그의 너비(pixel단위)|

### Example
```javascript
//특정행의 들여쓰기 정도를 2로 설정
var rows = sheet.getDataRows();
rows[3]["ButtonWidth"] = "16px";
sheet.refreshRow(rows[3]);
```

### Read More
- [Type col](/docs/props/col/type)
- [Button col](/docs/props/col/button)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
