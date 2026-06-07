---
KEY: enumFilter
KIND: cell-property
PATH: props/cell/enum-filter
ALIAS: 타입, 셀을, 편집, 드롭다운, 리스트를
ALIAS_EN: enum, filter, edit, editable
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cell/enum-filter
---
# EnumFilter ***(cell)***
> [Enum](/docs/appx/type.md) 타입 셀을 편집 시, 드롭다운 리스트를 필터링 할 수 있는 입력란을 표시합니다.

> 해당 칸에 입력된 문자열을 포함하는 [Enum](/enum.md)들만 드롭다운 리스트로 표시됩니다.


> 이 기능은 [CaseSensitive](./case-sensitive) 설정에 따라 대소문자를 구분합니다.

> [EnumMenu](./enum-menu) 속성과 함께 사용할 수 없습니다.

 

![EnumFilter](/assets/imgs/EnumFilter.gif "EnumFilter")
<!-- IMAGE: 스크린샷/예시 이미지 - EnumFilter -->


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`boolean`| 드롭다운 리스트의 필터 항목 표시 여부 |

### Example
```javascript
//1. 메소드를 통해 특정 셀에 속성 적용 (열이름 :CLS )
sheet.setAttribute(sheet.getRowById("AR99"), "CLS", "EnumFilter", true);

//2. 객체에 직접 접근해서 속성 적용 (열이름 :CLS )
var ROW = sheet.getRowById("AR10");
ROW["CLSEnumFilter"] = true;

//3. 조회 데이터 내에서 속성 적용  (열이름 :CLS )
{
  data: [
    {
      "CLS": "A0"
      "CLSEnumFilter": true
    }
  ]
}
```

### Read More
- [Enum cell](./enum)
- [EnumKeys cell](./enum-keys)
- [EnumMenu cell](./enum-menu)
- [CaseSensitive cell](./case-sensitive)
- [Type appendix](/docs/appx/type)

### Since

|product|version|desc|
|---|---|---|
|core|8.3.0.48|기능 추가|
