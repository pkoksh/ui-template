---
KEY: setFixedCols
KIND: method
PATH: funcs/core/set-fixed-cols
ALIAS: sheet.setFixedCols, setFixedCols(), 시트의, 좌우측, 포함될, 수를, 설정합니다
ALIAS_EN: set, fixed, cols
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/set-fixed-cols
---
# setFixedCols ***(method)***
> 시트의 좌우측 `section`에 포함될 열 수를 설정합니다.

> 설정시 감춰진 열도 포함하여 고정시킵니다.

> **초기화시 `LeftCols`에 `SEQ열`을 생성하지 않았다 하더라도 `SEQ열`은 `Hidden` 상태로 존재하고 있습니다.

> 따라서 `setFixedCols` 사용시 `left`인자에는 항상 `SEQ열`을 포함하여 계산해야 합니다.**

> 좌측이나 우측 `section`의 컬럼 개수만 수정하고자 할때는 [setFixedLeft](./set-fixed-left)나 [setFixedRight](./set-fixed-right) 함수를 사용하세요.

###
![틀고정](/assets/imgs/setFixedCols1.png)
<!-- IMAGE: 스크린샷/예시 이미지 - 틀고정 -->

### Syntax
```javascript
array setFixedCols( left, right, reMerge, sync );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|left |`number`|선택|왼쪽 영역의 열 개수
(설정을 안하거나 `0`으로 설정시, 해당영역에 열이 모두 center 영역으로 포함됨)|
|right|`number`|선택|우측 영역의 열 개수
(설정을 안하거나 `0`으로 설정시, 해당영역에 열이 모두 center 영역으로 포함됨)|
|reMerge |`boolean`|선택|컬럼 이동 후 다시 기존에 설정했던 값과 동일하게 [머지](./set-auto-merge) 다시 적용 여부
`0(false)`:컬럼 이동 후 다시 기존에 설정해던 값과 동일하게 머지 하지 않음 (`default`)
`1(true)`:컬럼 이동 후 다시 기존에 설정해던 값과 동일하게 머지|
|sync|`boolean`|선택|렌더링 작업을 동기로 처리
`0(false)`:비동기 방식 (`default`)
`1(true)`:동기 방식|

### Return Value
***array[boolean, boolean]*** : left, right 설정에 대한 각각의 결과

### Example
```javascript
//좌측에 4개 우측에 1개 열을 고정한다.
sheet.setFixedCols(4,1);
```

### Read More
- [setFixedLeft method](./set-fixed-left)
- [setFixedRight method](./set-fixed-right)
- [setColWidth method](./set-col-width)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|core|8.1.0.16|`sync` 기능 추가|
