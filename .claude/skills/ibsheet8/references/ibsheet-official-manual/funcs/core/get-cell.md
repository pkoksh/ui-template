---
KEY: getCell
KIND: method
PATH: funcs/core/get-cell
ALIAS: sheet.getCell, getCell(), 특정, 셀의, 태그, 가져옵니다
ALIAS_EN: get, cell
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/get-cell
---
# getCell ***(method)***

> 특정 셀의 Html 태그(td)를 가져옵니다.

> `javascript`의 `getBoundingClientRect()` 메서드를 이용하여 셀의 크기와 현재 뷰포트에서의 상대적인 위치 정보를 제공하는 `DOMRect` 객체를 반환 받을 수 있습니다.

> 태그 내에 style을 수정할 수는 있으나 태그 자체를 수정하는 것을 불가능합니다.

> [SearchMode](/docs/props/cfg/search-mode): 0(FastLoad) 에서는 사용하실 수 없습니다.

### Syntax
```javascript
object getCell( row, col );
```

### Parameters

|Name|Type|Required|Description|
|----------|-----|---|----|
|row |`object`|필수|[데이터 로우 객체](/docs/appx/row-object)|
|col |`string`|필수|열이름|

### Return Value
***object*** : Html TD 태그 객체

### Example
```javascript
// 특정 셀에 설정된 클레스에 Black_Bold 클레스를 추가한다.
var ctd = sheet.getCell( sheet.getRowById("AR15"), "EMT_XL" );
ctd.className = ctd.className+" Black_Bold";

// 특정 셀의 현재 뷰포트 기준 top 값을 구합니다.
var top = ctd.getBoundingClientRect().top;
```

### Read More


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
