---
KEY: getColIndex
KIND: method
PATH: funcs/core/get-col-index
ALIAS: sheet.getColIndex, getColIndex(), 열이름에, 확인합니다
ALIAS_EN: get, col, index
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/get-col-index
---
# getColIndex ***(method)***

> 열이름에 대한 `index`를 확인합니다.

> `index`는 `1`부터 시작합니다.

> 해당 함수는 기본적으로 보여지는 열을 기준으로 확인합니다. 

> `includeHideCol` 또는 `Cfg: GetColWithHide` 를  설정하여 `Visible` 관계없이 가져옵니다. 

> 우선 순위는 `includeHideCol` > `GetColWithHide` 임으로, `GetColWithHide`를 `true`로 설정 하여도 `includeHideCol`을 `false`로 설정시에는 보여지는 열을 기준으로 동작하게 할 수 있습니다.



### Syntax
```javascript
string getColIndex( col, includeHideCol );
```

### Parameters
|Name|Type|Required|Description|
|----------|-----|---|----|
|col|`string`|필수|열이름
|includeHideCol|`boolean`|선택|`true` 설정시 `Col.Visible` 관계없이 인덱스를 추출함
`0(false)`:숨김 열을 계산 대상으로 포함하지 않음 (`default`)
`1(true)`:숨김 열도 계산 대상으로 포함|


### Return Value
***number*** : 열이름이 위치한 index

### Example
```javascript
//열이름이 EMP_NM인 열의 index
var fcol = sheet.getColIndex("EMP_NM");
```

### Read More
- [getColByIndex method](./get-col-by-index)
- [GetColWithHide cfg](/docs/props/cfg/get-col-with-hide)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|core|8.0.0.3|`name` 인자명 변경 -> `col`, 다른 API와 통일|
|core|8.0.0.11|`includeHideCol` 인자 추가|
