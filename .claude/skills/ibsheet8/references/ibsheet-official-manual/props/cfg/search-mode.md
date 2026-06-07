---
KEY: searchMode
KIND: config-property
PATH: props/cfg/search-mode
ALIAS: 시트의, 데이터, 조회, 모드를, 설정합니다
ALIAS_EN: search, mode, data, query, fetch, load, retrieve
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/props/cfg/search-mode
---
# SearchMode ***(cfg)***

> 시트의 데이터 조회 모드를 설정합니다.



### Type
`number`

### Options
|Value|Mode|Description|
|-----|-----|------|
|`0`|**FastLoad 모드 (가상스크롤 처리 방식)**|`IBSheet8`의 FastLoad 모드(SearchMode: 0)는 가상 스크롤 기반으로, 사용자가 세로 스크롤시 보이는 영역의 데이터만 즉시 갱신합니다.
이로 인해 사용자는 스크롤과 동시에 화면의 끊김 없이 행의 데이터를 바로 확인할 수 있습니다.
해당 기능을 사용시 각 행의 높이는 모두 동일해야 하며, [(Appendix)기능에 제약사항](/docs/appx/fastload-constraints)이 있습니다.
 데이터행의 높이가 일정하지 않다면 [(Cfg)AutoRowHeight](./auto-row-height)를 설정하시기 바랍니다.|
|`1`|**ClientPaging** |전체 데이터를 조회하고 [(Cfg)PageLength](./page-length)속성 설정값만큼 페이징 처리 후 페이지 네비게이션을 통해 보여주는 기능입니다.
[(Method)updateClientPaging](/docs/funcs/core/update-client-paging) 함수를 이용해서 동적으로 페이지의 개수를 변경하고 재계산할 수 있습니다. 
 페이지 네비게이션은 [InfoRowConfig](/docs/props/cfg/info-row-config)에서 사용할 수 있습니다.

**<mark>주의</mark> : `(Method) makeSubTotal` 지원하지 않습니다.**|
|`2`|**LazyLoad (default)**|전체 데이터를 조회 하고 [(Cfg)PageLength](./page-length)속성 설정값 단위로 스크롤 위치에 따라 데이터를 화면에 표시하는 기능입니다.|
|`3`|**ScrollAppend**|[(Cfg)PageLength](./page-length)에 지정된 개수만큼 한 페이지씩 조회하여 화면에 표시하는 기능입니다.
조회는 반드시 [(Method)doSearchPaging](/docs/funcs/core/do-search-paging)함수를 통해 수행해야 합니다.
사용자가 세로 스크롤을 하단까지 내릴 경우, [(Method)doSearchPaging](/docs/funcs/core/do-search-paging)에서 호출한 URL을 다시 요청하여 다음 페이지 데이터를 기존 데이터 아래 추가(Append) 합니다.
서버는 시트로 부터 넘어오는 페이지 정보(ibpage=2,3,4...)에 따라 페이징 쿼리를 구성하여 각 페이지별 데이터를 리턴해야 합니다.
조회 데이터에 **Total**(전체 record 수) 속성이 포함되어 있어야 합니다.
**Total**값과 누적 데이터 수가 같아지면 더 이상 서버 호출은 발생하지 않습니다.
한번 조회한 페이지는 재요청없이 재사용 됩니다.
`Sort`, `Filter`, `엑셀 다운로드` 등은 조회한 데이터 안에서만 동작 합니다. 

 **<mark>주의</mark>** : `Type:Lines, Img`나 `Wrap:1` 과 같이 데이터 행의 높이가 일정하지 않은 속성은 사용할 수 없습니다.
 `(Col) FormulaRow` 사용 할 수 없습니다.
`(Method) makeSubTotal` 지원하지 않습니다.
PageLength 값과 서버에서 받아오는 데이터의 갯수를 반드시 동일하게 설정해야 합니다.**|
|`4`|**ServerPaging**|[(Cfg)PageLength](./page-length)에 지정된 개수만큼 한 페이지씩 조회하여 화면에 표시하는 기능입니다.
조회는 반드시 [(Method)doSearchPaging](/docs/funcs/core/do-search-paging)함수를 통해 수행해야 합니다.
[InfoRowConfig](/docs/props/cfg/info-row-config)를 사용해 페이지 네비게이션 UI를 표시할 수 있습니다.
페이지 번호 변경시 [(Method)doSearchPaging](/docs/funcs/core/do-search-paging)이 호출한 URL을 다시 요청하여 해당 페이지 데이터를 표시합니다.
서버는 시트로 부터 넘어오는 페이지 정보(ibpage=2,3,4...)에 따라 페이징 쿼리를 구성하여 각 페이지별 데이터를 리턴해야 합니다.
조회 데이터에 **Total**(전체 record 수) 속성이 포함되어 있어야 합니다.
한번 조회한 페이지는 서버를 다시 호출하지 않습니다.
`Filter`, `엑셀 다운로드` 등은 조회한 데이터 안에서만 동작 합니다.
`Sort`는 [SortCurrentPage](./sort-current-page)에 의해서 동작합니다.

 **<mark>주의</mark> : `(Col) FormulaRow` 사용 할 수 없습니다.
`(Method) makeSubTotal` 지원하지 않습니다.
PageLength 값과 서버에서 받아오는 데이터의 갯수를 반드시 동일하게 설정해야 합니다.**
|`5`|**ServerPaging2**| 동작 방식은 `ServerPaging`과 동일하지만, 페이지 이동시 항상 서버를 호출하여 데이터를 조회하는 기능입니다.
`Filter`, `엑셀 다운로드` 등은 PageLength 만큼 동작 합니다.
`Sort`는 [SortCurrentPage](./sort-current-page)에 의해서 동작합니다.
[(Method)updatePageLength](/docs/funcs/core/update-page-length) 를 통해 동적으로 페이지 행의 개수를 변경하실 수 있습니다.

 **<mark>주의</mark> : `(Col) FormulaRow` 사용 할 수 없습니다.
`(Method) makeSubTotal` 지원하지 않습니다.
PageLength 값과 서버에서 받아오는 데이터의 갯수를 반드시 동일하게 설정해야 합니다.**|</br>
### Example
```javascript
options.Cfg = {SearchMode: 0, ...};
```

### Read More
- [AutoRowHeight cfg](./auto-row-height)
- [InfoRowConfig cfg](./info-row-config)
- [PageLength cfg](./page-length)
- [doSearchPaging method](/docs/funcs/core/do-search-paging)
- [updateClientPaging method](/docs/funcs/core/update-client-paging)
- [updatePageLength method](/docs/funcs/core/update-page-length)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|core|8.1.0.54|`ServerPaging2` 추가|