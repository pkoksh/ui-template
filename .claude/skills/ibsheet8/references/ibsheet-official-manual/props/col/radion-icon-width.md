---
KEY: radionIconWidth
KIND: column-property
PATH: props/col/radion-icon-width
ALIAS: 속성을, 통해서, 라디오, 아이콘을, 커스텀
ALIAS_EN: radion, icon, width, radio
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/radion-icon-width
---
# RadioIconWidth ***(col)***
> [RadioIcon](./radio-icon)속성을 통해서 라디오 아이콘을 커스텀 이미지로 설정하는 경우 이미지의 너비를 pixel단위로 설정합니다.
### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|라디오 아이콘 이미지의 너비 (pixel단위)|




### Example
```javascript
//라디오 아이콘 이미지의 너비를 22px로 정의
options.Cols = [
    ...
    {Type: "Radio", Name: "st1", RadioIconWidth: 22, RadioIcon: "|Off.gif|On.gif" ...},
    ...
];
```

### Read More
- [RadioIcon col](./radio-icon)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
