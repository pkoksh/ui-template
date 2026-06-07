---
KEY: canEdit
KIND: column-property
PATH: props/col/can-edit
ALIAS: 열에, 편집, 가능, 여부를, 설정합니다
ALIAS_EN: can, edit, editable
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/col/can-edit
---
# CanEdit ***(col)***

> 열에 대한 편집 가능 여부를 설정합니다.

> 이 속성은 기본값은 `1`인데, `0`설정시 `Cell, Row, Col`순으로 우선 순위를 갖습니다.

> 가령 `Cell`에서 `0`으로 설정시 `Row`나 `Col`에서 `1`을 설정해도 해당 셀은 편집이 불가능해 집니다. 

> `CanEdit: 4`를 제외하고는 편집불가 모드 사용시 `Enum` 컬럼의 아이콘과 `Date` 타입 컬럼의 달력 아이콘을 표현하지 않습니다. 

> `Cfg`를 이용하여 편집불가 사용시에는 우선순위가 가장 높아짐으로, `Cell, Row, Col`에 `CanEdit: 0`은 먹히지 않습니다. 

> `Button` 타입의 버튼 클릭 시 동작, `File` 타입의 아이콘 표시 여부에 대해서는 해당 속성의 영향을 **`받지 않습니다`**. ([Disabled col](/docs/props/col/disabled) 통하여 제어 가능.) 


### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|열을 편집 불가(읽기 전용)으로 설정합니다.
![CanEdit](/assets/imgs/canEdit0.png "CanEdit")
<!-- IMAGE: 스크린샷/예시 이미지 - CanEdit -->|
|`1`|열을 편집 가능으로 설정합니다.
![CanEdit](/assets/imgs/canEdit1.png "CanEdit")
<!-- IMAGE: 스크린샷/예시 이미지 - CanEdit -->|
|`2`|열의 내용은 편집 불가하지만, 편집 미리보기를 제공하여 셀의 모든 내용을 확인할 수 있습니다.
![CanEdit](/assets/imgs/canEdit2.png "CanEdit")
<!-- IMAGE: 스크린샷/예시 이미지 - CanEdit -->|
|`3`|열 편집 불가능(편집 가능 불가능에 대한 배경색을 표시하지 않음)
[ColorState (cfg)](/docs/props/cfg/color-state)와 관계없이 배경색을 표현하지 않음.
|`4`|열 편집 불가능 + 배경색 표현안함 + 아이콘표시|


### Example
```javascript
//AMT 열에 대해 편집불가로 설정
options.Cols = [
    ...
    {Type: "Int", CanEdit: 0, Name: "AMT", Width: 120 ...},
    ...
];
```

### Read More
- [CanEdit row](/docs/props/row/can-edit)
- [CanEdit cell](/docs/props/cell/can-edit)
- [getCanEdit method](/docs/funcs/core/get-can-edit)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|core|8.0.0.12|`CanEdit: 3, 4` 추가|