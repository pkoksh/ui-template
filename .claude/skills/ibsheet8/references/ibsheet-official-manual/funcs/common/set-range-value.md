---
KEY: setRangeValue
KIND: method
PATH: funcs/common/set-range-value
ALIAS: sheet.setRangeValue, setRangeValue(), 혹은, 이용하여, 범위, 내의, 값을
ALIAS_EN: set, range, value
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/common/set-range-value
---
# setRangeValue ***(method)***

> setValue, 혹은 setString를 이용하여 범위 내의 셀 값을 일괄적으로 변경합니다. 


### Syntax
```javascript
void setRangeValue( val, startRow, startCol, endRow, endCol, colSeparator, rowSeparator, type );
```

### Parameters

|Name|Type|Required|Description|
|----------|-----|---|----|
|val|`mixed`|선택|설정하고자 하는 값|
|startRow|`object`|선택|값 일괄 변경 시작 데이터 로우 객체|
|startCol|`object`|선택|값 일괄 변경 시작 열이름|
|endRow|`object`|선택|값 일괄 변경 종료 데이터 로우 객체|
|endCol|`object`|선택|값 일괄 변경 종료 열이름|
|colSeparator|`object`|선택|컬럼 구분자 사용시 사용할 컬럼 구분자|
|rowSeparator|`object`|선택|행 구분자 사용시 사용할 행 구분자|
|type|`object`|선택|setValue를 사용할지, setString을 사용할지 여부 1: setValue 사용 2: setString 사용|

### Return Value
***none***

### Example
```javascript
// AR1행 ~ AR3행, Col1 ~ Col2 열 범주 셀의 TextColor 값을 '사과'로 일괄 변경합니다.
sheet.setRangeValue("사과", sheet.getRowById("AR1"), "Col1", sheet.getRowById("AR3"), "Col2",);
```

### Read More

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
