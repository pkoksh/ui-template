---
KEY: updateClientPaging
KIND: method
PATH: funcs/core/update-client-paging
ALIAS: sheet.updateClientPaging, updateClientPaging(), 클라이언트, 페이징, 페이지에, 표시할, 행의
ALIAS_EN: update, client, paging
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/update-client-paging
---
# updateClientPaging ***(method)***

> 클라이언트 페이징(`(Cfg)SearchMode: 1`)일 때 한 페이지에 표시할 행의 수를 사용자가 동적으로 변경할 수 있습니다.

### Syntax
```javascript
boolean updateClientPaging( length, render );
```

### Parameters
|Name|Type|Required|Description|
|----------|-----|---|----|
|length|`number`|필수|한 페이지에 표시할 행의 수|
|render|`boolean`|선택|즉시 화면 반영 여부
해당 기능을 `0(false)`로 사용했을 경우, 작업 마무리 시에 `rerender()`를 실행해야 화면에 반영 됩니다.
`0(false)`:반영 안함
`1(true)`:즉시 반영 (`default`)|


### Return Value
***boolean***

### Example
```javascript
// 한 화면에 보여질 행의 수를 30개로 업데이트 합니다.
sheet.updateClientPaging(30);
```

### Read More
- [SearchMode cfg](/docs/props/cfg/search-mode)
- [PageLength cfg](/docs/props/cfg/page-length)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
