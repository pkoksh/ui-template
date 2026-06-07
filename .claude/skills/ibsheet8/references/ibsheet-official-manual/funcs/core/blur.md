---
KEY: blur
KIND: method
PATH: funcs/core/blur
ALIAS: sheet.blur, blur(), 시트에, 포커스를, 해제합니다
ALIAS_EN: blur
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/blur
---
# blur ***(method)***
> 시트에 포커스를 해제합니다.

> 시트에 버튼을 통해 layer 팝업을 띄우는 경우, 시트 측에 포커스를 해제해야만 layer 팝업 내에서 원활하게 포커스를 이동할 수 있습니다.

### Syntax
```javascript
boolean blur( mode );
```

### Parameters
|Name|Type|Required|Description|
|----------|-----|---|----|
|mode|`number`|선택| 시트 내부 셀에 대한 포커스를 해제할지와 시트에 대한 포커스도 해제할지 여부를 설정합니다.
`0`:모두 해제 (`default`)
`1`:시트 내부 셀에 대한 포커스만 해제
`2`:시트에 대한 포커스만 해제|



### Return Value
***boolean*** : 정상적으로 포커스가 해제된 경우 `true`, 포커스 해제에 실패한 경우 `false`를 리턴

### Example
```javascript
//layer팝업 오픈 전에 현재 시트의 포커스 해제(셀 포커스는 유지)
sheet.blur(2);
dialog.dialog( "open" );
```

### Read More
- [focus method](./focus)
### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
