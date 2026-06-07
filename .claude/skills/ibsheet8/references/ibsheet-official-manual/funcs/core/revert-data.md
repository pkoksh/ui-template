---
KEY: revertData
KIND: method
PATH: funcs/core/revert-data
ALIAS: sheet.revertData, revertData(), 시트, 전체, 데이터를, 조회, 시점의
ALIAS_EN: revert, data, sheet, grid, all, total, search, query
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/revert-data
---
# revertData ***(method)***
> 시트 전체 데이터를 조회 시점의 값으로 변경합니다 


> **<mark>주의</mark> : 시트의 데이터 값만 변경하며 `Added`, `Changed`, `Deleted` 상태값을 제외한 행 속성, 열 속성, 셀 속성 등은 변경하지 않습니다**

> [reloadData](./reload-data)와 달리 [doSearch](./do-search), [loadSearchData](./load-search-data) 함수를 통해 조회된 데이터로 변경합니다

### Syntax
```javascript
void revertData( remainAddRow, sync );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|remainAddRow|`boolean`|선택|[addRow](./add-row)로 추가된 행을 남길지에 대한 여부
`0(false)`:추가된 행 모두 삭제 (`default`)
`1(true)`:추가된 행 유지|
|sync|`boolean`|선택|렌더링 작업을 동기로 처리 
`0(false)`:비동기 방식 (`default`)
`1(true)`:동기 방식|

### Return Value
***none***

### Example
```javascript
// 시트 전체 데이터(값,속성)를 처음 조회된 값으로 변경
sheet.revertData();

// 동기로 동작하도록 합니다.
sheet.revertData(null, true);
```

### Read More

- [revertRow method](./revert-row)
- [revertCell method](./revert-cell)
- [reloadData method](./reload-data)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.7|기능 추가|
|core|8.0.0.26|`sync` 인자 추가|
