---
KEY: getCellStyle
KIND: method
PATH: funcs/core/get-cell-style
ALIAS: sheet.getCellStyle, getCellStyle(), 대체, 가능한, 동작이므로, 비공개, 처리합니다
ALIAS_EN: get, cell, style
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/get-cell-style
---
# !getCellStyle ***(method)***

> **<mark>`getAttribute`로 대체 가능한 동작이므로 비공개 처리합니다</mark>**

> 특정 셀에 실제로 적용된 `style` 속성 값을 확인합니다.

> 설정했지만 반영되지 않은 값은 리턴되지 않습니다.

### Syntax
```javascript
string getCellStyle( row, col, styleAttr );
```

### Parameters

|Name|Type|Required|Description|
|----------|-----|---|----|
|row |`object`|필수|[데이터 로우 객체](/docs/appx/row-object)|
|col |`string`|필수|열이름|
|styleAttr|`string`|필수|확인하고 싶은 style 속성값
`'Color'(배경색)`, `'TextColor'(텍스트의 컬러)`, `'TextSize'(텍스트 크기)`, `'TextStyle'(텍스트의 스타일)`, `'TextFamily'(텍스트 폰트)`, `'Align'(정렬)` |

### Return Value
***string*** : 셀의 스타일 속성 값

### Example
```javascript
//셀의 글자색을 확인한다.
var fc = sheet.getCellStyle( sheet.getRowById("AR66"), "CUST_CD", "TextColor" );
```

### Read More
- [getAttribute method](./get-attribute)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|core|8.0.0.3|`attr` 인자명 변경 -> `styleAttr` , 다른 API와 통일|
