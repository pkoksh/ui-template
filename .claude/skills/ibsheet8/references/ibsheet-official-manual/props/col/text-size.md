---
KEY: textSize
KIND: column-property
PATH: props/col/text-size
ALIAS: 지정한, 열의, 글자, 크기를, 설정합니다
ALIAS_EN: text, size
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/text-size
---
# TextSize ***(col)***

> 지정한 열의 글자 크기를 설정합니다.

> `px, pt, em` 단위를 사용할 수 있으며, 단위를 지정하지 않으면 px기준으로 설정됩니다.
### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|크기숫자와 단위로 이루어진 문자열(ex: 25px)|

### Example
```javascript
//특정 열의 글자를 1.2em 지정합니다.
options.Cols = [
    ...
    {TextSize: "1.2em", Header: "부서", Type: "Text", Name: "Dept" ...},
    ...
];
```

### Read More
- [TextStyle col](./text-style)
- [TextColor col](./text-color)
- [TextFont col](./text-font)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
