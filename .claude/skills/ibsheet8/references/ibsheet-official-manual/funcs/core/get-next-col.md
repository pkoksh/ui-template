---
KEY: getNextCol
KIND: method
PATH: funcs/core/get-next-col
ALIAS: sheet.getNextCol, getNextCol(), 지정한, 컬럼의, 다음, 컬럼명을, 리턴합니다
ALIAS_EN: get, next, col
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/get-next-col
---
# getNextCol ***(method)***

> 지정한 컬럼의 다음 컬럼명을 리턴합니다. 

> 해당 함수는 기본적으로 보여지는 열을 기준으로 확인합니다. 

> `includeHideCol` 또는 `Cfg: GetColWithHide` 를  설정하여 `Visible` 관계없이 가져옵니다. 

> 우선 순위는 `includeHideCol` > `GetColWithHide` 임으로, `GetColWithHide`를 `true`로 설정 하여도 `includeHideCol`을 `false`로 설정시에는 보여지는 열을 기준으로 동작하게 할 수 있습니다.

### Syntax
```javascript
string getNextCol( col, includeHideCol );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|col|`string`|필수|열이름
|includeHideCol|`boolean`|선택숨김 열을 기준에 포함 여부
`0(false)`:숨김 열을 계산 대상으로 포함하지 않음 (`default`)
`1(true)`:숨김 열도 계산 대상으로 포함|


### Return Value
***string*** : 열 이름

### Example
```javascript
//다음 컬럼명을 리턴합니다.
var fcol = sheet.getNextCol(sheet.getFocusedCol());
```

### Read More
- [getPrevCol method](./get-prev-col)
- [GetColWithHide cfg](/docs/props/cfg/get-col-with-hide)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.7|기능 추가|
|core|8.0.0.11|`includeHideCol` 인자 추가|
