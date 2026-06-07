---
KEY: noDataMessage
KIND: config-property
PATH: props/cfg/no-data-message
ALIAS: 데이터로, 시트, 생성, 인자, 조회
ALIAS_EN: no, data, message, sheet, grid, search, query, fetch
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/no-data-message
---
# NoDataMessage ***(cfg)***

> 빈 데이터로 시트 생성(IBSheet.create의 data인자), 조회 함수를 이용한 조회시 **"조회된 데이터가 없습니다."** 라는 메세지 표시여부를 설정합니다. 


### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`0`|시트 생성, 조회 시 메세지 표시 안함.|
|`1`|시트 생성 시에만 메세지 표시|
|`2`|조회 시에만 메세지 표시 (`default`)|
|`3`|시트 생성, 조회 시 메세지 표시|


### Example
```javascript
options.Cfg = {
  NoDataMessage: 2,  // 조회 함수를 이용한 조회 시에만 메세지 표시
  ...
};
```

### Try it
- [Set to 3](https://jsfiddle.net/gh/get/library/pure/ibsheet/ibsheet8-manual-sample/tree/master/samples/properties/Cfg/NoDataMessage/)

### Read More
- [create static](/docs/static/create)
- [loadSearch method](/docs/funcs/core/load-search-data)
- [doSearch method](/docs/funcs/core/do-search)
- [doSearchPaging method](/docs/funcs/core/do-search-paging)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.6|기능 추가|
