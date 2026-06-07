---
KEY: showFixedRows
KIND: method
PATH: funcs/core/show-fixed-rows
ALIAS: sheet.showFixedRows, showFixedRows(), 행을, 생성합니다
ALIAS_EN: show, fixed, rows
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/show-fixed-rows
---
# showFixedRows ***(method)***

> `Head` 행, `Foot` 행을 생성합니다. 

> 인자로 전달하는 `Head,Foot` object 객체의 구조는 [시트 객체구조](/docs/appx/init-structure) 를 참고해주세요. 

> `object` 의 인자 중 `Kind` 를 통해 `Head` 혹은 `Foot` 을 생성할 수 있습니다.


### Syntax
```javascript
void showFixedRows( fixedobject );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|fixedobject |`object`|필수|object 객체 인자 중 `Kind` 필수 (`Foot` or `Head`)|


### Return Value
***boolean*** : `Head` 행 `Foot` 행 생성 여부 (잘못된 인자 값에 의해 수행되지 못하는 경우 `0(false)` 리턴)

### Example
```javascript
// 1. Foot 행 1개 생성
var obj1 = [{
      Kind : 'Foot', 
      id: "myFootRow", 
      "chk": {
            "Type": "Text",
            "Value": "",
            "CanEdit": 0,
            "CanFocus": 0
      },... }];
sheet.showFixedRows(obj1);

// 2. Head 행 1개, Foot 행 1개 생성
var obj2 = [{Kind : 'Head', ... },{Kind : 'Foot', ... }];
sheet.showFixedRows(obj2);
```

### Read More
- [시트 객체구조](/docs/appx/init-structure)

### Since

|product|version|desc|
|---|---|---|
|core|8.2.0.4|기능 추가|
