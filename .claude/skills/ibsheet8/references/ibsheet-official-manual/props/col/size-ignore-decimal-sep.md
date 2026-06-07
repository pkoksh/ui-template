---
KEY: sizeIgnoreDecimalSep
KIND: column-property
PATH: props/col/size-ignore-decimal-sep
ALIAS: 입력된, 문자열이, 숫자형인, 경우, 설정된
ALIAS_EN: size, ignore, decimal, sep
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/size-ignore-decimal-sep
---
# SizeIgnoreDecimalSep ***(col)***
> 입력된 문자열이 숫자형인 경우, 설정된 열에 입력 가능한 글자 수에서 자릿수 구분자와 소수점 구분자의 값들을 글자 수에서 제외하는 기능입니다.

> Locale메세지 파일(ko.js,en.js등)에서 자릿수 구분자는 `Format.GroupSeparator`, 소수점 구분자는 `Format.DecimalSeparator`로 설정되어 있습니다.

> **<mark>주의</mark> : Col 혹은 Cell에 `Size` 속성이 설정되어 있어야 해당 기능이 동작합니다.**



### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`boolean`|입력된 데이터에서 자릿수 구분자와 소수점 구분자를 이용하여 숫자형인지 판단하고, 숫자형 데이터일 경우 구분자 문자들을 입력가능한 글자수에서 제외 여부
(`Int`, `Float` type: `default:1(true)`, 그 외의 type: `default:0(false)`)
전 세계에서 사용되는 자릿수 구분자(`Format.GroupSeparator`) 문자: `,`, `.`, ` `, `'`
전 세계에서 사용되는 소수점 구분자(`Format.DecimalSeparator`) 문자: `,`, `.`|


### Example
```javascript
//FloatData열에 최대 10글자까지 입력가능, 데이터가 숫자형인 경우 구분자를 입력제한 글자수에서 제외
options.Cols = [
    ...
    {Type: "Text", Size: 10, SizeIgnoreDecimalSep: true, Name: "FloatData", Width: 120 ...},
    ...
];
```


### Read More
- [Size col](/docs/props/col/size)
- [UnicodeByteMode cfg](/docs/props/cfg/unicode-byte-mode)


### Since

|product|version|desc|
|---|---|---|
|core|8.3.0.15|기능 추가|
