---
KEY: boolIcon
KIND: column-property
PATH: props/col/bool-icon
ALIAS: 열에서, 체크, 언체크, 아이콘을, 다른
ALIAS_EN: bool, icon, check, checkbox
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/bool-icon
---
# BoolIcon ***(col)***
> [Type](/docs/appx/type)이 `Bool`인 열에서 체크/언체크 아이콘을 다른 이미지나 Html 객체로 설정합니다.

> 임의의 이미지를 체크박스 아이콘으로 사용하고자 하는 경우에는, 언체크 이미지와 체크 이미지를 첫글자를 구분자로 하여 연결된 문자열로 설정하시면 됩니다.
(ex:"|Off.gif|On.gif")
>
> 임의의 이미지를 체크박스 아이콘으로 사용할 때, 해당 열내의 셀이 편집불가([CanEdit](./can-edit))인 경우가 있다면 편집 불가일때의 이미지까지해서 총 4개의 이미지를 설정하시면 됩니다.
(ex:"|Off.gif|On.gif|OffReadOnly.gif|OnReadOnly.gif")
>
> 여러개의 라디오 아이콘을 사용하고자 하는 경우에는 언체크 이미지와 체크이미지를 이어서 설정하시면 됩니다.
(ex:"|Off1.gif|On1.gif|Off2.gif|On2.gif|Off3.gif|On3.gif")
>
> 그 외에 일반적인 숫자형식으로 아래 `Options`에서와 같이 기능을 설정하실 수 있습니다.
### Type
mixed( `string` \| `number`)

### Options
|Value|Description|
|-----|-----|
|`0`|기본적인 내장 체크박스 이미지를 사용 (`default`)
|`1`|내장 라디오 이미지를 사용|
|`2`|무조건 middle 정렬되는 체크박스 이미지를 사용(**성능이 0번 옵션보다 느림**)|
|`3`|무조건 middle 정렬되는 라디오 이미지를 사용(**성능이 1번 옵션보다 느림**)|
|`4`|\<input type="checkbox">객체를 사용(**IE에서 성능이 좋음**)|
|`5`|\<input type="radio">객체를 사용(**IE에서 성능이 좋음**)|
|`6`|div객체를 이용하여 체크박스를 구현(**IE 호환성 보기에서 성능이 좋음**)|

### Example
```javascript
//html객체로 체크박스 표현
options.Cols = [
    ...
    {Type: "bool", Name: "accept", BoolIcon: 4 ...},
    ...
];
```

### Read More
- [BoolIconWidth col](./bool-icon-width)
- [Type appendix](/docs/appx/type)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
