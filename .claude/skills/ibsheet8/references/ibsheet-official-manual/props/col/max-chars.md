---
KEY: maxChars
KIND: column-property
PATH: props/col/max-chars
ALIAS: 그룹, 기준, 내에서, 내용의, 글자수를
ALIAS_EN: max, chars, group
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/max-chars
---
# !MaxChars ***(col)***
> 그룹 기준 열 내에서 셀 내용의 글자수를 기준으로 하위 노드를 나누어 보여주는 기능입니다.

> 가령 열에 "100120370" 와 같은 값이 있고, MaxChars:"3,6,9" 로 선언하면 실제 값은 다음과 같이 보여지게 됩니다.

> 보통 "회사코드, 부서코드, 팀코드" 와 같이 트리구조를 갖는 데이터를 하나의 셀에 넣어놓고 그룹지어 보고자 할때 유용합니다

> 셀 내용 안에 특정 문자를 기준으로 그룹을 생성하는 [GroupChar](./group-chart)도 참고하세요.

###
![MaxChars](/assets/imgs/maxChars.png "글자수를 기준으로 그룹지어 보기")
<!-- IMAGE: 스크린샷/예시 이미지 - MaxChars -->

[예시]


### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`string`|데이터를 나눌 글자수. (","를 구분자로 여러개로 구분 지을 수 있음)|

### Example
```javascript
//열의 글자수를 기준으로 그룹지어 본다.
options.Cols = [
    ...
    {Type: "Text", Name: "DEP3", Width: 100, MaxChars: "3,6,9", ...},
    ...
];
```

### Read More
- [GroupChar col](./group-char)
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
