---
KEY: sizeIgnoreDecimalSep
KIND: cell-property
PATH: props/cell/size-ignore-decimal-sep
ALIAS: 입력된, 문자열이, 숫자형인, 경우, 설정된
ALIAS_EN: size, ignore, decimal, sep
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cell/size-ignore-decimal-sep
---
# SizeIgnoreDecimalSep ***(cell)***
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
//1. 메소드를 통해 특정 셀에 속성 적용 (열이름: CLS)
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "SizeIgnoreDecimalSep", true);


//2. 객체에 직접 접근해서 속성 적용 (열이름: CLS)
var ROW = sheet.getRowById("AR10");
ROW["CLSSizeIgnoreDecimalSep"] = true;
//변경내용 확인
sheet.refreshCell({row:ROW, col:"CLS"});

//3. 조회 데이터 내에서 속성 적용  (열이름: CLS)
{
    data:[
        {... , "CLSSizeIgnoreDecimalSep": true ...}
    ]
}
```


### Read More
- [Size cell](/docs/props/cell/size)
- [UnicodeByteMode cfg](/docs/props/cfg/unicode-byte-mode)


### Since

|product|version|desc|
|---|---|---|
|core|8.3.0.15|기능 추가|
