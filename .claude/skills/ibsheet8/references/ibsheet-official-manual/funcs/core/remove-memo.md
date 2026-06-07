---
KEY: removeMemo
KIND: method
PATH: funcs/core/remove-memo
ALIAS: sheet.removeMemo, removeMemo(), 특정, 헤더, 셀에, 저장된, 메모를
ALIAS_EN: remove, memo, header
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/remove-memo
---
# removeMemo ***(method)***

> 특정 헤더 셀에 저장된 메모를 삭제합니다.

> [메모 기능](/docs/props/cfg/memo-id)을 통하여 설정된 메모를 삭제합니다.

### Syntax
```javascript
boolean removeMemo( row , col );
```

### Parameters
|Name|Type|Required|Description|
|----------|-----|---|----|
|row|`object`|필수|[데이터 로우 객체](/docs/appx/row-object)|
|col|`string`|필수|열이름


### Return Value
***boolean*** : 메모 삭제 성공여부 (메모가 정상적으로 삭제되었으면 true, 그렇지 않을 경우 false 리턴)

### Example
```javascript
// 특정 헤더 셀에 저장된 메모를 삭제한다.
sheet.removeMemo(sheet.getHeaderRows()[0], "sCorp");
```

### Read More
- [MemoId cfg](/docs/props/cfg/memo-id)
- [showMemoDialog method](./show-memo-dialog)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.19|기능 추가|
