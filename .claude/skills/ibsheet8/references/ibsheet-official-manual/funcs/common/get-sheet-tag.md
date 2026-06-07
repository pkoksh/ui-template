---
KEY: getSheetTag
KIND: method
PATH: funcs/common/get-sheet-tag
ALIAS: sheet.getSheetTag, getSheetTag(), 시트의, 태그를, 반환합니다, 기본으로, 태그
ALIAS_EN: get, sheet, tag
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/common/get-sheet-tag
---
# getSheetTag ***(method)***

> 시트의 태그를 반환합니다. 기본으로 div 태그, 인자 사용시 table 태그를 반환할 수 있습니다. 


### Syntax
```javascript
void getSheetTag( tableTag );
```

### Parameters

|Name|Type|Required|Description|
|----------|-----|---|----|
|tableTag|`boolean`|선택|시트의 테이블 태그를 가져올지 여부|

### Return Value
***element*** 시트 태그


### Example
```javascript
// 소계에 설정된 옵션을 배열 형태로 반환합니다.
sheet.getSheetTag();
```

### Read More

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
