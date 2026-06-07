---
KEY: enumFilter
KIND: column-property
PATH: props/col/enum-filter
ALIAS: 타입, 셀을, 편집, 드롭다운, 리스트를
ALIAS_EN: enum, filter, edit, editable
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/enum-filter
---
# EnumFilter ***(col)***
> [Enum](/docs/appx/type.md) 타입 셀을 편집 시, 드롭다운 리스트를 필터링 할 수 있는 입력란을 표시합니다.

> 해당 칸에 입력된 문자열을 포함하는 [Enum](/enum.md)들만 드롭다운 리스트로 표시됩니다.


> 이 기능은 [CaseSensitive](./case-sensitive) 설정에 따라 대소문자를 구분합니다.

> [EnumMenu](./enum-menu) 속성과 함께 사용할 수 없습니다.

 

<!--[EnumFilter](/assets/imgs/EnumFilter.gif "EnumFilter")
-->

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`boolean`| 드롭다운 리스트의 필터 항목 표시 여부 |

### Example
```javascript
options.Cols = [
  {
    Type: "Enum",
    Name: "relation",
    Enum: "|직계존속|직계비속|배우자|자녀",
    EnumKeys: "|A0|A1|B0|C0",
    EnumFilter: true  
  },
];
```

### Read More
- [Enum col](./enum)
- [EnumKeys col](./enum-keys)
- [EnumMenu col](./enum-menu)
- [CaseSensitive col](./case-sensitive)
- [Type appendix](/docs/appx/type)

### Since

|product|version|desc|
|---|---|---|
|core|8.3.0.48|기능 추가|
