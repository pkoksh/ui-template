---
KEY: loadSheet
KIND: method
PATH: funcs/core/load-sheet
ALIAS: sheet.loadSheet, loadSheet(), 스프레드, 시트에서, 탭을, 선택하여, 로드합니다
ALIAS_EN: load, sheet
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/load-sheet
---
# !loadSheet ***(method)***

> 스프레드 시트에서 탭을 선택하여 로드합니다.


### Syntax
```javascript
boolean loadSheet( name, save, callback );
```

### Parameters
|Name|Type|Required|Description|
|----------|-----|---|----|
|name|`string`|필수|로드할 탭의 이름|
|save|`boolean`|선택|편집 중인 탭의 내용을 저장 여부
`0(false)`:편집 중인 탭의 내용을 저장 시키지 않음 (`default`)
`1(true)`:편집 중인 탭의 내용을 저장 시킴|
|callback|`function`|선택|호출 할 콜백 함수|

### Return Value
***boolean***

### Example
```javascript
// 편집 중인 탭의 내용을 저장한 후, "시트3" 탭을 로드합니다.
sheet.loadSheet("시트3", 1);
```

### Read More
- [UseSpreadSheet cfg](/docs/props/cfg/use-spread-sheet)
- [addSheet method](./add-sheet)


### Since

|product|version|desc|
|---|---|---|
|core|8.1.0.6|기능 추가|
|core|8.1.0.8|`callback` 기능 추가|
