---
KEY: colorState
KIND: config-property
PATH: props/cfg/color-state
ALIAS: 편집가능, 여부, 입력, 수정, 삭제
ALIAS_EN: color, state, input, import, edit, modify, update, change
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/color-state
---
# ColorState ***(cfg)***

> 편집가능 여부, 입력/수정/삭제 상태 등과 관련하여 자동으로 표현되는 시트 데이터 영역의 배경색과 관련하여 사용여부를 설정합니다.

> 0으로 설정시 시트내에 상태나, 편집여부등에 따라 표현되는 배경색이 모두 제거되고, 설정값에 따라서 해당 기능에 대한 배경색이 표현됩니다.

> bit 연산 형태로 속성을 설정합니다. 가령 값으로 5를 설정시 1번옵션 + 4번 옵션에 대해 배경색을 표현하게 됩니다.

> 기본값(`default`)은 **`63`** 입니다.


### Type
`number`

### Options
|Value|Description|Class|
|-----|-----|---|
|`0`|상태에 따른 배경색 표현 안함.||
|`1`|수정된 **셀** 에 대한 배경색 표현|`.IBColorChangedCell`|
|`2`|입력/수정/삭제된 **행** 에 대한 배경색 표현|`.IBColorAdded`,`.IBColorChanged`,`.IBColorDeleted`|
|`4`|추가/삭제 된 **열** 에 대한 배경색 표현|`.IBColorAdded`,`.IBColorDeleted`|
|`8`|셀의 `CanEdit`, `CanFocus` 속성이 `false`인 경우에 대한 배경색 표현|`.IBColorReadOnly`,`.IBColorNoFocus`|
|`16`|셀의 값을 직접 수정이 불가능한 `Formula`(셀의 값을 계산하는 `Formula`)가 설정된 경우에 대한 배경색 표현|`.IBColorReadOnly`|
|`32`|오류가 있는 셀에 대한 배경색 표현|`.IBColorError`|

### Example
```javascript
options.Cfg = {
   "ColorState": 7 // 편집할 수 없는 셀의 배경색을 표현하지 않음
};
```

### Read More
- [CanEdit cell](/docs/props/cell/can-focus)
- [CanFocus cell](/docs/props/cell/can-focus)
- [Error cell](/docs/props/cell/error)
- [Added row](/docs/props/row/added)
- [Changed row](/docs/props/row/changed)
- [Deleted row](/docs/props/row/deleted)
- [CanEdit row](/docs/props/row/can-focus)
- [CanFocus row](/docs/props/row/can-focus)
- [CanFocus col](/docs/props/col/can-focus)
- [CanEdit col](/docs/props/col/can-focus)
- [CanEdit cfg](/docs/props/cfg/can-edit)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
