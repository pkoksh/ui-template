---
KEY: setAttribute
KIND: method
PATH: funcs/core/set-attribute
ALIAS: sheet.setAttribute, setAttribute(), 특정, 셀에, 속성을, 설정합니다
ALIAS_EN: set, attribute
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/set-attribute
---
# setAttribute ***(method)***

> 특정 행,열,셀에 속성을 설정합니다.

> `row`를 `null`로 설정시 열에 대한 속성으로 설정됩니다.

> `col`을 `null`로 설정시 행에 대한 속성으로 설정됩니다.

> 모든 속성을 설정할 수 있는 것은 아니기 때문에 해당 속성에 대해 설정하는 함수가 있다면 그 함수를 사용하실 것을 권합니다.

> `Visible`, `Width`는 setAttribute보다 관련 함수 호출을 권장합니다.

>  - `hideCol`, `showCol`, `hideRow`, `setColWidth`

### Syntax
```javascript
void setAttribute( row, col, attr, val, render );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|row |`object`|선택|[데이터 로우 객체](/docs/appx/row-object)|
|col |`string`|선택|열이름|
|attr|`string`|필수|설정하고자 하는 속성명|
|val|`mixed`|필수|설정하고자 하는 속성 값|
|render|`boolean`|선택|즉시 화면 반영 여부
해당 기능을 `0(false)`로 사용했을 경우, 작업 마무리 시에 `rerender()`를 실행해야 화면에 반영 됩니다.
`0(false)`:반영 안함
`1(true)`:즉시 반영 (`default`)|

### Return Value
***none***

### Example
```javascript
//특정 셀에 배경색을 붉은색으로 변경
sheet.setAttribute(sheet.getFocusedRow(), sheet.getFocusedCol() ,"Color" ,"#FF0000" ,1);
//특정 열에 편집을 불가능하게 변경
sheet.setAttribute(null, "ColName", "CanEdit", 0, 1);
//특정행의 글자를 두껍게 변경
sheet.setAttribute({row:sheet.getRowById("AR20"), attr:"TextStyle", val:1, render:1});
```

### Read More
- [getAttribute method](./get-attribute)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
