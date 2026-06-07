---
KEY: radioIconWidth
KIND: cell-property
PATH: props/cell/radio-icon-width
ALIAS: 속성을, 통해서, 라디오, 아이콘을, 커스텀
ALIAS_EN: radio, icon, width
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cell/radio-icon-width
---
# RadioIconWidth ***(cell)***
> [RadioIcon](/docs/props/cell/radio-icon)속성을 통해서 라디오 아이콘을 커스텀 이미지로 설정하는 경우 이미지의 너비를 pixel단위로 설정합니다.
### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|라디오 아이콘 이미지의 너비 (pixel단위)|




### Example
```javascript
//라디오 아이콘 이미지의 너비를 22px로 정의
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "RadioIcon", "|Off.gif|On.gif" );
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "RadioIconWidth", 22);
```

### Read More
- [RadioIcon cell](/docs/props/cell/radio-icon)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
