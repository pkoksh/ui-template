---
KEY: getPrevCol
KIND: method
PATH: funcs/core/get-prev-col
ALIAS: sheet.getPrevCol, getPrevCol(), 지정한, 열의, 바로, 앞에, 위치한
ALIAS_EN: get, prev, col
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/get-prev-col
---
# getPrevCol ***(method)***
> 지정한 열의 바로 앞에 위치한 열을 리턴합니다.

> 지정한 열이 첫번째 열인 경우 `null`이 리턴됩니다. 

> 해당 함수는 기본적으로 보여지는 열을 기준으로 확인합니다. 

> `includeHideCol` 또는 `Cfg: GetColWithHide` 를  설정하여 `Visible` 관계없이 가져옵니다. 

> 우선 순위는 `includeHideCol` > `GetColWithHide` 임으로, `GetColWithHide`를 `true`로 설정 하여도 `includeHideCol`을 `false`로 설정시에는 보여지는 열을 기준으로 동작하게 할 수 있습니다.


### Syntax
```javascript
string getPrevCol( col, includeHideCol );
```

### Parameters
|Name|Type|Required|Description|
|----------|-----|---|----|
|col|`string`|필수|열이름
|includeHideCol|`boolean`|선택|숨김 열을 기준에 포함 여부
`0(false)`:숨김 열을 계산 대상으로 포함하지 않음 (`default`)
`1(true)`:숨김 열도 계산 대상으로 포함|

### Return Value
***string*** : 열 이름

### Example
```javascript
//3번째 index의 열의 앞 열을 확인.
var col = sheet.getColByIndex(3);
var prevCol = sheet.getPrevCol(col);
```

### Read More
- [getNextCol method](./get-next-col)
- [GetColWithHide cfg](/docs/props/cfg/get-col-with-hide)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.7|기능 추가|
|core|8.0.0.11|`includeHideCol` 인자 추가|
