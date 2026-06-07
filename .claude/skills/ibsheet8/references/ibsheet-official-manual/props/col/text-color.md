---
KEY: textColor
KIND: column-property
PATH: props/col/text-color
ALIAS: 지정한, 열에, 글자색을, 설정합니다
ALIAS_EN: text, color
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/text-color
---
# TextColor ***(col)***

> 지정한 열에 글자색을 설정합니다.


### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|HEX형식 (ex:#FF00F0)
rgb형식 (ex:rgb(244,200,40)|

### Example
```javascript
//특정 열의 글자를 파란색으로 표시한다.
options.Cols = [
    ...
    {TextColor: "#0000FF", Header: "부서", Type: "Text", Name: "Dept" ...},
    ...
];
```

### Read More
- [TextStyle col](./text-style)
- [TextSize col](./text-size)
- [TextFont col](./text-font)
- [Color col](./color)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
