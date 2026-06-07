---
KEY: addSheet
KIND: method
PATH: funcs/core/add-sheet
ALIAS: sheet.addSheet, addSheet(), 스프레드, 시트에서, 신규, 탭을, 추가합니다
ALIAS_EN: add, sheet
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/add-sheet
---
# !addSheet ***(method)***

> 스프레드 시트에서 신규 탭을 추가합니다.


### Syntax
```javascript
boolean addSheet( name, callback );
```

### Parameters
|Name|Type|Required|Description|
|----------|-----|---|----|
|name|`string`|선택|추가할 탭의 이름 (`default: 메세지 파일(ko.js 등) NewSheet 값`)|
|callback|`function`|선택|호출 할 콜백 함수|


### Return Value
***boolean*** : 탭 생성 여부

### Example
```javascript
// 신규 탭을 생성합니다.
sheet.addSheet();
```

### Read More
- [UseSpreadSheet cfg](/docs/props/cfg/use-spread-sheet)
- [loadSheet method](./load-sheet)


### Since

|product|version|desc|
|---|---|---|
|core|8.1.0.6|기능 추가|
|core|8.1.0.8|`name`, `callback` 기능 추가|
