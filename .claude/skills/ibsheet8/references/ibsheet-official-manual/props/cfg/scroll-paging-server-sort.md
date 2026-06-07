---
KEY: scrollPagingServerSort
KIND: config-property
PATH: props/cfg/scroll-paging-server-sort
ALIAS: 스크롤, 페이징, 사용, 사용하며, 서버
ALIAS_EN: scroll, paging, server, sort, ajax
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/scroll-paging-server-sort
---
# ScrollPagingServerSort ***(cfg)***

> 스크롤 페이징 사용 시([SearchMode](./search-mode): 3)을 사용하며 서버 소팅을 사용하고 싶은 경우 설정하는 옵션입니다. 설정시, 소팅할 때 소팅 정보를 서버에 보내고, 결과를 조회합니다.

### Type
`boolean`

### Options
|Value|Description|
|---|---|
|`0(false)`|Sort 정보를 서버에 보내지 않고, 현재 보여지는 페이지에 대해서만 정렬합니다. (`default`)|
|`1(true)`|Sort 정보를 서버에 보내고, 결과를 조회합니다.|

### Example
```javascript
options.Cfg = {
    ScrollPagingServerSort: true // 소팅시 소팅 정보를 서버에 보내고, 결과를 조회합니다.
};
```

### Read More

- [SearchMode cfg](./search-mode)

### Since

|product|version|desc|
|---|---|---|
|core|8.2.0.6|기능 추가|
