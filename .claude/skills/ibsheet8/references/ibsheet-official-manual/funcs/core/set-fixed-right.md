---
KEY: setFixedRight
KIND: method
PATH: funcs/core/set-fixed-right
ALIAS: sheet.setFixedRight, setFixedRight(), 지정한, 숫자만큼의, 열을, 시트의, 우측
ALIAS_EN: set, fixed, right
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/set-fixed-right
---
# setFixedRight ***(method)***
> 지정한 숫자만큼의 열을 시트의 우측(`Section:2`)에 위치시킵니다.(틀고정)

> 지정한 열 수에는 `Hidden` 열도 포함하여 고정시킵니다.


###
![틀고정](/assets/imgs/setFixedCols1.png)
<!-- IMAGE: 스크린샷/예시 이미지 - 틀고정 -->


### Syntax
```javascript
array setFixedRight( count, reMerge, sync );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|count |`number`|선택|오른쪽 영역에 고정할 열 개수
(설정을 안하거나 `0`으로 설정시, 해당영역에 열이 모두 center 영역으로 포함됨)|
|reMerge |`boolean`|선택|컬럼 이동 후 다시 기존에 설정했던 값과 동일하게 [머지](./set-auto-merge) 다시 적용 여부
`0(false)`:컬럼 이동 후 다시 기존에 설정해던 값과 동일하게 머지 하지 않음 (`default`)
`1(true)`:컬럼 이동 후 다시 기존에 설정해던 값과 동일하게 머지|
|sync|`boolean`|선택|렌더링 작업을 동기로 처리
`0(false)`:비동기 방식 (`default`)
`1(true)`:동기 방식|

### Return Value
***boolean*** : 처리결과 (변동이 없으면 `false`)

### Example
```javascript
//우측 2개 열을 고정한다.
sheet.setFixedRight(2);
```

### Read More
- [setFixedLeft method](./set-fixed-left)
- [setFixedCols method](./set-fixed-cols)
- [setColWidth method](./set-col-width)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|core|8.1.0.16|`sync` 기능 추가|
