---
KEY: showCol
KIND: method
PATH: funcs/core/show-col
ALIAS: sheet.showCol, showCol(), 감췄던, 열을, 보이게
ALIAS_EN: show, col
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/show-col
---
# showCol ***(method)***
> 감췄던 열을 보이게 합니다.

> 시트 생성시 `options.Cols = [{Visible:0}];`으로 생성된 열은 최초로 보여질 때 시간이 걸릴 수 있습니다. 

> 여러 컬럼을 `show` 할시 `render` 인자를 `false` 로 하여 작업 후에는 `rerender` 를 무조건 호출하셔야 합니다.

### Syntax
```javascript
void showCol( col, merge, render );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|col |`string`|선택|보여줄 열이름
**속성값을 설정하지 않는 경우, [hideCol()](./hide-col)함수에서 `userHidden:1`을 설정해 감춘 열만 모두 보여지게 됩니다.**|
|merge|`boolean`|선택| 열을 보여주면서 자동 머지합니다.
 많은 데이터가 있는 시트에서 실행 시 느려질 수 있습니다.
`0(false)`:병합 실행 안함 (`default`)
`1(true)`:병합 실행|
|render|`boolean`|선택|즉시 화면 반영 여부
해당 기능을 `0(false)`로 사용했을 경우, 작업 마무리 시에 `rerender()`를 실행해야 화면에 반영 됩니다.
`0(false)`:반영 안함
`1(true)`:즉시 반영 (`default`)|


### Return Value
***none***

### Example
```javascript
// 감춰진 "CPT_NM" 열을 보이게 한다.
sheet.showCol( "CPT_NM" );

// `render` 인자를 `false` 로 하여 사용합니다.
sheet.showCol( "CPT_NM", false, false );
// 반드시 rerender 를 하셔야 합니다.
sheet.rerender();
```

### Read More

- [hideCol method](./hide-col)
- [onShowCol event](/docs/events/on-show-col)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|core|8.0.0.6|`merge` 인자 추가|
|core|8.0.0.17|`render` 인자 추가|