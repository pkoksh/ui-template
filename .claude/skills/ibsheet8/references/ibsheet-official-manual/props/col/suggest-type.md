---
KEY: suggestType
KIND: column-property
PATH: props/col/suggest-type
ALIAS: 속성, 사용과, 관련한, 다양한, 추가기능을
ALIAS_EN: suggest, type, property, attribute
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/suggest-type
---
# SuggestType ***(col)***

> [Suggest](./suggest)속성 사용과 관련한 다양한 추가기능을 설정합니다. 

> 여러 기능을  `","` 를 구분자로 하여 설정하실 수 있습니다.


### Type
`string`

### Options
|Value|Description|
|-----|-----|
|`Replace`|`Suggest` 메뉴가 보여질때, 키보드 방향키를 이용하여 커서를 메뉴로 이동하면 셀값이 변경됩니다.|
|`Start`|편집모드로 들어갈때 셀의 내용을 기준으로 `Suggest`메뉴를 보여줍니다.|
|`StartAll`|편집모드로 들어갈때 셀의 내용과 무관하게 빈 값("")에 대한 `Suggest`메뉴를 보여줍니다.
 해당 기능을 사용하면 `Start`는 사용할 수 없습니다.|
|`Empty`|셀 값이 비어있을때 모든 `Suggest`메뉴를 보여줍니다.|
|`All`|항상 모든 `Suggest`메뉴를 보여줍니다.|
|`Case`|대소문자를 구분하여 `Suggest`메뉴를 보여줍니다.|
|`Begin`|입력한 글자를 기준으로 `Suggest`메뉴의 아이템을 필터링할때,입력한 글자로 시작하는 아이템만 보여지게 됩니다.|
|`Search`|입력한 글자를 포함하는 모든 아이템을 보여줍니다.|
|`Complete`|`Suggest`메뉴의 리스트가 한개인 경우 자동으로 입력처리 합니다.|
|`IgnoreSpace`|`Suggest`메뉴의 리스트에서 `Space`로 값이 선택되지 않도록 합니다.|
|`Validate`|편집모드 종료 또는 셀 붙여넣기 시 셀의 값이 `Suggest`에 설정한 값과 일치하지 않으면 빈값으로 변경됩니다.|
<!--!
|`[비공개]` `Existing`|`Suggest` 메뉴 목록에 없는 값은 입력이 불가하게 끔 합니다.
현재는 한글에서 동작 문제가 있음(영어하고 숫자만 가능해서 일단 빼둠)|
!-->

### Example
```javascript
//Suggest기능 사용
options.Cols = [
    ...
    {
        Type: "Text",
        Suggest: "|싼타페 현대|포터2 현대|그랜저 현대|카니발 기아...",
        SuggestType: "Empty,Begin",
        Name: "CarName",
        Width: 120
    },
    ...
];
```

### Read More
- [Suggest col](./suggest)
- [SuggestMin col](./suggest-min)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|core|8.0.0.27|`IgnoreSpace` 기능 추가|
|core|8.3.0.1|`Validate` 기능 추가|