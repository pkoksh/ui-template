---
KEY: maxPages
KIND: config-property
PATH: props/cfg/max-pages
ALIAS: 경우, 시트가, 번에, 갖고, 있는
ALIAS_EN: max, pages
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/max-pages
---
# MaxPages ***(cfg)***

> `SearchMode: 2` 인 경우, 시트가 한 번에 갖고 있는 페이지 수를 설정합니다.

> 페이지 수가 클수록 많은 DOM을 갖게 됨으로 무거워 질 수 있습니다.

> 페이지 수가 너무 적으면 스크롤을 움직일 때 마다 빈번하게 데이터 로딩이 일어날 수 있습니다.

### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|갖고있는 페이지 수 (`default: 1`)|

### Example
```javascript
options.Cfg ={
    MaxPages: 5,        //5개 페이지만 갖고 있음
};
```

### Read More
- [PageLength cfg](/docs/props/cfg/page-length)
- [SearchMode cfg](/docs/props/cfg/search-mode)
- [updateClientPaging method](/docs/funcs/core/update-client-paging)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
