---
KEY: setString
KIND: method
PATH: funcs/core/set-string
ALIAS: sheet.setString, setString(), 타입이, 셀에, 대해서, 포맷이, 적용된
ALIAS_EN: set, string
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/set-string
---
# setString ***(method)***
> 타입이 `Date`인 셀에 대해서 포맷이 적용된 날짜 문자열로 셀의 값을 수정합니다.

> [EnumKeys](/docs/props/cell/enum-keys)가 정의되어 있는 `Enum, Radio` 타입인 셀은 지정된 `EnumKeys`값으로 저장됩니다.


### Syntax
```javascript
void setString( row, col, val, render);
```

### Parameters


|Name|Type|Required| Description |
|----------|-----|---|----|
|row |`object`|필수|[데이터 로우 객체](/docs/appx/row-object)|
|col |`string`|필수|열이름|
|val |`string`|필수|입력값(셀 타입에 맞는 값) |
|render |`boolean`|선택|즉시 화면 반영 여부
해당 기능을 `0(false)`로 사용했을 경우, 작업 마무리 시에 `rerender()`를 실행해야 화면에 반영 됩니다.
`0(false)`:반영 안함
`1(true)`:즉시 반영 (`default`)|

### Return Value
***none***

### Example
```javascript
var r5 = sheet.getRowById("AR5");
//AR5 행에 값을 입력
sheet.setString( r5, "StartDate", "2016/12/23" );
```

### Read More

- [EnumKeys cell](/docs/props/cell/enum-keys)
- [getValue method](./get-value)
- [setValue method](./set-value)
- [getString method](./get-string)


### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
|core|8.0.0.3|Enum 타입, Radio 타입의 Enum의 값을 EnumKeys와 매칭하는 기능 추가|
