---
KEY: hasSheet
KIND: static-member
PATH: static/has-sheet
ALIAS: 특정, 아이디를, 가진, 시트가, 있는지
ALIAS_EN: has, sheet
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/static/has-sheet
---
# hasSheet ***(static)***

> 특정 아이디를 가진 시트가 있는지 여부를 체크합니다.
> 해당 아이디의 시트가 있다면 true를 반환하고, 그렇지 않을 경우에는 false를 반환합니다.

### Syntax
```javascript
object IBSheet.hasSheet(id);
```

### Parameters
|Name|Type|Required|Description|
|----------|-----|---|----|
|id|`string`|시트가 존재하는지 검색할 아이디|


### Return Value
***boolean***

### Example
```javascript
  IBSheet.hasSheet("sheet"); // "sheet"라는 아이디를 가진 시트가 있는지 확인합니다.
```
### Read More

### Since

|product|version|desc|
|---|---|---|
|core|8.2.0.18|기능 추가|
