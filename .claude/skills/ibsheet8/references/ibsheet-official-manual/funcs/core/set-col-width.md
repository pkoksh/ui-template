---
KEY: setColWidth
KIND: method
PATH: funcs/core/set-col-width
ALIAS: sheet.setColWidth, setColWidth(), 열의, 너비를, 가감으로, 변경합니다
ALIAS_EN: set, col, width
SOURCE_URL: https://docs.ibsheet.com/ibsheet/v8/manual/#docs/funcs/core/set-col-width
---
# setColWidth ***(method)***
> 열의 너비를 가감으로 변경합니다.

> `dx` 인자의 값에 따라 열의 너비를 늘리거나 줄입니다. 

> 정적인 크기로 열의 너비를 변경하고자 하실 때는 [(col)Width](/docs/props/col/width)를 setAttribute로 수정하시면 됩니다.

> 멀티레코드([MultiRecord](/docs/props/cfg/multi-record)) 시트 더미컬럼에는 `setColWidth`가 동작하지 않습니다.

### Syntax
```javascript
void setColWidth( col, dx );
```

### Parameters
|Name|Type|Required| Description |
|----------|-----|---|----|
|col |`string`|필수|열이름|
|dx |`number`|선택|열 너비 가감 정도 (양수 설정시 늘어나고, 음수 설정시 설정값 만큼 줄어듬)
설정을 하지 않는 경우 열을 보이거나 감춤(`Visible:0`)|


### Return Value
***none***

### Example
```javascript
//cardNumber 열의 너비를 -100픽셀 줄인다.
sheet.setColWidth("cardNumber", -100);
```

### Read More
- [getAttribute method](./get-attribute)
- [setAttribute method](./set-attribute)

### Since

|product|version|desc|
|---|---|---|
|core|8.0.0.0|기능 추가|
