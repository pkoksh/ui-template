---
KEY: deleteSheet
KIND: method
PATH: funcs/core/delete-sheet
ALIAS: sheet.deleteSheet, deleteSheet(), 스프레드, 시트에서, 탭을, 삭제합니다
ALIAS_EN: delete, sheet
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/delete-sheet
---
# !deleteSheet ***(method)***

> 스프레드 시트에서 탭을 삭제합니다.


### Syntax
```javascript
void deleteSheet( name );
```

### Parameters
|Name|Type|Required|Description|
|----------|-----|---|----|
|name|`string`|필수|삭제할 탭의 이름|

### Return Value
***none***

### Example
```javascript
// "시트3" 탭을 삭제합니다.
sheet.deleteSheet("시트3");
```

### Read More
- [UseSpreadSheet cfg](/docs/props/cfg/use-spread-sheet)


### Since

|product|version|desc|
|---|---|---|
|core|8.1.0.6|기능 추가|
