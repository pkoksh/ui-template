---
KEY: canEdit
KIND: config-property
PATH: props/cfg/can-edit
ALIAS: 전체적인, 시트의, 편집, 가능여부를, 설정합니다
ALIAS_EN: can, edit, editable
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/can-edit
---
# CanEdit ***(cfg)***

> 전체적인 시트의 편집 가능여부를 설정합니다.

> 전체 편집이 가능한 경우에만 셀별 편집 가능여부 설정이 동작합니다. 

> 필터, 그룹행의 경우 해당 속성의 영향을 **받지 않습니다**. 

> `CanEdit: 4`를 제외하고는 편집불가 모드 사용시 `Enum` 컬럼의 아이콘과 `Date` 타입 컬럼의 달력 아이콘을 표현하지 않습니다. 

> `Cfg`를 이용하여 편집불가 사용시에는 우선순위가 가장 높아짐으로, `Cell, Row, Col`에 `CanEdit: 0`은 먹히지 않습니다. 

> `Button` 타입의 버튼 클릭 시 동작, `File` 타입의 아이콘 표시 여부에 대해서는 해당 속성의 영향을 **`받지 않습니다`**. ([Disabled col](/docs/props/col/disabled) 통하여 제어 가능.) 

### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|전체 편집 불가능|
|`1`|전체 편집 가능 (`default`)|
|`3`|전체 편집 불가능(편집 가능 불가능에 대한 배경색을 표시하지 않음)
[ColorState (cfg)](/docs/props/cfg/color-state)와 관계없이 배경색을 표현하지 않음.
|`4`|전체 편집 불가능 + 배경색 표현안함 + 아이콘 표시|

### Example
```javascript
options.Cfg = {
   "CanEdit":0
};
```

### Read More
- [ColorState cfg](/docs/props/cfg/color-state)
- [CanEdit row](/docs/props/row/can-edit)
- [CanEdit col](/docs/props/col/can-edit)
- [CanEdit cell](/docs/props/cell/can-edit)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|core|8.0.0.12|`CanEdit: 4` 추가|