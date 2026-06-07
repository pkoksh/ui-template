---
KEY: textFont
KIND: column-property
PATH: props/col/text-font
ALIAS: 특정, 열의, 설정합니다
ALIAS_EN: text, font
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/text-font
---
# TextFont ***(col)***

> 특정 열의 `font-family`를 설정합니다.

> 여러개 폰트를 지정하거나 폰트에 띄어씌기가 들어가는 경우에는 `single(')/double quotation(")`으로 지정합니다.
### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|글자체|

### Example
```javascript
//특정열의 글자체를 수정합니다.
options.Cols = [
    ...
    {
        TextFont: "Dotum",
        Header: "부서",
        Type: "Text",
        Name: "Dept"
    },
    ...
];
```

### Read More
- [TextStyle col](./text-style)
- [TextColor col](./text-color)
- [TextSize col](./text-size)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
