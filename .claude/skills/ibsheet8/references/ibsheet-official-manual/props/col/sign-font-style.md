---
KEY: signFontStyle
KIND: column-property
PATH: props/col/sign-font-style
ALIAS: 숫자형, 컬럼, 타입, 에서, 내용과
ALIAS_EN: sign, font, style
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/sign-font-style
---
# SignFontStyle ***(col)***

> 숫자형 컬럼 (Int, Float 타입)에서 7장 appendix의 [Format](/docs/appx/format)의 내용과 같이 양수, 음수, 0 일때의 Text속성들을 설정하여 적용하실 수 있습니다.

> Col의 Text속성 ([TextColor](./text-color), [TextFont](./text-font), [TextSize](./text-size), [TextStyle](./text-style)) 보다 우선 적용 됩니다.

> 양수, 음수, 0의 구분자는 `locale/*.js` 파일에 `ValueSeparator`로 설정된 문자열을 사용합니다.



> **<mark>주의</mark> : SignFontStyle은 데이터에 따라 속성이 적용되기 때문에 Cell에 해당 Text속성들이 적용됩니다.** 

> **<mark>주의</mark> : 빈 값이나 '', null로 값 설정 시, 이전에 적용된 속성 값이 유지 됩니다.** 



### Type
`object`

### Options
|Name|Type|Required|Description|
|-----|-----|-----|-----|
|`TextColor`|`string`|선택|숫자형의 지정한 열에서 데이터에 따라 양수, 음수, 0일 때 적용하고자 하는 글자색([TextColor](./text-color))을 설정합니다.
ex) "SignFontStyle": {"TextColor": "red;blue;orange", ...}|
|`TextFont`|`string`|선택|숫자형의 지정한 열에서 데이터에 따라 양수, 음수, 0일 때 적용하고자 하는 글자 폰트([TextFont](./text-font))를 설정합니다.
ex) "SignFontStyle": {TextFont: "Gulim, Helvetica;Malgun Gothic;Times New Roman", ...}|
|`TextSize`|`string`|선택|숫자형의 지정한 열에서 데이터에 따라 양수, 음수, 0일 때 적용하고자 하는 글자 크기([TextSize](./text-size))를 설정합니다.
ex) "SignFontStyle": {TextSize: "12px;15px;5px", ...}|
|`TextStyle`|`string`|선택|숫자형의 지정한 열에서 데이터에 따라 양수, 음수, 0일 때 적용하고자 하는 글자 스타일([TextStyle](./text-style))를 숫자로 설정합니다.
ex) "SignFontStyle": {TextStyle: "5;2;8", ...}|

### Example
```javascript
options.Cols = [
    ...
    // 숫자형 컬럼인 컬럼명이 intData인 열에서 양수, 음수, 0일 때의 Text속성 적용
    {Type: "Int", Name: "IntData", SignFontStyle: {TextColor: "red;blue;yellow", TextFont: "Gulim;Malgun Gothic;Helvetica", TextSize: "15px;10em;11pt", TextStyle: "1,2,4"} ...},
    ...
];

// IntData 열에 SignFontStyle 속성 적용, 양수, 음수 일때는 기존의 TextColor 유지(생성 시 설정된 정보와 같이 양수일 때는 red, 음수일 때는 blue로 유지), 0일 때는 aqua로 글자색 적용
sheet.setAttribute("", "IntData", "SignFontStyle", {TextColor: ";;aqua"});
```


### Read More
- [TextColor col](./text-color)
- [TextFont col](./text-font)
- [TextSize col](./text-size)
- [TextStyle col](./text-style)
- [SignFontStyle cell](/docs/props/cell/sign-font-style)


### Since

|product|version|desc|
|---|---|---|
|core|8.3.0.19|기능 추가|
