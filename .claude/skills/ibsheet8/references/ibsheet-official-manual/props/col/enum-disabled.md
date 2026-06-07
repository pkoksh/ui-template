---
KEY: enumDisabled
KIND: column-property
PATH: props/col/enum-disabled
ALIAS: 속성을, 설정한, 아이템들의, 선택, 불가능
ALIAS_EN: enum, disabled, select, selection
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/enum-disabled
---
# EnumDisabled ***(col)***
> [Enum](./enum) 속성을 통해 설정한 아이템들의 선택 불가능 여부를 설정합니다.

> 첫번째 글자를 구분자로 설정하게 됩니다. 


### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|첫번째 글자를 구분자로 하는 문자열 (ex:"#1#0")|

### Example
```javascript
//Enum 열에 item의 선택 불가능 여부를 설정한다.
options.Cols = [
  {
    "Header": "대분류",
    "Type": "Enum",
    "Name": "Category1",
    "Enum": "|가정/살림|경제 경영|국어 외국어 사전|만화/라이트노벨|소설/시/희곡|어린이|역사|예술|인문|자기계발|자연과학",
    "EnumKeys": "|A0|A1|A2|A3|A4|A5|A7|A8|A9|A10|A11",
    "EnumDisabled": "|1|0|0|0|0|1|0|1|1|0|0"
  }
];
```

### Read More
- [Enum col](./enum)
- [EnumKeys col](./enum-keys)
- [EnumMenu col](./enum-menu)


### Since

|product|version|desc|
|---|---|---|
|core|8.3.0.16|기능 추가|
