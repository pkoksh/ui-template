---
KEY: setFixedBottom
KIND: method
PATH: funcs/core/set-fixed-bottom
ALIAS: sheet.setFixedBottom, setFixedBottom(), 데이터행을, 하단, 영역에, 고정시킵니다
ALIAS_EN: set, fixed, bottom
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/set-fixed-bottom
---
# setFixedBottom ***(method)***
> 데이터행을 하단 `Foot` 영역에 고정시킵니다.

> 맨 아래 행부터 `count`에 해당하는 숫자의 행 만큼 고정시킵니다.

> **제약: 해당 기능은 `SearchMode: 1,2`에서만 사용하실 수 있습니다.**

> **`DataMerge`와 함께 사용할 수 없고, 고정 행의 개수가 많아서 시트의 높이 보다 커지는 경우에는 기능이 제한 됩니다.**


### Syntax
```javascript
boolean setFixedBottom( count, render );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|count |`number`|선택|하단에 고정시킬 데이터행의 갯수|
|render |`boolean`|선택|즉시 화면 반영 여부
해당 기능을 `0(false)`로 사용했을 경우, 작업 마무리 시에 `rerender()`를 실행해야 화면에 반영 됩니다.
`0(false)`:반영 안함
`1(true)`:즉시 반영 (`default`)|

### Return Value
***boolean*** : 설정에 대한 결과

### Example
```javascript
// 맨 아래 데이터 행부터 시작해서 데이터행 4개를 하단에 고정한다.
sheet.setFixedBottom(4,1);
```

### Read More
- [setFixedTop method](./set-fixed-top)

### Since

|product|version|desc|
|---|---|---|
|core|8.1.0.23|기능 추가|
