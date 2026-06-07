---
KEY: color
KIND: column-property
PATH: props/col/color
ALIAS: 열의, 배경색상을, 설정합니다
ALIAS_EN: color
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/color
---
# Color ***(col)***

> 열의 배경색상을 설정합니다.

> 열의 색상은 상태에 따른 배경 색상의 영향을 받습니다.

> rgb(255,255,255)는 투명색이 됩니다.

### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|HEX형식 (ex:#FF00F0)
rgb형식 (ex:rgb(244,200,40)|

### Example

```javascript
//특정 열에 배경색을 "#ADADAD"로 설정
options.Cols = [
    ...
    {Type: "Text", Name: "Dept", Color: "#ADADAD", Width: 100 ...},
    ...
];
```

### Read More
- [TextColor col](./text-color)
- [TextStyle col](./text-style)
- [TextSize col](./text-size)
- [TextFont col](./text-font)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
