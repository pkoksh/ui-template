---
KEY: radioUncheck
KIND: cell-property
PATH: props/cell/radio-uncheck
ALIAS: 셀에서, 클릭하여, 선택한, 아이템을, 다시
ALIAS_EN: radio, uncheck
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cell/radio-uncheck
---
# RadioUncheck ***(cell)***
> [Type](/docs/appx/type)이 `Radio`인 셀에서, 한 번 클릭하여 선택한 아이템을 다시 클릭하여 체크해제 하게끔 허용할지 여부를 설정합니다.
### Type
`Boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|체크해제를 허용하지 않음 (`default`)
|`1(true)`|체크해제를 허용|

### Example
```javascript
//체크 해제를 허용
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "RadioUncheck", 1);
```

### Read More

- [RadioIcon cell](./radio-icon)
- [RadioIconWidth cell](./radio-icon-width)
- [Type appendix](/docs/appx/type)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
