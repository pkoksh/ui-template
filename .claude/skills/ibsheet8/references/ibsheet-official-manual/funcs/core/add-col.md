---
KEY: addCol
KIND: method
PATH: funcs/core/add-col
ALIAS: sheet.addCol, addCol(), 이미, 생성된, 시트에, 동적으로, 열을
ALIAS_EN: add, col
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/add-col
---
# addCol ***(method)***

> 이미 생성된 시트에 동적으로 열을 추가합니다. 

> 여러 컬럼을 `add` 할시 `render` 인자를 `false` 로 하여 작업 후에는 `rerender` 를 무조건 호출하셔야 합니다. `Formula` 계산 반영이 필요한 경우에는 `calculate` 를 호출해주셔야 계산이 반영됩니다.

### Syntax
```javascript
object addCol( name, section, pos, param, visible, render );
```

### Parameters
|Name|Type|Required|Description|
|----------|-----|---|----|
|name|`string`|필수|추가할 열이름|
|section|`number`|선택|추가될 영역
`0`:좌측 영역
`1`:가운데 영역 (`default`)
`2`:우측영역|
|pos|`number`|선택|section 내에 위치 (0부터 시작, -1입력시 우측 끝 열) (`default: 0`)|
|param|`object`|선택|열의 속성 (ex : `{Type:"Text", Header:"타이틀", Width:120, CanEdit:0}` )
|visible|`boolean`|선택|생성 후 화면에 `Visible` 여부
`0(false)`:감춤 (`default`)
`1(true)`:보임|
|render|`boolean`|선택|즉시 화면 반영 여부
해당 기능을 `0(false)`로 사용했을 경우, 작업 마무리 시에 `rerender()`를 실행해야 화면에 반영 됩니다.
`0(false)`:반영 안함
`1(true)`:즉시 반영 (`default`)|

### Return Value
***object*** : 생성된 열 객체(name 인자에 이미 존재하는 열이름을 입력하는 경우 `null` 이 리턴됨)

### Example
```javascript
// 가운데 영역 마지막 열으로 "Name:EXT_SUBSUM" 열을 추가
sheet.addCol( "EXT_SUBSUM", 1, -1, {Type:"Int",Header:"중간합계",Width:200,CanEdit:1,Color:"#DADADA"}, true );

// render 인자 false
for (var i = 0; i < 50; i++) {
  sheet.addCol( "EXT_SUBSUM" + i, 1, -1, {Type:"Int",Header:"중간합계",Width:200,CanEdit:1,Color:"#DADADA"}, true, false );
}

sheet.rerender();
```

### Read More
- [addRow method](./add-row)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|core|8.0.0.17|`render` 인자 추가|
