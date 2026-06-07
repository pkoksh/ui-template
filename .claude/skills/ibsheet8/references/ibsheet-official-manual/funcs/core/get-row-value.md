---
KEY: getRowValue
KIND: method
PATH: funcs/core/get-row-value
ALIAS: sheet.getRowValue, getRowValue(), 특정, 데이터, 로우, 객체, 해당하는
ALIAS_EN: get, row, value, data
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/get-row-value
---
# getRowValue ***(method)***
> 특정 [데이터 로우 객체](/docs/appx/row-object)에 해당하는 값을 json 형식의 객체로 반환합니다.



### Syntax
```javascript
object getRowValue( row, saveExtraAttr, saveAttr );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|row|`object`|필수|[데이터 로우 객체](/docs/appx/row-object)|
|saveExtraAttr|`boolean`|선택|시트에 (col)[Name](/docs/props/col/name)으로 정의하지 않은 데이터가 [doSearch](/docs/funcs/core/do-search)나 [loadSearchData](/docs/funcs/core/load-search-data)함수를 통해 로드 된 경우, 함수 호출시 해당 데이터를 같이 추출할 지 여부.
로드 데이터 첫번째 행의 keyset을 기준으로 추출됨.
`0(false)`:시트에 (col)[Name](/docs/props/col/name)으로 정의 된 데이터만 추출 `(default)`
`1(true)`:시트에 (col)[Name](/docs/props/col/name)으로 정의 되지 않은 데이터도 추출|
|saveAttr|`string`|선택|각 셀의 속성값을 같이 추출하고자 하는 경우 Name+속성명 형식으로 설정
여러개 속성을 추출하고자 하는 경우 ","를 구분자로 작성
ex) "sNameColor,sNoCanEdit"|


### Return Value
***json 형식의 object***
```json
{ "ColName1":"12345","ColName2":"ABCDE" ...}
```

### Example
```javascript
var rowValue = sheet.getRowValue(sheet.getRowById("AR5"));
```

### Read More

- [getValue method](./get-value)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.7|기능 추가|
|core|8.1.0.32|`saveExtraAttr` 인자 추가|
|core|8.2.0.3|`saveAttr` 인자 추가|