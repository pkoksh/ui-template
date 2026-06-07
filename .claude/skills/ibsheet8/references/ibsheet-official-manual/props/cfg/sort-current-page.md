---
KEY: sortCurrentPage
KIND: config-property
PATH: props/cfg/sort-current-page
ALIAS: 서버, 페이징, 사용, 현재, 보여지는
ALIAS_EN: sort, current, page, server, ajax
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/sort-current-page
---
# SortCurrentPage ***(cfg)***

> 서버 페이징 사용 시([SearchMode](./search-mode): 4, 5) 현재 보여지는 페이지에 대해서만 정렬할지 여부를 설정합니다.

### Type
`boolean`

### Options
|Value|Description|
|---|---|
|`0(false)`|Sort 정보를 서버에 보내고, 결과를 조회합니다. (`default`)|
|`1(true)`|Sort 정보를 서버에 보내지 않고, 현재 보여지는 페이지에 대해서만 정렬합니다.|

### Example
```javascript
options.Cfg = {
    SortCurrentPage: true
};
```

### Read More

- [SearchMode cfg](./search-mode)
- [doSearchPaging method](/docs/funcs/core/do-search-paging)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
