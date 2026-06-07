---
KEY: setRangeAttribute
KIND: method
PATH: funcs/common/set-range-attribute
ALIAS: sheet.setRangeAttribute, setRangeAttribute(), 이용하여, 범위, 내의, 속성, 값을
ALIAS_EN: set, range, attribute, property
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/common/set-range-attribute
---
# setRangeAttribute ***(method)***

> setAttribute를 이용하여 범위 내의 속성 값을 일괄적으로 설정합니다. 


### Syntax
```javascript
void setRangeAttribute( startRow, startCol, endRow, endCol, attr, val );
```

### Parameters

|Name|Type|Required|Description|
|----------|-----|---|----|
|startRow|`object`|선택|속성값 일괄 설정 시작 데이터 로우 객체|
|startCol|`string`|선택|속성값 일괄 설정 시작 열이름|
|endRow|`object`|선택|속성값 일괄 설정 종료 데이터 로우 객체|
|endCol|`string`|선택|속성값 일괄 설정 종료 열이름|
|attr|`string`|선택|설정하고자 하는 속성명|
|val|`string`|선택|설정하고자 하는 속성 값|

### Return Value
***none***

### Example
```javascript
// AR1행 ~ AR2행, Col1 ~ Col2 열 범주 셀의 TextColor 값을 blue로 일괄 변경합니다.
sheet.setRangeAttribute(sheet.getRowById("AR1"), "Col1", sheet.getRowById("AR3"), "Col2", "TextColor", "blue");
```

### Read More

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
