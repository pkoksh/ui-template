---
KEY: resetIconCheckTodo
KIND: method
PATH: funcs/core/reset-icon-check-todo
ALIAS: sheet.resetIconCheckTodo, resetIconCheckTodo(), 해당, 기능은, 버전, 이후로, 지원하지
ALIAS_EN: reset, icon, check, todo
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/reset-icon-check-todo
---
# !resetIconCheck ***(method)*** [`Deprecated`]

> 해당 기능은 8.0.0.0 버전 이후로 지원하지 않습니다.

> 8.2.x.x 버전 이후로 삭제됩니다.

<details>

> 트리열에 Icon속성이 "Check"인 경우 자식 셀에 체크 값을 부모셀에 반영한다는데.. 이게 뭔소린지.. 동작도 이상함.

> 쓸일 없다고 함.. 나중에 삭제 예정

### Syntax
```javascript
void resetIconCheck( row , col );
```

### Parameters


|Name|Type|Required| Description |
|---|---|---|---|
|row |`object`|필수|[데이터 로우 객체](/docs/appx/row-object)|
|col |`string`|필수|열이름|

### Return Value
***none***

### Example
```javascript
//선택 셀에 Icon Check값을 언체크로 수정한다.
sheet.resetChecked(sheet.getFocusedRow(),sheet.getFocusedCol());
```

### Read More
- [setIconCheck method](./set-icon-check)

</details>

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|core|8.0.0.0|`Deprecated`|
