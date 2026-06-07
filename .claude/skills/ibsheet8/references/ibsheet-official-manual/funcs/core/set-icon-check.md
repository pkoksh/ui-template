---
KEY: setIconCheck
KIND: method
PATH: funcs/core/set-icon-check
ALIAS: sheet.setIconCheck, setIconCheck(), 속성이, 셀에, 체크, 값을, 변경합니다
ALIAS_EN: set, icon, check, checkbox
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/set-icon-check
---
# setIconCheck ***(method)***
> `Icon`속성이 `Check`인 셀에 체크 값을 변경합니다.

### Syntax
```javascript
void setIconCheck( row, col, val );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|row |`object`|필수|[데이터 로우 객체](/docs/appx/row-object)|
|col |`string`|필수|열이름|
|val |`boolean`|선택|체크/체크해제 여부
`0(false)`:체크해제
`1(true)`:체크
`null`:Toggle (`default`)|

### Return Value
***none***

### Example
```javascript
//선택 셀에 Icon Check값을 언체크로 수정한다.
sheet.setIconCheck(sheet.getFocusedRow(), sheet.getFocusedCol(), 0);
```

### Read More

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
