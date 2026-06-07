---
KEY: withCredentials
KIND: config-property
PATH: props/cfg/with-credentials
ALIAS: 사용시, 내부, 통신, 모듈, 동작에
ALIAS_EN: with, credentials
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/with-credentials
---
# WithCredentials ***(cfg)***

> [doSearch](/docs/funcs/core/do-search), [doSearchPaging](/docs/funcs/core/do-search-paging), [doSave](/docs/funcs/core/do-save) 사용시 내부 Ajax 통신 모듈 동작에 대해서 [withCredentials](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/withCredentials) 옵션을 설정합니다. 

> `SearchMode: 4` 서버페이징 기능 사용시에도 해당 옵션이 설정됩니다.

### Type
`boolean`

### Options
|Value|Description|
|-----|-----|
|`0(false)`|내부 Ajax 통신 모듈 사용시 withCredentials 옵션 사용 안함 (`default`)|
|`1(true)`|내부 Ajax 통신 모듈 사용시 withCredentials 옵션 사용|

### Example
```javascript
options.Cfg = {
    WithCredentials: true // 내부 Ajax 통신 모듈 사용시 `withCredentials` 옵션을 true로 설정.
};
```

### Read More
- [doSearch method](/docs/funcs/core/do-search)
- [doSearchPaging method](/docs/funcs/core/do-search-paging)
- [doSave method](/docs/funcs/core/do-save)

### Since

|product|version|desc|
|---|---|---|
|core|8.1.0.28|기능 추가|
