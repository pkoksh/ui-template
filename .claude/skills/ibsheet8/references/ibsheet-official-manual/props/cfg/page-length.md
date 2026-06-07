---
KEY: pageLength
KIND: config-property
PATH: props/cfg/page-length
ALIAS: 페이지, 표시할, 개수를, 설정합니다
ALIAS_EN: page, length
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/page-length
---
# PageLength ***(cfg)***

> 한 페이지(`Page`)에 표시할 행(`Row`) 의 개수를 설정합니다. 

> `SearchMode: 1 (클라이언트 페이징)`로 조회시 한 페이지에 표시되는 데이터 행수로 처리됩니다.

> `SearchMode: 2 (LazyLoad)` 조회시 한 번에 조회되는 데이터는 `PageLength` 와 `MaxPages`(default 1) 로 계산된 데이터만큼 조회됩니다.

> `SearchMode: 1,2,4,5`로 조회시 PageLength의 값이 너무 크면 성능이 떨어집니다. 20~100개 설정 권장합니다.


> **<mark>주의</mark> : 서버페이징(SearchMode: 3,4,5) 사용 시 PageLength 값과 서버에서 받아오는 데이터의 갯수를 반드시 맞춰주셔야 합니다.(PageLength 설정하지 않았을 경우 기본값은 20 입니다)**


### Type
`number`

### Options
|Value|Description|
|-----|-----|
|`number`|한 페이지 단위의 행수 (`default: 20`)|


### Example
```javascript
options = {
    Cfg :{
      PageLength: 30,  // 한페이지당 표시할 행수
      MaxPages: 5      // 렌더링될 페이지 수를 설정
    }
};
```

### Read More
- [MaxPages cfg](/docs/props/cfg/max-pages)
- [goToPage method](/docs/funcs/core/go-to-page)
- [updateClientPaging method](/docs/funcs/core/update-client-paging)
- [updatePageLength method](/docs/funcs/core/update-page-length)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
