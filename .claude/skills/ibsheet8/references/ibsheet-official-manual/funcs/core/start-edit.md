---
KEY: startEdit
KIND: method
PATH: funcs/core/start-edit
ALIAS: sheet.startEdit, startEdit(), 셀의, 편집모드로, 들어값니다
ALIAS_EN: start, edit
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/start-edit
---
# startEdit ***(method)***
> 셀의 편집모드로 들어값니다.

> 지정한 셀에 커서가 깜빡이는 편집상태가 활성화 됩니다.
> `row, col` 인자를 설정하지 않으면 포커스가 있는 셀이 편집상태로 변경됩니다.

### Syntax
```javascript
void startEdit( row, col, empty, valid );
```

### Parameters
|Name|Type|Required|Description|
|----------|-----|---|----|
|row |`object`|선택|편집할 [데이터 로우 객체](/docs/appx/row-object)|
|col |`string`|선택|편집할 열이름|
|empty |`boolean`|선택|편집 시작시 기존 셀의 값을 지울지 여부
`0(false)`:편집 시작 시 기존 셀의 값 유지 (`default`)
`1(true)`:편집 시작시 기존 셀의 값 제거|
|vaild |`boolean`|선택|셀의 편집 가능여부 확인
(실제로 셀이 편집상태가 활성화 되지 않고, 편집상태로 활성화가 가능/불가능 여부를 확인해서 리턴. 이미 활성화 되어 있는 경우 `0(false)`를 리턴)
`0(false)`:셀의 편집 가능여부 확인 안함 (`default`)
`1(true)`:셀의 편집 가능여부 확인 사용|

### Return Value
***none***

### Example
```javascript
//편집 시작
sheet.startEdit({ empty:1 });
```

### Read More

- [endEdit method](./end-edit)
- [onStartEdit event](/docs/events/on-start-edit)
- [onShowEdit event](/docs/events/on-show-edit)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
