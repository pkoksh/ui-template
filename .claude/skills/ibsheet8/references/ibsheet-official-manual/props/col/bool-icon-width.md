---
KEY: boolIconWidth
KIND: column-property
PATH: props/col/bool-icon-width
ALIAS: 속성을, 통해서, 체크박스, 아이콘을, 커스텀
ALIAS_EN: bool, icon, width
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/bool-icon-width
---
# !BoolIconWidth ***(col)***
> [BoolIcon](./bool-icon)속성을 통해서 체크박스 아이콘을 커스텀 이미지로 설정하는 경우 이미지의 너비를 pixel단위로 설정합니다.
### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|체크박스 아이콘 이미지의 너비 (pixel단위)|




### Example
```javascript
//체크박스 아이콘 이미지의 너비를 22px로 정의
options.Cols = [
    ...
    {Type: "Bool", Name: "st1", BoolIconWidth: 22, BoolIcon: "|Off.gif|On.gif", ...},
    ...
];
```

### Read More
- [BoolIcon col](./bool-icon)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
