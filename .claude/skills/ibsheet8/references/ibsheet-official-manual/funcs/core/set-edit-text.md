---
KEY: setEditText
KIND: method
PATH: funcs/core/set-edit-text
ALIAS: sheet.setEditText, setEditText(), 사용자가, 셀을, 더블, 클릭하여, 편집모드로
ALIAS_EN: set, edit, text
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/set-edit-text
---
# setEditText ***(method)***

> 사용자가 셀을 더블 클릭하여 편집모드로 들어갔을 때 편집중인 데이터를 변경 합니다. 

> 컬럼 타입에 맞게 value 인자를 전달해야 합니다.

### Syntax
```javascript
string setEditText(value);
```

### Parameters

|Name|Type|Required|Description|
|----------|-----|---|----|
|value|`string or number`|필수|변경하려는 문자열 혹은 숫자|


### Return Value
***boolean*** : 처리 여부

### Example
```javascript
// 현재 편집 중인 데이터를 변경합니다.
sheet.setEditText("변경 데이터");
```

### Read More


### Since

|product|version|desc|
|---|---|---|
|core|8.1.0.91|기능 추가|
