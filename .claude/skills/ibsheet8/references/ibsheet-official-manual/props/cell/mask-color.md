---
KEY: maskColor
KIND: cell-property
PATH: props/cell/mask-color
ALIAS: 속성, 설정시, 정규식에, 위배되는, 값이
ALIAS_EN: mask, color, property, attribute
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cell/mask-color
---
# !MaskColor ***(cell)***

> [EditMask](./edit-mask) 속성 설정시, 정규식에 위배되는 값이 입력이 입력되면 보여줄 셀 배경색을 설정합니다.

> 기본색상은 빨강(red)입니다.


### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|색상 HEX형식 (ex:#FF00F0)
rgb형식 (ex:rgb(244,200,40)|

### Example
```javascript
//띄어쓰기 입력시 노란색으로 배경색이 반짝입니다.
options.Cols = [
    ...
    {Type:"Text", EditMask:"^\\S*$", MaskColor:"#FFFF00", Name:"CN_Code", Width:120, ...},
    ...
];
```
### Read More
- [EditMask cell](./edit-mask)
- [ResultMask cell](./result-mask)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
