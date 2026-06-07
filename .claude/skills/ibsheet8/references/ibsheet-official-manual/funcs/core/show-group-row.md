---
KEY: showGroupRow
KIND: method
PATH: funcs/core/show-group-row
ALIAS: sheet.showGroupRow, showGroupRow(), 그룹행을, 생성합니다
ALIAS_EN: show, group, row
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/show-group-row
---
# showGroupRow ***(method)***
> 그룹행을 생성합니다.

### Syntax
```javascript
void showGroupRow( cols, format );
```

### Parameters

|Name|Type|Required| Description |
|----------|-----|---|----|
|cols |`string or object`|선택|그룹핑 하고자 하는 컬럼. 단일로 설정할 경우 문자열로 설정하고, 여러개를 설정할 경우 배열로 설정합니다.|
|format |`string`|선택|그룹 기준 컬럼의 데이터 포맷을 설정합니다. 
 - {%s} : 해당 셀의 값 
 - - {%c} : 자식노드 개수|

### Return Value
***boolean*** : 설정 완료 여부

### Example
```javascript
// 그룹행을 생성합니다.
sheet.showGroupRow();

// 그룹행을 생성하고 sName 컬럼으로 그룹핑합니다.
sheet.showGroupRow("sName");

// 그룹행을 생성하고 sName, sPrice 컬럼으로 그룹핑합니다.
sheet.showGroupRow(["sName", "sPrice"]);

// 그룹행을 생성하고 그룹핑시 '{%s} <font color="gray">({%c}건)</font>' 포맷을 적용합니다.
sheet.showGroupRow(null, '{%s} <font color="gray">({%c}건)</font>');

// 그룹행을 생성하고, sName 컬럼으로 그룹핑하며, 그룹핑시 '{%s} <font color="gray">({%c}건)</font>' 포맷을 적용합니다.
sheet.showGroupRow("sName", '{%s} <font color="gray">({%c}건)</font>');
```

### Read More

### Since

|product|version|desc|
|---|---|---|
|core|8.3.0.9|기능 추가|
