---
KEY: setFixedTop
KIND: method
PATH: funcs/core/set-fixed-top
ALIAS: sheet.setFixedTop, setFixedTop(), 데이터행을, 상단에, 고정시킵니다
ALIAS_EN: set, fixed, top
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/set-fixed-top
---
# setFixedTop ***(method)***
> 데이터행을 상단에 고정시킵니다.

> **제약: `SearchMode: 0 or 3`의 경우 해당 기능을 사용할 수 없습니다.**

> **제약: `DataMerge` 와 함께 사용할 수 없고 시트의 데이터행이 `최소 4개의 행 이상`이어야 합니다.**

### Syntax
```javascript
boolean setFixedTop( count, render );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|count |`number`|선택|상단에 고정시킬 데이터행의 갯수|
|render |`boolean`|선택|즉시 화면 반영 여부
해당 기능을 `0(false)`로 사용했을 경우, 작업 마무리 시에 `rerender()`를 실행해야 화면에 반영 됩니다.
`0(false)`:반영 안함
`1(true)`:즉시 반영 (`default`)|

### Return Value
***boolean*** : 설정에 대한 결과

### Example
```javascript
// 헤더행을 제외한 데이터행 4개를 상단에 고정한다.
sheet.setFixedTop(4,1);
```

### Read More
- [setFixedBottom method](./set-fixed-bottom)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|core|8.0.0.13|`render` 인자 default 변경|
