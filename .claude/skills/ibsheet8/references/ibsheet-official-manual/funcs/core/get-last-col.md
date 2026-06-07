---
KEY: getLastCol
KIND: method
PATH: funcs/core/get-last-col
ALIAS: sheet.getLastCol, getLastCol(), 우측, 열이름을, 확인합니다
ALIAS_EN: get, last, col
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/get-last-col
---
# getLastCol ***(method)***

> 최 우측 열이름을 확인합니다.

> section을 통해 특정 영역의 최 우측 열을 확인할 수도 있습니다.

> 해당 함수는 기본적으로 보여지는 열을 기준으로 확인합니다. 

> `includeHideCol` 또는 `Cfg: GetColWithHide` 를  설정하여 `Visible` 관계없이 가져옵니다. 

> 우선 순위는 `includeHideCol` > `GetColWithHide` 임으로, `GetColWithHide`를 `true`로 설정 하여도 `includeHideCol`을 `false`로 설정시에는 보여지는 열을 기준으로 동작하게 할 수 있습니다.


### Syntax
```javascript
string getLastCol( section, includeHideCol );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|section|`number`|선택|틀고정 기준 영역 지정
`0`:좌측 (RightCols(우측), Cols(가운데) 정보가 없을 경우 `default`)
`1`:가운데 (RightCols(우측) 정보가 없을 경우 `default`)
`2`:우측 (`default`)|
|includeHideCol|`boolean`|선택|`true` 설정시 `Col.Visible` 관계없이 콜을 추출함
`0(false)`:숨김 열을 계산 대상으로 포함하지 않음 (`default`)
`1(true)`:숨김 열도 계산 대상으로 포함|

### Return Value
***string*** : 우측에 위치한 열이름

### Example
```javascript
//최 우측의 열이름을 확인한다.
var lcol = sheet.getLastCol();
```

### Read More
- [getFirstCol method](./get-first-col)
- [GetColWithHide cfg](/docs/props/cfg/get-col-with-hide)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|core|8.0.0.11|`includeHideCol` 인자 추가|
