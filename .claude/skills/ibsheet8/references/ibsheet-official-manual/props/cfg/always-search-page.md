---
KEY: alwaysSearchPage
KIND: config-property
PATH: props/cfg/always-search-page
ALIAS: 서버페이징, 방식, 데이터, 조회에서, 페이지가
ALIAS_EN: always, search, page, data
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/always-search-page
---
# !AlwaysSearchPage ***(cfg)***

> `SearchMode:4(서버페이징)` 방식 데이터 조회에서 페이지가 이동 될 때 항상 서버를 호출하는 기능입니다. 

> 실시간 데이터를 확인해야 하는 경우 이 기능을 사용하면 서버에 반영된 실시간 데이터를 조회할 수 있습니다.

> 해당 기능을 사용하면 `doSave` 와 같은 저장함수 호출 시 현재 조회된 페이지의 데이터만 반영 됩니다. `saveMode:3` 의 경우에는 제외

> `제약사항` [doSearchPaging](/docs/funcs/core/do-search-paging) 의 `cPage` 옵션과 함께 사용할 수 없습니다.


### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|기능 사용 안함 (`default`)|
|`1(true)`|페이지 이동될 때 항상 서버를 호출|


### Example
```javascript
options.Cfg = {
  AlwaysSearchPage: 1
}
```

### Read More
- [doSearchPaging](/docs/funcs/core/do-search-paging)
- [SearchMode](/docs/props/cfg/search-mode)

### Since

|product|version|desc|
|---|---|---|
|core|8.1.0.9|기능 추가|
|core|8.1.0.34|현재 보여지 페이지의 데이터만 조회, 저장되도록 기능 수정|
