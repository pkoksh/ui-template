---
KEY: endEdit
KIND: method
PATH: funcs/core/end-edit
ALIAS: sheet.endEdit, endEdit(), 셀의, 편집을, 종료합니다
ALIAS_EN: end, edit
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/end-edit
---
# endEdit ***(method)***

> 셀의 편집을 종료합니다.

> 편집 중이던 내용이 메모리에 저장되고 편집 상태가 종료됩니다.
> 호출시 [onEndEdit](/docs/events/on-end-edit)이벤트가 발생합니다.

### Syntax
```javascript
mixed endEdit(save);
```

### Parameters

|Name|Type|Required|Description|
|----------|-----|---|----|
|save|`boolean`|선택|편집 종료시 현재 값을 반영할지 여부를 설정합니다.
`0(false)`:수정 중인 데이터를 반영하지 않고 편집 상태를 종료 (`default`)
`1(true)`:수정 중인 데이터를 반영하며 편집 상태를 종료|

### Return Value
***mixed***

|returnValue|Description|
|---|---|
|`null`|편집중이지 않은 경우|
|`0(false)`|기존과 동일한 값이어서 내용 변경이 없는 경우|
|`1(true)`|정상적으로 편집중인 값이 반영됨|
|`-1`|수정한 값에 문제가 있어 편집이 종료되지 못한 경우(잘못된 날짜 입력 등)|


### Example
```javascript
//편집 종료
sheet.endEdit(1);
```

### Read More

- [onEndEdit event](/docs/events/on-end-edit)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
