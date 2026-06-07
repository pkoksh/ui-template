---
KEY: reload
KIND: method
PATH: funcs/core/reload
ALIAS: sheet.reload, reload(), 시트를, 처음, 생성했던, 상태로, 새롭게
ALIAS_EN: reload
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/reload
---
# reload ***(method)***
> 시트를 처음 생성했던 상태로 새롭게 생성합니다.

> 여기서 처음 상태란 [IBSheet.create()](/docs/static/create)를 통해 생성되는 시점으로, 이후에 수정거나 조회된 내용은 반영되지 않습니다.


> **<mark>주의</mark> : 시트를 초기 상태로 돌리는 동작이 아닌, 초기 상태의 시트를 재생성하는 동작입니다.**
### Syntax
```javascript
void reload( callback );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|callback|`function`|선택|`reload` 후, 호출할 콜백 함수 (`onRenderFirstFinish` 와 동일 시점)|


### Return Value
***none***

### Example
```javascript
// 시트를 처음 생성 상태로 다시 생성합니다.
sheet.reload();
```
```javascript
// 리로드 후, 첫 렌더링 발생 시점
sheet.reload(function (r) { r.sheet.disable(1); })
```

### Read More

- [reloadData method](./reload-data)
- [dispose method](./dispose)
- [create static](/docs/static/create)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|core|8.0.0.26|`callback` 기능 추가|