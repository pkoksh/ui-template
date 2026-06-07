---
KEY: getUserOptions
KIND: method
PATH: funcs/core/get-user-options
ALIAS: sheet.getUserOptions, getUserOptions(), 시트, 초기화, 설정값을, 리턴합니다
ALIAS_EN: get, user, options, sheet, grid, initialize, init, reset
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/get-user-options
---
# getUserOptions ***(method)***

> 시트 초기화 설정값을 리턴합니다.

> 시트 생성시 [IBSheet.create({options})](/docx/static/create)으로 설정한 내용을 리턴합니다.

> [IBSheet.CommonOptions](/docx/static/common-options) 이나 [IBSheet.onBeforeCreate](on-before-create)를 통해 공통으로 적용받은 내용도 같이 리턴되나, 생성 후 추가하거나 수정한 내용은 리턴되지 않습니다.

> `mode`에 따라 리턴하는 설정값이 달리짐. 


### Syntax
```javascript
object getUserOptions( mode );
```

### Parameters
|Name|Type|Required| Description |
|----|----|--------|-------------|
|mode|`number`|선택|`0`:시트 생성시 설정한 옵션을 리턴 (`default`)
 `1`:엑셀 다이얼로그전용 옵션 리턴 (`mode: 0` 에서 `Cfg`에 `ZIndex` 변경, `CanSort: 0` 추가) 
 `2`:시트 생성시 설정한 옵션을 리턴하되 컬럼은 현재의 컬럼 정보를 리턴 (`mode: 0` 에서 컬럼은 현재 마지막 컬럼 정보를 가져옴.) 
 `3`:엑셀 다이얼로그 전용 옵션 리턴 (`mode: 2` 에서 `Cfg`에 `ZIndex` 변경, `CanSort: 0` 추가)|


### Return Value
***object*** : 시트 생성시 사용된 초기화(options) 내용

### Example
```javascript
//시트 초기화시 Cfg 설정 값의 일부 내용을 확인합니다.
var opts = sheet.getUserOptions( );
alert(opts.Cfg.CanEdit);

//시트 현재 컬럼의 정보를 확인합니다.
var opts = sheet.getUserOptions( 2 );
alert(opts.Cols);
```

### Read More


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|core|8.0.0.7|1,3 추가|
