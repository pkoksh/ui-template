---
KEY: textStyle
KIND: column-property
PATH: props/col/text-style
ALIAS: 지정한, 열의, 글자에, 숫자로, 설정합니다
ALIAS_EN: text, style
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/text-style
---
# TextStyle ***(col)***

> 지정한 열의 글자에 대한 `font-weight, font-style, font-variant, text-decoration`를 숫자로 설정합니다.

> 숫자를 서로 더해서 여러 속성을 동시에 적용하 실 수 있습니다.


### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`1`| 굵게 Bold|
|`2`| 기울임 Italic|
|`4`| 밑줄 Underline|
|`8`| 취소선 Strike|
|`16`| 윗줄 Overline|
|`32`| 작은 대문자 Small Caps|


### Example
```javascript
//특정 열의 글자를 기울임이면서 밑줄로 표시한다.
options.Cols = [
    ...
    {TextStyle: 6, Header: "부서", Type: "Text", Name: "Dept" ...},
    ...
];
```

### Read More
- [TextColor col](./text-color)
- [TextSize col](./text-size)
- [TextFont col](./text-font)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
