---
KEY: groupChar
KIND: column-property
PATH: props/col/group-char
ALIAS: 그룹, 기준, 내에서, 특정, 문자를
ALIAS_EN: group, char
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/group-char
---
# GroupChar ***(col)***
> 그룹 기준 열 내에서 특정 문자를 기준으로 Split하여 하위 노드로 만들어주는 기능입니다.

> 가령 열에 "ABCD-EF12","ABCD-EF22"와 같은 값이 있고, `GroupChar: "-"` 로 선언하면 실제 값은 다음과 같이 보여지게 됩니다.


###
![GroupChar](/assets/imgs/groupChar.png "내용 내에서 특정 문자를 기준으로 다시 그룹핑한다.")
<!-- IMAGE: 스크린샷/예시 이미지 - GroupChar -->


### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|그룹 데이터 내에서 나눌 기준 문자|

### Example
```javascript
//특정문자를 기준으로 그룹핑을 나눈다
options.Cols = [
    ...
    {Type: "Text", Name: "Product_Name", Width: 100, GroupChar: "-", ...},
    ...
];
```

### Read More
- [GroupFormat cfg](/docs/props/cfg/group-format)
- [MaxChars col](./max-chars)
- [CanGroup col](./can-group)
- [GroupDef col](./group-def)
- [GroupWidth col](./group-width)
- [GroupEmpty col](./group-empty)
- [GroupSole col](./group-sole)
- [GroupSingle col](./group-single)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
