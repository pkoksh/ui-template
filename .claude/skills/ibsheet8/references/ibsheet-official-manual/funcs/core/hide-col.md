---
KEY: hideCol
KIND: method
PATH: funcs/core/hide-col
ALIAS: sheet.hideCol, hideCol(), 특정, 열을, 감춥니다
ALIAS_EN: hide, col
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/hide-col
---
# hideCol ***(method)***
> 특정 열을 감춥니다. 

> 여러 컬럼을 `hide` 할시 `render` 인자를 `false` 로 하여 작업 후에는 `rerender` 를 무조건 호출하셔야 합니다.

### Syntax
```javascript
void hideCol( col, userHidden, merge, render );
```

### Parameters


|Name|Type|Required| Description |
|----------|-----|---|----|
|col|`string`|필수|감추고자 하는 열이름|
|userHidden|`boolean`|선택|화면 개발자가 아닌 시트 사용자가 감추고자 하는 열 인지 여부
개인화(*사용자가 열의 위치, 너비, 보임여부를 저장했다가 해당페이지 접속시 설정했던 모습으로 보여주는 기능*)기능 구현시 사용 됩니다.
이 속성값을 `1(true)`로 하면 해당 열은 사용자가 감추었다는 의미로 내부적으로 해당 열에 대한 플래그가 생성되고 [saveCurrentInfo()](./save-current-info)함수 호출시 저장되었다가 추후에 페이지에 재 접속시 시트에 반영되어 보여지게 됩니다.
`0(false)`:사용자가 감추고자 하는 열이 아님 (`default`)
`1(true)`:사용자가 감추고자 하는 열|
|merge|`boolean`|선택| 열을 숨기면서 자동 머지합니다.
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
//CPT_NM 열을 감춥니다.
sheet.hideCol( "CPT_NM" );


//AMT 열을 감추면서 사용자 감춤여부를 설정합니다.
sheet.hideCol( "AMT" , 1 );

// render 인자를 사용합니다.
sheet.hideCol( { col: "AMT", render: false } );
sheet.rerender();

```

### Read More
- [getCurrentInfo method](./get-current-info)
- [saveCurrentInfo method](./save-current-info)
- [showCol method](./show-col)
- [onShowColumn event](/docs/events/on-show-column)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|core|8.0.0.6|`merge` 인자 추가|
|core|8.0.0.17|`render` 인자 추가|