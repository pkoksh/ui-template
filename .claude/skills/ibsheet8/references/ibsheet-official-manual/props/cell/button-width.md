---
KEY: buttonWidth
KIND: cell-property
PATH: props/cell/button-width
ALIAS: 이고, 속성의, 값이, 경우, 셀에
ALIAS_EN: button, width
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cell/button-width
---
# ButtonWidth ***(cell)***
> [Type](/docs/appx/type)이 `Button`이고, [Button](/docs/props/cell/button)속성의 값이 `Button`인 경우, 셀에 생성되는 버튼 객체의 너비를 설정합니다.



### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|버튼 객체의 너비|

### Example
```javascript
//버튼의 너비를 80px로 설정
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "ButtonWidth", 80);
```

### Read More
- [Button cell](/docs/props/cell/button)
- [Type appendix](/docs/appx/type)



### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
